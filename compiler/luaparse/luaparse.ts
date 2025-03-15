import {
  LuaASTFactory,
  Identifier,
  LabelStatement,
  BreakStatement,
  GotoStatement,
  Expression,
  ReturnStatement,
  IfClauses,
  IfStatement,
  Block,
  IfClause,
  ElseifClause,
  ElseClause,
  WhileStatement,
  DoStatement,
  RepeatStatement,
  LocalStatement,
  MemberExpression,
  IndexExpression,
  AssignmentStatement,
  CallExpression,
  CallStatement,
  VarargLiteral,
  FunctionDeclaration,
  FunctionExpression,
  ForNumericStatement,
  ForGenericStatement,
  Chunk,
  Literal,
  TableKey,
  TableKeyString,
  TableValue,
  TableConstructorExpression,
  BinaryOperator,
  LogicalOperator,
  BinaryExpression,
  LogicalExpression,
  UnaryOperator,
  UnaryExpression,
  Indexer,
  TableCallExpression,
  StringLiteral,
  StringCallExpression,
  Comment,
  Node,
  TextRange,
  Location,
  Statement,
  PrimaryExpression,
  ParenthesizedExpression,
} from "./ast";

import {Maybe} from "../helper";

export const version = "0.2.1";

let input: string, options: ParserOptions, length: number, features: LuaFeatures, encodingMode: EncodingMode;

interface LuaFeatures {
  labels?: boolean;
  emptyStatement?: boolean;
  hexEscapes?: boolean;
  skipWhitespaceEscape?: boolean;
  strictEscapes?: boolean;
  unicodeEscapes?: boolean;
  relaxedBreak?: boolean;
  bitwiseOperators?: boolean;
  integerDivision?: boolean;
  contextualGoto?: boolean;

  extendedIdentifiers?: boolean;
  imaginaryNumbers?: boolean;

  integerSuffixes?: boolean;
}

interface ParserOptions {
  /** Explicitly tell the parser when the input ends. */
  wait: boolean;
  /** Store comments as an array in the chunk object. */
  comments: boolean;
  /**
   * Track identifier scopes by adding an isLocal attribute to each
   * identifier-node.
   */
  scope: boolean;
  /**
   * Store location information on each syntax node as
   * `loc: { start: { line, column }, end: { line, column } }`.
   */
  locations: boolean;
  /**
   * Store the start and end character locations on each syntax node as
   * `range: [start, end]`.
   */
  ranges: boolean;
  /**
   * A callback which will be invoked when a syntax node has been completed.
   * The node which has been created will be passed as the only parameter.
   */
  onCreateNode: any;
  /** A callback which will be invoked when a new scope is created. */
  onCreateScope: any;
  /** A callback which will be invoked when the current scope is destroyed. */
  onDestroyScope: any;
  /**
   * A callback which will be invoked when a local variable is declared in the current scope.
   * The variable's name will be passed as the only parameter
   */
  onLocalDeclaration: any;
  /**
   * The version of Lua targeted by the parser (string; allowed values are
   * '5.1', '5.2', '5.3').
   */
  luaVersion: "5.1" | "5.2" | "5.3" | "LuaJIT";
  /** Encoding mode: how to interpret code units higher than U+007F in input */
  encodingMode: "pseudo-latin1" | "none" | "x-user-defined";
  /**
   * Preserve parenthesis
   */
  preserveParens: boolean;
  /** Other options */
  [option: string]: any;
}

/**
 * Options can be set either globally on the parser object through
 * defaultOptions, or during the parse call.
 */
export const defaultOptions: ParserOptions = {
  wait: false,
  comments: true,
  scope: false,
  locations: false,
  ranges: false,
  onCreateNode: null,
  onCreateScope: null,
  onDestroyScope: null,
  onLocalDeclaration: null,
  luaVersion: "5.1",
  encodingMode: "none",
  preserveParens: false,
};

function encodeUTF8(codepoint: number, highMask: number = 0): string {
  if (codepoint < 0x80) {
    return String.fromCharCode(codepoint);
  } else if (codepoint < 0x800) {
    return String.fromCharCode(highMask | 0xc0 | (codepoint >> 6), highMask | 0x80 | (codepoint & 0x3f));
  } else if (codepoint < 0x10000) {
    return String.fromCharCode(highMask | 0xe0 | (codepoint >> 12), highMask | 0x80 | ((codepoint >> 6) & 0x3f), highMask | 0x80 | (codepoint & 0x3f));
  } /* istanbul ignore else */ else if (codepoint < 0x110000) {
    return String.fromCharCode(
      highMask | 0xf0 | (codepoint >> 18),
      highMask | 0x80 | ((codepoint >> 12) & 0x3f),
      highMask | 0x80 | ((codepoint >> 6) & 0x3f),
      highMask | 0x80 | (codepoint & 0x3f)
    );
  } else {
    // TODO: Lua 5.4 allows up to six-byte sequences, as in UTF-8:1993
    console.warn("Lua 5.4 six-byte sequences is not fupported!", codepoint, highMask);
    return "";
  }
}

function toHex(num: number, digits: number): string {
  let result = num.toString(16);
  while (result.length < digits) result = "0" + result;
  return result;
}

function checkChars(rx: RegExp): (s: string) => string {
  return (s: string): string => {
    const m = rx.exec(s);
    if (!m) return s;
    raise(null, errors.invalidCodeUnit, toHex(m[0].charCodeAt(0), 4).toUpperCase());
    throw new Error("This should not happen");
  };
}

interface EncodingMode {
  discardStrings?: boolean;
  fixup: (s: any) => any;
  encodeByte: (b?: number, _?: any) => string;
  encodeUTF8: (c: number, _?: any) => string;
}

const encodingModes: { [encodingMode: string]: EncodingMode } = {
  /**
   * `pseudo-latin1` encoding mode: assume the input was decoded with the latin1 encoding
   * WARNING: latin1 does **NOT** mean cp1252 here like in the bone-headed WHATWG standard;
   * it means true ISO/IEC 8859-1 identity-mapped to Basic Latin and Latin-1 Supplement blocks
   */
  "pseudo-latin1": {
    fixup: checkChars(/[^\x00-\xff]/),
    encodeByte: (value?: number) => {
      if (value == null) return "";
      return String.fromCharCode(value);
    },
    encodeUTF8: (codepoint: number) => {
      return encodeUTF8(codepoint);
    },
  },

  /** `x-user-defined` encoding mode: assume the input was decoded with the WHATWG `x-user-defined` encoding */
  "x-user-defined": {
    fixup: checkChars(/[^\x00-\x7f\uf780-\uf7ff]/),
    encodeByte: (value?: number) => {
      if (value == null) return "";
      if (value >= 0x80) return String.fromCharCode(value | 0xf700);
      return String.fromCharCode(value);
    },
    encodeUTF8: function (codepoint) {
      return encodeUTF8(codepoint, 0xf700);
    },
  },

  /** `none` encoding mode: disregard intrepretation of string literals, leave identifiers as-is */
  none: {
    discardStrings: true,
    fixup: function (s) {
      return s;
    },
    encodeByte: function (value) {
      return "";
    },
    encodeUTF8: function (codepoint) {
      return "";
    },
  },
};

/**
 * The available tokens expressed as enum flags so they can be checked with
 * bitwise operations.
 */
export enum TokenType {
  EOF = 1,
  StringLiteral = 2,
  Keyword = 4,
  Identifier = 8,
  NumericLiteral = 16,
  Punctuator = 32,
  BooleanLiteral = 64,
  NilLiteral = 128,
  VarargLiteral = 256,
}

/**
 * As this parser is a bit different from luas own, the error messages
 * will be different in some situations.
 */
export let errors = {
  unexpected: "unexpected %1 '%2' near '%3'",
  unexpectedEOF: "unexpected symbol near '<eof>'",
  expected: "'%1' expected near '%2'",
  expectedToken: "%1 expected near '%2'",
  unfinishedString: "unfinished string near '%1'",
  malformedNumber: "malformed number near '%1'",
  decimalEscapeTooLarge: "decimal escape too large near '%1'",
  invalidEscape: "invalid escape sequence near '%1'",
  hexadecimalDigitExpected: "hexadecimal digit expected near '%1'",
  braceExpected: "missing '%1' near '%2'",
  tooLargeCodepoint: "UTF-8 value too large near '%1'",
  unfinishedLongString: "unfinished long string (starting at line %1) near '%2'",
  unfinishedLongComment: "unfinished long comment (starting at line %1) near '%2'",
  ambiguousSyntax: "ambiguous syntax (function call x new statement) near '%1'",
  noLoopToBreak: "no loop to break near '%1'",
  labelAlreadyDefined: "label '%1' already defined on line %2",
  labelNotVisible: "no visible label '%1' for <goto>",
  gotoJumpInLocalScope: "<goto %1> jumps into the scope of local '%2'",
  cannotUseVararg: "cannot use '...' outside a vararg function near '%1'",
  invalidCodeUnit: "code unit U+%1 is not allowed in the current encoding mode",
};

// ### Abstract Syntax Tree
//
// The default AST structure is inspired by the Mozilla Parser API but can
// easily be customized by overriding these functions.

export class ASTFactory implements LuaASTFactory {
  labelStatement(label: Identifier): LabelStatement {
    return {
      type: "LabelStatement",
      label: label,
    };
  }

  parenthesizedExpression(exp: Expression): ParenthesizedExpression {
    return {
      type: "ParenthesizedExpression",
      expression: exp,
    }
  };

  breakStatement(): BreakStatement {
    return {
      type: "BreakStatement",
    };
  }

  gotoStatement(label: Identifier): GotoStatement {
    return {
      type: "GotoStatement",
      label: label,
    };
  }

  returnStatement(args: Expression[]): ReturnStatement {
    return {
      type: "ReturnStatement",
      arguments: args,
    };
  }

  ifStatement(clauses: IfClauses): IfStatement {
    return {
      type: "IfStatement",
      clauses: clauses,
    };
  }

  ifClause(condition: Expression, body: Block): IfClause {
    return {
      type: "IfClause",
      condition: condition,
      body: body,
    };
  }
  elseifClause(condition: Expression, body: Block): ElseifClause {
    return {
      type: "ElseifClause",
      condition: condition,
      body: body,
    };
  }
  elseClause(body: Block): ElseClause {
    return {
      type: "ElseClause",
      body: body,
    };
  }

