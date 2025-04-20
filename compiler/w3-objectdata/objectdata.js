"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectData = void 0;
const file_1 = require("mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3d/file");
const file_2 = require("mdx-m3-viewer-th/dist/cjs/parsers/w3x/w3u/file");
const container_1 = require("./container");
const units_1 = require("./generated/units");
const items_1 = require("./generated/items");
const destructables_1 = require("./generated/destructables");
const doodads_1 = require("./generated/doodads");
const abilities_1 = require("./generated/abilities");
const buffs_1 = require("./generated/buffs");
const upgrades_1 = require("./generated/upgrades");
const utils_1 = require("./utils");
class ObjectData {
    constructor() {
        this.units = new units_1.UnitContainer();
        this.items = new items_1.ItemContainer();
        this.destructables = new destructables_1.DestructableContainer();
        this.doodads = new doodads_1.DoodadContainer();
        this.abilities = new abilities_1.AbilityContainer();
        this.buffs = new buffs_1.BuffContainer();
        this.upgrades = new upgrades_1.UpgradeContainer();
    }
    load({ w3u, w3t, w3b, w3d, w3a, w3h, w3q, w3uSkin, w3tSkin, w3bSkin, w3dSkin, w3aSkin, w3hSkin, w3qSkin }) {
        if (w3u) {
            (0, container_1.load)(this.units, w3u.originalTable, w3u.customTable, units_1.UnitProps);
        }
        if (w3uSkin) {
            (0, container_1.load)(this.units, w3uSkin.originalTable, w3uSkin.customTable, units_1.UnitProps);
        }
        if (w3t) {
            (0, container_1.load)(this.items, w3t.originalTable, w3t.customTable, items_1.ItemProps);
        }
        if (w3tSkin) {
            (0, container_1.load)(this.items, w3tSkin.originalTable, w3tSkin.customTable, items_1.ItemProps);
        }
        if (w3b) {
            (0, container_1.load)(this.destructables, w3b.originalTable, w3b.customTable, destructables_1.DestructableProps);
        }
        if (w3bSkin) {
            (0, container_1.load)(this.destructables, w3bSkin.originalTable, w3bSkin.customTable, destructables_1.DestructableProps);
        }
        if (w3d) {
            (0, container_1.load)(this.doodads, w3d.originalTable, w3d.customTable, doodads_1.DoodadProps);
        }
        if (w3dSkin) {
            (0, container_1.load)(this.doodads, w3dSkin.originalTable, w3dSkin.customTable, doodads_1.DoodadProps);
        }
        if (w3a) {
            (0, container_1.load)(this.abilities, w3a.originalTable, w3a.customTable, abilities_1.AbilityProps, abilities_1.AbilitySpecificProps);
        }
        if (w3aSkin) {
            (0, container_1.load)(this.abilities, w3aSkin.originalTable, w3aSkin.customTable, abilities_1.AbilityProps, abilities_1.AbilitySpecificProps);
        }
        if (w3h) {
            (0, container_1.load)(this.buffs, w3h.originalTable, w3h.customTable, buffs_1.BuffProps);
        }
        if (w3hSkin) {
            (0, container_1.load)(this.buffs, w3hSkin.originalTable, w3hSkin.customTable, buffs_1.BuffProps);
        }
        if (w3q) {
            (0, container_1.load)(this.upgrades, w3q.originalTable, w3q.customTable, upgrades_1.UpgradeProps);
        }
        if (w3qSkin) {
            (0, container_1.load)(this.upgrades, w3qSkin.originalTable, w3qSkin.customTable, upgrades_1.UpgradeProps);
        }
    }
    save() {
        const files = {};
        const w3u = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.units, units_1.UnitProps, false));
        if (w3u) {
            files.w3u = w3u;
        }
        const w3uSkin = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.units, units_1.UnitProps, true));
        if (w3uSkin) {
            files.w3uSkin = w3uSkin;
        }
        const w3t = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.items, items_1.ItemProps, false));
        if (w3t) {
            files.w3t = w3t;
        }
        const w3tSkin = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.items, items_1.ItemProps, true));
        if (w3tSkin) {
            files.w3tSkin = w3tSkin;
        }
        const w3b = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.destructables, destructables_1.DestructableProps, false));
        if (w3b) {
            files.w3b = w3b;
        }
        const w3bSkin = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.destructables, destructables_1.DestructableProps, true));
        if (w3bSkin) {
            files.w3bSkin = w3bSkin;
        }
        const w3d = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.doodads, doodads_1.DoodadProps, false));
        if (w3d) {
            files.w3d = w3d;
        }
        const w3dSkin = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.doodads, doodads_1.DoodadProps, true));
        if (w3dSkin) {
            files.w3dSkin = w3dSkin;
        }
        const w3a = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.abilities, abilities_1.AbilityProps, false, abilities_1.AbilitySpecificProps));
        if (w3a) {
            files.w3a = w3a;
        }
        const w3aSkin = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.abilities, abilities_1.AbilityProps, true, abilities_1.AbilitySpecificProps));
        if (w3aSkin) {
            files.w3aSkin = w3aSkin;
        }
        const w3h = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.buffs, buffs_1.BuffProps, false));
        if (w3h) {
            files.w3h = w3h;
        }
        const w3hSkin = (0, utils_1.saveModificationFile)(file_2.default, (0, container_1.save)(this.buffs, buffs_1.BuffProps, true));
        if (w3hSkin) {
            files.w3hSkin = w3hSkin;
        }
        const w3q = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.upgrades, upgrades_1.UpgradeProps, false));
        if (w3q) {
            files.w3q = w3q;
        }
        const w3qSkin = (0, utils_1.saveModificationFile)(file_1.default, (0, container_1.save)(this.upgrades, upgrades_1.UpgradeProps, true));
        if (w3qSkin) {
            files.w3qSkin = w3qSkin;
        }
        return files;
    }
}
exports.ObjectData = ObjectData;
//# sourceMappingURL=objectdata.js.map