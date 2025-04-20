import { IDs, Container } from '../container';
export interface Unit extends IDs {
    requiredAnimationNames: string;
    iconGameInterface: string;
    requiredAnimationNamesAttachments: string;
    requiredAttachmentLinkNames: string;
    tooltipAwaken: string;
    requiredBoneNames: string;
    construction: string;
    structuresBuilt: string;
    buttonPositionX: number;
    buttonPositionY: number;
    casterUpgradeArt: string;
    casterUpgradeNames: string;
    casterUpgradeTips: string;
    dependencyEquivalents: string;
    description: string;
    nameEditorSuffix: string;
    hotkey: string;
    loopingFadeInRate: number;
    loopingFadeOutRate: number;
    itemsMade: string;
    attack1ProjectileArc: number;
    attack2ProjectileArc: number;
    attack1ProjectileArt: string;
    attack2ProjectileArt: string;
    attack1ProjectileHomingEnabled: boolean;
    attack2ProjectileHomingEnabled: boolean;
    attack1ProjectileSpeed: number;
    attack2ProjectileSpeed: number;
    movement: string;
    name: string;
    properNames: string;
    random: string;
    requirementsTiersUsed: number;
    requirements: string;
    requirementsTier2: string;
    requirementsTier3: string;
    requirementsTier4: string;
    requirementsTier5: string;
    requirementsTier6: string;
    requirementsTier7: string;
    requirementsTier8: string;
    requirementsTier9: string;
    requirementsLevels: string;
    researchesAvailable: string;
    revivesDeadHeroes: boolean;
    tooltipRevive: string;
    iconScoreScreen: string;
    itemsSold: string;
    unitsSold: string;
    special: string;
    target: string;
    tooltipBasic: string;
    unitsTrained: string;
    heroRevivalLocations: string;
    tooltipExtended: string;
    upgradesTo: string;
    normal: string;
    defaultActiveAbility: string;
    hero: string;
    startingAgility: number;
    agilityPerLevel: number;
    buildTime: number;
    goldBountyAwardedNumberOfDice: number;
    goldBountyAwardedBase: number;
    goldBountyAwardedSidesPerDie: number;
    lumberBountyAwardedNumberOfDice: number;
    lumberBountyAwardedBase: number;
    lumberBountyAwardedSidesPerDie: number;
    collisionSize: number;
    defenseBase: number;
    defenseType: string;
    defenseUpgradeBonus: number;
    foodProduced: number;
    foodCost: number;
    goldCostundefined: number;
    repairGoldCost: number;
    hitPointsMaximumBase: number;
    startingIntelligence: number;
    intelligencePerLevel: number;
    isABuilding: boolean;
    levelundefined: number;
    lumberCostundefined: number;
    repairLumberCost: number;
    manaInitialAmount: number;
    manaMaximum: number;
    speedMaximum: number;
    speedMinimum: number;
    neutralBuildingValidAsRandomBuilding: boolean;
    sightRadiusNight: number;
    placementRequires: string;
    primaryAttribute: string;
    hitPointsRegenerationRate: number;
    manaRegeneration: number;
    hitPointsRegenerationType: string;
    repairTime: number;
    groupSeparationEnabled: boolean;
    groupSeparationGroupNumber: number;
    groupSeparationParameter: number;
    groupSeparationPriority: number;
    placementPreventedBy: string;
    sightRadiusDay: number;
    speedBase: number;
    stockMaximumundefined: number;
    stockReplenishIntervalundefined: number;
    stockStartDelayundefined: number;
    stockInitialAfterStartDelayundefined: number;
    startingStrength: number;
    strengthPerLevel: number;
    tilesets: string;
    unitClassification: string;
    upgradesUsed: string;
    aIPlacementRadius: number;
    aIPlacementType: string;
    canBuildOn: boolean;
    canFlee: boolean;
    sleeps: boolean;
    transportedSize: number;
    deathTimeSeconds: number;
    deathType: string;
    useExtendedLineOfSight: boolean;
    formationRank: number;
    canBeBuiltOn: boolean;
    heightMinimum: number;
    height: number;
    type: string;
    properNamesUsed: number;
    orientationInterpolation: number;
    pathingMap: string;
    pointValue: number;
    priorityundefined: number;
    propulsionWindowDegrees: number;
    race: string;
    placementRequiresWaterRadius: number;
    targetedAs: string;
    turnRate: number;
    armorTypeundefined: string;
    animationBlendTimeSeconds: number;
    tintingColor3Blueundefined: number;
    shadowTextureBuilding: string;
    categorizationCampaign: boolean;
    allowCustomTeamColor: boolean;
    canDropItemsOnDeath: boolean;
    elevationSamplePoints: number;
    elevationSampleRadius: number;
    modelFile: string;
    portraitModelFile: string;
    modelFileExtraVersions: string;
    fogOfWarSampleRadius: number;
    tintingColor2Greenundefined: number;
    displayAsNeutralHostile: boolean;
    placeableInEditor: boolean;
    maximumPitchAngleDegrees: number;
    maximumRollAngleDegrees: number;
    scalingValueundefined: number;
    neutralBuildingShowsMinimapIcon: boolean;
    heroHideHeroInterfaceIcon: boolean;
    heroHideHeroMinimapDisplay: boolean;
    heroHideHeroDeathMessage: boolean;
    hideMinimapDisplay: boolean;
    occluderHeight: number;
    tintingColor1Redundefined: number;
    animationRunSpeed: number;
    selectionScale: number;
    scaleProjectiles: boolean;
    selectionCircleOnWater: boolean;
    selectionCircleHeight: number;
    shadowImageHeight: number;
    hasWaterShadow: boolean;
    shadowImageWidth: number;
    shadowImageCenterX: number;
    shadowImageCenterY: number;
    categorizationSpecial: boolean;
    teamColor: string;
    hasTilesetSpecificData: boolean;
    groundTexture: string;
    shadowImageUnit: string;
    unitSoundSet: string;
    useClickHelper: boolean;
    animationWalkSpeed: number;
    acquisitionRange: number;
    attack1AttackType: string;
    attack2AttackType: string;
    attack1AnimationBackswingPoint: number;
    attack2AnimationBackswingPoint: number;
    animationCastBackswing: number;
    animationCastPoint: number;
    attack1CooldownTime: number;
    attack2CooldownTime: number;
    attack1DamageLossFactor: number;
    attack2DamageLossFactor: number;
    attack1DamageNumberOfDice: number;
    attack2DamageNumberOfDice: number;
    attack1DamageBase: number;
    attack2DamageBase: number;
    attack1AnimationDamagePoint: number;
    attack2AnimationDamagePoint: number;
    attack1DamageUpgradeAmount: number;
    attack2DamageUpgradeAmount: number;
    attack1AreaOfEffectFullDamage: number;
    attack2AreaOfEffectFullDamage: number;
    attack1AreaOfEffectMediumDamage: number;
    attack2AreaOfEffectMediumDamage: number;
    attack1DamageFactorMedium: number;
    attack2DamageFactorMedium: number;
    projectileImpactZSwimming: number;
    projectileImpactZ: number;
    projectileLaunchZSwimming: number;
    projectileLaunchX: number;
    projectileLaunchY: number;
    projectileLaunchZ: number;
    minimumAttackRange: number;
    attack1AreaOfEffectSmallDamage: number;
    attack2AreaOfEffectSmallDamage: number;
    attack1DamageFactorSmall: number;
    attack2DamageFactorSmall: number;
    attack1Range: number;
    attack2Range: number;
    attack1RangeMotionBuffer: number;
    attack2RangeMotionBuffer: number;
    attack1ShowUI: boolean;
    attack2ShowUI: boolean;
    attack1DamageSidesPerDie: number;
    attack2DamageSidesPerDie: number;
    attack1DamageSpillDistance: number;
    attack2DamageSpillDistance: number;
    attack1DamageSpillRadius: number;
    attack2DamageSpillRadius: number;
    attack1AreaOfEffectTargets: string;
    attack2AreaOfEffectTargets: string;
    attack1MaximumNumberOfTargets: number;
    attack2MaximumNumberOfTargets: number;
    attack1TargetsAllowed: string;
    attack2TargetsAllowed: string;
    attacksEnabled: string;
    attack1WeaponType: string;
    attack2WeaponType: string;
    attack1WeaponSound: string;
    attack2WeaponSound: string;
    normalSkin: string;
    heroSkin: string;
}
export declare const UnitProps: ({
    id: "uani";
    name: "requiredAnimationNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "uico";
    name: "iconGameInterface";
    type: "icon";
    netsafe: "true";
} | {
    id: "uaap";
    name: "requiredAnimationNamesAttachments";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ualp";
    name: "requiredAttachmentLinkNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "uawt";
    name: "tooltipAwaken";
    type: "string";
    netsafe: "true";
} | {
    id: "ubpr";
    name: "requiredBoneNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ubsl";
    name: "construction";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "ubui";
    name: "structuresBuilt";
    type: "unitList";
    netsafe: "false";
} | {
    id: "ubpx";
    name: "buttonPositionX";
    type: "int";
    netsafe: "true";
} | {
    id: "ubpy";
    name: "buttonPositionY";
    type: "int";
    netsafe: "true";
} | {
    id: "ucua";
    name: "casterUpgradeArt";
    type: "icon";
    netsafe: "true";
} | {
    id: "ucun";
    name: "casterUpgradeNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ucut";
    name: "casterUpgradeTips";
    type: "stringList";
    netsafe: "true";
} | {
    id: "udep";
    name: "dependencyEquivalents";
    type: "unitList";
    netsafe: "false";
} | {
    id: "ides";
    name: "description";
    type: "string";
    netsafe: "true";
} | {
    id: "unsf";
    name: "nameEditorSuffix";
    type: "string";
    netsafe: "false";
} | {
    id: "uhot";
    name: "hotkey";
    type: "char";
    netsafe: "true";
} | {
    id: "ulfi";
    name: "loopingFadeInRate";
    type: "int";
    netsafe: "true";
} | {
    id: "ulfo";
    name: "loopingFadeOutRate";
    type: "int";
    netsafe: "true";
} | {
    id: "umki";
    name: "itemsMade";
    type: "itemList";
    netsafe: "false";
} | {
    id: "uma1";
    name: "attack1ProjectileArc";
    type: "unreal";
    netsafe: "true";
} | {
    id: "uma2";
    name: "attack2ProjectileArc";
    type: "unreal";
    netsafe: "true";
} | {
    id: "ua1m";
    name: "attack1ProjectileArt";
    type: "model";
    netsafe: "true";
} | {
    id: "ua2m";
    name: "attack2ProjectileArt";
    type: "model";
    netsafe: "true";
} | {
    id: "umh1";
    name: "attack1ProjectileHomingEnabled";
    type: "bool";
    netsafe: "false";
} | {
    id: "umh2";
    name: "attack2ProjectileHomingEnabled";
    type: "bool";
    netsafe: "false";
} | {
    id: "ua1z";
    name: "attack1ProjectileSpeed";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2z";
    name: "attack2ProjectileSpeed";
    type: "int";
    netsafe: "false";
} | {
    id: "umsl";
    name: "movement";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "unam";
    name: "name";
    type: "string";
    netsafe: "true";
} | {
    id: "upro";
    name: "properNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ursl";
    name: "random";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "urqc";
    name: "requirementsTiersUsed";
    type: "int";
    netsafe: "false";
} | {
    id: "ureq";
    name: "requirements";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq1";
    name: "requirementsTier2";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq2";
    name: "requirementsTier3";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq3";
    name: "requirementsTier4";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq4";
    name: "requirementsTier5";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq5";
    name: "requirementsTier6";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq6";
    name: "requirementsTier7";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq7";
    name: "requirementsTier8";
    type: "techList";
    netsafe: "false";
} | {
    id: "urq8";
    name: "requirementsTier9";
    type: "techList";
    netsafe: "false";
} | {
    id: "urqa";
    name: "requirementsLevels";
    type: "intList";
    netsafe: "false";
} | {
    id: "ures";
    name: "researchesAvailable";
    type: "upgradeList";
    netsafe: "false";
} | {
    id: "urev";
    name: "revivesDeadHeroes";
    type: "bool";
    netsafe: "false";
} | {
    id: "utpr";
    name: "tooltipRevive";
    type: "string";
    netsafe: "true";
} | {
    id: "ussi";
    name: "iconScoreScreen";
    type: "icon";
    netsafe: "true";
} | {
    id: "usei";
    name: "itemsSold";
    type: "itemList";
    netsafe: "false";
} | {
    id: "useu";
    name: "unitsSold";
    type: "unitList";
    netsafe: "false";
} | {
    id: "uspa";
    name: "special";
    type: "modelList";
    netsafe: "true";
} | {
    id: "utaa";
    name: "target";
    type: "modelList";
    netsafe: "true";
} | {
    id: "utip";
    name: "tooltipBasic";
    type: "string";
    netsafe: "true";
} | {
    id: "utra";
    name: "unitsTrained";
    type: "unitList";
    netsafe: "false";
} | {
    id: "urva";
    name: "heroRevivalLocations";
    type: "unitList";
    netsafe: "false";
} | {
    id: "utub";
    name: "tooltipExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "uupt";
    name: "upgradesTo";
    type: "unitList";
    netsafe: "false";
} | {
    id: "uabi";
    name: "normal";
    type: "abilityList";
    netsafe: "false";
} | {
    id: "udaa";
    name: "defaultActiveAbility";
    type: "abilCode";
    netsafe: "false";
} | {
    id: "uhab";
    name: "hero";
    type: "heroAbilityList";
    netsafe: "false";
} | {
    id: "uagi";
    name: "startingAgility";
    type: "int";
    netsafe: "false";
} | {
    id: "uagp";
    name: "agilityPerLevel";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ubld";
    name: "buildTime";
    type: "int";
    netsafe: "false";
} | {
    id: "ubdi";
    name: "goldBountyAwardedNumberOfDice";
    type: "int";
    netsafe: "false";
} | {
    id: "ubba";
    name: "goldBountyAwardedBase";
    type: "int";
    netsafe: "false";
} | {
    id: "ubsi";
    name: "goldBountyAwardedSidesPerDie";
    type: "int";
    netsafe: "false";
} | {
    id: "ulbd";
    name: "lumberBountyAwardedNumberOfDice";
    type: "int";
    netsafe: "false";
} | {
    id: "ulba";
    name: "lumberBountyAwardedBase";
    type: "int";
    netsafe: "false";
} | {
    id: "ulbs";
    name: "lumberBountyAwardedSidesPerDie";
    type: "int";
    netsafe: "false";
} | {
    id: "ucol";
    name: "collisionSize";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udef";
    name: "defenseBase";
    type: "int";
    netsafe: "false";
} | {
    id: "udty";
    name: "defenseType";
    type: "defenseType";
    netsafe: "false";
} | {
    id: "udup";
    name: "defenseUpgradeBonus";
    type: "int";
    netsafe: "false";
} | {
    id: "ufma";
    name: "foodProduced";
    type: "int";
    netsafe: "false";
} | {
    id: "ufoo";
    name: "foodCost";
    type: "int";
    netsafe: "false";
} | {
    id: "ugol";
    name: "goldCostundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "ugor";
    name: "repairGoldCost";
    type: "int";
    netsafe: "false";
} | {
    id: "uhpm";
    name: "hitPointsMaximumBase";
    type: "int";
    netsafe: "false";
} | {
    id: "uint";
    name: "startingIntelligence";
    type: "int";
    netsafe: "false";
} | {
    id: "uinp";
    name: "intelligencePerLevel";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ubdg";
    name: "isABuilding";
    type: "bool";
    netsafe: "false";
} | {
    id: "ulev";
    name: "levelundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "ulum";
    name: "lumberCostundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "ulur";
    name: "repairLumberCost";
    type: "int";
    netsafe: "false";
} | {
    id: "umpi";
    name: "manaInitialAmount";
    type: "int";
    netsafe: "false";
} | {
    id: "umpm";
    name: "manaMaximum";
    type: "int";
    netsafe: "false";
} | {
    id: "umas";
    name: "speedMaximum";
    type: "int";
    netsafe: "false";
} | {
    id: "umis";
    name: "speedMinimum";
    type: "int";
    netsafe: "false";
} | {
    id: "unbr";
    name: "neutralBuildingValidAsRandomBuilding";
    type: "bool";
    netsafe: "false";
} | {
    id: "usin";
    name: "sightRadiusNight";
    type: "int";
    netsafe: "false";
} | {
    id: "upap";
    name: "placementRequires";
    type: "pathingListPrevent";
    netsafe: "false";
} | {
    id: "upra";
    name: "primaryAttribute";
    type: "attributeType";
    netsafe: "false";
} | {
    id: "uhpr";
    name: "hitPointsRegenerationRate";
    type: "unreal";
    netsafe: "false";
} | {
    id: "umpr";
    name: "manaRegeneration";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uhrt";
    name: "hitPointsRegenerationType";
    type: "regenType";
    netsafe: "false";
} | {
    id: "urtm";
    name: "repairTime";
    type: "int";
    netsafe: "false";
} | {
    id: "urpo";
    name: "groupSeparationEnabled";
    type: "bool";
    netsafe: "false";
} | {
    id: "urpg";
    name: "groupSeparationGroupNumber";
    type: "int";
    netsafe: "false";
} | {
    id: "urpp";
    name: "groupSeparationParameter";
    type: "int";
    netsafe: "false";
} | {
    id: "urpr";
    name: "groupSeparationPriority";
    type: "int";
    netsafe: "false";
} | {
    id: "upar";
    name: "placementPreventedBy";
    type: "pathingListRequire";
    netsafe: "false";
} | {
    id: "usid";
    name: "sightRadiusDay";
    type: "int";
    netsafe: "false";
} | {
    id: "umvs";
    name: "speedBase";
    type: "int";
    netsafe: "false";
} | {
    id: "usma";
    name: "stockMaximumundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "usrg";
    name: "stockReplenishIntervalundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "usst";
    name: "stockStartDelayundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "usit";
    name: "stockInitialAfterStartDelayundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "ustr";
    name: "startingStrength";
    type: "int";
    netsafe: "false";
} | {
    id: "ustp";
    name: "strengthPerLevel";
    type: "unreal";
    netsafe: "false";
} | {
    id: "util";
    name: "tilesets";
    type: "tilesetList";
    netsafe: "false";
} | {
    id: "utyp";
    name: "unitClassification";
    type: "unitClass";
    netsafe: "false";
} | {
    id: "upgr";
    name: "upgradesUsed";
    type: "upgradeList";
    netsafe: "false";
} | {
    id: "uabr";
    name: "aIPlacementRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uabt";
    name: "aIPlacementType";
    type: "aiBuffer";
    netsafe: "false";
} | {
    id: "ucbo";
    name: "canBuildOn";
    type: "bool";
    netsafe: "false";
} | {
    id: "ufle";
    name: "canFlee";
    type: "bool";
    netsafe: "false";
} | {
    id: "usle";
    name: "sleeps";
    type: "bool";
    netsafe: "false";
} | {
    id: "ucar";
    name: "transportedSize";
    type: "int";
    netsafe: "false";
} | {
    id: "udtm";
    name: "deathTimeSeconds";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udea";
    name: "deathType";
    type: "deathType";
    netsafe: "false";
} | {
    id: "ulos";
    name: "useExtendedLineOfSight";
    type: "bool";
    netsafe: "false";
} | {
    id: "ufor";
    name: "formationRank";
    type: "int";
    netsafe: "false";
} | {
    id: "uibo";
    name: "canBeBuiltOn";
    type: "bool";
    netsafe: "false";
} | {
    id: "umvf";
    name: "heightMinimum";
    type: "unreal";
    netsafe: "false";
} | {
    id: "umvh";
    name: "height";
    type: "unreal";
    netsafe: "false";
} | {
    id: "umvt";
    name: "type";
    type: "moveType";
    netsafe: "false";
} | {
    id: "upru";
    name: "properNamesUsed";
    type: "int";
    netsafe: "true";
} | {
    id: "uori";
    name: "orientationInterpolation";
    type: "int";
    netsafe: "false";
} | {
    id: "upat";
    name: "pathingMap";
    type: "pathingTexture";
    netsafe: "false";
} | {
    id: "upoi";
    name: "pointValue";
    type: "int";
    netsafe: "false";
} | {
    id: "upri";
    name: "priorityundefined";
    type: "int";
    netsafe: "false";
} | {
    id: "uprw";
    name: "propulsionWindowDegrees";
    type: "unreal";
    netsafe: "false";
} | {
    id: "urac";
    name: "race";
    type: "unitRace";
    netsafe: "false";
} | {
    id: "upaw";
    name: "placementRequiresWaterRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "utar";
    name: "targetedAs";
    type: "targetList";
    netsafe: "false";
} | {
    id: "umvr";
    name: "turnRate";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uarm";
    name: "armorTypeundefined";
    type: "armorType";
    netsafe: "false";
} | {
    id: "uble";
    name: "animationBlendTimeSeconds";
    type: "real";
    netsafe: "true";
} | {
    id: "uclb";
    name: "tintingColor3Blueundefined";
    type: "int";
    netsafe: "true";
} | {
    id: "ushb";
    name: "shadowTextureBuilding";
    type: "shadowTexture";
    netsafe: "true";
} | {
    id: "ucam";
    name: "categorizationCampaign";
    type: "bool";
    netsafe: "false";
} | {
    id: "utcc";
    name: "allowCustomTeamColor";
    type: "bool";
    netsafe: "true";
} | {
    id: "udro";
    name: "canDropItemsOnDeath";
    type: "bool";
    netsafe: "false";
} | {
    id: "uept";
    name: "elevationSamplePoints";
    type: "int";
    netsafe: "true";
} | {
    id: "uerd";
    name: "elevationSampleRadius";
    type: "real";
    netsafe: "true";
} | {
    id: "umdl";
    name: "modelFile";
    type: "model";
    netsafe: "true";
} | {
    id: "upor";
    name: "portraitModelFile";
    type: "model";
    netsafe: "true";
} | {
    id: "uver";
    name: "modelFileExtraVersions";
    type: "versionFlags";
    netsafe: "true";
} | {
    id: "ufrd";
    name: "fogOfWarSampleRadius";
    type: "real";
    netsafe: "true";
} | {
    id: "uclg";
    name: "tintingColor2Greenundefined";
    type: "int";
    netsafe: "true";
} | {
    id: "uhos";
    name: "displayAsNeutralHostile";
    type: "bool";
    netsafe: "false";
} | {
    id: "uine";
    name: "placeableInEditor";
    type: "bool";
    netsafe: "false";
} | {
    id: "umxp";
    name: "maximumPitchAngleDegrees";
    type: "real";
    netsafe: "true";
} | {
    id: "umxr";
    name: "maximumRollAngleDegrees";
    type: "real";
    netsafe: "true";
} | {
    id: "usca";
    name: "scalingValueundefined";
    type: "real";
    netsafe: "true";
} | {
    id: "unbm";
    name: "neutralBuildingShowsMinimapIcon";
    type: "bool";
    netsafe: "false";
} | {
    id: "uhhb";
    name: "heroHideHeroInterfaceIcon";
    type: "bool";
    netsafe: "false";
} | {
    id: "uhhm";
    name: "heroHideHeroMinimapDisplay";
    type: "bool";
    netsafe: "false";
} | {
    id: "uhhd";
    name: "heroHideHeroDeathMessage";
    type: "bool";
    netsafe: "false";
} | {
    id: "uhom";
    name: "hideMinimapDisplay";
    type: "bool";
    netsafe: "false";
} | {
    id: "uocc";
    name: "occluderHeight";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uclr";
    name: "tintingColor1Redundefined";
    type: "int";
    netsafe: "true";
} | {
    id: "urun";
    name: "animationRunSpeed";
    type: "real";
    netsafe: "false";
} | {
    id: "ussc";
    name: "selectionScale";
    type: "real";
    netsafe: "true";
} | {
    id: "uscb";
    name: "scaleProjectiles";
    type: "bool";
    netsafe: "true";
} | {
    id: "usew";
    name: "selectionCircleOnWater";
    type: "bool";
    netsafe: "true";
} | {
    id: "uslz";
    name: "selectionCircleHeight";
    type: "real";
    netsafe: "true";
} | {
    id: "ushh";
    name: "shadowImageHeight";
    type: "real";
    netsafe: "true";
} | {
    id: "ushr";
    name: "hasWaterShadow";
    type: "bool";
    netsafe: "false";
} | {
    id: "ushw";
    name: "shadowImageWidth";
    type: "real";
    netsafe: "true";
} | {
    id: "ushx";
    name: "shadowImageCenterX";
    type: "real";
    netsafe: "true";
} | {
    id: "ushy";
    name: "shadowImageCenterY";
    type: "real";
    netsafe: "true";
} | {
    id: "uspe";
    name: "categorizationSpecial";
    type: "bool";
    netsafe: "false";
} | {
    id: "utco";
    name: "teamColor";
    type: "teamColor";
    netsafe: "false";
} | {
    id: "utss";
    name: "hasTilesetSpecificData";
    type: "bool";
    netsafe: "false";
} | {
    id: "uubs";
    name: "groundTexture";
    type: "uberSplat";
    netsafe: "true";
} | {
    id: "ushu";
    name: "shadowImageUnit";
    type: "shadowImage";
    netsafe: "true";
} | {
    id: "usnd";
    name: "unitSoundSet";
    type: "unitSound";
    netsafe: "true";
} | {
    id: "uuch";
    name: "useClickHelper";
    type: "bool";
    netsafe: "true";
} | {
    id: "uwal";
    name: "animationWalkSpeed";
    type: "real";
    netsafe: "false";
} | {
    id: "uacq";
    name: "acquisitionRange";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua1t";
    name: "attack1AttackType";
    type: "attackType";
    netsafe: "false";
} | {
    id: "ua2t";
    name: "attack2AttackType";
    type: "attackType";
    netsafe: "false";
} | {
    id: "ubs1";
    name: "attack1AnimationBackswingPoint";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ubs2";
    name: "attack2AnimationBackswingPoint";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ucbs";
    name: "animationCastBackswing";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ucpt";
    name: "animationCastPoint";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua1c";
    name: "attack1CooldownTime";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua2c";
    name: "attack2CooldownTime";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udl1";
    name: "attack1DamageLossFactor";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udl2";
    name: "attack2DamageLossFactor";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua1d";
    name: "attack1DamageNumberOfDice";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2d";
    name: "attack2DamageNumberOfDice";
    type: "int";
    netsafe: "false";
} | {
    id: "ua1b";
    name: "attack1DamageBase";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2b";
    name: "attack2DamageBase";
    type: "int";
    netsafe: "false";
} | {
    id: "udp1";
    name: "attack1AnimationDamagePoint";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udp2";
    name: "attack2AnimationDamagePoint";
    type: "unreal";
    netsafe: "false";
} | {
    id: "udu1";
    name: "attack1DamageUpgradeAmount";
    type: "int";
    netsafe: "false";
} | {
    id: "udu2";
    name: "attack2DamageUpgradeAmount";
    type: "int";
    netsafe: "false";
} | {
    id: "ua1f";
    name: "attack1AreaOfEffectFullDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2f";
    name: "attack2AreaOfEffectFullDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "ua1h";
    name: "attack1AreaOfEffectMediumDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2h";
    name: "attack2AreaOfEffectMediumDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "uhd1";
    name: "attack1DamageFactorMedium";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uhd2";
    name: "attack2DamageFactorMedium";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uisz";
    name: "projectileImpactZSwimming";
    type: "unreal";
    netsafe: "true";
} | {
    id: "uimz";
    name: "projectileImpactZ";
    type: "unreal";
    netsafe: "true";
} | {
    id: "ulsz";
    name: "projectileLaunchZSwimming";
    type: "unreal";
    netsafe: "true";
} | {
    id: "ulpx";
    name: "projectileLaunchX";
    type: "unreal";
    netsafe: "true";
} | {
    id: "ulpy";
    name: "projectileLaunchY";
    type: "unreal";
    netsafe: "true";
} | {
    id: "ulpz";
    name: "projectileLaunchZ";
    type: "unreal";
    netsafe: "true";
} | {
    id: "uamn";
    name: "minimumAttackRange";
    type: "int";
    netsafe: "false";
} | {
    id: "ua1q";
    name: "attack1AreaOfEffectSmallDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2q";
    name: "attack2AreaOfEffectSmallDamage";
    type: "int";
    netsafe: "false";
} | {
    id: "uqd1";
    name: "attack1DamageFactorSmall";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uqd2";
    name: "attack2DamageFactorSmall";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua1r";
    name: "attack1Range";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2r";
    name: "attack2Range";
    type: "int";
    netsafe: "false";
} | {
    id: "urb1";
    name: "attack1RangeMotionBuffer";
    type: "unreal";
    netsafe: "false";
} | {
    id: "urb2";
    name: "attack2RangeMotionBuffer";
    type: "unreal";
    netsafe: "false";
} | {
    id: "uwu1";
    name: "attack1ShowUI";
    type: "bool";
    netsafe: "false";
} | {
    id: "uwu2";
    name: "attack2ShowUI";
    type: "bool";
    netsafe: "false";
} | {
    id: "ua1s";
    name: "attack1DamageSidesPerDie";
    type: "int";
    netsafe: "false";
} | {
    id: "ua2s";
    name: "attack2DamageSidesPerDie";
    type: "int";
    netsafe: "false";
} | {
    id: "usd1";
    name: "attack1DamageSpillDistance";
    type: "unreal";
    netsafe: "false";
} | {
    id: "usd2";
    name: "attack2DamageSpillDistance";
    type: "unreal";
    netsafe: "false";
} | {
    id: "usr1";
    name: "attack1DamageSpillRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "usr2";
    name: "attack2DamageSpillRadius";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ua1p";
    name: "attack1AreaOfEffectTargets";
    type: "targetList";
    netsafe: "false";
} | {
    id: "ua2p";
    name: "attack2AreaOfEffectTargets";
    type: "targetList";
    netsafe: "false";
} | {
    id: "utc1";
    name: "attack1MaximumNumberOfTargets";
    type: "int";
    netsafe: "false";
} | {
    id: "utc2";
    name: "attack2MaximumNumberOfTargets";
    type: "int";
    netsafe: "false";
} | {
    id: "ua1g";
    name: "attack1TargetsAllowed";
    type: "targetList";
    netsafe: "false";
} | {
    id: "ua2g";
    name: "attack2TargetsAllowed";
    type: "targetList";
    netsafe: "false";
} | {
    id: "uaen";
    name: "attacksEnabled";
    type: "attackBits";
    netsafe: "false";
} | {
    id: "ua1w";
    name: "attack1WeaponType";
    type: "weaponType";
    netsafe: "false";
} | {
    id: "ua2w";
    name: "attack2WeaponType";
    type: "weaponType";
    netsafe: "false";
} | {
    id: "ucs1";
    name: "attack1WeaponSound";
    type: "combatSound";
    netsafe: "false";
} | {
    id: "ucs2";
    name: "attack2WeaponSound";
    type: "combatSound";
    netsafe: "false";
} | {
    id: "uabs";
    name: "normalSkin";
    type: "abilitySkinList";
    netsafe: "true";
} | {
    id: "uhas";
    name: "heroSkin";
    type: "abilitySkinList";
    netsafe: "true";
})[];
export declare enum Units {
    Abomination = "uabo",
    AbominationCinematic = "uabc",
    Acolyte = "uaco",
    AdvancedBoulderTower = "nbt2",
    AdvancedColdTower = "ndt2",
    AdvancedDeathTower = "ntx2",
    AdvancedEnergyTower = "net2",
    AdvancedFlameTower = "nft2",
    Albatross = "nalb",
    Alchemist = "Nalc",
    AlchemistMorphLevel1 = "Nalm",
    AlchemistMorphLevel2 = "Nal2",
    AlchemistMorphLevel3 = "Nal3",
    AltarOfDarkness = "uaod",
    AltarOfElders = "eate",
    AltarOfKings = "halt",
    AltarOfStorms = "oalt",
    AltarOfTheDepths = "nnad",
    AncientHydra = "nahy",
    AncientOfLore = "eaoe",
    AncientOfWar = "eaom",
    AncientOfWind = "eaow",
    AncientOfWonders = "eden",
    AncientProtector = "etrp",
    AncientSasquatch = "nsqa",
    AncientWendigo = "nwna",
    ApprenticeWizard = "nwiz",
    ArachnathidEarthBorer = "nane",
    ArcaneObservatory = "haro",
    ArcaneSanctum = "hars",
    ArcaneTower = "hatw",
    ArcaneVault = "hvlt",
    Archer = "earc",
    Archer1 = "nhea",
    Archmage = "Hamg",
    Archmage1 = "Hant",
    Archmage2 = "Hjai",
    Assassin = "nass",
    AvatarOfVengeance = "espv",
    Baine = "obai",
    Bandit = "nban",
    BanditLord = "nbld",
    Banshee = "uban",
    BarbedArachnathid = "nanb",
    BarbedArachnathid1 = "nanm",
    Barracks = "hbar",
    Barracks1 = "obar",
    BarrowDen = "nbwd",
    Batrider = "otbr",
    BattleGolem = "narg",
    BearLevel1 = "ngz1",
    Beastiary = "obea",
    Beastmaster = "Nbst",
    Beastmaster1 = "Orex",
    BerserkElemental = "nelb",
    BerserkQuilbeastLevel4 = "nqb4",
    BerserkWildkin = "nowk",
    Berserker = "otbk",
    BlackCitadel = "unp2",
    BlackDragon = "nbwm",
    BlackDragonRoost = "ndrk",
    BlackDragonWhelp = "nbdr",
    BlackDrake = "nbdk",
    BlackSpider = "nspb",
    Blacksmith = "hbla",
    Blademaster = "Obla",
    Blademaster1 = "Nbbc",
    Blademaster2 = "Ogrh",
    Blademaster3 = "Osam",
    BlademasterPossessed = "Opgh",
    BloodElfEngineer = "nbee",
    BloodElfLieutenant = "nbel",
    BloodMage = "Hblm",
    BloodMage1 = "Hkal",
    BloodWizard = "nwzw",
    Bloodfiend = "nfgb",
    BlueDragon = "nadr",
    BlueDragonRoost = "ndru",
    BlueDragonWhelp = "nadw",
    BlueDragonspawnApprentice = "nbda",
    BlueDragonspawnMeddler = "nbdm",
    BlueDragonspawnOverseer = "nbdo",
    BlueDragonspawnSorcerer = "nbds",
    BlueDragonspawnWarrior = "nbdw",
    BlueDrake = "nadk",
    Boneyard = "ubon",
    BookOfSummoningPedestal = "nbsm",
    BoulderTower = "nbt1",
    Brewmaster = "Npbm",
    Brewmaster1 = "Nsjs",
    Brigand = "nbrg",
    BronzeDragon = "nbzd",
    BronzeDragonRoost = "ndrz",
    BronzeDragonWhelp = "nbzw",
    BronzeDrake = "nbzk",
    BroodMother = "nsbm",
    BurningArcher = "nskf",
    Burrow = "otrb",
    BurrowedBarbedArachnathid = "nbnb",
    BurrowedCarrionBeetleLevel2 = "ucsB",
    BurrowedCarrionBeetleLevel3 = "ucsC",
    BurrowedCryptFiend = "ucrm",
    CannonTower = "hctw",
    Captain = "hcth",
    CarrionBeetleLevel1 = "ucs1",
    CarrionBeetleLevel2 = "ucs2",
    CarrionBeetleLevel3 = "ucs3",
    Castle = "hcas",
    CentaurArcher = "ncea",
    CentaurDrudge = "ncer",
    CentaurImpaler = "ncim",
    CentaurKhan = "ncnk",
    CentaurOutrunner = "ncen",
    CentaurSorcerer = "ncks",
    CentaurTent = "ncnt",
    CentaurTent2 = "nct1",
    CentaurTent3 = "nct2",
    Chaplain = "nchp",
    Chicken = "nech",
    Child = "nvlk",
    Child2 = "nvk2",
    Chimaera = "echm",
    ChimaeraRoost = "edos",
    CircleOfPower = "ncop",
    CircleOfPowerLarge = "ncp3",
    CircleOfPowerMedium = "ncp2",
    CityBuilding0 = "ncb0",
    CityBuilding1 = "ncb1",
    CityBuilding10 = "ncba",
    CityBuilding11 = "ncbb",
    CityBuilding12 = "ncbc",
    CityBuilding13 = "ncbd",
    CityBuilding14 = "ncbe",
    CityBuilding15 = "ncbf",
    CityBuilding2 = "ncb2",
    CityBuilding3 = "ncb3",
    CityBuilding4 = "ncb4",
    CityBuilding5 = "ncb5",
    CityBuilding6 = "ncb6",
    CityBuilding7 = "ncb7",
    CityBuilding8 = "ncb8",
    CityBuilding9 = "ncb9",
    ClockwerkGoblin = "ncg1",
    ClockwerkGoblin1 = "ncg2",
    ClockwerkGoblin2 = "ncg3",
    ClockwerkGoblin3 = "ncgb",
    ColdTower = "ndt1",
    CoralBed = "nnfm",
    CorruptedAncientOfWar = "ncaw",
    CorruptedAncientProtector = "ncap",
    CorruptedMoonWell = "ncmw",
    CorruptedTreant = "nenc",
    CorruptedTreeOfAges = "ncta",
    CorruptedTreeOfEternity = "ncte",
    CorruptedTreeOfLife = "nctl",
    Couatl = "nwgs",
    Crab = "ncrb",
    Crypt = "usep",
    CryptFiend = "ucry",
    CryptLord = "Ucrl",
    CryptLord1 = "Uanb",
    CrystalArachnathid = "nanc",
    DalaranGuardTower = "ndgt",
    DalaranMutant = "ndmu",
    DalaranReject = "ndrj",
    DarkKnight = "Hlgr",
    DarkMinion = "ndr2",
    DarkRanger = "Nbrn",
    DarkRanger1 = "Usyl",
    DarkTroll = "ndtr",
    DarkTrollBerserker = "ndtb",
    DarkTrollHighPriest = "ndth",
    DarkTrollShadowPriest = "ndtp",
    DarkTrollTrapper = "ndtt",
    DarkTrollWarlord = "ndtw",
    DarkWizard = "nwzd",
    DeathKnight = "Udea",
    DeathKnightEvil = "Uear",
    DeathRevenant = "nrvd",
    DeathTower = "ntt1",
    Deceiver = "nhdc",
    DeeplordRevenant = "nlrv",
    DefenderGolem = "nggd",
    DefiledFountainOfLife = "ndfl",
    Demigod = "Ecen",
    Demolisher = "ocat",
    DemonGate = "ndmg",
    DemonHunter = "Edem",
    DemonHunter1 = "Eill",
    DemonHunterDemonForm = "Edmm",
    DemonHunterDemonForm1 = "Eidm",
    DemonHunterEvil = "Eevi",
    DemonHunterMorphed = "Eilm",
    DemonHunterMorphedEvil = "Eevm",
    Destroyer = "ubsp",
    DiabloCart = "nccd",
    DimensionalGateFacingSoutheast = "ndke",
    DimensionalGateFacingSouthwest = "ndkw",
    DireFrostWolf = "nwwd",
    DireMammoth = "nmdr",
    DireQuilbeastLevel2 = "nqb2",
    DireWolf = "nwld",
    DireWolfLevel2 = "osw2",
    DiseaseCloud = "uplg",
    Dog = "ndog",
    DoomGuardStandard = "nbal",
    DoomGuardSummoned = "nba2",
    DraeneiBarracks = "ndh3",
    DraeneiChieftainsHut = "ndch",
    DraeneiDarkslayer = "ndrd",
    DraeneiDemolisher = "ncat",
    DraeneiDisciple = "ndrm",
    DraeneiGuardian = "ndrf",
    DraeneiHarbinger = "ndrh",
    DraeneiHaven = "ndh2",
    DraeneiHut = "ndh0",
    DraeneiHut2 = "ndh1",
    DraeneiLaborer = "ndrl",
    DraeneiProtector = "ndrp",
    DraeneiSeer = "ndrs",
    DraeneiStalker = "ndrt",
    DraeneiVindicator = "ndrn",
    DraeneiWatcher = "ndrw",
    DragonHawk = "nws1",
    DragonRoost = "ndrb",
    DragonTurtle = "nhyc",
    DragonTurtle1 = "ntrd",
    DragonhawkRider = "hdhw",
    Drakthul = "odkt",
    Dreadlord = "Udre",
    Dreadlord1 = "Ubal",
    Dreadlord2 = "Udth",
    Dreadlord3 = "Umal",
    Dreadlord4 = "Utic",
    Dreadlord5 = "Uvar",
    Dreadlord6 = "Uvng",
    DruidOfTheClawBearForm = "edcm",
    DruidOfTheClawNightElfForm = "edoc",
    DruidOfTheTalonNightElfForm = "edot",
    DruidOfTheTalonStormCrowForm = "edtm",
    Dryad = "edry",
    DuneWorm = "ndwm",
    DwarfCart = "nccr",
    Earth = "npn3",
    Earth1 = "npn6",
    EarthFuryTower = "negf",
    ElderHydra = "nehy",
    ElderJungleStalker = "njga",
    ElderSage = "Naka",
    ElderSasquatch = "nsqe",
    ElderVoidwalker = "nvde",
    ElderWendigo = "nwnr",
    Emissary = "nemi",
    EnchantedGemstoneObelisk = "ngob",
    EnergyTower = "net1",
    Enforcer = "nenf",
    EngineerGazlowe = "negz",
    EnragedElemental = "nele",
    EnragedJungleStalker = "njgb",
    EnragedWildkin = "nowe",
    EntangledGoldMine = "egol",
    EredarDiabolist = "nerd",
    EredarSorcerer = "ners",
    EredarWarlock = "nerw",
    FacelessOneDeathbringer = "nfod",
    FacelessOneTerror = "nfot",
    FacelessOneTrickster = "nfor",
    FaerieDragon = "efdr",
    FallenPriest = "nhfp",
    FarSeer = "Ofar",
    FarSeer1 = "Odrt",
    FarSeer2 = "Othr",
    FarSeerUnmounted = "Oths",
    Farm = "hhou",
    FelBeast = "npfl",
    FelBoar = "nfbr",
    FelBurrow = "ocbw",
    FelOrcGrunt = "nchg",
    FelOrcKodoBeast = "nckb",
    FelOrcRaider = "nchr",
    FelOrcWarlock = "nchw",
    FelPeon = "ncpn",
    FelRavager = "npfm",
    FelStalker = "nfel",
    Felguard = "nfgu",
    Fire = "npn1",
    Fire1 = "npn4",
    FireRevenant = "nrvf",
    Firelord = "Nfir",
    FlameTower = "nft1",
    FleshGolem = "nfgl",
    FlyingMachine = "hgyr",
    FlyingSheep = "nshf",
    Footman = "hfoo",
    ForestSpider = "nspg",
    ForestTroll = "nftr",
    ForestTrollBerserker = "nftb",
    ForestTrollHighPriest = "nfsh",
    ForestTrollHut = "nfh0",
    ForestTrollHut2 = "nfh1",
    ForestTrollShadowPriest = "nfsp",
    ForestTrollTrapper = "nftt",
    ForestTrollWarlord = "nftk",
    ForgottenOne = "nfgo",
    Fortress = "ofrt",
    FountainOfBlood = "nbfl",
    FountainOfHealth = "nfoh",
    FountainOfMana = "nmoo",
    FountainOfPower = "nfnp",
    Frog = "nfro",
    FrostRevenant = "nrvs",
    FrostWolf = "nwwf",
    FrostWyrm = "ufro",
    FrostmournePedestal = "nfrm",
    FruitStand = "nfrt",
    Furbolg = "nfrl",
    FurbolgChampion = "nfrg",
    FurbolgElderShaman = "nfre",
    FurbolgHut = "nfr2",
    FurbolgHut2 = "nfr1",
    FurbolgShaman = "nfrs",
    FurbolgTracker = "nfrb",
    FurbolgUrsaWarrior = "nfra",
    GargantuanSeaTurtle = "ntrg",
    Gargoyle = "ugar",
    Garthok = "ogrk",
    Ghost = "ngh1",
    GhostlyArchmage = "Hgam",
    Ghoul = "ugho",
    GiantFrostWolf = "nwwg",
    GiantPolarBear = "nplg",
    GiantSeaTurtle = "ntrt",
    GiantSkeletonWarrior = "nskg",
    GiantSpider = "nsgt",
    GiantWolf = "nwlg",
    GlaiveThrower = "ebal",
    Gnoll = "ngno",
    GnollAssassin = "ngns",
    GnollBrute = "ngnb",
    GnollHut = "ngnh",
    GnollHut2 = "ngt2",
    GnollOverseer = "ngnv",
    GnollPoacher = "ngna",
    GnollWarden = "ngnw",
    GnollWarlord = "ngow",
    GoblinBlaster = "ngbl",
    GoblinLaboratory = "ngad",
    GoblinLandMine = "nglm",
    GoblinMerchant = "ngme",
    GoblinShipyard = "nshp",
    GoldMine = "ngol",
    GrainWarehouse = "ngwr",
    GraniteGolem = "nggr",
    Graveyard = "ugrv",
    GreatHall = "ogre",
    GreaterDarkMinion = "ndr3",
    GreaterSpiritBeastLevel3 = "nsw3",
    GreaterVoidwalker = "nvdg",
    GreenDragon = "ngrd",
    GreenDragonRoost = "ndrg",
    GreenDragonWhelp = "ngrw",
    GreenDrake = "ngdk",
    Grunt = "ogru",
    GryphonAviary = "hgra",
    GryphonRider = "hgry",
    GuardDog = "ngog",
    GuardTower = "hgtw",
    GuardianGolem = "nggg",
    HallsOfTheDead = "unp1",
    HarpyNest = "nhns",
    HarpyNest2 = "nhn2",
    HarpyQueen = "nhrq",
    HarpyRogue = "nhrr",
    HarpyScout = "nhar",
    HarpyStormHag = "nhrh",
    HarpyWindwitch = "nhrw",
    HauntedGoldMine = "ugol",
    HawkLevel1 = "nwe1",
    Headhunter = "ohun",
    HealingWard = "ohwd",
    Heretic = "nhhr",
    HermitCrab = "nhmc",
    HighElfArchmage = "Haah",
    HighElfFemale = "nhef",
    HighElfMale = "nhem",
    HighElvenBarracks = "nheb",
    HighElvenFarm = "nefm",
    HighElvenFarm1 = "nef0",
    HighElvenFarm2 = "nef1",
    HighElvenFarm3 = "nef2",
    HighElvenFarm4 = "nef3",
    HighElvenFarm5 = "nef4",
    HighElvenFarm6 = "nef5",
    HighElvenFarm7 = "nef6",
    HighElvenFarm8 = "nef7",
    HighElvenGuardTower = "negt",
    HighKing = "Hssa",
    Hippogryph = "ehip",
    HippogryphRider = "ehpr",
    HornOfCenariusPedestal = "nhcn",
    HumanBattleship = "hbsh",
    HumanFrigate = "hdes",
    HumanShipyard = "hshy",
    HumanTransportShip = "hbot",
    HuntersHall = "edob",
    Huntress = "esen",
    Hydra = "nhyd",
    HydraHatchling = "nhyh",
    Hydralisk = "zhyd",
    Hydromancer = "nhym",
    IceRevenant = "nrvi",
    IceTroll = "nitr",
    IceTrollBerserker = "nits",
    IceTrollHighPriest = "nith",
    IceTrollHut = "nth1",
    IceTrollHut2 = "nth0",
    IceTrollPriest = "nitp",
    IceTrollTrapper = "nitt",
    IceTrollWarlord = "nitw",
    IcecrownObelisk = "nico",
    IcetuskMammoth = "nmit",
    IcyTreasureBox = "nitb",
    InfectedGranary = "ngni",
    Infernal = "ninf",
    InfernalContraption = "ninc",
    InfernalJuggernaut = "nina",
    InfernalMachine = "ninm",
    JailorKassan = "njks",
    JungleStalker = "njg1",
    Keep = "hkee",
    KeeperOfTheGrove = "Ekee",
    KeeperOfTheGrove1 = "Efur",
    KeeperOfTheGrove2 = "Ekgg",
    KeeperOfTheGrove3 = "Emfr",
    KeeperOfTheGrove4 = "Emns",
    KelThuzadGhost = "uktg",
    KelThuzadNecromancer = "uktn",
    Knight = "hkni",
    Kobold = "nkob",
    KoboldGeomancer = "nkog",
    KoboldShoveler = "zshv",
    KoboldTaskmaster = "nkol",
    KoboldTunneler = "nkot",
    KodoBeast = "okod",
    KodoBeastRiderless = "oosc",
    LavaSpawnLevel1 = "nlv1",
    LavaSpawnLevel2 = "nlv2",
    LavaSpawnLevel3 = "nlv3",
    LesserDarkMinion = "ndr1",
    LesserSpiritBeastLevel1 = "nsw1",
    LesserVoidwalker = "nvdl",
    Lich = "Ulic",
    LichKingCinematicCampaignUnit = "nzlc",
    LichLich = "Uktl",
    LichLichCinematic = "Uclc",
    LightningLizard = "nltl",
    LightningRevenant = "nrvl",
    Locust = "uloc",
    LumberMill = "hlum",
    MagicVault = "nmgv",
    MagnataurDestroyer = "nmgd",
    MagnataurReaver = "nmgr",
    MagnataurWarrior = "nmgw",
    MaidenOfPain = "ndqp",
    MakruraDeepseer = "nlds",
    MakruraPooldweller = "nlpd",
    MakruraPrawn = "nlpr",
    MakruraSnapper = "nlsn",
    MakruraTidalLord = "nlkl",
    MakruraTidecaller = "nltc",
    Mammoth = "nmam",
    Marine = "zmar",
    Marketplace = "nmrk",
    MasterSwordsman = "Hddt",
    Mathog = "omtg",
    MeatWagon = "umtw",
    Medivh = "nmed",
    MedivhRavenForm = "nmdm",
    MercenaryCampAshenvale = "nmr5",
    MercenaryCampBarrens = "nmr4",
    MercenaryCampBlackCitadel = "nmrf",
    MercenaryCampCityscape = "nmr8",
    MercenaryCampDalaran = "nmr9",
    MercenaryCampDungeon = "nmra",
    MercenaryCampFelwood = "nmr6",
    MercenaryCampIcecrownGlacier = "nmrd",
    MercenaryCampLordaeronFall = "nmr2",
    MercenaryCampLordaeronSummer = "nmer",
    MercenaryCampLordaeronWinter = "nmr3",
    MercenaryCampNorthrend = "nmr7",
    MercenaryCampOutland = "nmre",
    MercenaryCampSunkenRuins = "nmrc",
    MercenaryCampUnderground = "nmrb",
    MercenaryCampVillage = "nmr0",
    Militia = "hmil",
    Misha = "nmsh",
    MishaLevel1 = "ngzc",
    MishaLevel2 = "ngzd",
    MishaLevel3 = "ngza",
    MishaLevel4 = "ngz4",
    MonsterLure = "nlur",
    MoonWell = "emow",
    MortarTeam = "hmtm",
    MossCoveredGraniteGolem = "nggm",
    MountainGiant = "emtg",
    MountainKing = "Hmkg",
    MountainKing1 = "Hmbr",
    MudGolem = "ngrk",
    MurgulBloodGill = "nmbg",
    MurgulCliffrunner = "nmcf",
    MurgulHut0 = "nmg0",
    MurgulHut1 = "nmg1",
    MurgulMarauder = "nmrv",
    MurgulReaver = "nnmg",
    MurgulShadowcaster = "nmsc",
    MurgulSlave = "nmpe",
    MurgulSnarecaster = "nmsn",
    MurgulTidewarrior = "nmtw",
    MurlocFlesheater = "nmfs",
    MurlocHuntsman = "nmrr",
    MurlocHut0 = "nmh0",
    MurlocHut1 = "nmh1",
    MurlocHut2 = "nmg2",
    MurlocMutant = "nmmu",
    MurlocNightcrawler = "nmrm",
    MurlocPlaguebearer = "nmpg",
    MurlocSorcerer = "Nmsr",
    MurlocTiderunner = "nmrl",
    NagaMyrmidon = "nmyr",
    NagaRoyalGuard = "nnrg",
    NagaSiren = "nnsw",
    Naisha = "ensh",
    Nazgrel = "onzg",
    Necromancer = "unec",
    Necropolis = "unpl",
    NerubianQueen = "nnwq",
    NerubianSeer = "nnwr",
    NerubianSpiderLord = "nnws",
    NerubianTower = "uzg2",
    NerubianWarrior = "nnwa",
    NerubianWebspinner = "nnwl",
    NerubianZiggurat = "nnzg",
    NetherDragon = "nndr",
    NetherDragonHatchling = "nnht",
    NetherDragonRoost = "ndro",
    NetherDrake = "nndk",
    NightElfBattleship = "ebsh",
    NightElfFishingVillageCrestedSoutheastFacing = "nfv4",
    NightElfFishingVillageCrestedSouthwestFacing = "nfv1",
    NightElfFishingVillageOneStory = "nfv2",
    NightElfFishingVillageRuinedCrested = "nvr2",
    NightElfFishingVillageRuinedOneStory = "nvr1",
    NightElfFishingVillageRuinedTwoStory = "nvr0",
    NightElfFishingVillageTwoStorySoutheastFacing = "nfv3",
    NightElfFishingVillageTwoStorySouthwestFacing = "nfv0",
    NightElfFrigate = "edes",
    NightElfRunner = "enec",
    NightElfShipyard = "eshy",
    NightElfTransportShip = "etrs",
    ObsidianStatue = "uobs",
    OgreLord = "nogl",
    OgreMagi = "nomg",
    OgreMauler = "nogm",
    OgreWarrior = "nogr",
    OrcCart = "ncco",
    OrcFrigate = "odes",
    OrcJuggernaught = "ojgn",
    OrcJuggernaughtCinematic = "zjug",
    OrcShipyard = "oshy",
    OrcTransportShip = "obot",
    OrcWarchief = "owar",
    OrcWarlock = "nw2w",
    Overlord = "nfov",
    OverlordArachnathid = "nano",
    OwlScoutLevel1 = "nowl",
    OwlScoutLevel2 = "now2",
    OwlScoutLevel3 = "now3",
    PackHorse = "hrdh",
    Paladin = "Hpal",
    Paladin1 = "Hapm",
    Paladin2 = "Hart",
    Paladin3 = "Hdgo",
    Paladin4 = "Hhkl",
    Paladin5 = "Hmgd",
    Paladin6 = "Hpb1",
    Paladin7 = "Hpb2",
    Paladin8 = "Huth",
    PaladinWieldingFrostmourne = "Harf",
    Peasant = "hpea",
    Penguin = "npng",
    PenguinWaterborne = "npnw",
    Peon = "opeo",
    Phoenix = "hphx",
    PhoenixEgg = "hpxe",
    Pig = "npig",
    PigFarm = "npgf",
    PitLord = "Nplh",
    PitLord1 = "Nmag",
    PitLord2 = "Nman",
    PitLord3 = "Npld",
    PlagueTreant = "nepl",
    PocketFactoryLevel1 = "nfac",
    PocketFactoryLevel2 = "nfa1",
    PocketFactoryLevel3 = "nfa2",
    PoisonTreant = "nenp",
    PolarBear = "nplb",
    PolarFurbolg = "nfpl",
    PolarFurbolgChampion = "nfpc",
    PolarFurbolgElderShaman = "nfpe",
    PolarFurbolgShaman = "nfps",
    PolarFurbolgTracker = "nfpt",
    PolarFurbolgUrsaWarrior = "nfpu",
    Portal = "hprt",
    PowerGenerator = "npgr",
    Priest = "hmpr",
    PriestessOfTheMoon = "Emoo",
    PriestessOfTheMoon1 = "Etyr",
    PrimalPandaren = "nfrp",
    PrisonWagon = "eilw",
    QueenOfSuffering = "ndqs",
    QuilbeastLevel1 = "nqb1",
    Quillboar = "nrzt",
    QuillboarHunter = "nqbh",
    Rabbit = "necr",
    Raccoon = "nrac",
    RagingBearLevel2 = "ngz2",
    RagingQuilbeastLevel3 = "nqb3",
    Raider = "orai",
    Ranger = "Hvwd",
    Ranger1 = "Hjnd",
    Rat = "nrat",
    RazormaneBrute = "nrzb",
    RazormaneChieftain = "nrzg",
    RazormaneMedicineMan = "nrzm",
    RazormaneScout = "nrzs",
    RedDragon = "nrwm",
    RedDragonRoost = "ndrr",
    RedDragonWhelp = "nrdk",
    RedDrake = "nrdr",
    ReefElemental = "nrel",
    RenegadeWizard = "nwzg",
    ResurrectionStoneSoutheastFacing = "nbse",
    ResurrectionStoneSouthwestFacing = "nbsw",
    RevenantOfTheDepths = "ndrv",
    RevenantOfTheSeas = "nsrv",
    RevenantOfTheTides = "ntrv",
    RiderlessHorse = "hhdl",
    Rifleman = "hrif",
    RockGolem = "ngst",
    Rogue = "nrog",
    RogueWizard = "nwzr",
    RunnerHighElf = "hrrh",
    SacrificialPit = "usap",
    Salamander = "nslr",
    Salamander1 = "ndsa",
    SalamanderHatchling = "nslh",
    SalamanderLord = "nsll",
    SalamanderVizier = "nslv",
    Sammy = "zsmc",
    Sapper = "ngsp",
    SapphironLiving = "ubdr",
    SapphironUndead = "ubdd",
    Sasquatch = "nsqt",
    SasquatchOracle = "nsqo",
    Satyr = "nsty",
    SatyrHellcaller = "nsth",
    SatyrShadowdancer = "nsts",
    SatyrSoulstealer = "nstl",
    SatyrTrickster = "nsat",
    ScoutTower = "hwtw",
    SeaElemental = "nsel",
    SeaGiant = "nsgn",
    SeaGiantBehemoth = "nsgb",
    SeaGiantHunter = "nsgh",
    SeaTurtle = "ntrs",
    SeaTurtleHatchling = "ntrh",
    SeaWitch = "Nngs",
    SeaWitch1 = "Hvsh",
    SeaWitch2 = "Nswt",
    Seal = "nsea",
    Searinox = "nser",
    SeersDen = "ndh4",
    Sentry = "nwat",
    SentryWard = "oeye",
    SerpentWardLevel1 = "osp1",
    SerpentWardLevel2 = "osp2",
    SerpentWardLevel3 = "osp3",
    SerpentWardLevel4 = "osp4",
    Shade = "ushd",
    ShadowHunter = "Oshd",
    ShadowHunter1 = "Orkn",
    ShadowWolfLevel3 = "osw3",
    Shaman = "oshm",
    Shandris = "eshd",
    Sheep = "nshe",
    SheepAmphibious = "nsha",
    SheepWaterborne = "nshw",
    Ship = "nbsp",
    Shredder = "ngir",
    Shrine = "nshr",
    ShrineOfAzshara = "nnsa",
    SiegeEngine = "hmtt",
    SiegeEngineBarrage = "hrtt",
    SiegeGolem = "nsgg",
    SkeletalMage = "uskm",
    SkeletalMarksman = "nskm",
    SkeletalOrc = "nsko",
    SkeletalOrcChampion = "nsoc",
    SkeletalOrcGrunt = "nsog",
    SkeletonArcher = "nsca",
    SkeletonArcher1 = "nska",
    SkeletonWarrior = "uske",
    SkeletonWarrior1 = "nsce",
    SkeletonWarrior2 = "nske",
    Skink = "nskk",
    SkyBarge = "uarb",
    SkyFuryTower = "negm",
    Slaughterhouse = "uslh",
    SlaveMaster = "owad",
    SludgeFlinger = "nslf",
    SludgeMinion = "nslm",
    SludgeMonstrosity = "nsln",
    SnapDragon = "nsnp",
    SnarlmaneTheBloodgorger = "ngos",
    SnowyOwl = "nsno",
    Sorceress = "hsor",
    SpawningGrounds = "nnsg",
    Spellbreaker = "hspt",
    Spider = "nspr",
    SpiderCrabBehemoth = "nsc3",
    SpiderCrabLimbripper = "nsc2",
    SpiderCrabShorecrawler = "nscb",
    Spiderling = "nspd",
    SpiritBearLevel3 = "ngz3",
    SpiritBeastLevel2 = "nsw2",
    SpiritHawkLevel3 = "nwe3",
    SpiritLodge = "osld",
    SpiritOfVengeance = "even",
    SpiritPig = "nspp",
    SpiritTower = "uzg1",
    SpiritWalker = "ospw",
    SpiritWalkerEthereal = "ospm",
    SpiritWindRider = "oswy",
    SpiritWolfLevel1 = "osw1",
    SpittingSpider = "nssp",
    Stag = "nder",
    StasisTrap = "otot",
    StoneFormGargoyle = "ugrm",
    StonemaulMagi = "nogn",
    StonemaulOgre = "nogo",
    StonemaulWarchief = "noga",
    Storm = "npn2",
    Storm1 = "npn5",
    StormWyrm = "nstw",
    StormreaverApprentice = "nsra",
    StormreaverHermit = "nsrh",
    StormreaverNecrolyte = "nsrn",
    StormreaverWarlock = "nsrw",
    Stronghold = "ostr",
    SubmergedNagaMyrmidon = "nmys",
    SubmergedNagaRoyalGuard = "nnrs",
    SubmergedSnapDragon = "nsbs",
    Succubus = "ndqn",
    SummonedPrawn = "nlps",
    Summoner = "nnsu",
    SupportColumn = "nspc",
    Swordsman = "hhes",
    SylvanasWindrunnerBanshee = "uswb",
    Tauren = "otau",
    TaurenChieftain = "Otch",
    TaurenChieftain1 = "Ocbh",
    TaurenChieftainCinematic = "Otcc",
    TaurenChieftainExpansion = "Ocb2",
    TaurenTent = "ntnt",
    TaurenTent2 = "ntt2",
    TaurenTotem = "otto",
    Tavern = "ntav",
    TempleOfTheDamned = "utod",
    TempleOfTides = "nntt",
    Tent = "nten",
    Tent2 = "ntn2",
    Tent3 = "ntn3",
    Tentacle = "nfgt",
    TerranMarine = "zcso",
    Tharifas = "nthr",
    ThunderHawkLevel2 = "nwe2",
    ThunderLizard2 = "nthl",
    TidalGuardian = "nntg",
    TimberWolf = "nwlt",
    Tinker = "Nrob",
    Tinker1 = "Ntin",
    TombOfRelics = "utom",
    Tornado = "ntor",
    TownHall = "htow",
    TransportShip = "nbot",
    Treant = "efon",
    TreeOfAges = "etoa",
    TreeOfEternity = "etoe",
    TreeOfLife = "etol",
    TuskarrChieftain = "ntkc",
    TuskarrFighter = "ntkf",
    TuskarrHealer = "ntkh",
    TuskarrSorcerer = "ntks",
    TuskarrSpearman = "ntka",
    TuskarrTrapper = "ntkt",
    TuskarrWarrior = "ntkw",
    UnbrokenDarkhunter = "nubk",
    UnbrokenDarkweaver = "nubw",
    UnbrokenRager = "nubr",
    UndeadBattleship = "uubs",
    UndeadCart = "nccu",
    UndeadFrigate = "udes",
    UndeadShipyard = "ushp",
    UndeadTransportShip = "ubot",
    VileTemptress = "ndqt",
    VileTormentor = "ndqv",
    VillagerFemale = "nvlw",
    VillagerMale = "nvil",
    VillagerMale2 = "nvl2",
    Voidwalker = "nvdw",
    Voljin = "ovlj",
    VoodooLounge = "ovln",
    Vulture = "nvul",
    Wagon = "hbew",
    WarGolem = "nwrg",
    WarMill = "ofor",
    WarWagon = "nwar",
    Warden = "Ewar",
    Warden1 = "Ewrd",
    Warden2 = "nssn",
    Warlock = "Nklj",
    Warlock1 = "Ogld",
    Warlock2 = "Uwar",
    WarlockCinematic = "Nkjx",
    WarriorArachnathid = "nanw",
    WatchTower = "owtw",
    WatcherWard = "nwad",
    WaterElementalLevel1 = "hwat",
    WaterElementalLevel2 = "hwt2",
    WaterElementalLevel3 = "hwt3",
    WateryMinionLevel1 = "ncfs",
    WateryMinionLevel2 = "ntws",
    WateryMinionLevel3 = "nsns",
    WayGate = "nwgt",
    Wendigo = "nwen",
    WendigoShaman = "nwns",
    Wildkin = "nowb",
    WindRider = "owyv",
    WindRiderCage1 = "nwc1",
    WindRiderCage2 = "nwc2",
    WindRiderCage3 = "nwc3",
    WindRiderCage4 = "nwc4",
    WindRiderRiderless = "ownr",
    Wisp = "ewsp",
    WitchDoctor = "odoc",
    WorkerBloodElf = "nhew",
    Workshop = "harm",
    Wraith = "ngh2",
    Zeppelin = "nzep",
    Zergling = "zzrg",
    Ziggurat = "uzig",
    Zombie = "nzom",
    ZombieFemale = "nzof",
    ZoneIndicatorCustomCampaign = "nzin"
}
export declare class UnitContainer extends Container<Unit> {
    game: Readonly<{
        [key in Units]: Readonly<Unit>;
    }>;
}