  whileStatement(condition: Expression, body: Block): WhileStatement {
    return {
      type: "WhileStatement",
      condition: condition,
      body: body,
    };
  }

  doStatement(body: Block): DoStatement {
    return {
      type: "DoStatement",
      body: body,
    };
  }

  repeatStatement(condition: Expression, body: Block): RepeatStatement {
    return {
      type: "RepeatStatement",
      condition: condition,
      body: body,
    };
  }

  localStatement(variables: Identifier[], init: Expression[]): LocalStatement {
    return {
      type: "LocalStatement",
      variables: variables,
      init: init,
    };
  }

  assignmentStatement(variables: Array<Identifier | MemberExpression | IndexExpression>, init: Expression[]): AssignmentStatement {
    return {
      type: "AssignmentStatement",
      variables: variables,
      init: init,
    };
  }

  callStatement(expression: CallExpression): CallStatement {
    return {
      type: "CallStatement",
      expression: expression,
    };
  }

  functionStatement(
    identifier: Identifier | MemberExpression | null,
    parameters: Array<Identifier | VarargLiteral>,
    isLocal: boolean,
    body: Block
  ): FunctionDeclaration | FunctionExpression {
    return {
      type: "FunctionDeclaration",
      identifier: identifier,
      isLocal: isLocal,
      parameters: parameters,
      body: body,
    } as FunctionDeclaration | FunctionDeclaration;
  }

  forNumericStatement(variable: Identifier, start: Expression, end: Expression, step: Expression | null, body: Block): ForNumericStatement {
    return {
      type: "ForNumericStatement",
      variable: variable,
      start: start,
      end: end,
      step: step,
      body: body,
    };
  }

  forGenericStatement(variables: Identifier[], iterators: Expression[], body: Block): ForGenericStatement {
    return {
      type: "ForGenericStatement",
      variables: variables,
      iterators: iterators,
      body: body,
    };
  }

  chunk(body: Block): Chunk {
    return {
      type: "Chunk",
      body: body,
    };
  }

  identifier(name: string): Identifier {
    return {
      type: "Identifier",
      name: name,
    };
  }

  literal(type: number, value: string | number | boolean | null, raw: string): Literal {
    const strType =
      type === TokenType.StringLiteral
        ? "StringLiteral"
        : type === TokenType.NumericLiteral
        ? "NumericLiteral"
        : type === TokenType.BooleanLiteral
        ? "BooleanLiteral"
        : type === TokenType.NilLiteral
        ? "NilLiteral"
        : "VarargLiteral";

    return {
      type: strType,
      value: value,
      raw: raw,
    } as Literal;
  }

  tableKey(key: Expression, value: Expression): TableKey {
    return {
      type: "TableKey",
      key: key,
      value: value,
    };
  }
  tableKeyString(key: Identifier, value: Expression): TableKeyString {
    return {
      type: "TableKeyString",
      key: key,
      value: value,
    };
  }
  tableValue(value: Expression): TableValue {
    return {
      type: "TableValue",
      value: value,
    };
  }

  tableConstructorExpression(fields: Array<TableKey | TableKeyString | TableValue>): TableConstructorExpression {
    return {
      type: "TableConstructorExpression",
      fields: fields,
    };
  }
  binaryExpression(operator: BinaryOperator | LogicalOperator, left: Expression, right: Expression): BinaryExpression | LogicalExpression {
    let type: "LogicalExpression" | "BinaryExpression" = "and" === operator || "or" === operator ? "LogicalExpression" : "BinaryExpression";

    return {
      type: type,
      operator: operator,
      left: left,
      right: right,
    } as BinaryExpression | LogicalExpression;
  }
  unaryExpression(operator: UnaryOperator, argument: Expression): UnaryExpression {
    return {
      type: "UnaryExpression",
      operator: operator,
      argument: argument,
    };
  }
  memberExpression(base: Identifier | Expression, indexer: Indexer, identifier: Identifier): MemberExpression {
    return {
      type: "MemberExpression",
      indexer: indexer,
      identifier: identifier,
      base: base,
    };
  }

  indexExpression(base: Expression, index: Expression): IndexExpression {
    return {
      type: "IndexExpression",
      base: base,
      index: index,
    };
  }

  callExpression(base: Identifier | MemberExpression, args: Expression[]): CallExpression {
    return {
      type: "CallExpression",
      base: base,
      arguments: args,
    };
  }

  tableCallExpression(base: Identifier | MemberExpression, args: TableConstructorExpression): TableCallExpression {
    return {
      type: "TableCallExpression",
      base: base,
      arguments: args,
      argument: args,
    };
  }

  stringCallExpression(base: Identifier | MemberExpression, argument: StringLiteral): StringCallExpression {
    return {
      type: "StringCallExpression",
      base: base,
      argument: argument,
    };
  }

  comment(value: string, raw: string): Comment {
    return {
      type: "Comment",
      value: value,
      raw: raw,
    };
  }
}

export let ast: LuaASTFactory = new ASTFactory();

/**
 * Wrap up the node object.
 *
 * @param node
 */
function finishNode<T extends Node>(node: T): T {
  // Pop a `Marker` off the location-array and attach its location data.
  if (trackLocations) {
    const location = locations.pop();
    if (!!location) {
      location.complete();
      location.bless(node);
    }
  }
  if (options.onCreateNode) options.onCreateNode(node);
  return node;
}

/**
 * Iterate through an array of objects and return the index of an object
 * with a matching property.
 *
 * @param array
 * @param property
 * @param element
 */
function indexOfObject(array: any[], property: string | number, element: any): number {
  for (let i = 0, length = array.length; i < length; ++i) {
    if (array[i][property] === element) return i;
  }
  return -1;
}

/**
 * A sprintf implementation using %index (beginning at 1) to input
 * arguments in the format string.
 *
 * Example:
 *     // Unexpected function in token
 *     sprintf('Unexpected %2 in %1.', 'token', 'function');
 *
 * @param format
 * @param args
 */
function sprintf(format: string, ...args: any[]) {
  format = format.replace(/%(\d)/g, (match, index) => "" + args[index - 1] || "");
  return format;
}

// ### Error functions

/**
 * XXX: Eliminate this function and change the error type to be different from SyntaxError.
 * This will unfortunately be a breaking change, because some downstream users depend
 * on the error thrown being an instance of SyntaxError. For example, the Ace editor:
 * <https://github.com/ajaxorg/ace/blob/4c7e5eb3f5d5ca9434847be51834a4e41661b852/lib/ace/mode/lua_worker.js#L55>
 *
 * @param e
 */
function fixupError(e: any) {
  /* istanbul ignore if */
  if (!Object.create) return e;
  return Object.create(e, {
    line: { writable: true, value: e.line },
    index: { writable: true, value: e.index },
    column: { writable: true, value: e.column },
  });
}

/** #### Raise an exception.
 *
 * Raise an exception by passing a token, a string format and its paramters.
 * The passed tokens location will automatically be added to the error
 * message if it exists, if not it will default to the lexers current
 * position.
 *
 * Example:
 *
 *     // [1:0] expected [ near (
 *     raise(token, "expected %1 near %2", '[', token.value);
 *
 * @param token
 * @param args
 */
function raise(token: Token | null, ...args: any[]): never {
  let message = sprintf.apply(null, [args[0] as string, ...args.slice(1)]),
    error,
    col;

  if (token === null || typeof token.line === "undefined") {
    col = index - lineStart + 1;
    error = fixupError(new SyntaxError(sprintf("[%1:%2] %3", line, col, message)));
    error.index = index;
    error.line = line;
    error.column = col;
  } else {
    col = token.range[0] - token.lineStart;
    error = fixupError(new SyntaxError(sprintf("[%1:%2] %3", token.line, col, message)));
    error.line = token.line;
    error.index = token.range[0];
    error.column = col;
  }
  throw error;
}

function tokenValue(token: Token) {
  const raw = input.slice(token.range[0], token.range[1]);
  if (raw) return raw;
  return token.value;
}

/**
 * #### Raise an unexpected token error.
 *
 * Example:
 *
 *     // expected <name> near '0'
 *     raiseUnexpectedToken('<name>', token);
 */
function raiseUnexpectedToken(type: string, token: Token): never {
  raise(token, errors.expectedToken, type, tokenValue(token));
  throw new Error("This should not happen");
}

/**
 * #### Raise a general unexpected error
 *
 * Usage should pass either a token object or a symbol string which was
 * expected. We can also specify a nearby token such as <eof>, this will
 * default to the currently active token.
 *
 * Example:
 *
 *     // Unexpected symbol 'end' near '<eof>'
 *     unexpected(token);
 *
 * If there's no token in the buffer it means we have reached <eof>.
 */
function unexpected(found: Token | string): never {
  const near = tokenValue(lookahead);
  if (typeof found === "object" && "undefined" !== typeof found.type) {
    let type;
    switch (found.type) {
      case TokenType.StringLiteral:
        type = "string";
        break;
      case TokenType.Keyword:
        type = "keyword";
        break;
      case TokenType.Identifier:
        type = "identifier";
        break;
      case TokenType.NumericLiteral:
        type = "number";
        break;
      case TokenType.Punctuator:
        type = "symbol";
        break;
      case TokenType.BooleanLiteral:
        type = "boolean";
        break;
      case TokenType.NilLiteral:
        return raise(found, errors.unexpected, "symbol", "nil", near);
      case TokenType.EOF:
        return raise(found, errors.unexpectedEOF);
    }
    return raise(found, errors.unexpected, type, tokenValue(found), near);
  }
  // found is not Token
  // TODO: Fix it
  return raise(/* found */ null, errors.unexpected, "symbol", found, near);
}

/**
 * Lexer
 * -----
 *
 * The lexer, or the tokenizer reads the input string character by character
 * and derives a token left-right. To be as efficient as possible the lexer
 * prioritizes the common cases such as identifiers. It also works with
 * character codes instead of characters as string comparisons was the
 * biggest bottleneck of the parser.
 *
 * If `options.comments` is enabled, all comments encountered will be stored
 * in an array which later will be appended to the chunk object. If disabled,
 * they will simply be disregarded.
 *
 * When the lexer has derived a valid token, it will be returned as an object
 * containing its value and as well as its position in the input string (this
 * is always enabled to provide proper debug messages).
 *
 * `lex()` starts lexing and returns the following token in the stream.
 */
