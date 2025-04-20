import Modification from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modification";
import ModificationTable from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modificationtable";
import ModifiedObject from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/modifiedobject";
export interface IDs {
    oldId: string;
    newId: string;
}
interface Objects<T> {
    game: Readonly<{
        [key: string]: Readonly<T>;
    }>;
    map: {
        [key: string]: T;
    };
}
interface Prop {
    id: string;
    name: string;
    type: string;
    netsafe: string;
}
export declare function objectLoader<T extends IDs>(object: T, modifications: Modification[], props: Prop[], specificProps?: {
    [key: string]: Prop[];
}): void;
export declare function objectSaver<T extends IDs>(gameObject: T, object: T, baseProps: Prop[], skin: boolean, specificProps?: {
    [key: string]: Prop[];
}): Modification[];
export declare function load<T extends IDs, E>(objects: Objects<T>, originalTable: ModificationTable, customTable: ModificationTable, props: Prop[], specificProps?: {
    [key: string]: Prop[];
}): void;
export declare function save<T extends IDs, E>(objects: Objects<T>, props: Prop[], skin: boolean, specificProps?: {
    [key: string]: Prop[];
}): {
    original: ModifiedObject[];
    custom: ModifiedObject[];
};
export declare abstract class Container<T extends IDs> {
    /**
     * Game objects.
     */
    abstract game: Readonly<{
        [key: string]: Readonly<T>;
    }>;
    /**
     * Map objects.
     */
    map: {
        [key: string]: T;
    };
    /**
     * Get an existing object.
     *
     * If the object isn't in the map data but is in the game data, it will be copied to the map data.
     */
    get(id: string): T | undefined;
    /**
     * Copy an existing object.
     *
     * The source object can either be given as a string ID, or an object returned from previous get/copy calls.
     *
     * If newId is supplied, it will be used as the new object's ID, otherwise a random ID is generated.
     *
     * If a random ID is generated, its first letter will be capitalized if the base ID's first letter is capitalized, to support hero units.
     */
    copy(baseIdOrObject: string | T, newId?: string): T | undefined;
    /**
     * Checks if the map contains an buff with the given ID.
     *
     * Does not the game data.
     */
    has(id: string): boolean;
}
export {};
