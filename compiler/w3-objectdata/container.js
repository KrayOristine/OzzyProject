"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.save = exports.load = exports.objectSaver = exports.objectLoader = void 0;
const modifiedobject_1 = require("mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modifiedobject");
const utils_1 = require("./utils");
function getProp(id, props) {
    for (const prop of props) {
        if (prop.id === id) {
            return prop;
        }
    }
    return;
}
function objectLoader(object, modifications, props, specificProps) {
    for (const modification of modifications) {
        const { id, value } = modification;
        let prop = getProp(id, props);
        if (!prop && specificProps) {
            const specific = specificProps[object.oldId];
            if (!specific) {
                throw Error(`INVALID OLD ID FOR ABILITY ${object.oldId} ${id}`);
            }
            prop = getProp(id, specific);
        }
        if (!prop) {
            throw Error(`Failed to get an Ability prop: ${object.oldId}:${object.newId} => ${id}`);
        }
        // A neccessary evil.
        object[prop.name] = (0, utils_1.war3ToTS)(prop.type, value);
    }
}
exports.objectLoader = objectLoader;
function objectSaver(gameObject, object, baseProps, skin, specificProps) {
    const modifications = [];
    for (const prop of baseProps) {
        if (gameObject[prop.name] !== object[prop.name]) {
            if (skin && prop.netsafe !== "true") {
                continue;
            }
            else if (!skin && prop.netsafe === "true") {
                continue;
            }
            modifications.push((0, utils_1.tsToWar3)(prop.id, prop.type, object[prop.name]));
        }
    }
    if (specificProps) {
        const props = specificProps[gameObject.oldId];
        if (props) {
            for (const prop of props) {
                if (gameObject[prop.name] !== object[prop.name]) {
                    if (skin && prop.netsafe !== "true") {
                        continue;
                    }
                    else if (!skin && prop.netsafe === "true") {
                        continue;
                    }
                    modifications.push((0, utils_1.tsToWar3)(prop.id, prop.type, object[prop.name]));
                }
            }
        }
    }
    return modifications;
}
exports.objectSaver = objectSaver;
function loadObject(objects, oldId, newId, modifications, props, specificProps) {
    let objectId;
    if (newId === "\0\0\0\0") {
        objectId = oldId;
    }
    else {
        objectId = newId;
    }
    const gameObject = objects.game[oldId];
    if (!gameObject) {
        throw Error(`Failed to load an object: ${oldId}`);
    }
    const mapObject = Object.assign({}, Object.assign(Object.assign({}, gameObject), { oldId, newId }));
    objectLoader(mapObject, modifications, props, specificProps);
    if (objects.map[objectId]) {
        for (const [key, value] of Object.entries(mapObject)) {
            if (objects.game[oldId][key] !== value) {
                objects.map[objectId][key] = value;
            }
        }
    }
    else {
        objects.map[objectId] = mapObject;
    }
}
function load(objects, originalTable, customTable, props, specificProps) {
    for (const { oldId, newId, modifications } of originalTable.objects) {
        loadObject(objects, oldId, newId, modifications, props, specificProps);
    }
    for (const { oldId, newId, modifications } of customTable.objects) {
        loadObject(objects, oldId, newId, modifications, props, specificProps);
    }
}
exports.load = load;
function save(objects, props, skin, specificProps) {
    const original = [];
    const custom = [];
    for (const object of Object.values(objects.map)) {
        const gameObject = objects.game[object.oldId];
        if (!gameObject) {
            throw Error(`Tried to save the modifications of an object with an invalid oldId: ${object.oldId} (newId=${object.newId})`);
        }
        const modifications = objectSaver(gameObject, object, props, skin, specificProps);
        if (modifications.length) {
            const modifiedObject = new modifiedobject_1.default();
            modifiedObject.oldId = object.oldId;
            modifiedObject.newId = object.newId;
            (0, utils_1.pushArray)(modifiedObject.modifications, modifications);
            if (object.newId === "\0\0\0\0") {
                original.push(modifiedObject);
            }
            else {
                custom.push(modifiedObject);
            }
        }
    }
    return { original, custom };
}
exports.save = save;
class Container {
    constructor() {
        /**
         * Map objects.
         */
        this.map = {};
    }
    /**
     * Get an existing object.
     *
     * If the object isn't in the map data but is in the game data, it will be copied to the map data.
     */
    get(id) {
        let object = this.map[id];
        if (!object) {
            const gameObject = this.game[id];
            // If this object exists in the game data, copy it and add it to the map data in case it is modified by the caller.
            if (gameObject) {
                object = Object.seal(Object.assign({}, Object.assign(Object.assign({}, gameObject), { oldId: id, newId: "\0\0\0\0" })));
                this.map[id] = object;
            }
        }
        return object;
    }
    /**
     * Copy an existing object.
     *
     * The source object can either be given as a string ID, or an object returned from previous get/copy calls.
     *
     * If newId is supplied, it will be used as the new object's ID, otherwise a random ID is generated.
     *
     * If a random ID is generated, its first letter will be capitalized if the base ID's first letter is capitalized, to support hero units.
     */
    copy(baseIdOrObject, newId) {
        let baseId;
        let baseObject;
        if (typeof baseIdOrObject === "string") {
            baseId = baseIdOrObject;
            // Is this object from the map?
            baseObject = this.map[baseId];
            // Is this object from the game?
            if (!baseObject) {
                baseObject = this.game[baseId];
            }
        }
        else {
            baseId = baseIdOrObject.oldId;
            baseObject = baseIdOrObject;
        }
        if (!baseObject) {
            throw Error(`Tried to copy an object that does not exist: ${baseId}`);
        }
        // If an ID was't given, generate one.
        if (!newId) {
            newId = (0, utils_1.generateId)(this.map, baseId[0] === baseId[0].toUpperCase());
        }
        // Copy the object.
        const object = Object.seal(Object.assign({}, baseObject, { oldId: baseId, newId }));
        this.map[newId] = object;
        return object;
    }
    /**
     * Checks if the map contains an buff with the given ID.
     *
     * Does not the game data.
     */
    has(id) {
        return !!this.map[id];
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map