interface Token {
  type: TokenType;
  value: string | boolean | number | null;
  range: TextRange;
  line: number;
  lineStart: number;
  lastLine?: number;
  lastLineStart?: number;
}

let index: number, token: Token, previousToken: Token, lookahead: Token, comments: Comment[], tokenStart: number, line: number, lineStart: number;

export function lex(): Token {
  skipWhiteSpace();

  // Skip comments beginning with --
  while (45 === input.charCodeAt(index) && 45 === input.charCodeAt(index + 1)) {
    scanComment();
    skipWhiteSpace();
  }
  if (index >= length)
    return {
      type: TokenType.EOF,
      value: "<eof>",
      line: line,
      lineStart: lineStart,
      range: [index, index],
    };

  const charCode = input.charCodeAt(index),
    next = input.charCodeAt(index + 1);

  // Memorize the range index where the token begins.
  tokenStart = index;
  if (isIdentifierStart(charCode)) return scanIdentifierOrKeyword();

  switch (charCode) {
    case 39:
    case 34: // '"
      return scanStringLiteral();

    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: // 0-9
      return scanNumericLiteral();

    case 46: // .
      // If the dot is followed by a digit it's a float.
      if (isDecDigit(next)) return scanNumericLiteral();
      if (46 === next) {
        if (46 === input.charCodeAt(index + 2)) return scanVarargLiteral();
        return scanPunctuator("..");
      }
      return scanPunctuator(".");

    case 61: // =
      if (61 === next) return scanPunctuator("==");
      return scanPunctuator("=");

    case 62: // >
      if (features.bitwiseOperators) if (62 === next) return scanPunctuator(">>");
      if (61 === next) return scanPunctuator(">=");
      return scanPunctuator(">");

    case 60: // <
      if (features.bitwiseOperators) if (60 === next) return scanPunctuator("<<");
      if (61 === next) return scanPunctuator("<=");
      return scanPunctuator("<");

    case 126: // ~
      if (61 === next) return scanPunctuator("~=");
      if (!features.bitwiseOperators) break;
      return scanPunctuator("~");

    case 58: // :
      if (features.labels) if (58 === next) return scanPunctuator("::");
      return scanPunctuator(":");

    case 91: // [
      // Check for a multiline string, they begin with [= or [[
      if (91 === next || 61 === next) return scanLongStringLiteral();
      return scanPunctuator("[");

    case 47: // /
      // Check for integer division op (//)
      if (features.integerDivision) if (47 === next) return scanPunctuator("//");
      return scanPunctuator("/");

    case 38:
    case 124: // & |
      if (!features.bitwiseOperators) break;

    /* fall through */
    case 42:
    case 94:
    case 37:
    case 44:
    case 123:
    case 125:
    case 93:
    case 40:
    case 41:
    case 59:
    case 35:
    case 45:
    case 43: // * ^ % , { } ] ( ) ; # - +
      return scanPunctuator(input.charAt(index));
  }

  return unexpected(input.charAt(index));
}

/**
 * Whitespace has no semantic meaning in lua so simply skip ahead while
 * tracking the encounted newlines. Any kind of eol sequence is counted as a
 * single line.
 */
function consumeEOL() {
  const charCode = input.charCodeAt(index),
    peekCharCode = input.charCodeAt(index + 1);

  if (isLineTerminator(charCode)) {
    // Count \n\r and \r\n as one newline.
    if (10 === charCode && 13 === peekCharCode) ++index;
    if (13 === charCode && 10 === peekCharCode) ++index;
    ++line;
    lineStart = ++index;

    return true;
  }
  return false;
}

function skipWhiteSpace() {
  while (index < length) {
    const charCode = input.charCodeAt(index);
    if (isWhiteSpace(charCode)) {
      ++index;
    } else if (!consumeEOL()) {
      break;
    }
  }
}

/**
 * Identifiers, keywords, booleans and nil all look the same syntax wise. We
 * simply go through them one by one and defaulting to an identifier if no
 * previous case matched.
 */
function scanIdentifierOrKeyword(): Token {
  let value: string | boolean | null, type: number;

  // Slicing the input string is prefered before string concatenation in a
  // loop for performance reasons.
  while (isIdentifierPart(input.charCodeAt(++index)));
  value = encodingMode.fixup(input.slice(tokenStart, index));

  // Decide on the token type and possibly cast the value.
  if (isKeyword(value as string)) {
    type = TokenType.Keyword;
  } else if ("true" === value || "false" === value) {
    type = TokenType.BooleanLiteral;
    value = "true" === value;
  } else if ("nil" === value) {
    type = TokenType.NilLiteral;
    value = null;
  } else {
    type = TokenType.Identifier;
  }

  return {
    type: type,
    value: value,
    line: line,
    lineStart: lineStart,
    range: [tokenStart, index],
  };
}

/**
 * Once a punctuator reaches this function it should already have been
 * validated so we simply return it as a token.
 */
function scanPunctuator(value: string): Token {
  index += value.length;
  return {
    type: TokenType.Punctuator,
    value: value,
    line: line,
    lineStart: lineStart,
    range: [tokenStart, index],
  };
}

/** A vararg literal consists of three dots. */
function scanVarargLiteral(): Token {
  index += 3;
  return {
    type: TokenType.VarargLiteral,
    value: "...",
    line: line,
    lineStart: lineStart,
    range: [tokenStart, index],
  };
}

/** Find the string literal by matching the delimiter marks used. */
function scanStringLiteral(): Token {
  let delimiter = input.charCodeAt(index++),
    beginLine = line,
    beginLineStart = lineStart,
    stringStart = index,
    string = encodingMode.discardStrings ? null : "",
    charCode;

  for (;;) {
    charCode = input.charCodeAt(index++);
    if (delimiter === charCode) break;
    // EOF or `\n` terminates a string literal. If we haven't found the
    // ending delimiter by now, raise an exception.
    if (index > length || isLineTerminator(charCode)) {
      string += input.slice(stringStart, index - 1);
      raise(null, errors.unfinishedString, input.slice(tokenStart, index - 1));
    }
    if (92 === charCode) {
      // backslash
      if (!encodingMode.discardStrings) {
        const beforeEscape = input.slice(stringStart, index - 1);
        string += encodingMode.fixup(beforeEscape);
      }
      const escapeValue = readEscapeSequence();
      if (!encodingMode.discardStrings) string += escapeValue;
      stringStart = index;
    }
  }
  if (!encodingMode.discardStrings) {
    string += encodingMode.encodeByte();
    string += encodingMode.fixup(input.slice(stringStart, index - 1));
  }

  return {
    type: TokenType.StringLiteral,
    value: string,
    line: beginLine,
    lineStart: beginLineStart,
    lastLine: line,
    lastLineStart: lineStart,
    range: [tokenStart, index],
  };
}

/**
 * Expect a multiline string literal and return it as a regular string
 * literal, if it doesn't validate into a valid multiline string, throw an
 * exception.
 */
function scanLongStringLiteral(): Token {
  const beginLine = line,
    beginLineStart = lineStart,
    string = readLongString(false);
  // Fail if it's not a multiline literal.
  if (false === string) raise(token, errors.expected, "[", tokenValue(token));

  return {
    type: TokenType.StringLiteral,
    value: encodingMode.discardStrings ? null : encodingMode.fixup(string),
    line: beginLine,
    lineStart: beginLineStart,
    lastLine: line,
    lastLineStart: lineStart,
    range: [tokenStart, index],
  };
}

/**
 * Numeric literals will be returned as floating-point numbers instead of
 * strings. The raw value should be retrieved from slicing the input string
 * later on in the process.
 *
 * If a hexadecimal number is encountered, it will be converted.
 */
function scanNumericLiteral(): Token {
  const character = input.charAt(index),
    next = input.charAt(index + 1);

  const literal = "0" === character && !!next && "xX".indexOf(next) >= 0 ? readHexLiteral() : readDecLiteral();

  var foundImaginaryUnit = readImaginaryUnitSuffix(),
    foundInt64Suffix = readInt64Suffix();

  if (foundInt64Suffix && (foundImaginaryUnit || literal.hasFractionPart)) {
    raise(null, errors.malformedNumber, input.slice(tokenStart, index));
  }

  return {
    type: TokenType.NumericLiteral,
    value: literal.value,
    line: line,
    lineStart: lineStart,
    range: [tokenStart, index],
  };
}

function readImaginaryUnitSuffix() {
  if (!features.imaginaryNumbers) return;

  // Imaginary unit number suffix is optional.

  // See http://luajit.org/ext_ffi_api.html#literals

  if ("iI".indexOf(input.charAt(index) || "") >= 0) {
    ++index;

    return true;
  } else {
    return false;
  }
}

function readInt64Suffix() {
  if (!features.integerSuffixes) return;

  // Int64/uint64 number suffix is optional.

  // See http://luajit.org/ext_ffi_api.html#literals

  if ("uU".indexOf(input.charAt(index) || "") >= 0) {
    ++index;

    if ("lL".indexOf(input.charAt(index) || "") >= 0) {
      ++index;

      if ("lL".indexOf(input.charAt(index) || "") >= 0) {
        ++index;

        return "ULL";
      } else {
        // UL but no L

        raise(null, errors.malformedNumber, input.slice(tokenStart, index));
      }
    } else {
      // U but no L

      raise(null, errors.malformedNumber, input.slice(tokenStart, index));
    }
  } else if ("lL".indexOf(input.charAt(index) || "") >= 0) {
    ++index;

    if ("lL".indexOf(input.charAt(index) || "") >= 0) {
      ++index;

      return "LL";
    } else {
      // First L but no second L

      raise(null, errors.malformedNumber, input.slice(tokenStart, index));
    }
  }
}

/**
 * Lua hexadecimals have an optional fraction part and an optional binary
 * exoponent part. These are not included in JavaScript so we will compute
 * all three parts separately and then sum them up at the end of the function
 * with the following algorithm.
 *
 *     Digit := toDec(digit)
 *     Fraction := toDec(fraction) / 16 ^ fractionCount
 *     BinaryExp := 2 ^ binaryExp
 *     Number := ( Digit + Fraction ) * BinaryExp
 */
