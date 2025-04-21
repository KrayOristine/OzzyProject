import * as tstl from "typescript-to-lua";
import * as ts from "typescript";
import * as tsu from "tsutils";
import path from "path";
import { createMatchPath, MatchPath } from "tsconfig-paths";
import { loadObjectData } from "./objectData";
import { loadTSConfig } from "./utils";

/*
 * This is where all of the magic happen
 *
 * This plugin features:
 *  + Automatic conversion of FourCC into object id (both single string and array of string)
 *  + Automatic calculation of simple math values
 *  + Replace Math property access into it values (only if they use js Math and not lua math from lualib)
 */

let compilerOptions = loadTSConfig().compilerOptions;
let absoluteBaseUrl = "";
if (addCurrentWorkingPath(compilerOptions.baseUrl)) {
  absoluteBaseUrl = path.join(process.cwd(), compilerOptions.baseUrl || ".");
} else {
  absoluteBaseUrl = compilerOptions.baseUrl || ".";
}
let matchPathFunc = createMatchPath(absoluteBaseUrl, compilerOptions.paths || {});
let objData = loadObjectData(compilerOptions.plugins[0].mapDir);

function isPathRelative(path: string) {
  return path.startsWith("./") || path.startsWith("../");
}

function getModuleSpecifier(specifier: ts.Expression) {
  return specifier
    .getText()
    .substring(specifier.getLeadingTriviaWidth(), specifier.getWidth() - specifier.getLeadingTriviaWidth() * 2);
}

function addCurrentWorkingPath(baseUrl: ts.CompilerOptions["baseUrl"]) {
  if (!baseUrl) {
    return true;
  }
  const worksOnUnix = baseUrl[0] === "/";
  const worksOnWindows = new RegExp("^[A-Z]:/").test(baseUrl);
  return !(worksOnUnix || worksOnWindows);
}

