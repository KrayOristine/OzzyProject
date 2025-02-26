import * as ts from "typescript";
import * as tsu from "tsutils";
import { loadTSConfig } from "./utils";

// This is here until I found out does the typescript parse the given 1.00 into 1 or 1.00
function parseNum(v: string): number {
  let i = parseInt(v);
  let f = parseFloat(v);

  if (f > i) return f;

  return i;
};

function makeLiteral(value: number) {
  if (Number.isNaN(value)) {
    return ts.factory.createIdentifier("NaN");
  }

  return Number.isFinite(value)
    ? ts.factory.createNumericLiteral(value)
    : (value < 0 ? ts.factory.createPrefixUnaryExpression(
      ts.SyntaxKind.MinusToken,
      ts.factory.createIdentifier("Infinity")
    ) : ts.factory.createIdentifier("Infinity"));
}

function calculateMath(expr1: number, token: ts.BinaryOperatorToken, expr2: number) {
  console.log("Calculating: " + expr1 + " "+ token.kind + " " + expr2);
  switch (token.kind){
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
      return false
  }
}

function processConstantFolding(node: ts.Expression): number | false {
  if (tsu.isNumericLiteral(node)) return parseNum(node.text);
  if (ts.isParenthesizedExpression(node)) {
    const { expression } = node;
    if (ts.isNumericLiteral(expression) || //* (123)
      ts.isPrefixUnaryExpression(expression)) { //* (-123) (~123)
      return processConstantFolding(expression);
    }
  }
  if (ts.isPrefixUnaryExpression(node) && ts.isNumericLiteral(node.operand)) {
    if (node.operator === ts.SyntaxKind.MinusToken) { //* -123
      return -processConstantFolding(node.operand);
    }
    if (node.operator === ts.SyntaxKind.TildeToken) { //* ~123
      return ~processConstantFolding(node.operand);
    }
    return processConstantFolding(node.operand); //* assume +123
  }

  if (ts.isBinaryExpression(node)) {
    const [lhs, rhs] = [processConstantFolding(node.left), processConstantFolding(node.right)];
    if (lhs !== false && rhs !== false) {
      return calculateMath(lhs, node.operatorToken, rhs);
    }
  }

  if (ts.isCallExpression(node)) {
    const { expression } = node;
    if (ts.isPropertyAccessExpression(expression)) {
      if (
        expression.questionDotToken === undefined &&
        ts.isIdentifier(expression.expression) &&
        expression.expression.text === "Math" &&
        ts.isIdentifier(expression.name)) {
        const callArgs: number[] = [];
        for (const argExpression of node.arguments) {
          const argValue = processConstantFolding(argExpression);
          if (argValue === false) {
            return false;
          }
          callArgs.push(argValue);
        }
        const methodName = expression.getText();
        try {
          const evaluated = eval(`module.exports=${methodName}(${callArgs.join(",")});`);
          if (typeof evaluated === "number") {
            return evaluated;
          }
        } catch {
          return false;
        }
      }
    }
  }

  return false
}

export default function (): ts.TransformerFactory<ts.SourceFile> {
  function transform(context: ts.TransformationContext): ts.Transformer<ts.SourceFile> {
    function visit(node: ts.Node): ts.Node {
      node = ts.visitEachChild(node, visit, context); // Bottom-up recursive
      if (ts.isParenthesizedExpression(node) || ts.isPrefixUnaryExpression(node) || ts.isBinaryExpression(node) || ts.isCallExpression(node)) {
        const value = processConstantFolding(node);
        if (value !== false) {
          return makeLiteral(value);
        }
      }
      return node;
    }
    function transformFile(sourceFile: ts.SourceFile): ts.SourceFile {
      if (!loadTSConfig().compilerOptions.plugins[1].enable) return sourceFile;

      return ts.visitEachChild(sourceFile, visit, context);
    }
    return transformFile;
  }

  return transform;
}
