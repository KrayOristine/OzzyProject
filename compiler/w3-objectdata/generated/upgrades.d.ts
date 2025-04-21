import { IDs, Container } from '../container';
export interface Upgrade extends IDs {
    name: string;
    editorSuffix: string;
    race: string;
    tooltip: string;
    tooltipExtended: string;
    hotkey: string;
    buttonPositionX: number;
    buttonPositionY: number;
    icon: string;
    class: string;
    levels: number;
    goldBase: number;
    goldIncrement: number;
    lumberBase: number;
    lumberIncrement: number;
    timeBase: number;
    timeIncrement: number;
    effect1: string;
    effect1PercentS: number;
    effect1PercentSMod: number;
    effect1PercentSCode: string;
    effect2: string;
    effect2PercentS: number;
    effect2PercentSMod: number;
    effect2PercentSCode: string;
    effect3: string;
    effect3PercentS: number;
    effect3PercentSMod: number;
    effect3PercentSCode: string;
    effect4: string;
    effect4PercentS: number;
    effect4PercentSMod: number;
    effect4PercentSCode: string;
    transferWithUnitOwnership: boolean;
    requirements: string;
    requirementsLevels: string;
    appliesToAllUnits: boolean;
}
export declare const UpgradeProps: ({
    id: "gnam";
    name: "name";
    type: "string";
    netsafe: "true";
} | {
    id: "gnsf";
    name: "editorSuffix";
    type: "string";
    netsafe: "true";
} | {
    id: "grac";
    name: "race";
    type: "unitRace";
    netsafe: "false";
} | {
    id: "gtp1";
    name: "tooltip";
    type: "string";
    netsafe: "true";
} | {
    id: "gub1";
    name: "tooltipExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "ghk1";
    name: "hotkey";
    type: "char";
    netsafe: "true";
} | {
    id: "gbpx";
    name: "buttonPositionX";
    type: "int";
    netsafe: "true";
} | {
    id: "gbpy";
    name: "buttonPositionY";
    type: "int";
    netsafe: "true";
} | {
    id: "gar1";
    name: "icon";
    type: "icon";
    netsafe: "true";
} | {
    id: "gcls";
    name: "class";
    type: "upgradeClass";
    netsafe: "false";
} | {
    id: "glvl";
    name: "levels";
    type: "int";
    netsafe: "false";
} | {
    id: "gglb";
    name: "goldBase";
    type: "int";
    netsafe: "false";
} | {
    id: "gglm";
    name: "goldIncrement";
    type: "int";
    netsafe: "false";
} | {
    id: "glmb";
    name: "lumberBase";
    type: "int";
    netsafe: "false";
} | {
    id: "glmm";
    name: "lumberIncrement";
    type: "int";
    netsafe: "false";
} | {
    id: "gtib";
    name: "timeBase";
    type: "int";
    netsafe: "false";
} | {
    id: "gtim";
    name: "timeIncrement";
    type: "int";
    netsafe: "false";
} | {
    id: "gef1";
    name: "effect1";
    type: "upgradeEffect";
    netsafe: "false";
} | {
    id: "gba1";
    name: "effect1PercentS";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gmo1";
    name: "effect1PercentSMod";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gco1";
    name: "effect1PercentSCode";
    type: "string";
    netsafe: "false";
} | {
    id: "gef2";
    name: "effect2";
    type: "upgradeEffect";
    netsafe: "false";
} | {
    id: "gba2";
    name: "effect2PercentS";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gmo2";
    name: "effect2PercentSMod";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gco2";
    name: "effect2PercentSCode";
    type: "string";
    netsafe: "false";
} | {
    id: "gef3";
    name: "effect3";
    type: "upgradeEffect";
    netsafe: "false";
} | {
    id: "gba3";
    name: "effect3PercentS";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gmo3";
    name: "effect3PercentSMod";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gco3";
    name: "effect3PercentSCode";
    type: "string";
    netsafe: "false";
} | {
    id: "gef4";
    name: "effect4";
    type: "upgradeEffect";
    netsafe: "false";
} | {
    id: "gba4";
    name: "effect4PercentS";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gmo4";
    name: "effect4PercentSMod";
    type: "unreal";
    netsafe: "false";
} | {
    id: "gco4";
    name: "effect4PercentSCode";
    type: "string";
    netsafe: "false";
} | {
    id: "ginh";
    name: "transferWithUnitOwnership";
    type: "bool";
    netsafe: "false";
} | {
    id: "greq";
    name: "requirements";
    type: "techList";
    netsafe: "false";
} | {
    id: "grqc";
    name: "requirementsLevels";
    type: "intList";
    netsafe: "false";
} | {
    id: "glob";
    name: "appliesToAllUnits";
    type: "bool";
    netsafe: "false";
})[];
export declare enum Upgrades {
    AbolishMagic = "Resi",
    AbolishMagic1 = "Rnsi",
    AnimalWarTraining = "Rhan",
    BackpackHuman = "Rhpm",
    BackpackNightElf = "Repm",
    BackpackOrc = "Ropm",
    BackpackUndead = "Rupm",
    BansheeAdeptTrainingBansheeMasterTraining = "Ruba",
    Barrage = "Rhrt",
    BerserkerUpgrade = "Robk",
    BlackGunpowderRefinedGunpowderImbuedGunpowder = "Rhra",
    BruteStrength = "Robs",
    BurningOil = "Robf",
    Burrow = "Rubu",
    Cannibalize = "Ruac",
    Chaos = "Roch",
    Cloud = "Rhcd",
    ControlMagic = "Rhss",
    CoralBladesChitinousBladesRazorspineBlades = "Rnat",
    CoralScalesChitinousScalesRazorspineScales = "Rnam",
    CorrosiveBreath = "Recb",
    CreatureAttackImprovedCreatureAttackAdvancedCreatureAttack = "Rura",
    CreatureCarapaceImprovedCreatureCarapaceAdvancedCreatureCarapace = "Rucr",
    Defend = "Rhde",
    DestroyerForm = "Rusp",
    DiseaseCloud = "Rupc",
    DruidOfTheClawAdeptTrainingDruidOfTheClawMasterTraining = "Redc",
    DruidOfTheTalonAdeptTrainingDruidOfTheTalonMasterTraining = "Redt",
    Ensnare = "Roen",
    Ensnare1 = "Rnen",
    EnvenomedSpears = "Rovs",
    ExhumeCorpses = "Ruex",
    FlakCannons = "Rhfc",
    Flare = "Rhfl",
    FlyingMachineBombs = "Rhgb",
    FragmentationShards = "Rhfs",
    FreezingBreath = "Rufb",
    GhoulFrenzy = "Rugf",
    GlyphOfFortificationGlyphOfFortificationGlyphOfFortificationUpgrade1Upgrade2Upgrade3 = "Rgfo",
    GlyphOfUltravisionUpgrade = "Rguv",
    HardenedSkin = "Rehs",
    HippogryphTaming = "Reht",
    ImprovedBows = "Reib",
    ImprovedLumberHarvestingAdvancedLumberHarvesting = "Rhlh",
    ImprovedMasonryAdvancedMasonryImbuedMasonry = "Rhac",
    IronForgedSwordsSteelForgedSwordsMithrilForgedSwords = "Rhme",
    IronPlatingSteelPlatingMithrilPlating = "Rhar",
    LiquidFire = "Rolf",
    LongRifles = "Rhri",
    MagicSentry = "Rhse",
    MarkOfTheClaw = "Reeb",
    MarkOfTheTalon = "Reec",
    Marksmanship = "Remk",
    MoonArmorImprovedMoonArmorAdvancedMoonArmor = "Rema",
    NagaSirenAdeptTrainingNagaSirenMasterTraining = "Rnsw",
    NaturesBlessing = "Renb",
    NecromancerAdeptTrainingNecromancerMasterTraining = "Rune",
    Pillage = "Ropg",
    PriestAdeptTrainingPriestMasterTraining = "Rhpt",
    PulverizeDamageIncrease = "Rows",
    ReinforcedDefenses = "Rorb",
    ReinforcedHidesImprovedReinforcedHidesAdvancedReinforcedHides = "Rerh",
    ResistantSkin = "Rers",
    Sentinel = "Resc",
    ShamanAdeptTrainingShamanMasterTraining = "Rost",
    SkeletalLongevity = "Rusl",
    SkeletalMastery = "Rusm",
    SorceressAdeptTrainingSorceressMasterTraining = "Rhst",
    SpikedBarricadesImprovedSpikedBarricadesAdvancedSpikedBarricades = "Rosp",
    SpiritWalkerAdeptTrainingSpiritWalkerMasterTraining = "Rowt",
    SteelArmorThoriumArmorArcaniteArmor = "Roar",
    SteelMeleeWeaponsThoriumMeleeWeaponsArcaniteMeleeWeapons = "Rome",
    SteelRangedWeaponsThoriumRangedWeaponsArcaniteRangedWeapons = "Rora",
    StoneForm = "Rusf",
    StormHammers = "Rhhb",
    StrengthOfTheMoonImprovedStrengthOfTheMoonAdvancedStrengthOfTheMoon = "Resm",
    StrengthOfTheWildImprovedStrengthOfTheWildAdvancedStrengthOfTheWild = "Resw",
    StuddedLeatherArmorReinforcedLeatherArmorDragonhideArmor = "Rhla",
    Submerge = "Rnsb",
    SunderingBlades = "Rhsb",
    TrollRegenerationImprovedTrollRegenerationAdvancedTrollRegeneration = "Rotr",
    Ultravision = "Reuv",
    UnholyArmorImprovedUnholyArmorAdvancedUnholyArmor = "Ruar",
    UnholyStrengthImprovedUnholyStrengthAdvancedUnholyStrength = "Rume",
    UpgradeMoonGlaive = "Remg",
    VorpalBlades = "Repb",
    WarDrumsDamageIncrease = "Rwdm",
    Web = "Ruwb",
    WellSpring = "Rews",
    WitchDoctorAdeptTrainingWitchDoctorMasterTraining = "Rowd"
}
export declare class UpgradeContainer extends Container<Upgrade> {
    game: Readonly<{
        [key in Upgrades]: Readonly<Upgrade>;
    }>;
}
