"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.camelCase = exports.pascalCase = exports.war3TypeToTS = exports.saveModificationFile = exports.pushArray = exports.tsToWar3 = exports.war3ToDefaultTS = exports.war3ToTS = void 0;
const modification_1 = require("mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modification");
const math_1 = require("mdx-m3-viewer-th/dist/cjs/common/math");
function war3ToTS(war3Type, war3Value) {
    let tsValue = war3Value;
    // Remove some inconsistencies.
    if (typeof tsValue === "string") {
        tsValue = tsValue.trim();
    }
    if (war3Type === "string") {
        if (tsValue === undefined) {
            tsValue = "";
        }
        if (typeof tsValue !== "string") {
            throw Error(`Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`);
        }
        if (tsValue === "_" || tsValue === "-") {
            tsValue = "";
        }
        return tsValue;
    }
    else if (war3Type === "int") {
        if (typeof tsValue === "string") {
            tsValue = parseInt(tsValue, 10);
            if (isNaN(tsValue)) {
                tsValue = 0;
            }
        }
        else if (tsValue === undefined) {
            tsValue = 0;
        }
        return tsValue;
    }
    else if (war3Type === "unreal" || war3Type === "real") {
        if (typeof tsValue === "string") {
            tsValue = parseFloat(tsValue);
            if (isNaN(tsValue)) {
                tsValue = 0.0;
            }
        }
        else if (tsValue === undefined) {
            tsValue = 0.0;
        }
        return tsValue;
    }
    else if (war3Type === "bool") {
        if (tsValue === undefined) {
            return false;
        }
        if (typeof tsValue === "string") {
            if (tsValue === "1") {
                return true;
            }
            else if (tsValue === "0" ||
                tsValue === "-" ||
                tsValue === "0,1" ||
                tsValue === "") {
                return false;
            }
            throw Error(`Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`);
        }
        else {
            return !!tsValue;
        }
    }
    if (tsValue === undefined) {
        tsValue = "";
    }
    return tsValue;
}
exports.war3ToTS = war3ToTS;
function war3ToDefaultTS(war3Type) {
    if (war3Type === "string") {
        return "";
    }
    else if (war3Type === "int" ||
        war3Type === "unreal" ||
        war3Type === "real") {
        return 0;
    }
    else if (war3Type === "bool") {
        return false;
    }
    return "";
}
exports.war3ToDefaultTS = war3ToDefaultTS;
function tsToWar3(id, war3Type, tsValue) {
    let variableType = 0;
    let value;
    if (typeof tsValue === "string") {
        variableType = 3;
        value = tsValue;
    }
    else if (typeof tsValue === "number") {
        if (war3Type === "int" ||
            war3Type === "bool" ||
            war3Type.endsWith("Flags") ||
            war3Type === "attackBits" ||
            war3Type === "channelType" ||
            war3Type === "deathType" ||
            war3Type === "defenseTypeInt" ||
            war3Type === "detectionType" ||
            war3Type === "spellDetail" ||
            war3Type === "teamColor" ||
            war3Type === "techAvail") {
            variableType = 0;
            value = tsValue | 0;
        }
        else if (war3Type === "real" || war3Type === "unreal") {
            variableType = war3Type === "real" ? 1 : 2;
            value = tsValue;
        }
        else {
            variableType = 2;
            value = tsValue;
        }
    }
    else {
        variableType = 0;
        if (tsValue) {
            value = 1;
        }
        else {
            value = 0;
        }
    }
    const modification = new modification_1.default();
    modification.id = id;
    modification.variableType = variableType;
    modification.value = value;
    return modification;
}
exports.tsToWar3 = tsToWar3;
// Because it's much faster than push(...pushed) or out=out.concat(pushed)
function pushArray(out, pushed) {
    for (const object of pushed) {
        out.push(object);
    }
}
exports.pushArray = pushArray;
function saveModificationFile(ModificationsClass, { original, custom }) {
    if (original.length || custom.length) {
        const file = new ModificationsClass();
        file.version = 2;
        pushArray(file.originalTable.objects, original);
        pushArray(file.customTable.objects, custom);
        return file;
    }
    return;
}
exports.saveModificationFile = saveModificationFile;
function war3TypeToTS(type) {
    if (type === "string") {
        return "string";
    }
    else if (type === "int" || type === "unreal" || type === "real") {
        return "number";
    }
    else if (type === "bool") {
        return "boolean";
    }
    console.warn(`Unhandled type: ${type}`);
    return "string";
}
exports.war3TypeToTS = war3TypeToTS;
function pascalCase(what) {
    return what
        .replace(/[-(),]/g, " ")
        .replace(/['’!.]/g, "")
        .replace(/\//g, " Or ")
        .replace(/\&/g, " And ")
        .replace(/\+/g, " Plus ")
        .replace(/\%/g, " Percent ")
        .replace(/ +/g, " ")
        .trim()
        .split(" ")
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join("");
}
exports.pascalCase = pascalCase;
function camelCase(what) {
    const pascal = pascalCase(what);
    return `${pascal[0].toLowerCase()}${pascal.slice(1)}`;
}
exports.camelCase = camelCase;
const GENERATE_ID_ATTEMPTS = 10000;
function generateId(map, capitalize) {
    let first = 97;
    if (capitalize) {
        first = 65;
    }
    for (let i = 0; i < GENERATE_ID_ATTEMPTS; i++) {
        const id = String.fromCharCode((0, math_1.randomInRange)(first, first + 25), (0, math_1.randomInRange)(97, 122), (0, math_1.randomInRange)(97, 122), (0, math_1.randomInRange)(97, 122));
        if (!map[id]) {
            return id;
        }
    }
    throw Error("FAILED TO GENERATE A UNIQUE ID");
}
exports.generateId = generateId;
//# sourceMappingURL=utils.js.map