function readHexLiteral() {
  let fraction: number | string = 0, // defaults to 0 as it gets summed
    binaryExponent = 1, // defaults to 1 as it gets multiplied
    binarySign = 1, // positive
    digit,
    fractionStart,
    exponentStart,
    digitStart;

  digitStart = index += 2; // Skip 0x part

  // A minimum of one hex digit is required.
  if (!isHexDigit(input.charCodeAt(index))) raise(null, errors.malformedNumber, input.slice(tokenStart, index));

  while (isHexDigit(input.charCodeAt(index))) ++index;
  // Convert the hexadecimal digit to base 10.
  digit = parseInt(input.slice(digitStart, index), 16);

  // Fraction part is optional.
  var foundFraction = false;
  if ("." === input.charAt(index)) {
    foundFraction = true;
    fractionStart = ++index;

    while (isHexDigit(input.charCodeAt(index))) ++index;
    fraction = input.slice(fractionStart, index);

    // Empty fraction parts should default to 0, others should be converted
    // 0.x form so we can use summation at the end.
    fraction = fractionStart === index ? 0 : parseInt(fraction as string, 16) / Math.pow(16, index - fractionStart);
  }

  // Binary exponents are optional
  var foundBinaryExponent = false;
  if (!!input.charAt(index) && "pP".indexOf(input.charAt(index)) >= 0) {
    foundBinaryExponent = true;
    ++index;

    // Sign part is optional and defaults to 1 (positive).
    if (!!input.charAt(index) && "+-".indexOf(input.charAt(index)) >= 0) binarySign = "+" === input.charAt(index++) ? 1 : -1;

    exponentStart = index;

    // The binary exponent sign requires a decimal digit.
    if (!isDecDigit(input.charCodeAt(index))) raise(null, errors.malformedNumber, input.slice(tokenStart, index));

    while (isDecDigit(input.charCodeAt(index))) ++index;
    binaryExponent = parseInt(input.slice(exponentStart, index));

    // Calculate the binary exponent of the number.
    binaryExponent = Math.pow(2, binaryExponent * binarySign);
  }

  return {
    value: (digit + fraction) * binaryExponent,

    hasFractionPart: foundFraction || foundBinaryExponent,
  };
}

/**
 * Decimal numbers are exactly the same in Lua and in JavaScript, because of
 * this we check where the token ends and then parse it with native
 * functions.
 */
function readDecLiteral() {
  while (isDecDigit(input.charCodeAt(index))) ++index;
  // Fraction part is optional
  var foundFraction = false;
  if ("." === input.charAt(index)) {
    foundFraction = true;
    ++index;
    // Fraction part defaults to 0
    while (isDecDigit(input.charCodeAt(index))) ++index;
  }
  // Exponent part is optional.
  var foundExponent = false;
  if (!!input.charAt(index) && "eE".indexOf(input.charAt(index)) >= 0) {
    foundExponent = true;
    ++index;
    // Sign part is optional.
    if (!!input.charAt(index) && "+-".indexOf(input.charAt(index)) >= 0) ++index;
    // An exponent is required to contain at least one decimal digit.
    if (!isDecDigit(input.charCodeAt(index))) raise(null, errors.malformedNumber, input.slice(tokenStart, index));

    while (isDecDigit(input.charCodeAt(index))) ++index;
  }

  return {
    value: parseFloat(input.slice(tokenStart, index)),

    hasFractionPart: foundFraction || foundExponent,
  };
}

function readUnicodeEscapeSequence() {
  const sequenceStart = index++;

  if (input.charAt(index++) !== "{") raise(null, errors.braceExpected, "{", "\\" + input.slice(sequenceStart, index));
  if (!isHexDigit(input.charCodeAt(index))) raise(null, errors.hexadecimalDigitExpected, "\\" + input.slice(sequenceStart, index));

  while (input.charCodeAt(index) === 0x30) ++index;
  const escStart = index;

  while (isHexDigit(input.charCodeAt(index))) {
    ++index;
    if (index - escStart > 6) raise(null, errors.tooLargeCodepoint, "\\" + input.slice(sequenceStart, index));
  }

  const b = input.charAt(index++);
  if (b !== "}") {
    if (b === '"' || b === "'") raise(null, errors.braceExpected, "}", "\\" + input.slice(sequenceStart, index--));
    else raise(null, errors.hexadecimalDigitExpected, "\\" + input.slice(sequenceStart, index));
  }

  const codepoint = parseInt(input.slice(escStart, index - 1) || "0", 16);
  const frag = "\\" + input.slice(sequenceStart, index);

  if (codepoint > 0x10ffff) {
    raise(null, errors.tooLargeCodepoint, frag);
  }

  return encodingMode.encodeUTF8(codepoint, frag);
}

/** Translate escape sequences to the actual characters. */
function readEscapeSequence() {
  const sequenceStart = index;
  switch (input.charAt(index)) {
    // Lua allow the following escape sequences.
    case "a":
      ++index;
      return "\x07";
    case "n":
      ++index;
      return "\n";
    case "r":
      ++index;
      return "\r";
    case "t":
      ++index;
      return "\t";
    case "v":
      ++index;
      return "\x0b";
    case "b":
      ++index;
      return "\b";
    case "f":
      ++index;
      return "\f";

    // Backslash at the end of the line. We treat all line endings as equivalent,
    // and as representing the [LF] character (code 10). Lua 5.1 through 5.3
    // have been verified to behave the same way.
    case "\r":
    case "\n":
      consumeEOL();
      return "\n";

    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      // \ddd, where ddd is a sequence of up to three decimal digits.
      while (isDecDigit(input.charCodeAt(index)) && index - sequenceStart < 3) ++index;

      const frag = input.slice(sequenceStart, index);
      const ddd = parseInt(frag, 10);
      if (ddd > 255) {
        raise(null, errors.decimalEscapeTooLarge, "\\" + ddd);
      }
      return encodingMode.encodeByte(ddd, "\\" + frag);

    case "z":
      if (features.skipWhitespaceEscape) {
        ++index;
        skipWhiteSpace();
        return "";
      }
      break;

    case "x":
      if (features.hexEscapes) {
        // \xXX, where XX is a sequence of exactly two hexadecimal digits
        if (isHexDigit(input.charCodeAt(index + 1)) && isHexDigit(input.charCodeAt(index + 2))) {
          index += 3;
          return encodingMode.encodeByte(parseInt(input.slice(sequenceStart + 1, index), 16), "\\" + input.slice(sequenceStart, index));
        }
        raise(null, errors.hexadecimalDigitExpected, "\\" + input.slice(sequenceStart, index + 2));
      }
      break;

    case "u":
      if (features.unicodeEscapes) return readUnicodeEscapeSequence();
      break;

    case "\\":
    case '"':
    case "'":
      return input.charAt(index++);
  }

  if (features.strictEscapes) raise(null, errors.invalidEscape, "\\" + input.slice(sequenceStart, index + 1));
  return input.charAt(index++);
}

/**
 * Comments begin with -- after which it will be decided if they are
 * multiline comments or not.
 *
 * The multiline functionality works the exact same way as with string
 * literals so we reuse the functionality.
 */
function scanComment() {
  tokenStart = index;
  index += 2; // --

  const character = input.charAt(index);
  let content: string | boolean = "",
    isLong = false;
  const commentStart = index,
    lineStartComment = lineStart,
    lineComment = line;

  if ("[" === character) {
    content = readLongString(true);
    // This wasn't a multiline comment after all.
    if (false === content) content = character;
    else isLong = true;
  }
  // Scan until next line as long as it's not a multiline comment.
  if (!isLong) {
    while (index < length) {
      if (isLineTerminator(input.charCodeAt(index))) break;
      ++index;
    }
    if (options.comments) content = input.slice(commentStart, index);
  }

  if (options.comments) {
    const node = ast.comment(content, input.slice(tokenStart, index));

    // `Marker`s depend on tokens available in the parser and as comments are
    // intercepted in the lexer all location data is set manually.
    if (options.locations) {
      node.loc = {
        start: { line: lineComment, column: tokenStart - lineStartComment },
        end: { line: line, column: index - lineStart },
      };
    }
    if (options.ranges) {
      node.range = [tokenStart, index];
    }
    if (options.onCreateNode) options.onCreateNode(node);
    comments.push(node);
  }
}

/**
 * Read a multiline string by calculating the depth of `=` characters and
 * then appending until an equal depth is found.
 */
function readLongString(isComment: boolean) {
  let level = 0,
    content = "",
    terminator = false,
    character: string,
    stringStart: number;
  const firstLine = line;

  ++index; // [

  // Calculate the depth of the comment.
  while ("=" === input.charAt(index + level)) ++level;
  // Exit, this is not a long string afterall.
  if ("[" !== input.charAt(index + level)) return false;

  index += level + 1;

  // If the first character is a newline, ignore it and begin on next line.
  if (isLineTerminator(input.charCodeAt(index))) consumeEOL();

  stringStart = index;
  while (index < length) {
    // To keep track of line numbers run the `consumeEOL()` which increments
    // its counter.
    while (isLineTerminator(input.charCodeAt(index))) consumeEOL();

    character = input.charAt(index++);

    // Once the delimiter is found, iterate through the depth count and see
    // if it matches.
    if ("]" === character) {
      terminator = true;
      for (let i = 0; i < level; ++i) {
        if ("=" !== input.charAt(index + i)) terminator = false;
      }
      if ("]" !== input.charAt(index + level)) terminator = false;
    }

    // We reached the end of the multiline string. Get out now.
    if (terminator) {
      content += input.slice(stringStart, index - 1);
      index += level + 1;
      return content;
    }
  }

  raise(null, isComment ? errors.unfinishedLongComment : errors.unfinishedLongString, firstLine, "<eof>");
  throw new Error("This should not happen");
}

/**
 * ## Lex functions and helpers.
 *
 * Read the next token.
 *
 * This is actually done by setting the current token to the lookahead and
 * reading in the new lookahead token.
 */
function next() {
  previousToken = token;
  token = lookahead;
  lookahead = lex();
}

/**
 * Consume a token if its value matches. Once consumed or not, return the
 * success of the operation.
 */
