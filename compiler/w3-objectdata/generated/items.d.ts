import { IDs, Container } from '../container';
export interface Item extends IDs {
    abilities: string;
    armorType: string;
    classification: string;
    tintingColor3Blue: number;
    tintingColor2Green: number;
    tintingColor1Red: number;
    cooldownGroup: string;
    droppedWhenCarrierDies: boolean;
    canBeDropped: boolean;
    modelUsed: string;
    goldCost: number;
    hitPoints: number;
    ignoreCooldown: boolean;
    level: number;
    lumberCost: number;
    validTargetForTransformation: boolean;
    levelUnclassified: number;
    perishable: boolean;
    includeAsRandomChoice: boolean;
    useAutomaticallyWhenAcquired: boolean;
    priority: number;
    scalingValue: number;
    selectionSizeEditor: number;
    canBeSoldByMerchants: boolean;
    canBeSoldToMerchants: boolean;
    stockMaximum: number;
    stockReplenishInterval: number;
    stockStartDelay: number;
    stockInitialAfterStartDelay: number;
    activelyUsed: boolean;
    numberOfCharges: number;
    maxStacks: number;
    interfaceIcon: string;
    buttonPositionX: number;
    buttonPositionY: number;
    description: string;
    hotkey: string;
    name: string;
    requirements: string;
    requirementsLevels: string;
    tooltipBasic: string;
    tooltipExtended: string;
}
export declare const ItemProps: ({
    id: "iabi";
    name: "abilities";
    type: "abilityList";
    netsafe: "false";
} | {
    id: "iarm";
    name: "armorType";
    type: "armorType";
    netsafe: "false";
} | {
    id: "icla";
    name: "classification";
    type: "itemClass";
    netsafe: "false";
} | {
    id: "iclb";
    name: "tintingColor3Blue";
    type: "int";
    netsafe: "true";
} | {
    id: "iclg";
    name: "tintingColor2Green";
    type: "int";
    netsafe: "true";
} | {
    id: "iclr";
    name: "tintingColor1Red";
    type: "int";
    netsafe: "true";
} | {
    id: "icid";
    name: "cooldownGroup";
    type: "abilCode";
    netsafe: "false";
} | {
    id: "idrp";
    name: "droppedWhenCarrierDies";
    type: "bool";
    netsafe: "false";
} | {
    id: "idro";
    name: "canBeDropped";
    type: "bool";
    netsafe: "false";
} | {
    id: "ifil";
    name: "modelUsed";
    type: "model";
    netsafe: "true";
} | {
    id: "igol";
    name: "goldCost";
    type: "int";
    netsafe: "false";
} | {
    id: "ihtp";
    name: "hitPoints";
    type: "int";
    netsafe: "false";
} | {
    id: "iicd";
    name: "ignoreCooldown";
    type: "bool";
    netsafe: "false";
} | {
    id: "ilev";
    name: "level";
    type: "int";
    netsafe: "false";
} | {
    id: "ilum";
    name: "lumberCost";
    type: "int";
    netsafe: "false";
} | {
    id: "imor";
    name: "validTargetForTransformation";
    type: "bool";
    netsafe: "false";
} | {
    id: "ilvo";
    name: "levelUnclassified";
    type: "int";
    netsafe: "false";
} | {
    id: "iper";
    name: "perishable";
    type: "bool";
    netsafe: "false";
} | {
    id: "iprn";
    name: "includeAsRandomChoice";
    type: "bool";
    netsafe: "false";
} | {
    id: "ipow";
    name: "useAutomaticallyWhenAcquired";
    type: "bool";
    netsafe: "false";
} | {
    id: "ipri";
    name: "priority";
    type: "int";
    netsafe: "false";
} | {
    id: "isca";
    name: "scalingValue";
    type: "real";
    netsafe: "true";
} | {
    id: "issc";
    name: "selectionSizeEditor";
    type: "real";
    netsafe: "true";
} | {
    id: "isel";
    name: "canBeSoldByMerchants";
    type: "bool";
    netsafe: "false";
} | {
    id: "ipaw";
    name: "canBeSoldToMerchants";
    type: "bool";
    netsafe: "false";
} | {
    id: "isto";
    name: "stockMaximum";
    type: "int";
    netsafe: "false";
} | {
    id: "istr";
    name: "stockReplenishInterval";
    type: "int";
    netsafe: "false";
} | {
    id: "isst";
    name: "stockStartDelay";
    type: "int";
    netsafe: "false";
} | {
    id: "isit";
    name: "stockInitialAfterStartDelay";
    type: "int";
    netsafe: "false";
} | {
    id: "iusa";
    name: "activelyUsed";
    type: "bool";
    netsafe: "false";
} | {
    id: "iuse";
    name: "numberOfCharges";
    type: "int";
    netsafe: "false";
} | {
    id: "ista";
    name: "maxStacks";
    type: "int";
    netsafe: "false";
} | {
    id: "iico";
    name: "interfaceIcon";
    type: "icon";
    netsafe: "true";
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
    id: "ides";
    name: "description";
    type: "string";
    netsafe: "true";
} | {
    id: "uhot";
    name: "hotkey";
    type: "char";
    netsafe: "true";
} | {
    id: "unam";
    name: "name";
    type: "string";
    netsafe: "true";
} | {
    id: "ureq";
    name: "requirements";
    type: "techList";
    netsafe: "false";
} | {
    id: "urqa";
    name: "requirementsLevels";
    type: "intList";
    netsafe: "false";
} | {
    id: "utip";
    name: "tooltipBasic";
    type: "string";
    netsafe: "true";
} | {
    id: "utub";
    name: "tooltipExtended";
    type: "string";
    netsafe: "true";
})[];
export declare enum Items {
    AlleriasFluteOfAccuracy = "afac",
    AmuletOfRecall = "amrc",
    AmuletOfSpellShield = "spsh",
    AmuletOfTheWild = "wild",
    AncestralStaff = "axas",
    AncientFigurine = "anfg",
    AncientJanggoOfEndurance = "ajen",
    AnkhOfReincarnation = "ankh",
    AntiMagicPotion = "pams",
    ArcaneScroll = "arsc",
    ArcaniteShield = "arsh",
    AssassinsBlade = "asbl",
    BattleStandard = "btst",
    BeltOfGiantStrengthPlus6 = "bgst",
    BladebaneArmor = "blba",
    BloodKey = "kybl",
    BloodfeathersHeart = "bfhr",
    BlueDrakeEgg = "fgbd",
    BookOfTheDead = "fgsk",
    BootsOfQuelThalasPlus6 = "belv",
    BootsOfSpeed = "bspd",
    BracerOfAgility = "brag",
    BundleOfLumber = "lmbr",
    CelestialOrbOfSouls = "cosl",
    Cheese = "ches",
    CircletOfNobility = "cnob",
    ClarityPotion = "pclr",
    ClawsOfAttackPlus12 = "ratc",
    ClawsOfAttackPlus15 = "ratf",
    ClawsOfAttackPlus3 = "rat3",
    ClawsOfAttackPlus5 = "rat6",
    ClawsOfAttackPlus8 = "rat9",
    CloakOfFlames = "clfm",
    CloakOfShadows = "clsd",
    ClockworkPenguin = "stpg",
    CrownOfKingsPlus5 = "ckng",
    CrownOfTheDeathlord = "crdt",
    CrystalBall = "crys",
    DemonicFigurine = "fgdg",
    DiamondOfSummoning = "dsum",
    DrektharsSpellbook = "dtsb",
    DruidPouch = "drph",
    DustOfAppearance = "dust",
    EmptyVial = "bzbe",
    EnchantedGemstone = "engs",
    EnchantedShield = "shen",
    EnchantedVial = "envl",
    EngravedScale = "engr",
    EssenceOfAszune = "esaz",
    FirehandGauntlets = "frhg",
    FlareGun = "fgun",
    FrostWyrmSkullShield = "fwss",
    Frostguard = "frgd",
    FullVial = "bzbf",
    GauntletsOfOgreStrengthPlus3 = "rst1",
    GemFragment = "gmfr",
    GemOfTrueSeeing = "gemt",
    GerardsLostLedger = "ledg",
    GhostKey = "kygh",
    GlovesOfHaste = "gcel",
    GlovesOfSpellMastery = "gvsm",
    GlyphOfFortification = "gfor",
    GlyphOfOmniscience = "gomn",
    GlyphOfPurification = "gopr",
    GlyphOfUltravision = "guvi",
    GoblinLandMines = "gobm",
    GoblinNightScope = "tels",
    GoldCoins = "gold",
    GreaterReplenishmentPotion = "rej4",
    GreaterScrollOfReplenishment = "rej6",
    GrimoireOfSouls = "grsl",
    HealingSalve = "hslv",
    HealingWards = "whwd",
    HealthStone = "hlst",
    HeartOfAszune = "azhr",
    HelmOfBattlethirst = "hbth",
    HelmOfValor = "hval",
    HoodOfCunning = "hcun",
    HornOfCenarius = "cnhn",
    HornOfTheClouds = "sfog",
    HumanFlag = "flag",
    IceShard = "shar",
    IdolOfTheWild = "iotw",
    InfernoStone = "infs",
    IronwoodBranch = "iwbr",
    IvoryTower = "tsct",
    JadeRing = "jdrn",
    KegOfAle = "kgal",
    KegOfThunderwater = "dkfw",
    KelensDaggerOfEscape = "desc",
    KeyOfThreeMoons = "k3m3",
    KhadgarsGemOfHealth = "rhth",
    KhadgarsPipeOfInsight = "kpin",
    Killmaim = "klmm",
    LegionDoomHorn = "lgdh",
    LesserClarityPotion = "plcl",
    LesserReplenishmentPotion = "rej2",
    LesserScrollOfReplenishment = "rej5",
    LionsRing = "lnrn",
    MagicKeyChain = "mgtk",
    ManaStone = "mnst",
    MantleOfIntelligencePlus3 = "rin1",
    ManualOfHealth = "manh",
    MaskOfDeath = "modt",
    MaulOfStrength = "mlst",
    MechanicalCritter = "mcri",
    MedallionOfCourage = "mcou",
    Mindstaff = "mnsf",
    MinorReplenishmentPotion = "rej1",
    MogrinsReport = "mort",
    MonsterLure = "lure",
    MoonKey = "kymn",
    Mooncrystal = "k3m1",
    Moonstone = "moon",
    NecklaceOfSpellImmunity = "nspi",
    NightElfFlag = "nflg",
    NoteToJainaProudmoore = "jpnt",
    OrbOfCorruption = "ocor",
    OrbOfDarkness = "odef",
    OrbOfFire = "ofir",
    OrbOfFire1 = "ofr2",
    OrbOfFrost = "ofro",
    OrbOfKiljaeden = "gldo",
    OrbOfLightning = "oli2",
    OrbOfLightning1 = "olig",
    OrbOfSlow = "oslo",
    OrbOfVenom = "oven",
    OrcFlag = "oflg",
    PartialKeyOfTheThreeMoons = "k3m2",
    PendantOfEnergy = "penr",
    PendantOfMana = "pmna",
    PeriaptOfVitality = "prvt",
    PhatLewt = "phlt",
    PotionOfDivinity = "pdi2",
    PotionOfDivinity1 = "pdiv",
    PotionOfGreaterHealing = "pghe",
    PotionOfGreaterInvisibility = "pgin",
    PotionOfGreaterMana = "pgma",
    PotionOfHealing = "phea",
    PotionOfInvisibility = "pinv",
    PotionOfInvulnerability = "pnvu",
    PotionOfLesserInvulnerability = "pnvl",
    PotionOfMana = "pman",
    PotionOfOmniscience = "pomn",
    PotionOfRestoration = "pres",
    PotionOfSpeed = "pspd",
    RedDrakeEgg = "fgrd",
    ReplenishmentPotion = "rej3",
    RingOfProtectionPlus1 = "rde0",
    RingOfProtectionPlus2 = "rde1",
    RingOfProtectionPlus3 = "rde2",
    RingOfProtectionPlus4 = "rde3",
    RingOfProtectionPlus5 = "rde4",
    RingOfRegeneration = "rlif",
    RingOfSuperiority = "rnsp",
    RingOfTheArchmagi = "ram4",
    RingOfTheArchmagi1 = "ram3",
    RingOfTheArchmagi2 = "ram2",
    RingOfTheArchmagi3 = "ram1",
    RitualDagger = "ritd",
    RobeOfTheMagiPlus6 = "ciri",
    RodOfNecromancy = "rnec",
    RuneOfDispelMagic = "rdis",
    RuneOfGreaterHealing = "rhe3",
    RuneOfGreaterMana = "rma2",
    RuneOfGreaterResurrection = "rre2",
    RuneOfHealing = "rhe2",
    RuneOfLesserHealing = "rhe1",
    RuneOfLesserResurrection = "rre1",
    RuneOfMana = "rman",
    RuneOfRebirth = "rreb",
    RuneOfRestoration = "rres",
    RuneOfShielding = "rsps",
    RuneOfSpeed = "rspd",
    RuneOfSpiritLink = "rspl",
    RuneOfTheWatcher = "rwat",
    RunedBracers = "brac",
    RunedGauntlets = "rugt",
    RustyMiningPick = "rump",
    SacredRelic = "horl",
    SacrificialSkull = "skul",
    ScepterOfAvarice = "scav",
    ScepterOfHealing = "schl",
    ScepterOfMastery = "ccmd",
    ScepterOfTheSea = "rots",
    ScourgeBoneChimes = "sbch",
    ScrollOfAnimateDead = "sand",
    ScrollOfHealing = "shea",
    ScrollOfMana = "sman",
    ScrollOfProtection = "spro",
    ScrollOfRegeneration = "sreg",
    ScrollOfRestoration = "sres",
    ScrollOfResurrection = "srrc",
    ScrollOfSpeed = "shas",
    ScrollOfTheBeast = "sror",
    ScrollOfTheUnholyLegion = "scul",
    ScrollOfTownPortal = "stwp",
    SearingBlade = "srbd",
    SecretLevelPowerup = "sclp",
    SeedOfExpulsion = "sxpl",
    SentryWards = "wswd",
    Serathil = "srtl",
    ShadowOrbFragment = "sorf",
    ShadowOrbPlus1 = "sor1",
    ShadowOrbPlus10 = "sora",
    ShadowOrbPlus2 = "sor2",
    ShadowOrbPlus3 = "sor3",
    ShadowOrbPlus4 = "sor4",
    ShadowOrbPlus5 = "sor5",
    ShadowOrbPlus6 = "sor6",
    ShadowOrbPlus7 = "sor7",
    ShadowOrbPlus8 = "sor8",
    ShadowOrbPlus9 = "sor9",
    ShamanClaws = "shcw",
    ShamanicTotem = "shtm",
    ShieldOfHonor = "shhn",
    ShieldOfTheDeathlord = "shdt",
    ShimmerglazeRoast = "shrs",
    Shimmerweed = "shwd",
    SkeletalArtifact = "skrt",
    SkullOfGuldan = "glsk",
    SkullShield = "sksh",
    SlippersOfAgilityPlus3 = "rag1",
    SobiMask = "rwiz",
    Soul = "soul",
    SoulGem = "gsou",
    SpellBook = "sbok",
    SpiderRing = "sprn",
    SpiderSilkBroach = "silk",
    SpikedCollar = "fgfh",
    StaffOfNegation = "sneg",
    StaffOfPreservation = "spre",
    StaffOfReanimation = "stre",
    StaffOfSanctuary = "ssan",
    StaffOfSilence = "ssil",
    StaffOfTeleportation = "stel",
    StoneToken = "fgrg",
    SturdyWarAxe = "stwa",
    SunKey = "kysn",
    TalismanOfEvasion = "evtl",
    TalismanOfTheWild = "totw",
    TheHeartOfSearinox = "sehr",
    TheLionHornOfStormwind = "lhst",
    ThunderLizardEgg = "thle",
    ThunderPhoenixEgg = "dphe",
    ThunderbloomBulb = "dthb",
    ThunderlizardDiamond = "thdm",
    TinyAltarOfKings = "tbak",
    TinyBarracks = "tbar",
    TinyBlacksmith = "tbsm",
    TinyCastle = "tcas",
    TinyFarm = "tfar",
    TinyGreatHall = "tgrh",
    TinyLumberMill = "tlum",
    TomeOfAgility = "tdex",
    TomeOfAgilityPlus2 = "tdx2",
    TomeOfExperience = "texp",
    TomeOfGreaterExperience = "tgxp",
    TomeOfIntelligence = "tint",
    TomeOfIntelligencePlus2 = "tin2",
    TomeOfKnowledge = "tpow",
    TomeOfPower = "tkno",
    TomeOfRetraining = "tret",
    TomeOfSacrifices = "tmsc",
    TomeOfStrength = "tstr",
    TomeOfStrengthPlus2 = "tst2",
    TotemOfMight = "tmmt",
    UndeadFlag = "uflg",
    UrnOfKingTerenas = "ktrm",
    VampiricPotion = "vamp",
    VineOfPurification = "vpur",
    VoodooDoll = "vddl",
    WandOfIllusion = "will",
    WandOfLightningShield = "wlsd",
    WandOfManaStealing = "woms",
    WandOfNegation = "wneg",
    WandOfNeutralization = "wneu",
    WandOfShadowsight = "wshs",
    WandOfTheWind = "wcyc",
    WarsongBattleDrums = "war2",
    WarsongBattleDrums1 = "ward",
    WirtsLeg = "wtlg",
    WirtsOtherLeg = "wolg"
}
export declare class ItemContainer extends Container<Item> {
    game: Readonly<{
        [key in Items]: Readonly<Item>;
    }>;
}
