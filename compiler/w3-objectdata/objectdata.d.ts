import War3MapW3d from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3d/file";
import War3MapW3u from "mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/file";
import { UnitContainer } from "./generated/units";
import { ItemContainer } from "./generated/items";
import { DestructableContainer } from "./generated/destructables";
import { DoodadContainer } from "./generated/doodads";
import { AbilityContainer } from "./generated/abilities";
import { BuffContainer } from "./generated/buffs";
import { UpgradeContainer } from "./generated/upgrades";
export interface ModificationFiles {
    w3u?: War3MapW3u;
    w3t?: War3MapW3u;
    w3b?: War3MapW3u;
    w3d?: War3MapW3d;
    w3a?: War3MapW3d;
    w3h?: War3MapW3u;
    w3q?: War3MapW3d;
    w3uSkin?: War3MapW3u;
    w3tSkin?: War3MapW3u;
    w3bSkin?: War3MapW3u;
    w3dSkin?: War3MapW3d;
    w3aSkin?: War3MapW3d;
    w3hSkin?: War3MapW3u;
    w3qSkin?: War3MapW3d;
}
export declare class ObjectData {
    units: UnitContainer;
    items: ItemContainer;
    destructables: DestructableContainer;
    doodads: DoodadContainer;
    abilities: AbilityContainer;
    buffs: BuffContainer;
    upgrades: UpgradeContainer;
    load({ w3u, w3t, w3b, w3d, w3a, w3h, w3q, w3uSkin, w3tSkin, w3bSkin, w3dSkin, w3aSkin, w3hSkin, w3qSkin }: ModificationFiles): void;
    save(): ModificationFiles;
}