function consume(value: string) {
  if (value === token.value) {
    next();
    return true;
  }
  return false;
}

/** Expect the next token value to match. If not, throw an exception. */
function expect(value: string) {
  if (value === token.value) next();
  else raise(token, errors.expected, value, tokenValue(token));
}

// ### Validation functions

function isWhiteSpace(charCode: number) {
  return 9 === charCode || 32 === charCode || 0xb === charCode || 0xc === charCode;
}

function isLineTerminator(charCode: number) {
  return 10 === charCode || 13 === charCode;
}

function isDecDigit(charCode: number) {
  return charCode >= 48 && charCode <= 57;
}

function isHexDigit(charCode: number) {
  return (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 102) || (charCode >= 65 && charCode <= 70);
}

/**
 * From [Lua 5.2](http://www.lua.org/manual/5.2/manual.html#8.1) onwards
 * identifiers cannot use 'locale-dependent' letters (i.e. dependent on the C locale).
 * On the other hand, LuaJIT allows arbitrary octets ≥ 128 in identifiers.
 */
function isIdentifierStart(charCode: number) {
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || 95 === charCode) return true;
  if (features.extendedIdentifiers && charCode >= 128) return true;
  return false;
}

function isIdentifierPart(charCode: number) {
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || 95 === charCode || (charCode >= 48 && charCode <= 57)) return true;
  if (features.extendedIdentifiers && charCode >= 128) return true;
  return false;
}

/**
 * [3.1 Lexical Conventions](http://www.lua.org/manual/5.2/manual.html#3.1)
 *
 * `true`, `false` and `nil` will not be considered keywords, but literals.
 */
function isKeyword(id: string) {
  switch (id.length) {
    case 2:
      return "do" === id || "if" === id || "in" === id || "or" === id;
    case 3:
      return "and" === id || "end" === id || "for" === id || "not" === id;
    case 4:
      if ("else" === id || "then" === id) return true;
      if (features.labels && !features.contextualGoto) return "goto" === id;
      return false;
    case 5:
      return "break" === id || "local" === id || "until" === id || "while" === id;
    case 6:
      return "elseif" === id || "repeat" === id || "return" === id;
    case 8:
      return "function" === id;
  }
  return false;
}

function isUnary(token: Token) {
  if (TokenType.Punctuator === token.type) return "#-~".indexOf(token.value as string) >= 0;
  if (TokenType.Keyword === token.type) return "not" === token.value;
  return false;
}

/** Check if the token syntactically closes a block. */
function isBlockFollow(token: Token) {
  if (TokenType.EOF === token.type) return true;
  if (TokenType.Keyword !== token.type) return false;
  switch (token.value) {
    case "else":
    case "elseif":
    case "end":
    case "until":
      return true;
    default:
      return false;
  }
}

// Scope
// -----

// Store each block scope as a an array of identifier names. Each scope is
// stored in an FILO-array.
let scopes: string[][],
  // The current scope index
  scopeDepth: number,
  // A list of all global identifier nodes.
  globals: Identifier[];

/** Create a new scope inheriting all declarations from the previous scope. */
function createScope() {
  const scope = scopes[scopeDepth++].slice();
  scopes.push(scope);
  if (options.onCreateScope) options.onCreateScope();
}

/** Exit and remove the current scope. */
function destroyScope() {
  const scope = scopes.pop();
  --scopeDepth;
  if (options.onDestroyScope) options.onDestroyScope();
}

/** Add identifier name to the current scope if it doesnt already exist. */
function scopeIdentifierName(name: string) {
  if (options.onLocalDeclaration) options.onLocalDeclaration(name);
  if (-1 !== scopes[scopeDepth].indexOf(name)) return;
  scopes[scopeDepth].push(name);
}

/** Add identifier to the current scope */
function scopeIdentifier(node: Identifier) {
  scopeIdentifierName(node.name);
  attachScope(node, true);
}

/**
 * Attach scope information to node. If the node is global, store it in the
 * globals array so we can return the information to the user.
 */
function attachScope(node: Identifier, isLocal: boolean) {
  if (!isLocal && -1 === indexOfObject(globals, "name", node.name)) globals.push(node);

  node.isLocal = isLocal;
}

/** Is the identifier name available in this scope. */
function scopeHasName(name: string) {
  return -1 !== scopes[scopeDepth].indexOf(name);
}

/**
 * Location tracking
 * -----------------
 *
 * Locations are stored in FILO-array as a `Marker` object consisting of both
 * `loc` and `range` data. Once a `Marker` is popped off the list an end
 * location is added and the data is attached to a syntax node.
 */
let locations: (Marker | null)[] = [],
  trackLocations: boolean;

function createLocationMarker(): Marker {
  return new Marker(token);
}

class Marker {
  public loc: Location | null = null;
  public range: TextRange | null = null;

  constructor(token: Token) {
    if (options.locations) {
      this.loc = {
        start: {
          line: token.line,
          column: token.range[0] - token.lineStart,
        },
        end: {
          line: 0,
          column: 0,
        },
      };
    }
    if (options.ranges) this.range = [token.range[0], 0];
  }

  /**
   * Complete the location data stored in the `Marker` by adding the location
   * of the *previous token* as an end location.
   */
  public complete() {
    if (options.locations && !!this.loc) {
      this.loc.end.line = previousToken.lastLine || previousToken.line;
      this.loc.end.column = previousToken.range[1] - (previousToken.lastLineStart || previousToken.lineStart);
    }
    if (options.ranges && !!this.range) {
      this.range[1] = previousToken.range[1];
    }
  }

  public bless(node: Node) {
    if (this.loc) {
      const loc = this.loc;
      node.loc = {
        start: {
          line: loc.start.line,
          column: loc.start.column,
        },
        end: {
          line: loc.end.line,
          column: loc.end.column,
        },
      };
    }
    if (this.range) {
      node.range = [this.range[0], this.range[1]];
    }
  }
}

/** Create a new `Marker` and add it to the FILO-array. */
function markLocation() {
  if (trackLocations) locations.push(createLocationMarker());
}

/** Push an arbitrary `Marker` object onto the FILO-array. */
function pushLocation(marker: Marker | null) {
  if (trackLocations) locations.push(marker);
}

// Control flow tracking
// ---------------------
// A context object that validates loop breaks and `goto`-based control flow.

interface Label {
  localCount: number;
  line: number;
}

interface Scope {
  labels: { [key: string]: Label };
  locals: {
    name: string;
    token: Token;
  }[];
  deferredGotos: Goto[];
  isLoop: boolean;
}

interface Goto {
  maxDepth: number;
  target: string;
  token: Token;
  localCounts: number[];
}

interface FlowContext {
  allowVararg?: boolean;
  isInLoop(): boolean;
  pushScope(isLoop?: boolean): void;
  popScope(): void;

  addGoto(target?: string, token?: Token): void;
  addLabel(target?: string, token?: Token): void;

  addLocal(name?: string, token?: Token): void;
  raiseDeferredErrors(): void;
}

class FullFlowContext implements FlowContext {
  public allowVararg?: boolean;

  constructor(public scopes: Scope[] = [], public pendingGotos: Goto[] = []) {}

  public isInLoop() {
    let i = this.scopes.length;
    while (i-- > 0) {
      if (this.scopes[i].isLoop) return true;
    }
    return false;
  }

  public pushScope(isLoop?: boolean) {
    const scope: Scope = {
      labels: {},
      locals: [],
      deferredGotos: [],
      isLoop: !!isLoop,
    };
    this.scopes.push(scope);
  }

  public popScope() {
    for (let i = 0; i < this.pendingGotos.length; ++i) {
      const theGoto = this.pendingGotos[i];
      if (theGoto.maxDepth >= this.scopes.length) if (--theGoto.maxDepth <= 0) raise(theGoto.token, errors.labelNotVisible, theGoto.target);
    }

    this.scopes.pop();
  }

  public addGoto(target: string, token: Token) {
    const localCounts: number[] = [];

    for (let i = 0; i < this.scopes.length; ++i) {
      const scope = this.scopes[i];
      localCounts.push(scope.locals.length);
      if (Object.prototype.hasOwnProperty.call(scope.labels, target)) return;
    }

    this.pendingGotos.push({
      maxDepth: this.scopes.length,
      target: target,
      token: token,
      localCounts: localCounts,
    });
  }

  public addLabel(name: string, token: Token) {
    const scope = this.currentScope();

    if (Object.prototype.hasOwnProperty.call(scope.labels, name)) {
      raise(token, errors.labelAlreadyDefined, name, scope.labels[name].line);
    } else {
      const newGotos: Goto[] = [];

      for (let i = 0; i < this.pendingGotos.length; ++i) {
        const theGoto = this.pendingGotos[i];

        if (theGoto.maxDepth >= this.scopes.length && theGoto.target === name) {
          if (theGoto.localCounts[this.scopes.length - 1] < scope.locals.length) {
            scope.deferredGotos.push(theGoto);
          }
          continue;
        }

        newGotos.push(theGoto);
      }

      this.pendingGotos = newGotos;
    }

    scope.labels[name] = {
      localCount: scope.locals.length,
      line: token.line,
    };
  }

  public addLocal(name: string, token: Token) {
    this.currentScope().locals.push({
      name: name,
      token: token,
    });
  }

  public currentScope() {
    return this.scopes[this.scopes.length - 1];
  }

  public raiseDeferredErrors() {
    const scope = this.currentScope();
    const bads = scope.deferredGotos;
    for (let i = 0; i < bads.length; ++i) {
      const theGoto = bads[i];
      raise(theGoto.token, errors.gotoJumpInLocalScope, theGoto.target, scope.locals[theGoto.localCounts[this.scopes.length - 1]].name);
    }
    // Would be dead code currently, but may be useful later
    // if (bads.length)
    //   scope.deferredGotos = [];
  }
}

/**
 * Simplified context that only checks the validity of loop breaks.
 */
class LoopFlowContext implements FlowContext {
  public allowVararg?: boolean;

  constructor(public level = 0, public loopLevels: number[] = []) {}

  public isInLoop() {
    return !!this.loopLevels.length;
  }

  public pushScope(isLoop?: boolean) {
    ++this.level;
    if (!!isLoop) {
      this.loopLevels.push(this.level);
    }
  }

