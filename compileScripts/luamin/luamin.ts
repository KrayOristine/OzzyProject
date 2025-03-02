import { randomBytes } from 'node:crypto';
import { Spread } from "../helper";
import {
  StringCallExpression,
  IndexExpression,
  TableCallExpression,
  FunctionExpression,
  AssignmentStatement,
  CallExpression,
  Chunk,
  Expression,
  Identifier,
  Literal,
  LogicalExpression,
  Node,
  ReturnStatement,
  UnaryExpression,
  MemberExpression,
  FunctionDeclaration,
  ForGenericStatement,
  RepeatStatement,
  DoStatement,
  WhileStatement,
  IfStatement,
  CallStatement,
  LocalStatement,
  TableConstructorExpression,
  NumericLiteral,
  Statement,
  ForNumericStatement,
  GotoStatement,
  LabelStatement,
} from "../luaparse/ast";
import * as luaparse from "../luaparse/luaparse";
import seedrandom from 'seedrandom';

type LMOptions = {
  newlineSeparator: boolean;
  minifyMemberNames: boolean;
  minifyTableKeyStrings: boolean;
  minifyAssignedGlobalVars: boolean;
  minifyGlobalFunctions: boolean;
  minifyAllGlobalVars: boolean;
  randomIdentifiers: boolean;
  preservedGlobalFunctions: string[];
  preservedGlobalVars: string[];
};

type LMCache = {
  precedence?: number;
  preserveIdentifiers?: boolean;
  forceGenerateIdentifiers?: boolean;
  direction?: string;
  parent?: Node;
};

const regexAlphaUnderscore = /[a-zA-Z_]/;
const regexAlphaNumUnderscore = /[a-zA-Z0-9_]/;
var regexDigits = /[0-9]/;

// https://www.lua.org/manual/5.4/manual.html#3.4.8
// https://www.lua.org/source/5.4/lparser.c.html#priority
// not supported yet: binary ~, <<, >>, //, unary~
const PRECEDENCE = {
  or: 1,
  and: 2,
  "<": 3,
  ">": 3,
  "<=": 3,
  ">=": 3,
  "~=": 3,
  "==": 3,
  "|": 4,
  "~": 5,
  "&": 6,
  "<<": 7,
  ">>": 7,
  "..": 8,
  "+": 9,
  "-": 9, // binary -
  "*": 10,
  "/": 10,
  "//": 10,
  "%": 10,
  unarynot: 11,
  "unary#": 11,
  "unary~": 11,
  "unary-": 11, // unary -
  "^": 12,
};

const IDENTIFIER_PARTS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "_",
];
const IDENTIFIER_PARTS_MAX = IDENTIFIER_PARTS.length - 1;




const each = function <T>(array: Array<T>, fn: (value: T, last: boolean) => any) {
  var index = -1;
  var length = array.length;
  var max = length - 1;
  while (++index < length) {
    fn(array[index], index < max);
  }
};

const indexOf = function <T>(array: Array<T>, value: T) {
  var index = -1;
  var length = array.length;
  while (++index < length) {
    if (array[index] == value) {
      return index;
    }
  }
};

const hasOwnProperty = {}.hasOwnProperty;
const extend = function <Td, Ts>(destination: Td, source: Ts): Spread<Td, Ts> {
  return Object.assign({}, destination, source);
};

var generateZeroes = function (length: number) {
  var zero = "0";
  var result = "";
  if (length < 1) {
    return result;
  }
  if (length == 1) {
    return zero;
  }
  while (length) {
    if (length & 1) {
      result += zero;
    }
    if ((length >>= 1)) {
      zero += zero;
    }
  }
  return result;
};

// http://www.lua.org/manual/5.2/manual.html#3.1
function isKeyword(id: string) {
  switch (id.length) {
    case 2:
      return "do" == id || "if" == id || "in" == id || "or" == id;
    case 3:
      return "and" == id || "end" == id || "for" == id || "nil" == id || "not" == id;
    case 4:
      return "else" == id || "goto" == id || "then" == id || "true" == id;
    case 5:
      return "break" == id || "false" == id || "local" == id || "until" == id || "while" == id;
    case 6:
      return "elseif" == id || "repeat" == id || "return" == id;
    case 8:
      return "function" == id;
  }
  return false;
}

const LMChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LMCharLen = LMChars.length;
function generateCombinations(N: number): string[] {
  const result: string[] = [];
  const indices = new Array(N).fill(0);

  while (true) {
    let combination = '';
    for (let i = 0; i < N; i++) {
      combination += LMChars[indices[i]];
    }
    result.push(combination);

    let increment = N - 1;
    while (increment >= 0 && indices[increment] === LMCharLen - 1) {
      indices[increment] = 0;
      increment--;
    }

    if (increment < 0) {
      break;
    }

    indices[increment]++;
  }

  return result;
}

function reloadIdentifierList(list: string[], len: number){
  // safety
  if (len > 5) {
    throw new Error("Is the script that are minifying are 1 billion lines long?");
  }
  const arr = generateCombinations(len);
  const arrLen = arr.length;
  const rd = randomBytes(512);
  const rng = seedrandom(rd.toString('hex').slice(0, 255), {
    entropy: true,
  });

  for (let i = arrLen - 1 ; i > 0; i--) {
    const j = Math.floor(rng.double() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

var currentIdentifier: string;
var identifierMap: Record<string, string>;
var identifiersInUse: Set<string>;
var shortenedGlobalIdentifiers: Set<string>;
var identifierLength: number;
var identifierList: string[];
var generateIdentifierRandom = function(originalName: string): string {
  // Preserve `self` in methods
  if (originalName == "self") {
    return originalName;
  }

  if (Object.hasOwn(identifierMap, originalName)) {
    return identifierMap[originalName];
  }

  if (identifierList.length <= 0){
    identifierLength++;
    reloadIdentifierList(identifierList, identifierLength);
  }

  let iden = identifierList.pop()!;

  while (isKeyword(iden) || identifiersInUse.has(iden) || iden.length <= 0){
    if (identifierList.length <= 0){
      identifierLength++;
      reloadIdentifierList(identifierList, identifierLength);
    }
    iden = identifierList.pop() ?? '';
  }

  identifierMap[originalName] = iden;

  return iden;
};

var generateIdentifierNormal = function (originalName: string): string {
  // Preserve `self` in methods
  if (originalName == "self") {
    return originalName;
  }

  if (hasOwnProperty.call(identifierMap, originalName)) {
    return identifierMap[originalName];
  }
  var length = currentIdentifier.length;
  var position = length - 1;
  var character: string;
  var index: number | undefined;
  while (position >= 0) {
    character = currentIdentifier.charAt(position);
    index = indexOf(IDENTIFIER_PARTS, character);
    if (index && index != IDENTIFIER_PARTS_MAX) {
      index = index as number;
      currentIdentifier = currentIdentifier.substring(0, position) + IDENTIFIER_PARTS[index + 1] + generateZeroes(length - (position + 1));
      if (isKeyword(currentIdentifier) || identifiersInUse.has(currentIdentifier)) {
        return generateIdentifierNormal(originalName);
      }
      identifierMap[originalName] = currentIdentifier;
      return currentIdentifier;
    }
    --position;
  }
  currentIdentifier = "a" + generateZeroes(length);
  if (identifiersInUse.has(currentIdentifier)) {
    return generateIdentifierNormal(originalName);
  }
  identifierMap[originalName] = currentIdentifier;
  return currentIdentifier;
};

var generateIdentifier: (originalName: string) => string;

/*--------------------------------------------------------------------------*/

var joinStatements = function (a: string, b: string, separator?: string) {
  separator = separator ?? " ";

  var lastCharA = a.slice(-1);
  var firstCharB = b.charAt(0);

  if (lastCharA == "" || firstCharB == "") {
    return a + b;
  }
  if (separator == ";" && firstCharB == "(") {
    if (
      regexAlphaNumUnderscore.test(lastCharA) || // Could be an Identifier or a NumberExpression, we don't know, best to be safe
      lastCharA == ")" ||
      lastCharA == '"' ||
      lastCharA == "'" ||
      lastCharA == "}" ||
      lastCharA == "]"
    ) {
      // e.g. `a=b` + `(c or d)(e)` as 2 different statements (; required)
      return a + separator + b;
    }
  }
  if (regexAlphaUnderscore.test(lastCharA)) {
    if (regexAlphaNumUnderscore.test(firstCharB)) {
      // e.g. `while` + `1`
      // e.g. `local a` + `local b`
      return a + separator + b;
    } else {
      // e.g. `not` + `(2>3 or 3<2)`
      // e.g. `x` + `^`
      return a + b;
    }
  }
  if (regexDigits.test(lastCharA)) {
    if (firstCharB == "(" || !(firstCharB == "." || regexAlphaUnderscore.test(firstCharB))) {
      // e.g. `1` + `+`
      // e.g. `1` + `==`
      return a + b;
    } else {
      // e.g. `1` + `..`
      // e.g. `1` + `and`
      return a + separator + b;
    }
  }
  if (lastCharA == firstCharB && lastCharA == "-") {
    // e.g. `1-` + `-2`
    return a + separator + b;
  }
  var secondLastCharA = a.slice(-2, -1);
  if (lastCharA == "." && secondLastCharA != "." && regexAlphaNumUnderscore.test(firstCharB)) {
    // e.g. `1.` + `print`
    return a + separator + b;
  }
  return a + b;
};

var formatBase = function (base: Node, preferences: LMOptions) {
  var result = "";
  var type = base.type;
  var needsParens =
    base.inParens === true &&
    type != "Identifier" &&
    type != "IndexExpression" &&
    type != "MemberExpression" &&
    // type != 'CallExpression' &&
    // ^ preserve parens
    type != "TableCallExpression" &&
    type != "StringCallExpression";
  if (needsParens) {
    result += "(";
  }
  result += formatExpression(base, preferences, {});
  if (needsParens) {
    result += ")";
  }
  return result;
};

var formatExpression = function (expression: Node, preferences: LMOptions, options: LMCache) {
  options = extend(
    {
      precedence: 0,
      preserveIdentifiers: false,
      forceGenerateIdentifiers: false,
    },
    options
  );

  var result = "";
  var currentPrecedence: any;
  var associativity: any;
  var operator: any;

  var expressionType = expression.type;

  if (expressionType == "Identifier") {
    let exp = expression as Identifier;
    // forceGenerateIdentifiers has precedence over the rest

    // Do not minify global variables, unless we force global variable minification and
    // they don't start with '_'.

    // When using minifyAllGlobalVars, all global vars not starting with '_' have already been minified
    // to pre-fill identifierMap and identifiersInUse, aSet() we always call generateIdentifier, but only to find the existing mapping.

    // When using minifyAssignedGlobalVars or minifyGlobalFunctions, we should only minify globals that have already been shortened previously
    // (we assume that all global assignments have been done previously in the code), so those registered in shortenedGlobalIdentifiers.

    // In both cases, the '_' check is optional as globals starting with _ have been protected during pre-pass on ast.globals in minify.
    result =
      options!.forceGenerateIdentifiers ||
      ((exp.isLocal || ((preferences.minifyAllGlobalVars || shortenedGlobalIdentifiers.has(exp.name)) && exp.name.substring(0, 1) != "_")) && !options!.preserveIdentifiers)
        ? generateIdentifier(exp.name)
        : exp.name;
  } else if (expressionType == "StringLiteral" || expressionType == "BooleanLiteral" || expressionType == "NilLiteral" || expressionType == "VarargLiteral") {
    result = (expression as Literal).raw!;
  } else if (expressionType == "NumericLiteral") {
    const raw = (expression as NumericLiteral).raw!;
    const rlen = raw.length;
    let hasSeenNonZero = false;

    // Remove leading zeros, while keeping at least one zero if the number is like "000.0006969"
    for (let i = 0; i < rlen; i++) {
      let char = raw.charAt(i);
      if (char !== "0" || (char === "0" && result.includes(".") && !hasSeenNonZero)) {
        hasSeenNonZero = true;
      }

      // Append character if it's non-zero or if a non-zero has been seen or if we are after a decimal point
      if (hasSeenNonZero || char === ".") {
        result += char;
      }
    }

    // Remove trailing zeros after decimal point, but keep at least one trailing zero if it's immediately after the decimal point
    if (result.indexOf(".") !== -1) {
      while (result[result.length - 1] === "0") {
        result = result.slice(0, -1);
      }
      // If there's a trailing dot, remove it unless the number is like "1.0"
      if (result[result.length - 1] === "." && result.length !== result.indexOf(".") + 2) {
        result = result.slice(0, -1);
      }
    }
    result ||= "0"; // Return "0" if the string is empty
  } else if (expressionType == "LogicalExpression" || expressionType == "BinaryExpression") {
    let exp = expression as LogicalExpression;
    // If an expression with precedence x
    // contains an expression with precedence < x,
    // the inner expression must be wrapped in parens.
    operator = exp.operator;
    currentPrecedence = PRECEDENCE[operator];
    associativity = "?left";

    result = formatExpression(exp.left, preferences, {
      precedence: currentPrecedence,
      direction: "left",
      parent: operator,
    });
    result = joinStatements(result, operator);
    result = joinStatements(
      result,
      formatExpression(exp.right, preferences, {
        precedence: currentPrecedence,
        direction: "right",
        parent: operator,
      })
    );

    if (operator == "^" || operator == "..") {
      associativity = "right";
    }

    if (
      //@ts-expect-error
      currentPrecedence < options.precedence ||
      (currentPrecedence == options!.precedence &&
        associativity != options!.direction &&
        //@ts-expect-error
        options.parent != "+" &&
        //@ts-expect-error
        !(options!.parent == "*" && (operator == "/" || operator == "*")))
    ) {
      // The most simple case here is that of
      // protecting the parentheses on the RHS of
      // `1 - (2 - 3)` but deleting them from `(1 - 2) - 3`.
      // This is generally the right thing to do. The
      // semantics of `+` are special however: `1 + (2 - 3)`
      // == `1 + 2 - 3`. `-` and `+` are the only two operators
      // who share their precedence level. `*` also can
      // commute in such a way with `/`, but not with `%`
      // (all three share a precedence). So we test for
      // all of these conditions and avoid emitting
      // parentheses in the cases where we don't have to.
      result = "(" + result + ")";
    }
  } else if (expressionType == "UnaryExpression") {
    let exp = expression as UnaryExpression;
    operator = exp.operator;
    currentPrecedence = PRECEDENCE["unary" + operator];

    result = joinStatements(
      operator,
      formatExpression(exp.argument, preferences, {
        precedence: currentPrecedence,
      })
    );

    if (
      //@ts-expect-error
      currentPrecedence < options.precedence &&
      // In principle, we should parenthesize the RHS of an
      // expression like `3^-2`, because `^` has higher precedence
      // than unary `-` according to the manual. But that is
      // misleading on the RHS of `^`, since the parser will
      // always try to find a unary operator regardless of
      // precedence.
      !(
        //@ts-expect-error
        (options.parent == "^" && options.direction == "right")
      )
    ) {
      result = "(" + result + ")";
    }
  } else if (expressionType == "CallExpression") {
    let exp = expression as CallExpression;
    if (exp.arguments.length == 1 && (exp.arguments[0].type == "TableConstructorExpression" || exp.arguments[0].type == "StringLiteral")) {
      let abase = formatExpression(exp.base, preferences, {});
      let barg = formatExpression(exp.arguments[0], preferences, {});
      result = (abase && barg ? abase + barg : abase ? abase : barg) ?? "";
    } else {
      result = formatBase(exp.base, preferences) + "(";

      each(exp.arguments, function (argument, needsComma) {
        result += formatExpression(argument, preferences, {});
        if (needsComma) {
          result += ",";
        }
      });
      result += ")";
    }

    if (exp.inParens) {
      result = "(" + result + ")";
    }
  } else if (expressionType == "TableCallExpression") {
    let exp = expression as TableCallExpression;

    result = formatBase(exp.base, preferences) + formatExpression(exp.arguments, preferences, {});

    if (exp.inParens) {
      result = "(" + result + ")";
    }
  } else if (expressionType == "StringCallExpression") {
    let exp = expression as StringCallExpression;

    result = formatBase(exp.base, preferences) + formatExpression(exp.argument, preferences, {});

    if (exp.inParens) {
      result = "(" + result + ")";
    }
  } else if (expressionType == "IndexExpression") {
    let exp = expression as IndexExpression;

    result = formatBase(exp.base, preferences) + "[" + formatExpression(exp.index, preferences, {}) + "]";
  } else if (expressionType == "MemberExpression") {
    let exp = expression as MemberExpression;
    // Aggressive minification note: this will only affect key strings without square brackets or quotes
    //   ex: t = { key1 = 1, key2 = 2 }
    // Strings inside square brackets are handled above, so you can use that to preserve
    //   key identifiers you intend to access dynamically via string.
    // Alternatively, you can protect names from shortening by starting them with "_"
    //   ex: t = { ["key1_preserved"] = 1 }
    result =
      formatBase(exp.base, preferences) +
      exp.indexer +
      formatExpression(exp.identifier, preferences, {
        preserveIdentifiers: true,
        forceGenerateIdentifiers: preferences.minifyMemberNames && exp.identifier.name.substring(0, 1) != "_",
      });
  } else if (expressionType == "FunctionDeclaration") {
    let exp = expression as FunctionDeclaration;
    result = "function(";
    if (exp.parameters.length) {
      each(exp.parameters, function (parameter, needsComma) {
        // `Identifier`s have a `name`, `VarargLiteral`s have a `value`
        result += Object.hasOwn(parameter, "name")
          ? //@ts-expect-error
            generateIdentifier(parameter.name)
          : //@ts-expect-error
            parameter.value;
        if (needsComma) {
          result += ",";
        }
      });
    }
    result += ")";
    result = joinStatements(result, formatStatementList(exp.body, preferences));
    result = joinStatements(result, "end");
  } else if (expressionType == "TableConstructorExpression") {
    let exp = expression as TableConstructorExpression;
    result = "{";

    each(exp.fields, function (field, needsComma) {
      if (field.type == "TableKey") {
        result += "[" + formatExpression(field.key, preferences, {}) + "]=" + formatExpression(field.value, preferences, {});
      } else if (field.type == "TableValue") {
        result += formatExpression(field.value, preferences, {});
      } else {
        // at this point, `field.type == 'TableKeyString'`
        // see MemberExpression case above for explanations about forceGenerateIdentifiers
        result +=
          formatExpression(field.key, preferences, {
            // TODO: keep track of nested scopes (#18)
            preserveIdentifiers: true,
            forceGenerateIdentifiers: preferences.minifyTableKeyStrings && field.key.name.substring(0, 1) != "_",
          }) +
          "=" +
          formatExpression(field.value, preferences, {});
      }
      if (needsComma) {
        result += ",";
      }
    });

    result += "}";
  } else {
    throw TypeError("Unknown expression type: `" + expressionType + "`");
  }

  return result;
};

var formatStatementList = function (body: Statement[], preferences: LMOptions) {
  var result = "";
  each(body, function (statement) {
    var separator = preferences.newlineSeparator ? "\n" : ";";
    result = joinStatements(result, formatStatement(statement, preferences), separator);
  });
  return result;
};

var formatStatement = function (statement: Statement, preferences: LMOptions) {
  var result = "";
  var statementType = statement.type;

  if (statementType == "AssignmentStatement") {
    let stm = statement as AssignmentStatement;
    // left-hand side
    each(stm.variables, function (variable, needsComma) {
      var expressionType = variable.type;

      // when using minifyAssignedGlobalVars, detect `global_var = value` patterns to register global_var as an assigned global identifier,
      //  if it has not already been registered
      // optionally, we can also generate the identifier now so formatExpression will just have to find the existing mapping
      //  (else formatExpression would generate it on its own anyway)
      // check that the expression type is Identifier, as we are not interested in global_table.member = value (as global_table would have
      //  been assigned previously, and member minification is done with another option, minifyMemberNames)
      // this, however, includes `global_a, global_b = value1, value2`` which is split into `global_a = value1`, `global_b = value2` on parsing
      // as usual, ignore variables starting with '_', but the check is optional as globals starting with _ have been protected during pre-pass
      //  on ast.globals in minify.
      if (preferences.minifyAssignedGlobalVars && expressionType == "Identifier" && !variable.isLocal) {
        let vb = variable as Identifier;
        // we have pre-emptively protected all global identifiers, waiting and see if we find an assignment for them
        // we found one for this variable name, so remove it from the protected set (and identifier map entry to itself)
        // ! this is very risky as unrelated identifiers (esp. members) may have the same name and if there are occurrences
        // before and after the assignment, they will start being shortened in the middle of the code, breaking code
        // this can be fixed by either storing local and member shortened identifier map in a separate map from global identifiers
        //  (or just using globalIdentifiersInUse as suggested where identifiersInUse is filled, since the map just maps global ids to themselves)
        // or parsing the code to find all assigned global variables and unprotected them in a first pass, then minify the code

        if (vb.name.substring(0, 1) != "_" && !shortenedGlobalIdentifiers.has(vb.name)) {
          delete identifierMap[vb.name];
          identifiersInUse.delete(vb.name);

          // register identifier as a global id to shorten, and shorten it now while we're at it (second step is optional)
          shortenedGlobalIdentifiers.add(vb.name);
          generateIdentifier(vb.name);
        }
      }

      result += formatExpression(variable, preferences, {});
      if (needsComma) {
        result += ",";
      }
    });

    // right-hand side
    result += "=";
    each(stm.init, function (init, needsComma) {
      result += formatExpression(init, preferences, {});
      if (needsComma) {
        result += ",";
      }
    });
  } else if (statementType == "LocalStatement") {
    let stm = statement as LocalStatement;
    result = "local ";

    // left-hand side
    each(stm.variables, function (variable, needsComma) {
      // Variables in a `LocalStatement` are always local, duh
      result += generateIdentifier(variable.name);
      if (needsComma) {
        result += ",";
      }
    });

    // right-hand side
    if (stm.init.length) {
      result += "=";
      each(stm.init, function (init, needsComma) {
        result += formatExpression(init, preferences, {});
        if (needsComma) {
          result += ",";
        }
      });
    }
  } else if (statementType == "CallStatement") {
    let stm = statement as CallStatement;
    result = formatExpression(stm.expression, preferences, {});
  } else if (statementType == "IfStatement") {
    let stm = statement as IfStatement;
    result = joinStatements("if", formatExpression(stm.clauses[0].condition, preferences, {}));
    result = joinStatements(result, "then");
    result = joinStatements(result, formatStatementList(stm.clauses[0].body, preferences));
    each(stm.clauses.slice(1), function (clause) {
      if (Object.hasOwn(clause, "condition")) {
        result = joinStatements(result, "elseif");
        //@ts-expect-error
        result = joinStatements(result, formatExpression(clause.condition, preferences, {}));
        result = joinStatements(result, "then");
      } else {
        result = joinStatements(result, "else");
      }
      result = joinStatements(result, formatStatementList(clause.body, preferences));
    });
    result = joinStatements(result, "end");
  } else if (statementType == "WhileStatement") {
    let stm = statement as WhileStatement;
    result = joinStatements("while", formatExpression(stm.condition, preferences, {}));
    result = joinStatements(result, "do");
    result = joinStatements(result, formatStatementList(stm.body, preferences));
    result = joinStatements(result, "end");
  } else if (statementType == "DoStatement") {
    let stm = statement as DoStatement;
    result = joinStatements("do", formatStatementList(stm.body, preferences));
    result = joinStatements(result, "end");
  } else if (statementType == "ReturnStatement") {
    let stm = statement as ReturnStatement;
    result = "return";

    each(stm.arguments, function (argument, needsComma) {
      result = joinStatements(result, formatExpression(argument, preferences, {}));
      if (needsComma) {
        result += ",";
      }
    });
  } else if (statementType == "BreakStatement") {
    result = "break";
  } else if (statementType == "RepeatStatement") {
    let stm = statement as RepeatStatement;
    result = joinStatements("repeat", formatStatementList(stm.body, preferences));
    result = joinStatements(result, "until");
    result = joinStatements(result, formatExpression(stm.condition, preferences, {}));
  } else if (statementType == "FunctionDeclaration") {
    let stm = statement as FunctionDeclaration;
    // global functions declared with assignment `foo = function() end` are automatically minified
    //   by minifyAssignedGlobalVars
    // however, minifyGlobalFunctions allows to minify the alternative writing `function foo() end`
    //   but `foo` would be parsed below in formatExpression as any global identifier,
    //   without knowing the context (i.e. we are not in an assignment but in an equivalent function declaration)
    // so, similarly to the AssignmentStatement case above with minifyAssignedGlobalVars, we handle this
    //   at the statement level before diving in formatExpression, by registering the identifier as a global to shorten,
    //   if it has not already been registered (and again, we can optionally generate the ID now)
    // as usual, ignore variables starting with '_', but the check is optional as globals starting with _ have been protected during pre-pass
    //   on ast.globals in minify.
    if (
      preferences.minifyGlobalFunctions &&
      stm.identifier.type == "Identifier" &&
      !stm.isLocal &&
      stm.identifier.name.substring(0, 1) != "_" &&
      !shortenedGlobalIdentifiers.has(stm.identifier.name)
    ) {
      // unprotect identifier, see comment in similar block in 'AssignmentStatement' case
      delete identifierMap[stm.identifier.name];
      identifiersInUse.delete(stm.identifier.name);

      shortenedGlobalIdentifiers.add(stm.identifier.name);
      generateIdentifier(stm.identifier.name);
    }

    result = (stm.isLocal ? "local " : "") + "function ";
    result += formatExpression(stm.identifier, preferences, {});
    result += "(";

    if (stm.parameters.length) {
      each(stm.parameters, function (parameter, needsComma) {
        // `Identifier`s have a `name`, `VarargLiteral`s have a `value`
        result += Object.hasOwn(parameter, "name")
          ? //@ts-expect-error
            generateIdentifier(parameter.name)
          : //@ts-expect-error
            parameter.value;
        if (needsComma) {
          result += ",";
        }
      });
    }

    result += ")";
    result = joinStatements(result, formatStatementList(stm.body, preferences));
    result = joinStatements(result, "end");
  } else if (statementType == "ForGenericStatement") {
    // see also `ForNumericStatement`
    let stm = statement as ForGenericStatement;
    result = "for ";

    each(stm.variables, function (variable, needsComma) {
      // The variables in a `ForGenericStatement` are always local
      result += generateIdentifier(variable.name);
      if (needsComma) {
        result += ",";
      }
    });

    result += " in";

    each(stm.iterators, function (iterator, needsComma) {
      result = joinStatements(result, formatExpression(iterator, preferences, {}));
      if (needsComma) {
        result += ",";
      }
    });

    result = joinStatements(result, "do");
    result = joinStatements(result, formatStatementList(stm.body, preferences));
    result = joinStatements(result, "end");
  } else if (statementType == "ForNumericStatement") {
    // The variables in a `ForNumericStatement` are always local
    let stm = statement as ForNumericStatement;
    result = "for " + generateIdentifier(stm.variable.name) + "=";
    result += formatExpression(stm.start, preferences, {}) + "," + formatExpression(stm.end, preferences, {});

    if (stm.step) {
      result += "," + formatExpression(stm.step, preferences, {});
    }

    result = joinStatements(result, "do");
    result = joinStatements(result, formatStatementList(stm.body, preferences));
    result = joinStatements(result, "end");
  } else if (statementType == "LabelStatement") {
    // The identifier names in a `LabelStatement` can safely be renamed
    let stm = statement as LabelStatement;
    result = "::" + generateIdentifier(stm.label.name) + "::";
  } else if (statementType == "GotoStatement") {
    // The identifier names in a `GotoStatement` can safely be renamed
    let stm = statement as GotoStatement;
    result = "goto " + generateIdentifier(stm.label.name);
  } else {
    throw TypeError("Unknown statement type: `" + statementType + "`");
  }

  return result;
};

var minify = function (code: string, preferences: LMOptions) {
  // define default preferences
  preferences = extend(
    {
      newlineSeparator: false,
      minifyMemberNames: false,
      minifyTableKeyStrings: false,
      minifyAssignedGlobalVars: false,
      minifyGlobalFunctions: false,
      minifyAllGlobalVars: false,
      randomIdentifiers: false,
      preservedGlobalFunctions: [],
      preservedGlobalVars: [],
    } satisfies LMOptions,
    preferences
  );

  const opt = Object.assign({}, luaparse.defaultOptions);
  opt.encodingMode = "x-user-defined";
  opt.comments = false;
  opt.scope = true;
  opt.preserveParens = true;
  opt.luaVersion = "5.3";

  // `argument` can be a Lua code snippet (string)
  // or a luaparse-compatible AST (object)
  var ast = luaparse.parse(code, opt);
  if (ast === null || ast === undefined) return null;
  ast as Chunk;

  // (Re)set temporary identifier values
  identifierMap = {};
  identifiersInUse = new Set();
  // Set of global identifiers that should be shortened on declaration and for any further usage
  // (only used with minifyAssignedGlobalVars and minifyGlobalFunctions;
  // minifyAllGlobalVars doesn't need it and simply shortens all global identifiers)
  shortenedGlobalIdentifiers = new Set();
  // This is a shortcut to help generate the first identifier (`a`) faster
  currentIdentifier = "9";
  // yes
  identifierLength = 1;

  //add preserved global name
  if (preferences.preservedGlobalFunctions.length > 0) {
    each(preferences.preservedGlobalFunctions, function (name) {
      identifierMap[name] = name;
      identifiersInUse.add(name);
    });
  }
  if (preferences.preservedGlobalVars.length > 0) {
    each(preferences.preservedGlobalVars, function (name) {
      identifierMap[name] = name;
      identifiersInUse.add(name);
    });
  }

  if (preferences.randomIdentifiers === true) {
    // we cant randomize number!!!
    // or could we?, probably remove the number entirety is okay
    generateIdentifier = generateIdentifierRandom;
    reloadIdentifierList(identifierList, identifierLength);
  }
  else {
    generateIdentifier = generateIdentifierNormal;
  }



  // Make sure global variable names aren't renamed
  // unless we want to minify global variables (assigned or all) and the name doesn't start with '_'.
  if (ast.globals !== undefined) {
    each(ast.globals, function (object) {
      var name = object.name;
      if (!preferences.minifyAllGlobalVars || name.substring(0, 1) == "_") {
        // general case (no preferences) should protect all global identifiers
        // note that this identifiersInUse is checked in generateIdentifier, which doesn't know about local/member/global
        //  so this will also protect local and member variables that happen to have the same name as a protected global
        //  this may be fixed by renaming identifiersInUse -> globalIdentifiersInUse and checking them at a higher level
        //  (when we know whether identifier is local/member or global)
        // minifyAssignedGlobalVars and minifyGlobalFunctions should wait for declaration check
        //   to see which global variables should be minified
        // in the meantime, we protect the name as if we knew they were external globals
        //   so no other variable gets minified with a name like this one
        // when finding a global declaration later, we will release the name
        // worst case, the declaration is found too late and we skips a name that would eventually
        //   be released, but this is fine
        identifierMap[name] = name;
        identifiersInUse.add(name);
      } else {
        // minifyAllGlobalVars is true here, so we know we will minify all globals and can
        // generate the shortened identifier now
        // (optional as they would be minified eventually during formatStatementList, but convenient to spot globals
        // as they will have the first minified names in the alphabetical order, namely 'a', 'b', etc.)
        generateIdentifier(name);
      }
    });
  } else {
    throw Error("Missing required AST property: `globals`");
  }

  return formatStatementList(ast.body, preferences);
};

/*--------------------------------------------------------------------------*/

const luamin = {
  version: "1.0.4",
  minify: minify,
};

export default luamin;
