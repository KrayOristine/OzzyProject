import * as ts from "typescript";
import * as path from "path";
import { MatchPath, createMatchPath } from "tsconfig-paths";
import * as tsu from "tsutils";
import { loadObjectData, saveObjectData } from "./objectData";
import { loadProjectConfig, loadTSConfig } from "./utils";

/*
 * This is the built-in constant folding/propagation of the new version
 * of warcraft 3 template
 *
 * This plugin features:
 *  + Automatic conversion of FourCC into object id (both single string and array of string)
 *  + Automatic calculation of simple math values
 *  + Replace Math property access into it values
 */

interface ComputeOptions {
  cfPrecision: number;
}

let compilerOptions: import('./utils').CompilerOptions;
let absoluteBaseUrl: string;
let matchPathFunc: MatchPath;
let objData = loadObjectData(loadTSConfig().compilerOptions.plugins[0].mapDir);

function isPathRelative(path: string) {
  return path.startsWith("./") || path.startsWith("../");
};

function getModuleSpecifier(specifier: ts.Expression) {
  return specifier.getText().substring(specifier.getLeadingTriviaWidth(), specifier.getWidth() - specifier.getLeadingTriviaWidth() * 2);
}

function addCurrentWorkingPath(baseUrl: ts.CompilerOptions["baseUrl"]){
  if (!baseUrl) {
    return true;
  }
  const worksOnUnix = baseUrl[0] === "/";
  const worksOnWindows = new RegExp("^[A-Z]:/").test(baseUrl);
  return !(worksOnUnix || worksOnWindows);
}

function tryParse(expression: string): number | undefined {
  try {
    return eval(expression);
  } catch {
    return undefined;
  }
}

function tryParseFunc(funcExpression: string, funcArgs: any) {
  try {
    return eval(funcExpression)(funcArgs);
  } catch (ex){
    return undefined;
  }
}

function calculateFourCC(str: string){
  let sum = 0;
  let char = str.replace(' ', '').slice(1, -1);
  if (char.length > 4) char = char.slice(0, 3);
  for (let i = 0; i < char.length; i++){
    let num = char[char.length - i - 1].charCodeAt(0);
    sum += num * Math.pow(2, i * 8);
  }
  return sum;
}

function calculatePureCC(str: string) {
  let sum = 0;
  let char = str.slice(1, -1);
  for (let i = 0; i < char.length; i++){
    let num = char[char.length - i - 1].charCodeAt(0);
    sum += num * Math.pow(2, i * 8);
  }
  return sum;
}

function createObjectLiteral(object: object): ts.ObjectLiteralExpression {
  const props = Object.keys(object)
    .filter(key => object[key] !== undefined)
    .map(key => ts.factory.createPropertyAssignment(key, createExpression(object[key])))
  return ts.factory.createObjectLiteralExpression(props, true)
}

function createExpression(thing: any): ts.Expression {
  if (thing === undefined) {
    return ts.factory.createVoidZero();
  } else if (thing === null) {
    return ts.factory.createNull();
  } else if (typeof thing === "boolean") {
    return thing == false ? ts.factory.createFalse() : ts.factory.createTrue();
  } else if (typeof thing === "number") {
    return ts.factory.createNumericLiteral(String(thing));
  } else if (typeof thing === "string") {
    return ts.factory.createStringLiteral(thing);
  } else if (Array.isArray(thing)) {
    return ts.factory.createArrayLiteralExpression(thing.map(element => createExpression(element)), true);
  } else if (typeof thing === "object") {
    return createObjectLiteral(thing);
  } else {
    throw new Error(`war3-transformer: Don't know how to turn a ${thing} into an AST expression.`);
  }
}

function isAccessingMathStatic(thing: ts.PropertyAccessExpression){
  return (tsu.isIdentifier(thing.name) && tsu.isIdentifier(thing.expression) && thing.expression.escapedText === "Math")
}

const fourCCAction = {
  FourCC: function(node: ts.CallExpression){
    const args = node.arguments[0];
    if (args.kind != ts.SyntaxKind.StringLiteral) return undefined;

    return ts.factory.createNumericLiteral(calculateFourCC(args.getFullText()));
  },
  FourCCArray: function(node: ts.CallExpression){
    const args = node.arguments[0];

    if (tsu.isArrayLiteralExpression(args)) {
      const result: ts.NumericLiteral[] = [];
      const ele = args.elements;

      for (const n of ele) {
        if (n.kind != ts.SyntaxKind.StringLiteral) continue;
        result.push(ts.factory.createNumericLiteral(calculateFourCC(n.getFullText())));
      }

      if (result.length == 0) return undefined;

      return ts.factory.createArrayLiteralExpression(result);
    };

    return undefined
  },
  FourCCPure: function(node: ts.CallExpression){
    const args = node.arguments[0];
    if (args.kind != ts.SyntaxKind.StringLiteral) return undefined;

    return ts.factory.createNumericLiteral(calculatePureCC(args.getFullText()));
  },
  compiletime: function(node: ts.CallExpression){
    const argument = node.arguments[0];
    const text = argument.getFullText();
    let code = ts.transpile(text).trimEnd();

    if (code[code.length - 1] === ";") {
      code = code.substring(0, code.length - 1);
    }
    let result = tryParseFunc(code, { objData, fourCC: calculateFourCC, log: console.log })

    if (typeof result === "object") {
      return createObjectLiteral(result);
    } else if (result === undefined || result === null) {
      return ts.factory.createVoidZero();
    } else if (typeof result === "function") {
      throw new Error(`compiletime only supports primitive values`);
    }

    return ts.factory.createStringLiteral(result);
  }
}