  public popScope() {
    const levels = this.loopLevels;
    const levlen = levels.length;
    if (levlen) {
      if (levels[levlen - 1] === this.level) levels.pop();
    }
    --this.level;
  }

  public addGoto() {
    throw new Error("This should never happen");
  }

  public addLabel() {
    throw new Error("This should never happen");
  }

  public addLocal() {}
  public raiseDeferredErrors() {}
}

function makeFlowContext(): FlowContext {
  return features.labels ? new FullFlowContext() : new LoopFlowContext();
}

// Parse functions
// ---------------

// Chunk is the main program object. Syntactically it's the same as a block.
//
//     chunk ::= block

function parseChunk() {
  next();
  markLocation();
  if (options.scope) createScope();
  const flowContext = makeFlowContext();
  flowContext.allowVararg = true;
  flowContext.pushScope();
  const body = parseBlock(flowContext);
  flowContext.popScope();
  if (options.scope) destroyScope();
  if (TokenType.EOF !== token.type) unexpected(token);
  // If the body is empty no previousToken exists when finishNode runs.
  if (trackLocations && !body.length) previousToken = token;
  return finishNode(ast.chunk(body));
}

// A block contains a list of statements with an optional return statement
// as its last statement.
//
//     block ::= {stat} [retstat]

function parseBlock(flowContext: FlowContext): Block {
  let block: Block = [],
    statement: Statement | undefined;

  while (!isBlockFollow(token)) {
    // Return has to be the last statement in a block.
    // Likewise 'break' in Lua older than 5.2
    if ("return" === token.value || (!features.relaxedBreak && "break" === token.value)) {
      block.push(parseStatement(flowContext) as ReturnStatement | BreakStatement);
      break;
    }
    statement = parseStatement(flowContext);
    consume(";");
    // Statements are only added if they are returned, this allows us to
    // ignore some statements, such as EmptyStatement.
    if (statement) block.push(statement);
  }

  // Doesn't really need an ast node
  return block;
}

// There are two types of statements, simple and compound.
//
//     statement ::= break | goto | do | while | repeat | return
//          | if | for | function | local | label | assignment
//          | functioncall | ';'

function parseStatement(flowContext: FlowContext): Statement | undefined {
  markLocation();

  if (TokenType.Punctuator === token.type) {
    if (consume("::")) return parseLabelStatement(flowContext);
  }

  // When a `;` is encounted, simply eat it without storing it.
  if (features.emptyStatement) {
    if (consume(";")) {
      if (trackLocations) locations.pop();
      return;
    }
  }

  flowContext.raiseDeferredErrors();

  if (TokenType.Keyword === token.type) {
    switch (token.value) {
      case "local":
        next();
        return parseLocalStatement(flowContext);
      case "if":
        next();
        return parseIfStatement(flowContext);
      case "return":
        next();
        return parseReturnStatement(flowContext);
      case "function":
        next();
        const name = parseFunctionName();
        return parseFunctionDeclaration(name) as FunctionDeclaration;
      case "while":
        next();
        return parseWhileStatement(flowContext);
      case "for":
        next();
        return parseForStatement(flowContext);
      case "repeat":
        next();
        return parseRepeatStatement(flowContext);
      case "break":
        next();
        if (!flowContext.isInLoop()) raise(token, errors.noLoopToBreak, token.value);
        return parseBreakStatement();
      case "do":
        next();
        return parseDoStatement(flowContext);
      case "goto":
        next();
        return parseGotoStatement(flowContext);
    }
  }

  if (features.contextualGoto && token.type === TokenType.Identifier && token.value === "goto" && lookahead.type === TokenType.Identifier && lookahead.value !== "goto") {
    next();
    return parseGotoStatement(flowContext);
  }

  // Assignments memorizes the location and pushes it manually for wrapper nodes.
  if (trackLocations) locations.pop();

  return parseAssignmentOrCallStatement(flowContext);
}

// ## Statements

//     label ::= '::' Name '::'

function parseLabelStatement(flowContext: FlowContext) {
  const nameToken: Token = token,
    label = parseIdentifier();

  if (options.scope) {
    scopeIdentifierName("::" + nameToken.value + "::");
    attachScope(label, true);
  }

  expect("::");

  flowContext.addLabel(nameToken.value as string, nameToken);
  return finishNode(ast.labelStatement(label));
}

//     break ::= 'break'

function parseBreakStatement() {
  consume(';');
  return finishNode(ast.breakStatement());
}

//     goto ::= 'goto' Name

function parseGotoStatement(flowContext: FlowContext) {
  const name = token.value as string,
    gotoToken = previousToken,
    label = parseIdentifier();

  flowContext.addGoto(name, gotoToken);
  return finishNode(ast.gotoStatement(label));
}

//     do ::= 'do' block 'end'

function parseDoStatement(flowContext: FlowContext) {
  if (options.scope) createScope();
  flowContext.pushScope();
  const body = parseBlock(flowContext);
  flowContext.popScope();
  if (options.scope) destroyScope();
  expect("end");
  return finishNode(ast.doStatement(body));
}

//     while ::= 'while' exp 'do' block 'end'

function parseWhileStatement(flowContext: FlowContext) {
  const condition = parseExpectedExpression(flowContext);
  expect("do");
  if (options.scope) createScope();
  flowContext.pushScope(true);
  const body = parseBlock(flowContext);
  flowContext.popScope();
  if (options.scope) destroyScope();
  expect("end");
  return finishNode(ast.whileStatement(condition, body));
}

//     repeat ::= 'repeat' block 'until' exp

function parseRepeatStatement(flowContext: FlowContext) {
  if (options.scope) createScope();
  flowContext.pushScope(true);
  const body = parseBlock(flowContext);
  expect("until");
  flowContext.raiseDeferredErrors();
  const condition = parseExpectedExpression(flowContext);
  flowContext.popScope();
  if (options.scope) destroyScope();
  return finishNode(ast.repeatStatement(condition, body));
}

//     retstat ::= 'return' [exp {',' exp}] [';']

function parseReturnStatement(flowContext: FlowContext) {
  let expressions: Expression[] = [];

  if ("end" !== token.value) {
    let expression = parseExpression(flowContext);
    if (null != expression) {
      expressions.push(expression);
      while (consume(',')) {
        expression = parseExpectedExpression(flowContext);
        expressions.push(expression);
      }
    }
    consume(";"); // grammar tells us ; is optional here.
  }
  return finishNode(ast.returnStatement(expressions));
}

//     if ::= 'if' exp 'then' block {elif} ['else' block] 'end'
//     elif ::= 'elseif' exp 'then' block

function parseIfStatement(flowContext: FlowContext) {
  let clauses: IfClauses,
    condition: Expression,
    body: Block,
    marker: Marker | null = null;

  // IfClauses begin at the same location as the parent IfStatement.
  // It ends at the start of `end`, `else`, or `elseif`.
  if (trackLocations) {
    marker = locations[locations.length - 1];
    locations.push(marker);
  }
  condition = parseExpectedExpression(flowContext);
  expect("then");
  if (options.scope) createScope();
  flowContext.pushScope();
  body = parseBlock(flowContext);
  flowContext.popScope();
  if (options.scope) destroyScope();
  clauses = [finishNode(ast.ifClause(condition, body))];

  if (trackLocations) marker = createLocationMarker();
  while (consume("elseif")) {
    pushLocation(marker);
    condition = parseExpectedExpression(flowContext);
    expect("then");
    if (options.scope) createScope();
    flowContext.pushScope();
    body = parseBlock(flowContext);
    flowContext.popScope();
    if (options.scope) destroyScope();
    clauses.push(finishNode(ast.elseifClause(condition, body)));
    if (trackLocations) marker = createLocationMarker();
  }

  if (consume("else")) {
    // Include the `else` in the location of ElseClause.
    if (trackLocations) {
      marker = new Marker(previousToken);
      locations.push(marker);
    }
    if (options.scope) createScope();
    flowContext.pushScope();
    body = parseBlock(flowContext);
    flowContext.popScope();
    if (options.scope) destroyScope();
    clauses.push(finishNode(ast.elseClause(body)));
  }

  expect("end");
  return finishNode(ast.ifStatement(clauses));
}

// There are two types of for statements, generic and numeric.
//
//     for ::= Name '=' exp ',' exp [',' exp] 'do' block 'end'
//     for ::= namelist 'in' explist 'do' block 'end'
//     namelist ::= Name {',' Name}
//     explist ::= exp {',' exp}

function parseForStatement(flowContext: FlowContext) {
  let variable = parseIdentifier(),
    body: Block;

  // The start-identifier is local.

  if (options.scope) {
    createScope();
    scopeIdentifier(variable);
  }

  // If the first expression is followed by a `=` punctuator, this is a
  // Numeric For Statement.
  if (consume("=")) {
    // Start expression
    const start = parseExpectedExpression(flowContext);
    expect(",");
    // End expression
    const end = parseExpectedExpression(flowContext);
    // Optional step expression
    const step = consume(",") ? parseExpectedExpression(flowContext) : null;

    expect("do");
    flowContext.pushScope(true);
    body = parseBlock(flowContext);
    flowContext.popScope();
    expect("end");
    if (options.scope) destroyScope();

    return finishNode(ast.forNumericStatement(variable, start, end, step, body));
  }
  // If not, it's a Generic For Statement
  else {
    // The namelist can contain one or more identifiers.
    const variables = [variable];
    while (consume(",")) {
      variable = parseIdentifier();
      // Each variable in the namelist is locally scoped.
      if (options.scope) scopeIdentifier(variable);
      variables.push(variable);
    }
    expect("in");
    const iterators: Array<Expression> = [];

    // One or more expressions in the explist.
    do {
      const expression = parseExpectedExpression(flowContext);
      iterators.push(expression);
    } while (consume(","));

    expect("do");
    flowContext.pushScope(true);
    body = parseBlock(flowContext);
    flowContext.popScope();
    expect("end");
    if (options.scope) destroyScope();

    return finishNode(ast.forGenericStatement(variables, iterators, body));
  }
}

// Local statements can either be variable assignments or function
// definitions. If a function definition is found, it will be delegated to
// `parseFunctionDeclaration()` with the isLocal flag.
//
// This AST structure might change into a local assignment with a function
// child.
//
//     local ::= 'local' 'function' Name funcdecl
//        | 'local' Name {',' Name} ['=' exp {',' exp}]

