"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityContainer = exports.Abilities = exports.AbilitySpecificProps = exports.AbilityProps = void 0;
const fs_1 = require("fs");
const container_1 = require("../container");
const OBJECTS = Object.freeze(JSON.parse((0, fs_1.readFileSync)(`${__dirname}/abilitiesdata.json`, 'utf8')));
for (const object of Object.values(OBJECTS)) {
    Object.freeze(object);
}
;
;
exports.AbilityProps = [{ id: 'anam', name: 'name', type: 'string', netsafe: 'true' }, { id: 'ansf', name: 'editorSuffix', type: 'string', netsafe: 'true' }, { id: 'aher', name: 'heroAbility', type: 'bool', netsafe: 'false' }, { id: 'aite', name: 'itemAbility', type: 'bool', netsafe: 'false' }, { id: 'arac', name: 'race', type: 'unitRace', netsafe: 'false' }, { id: 'abpx', name: 'buttonPositionNormalX', type: 'int', netsafe: 'true' }, { id: 'abpy', name: 'buttonPositionNormalY', type: 'int', netsafe: 'true' }, { id: 'aubx', name: 'buttonPositionTurnOffX', type: 'int', netsafe: 'true' }, { id: 'auby', name: 'buttonPositionTurnOffY', type: 'int', netsafe: 'true' }, { id: 'arpx', name: 'buttonPositionResearchX', type: 'int', netsafe: 'true' }, { id: 'arpy', name: 'buttonPositionResearchY', type: 'int', netsafe: 'true' }, { id: 'aart', name: 'iconNormal', type: 'icon', netsafe: 'true' }, { id: 'auar', name: 'iconTurnOff', type: 'icon', netsafe: 'true' }, { id: 'arar', name: 'iconResearch', type: 'icon', netsafe: 'true' }, { id: 'acat', name: 'caster', type: 'modelList', netsafe: 'true' }, { id: 'atat', name: 'target', type: 'modelList', netsafe: 'true' }, { id: 'asat', name: 'special', type: 'modelList', netsafe: 'true' }, { id: 'aeat', name: 'effect', type: 'modelList', netsafe: 'true' }, { id: 'aaea', name: 'areaEffect', type: 'modelList', netsafe: 'true' }, { id: 'alig', name: 'lightningEffects', type: 'lightningList', netsafe: 'true' }, { id: 'amat', name: 'missileArt', type: 'modelList', netsafe: 'true' }, { id: 'amsp', name: 'missileSpeed', type: 'int', netsafe: 'false' }, { id: 'amac', name: 'missileArc', type: 'unreal', netsafe: 'true' }, { id: 'amho', name: 'missileHomingEnabled', type: 'bool', netsafe: 'false' }, { id: 'atac', name: 'targetAttachments', type: 'int', netsafe: 'true' }, { id: 'ata0', name: 'targetAttachmentPoint1', type: 'stringList', netsafe: 'true' }, { id: 'ata1', name: 'targetAttachmentPoint2', type: 'stringList', netsafe: 'true' }, { id: 'ata2', name: 'targetAttachmentPoint3', type: 'stringList', netsafe: 'true' }, { id: 'ata3', name: 'targetAttachmentPoint4', type: 'stringList', netsafe: 'true' }, { id: 'ata4', name: 'targetAttachmentPoint5', type: 'stringList', netsafe: 'true' }, { id: 'ata5', name: 'targetAttachmentPoint6', type: 'stringList', netsafe: 'true' }, { id: 'acac', name: 'casterAttachments', type: 'int', netsafe: 'true' }, { id: 'acap', name: 'casterAttachmentPoint1', type: 'stringList', netsafe: 'true' }, { id: 'aca1', name: 'casterAttachmentPoint2', type: 'stringList', netsafe: 'true' }, { id: 'aspt', name: 'specialAttachmentPoint', type: 'stringList', netsafe: 'true' }, { id: 'aani', name: 'animationNames', type: 'stringList', netsafe: 'true' }, { id: 'atp1', name: 'tooltipNormal', type: 'string', netsafe: 'true' }, { id: 'aut1', name: 'tooltipTurnOff', type: 'string', netsafe: 'true' }, { id: 'aub1', name: 'tooltipNormalExtended', type: 'string', netsafe: 'true' }, { id: 'auu1', name: 'tooltipTurnOffExtended', type: 'string', netsafe: 'true' }, { id: 'aret', name: 'tooltipLearn', type: 'string', netsafe: 'true' }, { id: 'arut', name: 'tooltipLearnExtended', type: 'string', netsafe: 'true' }, { id: 'arhk', name: 'hotkeyLearn', type: 'char', netsafe: 'true' }, { id: 'ahky', name: 'hotkeyNormal', type: 'char', netsafe: 'true' }, { id: 'auhk', name: 'hotkeyTurnOff', type: 'char', netsafe: 'true' }, { id: 'areq', name: 'requirements', type: 'techList', netsafe: 'false' }, { id: 'arqa', name: 'requirementsLevels', type: 'intList', netsafe: 'false' }, { id: 'achd', name: 'checkDependencies', type: 'bool', netsafe: 'false' }, { id: 'apri', name: 'priorityForSpellSteal', type: 'int', netsafe: 'false' }, { id: 'aord', name: 'orderStringUseOrTurnOn', type: 'orderString', netsafe: 'false' }, { id: 'aoru', name: 'orderStringTurnOff', type: 'orderString', netsafe: 'false' }, { id: 'aoro', name: 'orderStringActivate', type: 'orderString', netsafe: 'false' }, { id: 'aorf', name: 'orderStringDeactivate', type: 'orderString', netsafe: 'false' }, { id: 'aefs', name: 'effectSound', type: 'soundLabel', netsafe: 'true' }, { id: 'aefl', name: 'effectSoundLooping', type: 'soundLabel', netsafe: 'true' }, { id: 'alev', name: 'levels', type: 'int', netsafe: 'false' }, { id: 'arlv', name: 'requiredLevel', type: 'int', netsafe: 'false' }, { id: 'alsk', name: 'levelSkipRequirement', type: 'int', netsafe: 'false' }, { id: 'atar', name: 'targetsAllowed', type: 'targetList', netsafe: 'false' }, { id: 'acas', name: 'castingTime', type: 'unreal', netsafe: 'false' }, { id: 'adur', name: 'durationNormal', type: 'unreal', netsafe: 'false' }, { id: 'ahdu', name: 'durationHero', type: 'unreal', netsafe: 'false' }, { id: 'acdn', name: 'cooldown', type: 'unreal', netsafe: 'false' }, { id: 'amcs', name: 'manaCost', type: 'int', netsafe: 'false' }, { id: 'aare', name: 'areaOfEffect', type: 'unreal', netsafe: 'false' }, { id: 'aran', name: 'castRange', type: 'unreal', netsafe: 'false' }, { id: 'abuf', name: 'buffs', type: 'buffList', netsafe: 'false' }, { id: 'aeff', name: 'effects', type: 'effectList', netsafe: 'false' }, { id: 'ausk', name: 'unitSkinList', type: 'unitSkinList', netsafe: 'true' }];
exports.AbilitySpecificProps = {
    AHbz: [{ id: 'Hbz1', name: 'numberOfWaves', type: 'int', netsafe: 'false' }, { id: 'Hbz2', name: 'damage', type: 'unreal', netsafe: 'false' }, { id: 'Hbz3', name: 'numberOfShards', type: 'int', netsafe: 'false' }, { id: 'Hbz4', name: 'buildingReduction', type: 'unreal', netsafe: 'false' }, { id: 'Hbz5', name: 'damagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Hbz6', name: 'maximumDamagePerWave', type: 'unreal', netsafe: 'false' }],
    AHab: [{ id: 'Hab1', name: 'manaRegenerationIncrease', type: 'unreal', netsafe: 'false' }, { id: 'Hab2', name: 'percentBonus', type: 'bool', netsafe: 'false' }],
    AHmt: [{ id: 'Hmt1', name: 'numberOfUnitsTeleported', type: 'int', netsafe: 'false' }, { id: 'Hmt2', name: 'castingDelay', type: 'unreal', netsafe: 'false' }, { id: 'Hmt3', name: 'useTeleportClustering', type: 'bool', netsafe: 'false' }],
    AHwe: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    ANst: [{ id: 'Nst1', name: 'beastsPerSecond', type: 'int', netsafe: 'false' }, { id: 'Nst2', name: 'beastCollisionRadius', type: 'unreal', netsafe: 'false' }, { id: 'Nst3', name: 'damageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Nst4', name: 'damageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Nst5', name: 'damageDelay', type: 'unreal', netsafe: 'false' }],
    ANsg: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    ANsq: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    ANsw: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AOww: [{ id: 'Oww1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Oww2', name: 'magicDamageReduction', type: 'unreal', netsafe: 'false' }],
    AOcr: [{ id: 'Ocr1', name: 'chanceToCriticalStrike', type: 'unreal', netsafe: 'false' }, { id: 'Ocr2', name: 'damageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Ocr3', name: 'damageBonus', type: 'unreal', netsafe: 'false' }, { id: 'Ocr4', name: 'chanceToEvade', type: 'unreal', netsafe: 'false' }, { id: 'Ocr5', name: 'neverMiss', type: 'bool', netsafe: 'false' }, { id: 'Ocr6', name: 'excludeItemDamage', type: 'bool', netsafe: 'false' }],
    AOmi: [{ id: 'Omi1', name: 'numberOfImages', type: 'int', netsafe: 'false' }, { id: 'Omi2', name: 'damageDealtPercent', type: 'unreal', netsafe: 'false' }, { id: 'Omi3', name: 'damageTakenPercent', type: 'unreal', netsafe: 'false' }, { id: 'Omi4', name: 'animationDelay', type: 'unreal', netsafe: 'false' }],
    AOwk: [{ id: 'Owk1', name: 'transitionTime', type: 'unreal', netsafe: 'false' }, { id: 'Owk2', name: 'movementSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Owk3', name: 'backstabDamage', type: 'unreal', netsafe: 'false' }, { id: 'Owk4', name: 'backstabDamageEnabled', type: 'bool', netsafe: 'false' }, { id: 'Owk5', name: 'startCooldownWhenDecloak', type: 'bool', netsafe: 'false' }],
    AHbn: [{ id: 'Hbn1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbn2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }],
    AHfs: [{ id: 'Hfs1', name: 'fullDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs2', name: 'fullDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs3', name: 'halfDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs4', name: 'halfDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs5', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hfs6', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }],
    AHdr: [{ id: 'Ndr1', name: 'hitPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr2', name: 'manaPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr3', name: 'drainIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Ndr4', name: 'lifeTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr5', name: 'manaTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr6', name: 'bonusLifeFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr7', name: 'bonusLifeDecay', type: 'unreal', netsafe: 'false' }, { id: 'Ndr8', name: 'bonusManaFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr9', name: 'bonusManaDecay', type: 'unreal', netsafe: 'false' }],
    AHpx: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AUcb: [{ id: 'Rai1', name: 'unitsSummonedTypeOne', type: 'int', netsafe: 'false' }, { id: 'Rai2', name: 'unitsSummonedTypeTwo', type: 'int', netsafe: 'false' }, { id: 'Rai3', name: 'unitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'Rai4', name: 'unitTypeTwo', type: 'unitCode', netsafe: 'false' }, { id: 'Ucb5', name: 'maxUnitsSummoned', type: 'int', netsafe: 'false' }, { id: 'Ucb6', name: 'killOnCasterDeath', type: 'bool', netsafe: 'false' }],
    AUim: [{ id: 'Uim1', name: 'waveDistance', type: 'unreal', netsafe: 'false' }, { id: 'Uim2', name: 'waveTimeSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uim3', name: 'damageDealtundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uim4', name: 'airTimeSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uim5', name: 'uninterruptible', type: 'bool', netsafe: 'false' }, { id: 'Uim6', name: 'airborneTargetsVulnerable', type: 'bool', netsafe: 'false' }],
    AUls: [{ id: 'Uls1', name: 'numberOfSwarmUnits', type: 'int', netsafe: 'false' }, { id: 'Uls2', name: 'unitReleaseIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uls3', name: 'maxSwarmUnitsPerTarget', type: 'int', netsafe: 'false' }, { id: 'Uls4', name: 'damageReturnFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uls5', name: 'damageReturnThreshold', type: 'unreal', netsafe: 'false' }, { id: 'Ulsu', name: 'swarmUnitType', type: 'unitCode', netsafe: 'false' }],
    AUts: [{ id: 'Uts1', name: 'returnedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts2', name: 'receivedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts3', name: 'defenseBonusundefined', type: 'unreal', netsafe: 'false' }],
    ANba: [{ id: 'Nba1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nba2', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Nba3', name: 'summonedUnitDurationSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Nbau', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ANch: [{ id: 'Nch1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }],
    ANdr: [{ id: 'Ndr1', name: 'hitPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr2', name: 'manaPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr3', name: 'drainIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Ndr4', name: 'lifeTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr5', name: 'manaTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr6', name: 'bonusLifeFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr7', name: 'bonusLifeDecay', type: 'unreal', netsafe: 'false' }, { id: 'Ndr8', name: 'bonusManaFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr9', name: 'bonusManaDecay', type: 'unreal', netsafe: 'false' }, { id: 'NdrA', name: 'useBlackArrowEffect', type: 'bool', netsafe: 'false' }],
    ANsi: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    AUan: [{ id: 'Uan1', name: 'numberOfCorpsesRaised', type: 'int', netsafe: 'false' }, { id: 'Uan3', name: 'inheritUpgrades', type: 'bool', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    AUdc: [{ id: 'Udc1', name: 'amountHealedOrDamaged', type: 'unreal', netsafe: 'false' }],
    AUdp: [{ id: 'Udp1', name: 'lifeConvertedToMana', type: 'unreal', netsafe: 'false' }, { id: 'Udp2', name: 'lifeConvertedToLife', type: 'unreal', netsafe: 'false' }, { id: 'Udp3', name: 'manaConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp4', name: 'lifeConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }],
    AUau: [{ id: 'Uau1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uau2', name: 'lifeRegenerationIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Uau3', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    AEev: [{ id: 'Eev1', name: 'chanceToEvadeundefined', type: 'unreal', netsafe: 'false' }],
    AEim: [{ id: 'Eim1', name: 'damagePerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Eim2', name: 'manaDrainedPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Eim3', name: 'bufferManaRequired', type: 'unreal', netsafe: 'false' }],
    AEmb: [{ id: 'Emb1', name: 'maxManaDrained', type: 'unreal', netsafe: 'false' }, { id: 'Emb2', name: 'boltDelay', type: 'unreal', netsafe: 'false' }, { id: 'Emb3', name: 'boltLifetime', type: 'unreal', netsafe: 'false' }],
    AEme: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Eme5', name: 'alternateFormHitPointBonus', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    AUsl: [{ id: 'Usl1', name: 'stunDuration', type: 'unreal', netsafe: 'false' }],
    AUav: [{ id: 'Uav1', name: 'attackDamageStolenPercent', type: 'unreal', netsafe: 'false' }],
    AUcs: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }],
    AUin: [{ id: 'Uin1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uin2', name: 'duration', type: 'unreal', netsafe: 'false' }, { id: 'Uin3', name: 'impactDelay', type: 'unreal', netsafe: 'false' }, { id: 'Uin4', name: 'summonedUnit', type: 'unitCode', netsafe: 'false' }],
    AOcl: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    AOeq: [{ id: 'Oeq1', name: 'effectDelay', type: 'unreal', netsafe: 'false' }, { id: 'Oeq2', name: 'damagePerSecondToBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Oeq3', name: 'unitsSlowedPercent', type: 'unreal', netsafe: 'false' }, { id: 'Oeq4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    AOfs: [{ id: 'Ofs1', name: 'detectionType', type: 'detectionType', netsafe: 'false' }],
    AOsf: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    AEer: [{ id: 'Eer1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    AEfn: [{ id: 'Efn1', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Efnu', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AEah: [{ id: 'Eah1', name: 'damageDealtToAttackers', type: 'unreal', netsafe: 'false' }, { id: 'Eah2', name: 'damageIsPercentReceived', type: 'bool', netsafe: 'false' }],
    AEtq: [{ id: 'Etq1', name: 'lifeHealed', type: 'unreal', netsafe: 'false' }, { id: 'Etq2', name: 'healInterval', type: 'unreal', netsafe: 'false' }, { id: 'Etq3', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Etq4', name: 'initialImmunityDuration', type: 'unreal', netsafe: 'false' }],
    AUdr: [{ id: 'Udp1', name: 'lifeConvertedToMana', type: 'unreal', netsafe: 'false' }, { id: 'Udp2', name: 'lifeConvertedToLife', type: 'unreal', netsafe: 'false' }, { id: 'Udp3', name: 'manaConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp4', name: 'lifeConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }],
    AUdd: [{ id: 'Udd1', name: 'maxLifeDrainedPerSecondPercent', type: 'unreal', netsafe: 'false' }, { id: 'Udd2', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    AUfa: [{ id: 'Ufa1', name: 'armorDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ufa2', name: 'armorBonus', type: 'unreal', netsafe: 'false' }],
    AUfu: [{ id: 'Ufa1', name: 'armorDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ufa2', name: 'armorBonus', type: 'unreal', netsafe: 'false' }],
    AUfn: [{ id: 'Ufn1', name: 'areaOfEffectDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ufn2', name: 'specificTargetDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ufn5', name: 'maximumDamage', type: 'unreal', netsafe: 'false' }],
    AHav: [{ id: 'Hav1', name: 'defenseBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hav2', name: 'hitPointBonus', type: 'unreal', netsafe: 'false' }, { id: 'Hav3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hav4', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }],
    AHbh: [{ id: 'Hbh1', name: 'chanceToBash', type: 'unreal', netsafe: 'false' }, { id: 'Hbh2', name: 'damageMultiplierundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh4', name: 'chanceToMiss', type: 'unreal', netsafe: 'false' }, { id: 'Hbh5', name: 'neverMissundefined', type: 'bool', netsafe: 'false' }],
    AHtb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    AHtc: [{ id: 'Htc1', name: 'aOEDamage', type: 'unreal', netsafe: 'false' }, { id: 'Htc2', name: 'specificTargetDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Htc3', name: 'movementSpeedReductionPercent', type: 'unreal', netsafe: 'false' }, { id: 'Htc4', name: 'attackSpeedReductionPercent', type: 'unreal', netsafe: 'false' }, { id: 'Htc5', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }],
    ANfl: [{ id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }],
    ANfa: [{ id: 'Hca1', name: 'extraDamage', type: 'unreal', netsafe: 'false' }, { id: 'Hca2', name: 'movementSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca3', name: 'attackSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca4', name: 'stackFlags', type: 'stackFlags', netsafe: 'false' }],
    ANto: [{ id: 'Ntou', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ANms: [{ id: 'Nms1', name: 'manaPerHitPoint', type: 'unreal', netsafe: 'false' }, { id: 'Nms2', name: 'damageAbsorbedPercent', type: 'unreal', netsafe: 'false' }],
    AHad: [{ id: 'Had1', name: 'armorBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Had2', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    AHds: [{ id: 'Hds1', name: 'canDeactivate', type: 'bool', netsafe: 'false' }],
    AHhb: [{ id: 'Hhb1', name: 'amountHealedOrDamagedundefined', type: 'unreal', netsafe: 'false' }],
    AHre: [{ id: 'Hre1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    ANbf: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Nbf5', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    ANdb: [{ id: 'Ocr1', name: 'chanceToCriticalStrike', type: 'unreal', netsafe: 'false' }, { id: 'Ocr2', name: 'damageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Ocr3', name: 'damageBonus', type: 'unreal', netsafe: 'false' }, { id: 'Ocr4', name: 'chanceToEvade', type: 'unreal', netsafe: 'false' }, { id: 'Ocr5', name: 'neverMiss', type: 'bool', netsafe: 'false' }, { id: 'Ocr6', name: 'excludeItemDamage', type: 'bool', netsafe: 'false' }],
    ANdh: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    ANef: [{ id: 'Nef1', name: 'summonedUnitTypes', type: 'unitList', netsafe: 'false' }],
    ANdo: [{ id: 'Ndo1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ndo2', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Ndo3', name: 'summonedUnitDurationSecondsundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ndo4', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ndo5', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ndou', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ANht: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    ANca: [{ id: 'nca1', name: 'distributedDamageFactorundefined', type: 'unreal', netsafe: 'false' }],
    ANrf: [{ id: 'Hbz1', name: 'numberOfWaves', type: 'int', netsafe: 'false' }, { id: 'Hbz2', name: 'damage', type: 'unreal', netsafe: 'false' }, { id: 'Hbz3', name: 'numberOfShards', type: 'int', netsafe: 'false' }, { id: 'Hbz4', name: 'buildingReduction', type: 'unreal', netsafe: 'false' }, { id: 'Hbz5', name: 'damagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Hbz6', name: 'maximumDamagePerWave', type: 'unreal', netsafe: 'false' }],
    AHfa: [{ id: 'Hfa1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }],
    AEst: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AEsf: [{ id: 'Esf1', name: 'damageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Esf2', name: 'damageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Esf3', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    AEar: [{ id: 'Ear1', name: 'damageBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }],
    AOae: [{ id: 'Oae1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Oae2', name: 'attackSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }],
    AOre: [{ id: 'Ore1', name: 'reincarnationDelay', type: 'unreal', netsafe: 'false' }],
    AOsh: [{ id: 'Osh1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh2', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh3', name: 'distanceundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    AOws: [{ id: 'Wrs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    AOhw: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    AOhx: [{ id: 'Ply1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ply2', name: 'morphUnitsGround', type: 'unitList', netsafe: 'false' }, { id: 'Ply3', name: 'morphUnitsAir', type: 'unitList', netsafe: 'false' }, { id: 'Ply4', name: 'morphUnitsAmphibious', type: 'unitList', netsafe: 'false' }, { id: 'Ply5', name: 'morphUnitsWater', type: 'unitList', netsafe: 'false' }],
    AOsw: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AEbl: [{ id: 'Ebl1', name: 'maximumRange', type: 'unreal', netsafe: 'false' }, { id: 'Ebl2', name: 'minimumRange', type: 'unreal', netsafe: 'false' }],
    AEfk: [{ id: 'Efk1', name: 'damagePerTargetundefined', type: 'unreal', netsafe: 'false' }, { id: 'Efk2', name: 'maximumTotalDamage', type: 'unreal', netsafe: 'false' }, { id: 'Efk3', name: 'maximumNumberOfTargets', type: 'int', netsafe: 'false' }, { id: 'Efk4', name: 'maximumSpeedAdjustment', type: 'unreal', netsafe: 'false' }],
    AEsh: [{ id: 'Esh1', name: 'decayingDamage', type: 'unreal', netsafe: 'false' }, { id: 'Esh2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Esh3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Esh4', name: 'decayPower', type: 'unreal', netsafe: 'false' }, { id: 'Esh5', name: 'initialDamage', type: 'unreal', netsafe: 'false' }],
    AEsv: [{ id: 'Esv1', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Esvu', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ANab: [{ id: 'Nab1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nab2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nab3', name: 'armorPenaltyundefined', type: 'int', netsafe: 'false' }, { id: 'Nab4', name: 'primaryDamage', type: 'unreal', netsafe: 'false' }, { id: 'Nab5', name: 'secondaryDamage', type: 'unreal', netsafe: 'false' }, { id: 'Nab6', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }],
    ANcr: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Ncr5', name: 'moveSpeedBonusInfoPanelOnly', type: 'unreal', netsafe: 'false' }, { id: 'Ncr6', name: 'attackSpeedBonusInfoPanelOnly', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ANhs: [{ id: 'Nhs6', name: 'waveCount', type: 'int', netsafe: 'false' }, { id: 'Ncs1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs2', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs3', name: 'missileCount', type: 'int', netsafe: 'false' }, { id: 'Ncs4', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs5', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }],
    ANtm: [{ id: 'Ntm1', name: 'goldCostFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ntm2', name: 'lumberCostFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ntm3', name: 'maxCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ntm4', name: 'allowBounty', type: 'bool', netsafe: 'false' }],
    ANeg: [{ id: 'Neg1', name: 'moveSpeedBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Neg2', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Neg3', name: 'abilityUpgrade1', type: 'heroAbilityList', netsafe: 'false' }, { id: 'Neg4', name: 'abilityUpgrade2', type: 'heroAbilityList', netsafe: 'false' }, { id: 'Neg5', name: 'abilityUpgrade3', type: 'heroAbilityList', netsafe: 'false' }, { id: 'Neg6', name: 'abilityUpgrade4', type: 'heroAbilityList', netsafe: 'false' }],
    ANcs: [{ id: 'Ncs1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs2', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs3', name: 'missileCount', type: 'int', netsafe: 'false' }, { id: 'Ncs4', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs5', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs6', name: 'effectDuration', type: 'unreal', netsafe: 'false' }],
    ANc1: [{ id: 'Ncs1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs2', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs3', name: 'missileCount', type: 'int', netsafe: 'false' }, { id: 'Ncs4', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs5', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs6', name: 'effectDuration', type: 'unreal', netsafe: 'false' }],
    ANc2: [{ id: 'Ncs1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs2', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs3', name: 'missileCount', type: 'int', netsafe: 'false' }, { id: 'Ncs4', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs5', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs6', name: 'effectDuration', type: 'unreal', netsafe: 'false' }],
    ANc3: [{ id: 'Ncs1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs2', name: 'damageIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs3', name: 'missileCount', type: 'int', netsafe: 'false' }, { id: 'Ncs4', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs5', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ncs6', name: 'effectDuration', type: 'unreal', netsafe: 'false' }],
    ANrg: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Nrg5', name: 'strengthBonus', type: 'int', netsafe: 'false' }, { id: 'Nrg6', name: 'defenseBonus', type: 'int', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ANg1: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Nrg5', name: 'strengthBonus', type: 'int', netsafe: 'false' }, { id: 'Nrg6', name: 'defenseBonus', type: 'int', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ANg2: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Nrg5', name: 'strengthBonus', type: 'int', netsafe: 'false' }, { id: 'Nrg6', name: 'defenseBonus', type: 'int', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ANg3: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Nrg5', name: 'strengthBonus', type: 'int', netsafe: 'false' }, { id: 'Nrg6', name: 'defenseBonus', type: 'int', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ANsy: [{ id: 'Nsy1', name: 'spawnInterval', type: 'unreal', netsafe: 'false' }, { id: 'Nsy2', name: 'spawnUnitID', type: 'unitCode', netsafe: 'false' }, { id: 'Nsy3', name: 'spawnUnitDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nsy4', name: 'spawnUnitOffset', type: 'unreal', netsafe: 'false' }, { id: 'Nsy5', name: 'leashRange', type: 'unreal', netsafe: 'false' }, { id: 'Nsyu', name: 'factoryUnitID', type: 'unitCode', netsafe: 'false' }],
    ANs1: [{ id: 'Nsy1', name: 'spawnInterval', type: 'unreal', netsafe: 'false' }, { id: 'Nsy2', name: 'spawnUnitID', type: 'unitCode', netsafe: 'false' }, { id: 'Nsy3', name: 'spawnUnitDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nsy4', name: 'spawnUnitOffset', type: 'unreal', netsafe: 'false' }, { id: 'Nsy5', name: 'leashRange', type: 'unreal', netsafe: 'false' }, { id: 'Nsyu', name: 'factoryUnitID', type: 'unitCode', netsafe: 'false' }],
    ANs2: [{ id: 'Nsy1', name: 'spawnInterval', type: 'unreal', netsafe: 'false' }, { id: 'Nsy2', name: 'spawnUnitID', type: 'unitCode', netsafe: 'false' }, { id: 'Nsy3', name: 'spawnUnitDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nsy4', name: 'spawnUnitOffset', type: 'unreal', netsafe: 'false' }, { id: 'Nsy5', name: 'leashRange', type: 'unreal', netsafe: 'false' }, { id: 'Nsyu', name: 'factoryUnitID', type: 'unitCode', netsafe: 'false' }],
    ANs3: [{ id: 'Nsy1', name: 'spawnInterval', type: 'unreal', netsafe: 'false' }, { id: 'Nsy2', name: 'spawnUnitID', type: 'unitCode', netsafe: 'false' }, { id: 'Nsy3', name: 'spawnUnitDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nsy4', name: 'spawnUnitOffset', type: 'unreal', netsafe: 'false' }, { id: 'Nsy5', name: 'leashRange', type: 'unreal', netsafe: 'false' }, { id: 'Nsyu', name: 'factoryUnitID', type: 'unitCode', netsafe: 'false' }],
    ANde: [{ id: 'Nde1', name: 'chanceToDemolish', type: 'unreal', netsafe: 'false' }, { id: 'Nde2', name: 'damageMultiplierBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Nde3', name: 'damageMultiplierUnits', type: 'unreal', netsafe: 'false' }, { id: 'Nde4', name: 'damageMultiplierHeroes', type: 'unreal', netsafe: 'false' }],
    ANd1: [{ id: 'Nde1', name: 'chanceToDemolish', type: 'unreal', netsafe: 'false' }, { id: 'Nde2', name: 'damageMultiplierBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Nde3', name: 'damageMultiplierUnits', type: 'unreal', netsafe: 'false' }, { id: 'Nde4', name: 'damageMultiplierHeroes', type: 'unreal', netsafe: 'false' }],
    ANd2: [{ id: 'Nde1', name: 'chanceToDemolish', type: 'unreal', netsafe: 'false' }, { id: 'Nde2', name: 'damageMultiplierBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Nde3', name: 'damageMultiplierUnits', type: 'unreal', netsafe: 'false' }, { id: 'Nde4', name: 'damageMultiplierHeroes', type: 'unreal', netsafe: 'false' }],
    ANd3: [{ id: 'Nde1', name: 'chanceToDemolish', type: 'unreal', netsafe: 'false' }, { id: 'Nde2', name: 'damageMultiplierBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Nde3', name: 'damageMultiplierUnits', type: 'unreal', netsafe: 'false' }, { id: 'Nde4', name: 'damageMultiplierHeroes', type: 'unreal', netsafe: 'false' }],
    ANic: [{ id: 'Nic1', name: 'bonusDamageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Nic2', name: 'deathDamageFullAmount', type: 'unreal', netsafe: 'false' }, { id: 'Nic3', name: 'deathDamageFullArea', type: 'unreal', netsafe: 'false' }, { id: 'Nic4', name: 'deathDamageHalfAmount', type: 'unreal', netsafe: 'false' }, { id: 'Nic5', name: 'deathDamageHalfArea', type: 'unreal', netsafe: 'false' }, { id: 'Nic6', name: 'deathDamageDelay', type: 'unreal', netsafe: 'false' }],
    ANso: [{ id: 'Nso1', name: 'damageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nso2', name: 'damagePeriod', type: 'unreal', netsafe: 'false' }, { id: 'Nso3', name: 'damagePenalty', type: 'unreal', netsafe: 'false' }, { id: 'Nso4', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nso5', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }],
    ANlm: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }, { id: 'Nlm2', name: 'splitDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nlm3', name: 'splitAttackCount', type: 'int', netsafe: 'false' }, { id: 'Nlm4', name: 'maxHitpointFactor', type: 'unreal', netsafe: 'false' }, { id: 'Nlm5', name: 'lifeDurationSplitBonus', type: 'unreal', netsafe: 'false' }, { id: 'Nlm6', name: 'generationCount', type: 'int', netsafe: 'false' }],
    ANvc: [{ id: 'Nvc1', name: 'rockRingCount', type: 'int', netsafe: 'false' }, { id: 'Nvc2', name: 'waveCountundefined', type: 'int', netsafe: 'false' }, { id: 'Nvc3', name: 'waveInterval', type: 'unreal', netsafe: 'false' }, { id: 'Nvc4', name: 'buildingDamageFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nvc5', name: 'fullDamageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nvc6', name: 'halfDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Nvcu', name: 'destructibleID', type: 'unitCode', netsafe: 'false' }],
    ANin: [{ id: 'Uin1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uin2', name: 'duration', type: 'unreal', netsafe: 'false' }, { id: 'Uin3', name: 'impactDelay', type: 'unreal', netsafe: 'false' }, { id: 'Uin4', name: 'summonedUnit', type: 'unitCode', netsafe: 'false' }],
    SNin: [{ id: 'Uin1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uin2', name: 'duration', type: 'unreal', netsafe: 'false' }, { id: 'Uin3', name: 'impactDelay', type: 'unreal', netsafe: 'false' }, { id: 'Uin4', name: 'summonedUnit', type: 'unitCode', netsafe: 'false' }],
    ANfb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ANfd: [{ id: 'Nfd1', name: 'graphicDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nfd2', name: 'graphicDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nfd3', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ACfd: [{ id: 'Nfd1', name: 'graphicDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nfd2', name: 'graphicDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nfd3', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ACf3: [{ id: 'Nfd1', name: 'graphicDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nfd2', name: 'graphicDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nfd3', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ANdp: [{ id: 'Ndp1', name: 'spawnedUnits', type: 'unitList', netsafe: 'false' }, { id: 'Ndp2', name: 'minimumNumberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Ndp3', name: 'maximumNumberOfUnits', type: 'int', netsafe: 'false' }],
    ANrc: [{ id: 'Nrc1', name: 'abilityForUnitCreation', type: 'abilCode', netsafe: 'false' }, { id: 'Nrc2', name: 'numberOfUnitsCreated', type: 'int', netsafe: 'false' }],
    ANr3: [{ id: 'Nrc1', name: 'abilityForUnitCreation', type: 'abilCode', netsafe: 'false' }, { id: 'Nrc2', name: 'numberOfUnitsCreated', type: 'int', netsafe: 'false' }],
    AEsb: [{ id: 'Esf1', name: 'damageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Esf2', name: 'damageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Esf3', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    ANrn: [{ id: 'Ore1', name: 'reincarnationDelay', type: 'unreal', netsafe: 'false' }],
    ANdc: [{ id: 'Ndc1', name: 'raceToConvert', type: 'unitRace', netsafe: 'false' }, { id: 'Ndc2', name: 'conversionUnit', type: 'unitCode', netsafe: 'false' }],
    SNdc: [{ id: 'Ndc1', name: 'raceToConvert', type: 'unitRace', netsafe: 'false' }, { id: 'Ndc2', name: 'conversionUnit', type: 'unitCode', netsafe: 'false' }],
    ANsl: [{ id: 'Nsl1', name: 'unitToPreserve', type: 'unitCode', netsafe: 'false' }],
    AEIl: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Eme5', name: 'alternateFormHitPointBonus', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    AEvi: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Eme5', name: 'alternateFormHitPointBonus', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    SNeq: [{ id: 'Oeq1', name: 'effectDelay', type: 'unreal', netsafe: 'false' }, { id: 'Oeq2', name: 'damagePerSecondToBuildings', type: 'unreal', netsafe: 'false' }, { id: 'Oeq3', name: 'unitsSlowedPercent', type: 'unreal', netsafe: 'false' }, { id: 'Oeq4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    SNdd: [{ id: 'Udd1', name: 'maxLifeDrainedPerSecondPercent', type: 'unreal', netsafe: 'false' }, { id: 'Udd2', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    ANmo: [{ id: 'Esf1', name: 'damageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Esf2', name: 'damageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Esf3', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    AEpa: [{ id: 'Poa1', name: 'extraDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poa2', name: 'wESTRING_AEVAL_POI1', type: 'unreal', netsafe: 'false' }, { id: 'Poa3', name: 'wESTRING_AEVAL_POI2', type: 'unreal', netsafe: 'false' }, { id: 'Poa4', name: 'wESTRING_AEVAL_POI3', type: 'unreal', netsafe: 'false' }, { id: 'Poa5', name: 'wESTRING_AEVAL_POI4', type: 'stackFlags', netsafe: 'false' }],
    ANwm: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AHca: [{ id: 'Hca1', name: 'extraDamage', type: 'unreal', netsafe: 'false' }, { id: 'Hca2', name: 'movementSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca3', name: 'attackSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca4', name: 'stackFlags', type: 'stackFlags', netsafe: 'false' }],
    ANbr: [{ id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }, { id: 'Nbr1', name: 'damageIncrease', type: 'unreal', netsafe: 'false' }],
    Arsg: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    Aamk: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    Arsq: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    Arsp: [{ id: 'Nst1', name: 'beastsPerSecond', type: 'int', netsafe: 'false' }, { id: 'Nst2', name: 'beastCollisionRadius', type: 'unreal', netsafe: 'false' }, { id: 'Nst3', name: 'damageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Nst4', name: 'damageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Nst5', name: 'damageDelay', type: 'unreal', netsafe: 'false' }],
    ANsb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ANhw: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    Arsw: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    ANhx: [{ id: 'Ply1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ply2', name: 'morphUnitsGround', type: 'unitList', netsafe: 'false' }, { id: 'Ply3', name: 'morphUnitsAir', type: 'unitList', netsafe: 'false' }, { id: 'Ply4', name: 'morphUnitsAmphibious', type: 'unitList', netsafe: 'false' }, { id: 'Ply5', name: 'morphUnitsWater', type: 'unitList', netsafe: 'false' }],
    AOls: [{ id: 'Uls1', name: 'numberOfSwarmUnits', type: 'int', netsafe: 'false' }, { id: 'Uls2', name: 'unitReleaseIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uls3', name: 'maxSwarmUnitsPerTarget', type: 'int', netsafe: 'false' }, { id: 'Uls4', name: 'damageReturnFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uls5', name: 'damageReturnThreshold', type: 'unreal', netsafe: 'false' }, { id: 'Ulsu', name: 'swarmUnitType', type: 'unitCode', netsafe: 'false' }],
    ANcf: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Nbf5', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Acdb: [{ id: 'Ocr1', name: 'chanceToCriticalStrike', type: 'unreal', netsafe: 'false' }, { id: 'Ocr2', name: 'damageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Ocr3', name: 'damageBonus', type: 'unreal', netsafe: 'false' }, { id: 'Ocr4', name: 'chanceToEvade', type: 'unreal', netsafe: 'false' }, { id: 'Ocr5', name: 'neverMiss', type: 'bool', netsafe: 'false' }, { id: 'Ocr6', name: 'excludeItemDamage', type: 'bool', netsafe: 'false' }],
    Acdh: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    Acef: [{ id: 'Nef1', name: 'summonedUnitTypes', type: 'unitList', netsafe: 'false' }],
    AOr2: [{ id: 'Oae1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Oae2', name: 'attackSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }],
    AOr3: [{ id: 'Ore1', name: 'reincarnationDelay', type: 'unreal', netsafe: 'false' }],
    AOs2: [{ id: 'Osh1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh2', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh3', name: 'distanceundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    AOw2: [{ id: 'Wrs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ANcl: [{ id: 'Ncl1', name: 'followThroughTime', type: 'unreal', netsafe: 'false' }, { id: 'Ncl2', name: 'targetType', type: 'channelType', netsafe: 'false' }, { id: 'Ncl3', name: 'options', type: 'channelFlags', netsafe: 'false' }, { id: 'Ncl4', name: 'artDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ncl5', name: 'disableOtherAbilities', type: 'bool', netsafe: 'false' }, { id: 'Ncl6', name: 'baseOrderIDundefined', type: 'orderString', netsafe: 'false' }],
    Aadm: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    Andm: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACdm: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACd2: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    Aabs: [{ id: 'abs1', name: 'maximumLifeAbsorbed', type: 'unreal', netsafe: 'false' }, { id: 'abs2', name: 'maximumManaAbsorbed', type: 'unreal', netsafe: 'false' }],
    ANav: [{ id: 'Hav1', name: 'defenseBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hav2', name: 'hitPointBonus', type: 'unreal', netsafe: 'false' }, { id: 'Hav3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hav4', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }],
    Aall: [{ id: 'Neu1', name: 'activationRadius', type: 'unreal', netsafe: 'false' }, { id: 'Neu2', name: 'interactionType', type: 'interactionFlags', netsafe: 'false' }, { id: 'Neu3', name: 'showSelectUnitButton', type: 'bool', netsafe: 'false' }, { id: 'Neu4', name: 'showUnitIndicator', type: 'bool', netsafe: 'false' }],
    Aast: [{ id: 'ast1', name: 'lifeRestoredFactor', type: 'unreal', netsafe: 'false' }, { id: 'ast2', name: 'manaRestoredFactor', type: 'unreal', netsafe: 'false' }],
    ACad: [{ id: 'Uan3', name: 'inheritUpgrades', type: 'bool', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }, { id: 'Cad1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }],
    Aams: [{ id: 'Ams1', name: 'summonedUnitDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ams2', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ams3', name: 'shieldLife', type: 'int', netsafe: 'false' }, { id: 'Ams4', name: 'manaLoss', type: 'int', netsafe: 'false' }],
    Aam2: [{ id: 'Ams1', name: 'summonedUnitDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ams2', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ams3', name: 'shieldLife', type: 'int', netsafe: 'false' }, { id: 'Ams4', name: 'manaLoss', type: 'int', netsafe: 'false' }],
    ACam: [{ id: 'Ams1', name: 'summonedUnitDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ams2', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ams3', name: 'shieldLife', type: 'int', netsafe: 'false' }, { id: 'Ams4', name: 'manaLoss', type: 'int', netsafe: 'false' }],
    ACba: [{ id: 'Hab1', name: 'manaRegenerationIncrease', type: 'unreal', netsafe: 'false' }, { id: 'Hab2', name: 'percentBonus', type: 'bool', netsafe: 'false' }],
    ACac: [{ id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }, { id: 'Cac1', name: 'attackDamageIncreaseundefined', type: 'unreal', netsafe: 'false' }],
    ACav: [{ id: 'Had1', name: 'armorBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Had2', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    SCae: [{ id: 'Oae1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Oae2', name: 'attackSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }],
    Aap1: [{ id: 'Apl1', name: 'auraDuration', type: 'unreal', netsafe: 'false' }, { id: 'Apl2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Apl3', name: 'durationOfPlagueWard', type: 'unreal', netsafe: 'false' }, { id: 'Aplu', name: 'plagueWardUnitType', type: 'unitCode', netsafe: 'false' }],
    Aap2: [{ id: 'Apl1', name: 'auraDuration', type: 'unreal', netsafe: 'false' }, { id: 'Apl2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Apl3', name: 'durationOfPlagueWard', type: 'unreal', netsafe: 'false' }, { id: 'Aplu', name: 'plagueWardUnitType', type: 'unitCode', netsafe: 'false' }],
    Aap3: [{ id: 'Apl1', name: 'auraDuration', type: 'unreal', netsafe: 'false' }, { id: 'Apl2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Apl3', name: 'durationOfPlagueWard', type: 'unreal', netsafe: 'false' }, { id: 'Aplu', name: 'plagueWardUnitType', type: 'unitCode', netsafe: 'false' }],
    Aap4: [{ id: 'Apl1', name: 'auraDuration', type: 'unreal', netsafe: 'false' }, { id: 'Apl2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Apl3', name: 'durationOfPlagueWard', type: 'unreal', netsafe: 'false' }, { id: 'Aplu', name: 'plagueWardUnitType', type: 'unitCode', netsafe: 'false' }],
    Aap5: [{ id: 'Apl1', name: 'auraDuration', type: 'unreal', netsafe: 'false' }, { id: 'Apl2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Apl3', name: 'durationOfPlagueWard', type: 'unreal', netsafe: 'false' }, { id: 'Aplu', name: 'plagueWardUnitType', type: 'unitCode', netsafe: 'false' }],
    Aoar: [{ id: 'Oar1', name: 'amountOfHitPointsRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'Oar2', name: 'percentage', type: 'bool', netsafe: 'false' }],
    Aabr: [{ id: 'Oar1', name: 'amountOfHitPointsRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'Oar2', name: 'percentage', type: 'bool', netsafe: 'false' }],
    Aasl: [{ id: 'Slo1', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo2', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo3', name: 'alwaysAutocastundefined', type: 'bool', netsafe: 'false' }],
    ACat: [{ id: 'Ear1', name: 'damageBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }],
    Aakb: [{ id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }, { id: 'Akb1', name: 'attackDamageIncrease', type: 'unreal', netsafe: 'false' }, { id: 'Akb2', name: 'playChannelAnimation', type: 'bool', netsafe: 'false' }],
    Aave: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'ave5', name: 'lifeRegenerationRatePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Abof: [{ id: 'Hfs1', name: 'fullDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs2', name: 'fullDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs3', name: 'halfDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs4', name: 'halfDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs5', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hfs6', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACbn: [{ id: 'Hbn1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbn2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }],
    ACbh: [{ id: 'Hbh1', name: 'chanceToBash', type: 'unreal', netsafe: 'false' }, { id: 'Hbh2', name: 'damageMultiplierundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh4', name: 'chanceToMiss', type: 'unreal', netsafe: 'false' }, { id: 'Hbh5', name: 'neverMissundefined', type: 'bool', netsafe: 'false' }],
    ANbh: [{ id: 'Hbh1', name: 'chanceToBash', type: 'unreal', netsafe: 'false' }, { id: 'Hbh2', name: 'damageMultiplierundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh4', name: 'chanceToMiss', type: 'unreal', netsafe: 'false' }, { id: 'Hbh5', name: 'neverMissundefined', type: 'bool', netsafe: 'false' }],
    ANb2: [{ id: 'Hbh1', name: 'chanceToBash', type: 'unreal', netsafe: 'false' }, { id: 'Hbh2', name: 'damageMultiplierundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh4', name: 'chanceToMiss', type: 'unreal', netsafe: 'false' }, { id: 'Hbh5', name: 'neverMissundefined', type: 'bool', netsafe: 'false' }],
    Abtl: [{ id: 'Btl1', name: 'allowedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Btl2', name: 'summonBusyUnits', type: 'bool', netsafe: 'false' }],
    Sbtl: [{ id: 'Btl1', name: 'allowedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Btl2', name: 'summonBusyUnits', type: 'bool', netsafe: 'false' }],
    Abrf: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Absk: [{ id: 'bsk1', name: 'movementSpeedIncreaseundefined', type: 'unreal', netsafe: 'false' }, { id: 'bsk2', name: 'attackSpeedIncreaseundefined', type: 'unreal', netsafe: 'false' }, { id: 'bsk3', name: 'damageTakenIncrease', type: 'unreal', netsafe: 'false' }],
    Sbsk: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    ACbk: [{ id: 'Nba1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nba2', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Nba3', name: 'summonedUnitDurationSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Nbau', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Abds: [{ id: 'Bli1', name: 'expansionAmount', type: 'unreal', netsafe: 'false' }, { id: 'Bli2', name: 'createsBlight', type: 'bool', netsafe: 'false' }],
    Abdl: [{ id: 'Bli1', name: 'expansionAmount', type: 'unreal', netsafe: 'false' }, { id: 'Bli2', name: 'createsBlight', type: 'bool', netsafe: 'false' }],
    Abgs: [{ id: 'Bli1', name: 'expansionAmount', type: 'unreal', netsafe: 'false' }, { id: 'Bli2', name: 'createsBlight', type: 'bool', netsafe: 'false' }],
    Abgl: [{ id: 'Bli1', name: 'expansionAmount', type: 'unreal', netsafe: 'false' }, { id: 'Bli2', name: 'createsBlight', type: 'bool', netsafe: 'false' }],
    Abgm: [{ id: 'Bgm1', name: 'goldPerInterval', type: 'int', netsafe: 'false' }, { id: 'Bgm2', name: 'intervalDuration', type: 'unreal', netsafe: 'false' }, { id: 'Bgm3', name: 'maxNumberOfMiners', type: 'int', netsafe: 'false' }, { id: 'Bgm4', name: 'radiusOfMiningRing', type: 'unreal', netsafe: 'false' }],
    ANbl: [{ id: 'Ebl1', name: 'maximumRange', type: 'unreal', netsafe: 'false' }, { id: 'Ebl2', name: 'minimumRange', type: 'unreal', netsafe: 'false' }],
    ACbz: [{ id: 'Hbz1', name: 'numberOfWaves', type: 'int', netsafe: 'false' }, { id: 'Hbz2', name: 'damage', type: 'unreal', netsafe: 'false' }, { id: 'Hbz3', name: 'numberOfShards', type: 'int', netsafe: 'false' }, { id: 'Hbz4', name: 'buildingReduction', type: 'unreal', netsafe: 'false' }, { id: 'Hbz5', name: 'damagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Hbz6', name: 'maximumDamagePerWave', type: 'unreal', netsafe: 'false' }],
    Ablo: [{ id: 'Blo1', name: 'attackSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo2', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo3', name: 'scalingFactor', type: 'unreal', netsafe: 'false' }],
    ACbl: [{ id: 'Blo1', name: 'attackSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo2', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo3', name: 'scalingFactor', type: 'unreal', netsafe: 'false' }],
    ACbb: [{ id: 'Blo1', name: 'attackSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo2', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo3', name: 'scalingFactor', type: 'unreal', netsafe: 'false' }],
    ACbc: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Nbf5', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    ACbf: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Nbf5', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Abur: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Abu2: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Abu3: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Abu5: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Abdt: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Acan: [{ id: 'Can1', name: 'hitPointsPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Can2', name: 'maxHitPoints', type: 'unreal', netsafe: 'false' }],
    Acn2: [{ id: 'Can1', name: 'hitPointsPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Can2', name: 'maxHitPoints', type: 'unreal', netsafe: 'false' }],
    ACcn: [{ id: 'Can1', name: 'hitPointsPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Can2', name: 'maxHitPoints', type: 'unreal', netsafe: 'false' }],
    Abun: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Advc: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }, { id: 'Dev2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Dev3', name: 'maximumCreepLevel', type: 'int', netsafe: 'false' }],
    Sch2: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Sch5: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Sch4: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Sch3: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Aenc: [{ id: 'Car1', name: 'cargoCapacity', type: 'int', netsafe: 'false' }],
    Achd: [{ id: 'Chd1', name: 'movementUpdateFrequency', type: 'unreal', netsafe: 'false' }, { id: 'Chd2', name: 'attackUpdateFrequency', type: 'unreal', netsafe: 'false' }, { id: 'Chd3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACca: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }],
    ACcv: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }],
    ACc2: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }],
    ACc3: [{ id: 'Ucs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ucs2', name: 'maxDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }],
    ACcl: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    Ache: [{ id: 'idc1', name: 'manaLossPerUnitundefined', type: 'unreal', netsafe: 'false' }, { id: 'idc2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'idc3', name: 'maximumDispelledUnits', type: 'int', netsafe: 'false' }],
    Sca1: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Sca2: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Sca3: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Sca4: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Sca5: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Sca6: [{ id: 'Cha1', name: 'newUnitType', type: 'unitCode', netsafe: 'false' }],
    Achl: [{ id: 'Chl1', name: 'unitTypeAllowed', type: 'unitCode', netsafe: 'false' }],
    ACch: [{ id: 'Nch1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }],
    ACce: [{ id: 'nca1', name: 'distributedDamageFactorundefined', type: 'unreal', netsafe: 'false' }],
    Aclf: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    ACcw: [{ id: 'Hca1', name: 'extraDamage', type: 'unreal', netsafe: 'false' }, { id: 'Hca2', name: 'movementSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca3', name: 'attackSpeedFactor', type: 'unreal', netsafe: 'false' }, { id: 'Hca4', name: 'stackFlags', type: 'stackFlags', netsafe: 'false' }],
    Acmg: [{ id: 'Nch1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Cmg2', name: 'manaPerSummonedHitpoint', type: 'unreal', netsafe: 'false' }, { id: 'Cmg3', name: 'chargeForCurrentLife', type: 'unreal', netsafe: 'false' }],
    Acpf: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Acor: [{ id: 'Cor1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Acoa: [{ id: 'coau', name: 'resultingUnitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'coa1', name: 'partnerUnitType', type: 'unitCode', netsafe: 'false' }],
    Acoh: [{ id: 'coau', name: 'resultingUnitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'coa1', name: 'partnerUnitType', type: 'unitCode', netsafe: 'false' }],
    Aco2: [{ id: 'coau', name: 'resultingUnitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'coa1', name: 'partnerUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'coa2', name: 'moveToPartner', type: 'bool', netsafe: 'false' }],
    Aco3: [{ id: 'coau', name: 'resultingUnitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'coa1', name: 'partnerUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'coa2', name: 'moveToPartner', type: 'bool', netsafe: 'false' }],
    Acri: [{ id: 'Cri1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri3', name: 'damageReduction', type: 'unreal', netsafe: 'false' }],
    Scri: [{ id: 'Cri1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri3', name: 'damageReduction', type: 'unreal', netsafe: 'false' }],
    ACcr: [{ id: 'Cri1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Cri3', name: 'damageReduction', type: 'unreal', netsafe: 'false' }],
    ACct: [{ id: 'Ocr1', name: 'chanceToCriticalStrike', type: 'unreal', netsafe: 'false' }, { id: 'Ocr2', name: 'damageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Ocr3', name: 'damageBonus', type: 'unreal', netsafe: 'false' }, { id: 'Ocr4', name: 'chanceToEvade', type: 'unreal', netsafe: 'false' }, { id: 'Ocr5', name: 'neverMiss', type: 'bool', netsafe: 'false' }, { id: 'Ocr6', name: 'excludeItemDamage', type: 'bool', netsafe: 'false' }],
    Acrs: [{ id: 'Crs', name: 'chanceToMissundefined', type: 'unreal', netsafe: 'false' }],
    ACcs: [{ id: 'Crs', name: 'chanceToMissundefined', type: 'unreal', netsafe: 'false' }],
    Acyc: [{ id: 'cyc1', name: 'canBeDispelled', type: 'bool', netsafe: 'false' }],
    Acny: [{ id: 'cyc1', name: 'canBeDispelled', type: 'bool', netsafe: 'false' }],
    ACcy: [{ id: 'cyc1', name: 'canBeDispelled', type: 'bool', netsafe: 'false' }],
    SCc1: [{ id: 'cyc1', name: 'canBeDispelled', type: 'bool', netsafe: 'false' }],
    ACdc: [{ id: 'Udc1', name: 'amountHealedOrDamaged', type: 'unreal', netsafe: 'false' }],
    Adda: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }],
    Amnx: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }],
    Amnz: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }],
    Adec: [{ id: 'dcp1', name: 'partnerUnitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'dcp2', name: 'partnerUnitTypeTwo', type: 'unitCode', netsafe: 'false' }],
    Adef: [{ id: 'Def1', name: 'damageTakenPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def2', name: 'damageDealtPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def3', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def4', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def5', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def6', name: 'chanceToDeflect', type: 'unreal', netsafe: 'false' }, { id: 'Def7', name: 'deflectDamageTakenPiercing', type: 'unreal', netsafe: 'false' }, { id: 'Def8', name: 'deflectDamageTakenSpells', type: 'unreal', netsafe: 'false' }],
    Adt1: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Atru: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Adtg: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    ANtr: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Agyv: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Adts: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    Adtn: [{ id: 'Dtn1', name: 'manaLossPerUnitundefined', type: 'unreal', netsafe: 'false' }, { id: 'Dtn2', name: 'damageToSummonedUnitsundefined', type: 'unreal', netsafe: 'false' }],
    Adev: [{ id: 'Dev1', name: 'maxCreepLevel', type: 'int', netsafe: 'false' }],
    ACdv: [{ id: 'Dev1', name: 'maxCreepLevel', type: 'int', netsafe: 'false' }],
    Advm: [{ id: 'dvm1', name: 'lifePerUnit', type: 'unreal', netsafe: 'false' }, { id: 'dvm2', name: 'manaPerUnit', type: 'unreal', netsafe: 'false' }, { id: 'dvm3', name: 'lifePerBuff', type: 'unreal', netsafe: 'false' }, { id: 'dvm4', name: 'manaPerBuff', type: 'unreal', netsafe: 'false' }, { id: 'dvm5', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'dvm6', name: 'ignoreFriendlyBuffs', type: 'bool', netsafe: 'false' }],
    ACde: [{ id: 'dvm1', name: 'lifePerUnit', type: 'unreal', netsafe: 'false' }, { id: 'dvm2', name: 'manaPerUnit', type: 'unreal', netsafe: 'false' }, { id: 'dvm3', name: 'lifePerBuff', type: 'unreal', netsafe: 'false' }, { id: 'dvm4', name: 'manaPerBuff', type: 'unreal', netsafe: 'false' }, { id: 'dvm5', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'dvm6', name: 'ignoreFriendlyBuffs', type: 'bool', netsafe: 'false' }],
    Adch: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    Adcn: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    Adis: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    Adsm: [{ id: 'Adm1', name: 'manaLossundefined', type: 'unreal', netsafe: 'false' }, { id: 'Adm2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACds: [{ id: 'Hds1', name: 'canDeactivate', type: 'bool', netsafe: 'false' }],
    ACdr: [{ id: 'Ndr1', name: 'hitPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr2', name: 'manaPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr3', name: 'drainIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Ndr4', name: 'lifeTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr5', name: 'manaTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr6', name: 'bonusLifeFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr7', name: 'bonusLifeDecay', type: 'unreal', netsafe: 'false' }, { id: 'Ndr8', name: 'bonusManaFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr9', name: 'bonusManaDecay', type: 'unreal', netsafe: 'false' }],
    Aeat: [{ id: 'Eat1', name: 'ripDelay', type: 'unreal', netsafe: 'false' }, { id: 'Eat2', name: 'eatDelay', type: 'unreal', netsafe: 'false' }, { id: 'Eat3', name: 'hitPointsGained', type: 'unreal', netsafe: 'false' }],
    Aegr: [{ id: 'Def1', name: 'damageTakenPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def2', name: 'damageDealtPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def3', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def4', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def5', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def6', name: 'chanceToDeflect', type: 'unreal', netsafe: 'false' }, { id: 'Def7', name: 'deflectDamageTakenPiercing', type: 'unreal', netsafe: 'false' }, { id: 'Def8', name: 'deflectDamageTakenSpells', type: 'unreal', netsafe: 'false' }],
    ANen: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    Aens: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    ACen: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    Aent: [{ id: 'ent1', name: 'resultingUnitType', type: 'unitCode', netsafe: 'false' }],
    Aegm: [{ id: 'Egm1', name: 'goldPerIntervalundefined', type: 'int', netsafe: 'false' }, { id: 'Egm2', name: 'intervalDurationundefined', type: 'unreal', netsafe: 'false' }],
    Aenr: [{ id: 'Eer1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Aenw: [{ id: 'Eer1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Aetf: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ACev: [{ id: 'Eev1', name: 'chanceToEvadeundefined', type: 'unreal', netsafe: 'false' }],
    ACes: [{ id: 'Eev1', name: 'chanceToEvadeundefined', type: 'unreal', netsafe: 'false' }],
    Aexh: [{ id: 'exh1', name: 'maximumNumberOfCorpsesundefined', type: 'int', netsafe: 'false' }, { id: 'exhu', name: 'unitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ANfy: [{ id: 'Nfy1', name: 'spawnIntervalundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nfy2', name: 'leashRangeundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nfyu', name: 'spawnUnitIDundefined', type: 'unitCode', netsafe: 'false' }],
    Afae: [{ id: 'Fae1', name: 'defenseReduction', type: 'int', netsafe: 'false' }, { id: 'Fae2', name: 'alwaysAutocast', type: 'bool', netsafe: 'false' }],
    Afa2: [{ id: 'Fae1', name: 'defenseReduction', type: 'int', netsafe: 'false' }, { id: 'Fae2', name: 'alwaysAutocast', type: 'bool', netsafe: 'false' }],
    ACff: [{ id: 'Fae1', name: 'defenseReduction', type: 'int', netsafe: 'false' }, { id: 'Fae2', name: 'alwaysAutocast', type: 'bool', netsafe: 'false' }],
    Afbk: [{ id: 'fbk1', name: 'maxManaDrainedUnits', type: 'unreal', netsafe: 'false' }, { id: 'fbk2', name: 'damageRatioUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk3', name: 'maxManaDrainedHeros', type: 'unreal', netsafe: 'false' }, { id: 'fbk4', name: 'damageRatioHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk5', name: 'summonedDamage', type: 'unreal', netsafe: 'false' }],
    Afbt: [{ id: 'fbk1', name: 'maxManaDrainedUnits', type: 'unreal', netsafe: 'false' }, { id: 'fbk2', name: 'damageRatioUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk3', name: 'maxManaDrainedHeros', type: 'unreal', netsafe: 'false' }, { id: 'fbk4', name: 'damageRatioHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk5', name: 'summonedDamage', type: 'unreal', netsafe: 'false' }],
    Afbb: [{ id: 'fbk1', name: 'maxManaDrainedUnits', type: 'unreal', netsafe: 'false' }, { id: 'fbk2', name: 'damageRatioUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk3', name: 'maxManaDrainedHeros', type: 'unreal', netsafe: 'false' }, { id: 'fbk4', name: 'damageRatioHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'fbk5', name: 'summonedDamage', type: 'unreal', netsafe: 'false' }],
    ACsf: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    ACs9: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    ACs8: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    ACs7: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    Afod: [{ id: 'Nfd1', name: 'graphicDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nfd2', name: 'graphicDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nfd3', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    Awfb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ACfb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    Aflk: [{ id: 'flk1', name: 'mediumDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk2', name: 'smallDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk3', name: 'fullDamageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk4', name: 'mediumDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'flk5', name: 'smallDamageAmount', type: 'unreal', netsafe: 'false' }],
    Afla: [{ id: 'Fla1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }, { id: 'Fla2', name: 'effectDelayundefined', type: 'unreal', netsafe: 'false' }, { id: 'Fla3', name: 'flareCount', type: 'int', netsafe: 'false' }],
    ACfs: [{ id: 'Hfs1', name: 'fullDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs2', name: 'fullDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs3', name: 'halfDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs4', name: 'halfDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs5', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hfs6', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }],
    ANfs: [{ id: 'Hfs1', name: 'fullDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs2', name: 'fullDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs3', name: 'halfDamageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Hfs4', name: 'halfDamageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Hfs5', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hfs6', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }],
    ACfr: [{ id: 'Efn1', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Efnu', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ACfl: [{ id: 'Ucs3', name: 'distance', type: 'unreal', netsafe: 'false' }, { id: 'Ucs4', name: 'finalArea', type: 'unreal', netsafe: 'false' }, { id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }],
    Afsh: [{ id: 'flk1', name: 'mediumDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk2', name: 'smallDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk3', name: 'fullDamageAmountundefined', type: 'unreal', netsafe: 'false' }, { id: 'flk4', name: 'mediumDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'flk5', name: 'smallDamageAmount', type: 'unreal', netsafe: 'false' }],
    Afzy: [{ id: 'Blo1', name: 'attackSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo2', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Blo3', name: 'scalingFactor', type: 'unreal', netsafe: 'false' }],
    ACfa: [{ id: 'Ufa1', name: 'armorDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ufa2', name: 'armorBonus', type: 'unreal', netsafe: 'false' }],
    ACf2: [{ id: 'Ufa1', name: 'armorDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ufa2', name: 'armorBonus', type: 'unreal', netsafe: 'false' }],
    ACfu: [{ id: 'Ufa1', name: 'armorDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ufa2', name: 'armorBonus', type: 'unreal', netsafe: 'false' }],
    ACfn: [{ id: 'Ufn1', name: 'areaOfEffectDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ufn2', name: 'specificTargetDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ufn5', name: 'maximumDamage', type: 'unreal', netsafe: 'false' }],
    ACcb: [{ id: 'Htb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    Agho: [{ id: 'Gho1', name: 'autoAcquireAttackTargets', type: 'bool', netsafe: 'false' }, { id: 'Gho2', name: 'wESTRING_AEVAL_ETH1', type: 'bool', netsafe: 'false' }, { id: 'Gho3', name: 'wESTRING_AEVAL_ETH2', type: 'bool', netsafe: 'false' }],
    Aeth: [{ id: 'Eth1', name: 'immuneToMorphEffects', type: 'bool', netsafe: 'false' }, { id: 'Eth2', name: 'doesNotBlockBuildings', type: 'bool', netsafe: 'false' }],
    Agld: [{ id: 'Gld1', name: 'maxGold', type: 'int', netsafe: 'false' }, { id: 'Gld2', name: 'miningDuration', type: 'unreal', netsafe: 'false' }, { id: 'Gld3', name: 'miningCapacity', type: 'int', netsafe: 'false' }],
    Agra: [{ id: 'gra1', name: 'attachDelay', type: 'unreal', netsafe: 'false' }, { id: 'gra2', name: 'removeDelay', type: 'unreal', netsafe: 'false' }, { id: 'gra3', name: 'disabledAttackIndex', type: 'int', netsafe: 'false' }, { id: 'gra4', name: 'enabledAttackIndexundefined', type: 'int', netsafe: 'false' }, { id: 'gra5', name: 'maximumAttacks', type: 'int', netsafe: 'false' }],
    Agyd: [{ id: 'Gyd1', name: 'maximumNumberOfCorpses', type: 'int', netsafe: 'false' }, { id: 'Gyd2', name: 'radiusOfGravestones', type: 'unreal', netsafe: 'false' }, { id: 'Gyd3', name: 'radiusOfCorpses', type: 'unreal', netsafe: 'false' }, { id: 'Gydu', name: 'corpseUnitType', type: 'unitCode', netsafe: 'false' }],
    Assk: [{ id: 'Ssk1', name: 'chanceToReduceDamagePercent', type: 'unreal', netsafe: 'false' }, { id: 'Ssk2', name: 'minimumDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ssk3', name: 'ignoredDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ssk4', name: 'includeRangedDamage', type: 'bool', netsafe: 'false' }, { id: 'Ssk5', name: 'includeMeleeDamage', type: 'bool', netsafe: 'false' }],
    Ansk: [{ id: 'Ssk1', name: 'chanceToReduceDamagePercent', type: 'unreal', netsafe: 'false' }, { id: 'Ssk2', name: 'minimumDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ssk3', name: 'ignoredDamage', type: 'unreal', netsafe: 'false' }, { id: 'Ssk4', name: 'includeRangedDamage', type: 'bool', netsafe: 'false' }, { id: 'Ssk5', name: 'includeMeleeDamage', type: 'bool', netsafe: 'false' }],
    Ahar: [{ id: 'Har1', name: 'damageToTree', type: 'int', netsafe: 'false' }, { id: 'Har2', name: 'lumberCapacity', type: 'int', netsafe: 'false' }, { id: 'Har3', name: 'goldCapacity', type: 'int', netsafe: 'false' }],
    ANha: [{ id: 'Har1', name: 'damageToTree', type: 'int', netsafe: 'false' }, { id: 'Har2', name: 'lumberCapacity', type: 'int', netsafe: 'false' }, { id: 'Har3', name: 'goldCapacity', type: 'int', netsafe: 'false' }],
    Ahrl: [{ id: 'Har1', name: 'damageToTree', type: 'int', netsafe: 'false' }, { id: 'Har2', name: 'lumberCapacity', type: 'int', netsafe: 'false' }],
    Ahr3: [{ id: 'Har1', name: 'damageToTree', type: 'int', netsafe: 'false' }, { id: 'Har2', name: 'lumberCapacity', type: 'int', netsafe: 'false' }],
    Ahr2: [{ id: 'Har1', name: 'damageToTree', type: 'int', netsafe: 'false' }, { id: 'Har2', name: 'lumberCapacity', type: 'int', netsafe: 'false' }],
    Ahea: [{ id: 'Hea1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }],
    Anhe: [{ id: 'Hea1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }],
    Anh1: [{ id: 'Hea1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }],
    Anh2: [{ id: 'Hea1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }],
    Ahwd: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AChw: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AChv: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    Ahnl: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    AChx: [{ id: 'Ply1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ply2', name: 'morphUnitsGround', type: 'unitList', netsafe: 'false' }, { id: 'Ply3', name: 'morphUnitsAir', type: 'unitList', netsafe: 'false' }, { id: 'Ply4', name: 'morphUnitsAmphibious', type: 'unitList', netsafe: 'false' }, { id: 'Ply5', name: 'morphUnitsWater', type: 'unitList', netsafe: 'false' }],
    Acht: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    ACim: [{ id: 'Eim1', name: 'damagePerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Eim2', name: 'manaDrainedPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Eim3', name: 'bufferManaRequired', type: 'unreal', netsafe: 'false' }],
    ACmp: [{ id: 'Uim1', name: 'waveDistance', type: 'unreal', netsafe: 'false' }, { id: 'Uim2', name: 'waveTimeSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uim3', name: 'damageDealtundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uim4', name: 'airTimeSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Uim5', name: 'uninterruptible', type: 'bool', netsafe: 'false' }, { id: 'Uim6', name: 'airborneTargetsVulnerable', type: 'bool', netsafe: 'false' }],
    Ainf: [{ id: 'Inf1', name: 'damageIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Inf2', name: 'defenseIncrease', type: 'int', netsafe: 'false' }, { id: 'Inf3', name: 'autocastRange', type: 'unreal', netsafe: 'false' }, { id: 'Inf4', name: 'lifeRegenRate', type: 'unreal', netsafe: 'false' }],
    ACif: [{ id: 'Inf1', name: 'damageIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Inf2', name: 'defenseIncrease', type: 'int', netsafe: 'false' }, { id: 'Inf3', name: 'autocastRange', type: 'unreal', netsafe: 'false' }, { id: 'Inf4', name: 'lifeRegenRate', type: 'unreal', netsafe: 'false' }],
    Aivs: [{ id: 'Ivs1', name: 'transitionTimeSeconds', type: 'unreal', netsafe: 'false' }],
    AInv: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Apak: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Aion: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Aihn: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Aien: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Aiun: [{ id: 'inv1', name: 'itemCapacity', type: 'int', netsafe: 'false' }, { id: 'inv2', name: 'dropItemsOnDeath', type: 'bool', netsafe: 'false' }, { id: 'inv3', name: 'canUseItems', type: 'bool', netsafe: 'false' }, { id: 'inv4', name: 'canGetItems', type: 'bool', netsafe: 'false' }, { id: 'inv5', name: 'canDropItems', type: 'bool', netsafe: 'false' }],
    Alit: [{ id: 'Lit1', name: 'graphicDelayundefined', type: 'unreal', netsafe: 'false' }, { id: 'Lit2', name: 'graphicDurationundefined', type: 'unreal', netsafe: 'false' }],
    Alsh: [{ id: 'Lsh1', name: 'damagePerSecondSecond', type: 'unreal', netsafe: 'false' }],
    ACls: [{ id: 'Lsh1', name: 'damagePerSecondSecond', type: 'unreal', netsafe: 'false' }],
    Aliq: [{ id: 'liq1', name: 'extraDamagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'liq2', name: 'movementSpeedReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'liq3', name: 'attackSpeedReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'liq4', name: 'repairsAllowed', type: 'bool', netsafe: 'false' }],
    Aloa: [{ id: 'Loa1', name: 'allowedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Sloa: [{ id: 'Loa1', name: 'allowedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Slo2: [{ id: 'Loa1', name: 'allowedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Slo3: [{ id: 'Loa1', name: 'allowedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Amdf: [{ id: 'Def1', name: 'damageTakenPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def2', name: 'damageDealtPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def3', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def4', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def5', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def6', name: 'chanceToDeflect', type: 'unreal', netsafe: 'false' }, { id: 'Def7', name: 'deflectDamageTakenPiercing', type: 'unreal', netsafe: 'false' }, { id: 'Def8', name: 'deflectDamageTakenSpells', type: 'unreal', netsafe: 'false' }],
    Amim: [{ id: 'mim1', name: 'magicDamageFactor', type: 'unreal', netsafe: 'false' }],
    ACmi: [{ id: 'mim1', name: 'magicDamageFactor', type: 'unreal', netsafe: 'false' }],
    ACm2: [{ id: 'mim1', name: 'magicDamageFactor', type: 'unreal', netsafe: 'false' }],
    ACm3: [{ id: 'mim1', name: 'magicDamageFactor', type: 'unreal', netsafe: 'false' }],
    Amls: [{ id: 'mls1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Ambt: [{ id: 'Mbt1', name: 'manaGained', type: 'unreal', netsafe: 'false' }, { id: 'Mbt2', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Mbt3', name: 'autocastRequirement', type: 'unreal', netsafe: 'false' }, { id: 'Mbt4', name: 'waterHeight', type: 'unreal', netsafe: 'false' }, { id: 'Mbt5', name: 'regenerateOnlyAtNight', type: 'bool', netsafe: 'false' }],
    Amb2: [{ id: 'Mbt1', name: 'manaGained', type: 'unreal', netsafe: 'false' }, { id: 'Mbt2', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Mbt3', name: 'autocastRequirement', type: 'unreal', netsafe: 'false' }, { id: 'Mbt4', name: 'waterHeight', type: 'unreal', netsafe: 'false' }, { id: 'Mbt5', name: 'regenerateOnlyAtNight', type: 'bool', netsafe: 'false' }],
    Amnb: [{ id: 'Emb1', name: 'maxManaDrained', type: 'unreal', netsafe: 'false' }, { id: 'Emb2', name: 'boltDelay', type: 'unreal', netsafe: 'false' }, { id: 'Emb3', name: 'boltLifetime', type: 'unreal', netsafe: 'false' }],
    Ambd: [{ id: 'Emb1', name: 'maxManaDrained', type: 'unreal', netsafe: 'false' }, { id: 'Emb2', name: 'boltDelay', type: 'unreal', netsafe: 'false' }, { id: 'Emb3', name: 'boltLifetime', type: 'unreal', netsafe: 'false' }],
    Ambb: [{ id: 'Emb1', name: 'maxManaDrained', type: 'unreal', netsafe: 'false' }, { id: 'Emb2', name: 'boltDelay', type: 'unreal', netsafe: 'false' }, { id: 'Emb3', name: 'boltLifetime', type: 'unreal', netsafe: 'false' }],
    Amfl: [{ id: 'mfl1', name: 'unitDamagePerManaPoint', type: 'unreal', netsafe: 'false' }, { id: 'mfl2', name: 'heroDamagePerManaPoint', type: 'unreal', netsafe: 'false' }, { id: 'mfl3', name: 'unitMaximumDamage', type: 'unreal', netsafe: 'false' }, { id: 'mfl4', name: 'heroMaximumDamage', type: 'unreal', netsafe: 'false' }, { id: 'mfl5', name: 'damageCooldown', type: 'unreal', netsafe: 'false' }, { id: 'mfl6', name: 'casterOnlySplash', type: 'bool', netsafe: 'false' }],
    ACmf: [{ id: 'Nms1', name: 'manaPerHitPoint', type: 'unreal', netsafe: 'false' }, { id: 'Nms2', name: 'damageAbsorbedPercent', type: 'unreal', netsafe: 'false' }],
    Amil: [{ id: 'Mil1', name: 'normalFormUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Mil2', name: 'alternateFormUnitundefined', type: 'unitCode', netsafe: 'false' }],
    ANmr: [{ id: 'Nmr1', name: 'manaDrainedPerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Amin: [{ id: 'Min1', name: 'activationDelay', type: 'unreal', netsafe: 'false' }, { id: 'Min2', name: 'invisibilityTransitionTime', type: 'unreal', netsafe: 'false' }],
    ACmo: [{ id: 'Esf1', name: 'damageDealt', type: 'unreal', netsafe: 'false' }, { id: 'Esf2', name: 'damageInterval', type: 'unreal', netsafe: 'false' }, { id: 'Esf3', name: 'buildingReductionundefined', type: 'unreal', netsafe: 'false' }],
    Aneu: [{ id: 'Neu1', name: 'activationRadius', type: 'unreal', netsafe: 'false' }, { id: 'Neu2', name: 'interactionType', type: 'interactionFlags', netsafe: 'false' }, { id: 'Neu3', name: 'showSelectUnitButton', type: 'bool', netsafe: 'false' }, { id: 'Neu4', name: 'showUnitIndicator', type: 'bool', netsafe: 'false' }],
    Ane2: [{ id: 'Neu1', name: 'activationRadius', type: 'unreal', netsafe: 'false' }, { id: 'Neu2', name: 'interactionType', type: 'interactionFlags', netsafe: 'false' }, { id: 'Neu3', name: 'showSelectUnitButton', type: 'bool', netsafe: 'false' }, { id: 'Neu4', name: 'showUnitIndicator', type: 'bool', netsafe: 'false' }],
    Andt: [{ id: 'Ndt1', name: 'goldCost', type: 'int', netsafe: 'false' }, { id: 'Ndt2', name: 'lumberCost', type: 'int', netsafe: 'false' }, { id: 'Ndt3', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    ANre: [{ id: 'Arm1', name: 'amountRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'Arm2', name: 'percentageundefined', type: 'bool', netsafe: 'false' }],
    ACnr: [{ id: 'Oar1', name: 'amountOfHitPointsRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'Oar2', name: 'percentage', type: 'bool', netsafe: 'false' }],
    AAns: [{ id: 'Ndt1', name: 'goldCost', type: 'int', netsafe: 'false' }, { id: 'Ndt2', name: 'lumberCost', type: 'int', netsafe: 'false' }, { id: 'Ans5', name: 'baseOrderID', type: 'orderString', netsafe: 'false' }, { id: 'Ans6', name: 'chargeOwningPlayer', type: 'bool', netsafe: 'false' }],
    Afak: [{ id: 'fak1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'fak2', name: 'mediumDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'fak3', name: 'smallDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'fak4', name: 'fullDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'fak5', name: 'halfDamageRadiusundefined', type: 'unreal', netsafe: 'false' }],
    ANak: [{ id: 'fak1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'fak2', name: 'mediumDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'fak3', name: 'smallDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'fak4', name: 'fullDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'fak5', name: 'halfDamageRadiusundefined', type: 'unreal', netsafe: 'false' }],
    ANpa: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }, { id: 'ipmu', name: 'unitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Npa5', name: 'summonedUnitCountundefined', type: 'int', netsafe: 'false' }, { id: 'Npa6', name: 'summonedUnitDuration', type: 'unreal', netsafe: 'false' }],
    ACpa: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }, { id: 'ipmu', name: 'unitTypeundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Npa5', name: 'summonedUnitCountundefined', type: 'int', netsafe: 'false' }, { id: 'Npa6', name: 'summonedUnitDuration', type: 'unreal', netsafe: 'false' }],
    ANpi: [{ id: 'Eim1', name: 'damagePerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Eim2', name: 'manaDrainedPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Eim3', name: 'bufferManaRequired', type: 'unreal', netsafe: 'false' }],
    Apmf: [{ id: 'Eim1', name: 'damagePerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Eim2', name: 'manaDrainedPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Eim3', name: 'bufferManaRequired', type: 'unreal', netsafe: 'false' }],
    Apig: [{ id: 'Eim1', name: 'damagePerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Eim2', name: 'manaDrainedPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Eim3', name: 'bufferManaRequired', type: 'unreal', netsafe: 'false' }],
    Apiv: [{ id: 'Gho1', name: 'autoAcquireAttackTargets', type: 'bool', netsafe: 'false' }],
    Apsh: [{ id: 'Hbn1', name: 'movementSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbn2', name: 'attackSpeedReductionPercentundefined', type: 'unreal', netsafe: 'false' }],
    Aphx: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Apxf: [{ id: 'pxf1', name: 'initialDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'pxf2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Apts: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    Apoi: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }],
    Aply: [{ id: 'Ply1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ply2', name: 'morphUnitsGround', type: 'unitList', netsafe: 'false' }, { id: 'Ply3', name: 'morphUnitsAir', type: 'unitList', netsafe: 'false' }, { id: 'Ply4', name: 'morphUnitsAmphibious', type: 'unitList', netsafe: 'false' }, { id: 'Ply5', name: 'morphUnitsWater', type: 'unitList', netsafe: 'false' }],
    ACpy: [{ id: 'Ply1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ply2', name: 'morphUnitsGround', type: 'unitList', netsafe: 'false' }, { id: 'Ply3', name: 'morphUnitsAir', type: 'unitList', netsafe: 'false' }, { id: 'Ply4', name: 'morphUnitsAmphibious', type: 'unitList', netsafe: 'false' }, { id: 'Ply5', name: 'morphUnitsWater', type: 'unitList', netsafe: 'false' }],
    Apos: [{ id: 'Pos1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }],
    ACps: [{ id: 'Pos1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }],
    Aps2: [{ id: 'Pos1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Pos2', name: 'damageAmplification', type: 'unreal', netsafe: 'false' }, { id: 'Pos3', name: 'targetIsInvulnerable', type: 'bool', netsafe: 'false' }, { id: 'Pos4', name: 'targetIsMagicImmune', type: 'bool', netsafe: 'false' }],
    Awar: [{ id: 'War1', name: 'chanceToStompPercent', type: 'unreal', netsafe: 'false' }, { id: 'War2', name: 'damageDealtundefined', type: 'unreal', netsafe: 'false' }, { id: 'War3', name: 'fullDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'War4', name: 'halfDamageRadius', type: 'unreal', netsafe: 'false' }],
    ACpv: [{ id: 'War1', name: 'chanceToStompPercent', type: 'unreal', netsafe: 'false' }, { id: 'War2', name: 'damageDealtundefined', type: 'unreal', netsafe: 'false' }, { id: 'War3', name: 'fullDamageRadiusundefined', type: 'unreal', netsafe: 'false' }, { id: 'War4', name: 'halfDamageRadius', type: 'unreal', netsafe: 'false' }],
    Aprg: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    Apg2: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    ACpu: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    ACrf: [{ id: 'Hbz1', name: 'numberOfWaves', type: 'int', netsafe: 'false' }, { id: 'Hbz2', name: 'damage', type: 'unreal', netsafe: 'false' }, { id: 'Hbz3', name: 'numberOfShards', type: 'int', netsafe: 'false' }, { id: 'Hbz4', name: 'buildingReduction', type: 'unreal', netsafe: 'false' }, { id: 'Hbz5', name: 'damagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Hbz6', name: 'maximumDamagePerWave', type: 'unreal', netsafe: 'false' }],
    ACrg: [{ id: 'Hbz1', name: 'numberOfWaves', type: 'int', netsafe: 'false' }, { id: 'Hbz2', name: 'damage', type: 'unreal', netsafe: 'false' }, { id: 'Hbz3', name: 'numberOfShards', type: 'int', netsafe: 'false' }, { id: 'Hbz4', name: 'buildingReduction', type: 'unreal', netsafe: 'false' }, { id: 'Hbz5', name: 'damagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Hbz6', name: 'maximumDamagePerWave', type: 'unreal', netsafe: 'false' }],
    Arai: [{ id: 'Rai1', name: 'unitsSummonedTypeOne', type: 'int', netsafe: 'false' }, { id: 'Rai2', name: 'unitsSummonedTypeTwo', type: 'int', netsafe: 'false' }, { id: 'Rai3', name: 'unitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'Rai4', name: 'unitTypeTwo', type: 'unitCode', netsafe: 'false' }, { id: 'Raiu', name: 'unitTypeForLimitCheck', type: 'unitCode', netsafe: 'false' }],
    ACrd: [{ id: 'Rai1', name: 'unitsSummonedTypeOne', type: 'int', netsafe: 'false' }, { id: 'Rai2', name: 'unitsSummonedTypeTwo', type: 'int', netsafe: 'false' }, { id: 'Rai3', name: 'unitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'Rai4', name: 'unitTypeTwo', type: 'unitCode', netsafe: 'false' }, { id: 'Raiu', name: 'unitTypeForLimitCheck', type: 'unitCode', netsafe: 'false' }],
    Arav: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Amrf: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    ACrn: [{ id: 'Ore1', name: 'reincarnationDelay', type: 'unreal', netsafe: 'false' }],
    ANr2: [{ id: 'Ore1', name: 'reincarnationDelay', type: 'unreal', netsafe: 'false' }],
    Arej: [{ id: 'Rej1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Rej2', name: 'manaPointsGained', type: 'unreal', netsafe: 'false' }, { id: 'Rej3', name: 'allowWhenFull', type: 'fullFlags', netsafe: 'false' }, { id: 'Rej4', name: 'noTargetRequired', type: 'bool', netsafe: 'false' }],
    ACrj: [{ id: 'Rej1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Rej2', name: 'manaPointsGained', type: 'unreal', netsafe: 'false' }, { id: 'Rej3', name: 'allowWhenFull', type: 'fullFlags', netsafe: 'false' }, { id: 'Rej4', name: 'noTargetRequired', type: 'bool', netsafe: 'false' }],
    ACr2: [{ id: 'Rej1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Rej2', name: 'manaPointsGained', type: 'unreal', netsafe: 'false' }, { id: 'Rej3', name: 'allowWhenFull', type: 'fullFlags', netsafe: 'false' }, { id: 'Rej4', name: 'noTargetRequired', type: 'bool', netsafe: 'false' }],
    Aren: [{ id: 'Rep1', name: 'repairCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep2', name: 'repairTimeRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep3', name: 'powerbuildCost', type: 'unreal', netsafe: 'false' }, { id: 'Rep4', name: 'powerbuildRate', type: 'unreal', netsafe: 'false' }, { id: 'Rep5', name: 'navalRangeBonus', type: 'unreal', netsafe: 'false' }],
    Ahrp: [{ id: 'Rep1', name: 'repairCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep2', name: 'repairTimeRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep3', name: 'powerbuildCost', type: 'unreal', netsafe: 'false' }, { id: 'Rep4', name: 'powerbuildRate', type: 'unreal', netsafe: 'false' }, { id: 'Rep5', name: 'navalRangeBonus', type: 'unreal', netsafe: 'false' }],
    Arep: [{ id: 'Rep1', name: 'repairCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep2', name: 'repairTimeRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep3', name: 'powerbuildCost', type: 'unreal', netsafe: 'false' }, { id: 'Rep4', name: 'powerbuildRate', type: 'unreal', netsafe: 'false' }, { id: 'Rep5', name: 'navalRangeBonus', type: 'unreal', netsafe: 'false' }],
    Arpb: [{ id: 'Rej1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Rej2', name: 'manaPointsGained', type: 'unreal', netsafe: 'false' }, { id: 'Rpb3', name: 'minimumLifeRequired', type: 'unreal', netsafe: 'false' }, { id: 'Rpb4', name: 'minimumManaRequired', type: 'unreal', netsafe: 'false' }, { id: 'Rpb5', name: 'maximumUnitsChargedToCaster', type: 'int', netsafe: 'false' }, { id: 'Rpb6', name: 'maximumUnitsAffected', type: 'int', netsafe: 'false' }],
    Arpl: [{ id: 'Rej1', name: 'hitPointsGainedundefined', type: 'unreal', netsafe: 'false' }, { id: 'Rpb3', name: 'minimumLifeRequired', type: 'unreal', netsafe: 'false' }, { id: 'Rpb5', name: 'maximumUnitsChargedToCaster', type: 'int', netsafe: 'false' }, { id: 'Rpb6', name: 'maximumUnitsAffected', type: 'int', netsafe: 'false' }],
    Arpm: [{ id: 'Rej2', name: 'manaPointsGained', type: 'unreal', netsafe: 'false' }, { id: 'Rpb4', name: 'minimumManaRequired', type: 'unreal', netsafe: 'false' }, { id: 'Rpb5', name: 'maximumUnitsChargedToCaster', type: 'int', netsafe: 'false' }, { id: 'Rpb6', name: 'maximumUnitsAffected', type: 'int', netsafe: 'false' }],
    Arst: [{ id: 'Rep1', name: 'repairCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep2', name: 'repairTimeRatio', type: 'unreal', netsafe: 'false' }, { id: 'Rep3', name: 'powerbuildCost', type: 'unreal', netsafe: 'false' }, { id: 'Rep4', name: 'powerbuildRate', type: 'unreal', netsafe: 'false' }, { id: 'Rep5', name: 'navalRangeBonus', type: 'unreal', netsafe: 'false' }],
    Argd: [{ id: 'Rtn1', name: 'acceptsGold', type: 'bool', netsafe: 'false' }, { id: 'Rtn2', name: 'acceptsLumber', type: 'bool', netsafe: 'false' }],
    Argl: [{ id: 'Rtn1', name: 'acceptsGold', type: 'bool', netsafe: 'false' }, { id: 'Rtn2', name: 'acceptsLumber', type: 'bool', netsafe: 'false' }],
    Arlm: [{ id: 'Rtn1', name: 'acceptsGold', type: 'bool', netsafe: 'false' }, { id: 'Rtn2', name: 'acceptsLumber', type: 'bool', netsafe: 'false' }],
    AHta: [{ id: 'Idet', name: 'detectionRadiusundefined', type: 'detectionType', netsafe: 'false' }],
    Aroa: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    Ara2: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    ACr1: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    ACro: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    Aroc: [{ id: 'Efk1', name: 'damagePerTargetundefined', type: 'unreal', netsafe: 'false' }, { id: 'Efk2', name: 'maximumTotalDamage', type: 'unreal', netsafe: 'false' }, { id: 'Efk3', name: 'maximumNumberOfTargets', type: 'int', netsafe: 'false' }],
    Aro1: [{ id: 'Roo1', name: 'rootedWeapons', type: 'attackBits', netsafe: 'false' }, { id: 'Roo2', name: 'uprootedWeapons', type: 'attackBits', netsafe: 'false' }, { id: 'Roo3', name: 'rootedTurning', type: 'bool', netsafe: 'false' }, { id: 'Roo4', name: 'uprootedDefenseType', type: 'defenseTypeInt', netsafe: 'false' }],
    Aro2: [{ id: 'Roo1', name: 'rootedWeapons', type: 'attackBits', netsafe: 'false' }, { id: 'Roo2', name: 'uprootedWeapons', type: 'attackBits', netsafe: 'false' }, { id: 'Roo3', name: 'rootedTurning', type: 'bool', netsafe: 'false' }, { id: 'Roo4', name: 'uprootedDefenseType', type: 'defenseTypeInt', netsafe: 'false' }],
    Asal: [{ id: 'Sal1', name: 'salvageCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Sal2', name: 'accumulationStep', type: 'int', netsafe: 'false' }],
    ACsa: [{ id: 'Hfa1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }],
    Asds: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Sds1', name: 'buildingDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Sds6', name: 'explodesOnDeath', type: 'bool', netsafe: 'false' }],
    Asdg: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Sds1', name: 'buildingDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Sds6', name: 'explodesOnDeath', type: 'bool', netsafe: 'false' }],
    Asd2: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Sds1', name: 'buildingDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Sds6', name: 'explodesOnDeath', type: 'bool', netsafe: 'false' }],
    Asd3: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Sds1', name: 'buildingDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Sds6', name: 'explodesOnDeath', type: 'bool', netsafe: 'false' }],
    Aesn: [{ id: 'Esn1', name: 'inFlightSightRadius', type: 'unreal', netsafe: 'false' }, { id: 'Esn2', name: 'hoveringSightRadius', type: 'unreal', netsafe: 'false' }, { id: 'Esn3', name: 'hoveringHeight', type: 'unreal', netsafe: 'false' }, { id: 'Esn4', name: 'numberOfOwls', type: 'int', netsafe: 'false' }, { id: 'Esn5', name: 'durationOfOwls', type: 'unreal', netsafe: 'false' }],
    Aesr: [{ id: 'Esn1', name: 'inFlightSightRadius', type: 'unreal', netsafe: 'false' }, { id: 'Esn2', name: 'hoveringSightRadius', type: 'unreal', netsafe: 'false' }, { id: 'Esn3', name: 'hoveringHeight', type: 'unreal', netsafe: 'false' }, { id: 'Esn4', name: 'numberOfOwls', type: 'int', netsafe: 'false' }, { id: 'Esn5', name: 'durationOfOwls', type: 'unreal', netsafe: 'false' }],
    Aeye: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    ACtn: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    Ashm: [{ id: 'Shm1', name: 'fadeDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm2', name: 'dayOrNightDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm3', name: 'actionDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm4', name: 'permanentCloak', type: 'bool', netsafe: 'false' }],
    AIhm: [{ id: 'Shm1', name: 'fadeDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm2', name: 'dayOrNightDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm3', name: 'actionDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm4', name: 'permanentCloak', type: 'bool', netsafe: 'false' }],
    Sshm: [{ id: 'Shm1', name: 'fadeDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm2', name: 'dayOrNightDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm3', name: 'actionDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm4', name: 'permanentCloak', type: 'bool', netsafe: 'false' }],
    Ahid: [{ id: 'Shm1', name: 'fadeDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm2', name: 'dayOrNightDuration', type: 'unreal', netsafe: 'false' }, { id: 'Shm3', name: 'actionDuration', type: 'unreal', netsafe: 'false' }],
    ACss: [{ id: 'Esh1', name: 'decayingDamage', type: 'unreal', netsafe: 'false' }, { id: 'Esh2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Esh3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Esh4', name: 'decayPower', type: 'unreal', netsafe: 'false' }, { id: 'Esh5', name: 'initialDamage', type: 'unreal', netsafe: 'false' }],
    ACsh: [{ id: 'Osh1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh2', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh3', name: 'distanceundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    ACst: [{ id: 'Osh1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh2', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh3', name: 'distanceundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    ANsh: [{ id: 'Osh1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh2', name: 'maximumDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh3', name: 'distanceundefined', type: 'unreal', netsafe: 'false' }, { id: 'Osh4', name: 'finalAreaundefined', type: 'unreal', netsafe: 'false' }],
    ACsi: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    ACsm: [{ id: 'Ndr1', name: 'hitPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr2', name: 'manaPointsDrained', type: 'unreal', netsafe: 'false' }, { id: 'Ndr3', name: 'drainIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Ndr4', name: 'lifeTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr5', name: 'manaTransferredPerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Ndr6', name: 'bonusLifeFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr7', name: 'bonusLifeDecay', type: 'unreal', netsafe: 'false' }, { id: 'Ndr8', name: 'bonusManaFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ndr9', name: 'bonusManaDecay', type: 'unreal', netsafe: 'false' }],
    ACsl: [{ id: 'Usl1', name: 'stunDuration', type: 'unreal', netsafe: 'false' }],
    Asla: [{ id: 'sla1', name: 'sleepOnce', type: 'bool', netsafe: 'false' }, { id: 'sla2', name: 'allowOnAnyPlayerSlot', type: 'bool', netsafe: 'false' }],
    Aslo: [{ id: 'Slo1', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo2', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo3', name: 'alwaysAutocastundefined', type: 'bool', netsafe: 'false' }],
    ACsw: [{ id: 'Slo1', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo2', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo3', name: 'alwaysAutocastundefined', type: 'bool', netsafe: 'false' }],
    Aspo: [{ id: 'Spo1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo4', name: 'stackingTypeundefined', type: 'stackFlags', netsafe: 'false' }],
    Asod: [{ id: 'Sod1', name: 'numberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Sod2', name: 'unitType', type: 'unitCode', netsafe: 'false' }],
    Assp: [{ id: 'Sod1', name: 'numberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Sod2', name: 'unitType', type: 'unitCode', netsafe: 'false' }],
    Aspd: [{ id: 'Sod1', name: 'numberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Sod2', name: 'unitType', type: 'unitCode', netsafe: 'false' }],
    Aspy: [{ id: 'Sod1', name: 'numberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Sod2', name: 'unitType', type: 'unitCode', netsafe: 'false' }],
    Aspt: [{ id: 'Sod1', name: 'numberOfUnits', type: 'int', netsafe: 'false' }, { id: 'Sod2', name: 'unitType', type: 'unitCode', netsafe: 'false' }],
    Aspa: [{ id: 'Spa1', name: 'spiderCapacity', type: 'int', netsafe: 'false' }],
    Aspl: [{ id: 'spl1', name: 'distributedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'spl2', name: 'maximumNumberOfTargetsundefined', type: 'int', netsafe: 'false' }],
    Asta: [{ id: 'Sta1', name: 'activationDelayundefined', type: 'unreal', netsafe: 'false' }, { id: 'Sta2', name: 'detectionRadius', type: 'unreal', netsafe: 'false' }, { id: 'Sta3', name: 'detonationRadius', type: 'unreal', netsafe: 'false' }, { id: 'Sta4', name: 'stunDurationundefined', type: 'unreal', netsafe: 'false' }, { id: 'Sta5', name: 'detonationDelay', type: 'unreal', netsafe: 'false' }, { id: 'Stau', name: 'wardUnitType', type: 'unitCode', netsafe: 'false' }],
    Astn: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Eme4', name: 'landingDelayTime', type: 'unreal', netsafe: 'false' }, { id: 'ave5', name: 'lifeRegenerationRatePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Asb1: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Asb2: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Asb3: [{ id: 'Eme1', name: 'normalFormUnit', type: 'unitCode', netsafe: 'false' }, { id: 'Eme2', name: 'morphingFlags', type: 'morphFlags', netsafe: 'false' }, { id: 'Eme3', name: 'altitudeAdjustmentDuration', type: 'unreal', netsafe: 'false' }, { id: 'Emeu', name: 'alternateFormUnit', type: 'unitCode', netsafe: 'false' }],
    Aslp: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    ACwe: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    Atau: [{ id: 'Tau1', name: 'preferHostilesundefined', type: 'int', netsafe: 'false' }, { id: 'Tau2', name: 'preferFriendliesundefined', type: 'int', netsafe: 'false' }, { id: 'Tau3', name: 'maxUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Tau4', name: 'numberOfPulses', type: 'int', netsafe: 'false' }, { id: 'Tau5', name: 'intervalBetweenPulses', type: 'unreal', netsafe: 'false' }],
    ANta: [{ id: 'Tau1', name: 'preferHostilesundefined', type: 'int', netsafe: 'false' }, { id: 'Tau2', name: 'preferFriendliesundefined', type: 'int', netsafe: 'false' }, { id: 'Tau3', name: 'maxUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Tau4', name: 'numberOfPulses', type: 'int', netsafe: 'false' }, { id: 'Tau5', name: 'intervalBetweenPulses', type: 'unreal', netsafe: 'false' }],
    ANth: [{ id: 'Uts1', name: 'returnedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts2', name: 'receivedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts3', name: 'defenseBonusundefined', type: 'unreal', netsafe: 'false' }],
    ANt2: [{ id: 'Uts1', name: 'returnedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts2', name: 'receivedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'Uts3', name: 'defenseBonusundefined', type: 'unreal', netsafe: 'false' }],
    ACah: [{ id: 'Eah1', name: 'damageDealtToAttackers', type: 'unreal', netsafe: 'false' }, { id: 'Eah2', name: 'damageIsPercentReceived', type: 'bool', netsafe: 'false' }],
    ACtb: [{ id: 'Ctb1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    ACtc: [{ id: 'Ctc1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ctc2', name: 'extraDamageToTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ctc3', name: 'movementSpeedReduction', type: 'unreal', netsafe: 'false' }, { id: 'Ctc4', name: 'attackSpeedReduction', type: 'unreal', netsafe: 'false' }],
    ACt2: [{ id: 'Ctc1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ctc2', name: 'extraDamageToTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ctc3', name: 'movementSpeedReduction', type: 'unreal', netsafe: 'false' }, { id: 'Ctc4', name: 'attackSpeedReduction', type: 'unreal', netsafe: 'false' }],
    Atdg: [{ id: 'Tdg1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Tdg2', name: 'mediumDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Tdg3', name: 'mediumDamagePerSecond', type: 'unreal', netsafe: 'false' }, { id: 'Tdg4', name: 'smallDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Tdg5', name: 'smallDamagePerSecond', type: 'unreal', netsafe: 'false' }],
    Atsp: [{ id: 'Tsp1', name: 'airTimeSecondsundefined', type: 'unreal', netsafe: 'false' }, { id: 'Tsp2', name: 'minimumHitIntervalSeconds', type: 'unreal', netsafe: 'false' }],
    ACua: [{ id: 'Uau1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uau2', name: 'lifeRegenerationIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Uau3', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    Auhf: [{ id: 'Uhf1', name: 'attackSpeedBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Uhf2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Suhf: [{ id: 'Uhf1', name: 'attackSpeedBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Uhf2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    ACuf: [{ id: 'Uhf1', name: 'attackSpeedBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Uhf2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    Auuf: [{ id: 'Uuf1', name: 'requiresUndeadTargetundefined', type: 'bool', netsafe: 'false' }, { id: 'Uuf2', name: 'leaveTargetAliveundefined', type: 'bool', netsafe: 'false' }, { id: 'Uuf3', name: 'targetsAllowedForBuff', type: 'targetList', netsafe: 'false' }],
    Auco: [{ id: 'Dda1', name: 'fullDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda2', name: 'fullDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Dda3', name: 'partialDamageRadius', type: 'unreal', netsafe: 'false' }, { id: 'Dda4', name: 'partialDamageAmount', type: 'unreal', netsafe: 'false' }, { id: 'Uco5', name: 'maxDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uco6', name: 'moveSpeedBonus', type: 'unreal', netsafe: 'false' }],
    Auns: [{ id: 'Sal1', name: 'salvageCostRatio', type: 'unreal', netsafe: 'false' }, { id: 'Sal2', name: 'accumulationStep', type: 'int', netsafe: 'false' }],
    SCva: [{ id: 'Ivam', name: 'lifeStolenPerAttack', type: 'unreal', netsafe: 'false' }],
    ACvp: [{ id: 'Uav1', name: 'attackDamageStolenPercent', type: 'unreal', netsafe: 'false' }],
    Avng: [{ id: 'Rai1', name: 'unitsSummonedTypeOne', type: 'int', netsafe: 'false' }, { id: 'Rai2', name: 'unitsSummonedTypeTwo', type: 'int', netsafe: 'false' }, { id: 'Rai3', name: 'unitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'Rai4', name: 'unitTypeTwo', type: 'unitCode', netsafe: 'false' }, { id: 'Raiu', name: 'unitTypeForLimitCheck', type: 'unitCode', netsafe: 'false' }, { id: 'Ucb5', name: 'maxUnitsSummoned', type: 'int', netsafe: 'false' }, { id: 'Ucb6', name: 'killOnCasterDeath', type: 'bool', netsafe: 'false' }],
    Awrs: [{ id: 'Wrs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Wrs2', name: 'terrainDeformationAmplitude', type: 'unreal', netsafe: 'false' }, { id: 'Wrs3', name: 'terrainDeformationDurationMs', type: 'int', netsafe: 'false' }],
    Awrg: [{ id: 'Wrs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Wrs2', name: 'terrainDeformationAmplitude', type: 'unreal', netsafe: 'false' }, { id: 'Wrs3', name: 'terrainDeformationDurationMs', type: 'int', netsafe: 'false' }],
    Awrh: [{ id: 'Wrs1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Wrs2', name: 'terrainDeformationAmplitude', type: 'unreal', netsafe: 'false' }, { id: 'Wrs3', name: 'terrainDeformationDurationMs', type: 'int', netsafe: 'false' }],
    ANwk: [{ id: 'Owk1', name: 'transitionTime', type: 'unreal', netsafe: 'false' }, { id: 'Owk2', name: 'movementSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Owk3', name: 'backstabDamage', type: 'unreal', netsafe: 'false' }, { id: 'Owk4', name: 'backstabDamageEnabled', type: 'bool', netsafe: 'false' }, { id: 'Owk5', name: 'startCooldownWhenDecloak', type: 'bool', netsafe: 'false' }],
    Awha: [{ id: 'Wha1', name: 'lumberPerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Wha2', name: 'intervalsBeforeChangingTrees', type: 'int', netsafe: 'false' }, { id: 'Wha3', name: 'artAttachmentHeight', type: 'unreal', netsafe: 'false' }],
    Awh2: [{ id: 'Wha1', name: 'lumberPerInterval', type: 'unreal', netsafe: 'false' }, { id: 'Wha2', name: 'intervalsBeforeChangingTrees', type: 'int', netsafe: 'false' }, { id: 'Wha3', name: 'artAttachmentHeight', type: 'unreal', netsafe: 'false' }],
    Aven: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }],
    ACvs: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }],
    Awrp: [{ id: 'Wrp1', name: 'teleportAreaWidth', type: 'unreal', netsafe: 'false' }, { id: 'Wrp2', name: 'teleportAreaHeight', type: 'unreal', netsafe: 'false' }],
    Aweb: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    ACwb: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    AIa1: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIa3: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIa4: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIa5: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIa6: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIx5: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIx1: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIx2: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIs1: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIs2: [{ id: 'Isx1', name: 'attackSpeedIncrease', type: 'unreal', netsafe: 'false' }],
    AIs3: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIs4: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIs5: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIs6: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIi1: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIi3: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIi4: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIi5: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIi6: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIxm: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIam: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIim: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIsm: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIgm: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AItm: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AInm: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIaa: [{ id: 'Iaa1', name: 'attackModification', type: 'int', netsafe: 'false' }],
    AIat: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIt6: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIt9: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItc: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItf: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItg: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIth: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIti: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItj: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItk: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItl: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AItn: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIva: [{ id: 'Ivam', name: 'lifeStolenPerAttack', type: 'unreal', netsafe: 'false' }],
    AIbk: [{ id: 'Ebl1', name: 'maximumRange', type: 'unreal', netsafe: 'false' }, { id: 'Ebl2', name: 'minimumRange', type: 'unreal', netsafe: 'false' }],
    AIbl: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbg: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbt: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbb: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbf: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbr: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbs: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIbh: [{ id: 'Ibl1', name: 'unitCreatedPerPlayerRace', type: 'unitList', netsafe: 'false' }],
    AIcy: [{ id: 'cyc1', name: 'canBeDispelled', type: 'bool', netsafe: 'false' }],
    AId1: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AId2: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AId3: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AId4: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AId5: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AIgf: [{ id: 'Igl1', name: 'upgradeLevels', type: 'int', netsafe: 'false' }, { id: 'Iglu', name: 'upgradeType', type: 'upgradeCode', netsafe: 'false' }],
    AIgu: [{ id: 'Igl1', name: 'upgradeLevels', type: 'int', netsafe: 'false' }, { id: 'Iglu', name: 'upgradeType', type: 'upgradeCode', netsafe: 'false' }],
    AIem: [{ id: 'Ixpg', name: 'experienceGained', type: 'int', netsafe: 'false' }],
    AIe2: [{ id: 'Ixpg', name: 'experienceGained', type: 'int', netsafe: 'false' }],
    AIfd: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIff: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIfr: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIfu: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIfh: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIfs: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIir: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIuw: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIfa: [{ id: 'Ifa1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }, { id: 'Idel', name: 'delayForTargetEffect', type: 'unreal', netsafe: 'false' }],
    AIin: [{ id: 'Uin1', name: 'damageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uin2', name: 'duration', type: 'unreal', netsafe: 'false' }, { id: 'Uin3', name: 'impactDelay', type: 'unreal', netsafe: 'false' }, { id: 'Uin4', name: 'summonedUnit', type: 'unitCode', netsafe: 'false' }],
    AIlm: [{ id: 'Ilev', name: 'levelsGained', type: 'int', netsafe: 'false' }],
    AIlp: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    AIlf: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AIl1: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AIl2: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AIms: [{ id: 'Imvb', name: 'movementSpeedBonus', type: 'int', netsafe: 'false' }],
    ANbs: [{ id: 'Nba1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nba2', name: 'numberOfSummonedUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Nba3', name: 'summonedUnitDurationSeconds', type: 'unreal', netsafe: 'false' }, { id: 'Nbau', name: 'summonedUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AIdf: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }, { id: 'Iob2', name: 'chanceToHitUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob3', name: 'chanceToHitHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob4', name: 'chanceToHitSummonsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iobu', name: 'effectAbility', type: 'abilCode', netsafe: 'false' }],
    AIcb: [{ id: 'Idic', name: 'damageBonusDice', type: 'int', netsafe: 'false' }, { id: 'Iarp', name: 'armorPenalty', type: 'int', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIdn: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIfb: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIgd: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIzb: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIob: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIll: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }, { id: 'Iob2', name: 'chanceToHitUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob3', name: 'chanceToHitHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob4', name: 'chanceToHitSummonsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iobu', name: 'effectAbility', type: 'abilCode', netsafe: 'false' }],
    AIlb: [{ id: 'Idic', name: 'damageBonusDice', type: 'int', netsafe: 'false' }, { id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIsb: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }, { id: 'Iob2', name: 'chanceToHitUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob3', name: 'chanceToHitHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob4', name: 'chanceToHitSummonsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iobu', name: 'effectAbility', type: 'abilCode', netsafe: 'false' }],
    AIpb: [{ id: 'Idic', name: 'damageBonusDice', type: 'int', netsafe: 'false' }, { id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    Apo2: [{ id: 'Poi1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Poi4', name: 'stackingType', type: 'stackFlags', netsafe: 'false' }],
    AInd: [{ id: 'Uan3', name: 'inheritUpgrades', type: 'bool', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }, { id: 'Cad1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }],
    Arel: [{ id: 'Ihpr', name: 'hitPointsRegeneratedPerSecond', type: 'int', netsafe: 'false' }],
    Arll: [{ id: 'Ihpr', name: 'hitPointsRegeneratedPerSecond', type: 'int', netsafe: 'false' }],
    AIsi: [{ id: 'Isib', name: 'sightRangeBonus', type: 'int', netsafe: 'false' }],
    AIos: [{ id: 'Slo1', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo2', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Slo3', name: 'alwaysAutocastundefined', type: 'bool', netsafe: 'false' }],
    AIcf: [{ id: 'Icfd', name: 'damagePerDuration', type: 'int', netsafe: 'false' }, { id: 'Icfm', name: 'manaUsedPerSecond', type: 'int', netsafe: 'false' }, { id: 'Icfx', name: 'extraManaRequired', type: 'int', netsafe: 'false' }],
    AIco: [{ id: 'Icre', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }],
    AIda: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihp2', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }, { id: 'Imp2', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIdb: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihp2', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }, { id: 'Imp2', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIta: [{ id: 'Idet', name: 'detectionRadiusundefined', type: 'detectionType', netsafe: 'false' }],
    AIdi: [{ id: 'Idim', name: 'manaLossPerUnit', type: 'int', netsafe: 'false' }, { id: 'Idid', name: 'damageToSummonedUnits', type: 'int', netsafe: 'false' }],
    AIds: [{ id: 'Idim', name: 'manaLossPerUnit', type: 'int', netsafe: 'false' }, { id: 'Idid', name: 'damageToSummonedUnits', type: 'int', netsafe: 'false' }],
    APdi: [{ id: 'Idim', name: 'manaLossPerUnit', type: 'int', netsafe: 'false' }, { id: 'Idid', name: 'damageToSummonedUnits', type: 'int', netsafe: 'false' }],
    AIh1: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIh2: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIh3: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIha: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIhb: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    APh1: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    APh2: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    APh3: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIhw: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AIsw: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AIil: [{ id: 'Iild', name: 'damageDealtPercentOfNormal', type: 'unreal', netsafe: 'false' }, { id: 'Iilw', name: 'damageReceivedMultiplier', type: 'unreal', netsafe: 'false' }],
    AIvu: [{ id: 'AIvu', name: 'isMagicImmune', type: 'bool', netsafe: 'false' }],
    AIvl: [{ id: 'AIvu', name: 'isMagicImmune', type: 'bool', netsafe: 'false' }],
    AIvg: [{ id: 'AIvu', name: 'isMagicImmune', type: 'bool', netsafe: 'false' }],
    AIm1: [{ id: 'Impg', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIm2: [{ id: 'Impg', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AImr: [{ id: 'Impg', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    APmr: [{ id: 'Impg', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    APmg: [{ id: 'Impg', name: 'manaPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIpm: [{ id: 'ipmu', name: 'unitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AIrt: [{ id: 'Irec', name: 'maximumNumberOfUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Itp2', name: 'useTeleportClusteringundefined', type: 'bool', netsafe: 'false' }],
    AIrm: [{ id: 'Imrp', name: 'manaRegenerationBonusAsFractionOfNormal', type: 'unreal', netsafe: 'false' }],
    AIrn: [{ id: 'Imrp', name: 'manaRegenerationBonusAsFractionOfNormal', type: 'unreal', netsafe: 'false' }],
    AIrc: [{ id: 'Ircd', name: 'delayAfterDeathSeconds', type: 'int', netsafe: 'false' }, { id: 'irc2', name: 'restoredLife', type: 'int', netsafe: 'false' }, { id: 'irc3', name: 'restoredMana1ForCurrent', type: 'int', netsafe: 'false' }],
    AIre: [{ id: 'Ihps', name: 'hitPointsRestored', type: 'int', netsafe: 'false' }, { id: 'Imps', name: 'manaPointsRestored', type: 'int', netsafe: 'false' }],
    AIra: [{ id: 'Ihps', name: 'hitPointsRestored', type: 'int', netsafe: 'false' }, { id: 'Imps', name: 'manaPointsRestored', type: 'int', netsafe: 'false' }],
    APra: [{ id: 'Ihps', name: 'hitPointsRestored', type: 'int', netsafe: 'false' }, { id: 'Imps', name: 'manaPointsRestored', type: 'int', netsafe: 'false' }],
    AIsp: [{ id: 'Ispi', name: 'movementSpeedIncrease', type: 'unreal', netsafe: 'false' }],
    AIsa: [{ id: 'Ispi', name: 'movementSpeedIncrease', type: 'unreal', netsafe: 'false' }],
    APsa: [{ id: 'Ispi', name: 'movementSpeedIncrease', type: 'unreal', netsafe: 'false' }],
    AItp: [{ id: 'Itpm', name: 'maximumNumberOfUnitsundefined', type: 'int', netsafe: 'false' }, { id: 'Itp2', name: 'useTeleportClusteringundefined', type: 'bool', netsafe: 'false' }],
    AIad: [{ id: 'Had1', name: 'armorBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Had2', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    AIcd: [{ id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }, { id: 'Cac1', name: 'attackDamageIncreaseundefined', type: 'unreal', netsafe: 'false' }],
    AIwd: [{ id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }, { id: 'Akb1', name: 'attackDamageIncrease', type: 'unreal', netsafe: 'false' }, { id: 'Akb2', name: 'playChannelAnimation', type: 'bool', netsafe: 'false' }],
    AIba: [{ id: 'Hab1', name: 'manaRegenerationIncrease', type: 'unreal', netsafe: 'false' }, { id: 'Hab2', name: 'percentBonus', type: 'bool', netsafe: 'false' }],
    AIav: [{ id: 'Uav1', name: 'attackDamageStolenPercent', type: 'unreal', netsafe: 'false' }],
    AIar: [{ id: 'Ear1', name: 'damageBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Ear2', name: 'meleeBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear3', name: 'rangedBonus', type: 'bool', netsafe: 'false' }, { id: 'Ear4', name: 'flatBonus', type: 'bool', netsafe: 'false' }],
    AIae: [{ id: 'Oae1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Oae2', name: 'attackSpeedIncreasePercent', type: 'unreal', netsafe: 'false' }],
    AIau: [{ id: 'Uau1', name: 'movementSpeedIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Uau2', name: 'lifeRegenerationIncreasePercent', type: 'unreal', netsafe: 'false' }, { id: 'Uau3', name: 'percentBonusundefined', type: 'bool', netsafe: 'false' }],
    AIls: [{ id: 'Lsh1', name: 'damagePerSecondSecond', type: 'unreal', netsafe: 'false' }, { id: 'Idps', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    AIxs: [{ id: 'Ams3', name: 'shieldLife', type: 'int', netsafe: 'false' }, { id: 'Ams4', name: 'manaLoss', type: 'int', netsafe: 'false' }, { id: 'Ixs1', name: 'damageToSummonedUnitsundefined', type: 'unreal', netsafe: 'false' }, { id: 'Ixs2', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }],
    AIan: [{ id: 'Uan3', name: 'inheritUpgrades', type: 'bool', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }, { id: 'Cad1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }],
    AIrs: [{ id: 'Hre1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    AIrr: [{ id: 'Roa1', name: 'damageIncreasePercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Roa2', name: 'defenseIncreaseundefined', type: 'int', netsafe: 'false' }, { id: 'Roa3', name: 'lifeRegenerationRate', type: 'unreal', netsafe: 'false' }, { id: 'Roa4', name: 'manaRegen', type: 'unreal', netsafe: 'false' }, { id: 'Roa5', name: 'preferHostiles', type: 'bool', netsafe: 'false' }, { id: 'Roa6', name: 'preferFriendlies', type: 'bool', netsafe: 'false' }, { id: 'Roa7', name: 'maxUnits', type: 'int', netsafe: 'false' }],
    AIev: [{ id: 'Eev1', name: 'chanceToEvadeundefined', type: 'unreal', netsafe: 'false' }],
    AImx: [{ id: 'mim1', name: 'magicDamageFactor', type: 'unreal', netsafe: 'false' }],
    AImh: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AImb: [{ id: 'Iman', name: 'maxManaGained', type: 'int', netsafe: 'false' }],
    AIbm: [{ id: 'Iman', name: 'maxManaGained', type: 'int', netsafe: 'false' }],
    AIsx: [{ id: 'Isx1', name: 'attackSpeedIncrease', type: 'unreal', netsafe: 'false' }],
    AIrl: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIpr: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIsl: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIpl: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp1: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp2: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp3: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp4: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp5: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIp6: [{ id: 'irl1', name: 'lifeRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl2', name: 'manaRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'irl3', name: 'allowWhenFullundefined', type: 'fullFlags', netsafe: 'false' }, { id: 'irl4', name: 'noTargetRequiredundefined', type: 'bool', netsafe: 'false' }, { id: 'irl5', name: 'dispelOnAttack', type: 'bool', netsafe: 'false' }],
    AIgo: [{ id: 'Igol', name: 'goldGiven', type: 'int', netsafe: 'false' }],
    AIlu: [{ id: 'Ilum', name: 'lumberGiven', type: 'int', netsafe: 'false' }],
    AIrv: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    AIdc: [{ id: 'idc1', name: 'manaLossPerUnitundefined', type: 'unreal', netsafe: 'false' }, { id: 'idc2', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'idc3', name: 'maximumDispelledUnits', type: 'int', netsafe: 'false' }],
    AIwb: [{ id: 'Ens1', name: 'airUnitLowerDuration', type: 'unreal', netsafe: 'false' }, { id: 'Ens2', name: 'airUnitHeight', type: 'unreal', netsafe: 'false' }, { id: 'Ens3', name: 'meleeAttackRange', type: 'unreal', netsafe: 'false' }],
    AImo: [{ id: 'imo1', name: 'numberOfLures', type: 'int', netsafe: 'false' }, { id: 'imo2', name: 'activationDelayundefined', type: 'unreal', netsafe: 'false' }, { id: 'imo3', name: 'lureIntervalSeconds', type: 'unreal', netsafe: 'false' }, { id: 'imou', name: 'lureUnitType', type: 'unitCode', netsafe: 'false' }],
    AIct: [{ id: 'ict1', name: 'newTimeOfDayHour', type: 'int', netsafe: 'false' }, { id: 'ict2', name: 'newTimeOfDayMinute', type: 'int', netsafe: 'false' }],
    AIsr: [{ id: 'isr1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'isr2', name: 'damageReductionundefined', type: 'unreal', netsafe: 'false' }],
    Ablp: [{ id: 'Bli1', name: 'expansionAmount', type: 'unreal', netsafe: 'false' }, { id: 'Bli2', name: 'createsBlight', type: 'bool', netsafe: 'false' }],
    AIpv: [{ id: 'ipv1', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'ipv2', name: 'lifeStealAmount', type: 'unreal', netsafe: 'false' }, { id: 'ipv3', name: 'amountIsRawValue', type: 'bool', netsafe: 'false' }],
    Aste: [{ id: 'Udp1', name: 'lifeConvertedToMana', type: 'unreal', netsafe: 'false' }, { id: 'Udp2', name: 'lifeConvertedToLife', type: 'unreal', netsafe: 'false' }, { id: 'Udp3', name: 'manaConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp4', name: 'lifeConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }],
    Amec: [{ id: 'mec1', name: 'numberOfUnitsCreatedundefined', type: 'int', netsafe: 'false' }],
    ANpr: [{ id: 'Npr1', name: 'buildingTypesAllowed', type: 'pickFlags', netsafe: 'false' }],
    ANsa: [{ id: 'Nsa1', name: 'buildingTypesAllowedundefined', type: 'pickFlags', netsafe: 'false' }, { id: 'Nsa2', name: 'heroRegenerationDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nsa3', name: 'unitRegenerationDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nsa4', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Nsa5', name: 'hitPointsPerSecondundefined', type: 'unreal', netsafe: 'false' }],
    ANse: [{ id: 'Nse1', name: 'shieldCooldownTime', type: 'unreal', netsafe: 'false' }],
    AImt: [{ id: 'Hmt1', name: 'numberOfUnitsTeleported', type: 'int', netsafe: 'false' }, { id: 'Hmt2', name: 'castingDelay', type: 'unreal', netsafe: 'false' }, { id: 'Hmt3', name: 'useTeleportClustering', type: 'bool', netsafe: 'false' }],
    Aspb: [{ id: 'spb1', name: 'spellList', type: 'abilityList', netsafe: 'false' }, { id: 'spb2', name: 'sharedSpellCooldown', type: 'bool', netsafe: 'false' }, { id: 'spb3', name: 'minimumSpells', type: 'int', netsafe: 'false' }, { id: 'spb4', name: 'maximumSpells', type: 'int', netsafe: 'false' }, { id: 'spb5', name: 'baseOrderIDundefined', type: 'orderString', netsafe: 'false' }],
    AIrd: [{ id: 'Rai1', name: 'unitsSummonedTypeOne', type: 'int', netsafe: 'false' }, { id: 'Rai2', name: 'unitsSummonedTypeTwo', type: 'int', netsafe: 'false' }, { id: 'Rai3', name: 'unitTypeOne', type: 'unitCode', netsafe: 'false' }, { id: 'Rai4', name: 'unitTypeTwo', type: 'unitCode', netsafe: 'false' }, { id: 'Raiu', name: 'unitTypeForLimitCheck', type: 'unitCode', netsafe: 'false' }],
    AItb: [{ id: 'Det1', name: 'detectionTypeundefined', type: 'detectionType', netsafe: 'false' }],
    AIdv: [{ id: 'Hds1', name: 'canDeactivate', type: 'bool', netsafe: 'false' }],
    AIse: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    AIpg: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    AIps: [{ id: 'Prg1', name: 'movementUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg2', name: 'attackUpdateFrequencyundefined', type: 'int', netsafe: 'false' }, { id: 'Prg3', name: 'summonedUnitDamageundefined', type: 'unreal', netsafe: 'false' }, { id: 'Prg4', name: 'unitPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg5', name: 'heroPauseDuration', type: 'unreal', netsafe: 'false' }, { id: 'Prg6', name: 'manaLossundefined', type: 'int', netsafe: 'false' }],
    AIfg: [{ id: 'Nsi1', name: 'attacksPrevented', type: 'silenceFlags', netsafe: 'false' }, { id: 'Nsi2', name: 'chanceToMissPercent', type: 'unreal', netsafe: 'false' }, { id: 'Nsi3', name: 'movementSpeedModifier', type: 'unreal', netsafe: 'false' }, { id: 'Nsi4', name: 'attackSpeedModifier', type: 'unreal', netsafe: 'false' }],
    APrl: [{ id: 'Hre1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    APrr: [{ id: 'Hre1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    Aspp: [{ id: 'spl1', name: 'distributedDamageFactor', type: 'unreal', netsafe: 'false' }, { id: 'spl2', name: 'maximumNumberOfTargetsundefined', type: 'int', netsafe: 'false' }],
    AUds: [{ id: 'Hmt3', name: 'useTeleportClustering', type: 'bool', netsafe: 'false' }, { id: 'Uds1', name: 'maximumUnits', type: 'int', netsafe: 'false' }, { id: 'Uds2', name: 'castingDelaySeconds', type: 'unreal', netsafe: 'false' }],
    APwt: [{ id: 'hwdu', name: 'wardUnitTypeundefined', type: 'unitCode', netsafe: 'false' }],
    AIuf: [{ id: 'Uhf1', name: 'attackSpeedBonusPercent', type: 'unreal', netsafe: 'false' }, { id: 'Uhf2', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }],
    AId0: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AIcm: [{ id: 'Nch1', name: 'maximumCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Cmg2', name: 'manaPerSummonedHitpoint', type: 'unreal', netsafe: 'false' }, { id: 'Cmg3', name: 'chargeForCurrentLife', type: 'unreal', netsafe: 'false' }],
    AImz: [{ id: 'Iman', name: 'maxManaGained', type: 'int', netsafe: 'false' }],
    AIfz: [{ id: 'Nfd1', name: 'graphicDelay', type: 'unreal', netsafe: 'false' }, { id: 'Nfd2', name: 'graphicDuration', type: 'unreal', netsafe: 'false' }, { id: 'Nfd3', name: 'damageundefined', type: 'unreal', netsafe: 'false' }],
    AIdp: [{ id: 'Udp1', name: 'lifeConvertedToMana', type: 'unreal', netsafe: 'false' }, { id: 'Udp2', name: 'lifeConvertedToLife', type: 'unreal', netsafe: 'false' }, { id: 'Udp3', name: 'manaConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp4', name: 'lifeConversionAsPercent', type: 'bool', netsafe: 'false' }, { id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }],
    AImv: [{ id: 'Iman', name: 'maxManaGained', type: 'int', netsafe: 'false' }],
    AIpx: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AIdd: [{ id: 'Def1', name: 'damageTakenPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def2', name: 'damageDealtPercentundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def3', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def4', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def5', name: 'magicDamageReductionundefined', type: 'unreal', netsafe: 'false' }, { id: 'Def6', name: 'chanceToDeflect', type: 'unreal', netsafe: 'false' }, { id: 'Def7', name: 'deflectDamageTakenPiercing', type: 'unreal', netsafe: 'false' }, { id: 'Def8', name: 'deflectDamageTakenSpells', type: 'unreal', netsafe: 'false' }],
    AId8: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AId7: [{ id: 'Idef', name: 'defenseBonusundefined', type: 'int', netsafe: 'false' }],
    AIlz: [{ id: 'Ilif', name: 'maxLifeGained', type: 'int', netsafe: 'false' }],
    AIhx: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIaz: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIrx: [{ id: 'Hre1', name: 'numberOfCorpsesRaisedundefined', type: 'int', netsafe: 'false' }, { id: 'Hre2', name: 'raisedUnitsAreInvulnerable', type: 'bool', netsafe: 'false' }],
    AIbx: [{ id: 'Hbh1', name: 'chanceToBash', type: 'unreal', netsafe: 'false' }, { id: 'Hbh2', name: 'damageMultiplierundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh3', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Hbh4', name: 'chanceToMiss', type: 'unreal', netsafe: 'false' }, { id: 'Hbh5', name: 'neverMissundefined', type: 'bool', netsafe: 'false' }],
    AItx: [{ id: 'Iatt', name: 'attackBonus', type: 'int', netsafe: 'false' }],
    AIwm: [{ id: 'Hwe1', name: 'summonedUnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Hwe2', name: 'summonedUnitCount', type: 'int', netsafe: 'false' }],
    AIsh: [{ id: 'Osf1', name: 'summonedUnitundefined', type: 'unitCode', netsafe: 'false' }, { id: 'Osf2', name: 'numberOfSummonedUnits', type: 'int', netsafe: 'false' }],
    AI2m: [{ id: 'Iman', name: 'maxManaGained', type: 'int', netsafe: 'false' }],
    AIgx: [{ id: 'Oar1', name: 'amountOfHitPointsRegenerated', type: 'unreal', netsafe: 'false' }, { id: 'Oar2', name: 'percentage', type: 'bool', netsafe: 'false' }],
    AIhl: [{ id: 'Hhb1', name: 'amountHealedOrDamagedundefined', type: 'unreal', netsafe: 'false' }],
    AIsz: [{ id: 'Spo1', name: 'damagePerSecondundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo2', name: 'movementSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo3', name: 'attackSpeedFactorundefined', type: 'unreal', netsafe: 'false' }, { id: 'Spo4', name: 'stackingTypeundefined', type: 'stackFlags', netsafe: 'false' }],
    AIpz: [{ id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }],
    AIfw: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIft: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }],
    AIlx: [{ id: 'Idam', name: 'damageBonusundefined', type: 'unreal', netsafe: 'false' }, { id: 'Iob5', name: 'enabledAttackIndex', type: 'int', netsafe: 'false' }, { id: 'Iob2', name: 'chanceToHitUnitsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob3', name: 'chanceToHitHerosPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iob4', name: 'chanceToHitSummonsPercent', type: 'unreal', netsafe: 'false' }, { id: 'Iobu', name: 'effectAbility', type: 'abilCode', netsafe: 'false' }],
    AIcs: [{ id: 'Ocr1', name: 'chanceToCriticalStrike', type: 'unreal', netsafe: 'false' }, { id: 'Ocr2', name: 'damageMultiplier', type: 'unreal', netsafe: 'false' }, { id: 'Ocr3', name: 'damageBonus', type: 'unreal', netsafe: 'false' }, { id: 'Ocr4', name: 'chanceToEvade', type: 'unreal', netsafe: 'false' }, { id: 'Ocr5', name: 'neverMiss', type: 'bool', netsafe: 'false' }, { id: 'Ocr6', name: 'excludeItemDamage', type: 'bool', netsafe: 'false' }],
    AIcl: [{ id: 'Ocl1', name: 'damagePerTarget', type: 'unreal', netsafe: 'false' }, { id: 'Ocl2', name: 'numberOfTargetsHit', type: 'int', netsafe: 'false' }, { id: 'Ocl3', name: 'damageReductionPerTarget', type: 'unreal', netsafe: 'false' }],
    AIx3: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIx4: [{ id: 'Iagi', name: 'agilityBonus', type: 'int', netsafe: 'false' }, { id: 'Iint', name: 'intelligenceBonus', type: 'int', netsafe: 'false' }, { id: 'Istr', name: 'strengthBonusundefined', type: 'int', netsafe: 'false' }, { id: 'Ihid', name: 'hideButton', type: 'bool', netsafe: 'false' }],
    AIxk: [{ id: 'bsk1', name: 'movementSpeedIncreaseundefined', type: 'unreal', netsafe: 'false' }, { id: 'bsk2', name: 'attackSpeedIncreaseundefined', type: 'unreal', netsafe: 'false' }, { id: 'bsk3', name: 'damageTakenIncrease', type: 'unreal', netsafe: 'false' }],
    AIdg: [{ id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }, { id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }, { id: 'Idg1', name: 'requiresUndeadTarget', type: 'bool', netsafe: 'false' }, { id: 'Idg2', name: 'affectsInitialTarget', type: 'bool', netsafe: 'false' }, { id: 'Idg3', name: 'targetsAllowedForHeal', type: 'targetList', netsafe: 'false' }],
    AIg2: [{ id: 'Udp5', name: 'leaveTargetAlive', type: 'bool', netsafe: 'false' }, { id: 'Ihpg', name: 'hitPointsGainedundefined', type: 'int', netsafe: 'false' }, { id: 'Idg1', name: 'requiresUndeadTarget', type: 'bool', netsafe: 'false' }, { id: 'Idg2', name: 'affectsInitialTarget', type: 'bool', netsafe: 'false' }, { id: 'Idg3', name: 'targetsAllowedForHeal', type: 'targetList', netsafe: 'false' }],
    AIf2: [{ id: 'Iofr', name: 'healingMultiplier', type: 'unreal', netsafe: 'false' }],
    Ahsb: [{ id: 'Hsb1', name: 'bonusDamageFlat', type: 'unreal', netsafe: 'false' }, { id: 'Hsb2', name: 'bonusDamagePercent', type: 'unreal', netsafe: 'false' }, { id: 'Hsb3', name: 'defenseTypeAffected', type: 'defenseTypeInt', netsafe: 'false' }],
    AIut: [{ id: 'Isn1', name: 'summon1Amount', type: 'int', netsafe: 'false' }, { id: 'Ist1', name: 'summon1UnitType', type: 'unitCode', netsafe: 'false' }, { id: 'Isn2', name: 'summon2Amount', type: 'int', netsafe: 'false' }, { id: 'Ist2', name: 'summon2UnitType', type: 'unitCode', netsafe: 'false' }],
    AIts: [{ id: 'Ntm1', name: 'goldCostFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ntm2', name: 'lumberCostFactor', type: 'unreal', netsafe: 'false' }, { id: 'Ntm3', name: 'maxCreepLevelundefined', type: 'int', netsafe: 'false' }, { id: 'Ntm4', name: 'allowBounty', type: 'bool', netsafe: 'false' }],
    Aatp: [{ id: 'Aat1', name: 'initiallyEnabled', type: 'bool', netsafe: 'false' }],
};
var Abilities;
(function (Abilities) {
    Abilities["AOEDamageUponDeathBigMine"] = "Amnz";
    Abilities["AOEDamageUponDeathGoblinMine"] = "Amnx";
    Abilities["AOEDamageUponDeathSapper"] = "Adda";
    Abilities["AbolishMagic"] = "Aadm";
    Abilities["AbolishMagic1"] = "Andm";
    Abilities["AbolishMagicNeutralHostile"] = "ACdm";
    Abilities["AbolishMagicNeutralHostileSecondPosition"] = "ACd2";
    Abilities["AbsorbMana"] = "Aabs";
    Abilities["AcidBomb"] = "ANab";
    Abilities["AerialShackles"] = "Amls";
    Abilities["Alarm"] = "Aalr";
    Abilities["AncestralSpirit"] = "Aast";
    Abilities["AnimalWarTrainingIcon"] = "Ahan";
    Abilities["AnimateDead"] = "AUan";
    Abilities["AnimateDeadNeutralHostileNeutralHostile"] = "ACad";
    Abilities["AntiMagicShell"] = "Aams";
    Abilities["AntiMagicShellMagicResistance"] = "Aam2";
    Abilities["AntiMagicShellNeutralHostile"] = "ACam";
    Abilities["Attack"] = "Aatk";
    Abilities["AttributeBonus"] = "Aamk";
    Abilities["AuraOfBlight"] = "Aabr";
    Abilities["Avatar"] = "AHav";
    Abilities["AvatarNeutral"] = "ANav";
    Abilities["Banish"] = "AHbn";
    Abilities["BanishNeutralHostile"] = "ACbn";
    Abilities["Barrage"] = "Aroc";
    Abilities["Bash"] = "AHbh";
    Abilities["BashItem"] = "AIbx";
    Abilities["BashNeutralHostile1"] = "ACbh";
    Abilities["BashNeutralHostile2"] = "ANbh";
    Abilities["BattleRoar"] = "ANbr";
    Abilities["BattleStations"] = "Abtl";
    Abilities["BattleStationsFelOrcBurrow"] = "Sbtl";
    Abilities["BearForm"] = "Abrf";
    Abilities["Berserk"] = "Absk";
    Abilities["BerserkItem"] = "AIxk";
    Abilities["BerserkerUpgrade"] = "Sbsk";
    Abilities["BerserkerUpgradeIcon"] = "Aobk";
    Abilities["BigBadVoodoo"] = "AOvd";
    Abilities["BlackArrow"] = "ANba";
    Abilities["BlackArrowNeutralHostile"] = "ACbk";
    Abilities["Bladestorm"] = "AOww";
    Abilities["BlightDispelLarge"] = "Abdl";
    Abilities["BlightDispelSmall"] = "Abds";
    Abilities["BlightGrowthLarge"] = "Abgl";
    Abilities["BlightGrowthSmall"] = "Abgs";
    Abilities["BlightPlacement"] = "Ablp";
    Abilities["BlightedGoldMineAbility"] = "Abgm";
    Abilities["Blink"] = "AEbl";
    Abilities["BlinkItemVersion"] = "AIbk";
    Abilities["BlinkNeutral"] = "ANbl";
    Abilities["Blizzard"] = "AHbz";
    Abilities["BlizzardNeutralHostile"] = "ACbz";
    Abilities["Bloodlust"] = "Ablo";
    Abilities["BloodlustNeutralHostile1"] = "ACbl";
    Abilities["BloodlustNeutralHostile2"] = "ACbb";
    Abilities["BreathOfFire"] = "ANbf";
    Abilities["BreathOfFireChen"] = "ANcf";
    Abilities["BreathOfFireNeutralHostile"] = "ACbc";
    Abilities["BreathOfFrost"] = "ACbf";
    Abilities["BrillianceAura"] = "AHab";
    Abilities["BrillianceAuraNeutralHostile"] = "ACba";
    Abilities["BruteStrengthIcon"] = "Aobs";
    Abilities["BuildHuman"] = "AHbu";
    Abilities["BuildNaga"] = "AGbu";
    Abilities["BuildNeutral"] = "ANbu";
    Abilities["BuildNightElf"] = "AEbu";
    Abilities["BuildOrc"] = "AObu";
    Abilities["BuildTinyAltarOfKings"] = "AIbh";
    Abilities["BuildTinyBarracks"] = "AIbs";
    Abilities["BuildTinyBlacksmith"] = "AIbb";
    Abilities["BuildTinyCastle"] = "AIbl";
    Abilities["BuildTinyFarm"] = "AIbf";
    Abilities["BuildTinyGreatHall"] = "AIbg";
    Abilities["BuildTinyLumberMill"] = "AIbr";
    Abilities["BuildTinyScoutTower"] = "AIbt";
    Abilities["BuildUndead"] = "AUbu";
    Abilities["BuildingDamageAuraTornado"] = "Atdg";
    Abilities["BundleOfLumber"] = "AIlu";
    Abilities["BurningOil"] = "Abof";
    Abilities["BurrowCryptFiend"] = "Abur";
    Abilities["BurrowDetectionFliersObsolete"] = "Abdt";
    Abilities["BurrowNeutralHostile"] = "Abu5";
    Abilities["BurrowScarabLvl2"] = "Abu2";
    Abilities["BurrowScarabLvl3"] = "Abu3";
    Abilities["CallToArmsPeasant"] = "Amil";
    Abilities["CallToArmsTownHall"] = "Amic";
    Abilities["Cannibalize"] = "Acan";
    Abilities["Cannibalize1"] = "Acn2";
    Abilities["CannibalizeNeutralHostile"] = "ACcn";
    Abilities["CargoHoldDeath"] = "Achd";
    Abilities["CargoHoldGoblinZeppelin"] = "Sch3";
    Abilities["CargoHoldMeatWagon"] = "Sch2";
    Abilities["CargoHoldOrcBurrow"] = "Abun";
    Abilities["CargoHoldShip"] = "Sch5";
    Abilities["CargoHoldTank"] = "Sch4";
    Abilities["CarrionBeetles"] = "AUcb";
    Abilities["CarrionSwarm"] = "AUcs";
    Abilities["CarrionSwarmNeutralHostile"] = "ACca";
    Abilities["ChainLightning"] = "AOcl";
    Abilities["ChainLightningItem"] = "AIcl";
    Abilities["ChainLightningNeutralHostile"] = "ACcl";
    Abilities["ChangeTimeOfDay"] = "AIct";
    Abilities["Channel"] = "ANcl";
    Abilities["ChaosCargoLoad"] = "Achl";
    Abilities["ChargeGoldAndLumber"] = "AAns";
    Abilities["Charm"] = "ANch";
    Abilities["CharmNeutralHostile"] = "ACch";
    Abilities["ChemicalRage"] = "ANcr";
    Abilities["ChestOfGold"] = "AIgo";
    Abilities["ClarityPotion"] = "AIpr";
    Abilities["CleavingAttack"] = "ANca";
    Abilities["CleavingAttackNeutralHostile"] = "ACce";
    Abilities["Cloud"] = "Aclf";
    Abilities["CloudOfFog"] = "AIfg";
    Abilities["ClusterRockets"] = "ANcs";
    Abilities["ClusterRocketsUpgradeLevel1"] = "ANc1";
    Abilities["ClusterRocketsUpgradeLevel2"] = "ANc2";
    Abilities["ClusterRocketsUpgradeLevel3"] = "ANc3";
    Abilities["ColdArrows"] = "AHca";
    Abilities["ColdArrowsNeutralHostile"] = "ACcw";
    Abilities["CommandAura"] = "ACac";
    Abilities["ControlMagic"] = "Acmg";
    Abilities["ControlMagicItem"] = "AIcm";
    Abilities["CorporealForm"] = "Acpf";
    Abilities["CorrosiveBreath"] = "Acor";
    Abilities["CreateCorpse"] = "Agyd";
    Abilities["Cripple"] = "Acri";
    Abilities["CrippleNeutralHostile"] = "ACcr";
    Abilities["CrippleWarlock"] = "Scri";
    Abilities["CriticalStrike"] = "AOcr";
    Abilities["CriticalStrikeItem"] = "AIcs";
    Abilities["CriticalStrikeNeutralHostile"] = "ACct";
    Abilities["CrowForm"] = "Amrf";
    Abilities["CrushingWave"] = "ACcv";
    Abilities["CrushingWaveLesser"] = "ACc2";
    Abilities["CrushingWaveLesser1"] = "ACc3";
    Abilities["Curse"] = "Acrs";
    Abilities["CurseNeutralHostile"] = "ACcs";
    Abilities["Cyclone"] = "Acyc";
    Abilities["Cyclone1"] = "Acny";
    Abilities["CycloneCenarius"] = "SCc1";
    Abilities["CycloneItem"] = "AIcy";
    Abilities["CycloneNeutralHostile"] = "ACcy";
    Abilities["DarkConversionMalganis"] = "ANdc";
    Abilities["DarkConversionMalganisFast"] = "SNdc";
    Abilities["DarkPortalArchimonde"] = "ANdp";
    Abilities["DarkRitual"] = "AUdr";
    Abilities["DarkSummoning"] = "AUds";
    Abilities["DeathAndDecay"] = "AUdd";
    Abilities["DeathAndDecayNeutralHostile"] = "SNdd";
    Abilities["DeathCoil"] = "AUdc";
    Abilities["DeathCoilNeutralHostile"] = "ACdc";
    Abilities["DeathPact"] = "AUdp";
    Abilities["DeathPactItem"] = "AIdp";
    Abilities["Defend"] = "Adef";
    Abilities["DefendPassiveDefenseItem"] = "AIdd";
    Abilities["Demolish"] = "ANde";
    Abilities["DemolishUpgradeLevel1"] = "ANd1";
    Abilities["DemolishUpgradeLevel2"] = "ANd2";
    Abilities["DemolishUpgradeLevel3"] = "ANd3";
    Abilities["DestroyerForm"] = "Aave";
    Abilities["DetectorSentryWard"] = "Adt1";
    Abilities["Detonate"] = "Adtn";
    Abilities["DevotionAura"] = "AHad";
    Abilities["DevotionAuraNeutralHostile"] = "ACav";
    Abilities["Devour"] = "Adev";
    Abilities["DevourCargo"] = "Advc";
    Abilities["DevourMagic"] = "Advm";
    Abilities["DevourMagicNeutralHostile"] = "ACde";
    Abilities["DevourNeutralHostile"] = "ACdv";
    Abilities["DiseaseCloudAbomination"] = "Aap1";
    Abilities["DiseaseCloudAnimateDead"] = "Aap5";
    Abilities["DiseaseCloudMeatWagon"] = "Apts";
    Abilities["DiseaseCloudNeutralHostile"] = "Aap3";
    Abilities["DiseaseCloudNeutralHostileNoDamage"] = "Aap4";
    Abilities["DiseaseCloudPlagueWard"] = "Aap2";
    Abilities["Disenchant"] = "Adcn";
    Abilities["DisenchantOld"] = "Adch";
    Abilities["Dismount"] = "Adec";
    Abilities["DispelMagic"] = "Adis";
    Abilities["DispelMagicNeutralHostile"] = "Adsm";
    Abilities["DivineShield"] = "AHds";
    Abilities["DivineShieldNeutralHostile"] = "ACds";
    Abilities["Doom"] = "ANdo";
    Abilities["DropCorpse"] = "Amed";
    Abilities["DropPilot"] = "Atdp";
    Abilities["DrunkenBrawler"] = "ANdb";
    Abilities["DrunkenBrawlerChen"] = "Acdb";
    Abilities["DrunkenHaze"] = "ANdh";
    Abilities["DrunkenHazeChen"] = "Acdh";
    Abilities["DustOfAppearance"] = "AItb";
    Abilities["Earthquake"] = "AOeq";
    Abilities["EarthquakeNeutralHostile"] = "SNeq";
    Abilities["EatTree"] = "Aeat";
    Abilities["ElunesGrace"] = "Aegr";
    Abilities["EnduranceAura"] = "AOae";
    Abilities["EnduranceAuraCairne"] = "AOr2";
    Abilities["EnduranceAuraNeutralHostile"] = "SCae";
    Abilities["EngineeringUpgrade"] = "ANeg";
    Abilities["Ensnare"] = "ANen";
    Abilities["Ensnare1"] = "Aens";
    Abilities["EnsnareNeutralHostile"] = "ACen";
    Abilities["EntangleGoldMine"] = "Aent";
    Abilities["EntangledGoldMineAbility"] = "Aegm";
    Abilities["EntanglingRoots"] = "AEer";
    Abilities["EntanglingRootsNeutralHostile1"] = "Aenr";
    Abilities["EntanglingRootsNeutralHostile2"] = "Aenw";
    Abilities["EnvenomedSpears"] = "Aven";
    Abilities["EnvenomedWeaponsNeutralHostile"] = "ACvs";
    Abilities["EssenceOfBlight"] = "Arpl";
    Abilities["Ethereal"] = "Aetl";
    Abilities["EtherealForm"] = "Aetf";
    Abilities["Evasion"] = "AEev";
    Abilities["EvasionItem"] = "AIev";
    Abilities["EvasionNeutralHostile"] = "ACev";
    Abilities["EvasionNeutralHostile100Percent"] = "ACes";
    Abilities["ExhumeCorpses"] = "Aexh";
    Abilities["Factory"] = "ANfy";
    Abilities["FaerieFire"] = "Afae";
    Abilities["FaerieFireMorph"] = "Afa2";
    Abilities["FaerieFireNeutralHostile"] = "ACff";
    Abilities["FanOfKnives"] = "AEfk";
    Abilities["FarSight"] = "AOfs";
    Abilities["Feedback"] = "Afbb";
    Abilities["FeedbackArcaneTower"] = "Afbt";
    Abilities["FeedbackSpellbreaker"] = "Afbk";
    Abilities["FeralSpirit"] = "AOsf";
    Abilities["FeralSpirit1"] = "ACs7";
    Abilities["FeralSpiritNeutralHostile"] = "ACsf";
    Abilities["FeralSpiritNeutralHostilePig"] = "ACs9";
    Abilities["FingerOfDeathArchimonde"] = "ANfd";
    Abilities["FingerOfDeathItem"] = "AIfz";
    Abilities["FingerOfDeathNeutralHostile"] = "Afod";
    Abilities["FingerOfPainNeutralHostile"] = "ACfd";
    Abilities["FingerOfPainNeutralHostile1"] = "ACf3";
    Abilities["FireboltNeutralHostile"] = "ANfb";
    Abilities["FireboltNeutralHostile1"] = "ACfb";
    Abilities["FireboltWarlock"] = "Awfb";
    Abilities["FlakCannons"] = "Aflk";
    Abilities["FlameStrike"] = "AHfs";
    Abilities["FlameStrikeNeutralHostile"] = "ACfs";
    Abilities["FlameStrikeNeutralHostile2"] = "ANfs";
    Abilities["Flare"] = "Afla";
    Abilities["FlareGun"] = "AIfa";
    Abilities["FlyingMachineBombs"] = "Agyb";
    Abilities["ForceOfNature"] = "AEfn";
    Abilities["ForceOfNatureNeutralHostile"] = "ACfr";
    Abilities["ForkedLightning"] = "ANfl";
    Abilities["ForkedLightningNeutralHostile"] = "ACfl";
    Abilities["FragmentationShards"] = "Afsh";
    Abilities["FreezingBreath"] = "Afrz";
    Abilities["Frenzy"] = "Afzy";
    Abilities["FrostArmor"] = "AUfa";
    Abilities["FrostArmorAutocast"] = "AUfu";
    Abilities["FrostArmorAutocast1"] = "ACfu";
    Abilities["FrostArmorAutocastNeutralHostile"] = "ACf2";
    Abilities["FrostArmorNeutralHostile"] = "ACfa";
    Abilities["FrostArrows"] = "ANfa";
    Abilities["FrostAttack"] = "Afra";
    Abilities["FrostAttack1"] = "Afr2";
    Abilities["FrostAttackNewHasIcon"] = "Afrc";
    Abilities["FrostBolt"] = "ACcb";
    Abilities["FrostBreath"] = "Afrb";
    Abilities["FrostNova"] = "AUfn";
    Abilities["FrostNovaNeutralHostile"] = "ACfn";
    Abilities["GatherAcolyteGold"] = "Aaha";
    Abilities["GatherWispGoldAndLumber"] = "Awha";
    Abilities["GatherWispGoldAndLumberAncientSpirits"] = "Awh2";
    Abilities["GenericItemRejuvEffect"] = "AIp1";
    Abilities["GenericItemRejuvEffectII"] = "AIp2";
    Abilities["GenericItemRejuvEffectIII"] = "AIp3";
    Abilities["GenericItemRejuvEffectIV"] = "AIp4";
    Abilities["GenericItemRejuvEffectV"] = "AIp5";
    Abilities["GenericItemRejuvEffectVI"] = "AIp6";
    Abilities["GetCorpse"] = "Amel";
    Abilities["Ghost"] = "Agho";
    Abilities["GhostVisible"] = "Aeth";
    Abilities["GhoulFrenzyIcon"] = "Augf";
    Abilities["GlyphOfFortification"] = "AIgf";
    Abilities["GlyphOfFortification1"] = "AIgu";
    Abilities["GoldMineAbility"] = "Agld";
    Abilities["GreaterRuneResurrection"] = "APrr";
    Abilities["HardenedSkin"] = "Assk";
    Abilities["HardenedSkin1"] = "Ansk";
    Abilities["HarvestArchimondesGhoulsLumber"] = "Ahr2";
    Abilities["HarvestGhoulsLumber"] = "Ahrl";
    Abilities["HarvestGoblinShreddersLumber"] = "Ahr3";
    Abilities["HarvestGoldAndLumber"] = "Ahar";
    Abilities["HarvestNeutralGoldAndLumber"] = "ANha";
    Abilities["Heal"] = "Ahea";
    Abilities["HealNeutralHostile1"] = "Anhe";
    Abilities["HealNeutralHostile2"] = "Anh1";
    Abilities["HealNeutralHostile3"] = "Anh2";
    Abilities["HealingSalve"] = "AIrl";
    Abilities["HealingSpray"] = "ANhs";
    Abilities["HealingWardAuraHealingWard"] = "Aoar";
    Abilities["HealingWardItem"] = "AIhw";
    Abilities["HealingWardNeutralHostile"] = "AChw";
    Abilities["HealingWardWitchDoctor"] = "Ahwd";
    Abilities["HealingWave"] = "AOhw";
    Abilities["HealingWaveNeutralHostile"] = "AChv";
    Abilities["HealingWaveRokhan"] = "ANhw";
    Abilities["Hero"] = "AHer";
    Abilities["Hex"] = "AOhx";
    Abilities["HexNeutralHostile"] = "AChx";
    Abilities["HexRokhan"] = "ANhx";
    Abilities["HolyLight"] = "AHhb";
    Abilities["HolyLightItem"] = "AIhl";
    Abilities["HowlOfTerror"] = "ANht";
    Abilities["HowlOfTerrorNeutralHostile"] = "Acht";
    Abilities["HurlBoulder"] = "ACtb";
    Abilities["Immolation"] = "AEim";
    Abilities["ImmolationNeutralHostile"] = "ACim";
    Abilities["Impale"] = "AUim";
    Abilities["ImpaleNeutralHostile"] = "ACmp";
    Abilities["ImprovedBowsIcon"] = "Aeib";
    Abilities["ImprovedLumberHarvestingImprovedLumberHarvestingAdvancedLumberHarvestingIcon"] = "Ahlh";
    Abilities["Incinerate"] = "ANic";
    Abilities["IncinerateArrow"] = "ANia";
    Abilities["InciteUnholyFrenzy"] = "Auuf";
    Abilities["Inferno"] = "AUin";
    Abilities["InfernoNeutralHostile"] = "ANin";
    Abilities["InfernoTichondrius"] = "SNin";
    Abilities["InnerFire"] = "Ainf";
    Abilities["InnerFireNeutralHostile"] = "ACif";
    Abilities["InventoryHero"] = "AInv";
    Abilities["Invisibility"] = "Aivs";
    Abilities["InvulnerableNeutral"] = "Avul";
    Abilities["ItemAgilityGain"] = "AIam";
    Abilities["ItemAgilityGainPlus2"] = "AIgm";
    Abilities["ItemAnimateDead"] = "AIan";
    Abilities["ItemAntiMagicShell"] = "AIxs";
    Abilities["ItemAreaDetection"] = "AIta";
    Abilities["ItemAreaHealOrManaRegain"] = "AIra";
    Abilities["ItemAreaHealing"] = "AIha";
    Abilities["ItemAreaHealingGreater"] = "AIhb";
    Abilities["ItemAreaManaRegain"] = "AImr";
    Abilities["ItemAreaTreeOrWallDamage"] = "AIdm";
    Abilities["ItemArmorBonusPlus1"] = "AId1";
    Abilities["ItemArmorBonusPlus10"] = "AId0";
    Abilities["ItemArmorBonusPlus2"] = "AId2";
    Abilities["ItemArmorBonusPlus3"] = "AId3";
    Abilities["ItemArmorBonusPlus4"] = "AId4";
    Abilities["ItemArmorBonusPlus5"] = "AId5";
    Abilities["ItemArmorBonusPlus7"] = "AId7";
    Abilities["ItemArmorBonusPlus8"] = "AId8";
    Abilities["ItemAttackBlackArrowBonus"] = "AIdf";
    Abilities["ItemAttackCorruptionBonus"] = "AIcb";
    Abilities["ItemAttackFireBonus"] = "AIfb";
    Abilities["ItemAttackFireBonusGuldan"] = "AIgd";
    Abilities["ItemAttackFrostBonus"] = "AIob";
    Abilities["ItemAttackHealReductionBonus"] = "AIf2";
    Abilities["ItemAttackLightningBonus"] = "AIlb";
    Abilities["ItemAttackLightningBonusNew"] = "AIll";
    Abilities["ItemAttackPoisonBonus"] = "AIpb";
    Abilities["ItemAttackSlowBonus"] = "AIsb";
    Abilities["ItemAttackSpeedBonusGlovesOfHaste"] = "AIsx";
    Abilities["ItemAttackSpeedBonusGreater"] = "AIs2";
    Abilities["ItemBlackArrow"] = "ANbs";
    Abilities["ItemBlueDragonspawnOverseerSummon"] = "AIff";
    Abilities["ItemBlueDrakeSummon"] = "AIfd";
    Abilities["ItemCaptureTheFlag"] = "AIfl";
    Abilities["ItemCaptureTheFlagHuman"] = "AIfm";
    Abilities["ItemCaptureTheFlagNightElf"] = "AIfn";
    Abilities["ItemCaptureTheFlagOrc"] = "AIfo";
    Abilities["ItemCaptureTheFlagUndead"] = "AIfe";
    Abilities["ItemChainDispel"] = "AIdc";
    Abilities["ItemCommand"] = "AIco";
    Abilities["ItemDamageBonusPlus1"] = "AItg";
    Abilities["ItemDamageBonusPlus10"] = "AItn";
    Abilities["ItemDamageBonusPlus12"] = "AItc";
    Abilities["ItemDamageBonusPlus15"] = "AItf";
    Abilities["ItemDamageBonusPlus2"] = "AIth";
    Abilities["ItemDamageBonusPlus20"] = "AItx";
    Abilities["ItemDamageBonusPlus3"] = "AIat";
    Abilities["ItemDamageBonusPlus4"] = "AIti";
    Abilities["ItemDamageBonusPlus5"] = "AItj";
    Abilities["ItemDamageBonusPlus6"] = "AIt6";
    Abilities["ItemDamageBonusPlus7"] = "AItk";
    Abilities["ItemDamageBonusPlus8"] = "AItl";
    Abilities["ItemDamageBonusPlus9"] = "AIt9";
    Abilities["ItemDispel"] = "AIdi";
    Abilities["ItemDispelWithCooldown"] = "AIds";
    Abilities["ItemDivineShield"] = "AIdv";
    Abilities["ItemDoomGuardSummon"] = "AIfu";
    Abilities["ItemExperienceGain"] = "AIem";
    Abilities["ItemExperienceGainGreater"] = "AIe2";
    Abilities["ItemFelStalkerSummon"] = "AIfh";
    Abilities["ItemFreezeDamageBonus"] = "AIzb";
    Abilities["ItemFurbolgTrackerSummon"] = "AIut";
    Abilities["ItemHealOrManaRegain"] = "AIre";
    Abilities["ItemHealingGreater"] = "AIh2";
    Abilities["ItemHealingLeast"] = "AIhx";
    Abilities["ItemHealingLesser"] = "AIh1";
    Abilities["ItemHeroStatBonusPlus10Agility"] = "AIaz";
    Abilities["ItemHeroStatBonusPlus1Agility"] = "AIa1";
    Abilities["ItemHeroStatBonusPlus1AllStats"] = "AIx1";
    Abilities["ItemHeroStatBonusPlus1Intelligence"] = "AIi1";
    Abilities["ItemHeroStatBonusPlus1Strength"] = "AIs1";
    Abilities["ItemHeroStatBonusPlus2AllStats"] = "AIx2";
    Abilities["ItemHeroStatBonusPlus3Agility"] = "AIa3";
    Abilities["ItemHeroStatBonusPlus3AllStats"] = "AIx3";
    Abilities["ItemHeroStatBonusPlus3Intelligence"] = "AIi3";
    Abilities["ItemHeroStatBonusPlus3Strength"] = "AIs3";
    Abilities["ItemHeroStatBonusPlus4Agility"] = "AIa4";
    Abilities["ItemHeroStatBonusPlus4AllStats"] = "AIx4";
    Abilities["ItemHeroStatBonusPlus4Intelligence"] = "AIi4";
    Abilities["ItemHeroStatBonusPlus4Strength"] = "AIs4";
    Abilities["ItemHeroStatBonusPlus5Agility"] = "AIa5";
    Abilities["ItemHeroStatBonusPlus5AllStats"] = "AIx5";
    Abilities["ItemHeroStatBonusPlus5Intelligence"] = "AIi5";
    Abilities["ItemHeroStatBonusPlus5Strength"] = "AIs5";
    Abilities["ItemHeroStatBonusPlus6Agility"] = "AIa6";
    Abilities["ItemHeroStatBonusPlus6Intelligence"] = "AIi6";
    Abilities["ItemHeroStatBonusPlus6Strength"] = "AIs6";
    Abilities["ItemIceRevenantSummon"] = "AIir";
    Abilities["ItemIllusions"] = "AIil";
    Abilities["ItemImmolation"] = "AIcf";
    Abilities["ItemIntOrAgiOrStrGain"] = "AIxm";
    Abilities["ItemIntelligenceGain"] = "AIim";
    Abilities["ItemIntelligenceGainPlus2"] = "AItm";
    Abilities["ItemLevelGain"] = "AIlm";
    Abilities["ItemLifeBonusGreater"] = "AIl2";
    Abilities["ItemLifeBonusLeast"] = "AIlf";
    Abilities["ItemLifeBonusLeast1"] = "AIlz";
    Abilities["ItemLifeBonusLesser"] = "AIl1";
    Abilities["ItemLifeRegeneration"] = "Arel";
    Abilities["ItemLifeRegenerationLesser"] = "Arll";
    Abilities["ItemLifeSteal"] = "AIva";
    Abilities["ItemManaBonus100"] = "AImz";
    Abilities["ItemManaBonus200"] = "AI2m";
    Abilities["ItemManaBonus75"] = "AImv";
    Abilities["ItemManaBonusGreater"] = "AIbm";
    Abilities["ItemManaBonusLeast"] = "AImb";
    Abilities["ItemManaRegainGreater"] = "AIm2";
    Abilities["ItemManaRegainLesser"] = "AIm1";
    Abilities["ItemManaRegeneration"] = "AIrm";
    Abilities["ItemMoveSpeedBonus"] = "AIms";
    Abilities["ItemOrcishBattleStandard"] = "AIfx";
    Abilities["ItemPermanentDamageGainItemAttackDamageGain"] = "AIaa";
    Abilities["ItemPermanentLifeGainLesser"] = "AIpx";
    Abilities["ItemPermanentLifeGainPlus50"] = "AImh";
    Abilities["ItemPlaceGoblinLandMine"] = "AIpm";
    Abilities["ItemPurge1"] = "AIlp";
    Abilities["ItemPurge2"] = "AIpg";
    Abilities["ItemPurge3"] = "AIps";
    Abilities["ItemRecall"] = "AIrt";
    Abilities["ItemReincarnation"] = "AIrc";
    Abilities["ItemResurrection"] = "AIrs";
    Abilities["ItemResurrectionCooldown"] = "AIrx";
    Abilities["ItemRevealEntireMap"] = "AIrv";
    Abilities["ItemRockGolemSummon"] = "AIfr";
    Abilities["ItemSightRangeBonus"] = "AIsi";
    Abilities["ItemSilence"] = "AIse";
    Abilities["ItemSkeletonSummon"] = "AIfs";
    Abilities["ItemSlowOrbVersion"] = "AIos";
    Abilities["ItemSoulPossession"] = "Asou";
    Abilities["ItemSoulTheft"] = "AIso";
    Abilities["ItemStrengthGain"] = "AIsm";
    Abilities["ItemStrengthGainPlus2"] = "AInm";
    Abilities["ItemTemporaryAreaArmorBonus"] = "AIda";
    Abilities["ItemTemporaryAreaArmorBonusWithLifeAndManaHealing"] = "AIdb";
    Abilities["ItemTemporaryInvisibilityGreater"] = "AIv2";
    Abilities["ItemTemporaryInvisibilityLesser"] = "AIv1";
    Abilities["ItemTemporaryInvulnerability"] = "AIvu";
    Abilities["ItemTemporaryInvulnerabilityDivinity"] = "AIvg";
    Abilities["ItemTemporaryInvulnerabilityLesser"] = "AIvl";
    Abilities["ItemTemporarySpeedBonus"] = "AIsp";
    Abilities["ItemTownPortal"] = "AItp";
    Abilities["ItemTransmute"] = "AIts";
    Abilities["ItemUrsaWarriorSummon"] = "AIuw";
    Abilities["ItemWeb"] = "AIwb";
    Abilities["KaboomClockwerkGoblinLevel1"] = "Asdg";
    Abilities["KaboomClockwerkGoblinLevel2"] = "Asd2";
    Abilities["KaboomClockwerkGoblinLevel3"] = "Asd3";
    Abilities["KaboomGoblinSapper"] = "Asds";
    Abilities["LeastHealingSlowCooldown"] = "AIh3";
    Abilities["LesserClarityPotion"] = "AIpl";
    Abilities["LesserRuneResurrection"] = "APrl";
    Abilities["LifeDrain"] = "ANdr";
    Abilities["LifeDrainNeutralHostile"] = "ACdr";
    Abilities["LifeRegenerationAuraNeutral"] = "ACnr";
    Abilities["LifeStealFrostmourne"] = "SCva";
    Abilities["LightningAttack"] = "Alit";
    Abilities["LightningShield"] = "Alsh";
    Abilities["LightningShieldItem"] = "AIls";
    Abilities["LightningShieldNeutralHostile"] = "ACls";
    Abilities["LiquidFire"] = "Aliq";
    Abilities["LoadEntangledGoldMine"] = "Aenc";
    Abilities["LoadGoblinZeppelin"] = "Aloa";
    Abilities["LoadOrcBurrow"] = "Sloa";
    Abilities["LoadPilot"] = "Atlp";
    Abilities["LoadShips"] = "Slo3";
    Abilities["LoadWisp"] = "Slo2";
    Abilities["Locust"] = "Aloc";
    Abilities["LocustSwarm"] = "AUls";
    Abilities["LongRiflesIcon"] = "Ahri";
    Abilities["MagicDefense"] = "Amdf";
    Abilities["MagicSentryHumanTowers"] = "Adts";
    Abilities["ManaBurn"] = "AEmb";
    Abilities["ManaBurnNeutralHostile1"] = "Ambd";
    Abilities["ManaBurnNeutralHostile2"] = "Amnb";
    Abilities["ManaBurnNeutralHostile3"] = "Ambb";
    Abilities["ManaFlare"] = "Amfl";
    Abilities["ManaRegenerationLifeRegenerationAuraNeutral"] = "ANre";
    Abilities["ManaShield"] = "ANms";
    Abilities["ManaShieldNeutralHostile"] = "ACmf";
    Abilities["MarksmanshipIcon"] = "Aemk";
    Abilities["MassTeleport"] = "AHmt";
    Abilities["MaulNeutralHostile3OrMaul"] = "ANb2";
    Abilities["MechanicalCritter"] = "Amec";
    Abilities["MeleeColdDamageBonus"] = "AIft";
    Abilities["MeleeFireDamageBonus"] = "AIfw";
    Abilities["MeleeLightningDamageBonus"] = "AIlx";
    Abilities["Metamorphosis"] = "AEme";
    Abilities["MetamorphosisEvilIllidan"] = "AEvi";
    Abilities["MetamorphosisIllidan"] = "AEIl";
    Abilities["MindRot"] = "ANmr";
    Abilities["MineExplodingGoblinLandMine"] = "Amin";
    Abilities["MirrorImage"] = "AOmi";
    Abilities["Monsoon"] = "ANmo";
    Abilities["Monsoon1"] = "ACmo";
    Abilities["MonsterLure"] = "AImo";
    Abilities["MoonGlaive"] = "Amgl";
    Abilities["MoonGlaiveNaisha"] = "Amgr";
    Abilities["MountHippogryph"] = "Aco2";
    Abilities["MountHippogryphOld"] = "Acoa";
    Abilities["Move"] = "Amov";
    Abilities["OnFire"] = "Afir";
    Abilities["OnFireHuman"] = "Afih";
    Abilities["OnFireNightElf"] = "Afin";
    Abilities["OnFireOrc"] = "Afio";
    Abilities["OnFireUndead"] = "Afiu";
    Abilities["OrbOfAnnihilation"] = "Afak";
    Abilities["PackMule"] = "Apak";
    Abilities["Parasite"] = "ANpa";
    Abilities["Parasite1"] = "ACpa";
    Abilities["PenguinSqueek"] = "AIpz";
    Abilities["PermanentImmolationNeutralHostile1"] = "ANpi";
    Abilities["PermanentImmolationNeutralHostile2"] = "Apig";
    Abilities["PermanentInvisibility"] = "Apiv";
    Abilities["PhaseShift"] = "Apsh";
    Abilities["Phoenix"] = "AHpx";
    Abilities["PhoenixFire"] = "Apxf";
    Abilities["PhoenixFireFlyer"] = "Apmf";
    Abilities["PhoenixIcon"] = "Ahpe";
    Abilities["PhoenixMorphingEggRelated"] = "Aphx";
    Abilities["PickUpArcher"] = "Aco3";
    Abilities["PickUpArcherOld"] = "Acoh";
    Abilities["Pillage"] = "Asal";
    Abilities["PocketFactory"] = "ANsy";
    Abilities["PocketFactoryUpgrade1"] = "ANs1";
    Abilities["PocketFactoryUpgrade2"] = "ANs2";
    Abilities["PocketFactoryUpgrade3"] = "ANs3";
    Abilities["PoisonArrows"] = "AEpa";
    Abilities["PoisonSting"] = "Apoi";
    Abilities["PoisonStingOrbOfVenom"] = "Apo2";
    Abilities["Polymorph"] = "Aply";
    Abilities["PolymorphNeutralHostile"] = "ACpy";
    Abilities["Possession"] = "Apos";
    Abilities["PossessionChanneling"] = "Aps2";
    Abilities["PossessionNeutralHostile"] = "ACps";
    Abilities["PowerupAreaHealing"] = "APh2";
    Abilities["PowerupAreaHealingGreater"] = "APh3";
    Abilities["PowerupAreaHealingLesser"] = "APh1";
    Abilities["PowerupDispel"] = "APdi";
    Abilities["Prioritize"] = "Aatp";
    Abilities["PulverizeNeutralHostile"] = "ACpv";
    Abilities["PulverizePulverize"] = "Awar";
    Abilities["Purge"] = "Aprg";
    Abilities["Purge1"] = "Apg2";
    Abilities["PurgeNeutralHostile"] = "ACpu";
    Abilities["QuillSpray"] = "ANak";
    Abilities["RainOfChaosArchimonde"] = "ANrc";
    Abilities["RainOfChaosBalnazzar"] = "ANr3";
    Abilities["RainOfFire"] = "ANrf";
    Abilities["RainOfFireNeutralHostile1"] = "ACrg";
    Abilities["RainOfFireNeutralHostile2"] = "ACrf";
    Abilities["RaiseDead"] = "Arai";
    Abilities["RaiseDeadItem"] = "AIrd";
    Abilities["RaiseDeadNeutralHostile"] = "ACrd";
    Abilities["Rally"] = "ARal";
    Abilities["RandomItem"] = "AIri";
    Abilities["RayOfDisruption"] = "Ache";
    Abilities["ReanimationSpecialCampaignItem"] = "AInd";
    Abilities["Rebirth"] = "AIrb";
    Abilities["RegenerationAuraItem"] = "AIgx";
    Abilities["Reincarnation"] = "AOre";
    Abilities["Reincarnation1"] = "ANr2";
    Abilities["ReincarnationCairne"] = "AOr3";
    Abilities["ReincarnationMannoroth"] = "ANrn";
    Abilities["ReincarnationNeutralHostile"] = "ACrn";
    Abilities["ReinforcedBurrowsUpgrade"] = "Arbr";
    Abilities["ReinforcedDefensesIcon"] = "Aorb";
    Abilities["Rejuvenation"] = "Arej";
    Abilities["RejuvenationFurbolg"] = "ACr2";
    Abilities["RejuvenationNeutralHostile"] = "ACrj";
    Abilities["Renew"] = "Aren";
    Abilities["Repair"] = "Arep";
    Abilities["RepairHuman"] = "Ahrp";
    Abilities["Replenish"] = "Arpb";
    Abilities["ReplenishMana"] = "Amb2";
    Abilities["ReplenishManaAndLife"] = "Ambt";
    Abilities["ResistantSkin"] = "Arsk";
    Abilities["ResistantSkinNeutralHostile1"] = "ACrk";
    Abilities["ResistantSkinNeutralHostile2"] = "ACsk";
    Abilities["Restore"] = "Arst";
    Abilities["Resurrection"] = "AHre";
    Abilities["ReturnGold"] = "Argd";
    Abilities["ReturnGoldAndLumber"] = "Argl";
    Abilities["ReturnLumber"] = "Arlm";
    Abilities["Reveal"] = "Andt";
    Abilities["Reveal1"] = "AHta";
    Abilities["Revenge"] = "Arng";
    Abilities["ReviveHero"] = "Arev";
    Abilities["ReviveHeroInstantly"] = "Aawa";
    Abilities["RitualDaggerInstantHeal"] = "AIdg";
    Abilities["RitualDaggerRegenerate"] = "AIg2";
    Abilities["Roar"] = "Aroa";
    Abilities["RoarItem"] = "AIrr";
    Abilities["RoarMorph"] = "Ara2";
    Abilities["RoarNeutralHostile"] = "ACro";
    Abilities["RoarSkeletalOrcChampion"] = "ACr1";
    Abilities["RoboGoblin"] = "ANrg";
    Abilities["RoboGoblinUpgradeLevel1"] = "ANg1";
    Abilities["RoboGoblinUpgradeLevel2"] = "ANg2";
    Abilities["RoboGoblinUpgradeLevel3"] = "ANg3";
    Abilities["RootAncientProtector"] = "Aro2";
    Abilities["RootAncients"] = "Aro1";
    Abilities["RuneAreaHealOrManaRegain"] = "APra";
    Abilities["RuneAreaManaRegain"] = "APmr";
    Abilities["RuneAreaManaRegainGreater"] = "APmg";
    Abilities["RuneOfSpeed"] = "APsa";
    Abilities["RuneOfTheWatcher"] = "APwt";
    Abilities["SacrificeAcolyte"] = "Alam";
    Abilities["SacrificeSacrificialPit"] = "Asac";
    Abilities["Scout"] = "AEst";
    Abilities["ScrollOfHaste"] = "AIsa";
    Abilities["ScrollOfRegeneration"] = "AIsl";
    Abilities["SearingArrows"] = "AHfa";
    Abilities["SearingArrowsNeutralHostile"] = "ACsa";
    Abilities["SelectHero"] = "Aneu";
    Abilities["SelectUnit"] = "Ane2";
    Abilities["SellItems"] = "Asid";
    Abilities["SellUnits"] = "Asud";
    Abilities["Sentinel"] = "Aesn";
    Abilities["SentinelNaisha"] = "Aesr";
    Abilities["SentryWard"] = "Aeye";
    Abilities["SentryWardItem"] = "AIsw";
    Abilities["SerpentWard"] = "AOsw";
    Abilities["SerpentWardRokhan"] = "Arsw";
    Abilities["ShadeIcon"] = "Augh";
    Abilities["ShadowMeld"] = "Ashm";
    Abilities["ShadowMeldAkama"] = "Ahid";
    Abilities["ShadowMeldInstant"] = "Sshm";
    Abilities["ShadowMeldItem"] = "AIhm";
    Abilities["ShadowOrbAbility"] = "AIdn";
    Abilities["ShadowStrike"] = "AEsh";
    Abilities["Shockwave"] = "AOsh";
    Abilities["Shockwave1"] = "ANsh";
    Abilities["ShockwaveCairne"] = "AOs2";
    Abilities["ShockwaveNeutralHostile"] = "ACsh";
    Abilities["ShockwaveTrap"] = "ACst";
    Abilities["ShopPurchaseItem"] = "Apit";
    Abilities["ShopSharingAlliedBldg"] = "Aall";
    Abilities["Silence"] = "ANsi";
    Abilities["SilenceNeutralHostile"] = "ACsi";
    Abilities["SiphonMana"] = "AHdr";
    Abilities["SiphonManaNeutralHostile"] = "ACsm";
    Abilities["SkeletalMasteryIcon"] = "Ausm";
    Abilities["SlamNeutralHostile"] = "ACtc";
    Abilities["SlamThunderLizard"] = "ACt2";
    Abilities["Sleep"] = "AUsl";
    Abilities["Sleep1"] = "ACsp";
    Abilities["SleepAlways"] = "Asla";
    Abilities["SleepNeutralHostile"] = "ACsl";
    Abilities["Slow"] = "Aslo";
    Abilities["SlowAuraTornado"] = "Aasl";
    Abilities["SlowNeutralHostile"] = "ACsw";
    Abilities["SlowPoison"] = "Aspo";
    Abilities["SlowPoisonItem"] = "AIsz";
    Abilities["SoulBurn"] = "ANso";
    Abilities["SoulPreservationMalganis"] = "ANsl";
    Abilities["SpawnHydra"] = "Aspy";
    Abilities["SpawnHydraHatchling"] = "Aspt";
    Abilities["SpawnSkeletonProbablyBlackArrow"] = "Asod";
    Abilities["SpawnSpiderlingsNeutralHostile"] = "Assp";
    Abilities["SpawnSpidersNeutralHostile"] = "Aspd";
    Abilities["SpawnTentacle"] = "ACtn";
    Abilities["SpellBook"] = "Aspb";
    Abilities["SpellDamageReduction"] = "AIsr";
    Abilities["SpellImmunity"] = "Amim";
    Abilities["SpellImmunityItem"] = "AImx";
    Abilities["SpellImmunityNeutralHostile"] = "ACmi";
    Abilities["SpellImmunitySpellImmunityArchimonde"] = "ACm2";
    Abilities["SpellImmunitySpellImmunityDragon"] = "ACm3";
    Abilities["SpellShieldAmulet"] = "ANss";
    Abilities["SpellShieldRune"] = "ANse";
    Abilities["SpellSteal"] = "Asps";
    Abilities["Sphere"] = "Asph";
    Abilities["SphereVengeanceLevel1"] = "Asp1";
    Abilities["SphereVengeanceLevel2"] = "Asp2";
    Abilities["SphereVengeanceLevel3"] = "Asp3";
    Abilities["SphereVengeanceLevel4"] = "Asp4";
    Abilities["SphereVengeanceLevel5"] = "Asp5";
    Abilities["SphereVengeanceLevel6"] = "Asp6";
    Abilities["SpiderAttack"] = "Aspa";
    Abilities["SpikedBarricades"] = "Aspi";
    Abilities["SpikedBarricadesSpikedBarricadesImprovedSpikedBarricadesIcon"] = "Aosp";
    Abilities["SpikedCarapace"] = "AUts";
    Abilities["SpikedShell"] = "ANth";
    Abilities["SpikedShell22ButtonPos"] = "ANt2";
    Abilities["SpiritBeast"] = "ACs8";
    Abilities["SpiritLink"] = "Aspl";
    Abilities["SpiritLinkArea"] = "Aspp";
    Abilities["SpiritOfVengeance"] = "Avng";
    Abilities["SpiritTouch"] = "Arpm";
    Abilities["StaffOfPreservation"] = "ANpr";
    Abilities["StaffOfSanctuary"] = "ANsa";
    Abilities["StaffOfTeleportation"] = "AImt";
    Abilities["Stampede"] = "ANst";
    Abilities["StampedeRexxar"] = "Arsp";
    Abilities["StandDown"] = "Astd";
    Abilities["Starfall"] = "AEsf";
    Abilities["StarfallMorePowerful"] = "AEsb";
    Abilities["StasisTrap"] = "Asta";
    Abilities["Steal"] = "Aste";
    Abilities["StoneForm"] = "Astn";
    Abilities["StormBolt"] = "AHtb";
    Abilities["StormBolt1"] = "ANsb";
    Abilities["StormCrowForm"] = "Arav";
    Abilities["StormEarthAndFire"] = "ANef";
    Abilities["StormEarthAndFireChen"] = "Acef";
    Abilities["StormHammers"] = "Asth";
    Abilities["SubmergeMyrmidon"] = "Asb1";
    Abilities["SubmergeRoyalGuard"] = "Asb2";
    Abilities["SubmergeSnapDragon"] = "Asb3";
    Abilities["SummonBear"] = "ANsg";
    Abilities["SummonHawk"] = "ANsw";
    Abilities["SummonHeadhunterItem"] = "AIsh";
    Abilities["SummonLavaSpawn"] = "ANlm";
    Abilities["SummonMishaRexxar"] = "Arsg";
    Abilities["SummonPrawns"] = "Aslp";
    Abilities["SummonQuilbeast"] = "ANsq";
    Abilities["SummonQuilbeastRexxar"] = "Arsq";
    Abilities["SummonSeaElemental"] = "ACwe";
    Abilities["SummonWaterElemental"] = "AHwe";
    Abilities["SummoningRitual"] = "Ahnl";
    Abilities["SunderingBlades"] = "Ahsb";
    Abilities["Taunt"] = "Atau";
    Abilities["TauntNeutralHostile"] = "ANta";
    Abilities["ThornsAura"] = "AEah";
    Abilities["ThornsAuraNeutralHostile"] = "ACah";
    Abilities["ThunderClap"] = "AHtc";
    Abilities["TomeOfRetraining"] = "Aret";
    Abilities["Tornado"] = "ANto";
    Abilities["TornadoSpinTornado"] = "Atsp";
    Abilities["TornadoWanderTornado"] = "Atwa";
    Abilities["Tranquility"] = "AEtq";
    Abilities["Transmute"] = "ANtm";
    Abilities["TreeOfLifeUpgradeAbility"] = "Atol";
    Abilities["TrollRegenerationIcon"] = "Aotr";
    Abilities["TrueSightFlyingMachine"] = "Agyv";
    Abilities["TrueSightNeutral1"] = "Adtg";
    Abilities["TrueSightNeutral2"] = "ANtr";
    Abilities["TrueSightShade"] = "Atru";
    Abilities["TrueshotAura"] = "AEar";
    Abilities["TrueshotAuraNeutralHostile"] = "ACat";
    Abilities["Turret"] = "Attu";
    Abilities["Ultravision"] = "Ault";
    Abilities["UltravisionItem"] = "AIuv";
    Abilities["UndefinedGrommash"] = "Sca6";
    Abilities["UndefinedGrunt"] = "Sca1";
    Abilities["UndefinedItem"] = "AIin";
    Abilities["UndefinedItem1"] = "AIad";
    Abilities["UndefinedItem2"] = "AIcd";
    Abilities["UndefinedItem3"] = "AIwd";
    Abilities["UndefinedItem4"] = "AIba";
    Abilities["UndefinedItem5"] = "AIav";
    Abilities["UndefinedItem6"] = "AIar";
    Abilities["UndefinedItem7"] = "AIae";
    Abilities["UndefinedItem8"] = "AIau";
    Abilities["UndefinedKodoBeast"] = "Sca4";
    Abilities["UndefinedLesser"] = "AIrn";
    Abilities["UndefinedNeutralHostile"] = "ACss";
    Abilities["UndefinedPeon"] = "Sca5";
    Abilities["UndefinedRaider"] = "Sca2";
    Abilities["UndefinedShaman"] = "Sca3";
    Abilities["UnholyAura"] = "AUau";
    Abilities["UnholyAuraNeutralHostile"] = "ACua";
    Abilities["UnholyFrenzy"] = "Auhf";
    Abilities["UnholyFrenzyItem"] = "AIuf";
    Abilities["UnholyFrenzyNeutralHostile"] = "ACuf";
    Abilities["UnholyFrenzyWarlock"] = "Suhf";
    Abilities["UnitInventoryHuman"] = "Aihn";
    Abilities["UnitInventoryNightElf"] = "Aien";
    Abilities["UnitInventoryOrc"] = "Aion";
    Abilities["UnitInventoryUndead"] = "Aiun";
    Abilities["UnloadAirTransportsGoblinZeppelin"] = "Adro";
    Abilities["UnloadInstantEntangledMine"] = "Adri";
    Abilities["UnloadSeaTransports"] = "Sdro";
    Abilities["UnstableConcoction"] = "Auco";
    Abilities["UnsummonBuilding"] = "Auns";
    Abilities["VampiricAura"] = "AUav";
    Abilities["VampiricAuraNeutralHostile"] = "ACvp";
    Abilities["VampiricPotion"] = "AIpv";
    Abilities["Vengeance"] = "AEsv";
    Abilities["Volcano"] = "ANvc";
    Abilities["VoodooSpirits"] = "AOls";
    Abilities["VorpalBlades"] = "Aimp";
    Abilities["WandOfShadowsight"] = "Ashs";
    Abilities["WanderNeutral"] = "Awan";
    Abilities["WarClub"] = "Agra";
    Abilities["WarDrums"] = "Aakb";
    Abilities["WarStomp"] = "AOws";
    Abilities["WarStomp1"] = "AOw2";
    Abilities["WarStompNeutralHostile1NeutralHostile"] = "Awrs";
    Abilities["WarStompNeutralHostile2NeutralHostile"] = "Awrh";
    Abilities["WarStompNeutralHostile3NeutralHostile"] = "Awrg";
    Abilities["WateryMinion"] = "ANwm";
    Abilities["WateryMinionItem"] = "AIwm";
    Abilities["WaygateAbility"] = "Awrp";
    Abilities["Web"] = "Aweb";
    Abilities["WebNeutralHostile"] = "ACwb";
    Abilities["WellSpringIcon"] = "Aews";
    Abilities["WindWalk"] = "AOwk";
    Abilities["WindWalkNeutralHostile"] = "ANwk";
})(Abilities || (exports.Abilities = Abilities = {}));
class AbilityContainer extends container_1.Container {
    constructor() {
        super(...arguments);
        this.game = OBJECTS;
    }
}
exports.AbilityContainer = AbilityContainer;
//# sourceMappingURL=abilities.js.map