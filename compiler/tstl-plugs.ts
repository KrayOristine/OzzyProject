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
    .filter((key) => Object.hasOwn(object, key))
    //@ts-expect-error
    .map((key) => ts.factory.createPropertyAssignment(key, createExpression(object[key])));
  return ts.factory.createObjectLiteralExpression(props, true);
}

function calculateFourCC(str: string) {
  const l = str.length;
  if (l <= 0) return 0;

  if (l == 4) {
    return (str.charCodeAt(0) << 24) + (str.charCodeAt(1) << 16) + (str.charCodeAt(2) << 8) + str.charCodeAt(3);
  } else if (l == 3) {
    return (str.charCodeAt(0) << 16) + (str.charCodeAt(1) << 8) + str.charCodeAt(2);
  } else if (l == 2) {
    return (str.charCodeAt(0) << 8) + str.charCodeAt(1);
  } else {
    return str.charCodeAt(3);
  }
}

function str2cc(input: string | string[]) {
  if (!Array.isArray(input)) {
    const l = input.length;
    if (l <= 0) return 0;

    if (l == 4) {
      return (
        (input.charCodeAt(0) << 24) + (input.charCodeAt(1) << 16) + (input.charCodeAt(2) << 8) + input.charCodeAt(3)
      );
    } else if (l == 3) {
      return (input.charCodeAt(0) << 16) + (input.charCodeAt(1) << 8) + input.charCodeAt(2);
    } else if (l == 2) {
      return (input.charCodeAt(0) << 8) + input.charCodeAt(1);
    } else {
      return input.charCodeAt(3);
    }
  }

  const al = input.length;

  if (al <= 0) return [];

  const r = [];
  let rl = 0;
  for (let i = 0; i < al; i++) {
    const str = input[i];
    const l = str.length;
    if (l <= 0) {
      r[rl] = 0;
      rl++;
      continue;
    }

    if (l == 4) {
      r[rl] = (str.charCodeAt(0) << 24) + (str.charCodeAt(1) << 16) + (str.charCodeAt(2) << 8) + str.charCodeAt(3);
    } else if (l == 3) {
      r[rl] = (str.charCodeAt(0) << 16) + (str.charCodeAt(1) << 8) + str.charCodeAt(2);
    } else if (l == 2) {
      r[rl] = (str.charCodeAt(0) << 8) + str.charCodeAt(1);
    } else {
      r[rl] = str.charCodeAt(3);
    }

    rl++;
  }

  return r;
}

function cc2str(input: number | number[]) {}

function tryParseFunc(funcExpression: string, funcArgs: any) {
  try {
    return eval(funcExpression)(funcArgs);
  } catch (ex) {
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
type callAction = (node: ts.CallExpression) => ts.LiteralExpression | ts.Expression | undefined;
const callExpressionAction = new Map<string, callAction>();

callExpressionAction.set("FourCC", function (node: ts.CallExpression) {
  const args = node.arguments[0];
  if (args.kind != ts.SyntaxKind.StringLiteral) return;

  return ts.factory.createNumericLiteral(calculateFourCC(args.getFullText()));
});
callExpressionAction.set("FourCCArray", function (node: ts.CallExpression) {
  const args = node.arguments[0];
  if (!tsu.isArrayLiteralExpression(args)) return;

  const result: ts.NumericLiteral[] = [];
  const ele = args.elements;

  for (const n of ele) {
    if (n.kind != ts.SyntaxKind.StringLiteral) continue;
    result.push(ts.factory.createNumericLiteral(calculateFourCC(n.getFullText())));
  }

  if (result.length == 0) return;

  return ts.factory.createArrayLiteralExpression(result);
});
callExpressionAction.set("compiletime", function (node: ts.CallExpression) {
  const argument = node.arguments[0];
  const text = argument.getFullText();
  let code = ts.transpile(text).trimEnd();

  if (code[code.length - 1] === ";") {
    code = code.substring(0, code.length - 1);
  }
  let result = tryParseFunc(code, { objectData: objData, from4cc: cc2str, to4cc: str2cc, log: console.log });

  if (typeof result === "number" || typeof result === "bigint"){
    return ts.factory.createNumericLiteral(typeof result === "bigint" ? result.toString() : result);
  }

  if (typeof result === "object") {
    return createObjectLiteral(result);
  } else if (result === undefined || result === null) {
    return ts.factory.createVoidZero();
  } else if (typeof result === "function") {
    throw new Error(`compiletime only supports primitive values`);
  }

});

function processCompiletime(node: ts.CallExpression, check: ts.TypeChecker): ts.LiteralExpression | ts.Expression | undefined {
  const sig = check.getResolvedSignature(node);
  if (!sig || !sig.declaration) return;

  const decl = sig.declaration;
  if (decl.kind != ts.SyntaxKind.FunctionDeclaration || decl.name == null) return;
  const funcName = decl.name.escapedText.toString();

  if (callExpressionAction.has(funcName))
    return callExpressionAction.get(funcName)!(node);

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
      if (r) return context.superTransformExpression(r);

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
      if (r) return context.superTransformStatements(r);

      return context.superTransformStatements(node);
    },
  },

  beforeEmit(program, options, emitHost, result) {
    objData.save();
  },
};

export default plugin;