function parseLocalStatement(flowContext: FlowContext) {
  let name: Identifier,
    declToken = previousToken;

  if (TokenType.Identifier === token.type) {
    let variables: Identifier[] = [],
      init: Expression[] = [];

    do {
      name = parseIdentifier();

      variables.push(name);
      flowContext.addLocal(name.name, declToken);
    } while (consume(","));

    if (consume("=")) {
      do {
        const expression = parseExpectedExpression(flowContext);
        init.push(expression);
      } while (consume(","));
    }

    // Declarations doesn't exist before the statement has been evaluated.
    // Therefore assignments can't use their declarator. And the identifiers
    // shouldn't be added to the scope until the statement is complete.
    if (options.scope) {
      for (let i = 0, l = variables.length; i < l; ++i) {
        scopeIdentifier(variables[i]);
      }
    }

    return finishNode(ast.localStatement(variables, init));
  }
  if (consume("function")) {
    name = parseIdentifier();
    flowContext.addLocal(name.name, declToken);

    if (options.scope) {
      scopeIdentifier(name);
      createScope();
    }

    // MemberExpressions are not allowed in local function statements.
    return parseFunctionDeclaration(name, true) as FunctionDeclaration;
  } else {
    raiseUnexpectedToken("<name>", token);
  }
}

//     assignment ::= varlist '=' explist
//     const ::= Name | prefixexp '[' exp ']' | prefixexp '.' Name
//     varlist ::= const {',' const}
//     explist ::= exp {',' exp}
//
//     call ::= callexp
//     callexp ::= prefixexp args | prefixexp ':' Name args

function parseAssignmentOrCallStatement(flowContext: FlowContext) {
  // Keep a reference to the previous token for better error messages in case
  // of invalid statement
  // Warning: 'previous' is declared but its value is never read.
  let previous = token,
    marker: Marker | null = null,
    startMarker: Marker | null = null;
  let lvalue, base: Expression, name;

  let targets: Expression[] = [];

  if (trackLocations) startMarker = createLocationMarker();

  do {
    if (trackLocations) marker = createLocationMarker();

    if (TokenType.Identifier === token.type) {
      name = token.value as string;
      base = parseIdentifier();
      // Set the parent scope.
      if (options.scope) attachScope(base as Identifier, scopeHasName(name));
      lvalue = true;
    } else if ("(" === token.value) {
      next();
      base = parseExpectedExpression(flowContext);
      base.inParens = true;
      expect(")");
      lvalue = false;
    } else {
      return unexpected(token);
    }

    both: for (;;) {
      // Warning: 'newBase' is declared but its value is never read.
      let newBase;

      switch (TokenType.StringLiteral === token.type ? '"' : token.value) {
        case ".":
        case "[":
          lvalue = true;
          break;
        case ":":
        case "(":
        case "{":
        case '"':
          lvalue = null;
          break;
        default:
          break both;
      }

      base = parsePrefixExpressionPart(base as Expression, marker, flowContext) as Expression;
    }

    targets.push(base);

    if ("," !== token.value) break;

    if (!lvalue) {
      return unexpected(token);
    }

    next();
  } while (true);

  if (targets.length === 1 && lvalue === null) {
    pushLocation(marker);
    return finishNode(ast.callStatement(targets[0] as CallExpression));
  } else if (!lvalue) {
    return unexpected(token);
  }

  expect("=");

  const values: Array<Expression> = [];

  do {
    values.push(parseExpectedExpression(flowContext));
  } while (consume(","));

  pushLocation(startMarker);
  return finishNode(ast.assignmentStatement(targets as (Identifier | MemberExpression | IndexExpression)[], values));
}

// ### Non-statements

//     Identifier ::= Name

function parseIdentifier() {
  markLocation();
  const identifier = token.value as string;
  if (TokenType.Identifier !== token.type) raiseUnexpectedToken("<name>", token);
  next();
  return finishNode(ast.identifier(identifier));
}

// Parse the functions parameters and body block. The name should already
// have been parsed and passed to this declaration function. By separating
// this we allow for anonymous functions in expressions.
//
// For local functions there's a boolean parameter which needs to be set
// when parsing the declaration.
//
//     funcdecl ::= '(' [parlist] ')' block 'end'
//     parlist ::= Name {',' Name} | [',' '...'] | '...'

function parseFunctionDeclaration(name: Identifier | MemberExpression | null, isLocal = false) {
  const flowContext = makeFlowContext();
  flowContext.pushScope();

  const parameters: (Identifier | VarargLiteral)[] = [];
  expect("(");

  // The declaration has arguments
  if (!consume(")")) {
    // Arguments are a comma separated list of identifiers, optionally ending
    // with a vararg.
    while (true) {
      if (TokenType.Identifier === token.type) {
        const parameter = parseIdentifier();
        // Function parameters are local.
        if (options.scope) scopeIdentifier(parameter);

        parameters.push(parameter);

        if (consume(",")) continue;
      }
      // No arguments are allowed after a vararg.
      else if (TokenType.VarargLiteral === token.type) {
        flowContext.allowVararg = true;
        parameters.push(parsePrimaryExpression(flowContext) as VarargLiteral);
      } else {
        raiseUnexpectedToken("<name> or '...'", token);
      }
      expect(")");
      break;
    }
  }

  const body = parseBlock(flowContext);
  flowContext.popScope();
  expect("end");
  if (options.scope) destroyScope();

  return finishNode(ast.functionStatement(name, parameters, isLocal, body));
}

// Parse the function name as identifiers and member expressions.
//
//     Name {'.' Name} [':' Name]

function parseFunctionName() {
  let base: Identifier | MemberExpression,
    name: Identifier,
    marker: Marker | null = null;

  if (trackLocations) marker = createLocationMarker();
  base = parseIdentifier();

  if (options.scope) {
    attachScope(base, scopeHasName(base.name));
    createScope();
  }

  while (consume(".")) {
    pushLocation(marker);
    name = parseIdentifier();
    base = finishNode(ast.memberExpression(base, ".", name));
  }

  if (consume(":")) {
    pushLocation(marker);
    name = parseIdentifier();
    base = finishNode(ast.memberExpression(base, ":", name));
    if (options.scope) scopeIdentifierName("self");
  }

  return base;
}

//     tableconstructor ::= '{' [fieldlist] '}'
//     fieldlist ::= field {fieldsep field} fieldsep
//     field ::= '[' exp ']' '=' exp | Name = 'exp' | exp
//
//     fieldsep ::= ',' | ';'

function parseTableConstructor(flowContext: FlowContext) {
  let fields: (TableKey | TableKeyString | TableValue)[] = [],
    key,
    value;

  while (true) {
    markLocation();
    if (TokenType.Punctuator === token.type && consume("[")) {
      key = parseExpectedExpression(flowContext);
      expect("]");
      expect("=");
      value = parseExpectedExpression(flowContext);
      fields.push(finishNode(ast.tableKey(key, value)));
    } else if (TokenType.Identifier === token.type) {
      if ("=" === lookahead.value) {
        key = parseIdentifier();
        next();
        value = parseExpectedExpression(flowContext);
        fields.push(finishNode(ast.tableKeyString(key, value)));
      } else {
        value = parseExpectedExpression(flowContext);
        fields.push(finishNode(ast.tableValue(value)));
      }
    } else {
      if (null == (value = parseExpression(flowContext))) {
        locations.pop();
        break;
      }
      fields.push(finishNode(ast.tableValue(value)));
    }
    if (",;".indexOf(token.value as string) >= 0) {
      next();
      continue;
    }
    break;
  }
  expect("}");
  return finishNode(ast.tableConstructorExpression(fields));
}

// Expression parser
// -----------------
//
// Expressions are evaluated and always return a value. If nothing is
// matched null will be returned.
//
//     exp ::= (unop exp | primary | prefixexp ) { binop exp }
//
//     primary ::= nil | false | true | Number | String | '...'
//          | functiondef | tableconstructor
//
//     prefixexp ::= (Name | '(' exp ')' ) { '[' exp ']'
//          | '.' Name | ':' Name args | args }
//

function parseExpression(flowContext: FlowContext): Expression | null {
  const expression = parseSubExpression(0, flowContext);
  return expression;
}

// Parse an expression expecting it to be valid.

function parseExpectedExpression(flowContext: FlowContext): Expression {
  const expression = parseExpression(flowContext);
  if (null == expression) raiseUnexpectedToken("<expression>", token);
  else return expression;
  throw new Error("This should not happen");
}

// Return the precedence priority of the operator.
//
// As unary `-` can't be distinguished from binary `-`, unary precedence
// isn't described in this table but in `parseSubExpression()` itself.
//
// As this function gets hit on every expression it's been optimized due to
// the expensive CompareICStub which took ~8% of the parse time.

function binaryPrecedence(operator: string) {
  const charCode = operator.charCodeAt(0),
    length = operator.length;

  if (1 === length) {
    switch (charCode) {
      case 94:
        return 12; // ^
      case 42:
      case 47:
      case 37:
        return 10; // * / %
      case 43:
      case 45:
        return 9; // + -
      case 38:
        return 6; // &
      case 126:
        return 5; // ~
      case 124:
        return 4; // |
      case 60:
      case 62:
        return 3; // < >
    }
  } else if (2 === length) {
    switch (charCode) {
      case 47:
        return 10; // //
      case 46:
        return 8; // ..
      case 60:
      case 62:
        if ("<<" === operator || ">>" === operator) return 7; // << >>
        return 3; // <= >=
      case 61:
      case 126:
        return 3; // == ~=
      case 111:
        return 1; // or
    }
  } else if (97 === charCode && "and" === operator) return 2;
  return 0;
}

// Implement an operator-precedence parser to handle binary operator
// precedence.
//
// We use this algorithm because it's compact, it's fast and Lua core uses
// the same so we can be sure our expressions are parsed in the same manner
// without excessive amounts of tests.
//
//     exp ::= (unop exp | primary | prefixexp ) { binop exp }