function createObjectLiteral(object: object): ts.ObjectLiteralExpression {
  const props = Object.keys(object)
    .filter(key => Object.hasOwn(object, key))
    //@ts-expect-error
    .map(key => ts.factory.createPropertyAssignment(key, createExpression(object[key])))
  return ts.factory.createObjectLiteralExpression(props, true)
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

function tryParseFunc(funcExpression: string, funcArgs: any) {
  try {
    return eval(funcExpression)(funcArgs);
  } catch (ex){
    return undefined;
  }
}


function parseNum(v: string): number {
  if (v.indexOf(".") >= 0) {
    return parseFloat(v);
  }

  return parseInt(v);
}

function makeLiteral(value: number, original: ts.Node): tstl.Expression {
  if (Number.isFinite(value) || Number.isNaN(value)) return tstl.createNumericLiteral(Number(value), original);

  return tstl.createTableIndexExpression(tstl.createIdentifier("math"), tstl.createStringLiteral("huge"), original);
}

function calculateMath(expr1: number, token: ts.BinaryOperatorToken, expr2: number) {
  switch (token.kind) {
    case ts.SyntaxKind.PlusToken:
      return expr1 + expr2;
    case ts.SyntaxKind.MinusToken:
      return expr1 - expr2;
    case ts.SyntaxKind.AsteriskToken:
      return expr1 * expr2;
    case ts.SyntaxKind.SlashToken:
      return expr1 / expr2;
    case ts.SyntaxKind.PercentToken:
      return expr1 % expr2;
    case ts.SyntaxKind.AsteriskAsteriskToken:
      return expr1 ** expr2;
    case ts.SyntaxKind.LessThanLessThanToken:
      return expr1 << expr2;
    case ts.SyntaxKind.GreaterThanGreaterThanToken:
      return expr1 >> expr2;
    case ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
      return expr1 >>> expr2;
    case ts.SyntaxKind.AmpersandToken:
      return expr1 & expr2;
    case ts.SyntaxKind.CaretToken:
      return expr1 ^ expr2;
    case ts.SyntaxKind.BarToken:
      return expr1 | expr2;
    default:
      return false;
  }
}

function processPrefixUnary(node: ts.PrefixUnaryExpression): number | false {
  if (!ts.isNumericLiteral(node.operand)) return false;

  if (node.operator === ts.SyntaxKind.MinusToken) {
    //* -123
    return -parseNum(node.operand.text);
  }
  if (node.operator === ts.SyntaxKind.TildeToken) {
    //* ~123
    return ~parseNum(node.operand.text);
  }
  return parseNum(node.operand.text); //* assume +123
}

function processParenthesizedExpression(node: ts.ParenthesizedExpression): number | false {
  const { expression } = node;
  if (ts.isNumericLiteral(expression))
    //* (123)
    return parseNum(expression.text);

  if (ts.isPrefixUnaryExpression(expression))
    //* (-123) (~123)
    return processPrefixUnary(expression);

  return false;
}

function processExpression(node: ts.Expression): number | false {
  if (tsu.isNumericLiteral(node)) return parseNum(node.text);
  if (tsu.isBinaryExpression(node)) return processBinaryExpression(node);
  if (tsu.isParenthesizedExpression(node)) return processParenthesizedExpression(node);
  if (tsu.isPrefixUnaryExpression(node)) return processPrefixUnary(node);
  if (tsu.isCallExpression(node)) return processCallExpression(node);

  return false;
}

function processBinaryExpression(node: ts.BinaryExpression): number | false {
  const [lhs, rhs] = [processExpression(node.left), processExpression(node.right)];
  if (lhs !== false && rhs !== false) {
    return calculateMath(lhs, node.operatorToken, rhs);
  }

  return false;
}

function processCallExpression(node: ts.CallExpression): number | false {


  const { expression } = node;
  if (!ts.isPropertyAccessExpression(expression)) return false;

  if (
    expression.questionDotToken === undefined &&
    ts.isIdentifier(expression.expression) &&
    expression.expression.text === "Math" &&
    ts.isIdentifier(expression.name)
  ) {
    const callArgs: number[] = [];
    for (const argExpression of node.arguments) {
      const argValue = processExpression(argExpression);
      if (argValue === false) {
        return false;
      }
      callArgs.push(argValue);
    }
    const methodName = expression.getText();
    try {
      const evaluated = eval(`Math.${methodName}(${callArgs.join(",")});`);
      if (typeof evaluated === "number") {
        return evaluated;
      }
    } catch {
      return false;
    }
  }

  return false;
}

function processImport(node: ts.ImportDeclaration, source: ts.SourceFile): ts.ImportDeclaration | undefined {
  if (!node.moduleSpecifier || !node.moduleSpecifier.getSourceFile()) return undefined;

  const sourcePath = path.dirname(source.fileName);
  const specifier = getModuleSpecifier(node.moduleSpecifier);
  const matchPath = matchPathFunc(specifier);

  if (!matchPath) return undefined;

  const replacePath = path.relative(sourcePath, matchPath).replace(/\\/g, "/");
  const replaceStr = ts.factory.createStringLiteral(isPathRelative(replacePath) ? replacePath : `./${replacePath}`);

  return ts.factory.updateImportDeclaration(node, node.modifiers, node.importClause, replaceStr, node.assertClause);
}

const callExpressionAction = {
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
    let result = tryParseFunc(code, { objectData: objData, fourCC: calculateFourCC, log: console.log })

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

function processCompiletime(node: ts.CallExpression, check: ts.TypeChecker){
  const sig = check.getResolvedSignature(node);
  if (!sig || !sig.declaration) return undefined;

  const decl = sig.declaration;
  if (decl.kind != ts.SyntaxKind.FunctionDeclaration || decl.name == null) return undefined;
  const funcName = decl.name.escapedText.toString();

  if (funcName === "FourCC" || funcName === "FourCCArray" || funcName === "FourCCPure") return callExpressionAction[funcName](node);

  if (funcName === "compiletime") return callExpressionAction[funcName](node);
}

const plugin: tstl.Plugin = {
  visitors: {
    [ts.SyntaxKind.ParenthesizedExpression]: (node, context) => {
      const n = processParenthesizedExpression(node);
      if (n) {
        return makeLiteral(n, node);
      }

      return context.superTransformExpression(node);
    },
    [ts.SyntaxKind.BinaryExpression]: (node, context) => {
      const n = processBinaryExpression(node);
      if (n) {
        return makeLiteral(n, node);
      }

      return context.superTransformExpression(node);
    },
    [ts.SyntaxKind.CallExpression]: (node, context) => {
      const n = processCallExpression(node);
      if (n) {
        return makeLiteral(n, node);
      }

      const r = processCompiletime(node, context.program.getTypeChecker());
      if (r)
        return context.superTransformExpression(r);

      return context.superTransformExpression(node);
    },
    [ts.SyntaxKind.PrefixUnaryExpression]: (node, context) => {
      const n = processPrefixUnary(node);
      if (n) {
        return makeLiteral(n, node);
      }

      return context.superTransformExpression(node);
    },
    [ts.SyntaxKind.ImportDeclaration]: (node, context) => {
      const r = processImport(node, context.sourceFile);
      if (r)
        return context.superTransformStatements(r);

      return context.superTransformStatements(node);
    },
  },

  beforeEmit(program, options, emitHost, result) {
      objData.save();
  },
};

export default plugin;