function processCallExpression(node: ts.CallExpression, check: ts.TypeChecker){
  const sig = check.getResolvedSignature(node);
  if (!sig || !sig.declaration) return undefined;

  const decl = sig.declaration;
  if (decl.kind != ts.SyntaxKind.FunctionDeclaration || decl.name == null) return undefined;
  const funcName = decl.name.escapedText.toString();

  if (funcName === "FourCC" || funcName === "FourCCArray" || funcName === "FourCCPure") return fourCCAction[funcName](node);

  if (funcName === "compiletime") return fourCCAction[funcName](node);
}

function processImportDeclaration(node: ts.ImportDeclaration, check: ts.TypeChecker, file: ts.SourceFile){
  if (!node.moduleSpecifier || !node.moduleSpecifier.getSourceFile()) return undefined;

  const sourcePath = path.dirname(file.fileName);
  const specifier = getModuleSpecifier(node.moduleSpecifier);
  const matchPath = matchPathFunc(specifier);

  if (!matchPath) return undefined;

  const replacePath = path.relative(sourcePath, matchPath).replace(/\\/g, "/");
  const replaceStr  = ts.factory.createStringLiteral(isPathRelative(replacePath) ? replacePath : `./${replacePath}`);

  return ts.factory.updateImportDeclaration(node, node.modifiers, node.importClause, replaceStr, node.assertClause);
}

function processMathAccess(node: ts.PropertyAccessExpression){
  if (!isAccessingMathStatic(node)) return;
  const values = node.name.getFullText();

  if (Math[values] != null && typeof Math[values] === "number") return ts.factory.createNumericLiteral(Math[values]);

  return undefined;
}



export default function (program: ts.Program, options: ComputeOptions): ts.TransformerFactory<ts.Node> {

  const checker = program.getTypeChecker();

  function processNode(node: ts.Node, file: ts.SourceFile) {

    if (tsu.isCallExpression(node)){
      return processCallExpression(node, checker);
    }

    if (tsu.isImportDeclaration(node)){
      return processImportDeclaration(node, checker, file);
    }

    if (!compilerOptions.plugins[1].enable) return undefined;

    if (tsu.isPropertyAccessExpression(node)){
      return processMathAccess(node);
    }
  }

  function processSourceFile(context: ts.TransformationContext, file: ts.SourceFile) {
    function visitor(node: ts.Node): ts.Node {
      const newNode = processNode(node, file);

      if (newNode != undefined) return newNode;

      return ts.visitEachChild(node, visitor, context);
    }

    return ts.visitEachChild(file, visitor, context);
  }

  function processAndUpdate(context: ts.TransformationContext, file: ts.SourceFile) {
    const updatedNode = processSourceFile(context, file);

    return ts.factory.updateSourceFile(
      file,
      updatedNode.statements,
      updatedNode.isDeclarationFile,
      updatedNode.referencedFiles,
      updatedNode.typeReferenceDirectives,
      updatedNode.hasNoDefaultLib,
      updatedNode.libReferenceDirectives
    );
  }


  return context => (node: ts.Node) => {
    compilerOptions = loadTSConfig().compilerOptions;
    if (addCurrentWorkingPath(compilerOptions.baseUrl)){
      absoluteBaseUrl = path.join(process.cwd(), compilerOptions.baseUrl || ".");
    } else {
      absoluteBaseUrl = compilerOptions.baseUrl || ".";
    }
    matchPathFunc = createMatchPath(absoluteBaseUrl, compilerOptions.paths || {});

    try {
      if (ts.isBundle(node)){
        const newFile = node.sourceFiles.map(f => processAndUpdate(context, f));
        saveObjectData(objData, loadTSConfig().compilerOptions.plugins[0].outputDir);
        return ts.factory.updateBundle(node, newFile);
      };

      if (ts.isSourceFile(node)) {
        const result = processAndUpdate(context, node);

        saveObjectData(objData, loadTSConfig().compilerOptions.plugins[0].outputDir);

        return result
      }
      return node;
    } catch(ex){
      console.error(ex);
      throw ex;
    }
  }
}