function parseSubExpression(minPrecedence: number, flowContext: FlowContext): Expression | null {
  let operator = token.value as string,
    // The left-hand side in binary operations.
    expression: Expression | null = null,
    marker: Marker | null = null;

  if (trackLocations) marker = createLocationMarker();

  // UnaryExpression
  if (isUnary(token)) {
    markLocation();
    next();
    const argument = parseSubExpression(10, flowContext);
    if (argument == null) return raiseUnexpectedToken("<expression>", token);
    expression = finishNode(ast.unaryExpression(operator as UnaryOperator, argument));
  }
  if (null == expression) {
    // PrimaryExpression
    expression = parsePrimaryExpression(flowContext);

    // PrefixExpression
    if (null == expression) {
      expression = parsePrefixExpression(flowContext);
    }
  }
  // This is not a valid left hand expression.
  if (null == expression) return null;

  let precedence: number;
  while (true) {
    operator = token.value as string;

    precedence = TokenType.Punctuator === token.type || TokenType.Keyword === token.type ? binaryPrecedence(operator) : 0;

    if (precedence === 0 || precedence <= minPrecedence) break;
    // Right-hand precedence operators
    if ("^" === operator || ".." === operator) --precedence;
    next();
    const right = parseSubExpression(precedence, flowContext);
    if (null == right) return raiseUnexpectedToken("<expression>", token);
    // Push in the marker created before the loop to wrap its entirety.
    if (trackLocations) locations.push(marker);
    expression = finishNode(ast.binaryExpression(operator as BinaryOperator | LogicalOperator, expression, right));
  }
  return expression;
}

//     prefixexp ::= prefix {suffix}
//     prefix ::= Name | '(' exp ')'
//     suffix ::= '[' exp ']' | '.' Name | ':' Name args | args
//
//     args ::= '(' [explist] ')' | tableconstructor | String

function parsePrefixExpressionPart(base: Expression, marker: Marker | null, flowContext: FlowContext): Expression | null {
  let expression: Expression, identifier: Identifier;

  if (TokenType.Punctuator === token.type) {
    switch (token.value) {
      case "[":
        pushLocation(marker);
        next();
        expression = parseExpectedExpression(flowContext);
        expect("]");
        return finishNode(ast.indexExpression(base, expression));
      case ".":
        pushLocation(marker);
        next();
        identifier = parseIdentifier();
        return finishNode(ast.memberExpression(base, ".", identifier));
      case ":":
        pushLocation(marker);
        next();
        identifier = parseIdentifier();
        base = finishNode(ast.memberExpression(base, ":", identifier));
        // Once a : is found, this has to be a CallExpression, otherwise
        // throw an error.
        pushLocation(marker);
        return parseCallExpression(base as MemberExpression, flowContext) as Expression;
      case "(":
      case "{": // args
        pushLocation(marker);
        return parseCallExpression(base as Identifier | MemberExpression, flowContext) as Expression;
    }
  } else if (TokenType.StringLiteral === token.type) {
    pushLocation(marker);
    return parseCallExpression(base as Identifier | MemberExpression, flowContext) as Expression;
  }

  return null;
}

function parsePrefixExpression(flowContext: FlowContext): Expression | null {
  let base: Expression,
    name: string,
    marker: Marker | null = null,
    inParens: boolean = false;

  if (trackLocations) marker = createLocationMarker();

  // The prefix
  if (TokenType.Identifier === token.type) {
    name = token.value as string;
    base = parseIdentifier();
    // Set the parent scope.
    if (options.scope) attachScope(base as Identifier, scopeHasName(name));
  } else if (consume("(")) {
    if (options.preserveParens) pushLocation(marker);
    base = parseExpectedExpression(flowContext);
    expect(")");
    inParens = true;
    if (options.preserveParens) return finishNode(ast.parenthesizedExpression(base)) as unknown as Expression;
  } else {
    return null;
  }

  // The suffix
  for (;;) {
    const newBase = parsePrefixExpressionPart(base, marker, flowContext);
    if (newBase === null) break;
    base = newBase;
    inParens = false;
  }

  if (inParens) {
    pushLocation(marker);
    return finishNode(ast.unaryExpression('', base));
  }

  return base;
}

//     args ::= '(' [explist] ')' | tableconstructor | String

function parseCallExpression(base: Identifier | MemberExpression, flowContext: FlowContext) {
  if (TokenType.Punctuator === token.type) {
    switch (token.value) {
      case "(":
        if (!features.emptyStatement) {
          if (token.line !== previousToken.line) raise(null, errors.ambiguousSyntax, token.value);
        }
        next();

        // List of expressions
        const expressions: Expression[] = [];
        let expression: Expression | null = parseExpression(flowContext);
        if (null != expression){
          expressions.push(expression);
          while (consume(",")) {
            expression = parseExpectedExpression(flowContext);
            expressions.push(expression);
          }
        }

        expect(")");
        return finishNode(ast.callExpression(base, expressions));

      case "{":
        markLocation();
        next();
        const table: TableConstructorExpression = parseTableConstructor(flowContext);
        return finishNode(ast.tableCallExpression(base, table));
    }
  } else if (TokenType.StringLiteral === token.type) {
    return finishNode(ast.stringCallExpression(base, parsePrimaryExpression(flowContext) as StringLiteral));
  }

  raiseUnexpectedToken("function arguments", token);
}

//     primary ::= String | Numeric | nil | true | false
//          | functiondef | tableconstructor | '...'

function parsePrimaryExpression(flowContext: FlowContext): PrimaryExpression | null {
  const literals = TokenType.StringLiteral | TokenType.NumericLiteral | TokenType.BooleanLiteral | TokenType.NilLiteral | TokenType.VarargLiteral,
    value = token.value,
    type = token.type;
  let marker: Marker | null = null;

  if (trackLocations) marker = createLocationMarker();

  if (type === TokenType.VarargLiteral && !flowContext.allowVararg) {
    raise(token, errors.cannotUseVararg, token.value);
  }

  if (type & literals) {
    pushLocation(marker);
    const raw = input.slice(token.range[0], token.range[1]);
    next();
    return finishNode(ast.literal(type, value, raw));
  } else if (TokenType.Keyword === type && "function" === value) {
    pushLocation(marker);
    next();
    if (options.scope) createScope();
    return parseFunctionDeclaration(null) as FunctionExpression;
  } else if (consume("{")) {
    pushLocation(marker);
    return parseTableConstructor(flowContext);
  }
  return null;
}

// Parser
// ------

const versionFeatures: { [luaVersion: string]: LuaFeatures } = {
  "5.1": {},
  "5.2": {
    labels: true,
    emptyStatement: true,
    hexEscapes: true,
    skipWhitespaceEscape: true,
    strictEscapes: true,
    relaxedBreak: true,
  },
  "5.3": {
    labels: true,
    emptyStatement: true,
    hexEscapes: true,
    skipWhitespaceEscape: true,
    strictEscapes: true,
    unicodeEscapes: true,
    bitwiseOperators: true,
    integerDivision: true,
    relaxedBreak: true,
    imaginaryNumbers: true,
    integerSuffixes: true,
  },
  LuaJIT: {
    // XXX: LuaJIT language features may depend on compilation options; may need to
    // rethink how to handle this. Specifically, there is a LUAJIT_ENABLE_LUA52COMPAT
    // that removes contextual goto. Maybe add 'LuaJIT-5.2compat' as well?
    labels: true,
    contextualGoto: true,
    hexEscapes: true,
    skipWhitespaceEscape: true,
    strictEscapes: true,
    unicodeEscapes: true,
  },
};

/** workaround */
declare const exports: any;

/**
 * Export the main parser.
 *
 *   - `wait` Hold parsing until end() is called. Defaults to false
 *   - `comments` Store comments. Defaults to true.
 *   - `scope` Track identifier scope. Defaults to false.
 *   - `locations` Store location information. Defaults to false.
 *   - `ranges` Store the start and end character locations. Defaults to
 *     false.
 *   - `onCreateNode` Callback which will be invoked when a syntax node is
 *     created.
 *   - `onCreateScope` Callback which will be invoked when a new scope is
 *     created.
 *   - `onDestroyScope` Callback which will be invoked when the current scope
 *     is destroyed.
 *
 * Example:
 *
 *     const parser = require('luaparser');
 *     parser.parse('i = 0');
 */
export function parse(_input?: string | Partial<ParserOptions>, _options?: Partial<ParserOptions>): Maybe<Chunk> {
  if ("undefined" === typeof _options && "object" === typeof _input) {
    _options = _input;
    _input = undefined;
  }
  if (!_options) _options = {};

  input = typeof _input === "string" ? _input : "";
  options = Object.assign({}, defaultOptions, _options);

  // Rewind the lexer
  index = 0;
  line = 1;
  lineStart = 0;
  length = input.length;
  // When tracking identifier scope, initialize with an empty scope.
  scopes = [[]];
  scopeDepth = 0;
  globals = [];
  locations = [];

  if (!Object.prototype.hasOwnProperty.call(versionFeatures, options.luaVersion)) {
    throw new Error(sprintf("Lua version '%1' not supported", options.luaVersion));
  }

  features = Object.assign({}, versionFeatures[options.luaVersion]);
  if (options.extendedIdentifiers !== void 0) features.extendedIdentifiers = !!options.extendedIdentifiers;

  if (!Object.prototype.hasOwnProperty.call(encodingModes, options.encodingMode)) {
    throw new Error(sprintf("Encoding mode '%1' not supported", options.encodingMode));
  }

  encodingMode = encodingModes[options.encodingMode];

  if (options.comments) comments = [];
  if (!options.wait) return end();
  return exports;
}

export function write(_input: string | any) {
  input += String(_input);
  length = input.length;
  return exports;
}

export function end(_input?: string) {
  if ("undefined" !== typeof _input) write(_input);

  // Ignore shebangs.
  if (input && input.substr(0, 2) === "#!") input = input.replace(/^.*/, (line: string) => line.replace(/./g, " "));

  length = input.length;
  trackLocations = options.locations || options.ranges;
  // Initialize with a lookahead token.
  lookahead = lex();

  const chunk = parseChunk();
  if (options.comments) chunk.comments = comments;
  if (options.scope) chunk.globals = globals;

  /* istanbul ignore if */
  if (locations.length > 0) throw new Error("Location tracking failed. This is most likely a bug in luaparse");

  return chunk;
}
