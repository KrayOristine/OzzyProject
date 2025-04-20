import { IDs, Container } from '../container';
interface Ability extends IDs {
    name: string;
    editorSuffix: string;
    heroAbility: boolean;
    itemAbility: boolean;
    race: string;
    buttonPositionNormalX: number;
    buttonPositionNormalY: number;
    buttonPositionTurnOffX: number;
    buttonPositionTurnOffY: number;
    buttonPositionResearchX: number;
    buttonPositionResearchY: number;
    iconNormal: string;
    iconTurnOff: string;
    iconResearch: string;
    caster: string;
    target: string;
    special: string;
    effect: string;
    areaEffect: string;
    lightningEffects: string;
    missileArt: string;
    missileSpeed: number;
    missileArc: number;
    missileHomingEnabled: boolean;
    targetAttachments: number;
    targetAttachmentPoint1: string;
    targetAttachmentPoint2: string;
    targetAttachmentPoint3: string;
    targetAttachmentPoint4: string;
    targetAttachmentPoint5: string;
    targetAttachmentPoint6: string;
    casterAttachments: number;
    casterAttachmentPoint1: string;
    casterAttachmentPoint2: string;
    specialAttachmentPoint: string;
    animationNames: string;
    tooltipNormal: string;
    tooltipTurnOff: string;
    tooltipNormalExtended: string;
    tooltipTurnOffExtended: string;
    tooltipLearn: string;
    tooltipLearnExtended: string;
    hotkeyLearn: string;
    hotkeyNormal: string;
    hotkeyTurnOff: string;
    requirements: string;
    requirementsLevels: string;
    checkDependencies: boolean;
    priorityForSpellSteal: number;
    orderStringUseOrTurnOn: string;
    orderStringTurnOff: string;
    orderStringActivate: string;
    orderStringDeactivate: string;
    effectSound: string;
    effectSoundLooping: string;
    levels: number;
    requiredLevel: number;
    levelSkipRequirement: number;
    targetsAllowed: string;
    castingTime: number;
    durationNormal: number;
    durationHero: number;
    cooldown: number;
    manaCost: number;
    areaOfEffect: number;
    castRange: number;
    buffs: string;
    effects: string;
    unitSkinList: string;
}
export declare namespace AbilityTypes {
    interface Blizzard extends Ability {
        numberOfWaves: number;
        damage: number;
        numberOfShards: number;
        buildingReduction: number;
        damagePerSecond: number;
        maximumDamagePerWave: number;
    }
    interface BrillianceAura extends Ability {
        manaRegenerationIncrease: number;
        percentBonus: boolean;
    }
    interface MassTeleport extends Ability {
        numberOfUnitsTeleported: number;
        castingDelay: number;
        useTeleportClustering: boolean;
    }
    interface SummonWaterElemental extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface Stampede extends Ability {
        beastsPerSecond: number;
        beastCollisionRadius: number;
        damageAmount: number;
        damageRadius: number;
        damageDelay: number;
    }
    interface SummonBear extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface SummonQuilbeast extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface SummonHawk extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface Bladestorm extends Ability {
        damagePerSecondundefined: number;
        magicDamageReduction: number;
    }
    interface CriticalStrike extends Ability {
        chanceToCriticalStrike: number;
        damageMultiplier: number;
        damageBonus: number;
        chanceToEvade: number;
        neverMiss: boolean;
        excludeItemDamage: boolean;
    }
    interface MirrorImage extends Ability {
        numberOfImages: number;
        damageDealtPercent: number;
        damageTakenPercent: number;
        animationDelay: number;
    }
    interface WindWalk extends Ability {
        transitionTime: number;
        movementSpeedIncreasePercent: number;
        backstabDamage: number;
        backstabDamageEnabled: boolean;
        startCooldownWhenDecloak: boolean;
    }
    interface Banish extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
    }
    interface FlameStrike extends Ability {
        fullDamageDealt: number;
        fullDamageInterval: number;
        halfDamageDealt: number;
        halfDamageInterval: number;
        buildingReductionundefined: number;
        maximumDamageundefined: number;
    }
    interface SiphonMana extends Ability {
        hitPointsDrained: number;
        manaPointsDrained: number;
        drainIntervalSeconds: number;
        lifeTransferredPerSecond: number;
        manaTransferredPerSecond: number;
        bonusLifeFactor: number;
        bonusLifeDecay: number;
        bonusManaFactor: number;
        bonusManaDecay: number;
    }
    interface Phoenix extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface CarrionBeetles extends Ability {
        unitsSummonedTypeOne: number;
        unitsSummonedTypeTwo: number;
        unitTypeOne: string;
        unitTypeTwo: string;
        maxUnitsSummoned: number;
        killOnCasterDeath: boolean;
    }
    interface Impale extends Ability {
        waveDistance: number;
        waveTimeSeconds: number;
        damageDealtundefined: number;
        airTimeSeconds: number;
        uninterruptible: boolean;
        airborneTargetsVulnerable: boolean;
    }
    interface LocustSwarm extends Ability {
        numberOfSwarmUnits: number;
        unitReleaseIntervalSeconds: number;
        maxSwarmUnitsPerTarget: number;
        damageReturnFactor: number;
        damageReturnThreshold: number;
        swarmUnitType: string;
    }
    interface SpikedCarapace extends Ability {
        returnedDamageFactor: number;
        receivedDamageFactor: number;
        defenseBonusundefined: number;
    }
    interface BlackArrow extends Ability {
        damageBonusundefined: number;
        numberOfSummonedUnitsundefined: number;
        summonedUnitDurationSeconds: number;
        summonedUnitTypeundefined: string;
    }
    interface Charm extends Ability {
        maximumCreepLevelundefined: number;
    }
    interface LifeDrain extends Ability {
        hitPointsDrained: number;
        manaPointsDrained: number;
        drainIntervalSeconds: number;
        lifeTransferredPerSecond: number;
        manaTransferredPerSecond: number;
        bonusLifeFactor: number;
        bonusLifeDecay: number;
        bonusManaFactor: number;
        bonusManaDecay: number;
        useBlackArrowEffect: boolean;
    }
    interface Silence extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface AnimateDead extends Ability {
        numberOfCorpsesRaised: number;
        inheritUpgrades: boolean;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface DeathCoil extends Ability {
        amountHealedOrDamaged: number;
    }
    interface DeathPact extends Ability {
        lifeConvertedToMana: number;
        lifeConvertedToLife: number;
        manaConversionAsPercent: boolean;
        lifeConversionAsPercent: boolean;
        leaveTargetAlive: boolean;
    }
    interface UnholyAura extends Ability {
        movementSpeedIncreasePercentundefined: number;
        lifeRegenerationIncreasePercent: number;
        percentBonusundefined: boolean;
    }
    interface Evasion extends Ability {
        chanceToEvadeundefined: number;
    }
    interface Immolation extends Ability {
        damagePerInterval: number;
        manaDrainedPerSecond: number;
        bufferManaRequired: number;
    }
    interface ManaBurn extends Ability {
        maxManaDrained: number;
        boltDelay: number;
        boltLifetime: number;
    }
    interface Metamorphosis extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormHitPointBonus: number;
        alternateFormUnit: string;
    }
    interface Sleep extends Ability {
        stunDuration: number;
    }
    interface VampiricAura extends Ability {
        attackDamageStolenPercent: number;
    }
    interface CarrionSwarm extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
    }
    interface Inferno extends Ability {
        damageundefined: number;
        duration: number;
        impactDelay: number;
        summonedUnit: string;
    }
    interface ChainLightning extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface Earthquake extends Ability {
        effectDelay: number;
        damagePerSecondToBuildings: number;
        unitsSlowedPercent: number;
        finalAreaundefined: number;
    }
    interface FarSight extends Ability {
        detectionType: string;
    }
    interface FeralSpirit extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface EntanglingRoots extends Ability {
        damagePerSecondundefined: number;
    }
    interface ForceOfNature extends Ability {
        numberOfSummonedUnitsundefined: number;
        summonedUnitTypeundefined: string;
    }
    interface ThornsAura extends Ability {
        damageDealtToAttackers: number;
        damageIsPercentReceived: boolean;
    }
    interface Tranquility extends Ability {
        lifeHealed: number;
        healInterval: number;
        buildingReductionundefined: number;
        initialImmunityDuration: number;
    }
    interface DarkRitual extends Ability {
        lifeConvertedToMana: number;
        lifeConvertedToLife: number;
        manaConversionAsPercent: boolean;
        lifeConversionAsPercent: boolean;
        leaveTargetAlive: boolean;
    }
    interface DeathAndDecay extends Ability {
        maxLifeDrainedPerSecondPercent: number;
        buildingReductionundefined: number;
    }
    interface FrostArmor extends Ability {
        armorDuration: number;
        armorBonus: number;
    }
    interface FrostArmorAutocast extends Ability {
        armorDuration: number;
        armorBonus: number;
    }
    interface FrostNova extends Ability {
        areaOfEffectDamage: number;
        specificTargetDamage: number;
        maximumDamage: number;
    }
    interface Avatar extends Ability {
        defenseBonusundefined: number;
        hitPointBonus: number;
        damageBonusundefined: number;
        magicDamageReductionundefined: number;
    }
    interface Bash extends Ability {
        chanceToBash: number;
        damageMultiplierundefined: number;
        damageBonusundefined: number;
        chanceToMiss: number;
        neverMissundefined: boolean;
    }
    interface StormBolt extends Ability {
        damageundefined: number;
    }
    interface ThunderClap extends Ability {
        aOEDamage: number;
        specificTargetDamageundefined: number;
        movementSpeedReductionPercent: number;
        attackSpeedReductionPercent: number;
        maximumDamageundefined: number;
    }
    interface ForkedLightning extends Ability {
        distance: number;
        finalArea: number;
        damagePerTarget: number;
        numberOfTargetsHit: number;
    }
    interface FrostArrows extends Ability {
        extraDamage: number;
        movementSpeedFactor: number;
        attackSpeedFactor: number;
        stackFlags: string;
    }
    interface Tornado extends Ability {
        summonedUnitTypeundefined: string;
    }
    interface ManaShield extends Ability {
        manaPerHitPoint: number;
        damageAbsorbedPercent: number;
    }
    interface DevotionAura extends Ability {
        armorBonusundefined: number;
        percentBonusundefined: boolean;
    }
    interface DivineShield extends Ability {
        canDeactivate: boolean;
    }
    interface HolyLight extends Ability {
        amountHealedOrDamagedundefined: number;
    }
    interface Resurrection extends Ability {
        numberOfCorpsesRaisedundefined: number;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface BreathOfFire extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
        damagePerSecondundefined: number;
    }
    interface DrunkenBrawler extends Ability {
        chanceToCriticalStrike: number;
        damageMultiplier: number;
        damageBonus: number;
        chanceToEvade: number;
        neverMiss: boolean;
        excludeItemDamage: boolean;
    }
    interface DrunkenHaze extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface StormEarthAndFire extends Ability {
        summonedUnitTypes: string;
    }
    interface Doom extends Ability {
        damagePerSecondundefined: number;
        numberOfSummonedUnitsundefined: number;
        summonedUnitDurationSecondsundefined: number;
        maximumCreepLevelundefined: number;
        movementSpeedFactorundefined: number;
        summonedUnitTypeundefined: string;
    }
    interface HowlOfTerror extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface CleavingAttack extends Ability {
        distributedDamageFactorundefined: number;
    }
    interface RainOfFire extends Ability {
        numberOfWaves: number;
        damage: number;
        numberOfShards: number;
        buildingReduction: number;
        damagePerSecond: number;
        maximumDamagePerWave: number;
    }
    interface SearingArrows extends Ability {
        damageBonusundefined: number;
    }
    interface Scout extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface Starfall extends Ability {
        damageDealt: number;
        damageInterval: number;
        buildingReductionundefined: number;
    }
    interface TrueshotAura extends Ability {
        damageBonusPercent: number;
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
    }
    interface EnduranceAura extends Ability {
        movementSpeedIncreasePercentundefined: number;
        attackSpeedIncreasePercent: number;
    }
    interface Reincarnation extends Ability {
        reincarnationDelay: number;
    }
    interface Shockwave extends Ability {
        damageundefined: number;
        maximumDamageundefined: number;
        distanceundefined: number;
        finalAreaundefined: number;
    }
    interface WarStomp extends Ability {
        damageundefined: number;
    }
    interface HealingWave extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface Hex extends Ability {
        maximumCreepLevelundefined: number;
        morphUnitsGround: string;
        morphUnitsAir: string;
        morphUnitsAmphibious: string;
        morphUnitsWater: string;
    }
    interface SerpentWard extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface BigBadVoodoo extends Ability {
    }
    interface Blink extends Ability {
        maximumRange: number;
        minimumRange: number;
    }
    interface FanOfKnives extends Ability {
        damagePerTargetundefined: number;
        maximumTotalDamage: number;
        maximumNumberOfTargets: number;
        maximumSpeedAdjustment: number;
    }
    interface ShadowStrike extends Ability {
        decayingDamage: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        decayPower: number;
        initialDamage: number;
    }
    interface Vengeance extends Ability {
        numberOfSummonedUnitsundefined: number;
        summonedUnitTypeundefined: string;
    }
    interface AcidBomb extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
        armorPenaltyundefined: number;
        primaryDamage: number;
        secondaryDamage: number;
        damageIntervalundefined: number;
    }
    interface ChemicalRage extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        moveSpeedBonusInfoPanelOnly: number;
        attackSpeedBonusInfoPanelOnly: number;
        alternateFormUnit: string;
    }
    interface HealingSpray extends Ability {
        waveCount: number;
        damageAmountundefined: number;
        damageIntervalundefined: number;
        missileCount: number;
        maxDamageundefined: number;
        buildingDamageFactorundefined: number;
    }
    interface Transmute extends Ability {
        goldCostFactor: number;
        lumberCostFactor: number;
        maxCreepLevelundefined: number;
        allowBounty: boolean;
    }
    interface EngineeringUpgrade extends Ability {
        moveSpeedBonusundefined: number;
        damageBonusundefined: number;
        abilityUpgrade1: string;
        abilityUpgrade2: string;
        abilityUpgrade3: string;
        abilityUpgrade4: string;
    }
    interface ClusterRockets extends Ability {
        damageAmountundefined: number;
        damageIntervalundefined: number;
        missileCount: number;
        maxDamageundefined: number;
        buildingDamageFactorundefined: number;
        effectDuration: number;
    }
    interface ClusterRocketsUpgradeLevel1 extends Ability {
        damageAmountundefined: number;
        damageIntervalundefined: number;
        missileCount: number;
        maxDamageundefined: number;
        buildingDamageFactorundefined: number;
        effectDuration: number;
    }
    interface ClusterRocketsUpgradeLevel2 extends Ability {
        damageAmountundefined: number;
        damageIntervalundefined: number;
        missileCount: number;
        maxDamageundefined: number;
        buildingDamageFactorundefined: number;
        effectDuration: number;
    }
    interface ClusterRocketsUpgradeLevel3 extends Ability {
        damageAmountundefined: number;
        damageIntervalundefined: number;
        missileCount: number;
        maxDamageundefined: number;
        buildingDamageFactorundefined: number;
        effectDuration: number;
    }
    interface RoboGoblin extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        strengthBonus: number;
        defenseBonus: number;
        alternateFormUnit: string;
    }
    interface RoboGoblinUpgradeLevel1 extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        strengthBonus: number;
        defenseBonus: number;
        alternateFormUnit: string;
    }
    interface RoboGoblinUpgradeLevel2 extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        strengthBonus: number;
        defenseBonus: number;
        alternateFormUnit: string;
    }
    interface RoboGoblinUpgradeLevel3 extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        strengthBonus: number;
        defenseBonus: number;
        alternateFormUnit: string;
    }
    interface PocketFactory extends Ability {
        spawnInterval: number;
        spawnUnitID: string;
        spawnUnitDuration: number;
        spawnUnitOffset: number;
        leashRange: number;
        factoryUnitID: string;
    }
    interface PocketFactoryUpgrade1 extends Ability {
        spawnInterval: number;
        spawnUnitID: string;
        spawnUnitDuration: number;
        spawnUnitOffset: number;
        leashRange: number;
        factoryUnitID: string;
    }
    interface PocketFactoryUpgrade2 extends Ability {
        spawnInterval: number;
        spawnUnitID: string;
        spawnUnitDuration: number;
        spawnUnitOffset: number;
        leashRange: number;
        factoryUnitID: string;
    }
    interface PocketFactoryUpgrade3 extends Ability {
        spawnInterval: number;
        spawnUnitID: string;
        spawnUnitDuration: number;
        spawnUnitOffset: number;
        leashRange: number;
        factoryUnitID: string;
    }
    interface Demolish extends Ability {
        chanceToDemolish: number;
        damageMultiplierBuildings: number;
        damageMultiplierUnits: number;
        damageMultiplierHeroes: number;
    }
    interface DemolishUpgradeLevel1 extends Ability {
        chanceToDemolish: number;
        damageMultiplierBuildings: number;
        damageMultiplierUnits: number;
        damageMultiplierHeroes: number;
    }
    interface DemolishUpgradeLevel2 extends Ability {
        chanceToDemolish: number;
        damageMultiplierBuildings: number;
        damageMultiplierUnits: number;
        damageMultiplierHeroes: number;
    }
    interface DemolishUpgradeLevel3 extends Ability {
        chanceToDemolish: number;
        damageMultiplierBuildings: number;
        damageMultiplierUnits: number;
        damageMultiplierHeroes: number;
    }
    interface Incinerate extends Ability {
        bonusDamageMultiplier: number;
        deathDamageFullAmount: number;
        deathDamageFullArea: number;
        deathDamageHalfAmount: number;
        deathDamageHalfArea: number;
        deathDamageDelay: number;
    }
    interface IncinerateArrow extends Ability {
    }
    interface SoulBurn extends Ability {
        damageAmountundefined: number;
        damagePeriod: number;
        damagePenalty: number;
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
    }
    interface SummonLavaSpawn extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
        splitDelay: number;
        splitAttackCount: number;
        maxHitpointFactor: number;
        lifeDurationSplitBonus: number;
        generationCount: number;
    }
    interface Volcano extends Ability {
        rockRingCount: number;
        waveCountundefined: number;
        waveInterval: number;
        buildingDamageFactorundefined: number;
        fullDamageAmountundefined: number;
        halfDamageFactor: number;
        destructibleID: string;
    }
    interface InfernoNeutralHostile extends Ability {
        damageundefined: number;
        duration: number;
        impactDelay: number;
        summonedUnit: string;
    }
    interface InfernoTichondrius extends Ability {
        damageundefined: number;
        duration: number;
        impactDelay: number;
        summonedUnit: string;
    }
    interface FireboltNeutralHostile extends Ability {
        damageundefined: number;
    }
    interface FingerOfDeathArchimonde extends Ability {
        graphicDelay: number;
        graphicDuration: number;
        damageundefined: number;
    }
    interface FingerOfPainNeutralHostile extends Ability {
        graphicDelay: number;
        graphicDuration: number;
        damageundefined: number;
    }
    interface FingerOfPainNeutralHostile extends Ability {
        graphicDelay: number;
        graphicDuration: number;
        damageundefined: number;
    }
    interface DarkPortalArchimonde extends Ability {
        spawnedUnits: string;
        minimumNumberOfUnits: number;
        maximumNumberOfUnits: number;
    }
    interface RainOfChaosArchimonde extends Ability {
        abilityForUnitCreation: string;
        numberOfUnitsCreated: number;
    }
    interface RainOfChaosBalnazzar extends Ability {
        abilityForUnitCreation: string;
        numberOfUnitsCreated: number;
    }
    interface StarfallMorePowerful extends Ability {
        damageDealt: number;
        damageInterval: number;
        buildingReductionundefined: number;
    }
    interface ReincarnationMannoroth extends Ability {
        reincarnationDelay: number;
    }
    interface DarkConversionMalganis extends Ability {
        raceToConvert: string;
        conversionUnit: string;
    }
    interface DarkConversionMalganisFast extends Ability {
        raceToConvert: string;
        conversionUnit: string;
    }
    interface SoulPreservationMalganis extends Ability {
        unitToPreserve: string;
    }
    interface MetamorphosisIllidan extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormHitPointBonus: number;
        alternateFormUnit: string;
    }
    interface MetamorphosisEvilIllidan extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormHitPointBonus: number;
        alternateFormUnit: string;
    }
    interface EarthquakeNeutralHostile extends Ability {
        effectDelay: number;
        damagePerSecondToBuildings: number;
        unitsSlowedPercent: number;
        finalAreaundefined: number;
    }
    interface DeathAndDecayNeutralHostile extends Ability {
        maxLifeDrainedPerSecondPercent: number;
        buildingReductionundefined: number;
    }
    interface Monsoon extends Ability {
        damageDealt: number;
        damageInterval: number;
        buildingReductionundefined: number;
    }
    interface PoisonArrows extends Ability {
        extraDamageundefined: number;
        wESTRING_AEVAL_POI1: number;
        wESTRING_AEVAL_POI2: number;
        wESTRING_AEVAL_POI3: number;
        wESTRING_AEVAL_POI4: string;
    }
    interface WateryMinion extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface ColdArrows extends Ability {
        extraDamage: number;
        movementSpeedFactor: number;
        attackSpeedFactor: number;
        stackFlags: string;
    }
    interface BattleRoar extends Ability {
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
        damageIncrease: number;
    }
    interface SummonMishaRexxar extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface AttributeBonus extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface SummonQuilbeastRexxar extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface StampedeRexxar extends Ability {
        beastsPerSecond: number;
        beastCollisionRadius: number;
        damageAmount: number;
        damageRadius: number;
        damageDelay: number;
    }
    interface StormBolt extends Ability {
        damageundefined: number;
    }
    interface HealingWaveRokhan extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface SerpentWardRokhan extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface HexRokhan extends Ability {
        maximumCreepLevelundefined: number;
        morphUnitsGround: string;
        morphUnitsAir: string;
        morphUnitsAmphibious: string;
        morphUnitsWater: string;
    }
    interface VoodooSpirits extends Ability {
        numberOfSwarmUnits: number;
        unitReleaseIntervalSeconds: number;
        maxSwarmUnitsPerTarget: number;
        damageReturnFactor: number;
        damageReturnThreshold: number;
        swarmUnitType: string;
    }
    interface BreathOfFireChen extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
        damagePerSecondundefined: number;
    }
    interface DrunkenBrawlerChen extends Ability {
        chanceToCriticalStrike: number;
        damageMultiplier: number;
        damageBonus: number;
        chanceToEvade: number;
        neverMiss: boolean;
        excludeItemDamage: boolean;
    }
    interface DrunkenHazeChen extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface StormEarthAndFireChen extends Ability {
        summonedUnitTypes: string;
    }
    interface EnduranceAuraCairne extends Ability {
        movementSpeedIncreasePercentundefined: number;
        attackSpeedIncreasePercent: number;
    }
    interface ReincarnationCairne extends Ability {
        reincarnationDelay: number;
    }
    interface ShockwaveCairne extends Ability {
        damageundefined: number;
        maximumDamageundefined: number;
        distanceundefined: number;
        finalAreaundefined: number;
    }
    interface WarStomp extends Ability {
        damageundefined: number;
    }
    interface Channel extends Ability {
        followThroughTime: number;
        targetType: string;
        options: string;
        artDuration: number;
        disableOtherAbilities: boolean;
        baseOrderIDundefined: string;
    }
    interface AbolishMagic extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface AbolishMagic extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface AbolishMagicNeutralHostile extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface AbolishMagicNeutralHostileSecondPosition extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface AbsorbMana extends Ability {
        maximumLifeAbsorbed: number;
        maximumManaAbsorbed: number;
    }
    interface GatherAcolyteGold extends Ability {
    }
    interface AvatarNeutral extends Ability {
        defenseBonusundefined: number;
        hitPointBonus: number;
        damageBonusundefined: number;
        magicDamageReductionundefined: number;
    }
    interface Alarm extends Ability {
    }
    interface ShopSharingAlliedBldg extends Ability {
        activationRadius: number;
        interactionType: string;
        showSelectUnitButton: boolean;
        showUnitIndicator: boolean;
    }
    interface AncestralSpirit extends Ability {
        lifeRestoredFactor: number;
        manaRestoredFactor: number;
    }
    interface AnimateDeadNeutralHostileNeutralHostile extends Ability {
        inheritUpgrades: boolean;
        raisedUnitsAreInvulnerable: boolean;
        numberOfCorpsesRaisedundefined: number;
    }
    interface AntiMagicShell extends Ability {
        summonedUnitDamage: number;
        magicDamageReductionundefined: number;
        shieldLife: number;
        manaLoss: number;
    }
    interface AntiMagicShellMagicResistance extends Ability {
        summonedUnitDamage: number;
        magicDamageReductionundefined: number;
        shieldLife: number;
        manaLoss: number;
    }
    interface AntiMagicShellNeutralHostile extends Ability {
        summonedUnitDamage: number;
        magicDamageReductionundefined: number;
        shieldLife: number;
        manaLoss: number;
    }
    interface Attack extends Ability {
    }
    interface BrillianceAuraNeutralHostile extends Ability {
        manaRegenerationIncrease: number;
        percentBonus: boolean;
    }
    interface CommandAura extends Ability {
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
        attackDamageIncreaseundefined: number;
    }
    interface DevotionAuraNeutralHostile extends Ability {
        armorBonusundefined: number;
        percentBonusundefined: boolean;
    }
    interface EnduranceAuraNeutralHostile extends Ability {
        movementSpeedIncreasePercentundefined: number;
        attackSpeedIncreasePercent: number;
    }
    interface DiseaseCloudAbomination extends Ability {
        auraDuration: number;
        damagePerSecondundefined: number;
        durationOfPlagueWard: number;
        plagueWardUnitType: string;
    }
    interface DiseaseCloudPlagueWard extends Ability {
        auraDuration: number;
        damagePerSecondundefined: number;
        durationOfPlagueWard: number;
        plagueWardUnitType: string;
    }
    interface DiseaseCloudNeutralHostile extends Ability {
        auraDuration: number;
        damagePerSecondundefined: number;
        durationOfPlagueWard: number;
        plagueWardUnitType: string;
    }
    interface DiseaseCloudNeutralHostileNoDamage extends Ability {
        auraDuration: number;
        damagePerSecondundefined: number;
        durationOfPlagueWard: number;
        plagueWardUnitType: string;
    }
    interface DiseaseCloudAnimateDead extends Ability {
        auraDuration: number;
        damagePerSecondundefined: number;
        durationOfPlagueWard: number;
        plagueWardUnitType: string;
    }
    interface HealingWardAuraHealingWard extends Ability {
        amountOfHitPointsRegenerated: number;
        percentage: boolean;
    }
    interface AuraOfBlight extends Ability {
        amountOfHitPointsRegenerated: number;
        percentage: boolean;
    }
    interface SlowAuraTornado extends Ability {
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        alwaysAutocastundefined: boolean;
    }
    interface TrueshotAuraNeutralHostile extends Ability {
        damageBonusPercent: number;
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
    }
    interface WarDrums extends Ability {
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
        attackDamageIncrease: number;
        playChannelAnimation: boolean;
    }
    interface DestroyerForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        lifeRegenerationRatePerSecond: number;
        alternateFormUnit: string;
    }
    interface ReviveHeroInstantly extends Ability {
    }
    interface BurningOil extends Ability {
        fullDamageDealt: number;
        fullDamageInterval: number;
        halfDamageDealt: number;
        halfDamageInterval: number;
        buildingReductionundefined: number;
        maximumDamageundefined: number;
    }
    interface BanishNeutralHostile extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
    }
    interface BashNeutralHostile1 extends Ability {
        chanceToBash: number;
        damageMultiplierundefined: number;
        damageBonusundefined: number;
        chanceToMiss: number;
        neverMissundefined: boolean;
    }
    interface BashNeutralHostile2 extends Ability {
        chanceToBash: number;
        damageMultiplierundefined: number;
        damageBonusundefined: number;
        chanceToMiss: number;
        neverMissundefined: boolean;
    }
    interface MaulNeutralHostile3OrMaul extends Ability {
        chanceToBash: number;
        damageMultiplierundefined: number;
        damageBonusundefined: number;
        chanceToMiss: number;
        neverMissundefined: boolean;
    }
    interface BattleStations extends Ability {
        allowedUnitType: string;
        summonBusyUnits: boolean;
    }
    interface BattleStationsFelOrcBurrow extends Ability {
        allowedUnitType: string;
        summonBusyUnits: boolean;
    }
    interface BearForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface Berserk extends Ability {
        movementSpeedIncreaseundefined: number;
        attackSpeedIncreaseundefined: number;
        damageTakenIncrease: number;
    }
    interface BerserkerUpgrade extends Ability {
        newUnitType: string;
    }
    interface BlackArrowNeutralHostile extends Ability {
        damageBonusundefined: number;
        numberOfSummonedUnitsundefined: number;
        summonedUnitDurationSeconds: number;
        summonedUnitTypeundefined: string;
    }
    interface BlightDispelSmall extends Ability {
        expansionAmount: number;
        createsBlight: boolean;
    }
    interface BlightDispelLarge extends Ability {
        expansionAmount: number;
        createsBlight: boolean;
    }
    interface BlightGrowthSmall extends Ability {
        expansionAmount: number;
        createsBlight: boolean;
    }
    interface BlightGrowthLarge extends Ability {
        expansionAmount: number;
        createsBlight: boolean;
    }
    interface BlightedGoldMineAbility extends Ability {
        goldPerInterval: number;
        intervalDuration: number;
        maxNumberOfMiners: number;
        radiusOfMiningRing: number;
    }
    interface BlinkNeutral extends Ability {
        maximumRange: number;
        minimumRange: number;
    }
    interface BlizzardNeutralHostile extends Ability {
        numberOfWaves: number;
        damage: number;
        numberOfShards: number;
        buildingReduction: number;
        damagePerSecond: number;
        maximumDamagePerWave: number;
    }
    interface Bloodlust extends Ability {
        attackSpeedIncreasePercentundefined: number;
        movementSpeedIncreasePercentundefined: number;
        scalingFactor: number;
    }
    interface BloodlustNeutralHostile1 extends Ability {
        attackSpeedIncreasePercentundefined: number;
        movementSpeedIncreasePercentundefined: number;
        scalingFactor: number;
    }
    interface BloodlustNeutralHostile2 extends Ability {
        attackSpeedIncreasePercentundefined: number;
        movementSpeedIncreasePercentundefined: number;
        scalingFactor: number;
    }
    interface BreathOfFireNeutralHostile extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
        damagePerSecondundefined: number;
    }
    interface BreathOfFrost extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
        damagePerSecondundefined: number;
    }
    interface BuildNeutral extends Ability {
    }
    interface BuildHuman extends Ability {
    }
    interface BuildOrc extends Ability {
    }
    interface BuildNightElf extends Ability {
    }
    interface BuildUndead extends Ability {
    }
    interface BuildNaga extends Ability {
    }
    interface BurrowCryptFiend extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface BurrowScarabLvl2 extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface BurrowScarabLvl3 extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface BurrowNeutralHostile extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface BurrowDetectionFliersObsolete extends Ability {
        detectionTypeundefined: string;
    }
    interface Cannibalize extends Ability {
        hitPointsPerSecond: number;
        maxHitPoints: number;
    }
    interface Cannibalize extends Ability {
        hitPointsPerSecond: number;
        maxHitPoints: number;
    }
    interface CannibalizeNeutralHostile extends Ability {
        hitPointsPerSecond: number;
        maxHitPoints: number;
    }
    interface CargoHoldOrcBurrow extends Ability {
        cargoCapacity: number;
    }
    interface DevourCargo extends Ability {
        cargoCapacity: number;
        damagePerSecondundefined: number;
        maximumCreepLevel: number;
    }
    interface CargoHoldMeatWagon extends Ability {
        cargoCapacity: number;
    }
    interface CargoHoldShip extends Ability {
        cargoCapacity: number;
    }
    interface CargoHoldTank extends Ability {
        cargoCapacity: number;
    }
    interface CargoHoldGoblinZeppelin extends Ability {
        cargoCapacity: number;
    }
    interface LoadEntangledGoldMine extends Ability {
        cargoCapacity: number;
    }
    interface CargoHoldDeath extends Ability {
        movementUpdateFrequency: number;
        attackUpdateFrequency: number;
        summonedUnitDamageundefined: number;
    }
    interface CarrionSwarmNeutralHostile extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
    }
    interface CrushingWave extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
    }
    interface CrushingWaveLesser extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
    }
    interface CrushingWaveLesser extends Ability {
        damageundefined: number;
        maxDamage: number;
        distance: number;
        finalArea: number;
    }
    interface ChainLightningNeutralHostile extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface RayOfDisruption extends Ability {
        manaLossPerUnitundefined: number;
        summonedUnitDamageundefined: number;
        maximumDispelledUnits: number;
    }
    interface UndefinedGrunt extends Ability {
        newUnitType: string;
    }
    interface UndefinedRaider extends Ability {
        newUnitType: string;
    }
    interface UndefinedShaman extends Ability {
        newUnitType: string;
    }
    interface UndefinedKodoBeast extends Ability {
        newUnitType: string;
    }
    interface UndefinedPeon extends Ability {
        newUnitType: string;
    }
    interface UndefinedGrommash extends Ability {
        newUnitType: string;
    }
    interface ChaosCargoLoad extends Ability {
        unitTypeAllowed: string;
    }
    interface CharmNeutralHostile extends Ability {
        maximumCreepLevelundefined: number;
    }
    interface CleavingAttackNeutralHostile extends Ability {
        distributedDamageFactorundefined: number;
    }
    interface Cloud extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface ColdArrowsNeutralHostile extends Ability {
        extraDamage: number;
        movementSpeedFactor: number;
        attackSpeedFactor: number;
        stackFlags: string;
    }
    interface ControlMagic extends Ability {
        maximumCreepLevelundefined: number;
        manaPerSummonedHitpoint: number;
        chargeForCurrentLife: number;
    }
    interface CorporealForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface CorrosiveBreath extends Ability {
        damagePerSecondundefined: number;
    }
    interface MountHippogryphOld extends Ability {
        resultingUnitTypeundefined: string;
        partnerUnitType: string;
    }
    interface PickUpArcherOld extends Ability {
        resultingUnitTypeundefined: string;
        partnerUnitType: string;
    }
    interface MountHippogryph extends Ability {
        resultingUnitTypeundefined: string;
        partnerUnitType: string;
        moveToPartner: boolean;
    }
    interface PickUpArcher extends Ability {
        resultingUnitTypeundefined: string;
        partnerUnitType: string;
        moveToPartner: boolean;
    }
    interface Sleep extends Ability {
    }
    interface Cripple extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
        damageReduction: number;
    }
    interface CrippleWarlock extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
        damageReduction: number;
    }
    interface CrippleNeutralHostile extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
        damageReduction: number;
    }
    interface CriticalStrikeNeutralHostile extends Ability {
        chanceToCriticalStrike: number;
        damageMultiplier: number;
        damageBonus: number;
        chanceToEvade: number;
        neverMiss: boolean;
        excludeItemDamage: boolean;
    }
    interface Curse extends Ability {
        chanceToMissundefined: number;
    }
    interface CurseNeutralHostile extends Ability {
        chanceToMissundefined: number;
    }
    interface Cyclone extends Ability {
        canBeDispelled: boolean;
    }
    interface Cyclone extends Ability {
        canBeDispelled: boolean;
    }
    interface CycloneNeutralHostile extends Ability {
        canBeDispelled: boolean;
    }
    interface CycloneCenarius extends Ability {
        canBeDispelled: boolean;
    }
    interface DeathCoilNeutralHostile extends Ability {
        amountHealedOrDamaged: number;
    }
    interface AOEDamageUponDeathSapper extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
    }
    interface AOEDamageUponDeathGoblinMine extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
    }
    interface AOEDamageUponDeathBigMine extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
    }
    interface Dismount extends Ability {
        partnerUnitTypeOne: string;
        partnerUnitTypeTwo: string;
    }
    interface Defend extends Ability {
        damageTakenPercentundefined: number;
        damageDealtPercentundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        magicDamageReductionundefined: number;
        chanceToDeflect: number;
        deflectDamageTakenPiercing: number;
        deflectDamageTakenSpells: number;
    }
    interface DetectorSentryWard extends Ability {
        detectionTypeundefined: string;
    }
    interface TrueSightShade extends Ability {
        detectionTypeundefined: string;
    }
    interface TrueSightNeutral1 extends Ability {
        detectionTypeundefined: string;
    }
    interface TrueSightNeutral2 extends Ability {
        detectionTypeundefined: string;
    }
    interface TrueSightFlyingMachine extends Ability {
        detectionTypeundefined: string;
    }
    interface MagicSentryHumanTowers extends Ability {
        detectionTypeundefined: string;
    }
    interface Detonate extends Ability {
        manaLossPerUnitundefined: number;
        damageToSummonedUnitsundefined: number;
    }
    interface Devour extends Ability {
        maxCreepLevel: number;
    }
    interface DevourNeutralHostile extends Ability {
        maxCreepLevel: number;
    }
    interface DevourMagic extends Ability {
        lifePerUnit: number;
        manaPerUnit: number;
        lifePerBuff: number;
        manaPerBuff: number;
        summonedUnitDamageundefined: number;
        ignoreFriendlyBuffs: boolean;
    }
    interface DevourMagicNeutralHostile extends Ability {
        lifePerUnit: number;
        manaPerUnit: number;
        lifePerBuff: number;
        manaPerBuff: number;
        summonedUnitDamageundefined: number;
        ignoreFriendlyBuffs: boolean;
    }
    interface DisenchantOld extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface Disenchant extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface DispelMagic extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface DispelMagicNeutralHostile extends Ability {
        manaLossundefined: number;
        summonedUnitDamageundefined: number;
    }
    interface DivineShieldNeutralHostile extends Ability {
        canDeactivate: boolean;
    }
    interface LifeDrainNeutralHostile extends Ability {
        hitPointsDrained: number;
        manaPointsDrained: number;
        drainIntervalSeconds: number;
        lifeTransferredPerSecond: number;
        manaTransferredPerSecond: number;
        bonusLifeFactor: number;
        bonusLifeDecay: number;
        bonusManaFactor: number;
        bonusManaDecay: number;
    }
    interface UnloadInstantEntangledMine extends Ability {
    }
    interface UnloadAirTransportsGoblinZeppelin extends Ability {
    }
    interface UnloadSeaTransports extends Ability {
    }
    interface DropPilot extends Ability {
    }
    interface EatTree extends Ability {
        ripDelay: number;
        eatDelay: number;
        hitPointsGained: number;
    }
    interface ElunesGrace extends Ability {
        damageTakenPercentundefined: number;
        damageDealtPercentundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        magicDamageReductionundefined: number;
        chanceToDeflect: number;
        deflectDamageTakenPiercing: number;
        deflectDamageTakenSpells: number;
    }
    interface Ensnare extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface Ensnare extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface EnsnareNeutralHostile extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface EntangleGoldMine extends Ability {
        resultingUnitType: string;
    }
    interface EntangledGoldMineAbility extends Ability {
        goldPerIntervalundefined: number;
        intervalDurationundefined: number;
    }
    interface EntanglingRootsNeutralHostile1 extends Ability {
        damagePerSecondundefined: number;
    }
    interface EntanglingRootsNeutralHostile2 extends Ability {
        damagePerSecondundefined: number;
    }
    interface Ethereal extends Ability {
    }
    interface EtherealForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface EvasionNeutralHostile extends Ability {
        chanceToEvadeundefined: number;
    }
    interface EvasionNeutralHostile100Percent extends Ability {
        chanceToEvadeundefined: number;
    }
    interface ExhumeCorpses extends Ability {
        maximumNumberOfCorpsesundefined: number;
        unitTypeundefined: string;
    }
    interface Factory extends Ability {
        spawnIntervalundefined: number;
        leashRangeundefined: number;
        spawnUnitIDundefined: string;
    }
    interface FaerieFire extends Ability {
        defenseReduction: number;
        alwaysAutocast: boolean;
    }
    interface FaerieFireMorph extends Ability {
        defenseReduction: number;
        alwaysAutocast: boolean;
    }
    interface FaerieFireNeutralHostile extends Ability {
        defenseReduction: number;
        alwaysAutocast: boolean;
    }
    interface FeedbackSpellbreaker extends Ability {
        maxManaDrainedUnits: number;
        damageRatioUnitsPercent: number;
        maxManaDrainedHeros: number;
        damageRatioHerosPercent: number;
        summonedDamage: number;
    }
    interface FeedbackArcaneTower extends Ability {
        maxManaDrainedUnits: number;
        damageRatioUnitsPercent: number;
        maxManaDrainedHeros: number;
        damageRatioHerosPercent: number;
        summonedDamage: number;
    }
    interface Feedback extends Ability {
        maxManaDrainedUnits: number;
        damageRatioUnitsPercent: number;
        maxManaDrainedHeros: number;
        damageRatioHerosPercent: number;
        summonedDamage: number;
    }
    interface FeralSpiritNeutralHostile extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface FeralSpiritNeutralHostilePig extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface SpiritBeast extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface FeralSpirit extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface FingerOfDeathNeutralHostile extends Ability {
        graphicDelay: number;
        graphicDuration: number;
        damageundefined: number;
    }
    interface FireboltWarlock extends Ability {
        damageundefined: number;
    }
    interface FireboltNeutralHostile extends Ability {
        damageundefined: number;
    }
    interface FlakCannons extends Ability {
        mediumDamageRadiusundefined: number;
        smallDamageRadiusundefined: number;
        fullDamageAmountundefined: number;
        mediumDamageAmount: number;
        smallDamageAmount: number;
    }
    interface Flare extends Ability {
        detectionTypeundefined: string;
        effectDelayundefined: number;
        flareCount: number;
    }
    interface FlameStrikeNeutralHostile extends Ability {
        fullDamageDealt: number;
        fullDamageInterval: number;
        halfDamageDealt: number;
        halfDamageInterval: number;
        buildingReductionundefined: number;
        maximumDamageundefined: number;
    }
    interface FlameStrikeNeutralHostile2 extends Ability {
        fullDamageDealt: number;
        fullDamageInterval: number;
        halfDamageDealt: number;
        halfDamageInterval: number;
        buildingReductionundefined: number;
        maximumDamageundefined: number;
    }
    interface ForceOfNatureNeutralHostile extends Ability {
        numberOfSummonedUnitsundefined: number;
        summonedUnitTypeundefined: string;
    }
    interface ForkedLightningNeutralHostile extends Ability {
        distance: number;
        finalArea: number;
        damagePerTarget: number;
        numberOfTargetsHit: number;
    }
    interface FragmentationShards extends Ability {
        mediumDamageRadiusundefined: number;
        smallDamageRadiusundefined: number;
        fullDamageAmountundefined: number;
        mediumDamageAmount: number;
        smallDamageAmount: number;
    }
    interface FreezingBreath extends Ability {
    }
    interface Frenzy extends Ability {
        attackSpeedIncreasePercentundefined: number;
        movementSpeedIncreasePercentundefined: number;
        scalingFactor: number;
    }
    interface FrostArmorNeutralHostile extends Ability {
        armorDuration: number;
        armorBonus: number;
    }
    interface FrostArmorAutocastNeutralHostile extends Ability {
        armorDuration: number;
        armorBonus: number;
    }
    interface FrostArmorAutocast extends Ability {
        armorDuration: number;
        armorBonus: number;
    }
    interface FrostAttack extends Ability {
    }
    interface FrostAttack extends Ability {
    }
    interface FrostBreath extends Ability {
    }
    interface FrostAttackNewHasIcon extends Ability {
    }
    interface FrostNovaNeutralHostile extends Ability {
        areaOfEffectDamage: number;
        specificTargetDamage: number;
        maximumDamage: number;
    }
    interface FrostBolt extends Ability {
        damageundefined: number;
    }
    interface Ghost extends Ability {
        autoAcquireAttackTargets: boolean;
        wESTRING_AEVAL_ETH1: boolean;
        wESTRING_AEVAL_ETH2: boolean;
    }
    interface GhostVisible extends Ability {
        immuneToMorphEffects: boolean;
        doesNotBlockBuildings: boolean;
    }
    interface GoldMineAbility extends Ability {
        maxGold: number;
        miningDuration: number;
        miningCapacity: number;
    }
    interface WarClub extends Ability {
        attachDelay: number;
        removeDelay: number;
        disabledAttackIndex: number;
        enabledAttackIndexundefined: number;
        maximumAttacks: number;
    }
    interface CreateCorpse extends Ability {
        maximumNumberOfCorpses: number;
        radiusOfGravestones: number;
        radiusOfCorpses: number;
        corpseUnitType: string;
    }
    interface FlyingMachineBombs extends Ability {
    }
    interface HardenedSkin extends Ability {
        chanceToReduceDamagePercent: number;
        minimumDamage: number;
        ignoredDamage: number;
        includeRangedDamage: boolean;
        includeMeleeDamage: boolean;
    }
    interface HardenedSkin extends Ability {
        chanceToReduceDamagePercent: number;
        minimumDamage: number;
        ignoredDamage: number;
        includeRangedDamage: boolean;
        includeMeleeDamage: boolean;
    }
    interface HarvestGoldAndLumber extends Ability {
        damageToTree: number;
        lumberCapacity: number;
        goldCapacity: number;
    }
    interface HarvestNeutralGoldAndLumber extends Ability {
        damageToTree: number;
        lumberCapacity: number;
        goldCapacity: number;
    }
    interface HarvestGhoulsLumber extends Ability {
        damageToTree: number;
        lumberCapacity: number;
    }
    interface HarvestGoblinShreddersLumber extends Ability {
        damageToTree: number;
        lumberCapacity: number;
    }
    interface HarvestArchimondesGhoulsLumber extends Ability {
        damageToTree: number;
        lumberCapacity: number;
    }
    interface Heal extends Ability {
        hitPointsGainedundefined: number;
    }
    interface HealNeutralHostile1 extends Ability {
        hitPointsGainedundefined: number;
    }
    interface HealNeutralHostile2 extends Ability {
        hitPointsGainedundefined: number;
    }
    interface HealNeutralHostile3 extends Ability {
        hitPointsGainedundefined: number;
    }
    interface HealingWardWitchDoctor extends Ability {
        wardUnitTypeundefined: string;
    }
    interface HealingWardNeutralHostile extends Ability {
        wardUnitTypeundefined: string;
    }
    interface HealingWaveNeutralHostile extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface SummoningRitual extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface Hero extends Ability {
    }
    interface HexNeutralHostile extends Ability {
        maximumCreepLevelundefined: number;
        morphUnitsGround: string;
        morphUnitsAir: string;
        morphUnitsAmphibious: string;
        morphUnitsWater: string;
    }
    interface HowlOfTerrorNeutralHostile extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface ImmolationNeutralHostile extends Ability {
        damagePerInterval: number;
        manaDrainedPerSecond: number;
        bufferManaRequired: number;
    }
    interface ImpaleNeutralHostile extends Ability {
        waveDistance: number;
        waveTimeSeconds: number;
        damageDealtundefined: number;
        airTimeSeconds: number;
        uninterruptible: boolean;
        airborneTargetsVulnerable: boolean;
    }
    interface VorpalBlades extends Ability {
    }
    interface InnerFire extends Ability {
        damageIncreasePercent: number;
        defenseIncrease: number;
        autocastRange: number;
        lifeRegenRate: number;
    }
    interface InnerFireNeutralHostile extends Ability {
        damageIncreasePercent: number;
        defenseIncrease: number;
        autocastRange: number;
        lifeRegenRate: number;
    }
    interface Invisibility extends Ability {
        transitionTimeSeconds: number;
    }
    interface InventoryHero extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface PackMule extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface UnitInventoryOrc extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface UnitInventoryHuman extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface UnitInventoryNightElf extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface UnitInventoryUndead extends Ability {
        itemCapacity: number;
        dropItemsOnDeath: boolean;
        canUseItems: boolean;
        canGetItems: boolean;
        canDropItems: boolean;
    }
    interface InvulnerableNeutral extends Ability {
    }
    interface LightningAttack extends Ability {
        graphicDelayundefined: number;
        graphicDurationundefined: number;
    }
    interface LightningShield extends Ability {
        damagePerSecondSecond: number;
    }
    interface LightningShieldNeutralHostile extends Ability {
        damagePerSecondSecond: number;
    }
    interface LiquidFire extends Ability {
        extraDamagePerSecond: number;
        movementSpeedReductionundefined: number;
        attackSpeedReductionundefined: number;
        repairsAllowed: boolean;
    }
    interface LoadGoblinZeppelin extends Ability {
        allowedUnitTypeundefined: string;
    }
    interface LoadOrcBurrow extends Ability {
        allowedUnitTypeundefined: string;
    }
    interface LoadWisp extends Ability {
        allowedUnitTypeundefined: string;
    }
    interface LoadShips extends Ability {
        allowedUnitTypeundefined: string;
    }
    interface LoadPilot extends Ability {
    }
    interface Locust extends Ability {
    }
    interface MagicDefense extends Ability {
        damageTakenPercentundefined: number;
        damageDealtPercentundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        magicDamageReductionundefined: number;
        chanceToDeflect: number;
        deflectDamageTakenPiercing: number;
        deflectDamageTakenSpells: number;
    }
    interface SpellImmunity extends Ability {
        magicDamageFactor: number;
    }
    interface SpellImmunityNeutralHostile extends Ability {
        magicDamageFactor: number;
    }
    interface SpellImmunitySpellImmunityArchimonde extends Ability {
        magicDamageFactor: number;
    }
    interface SpellImmunitySpellImmunityDragon extends Ability {
        magicDamageFactor: number;
    }
    interface AerialShackles extends Ability {
        damagePerSecondundefined: number;
    }
    interface ReplenishManaAndLife extends Ability {
        manaGained: number;
        hitPointsGainedundefined: number;
        autocastRequirement: number;
        waterHeight: number;
        regenerateOnlyAtNight: boolean;
    }
    interface ReplenishMana extends Ability {
        manaGained: number;
        hitPointsGainedundefined: number;
        autocastRequirement: number;
        waterHeight: number;
        regenerateOnlyAtNight: boolean;
    }
    interface ManaBurnNeutralHostile2 extends Ability {
        maxManaDrained: number;
        boltDelay: number;
        boltLifetime: number;
    }
    interface ManaBurnNeutralHostile1 extends Ability {
        maxManaDrained: number;
        boltDelay: number;
        boltLifetime: number;
    }
    interface ManaBurnNeutralHostile3 extends Ability {
        maxManaDrained: number;
        boltDelay: number;
        boltLifetime: number;
    }
    interface ManaFlare extends Ability {
        unitDamagePerManaPoint: number;
        heroDamagePerManaPoint: number;
        unitMaximumDamage: number;
        heroMaximumDamage: number;
        damageCooldown: number;
        casterOnlySplash: boolean;
    }
    interface ManaShieldNeutralHostile extends Ability {
        manaPerHitPoint: number;
        damageAbsorbedPercent: number;
    }
    interface DropCorpse extends Ability {
    }
    interface GetCorpse extends Ability {
    }
    interface CallToArmsPeasant extends Ability {
        normalFormUnitundefined: string;
        alternateFormUnitundefined: string;
    }
    interface CallToArmsTownHall extends Ability {
    }
    interface MindRot extends Ability {
        manaDrainedPerSecondundefined: number;
    }
    interface MineExplodingGoblinLandMine extends Ability {
        activationDelay: number;
        invisibilityTransitionTime: number;
    }
    interface Monsoon extends Ability {
        damageDealt: number;
        damageInterval: number;
        buildingReductionundefined: number;
    }
    interface MoonGlaive extends Ability {
    }
    interface MoonGlaiveNaisha extends Ability {
    }
    interface Move extends Ability {
    }
    interface SelectHero extends Ability {
        activationRadius: number;
        interactionType: string;
        showSelectUnitButton: boolean;
        showUnitIndicator: boolean;
    }
    interface SelectUnit extends Ability {
        activationRadius: number;
        interactionType: string;
        showSelectUnitButton: boolean;
        showUnitIndicator: boolean;
    }
    interface Reveal extends Ability {
        goldCost: number;
        lumberCost: number;
        detectionTypeundefined: string;
    }
    interface ManaRegenerationLifeRegenerationAuraNeutral extends Ability {
        amountRegenerated: number;
        percentageundefined: boolean;
    }
    interface LifeRegenerationAuraNeutral extends Ability {
        amountOfHitPointsRegenerated: number;
        percentage: boolean;
    }
    interface ChargeGoldAndLumber extends Ability {
        goldCost: number;
        lumberCost: number;
        baseOrderID: string;
        chargeOwningPlayer: boolean;
    }
    interface OrbOfAnnihilation extends Ability {
        damageBonusundefined: number;
        mediumDamageFactor: number;
        smallDamageFactor: number;
        fullDamageRadiusundefined: number;
        halfDamageRadiusundefined: number;
    }
    interface QuillSpray extends Ability {
        damageBonusundefined: number;
        mediumDamageFactor: number;
        smallDamageFactor: number;
        fullDamageRadiusundefined: number;
        halfDamageRadiusundefined: number;
    }
    interface OnFire extends Ability {
    }
    interface OnFireHuman extends Ability {
    }
    interface OnFireOrc extends Ability {
    }
    interface OnFireNightElf extends Ability {
    }
    interface OnFireUndead extends Ability {
    }
    interface Parasite extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
        unitTypeundefined: string;
        summonedUnitCountundefined: number;
        summonedUnitDuration: number;
    }
    interface Parasite extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
        unitTypeundefined: string;
        summonedUnitCountundefined: number;
        summonedUnitDuration: number;
    }
    interface PermanentImmolationNeutralHostile1 extends Ability {
        damagePerInterval: number;
        manaDrainedPerSecond: number;
        bufferManaRequired: number;
    }
    interface PhoenixFireFlyer extends Ability {
        damagePerInterval: number;
        manaDrainedPerSecond: number;
        bufferManaRequired: number;
    }
    interface PermanentImmolationNeutralHostile2 extends Ability {
        damagePerInterval: number;
        manaDrainedPerSecond: number;
        bufferManaRequired: number;
    }
    interface PermanentInvisibility extends Ability {
        autoAcquireAttackTargets: boolean;
    }
    interface PhaseShift extends Ability {
        movementSpeedReductionPercentundefined: number;
        attackSpeedReductionPercentundefined: number;
    }
    interface PhoenixMorphingEggRelated extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface PhoenixFire extends Ability {
        initialDamageundefined: number;
        damagePerSecondundefined: number;
    }
    interface DiseaseCloudMeatWagon extends Ability {
        wardUnitTypeundefined: string;
    }
    interface PoisonSting extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
    }
    interface Polymorph extends Ability {
        maximumCreepLevelundefined: number;
        morphUnitsGround: string;
        morphUnitsAir: string;
        morphUnitsAmphibious: string;
        morphUnitsWater: string;
    }
    interface PolymorphNeutralHostile extends Ability {
        maximumCreepLevelundefined: number;
        morphUnitsGround: string;
        morphUnitsAir: string;
        morphUnitsAmphibious: string;
        morphUnitsWater: string;
    }
    interface Possession extends Ability {
        maximumCreepLevelundefined: number;
    }
    interface PossessionNeutralHostile extends Ability {
        maximumCreepLevelundefined: number;
    }
    interface PossessionChanneling extends Ability {
        maximumCreepLevelundefined: number;
        damageAmplification: number;
        targetIsInvulnerable: boolean;
        targetIsMagicImmune: boolean;
    }
    interface PulverizePulverize extends Ability {
        chanceToStompPercent: number;
        damageDealtundefined: number;
        fullDamageRadiusundefined: number;
        halfDamageRadius: number;
    }
    interface PulverizeNeutralHostile extends Ability {
        chanceToStompPercent: number;
        damageDealtundefined: number;
        fullDamageRadiusundefined: number;
        halfDamageRadius: number;
    }
    interface ShopPurchaseItem extends Ability {
    }
    interface Purge extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface Purge extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface PurgeNeutralHostile extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface RainOfFireNeutralHostile2 extends Ability {
        numberOfWaves: number;
        damage: number;
        numberOfShards: number;
        buildingReduction: number;
        damagePerSecond: number;
        maximumDamagePerWave: number;
    }
    interface RainOfFireNeutralHostile1 extends Ability {
        numberOfWaves: number;
        damage: number;
        numberOfShards: number;
        buildingReduction: number;
        damagePerSecond: number;
        maximumDamagePerWave: number;
    }
    interface RaiseDead extends Ability {
        unitsSummonedTypeOne: number;
        unitsSummonedTypeTwo: number;
        unitTypeOne: string;
        unitTypeTwo: string;
        unitTypeForLimitCheck: string;
    }
    interface RaiseDeadNeutralHostile extends Ability {
        unitsSummonedTypeOne: number;
        unitsSummonedTypeTwo: number;
        unitTypeOne: string;
        unitTypeTwo: string;
        unitTypeForLimitCheck: string;
    }
    interface Rally extends Ability {
    }
    interface StormCrowForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface CrowForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        alternateFormUnit: string;
    }
    interface ReincarnationNeutralHostile extends Ability {
        reincarnationDelay: number;
    }
    interface Reincarnation extends Ability {
        reincarnationDelay: number;
    }
    interface ReinforcedBurrowsUpgrade extends Ability {
    }
    interface Rejuvenation extends Ability {
        hitPointsGainedundefined: number;
        manaPointsGained: number;
        allowWhenFull: string;
        noTargetRequired: boolean;
    }
    interface RejuvenationNeutralHostile extends Ability {
        hitPointsGainedundefined: number;
        manaPointsGained: number;
        allowWhenFull: string;
        noTargetRequired: boolean;
    }
    interface RejuvenationFurbolg extends Ability {
        hitPointsGainedundefined: number;
        manaPointsGained: number;
        allowWhenFull: string;
        noTargetRequired: boolean;
    }
    interface Renew extends Ability {
        repairCostRatio: number;
        repairTimeRatio: number;
        powerbuildCost: number;
        powerbuildRate: number;
        navalRangeBonus: number;
    }
    interface RepairHuman extends Ability {
        repairCostRatio: number;
        repairTimeRatio: number;
        powerbuildCost: number;
        powerbuildRate: number;
        navalRangeBonus: number;
    }
    interface Repair extends Ability {
        repairCostRatio: number;
        repairTimeRatio: number;
        powerbuildCost: number;
        powerbuildRate: number;
        navalRangeBonus: number;
    }
    interface Replenish extends Ability {
        hitPointsGainedundefined: number;
        manaPointsGained: number;
        minimumLifeRequired: number;
        minimumManaRequired: number;
        maximumUnitsChargedToCaster: number;
        maximumUnitsAffected: number;
    }
    interface EssenceOfBlight extends Ability {
        hitPointsGainedundefined: number;
        minimumLifeRequired: number;
        maximumUnitsChargedToCaster: number;
        maximumUnitsAffected: number;
    }
    interface SpiritTouch extends Ability {
        manaPointsGained: number;
        minimumManaRequired: number;
        maximumUnitsChargedToCaster: number;
        maximumUnitsAffected: number;
    }
    interface ResistantSkin extends Ability {
    }
    interface ResistantSkinNeutralHostile1 extends Ability {
    }
    interface ResistantSkinNeutralHostile2 extends Ability {
    }
    interface Restore extends Ability {
        repairCostRatio: number;
        repairTimeRatio: number;
        powerbuildCost: number;
        powerbuildRate: number;
        navalRangeBonus: number;
    }
    interface ReturnGold extends Ability {
        acceptsGold: boolean;
        acceptsLumber: boolean;
    }
    interface ReturnGoldAndLumber extends Ability {
        acceptsGold: boolean;
        acceptsLumber: boolean;
    }
    interface ReturnLumber extends Ability {
        acceptsGold: boolean;
        acceptsLumber: boolean;
    }
    interface Reveal extends Ability {
        detectionRadiusundefined: string;
    }
    interface Revenge extends Ability {
    }
    interface ReviveHero extends Ability {
    }
    interface Roar extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface RoarMorph extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface RoarSkeletalOrcChampion extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface RoarNeutralHostile extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface Barrage extends Ability {
        damagePerTargetundefined: number;
        maximumTotalDamage: number;
        maximumNumberOfTargets: number;
    }
    interface RootAncients extends Ability {
        rootedWeapons: string;
        uprootedWeapons: string;
        rootedTurning: boolean;
        uprootedDefenseType: string;
    }
    interface RootAncientProtector extends Ability {
        rootedWeapons: string;
        uprootedWeapons: string;
        rootedTurning: boolean;
        uprootedDefenseType: string;
    }
    interface SacrificeSacrificialPit extends Ability {
    }
    interface Pillage extends Ability {
        salvageCostRatio: number;
        accumulationStep: number;
    }
    interface SacrificeAcolyte extends Ability {
    }
    interface SearingArrowsNeutralHostile extends Ability {
        damageBonusundefined: number;
    }
    interface KaboomGoblinSapper extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
        buildingDamageFactor: number;
        explodesOnDeath: boolean;
    }
    interface KaboomClockwerkGoblinLevel1 extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
        buildingDamageFactor: number;
        explodesOnDeath: boolean;
    }
    interface KaboomClockwerkGoblinLevel2 extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
        buildingDamageFactor: number;
        explodesOnDeath: boolean;
    }
    interface KaboomClockwerkGoblinLevel3 extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
        buildingDamageFactor: number;
        explodesOnDeath: boolean;
    }
    interface SellItems extends Ability {
    }
    interface SellUnits extends Ability {
    }
    interface Sentinel extends Ability {
        inFlightSightRadius: number;
        hoveringSightRadius: number;
        hoveringHeight: number;
        numberOfOwls: number;
        durationOfOwls: number;
    }
    interface SentinelNaisha extends Ability {
        inFlightSightRadius: number;
        hoveringSightRadius: number;
        hoveringHeight: number;
        numberOfOwls: number;
        durationOfOwls: number;
    }
    interface SentryWard extends Ability {
        wardUnitTypeundefined: string;
    }
    interface SpawnTentacle extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface ShadowMeld extends Ability {
        fadeDuration: number;
        dayOrNightDuration: number;
        actionDuration: number;
        permanentCloak: boolean;
    }
    interface ShadowMeldItem extends Ability {
        fadeDuration: number;
        dayOrNightDuration: number;
        actionDuration: number;
        permanentCloak: boolean;
    }
    interface ShadowMeldInstant extends Ability {
        fadeDuration: number;
        dayOrNightDuration: number;
        actionDuration: number;
        permanentCloak: boolean;
    }
    interface ShadowMeldAkama extends Ability {
        fadeDuration: number;
        dayOrNightDuration: number;
        actionDuration: number;
    }
    interface UndefinedNeutralHostile extends Ability {
        decayingDamage: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        decayPower: number;
        initialDamage: number;
    }
    interface ShockwaveNeutralHostile extends Ability {
        damageundefined: number;
        maximumDamageundefined: number;
        distanceundefined: number;
        finalAreaundefined: number;
    }
    interface ShockwaveTrap extends Ability {
        damageundefined: number;
        maximumDamageundefined: number;
        distanceundefined: number;
        finalAreaundefined: number;
    }
    interface Shockwave extends Ability {
        damageundefined: number;
        maximumDamageundefined: number;
        distanceundefined: number;
        finalAreaundefined: number;
    }
    interface SilenceNeutralHostile extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface SiphonManaNeutralHostile extends Ability {
        hitPointsDrained: number;
        manaPointsDrained: number;
        drainIntervalSeconds: number;
        lifeTransferredPerSecond: number;
        manaTransferredPerSecond: number;
        bonusLifeFactor: number;
        bonusLifeDecay: number;
        bonusManaFactor: number;
        bonusManaDecay: number;
    }
    interface SleepNeutralHostile extends Ability {
        stunDuration: number;
    }
    interface SleepAlways extends Ability {
        sleepOnce: boolean;
        allowOnAnyPlayerSlot: boolean;
    }
    interface Slow extends Ability {
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        alwaysAutocastundefined: boolean;
    }
    interface SlowNeutralHostile extends Ability {
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        alwaysAutocastundefined: boolean;
    }
    interface SlowPoison extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingTypeundefined: string;
    }
    interface SpawnSkeletonProbablyBlackArrow extends Ability {
        numberOfUnits: number;
        unitType: string;
    }
    interface SpawnSpiderlingsNeutralHostile extends Ability {
        numberOfUnits: number;
        unitType: string;
    }
    interface SpawnSpidersNeutralHostile extends Ability {
        numberOfUnits: number;
        unitType: string;
    }
    interface SpawnHydra extends Ability {
        numberOfUnits: number;
        unitType: string;
    }
    interface SpawnHydraHatchling extends Ability {
        numberOfUnits: number;
        unitType: string;
    }
    interface SpellSteal extends Ability {
    }
    interface Sphere extends Ability {
    }
    interface SphereVengeanceLevel1 extends Ability {
    }
    interface SphereVengeanceLevel2 extends Ability {
    }
    interface SphereVengeanceLevel3 extends Ability {
    }
    interface SphereVengeanceLevel4 extends Ability {
    }
    interface SphereVengeanceLevel5 extends Ability {
    }
    interface SphereVengeanceLevel6 extends Ability {
    }
    interface SpiderAttack extends Ability {
        spiderCapacity: number;
    }
    interface SpikedBarricades extends Ability {
    }
    interface SpiritLink extends Ability {
        distributedDamageFactor: number;
        maximumNumberOfTargetsundefined: number;
    }
    interface StandDown extends Ability {
    }
    interface StasisTrap extends Ability {
        activationDelayundefined: number;
        detectionRadius: number;
        detonationRadius: number;
        stunDurationundefined: number;
        detonationDelay: number;
        wardUnitType: string;
    }
    interface StoneForm extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        landingDelayTime: number;
        lifeRegenerationRatePerSecond: number;
        alternateFormUnit: string;
    }
    interface StormHammers extends Ability {
    }
    interface SubmergeMyrmidon extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        alternateFormUnit: string;
    }
    interface SubmergeRoyalGuard extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        alternateFormUnit: string;
    }
    interface SubmergeSnapDragon extends Ability {
        normalFormUnit: string;
        morphingFlags: string;
        altitudeAdjustmentDuration: number;
        alternateFormUnit: string;
    }
    interface SummonPrawns extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface SummonSeaElemental extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface Turret extends Ability {
    }
    interface Taunt extends Ability {
        preferHostilesundefined: number;
        preferFriendliesundefined: number;
        maxUnitsundefined: number;
        numberOfPulses: number;
        intervalBetweenPulses: number;
    }
    interface TauntNeutralHostile extends Ability {
        preferHostilesundefined: number;
        preferFriendliesundefined: number;
        maxUnitsundefined: number;
        numberOfPulses: number;
        intervalBetweenPulses: number;
    }
    interface SpikedShell extends Ability {
        returnedDamageFactor: number;
        receivedDamageFactor: number;
        defenseBonusundefined: number;
    }
    interface SpikedShell22ButtonPos extends Ability {
        returnedDamageFactor: number;
        receivedDamageFactor: number;
        defenseBonusundefined: number;
    }
    interface ThornsAuraNeutralHostile extends Ability {
        damageDealtToAttackers: number;
        damageIsPercentReceived: boolean;
    }
    interface HurlBoulder extends Ability {
        damageundefined: number;
    }
    interface SlamNeutralHostile extends Ability {
        damageundefined: number;
        extraDamageToTarget: number;
        movementSpeedReduction: number;
        attackSpeedReduction: number;
    }
    interface SlamThunderLizard extends Ability {
        damageundefined: number;
        extraDamageToTarget: number;
        movementSpeedReduction: number;
        attackSpeedReduction: number;
    }
    interface BuildingDamageAuraTornado extends Ability {
        damagePerSecondundefined: number;
        mediumDamageRadius: number;
        mediumDamagePerSecond: number;
        smallDamageRadius: number;
        smallDamagePerSecond: number;
    }
    interface TornadoSpinTornado extends Ability {
        airTimeSecondsundefined: number;
        minimumHitIntervalSeconds: number;
    }
    interface TornadoWanderTornado extends Ability {
    }
    interface TreeOfLifeUpgradeAbility extends Ability {
    }
    interface Ultravision extends Ability {
    }
    interface UnholyAuraNeutralHostile extends Ability {
        movementSpeedIncreasePercentundefined: number;
        lifeRegenerationIncreasePercent: number;
        percentBonusundefined: boolean;
    }
    interface UnholyFrenzy extends Ability {
        attackSpeedBonusPercent: number;
        damagePerSecondundefined: number;
    }
    interface UnholyFrenzyWarlock extends Ability {
        attackSpeedBonusPercent: number;
        damagePerSecondundefined: number;
    }
    interface UnholyFrenzyNeutralHostile extends Ability {
        attackSpeedBonusPercent: number;
        damagePerSecondundefined: number;
    }
    interface InciteUnholyFrenzy extends Ability {
        requiresUndeadTargetundefined: boolean;
        leaveTargetAliveundefined: boolean;
        targetsAllowedForBuff: string;
    }
    interface UnstableConcoction extends Ability {
        fullDamageRadius: number;
        fullDamageAmount: number;
        partialDamageRadius: number;
        partialDamageAmount: number;
        maxDamageundefined: number;
        moveSpeedBonus: number;
    }
    interface UnsummonBuilding extends Ability {
        salvageCostRatio: number;
        accumulationStep: number;
    }
    interface LifeStealFrostmourne extends Ability {
        lifeStolenPerAttack: number;
    }
    interface VampiricAuraNeutralHostile extends Ability {
        attackDamageStolenPercent: number;
    }
    interface SpiritOfVengeance extends Ability {
        unitsSummonedTypeOne: number;
        unitsSummonedTypeTwo: number;
        unitTypeOne: string;
        unitTypeTwo: string;
        unitTypeForLimitCheck: string;
        maxUnitsSummoned: number;
        killOnCasterDeath: boolean;
    }
    interface WanderNeutral extends Ability {
    }
    interface WarStompNeutralHostile1NeutralHostile extends Ability {
        damageundefined: number;
        terrainDeformationAmplitude: number;
        terrainDeformationDurationMs: number;
    }
    interface WarStompNeutralHostile3NeutralHostile extends Ability {
        damageundefined: number;
        terrainDeformationAmplitude: number;
        terrainDeformationDurationMs: number;
    }
    interface WarStompNeutralHostile2NeutralHostile extends Ability {
        damageundefined: number;
        terrainDeformationAmplitude: number;
        terrainDeformationDurationMs: number;
    }
    interface WindWalkNeutralHostile extends Ability {
        transitionTime: number;
        movementSpeedIncreasePercent: number;
        backstabDamage: number;
        backstabDamageEnabled: boolean;
        startCooldownWhenDecloak: boolean;
    }
    interface GatherWispGoldAndLumber extends Ability {
        lumberPerInterval: number;
        intervalsBeforeChangingTrees: number;
        artAttachmentHeight: number;
    }
    interface GatherWispGoldAndLumberAncientSpirits extends Ability {
        lumberPerInterval: number;
        intervalsBeforeChangingTrees: number;
        artAttachmentHeight: number;
    }
    interface EnvenomedSpears extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
    }
    interface EnvenomedWeaponsNeutralHostile extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
    }
    interface WaygateAbility extends Ability {
        teleportAreaWidth: number;
        teleportAreaHeight: number;
    }
    interface Web extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface WebNeutralHostile extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface ItemHeroStatBonusPlus1Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus3Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus4Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus5Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus6Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus5AllStats extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus1AllStats extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus2AllStats extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus1Strength extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemAttackSpeedBonusGreater extends Ability {
        attackSpeedIncrease: number;
    }
    interface ItemHeroStatBonusPlus3Strength extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus4Strength extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus5Strength extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus6Strength extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus1Intelligence extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus3Intelligence extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus4Intelligence extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus5Intelligence extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus6Intelligence extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemIntOrAgiOrStrGain extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemAgilityGain extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemIntelligenceGain extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemStrengthGain extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemAgilityGainPlus2 extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemIntelligenceGainPlus2 extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemStrengthGainPlus2 extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemPermanentDamageGainItemAttackDamageGain extends Ability {
        attackModification: number;
    }
    interface ItemDamageBonusPlus3 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus6 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus9 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus12 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus15 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus1 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus2 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus4 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus5 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus7 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus8 extends Ability {
        attackBonus: number;
    }
    interface ItemDamageBonusPlus10 extends Ability {
        attackBonus: number;
    }
    interface ItemLifeSteal extends Ability {
        lifeStolenPerAttack: number;
    }
    interface BlinkItemVersion extends Ability {
        maximumRange: number;
        minimumRange: number;
    }
    interface BuildTinyCastle extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyGreatHall extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyScoutTower extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyBlacksmith extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyFarm extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyLumberMill extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyBarracks extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface BuildTinyAltarOfKings extends Ability {
        unitCreatedPerPlayerRace: string;
    }
    interface CycloneItem extends Ability {
        canBeDispelled: boolean;
    }
    interface ItemArmorBonusPlus1 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemArmorBonusPlus2 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemArmorBonusPlus3 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemArmorBonusPlus4 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemArmorBonusPlus5 extends Ability {
        defenseBonusundefined: number;
    }
    interface GlyphOfFortification extends Ability {
        upgradeLevels: number;
        upgradeType: string;
    }
    interface GlyphOfFortification extends Ability {
        upgradeLevels: number;
        upgradeType: string;
    }
    interface ItemExperienceGain extends Ability {
        experienceGained: number;
    }
    interface ItemExperienceGainGreater extends Ability {
        experienceGained: number;
    }
    interface ItemBlueDrakeSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemBlueDragonspawnOverseerSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemRockGolemSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemDoomGuardSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemFelStalkerSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemSkeletonSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemIceRevenantSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemUrsaWarriorSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemCaptureTheFlag extends Ability {
    }
    interface ItemCaptureTheFlagHuman extends Ability {
    }
    interface ItemCaptureTheFlagOrc extends Ability {
    }
    interface ItemCaptureTheFlagNightElf extends Ability {
    }
    interface ItemCaptureTheFlagUndead extends Ability {
    }
    interface ItemOrcishBattleStandard extends Ability {
    }
    interface FlareGun extends Ability {
        detectionTypeundefined: string;
        delayForTargetEffect: number;
    }
    interface UndefinedItem extends Ability {
        damageundefined: number;
        duration: number;
        impactDelay: number;
        summonedUnit: string;
    }
    interface ItemLevelGain extends Ability {
        levelsGained: number;
    }
    interface ItemPurge1 extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface ItemLifeBonusLeast extends Ability {
        maxLifeGained: number;
    }
    interface ItemLifeBonusLesser extends Ability {
        maxLifeGained: number;
    }
    interface ItemLifeBonusGreater extends Ability {
        maxLifeGained: number;
    }
    interface ItemMoveSpeedBonus extends Ability {
        movementSpeedBonus: number;
    }
    interface ItemBlackArrow extends Ability {
        damageBonusundefined: number;
        numberOfSummonedUnitsundefined: number;
        summonedUnitDurationSeconds: number;
        summonedUnitTypeundefined: string;
    }
    interface ItemAttackBlackArrowBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
        chanceToHitUnitsPercent: number;
        chanceToHitHerosPercent: number;
        chanceToHitSummonsPercent: number;
        effectAbility: string;
    }
    interface ItemAttackCorruptionBonus extends Ability {
        damageBonusDice: number;
        armorPenalty: number;
        enabledAttackIndex: number;
    }
    interface ShadowOrbAbility extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemAttackFireBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemAttackFireBonusGuldan extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemFreezeDamageBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemAttackFrostBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemAttackLightningBonusNew extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
        chanceToHitUnitsPercent: number;
        chanceToHitHerosPercent: number;
        chanceToHitSummonsPercent: number;
        effectAbility: string;
    }
    interface ItemAttackLightningBonus extends Ability {
        damageBonusDice: number;
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface ItemAttackSlowBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
        chanceToHitUnitsPercent: number;
        chanceToHitHerosPercent: number;
        chanceToHitSummonsPercent: number;
        effectAbility: string;
    }
    interface ItemAttackPoisonBonus extends Ability {
        damageBonusDice: number;
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface PoisonStingOrbOfVenom extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingType: string;
    }
    interface ReanimationSpecialCampaignItem extends Ability {
        inheritUpgrades: boolean;
        raisedUnitsAreInvulnerable: boolean;
        numberOfCorpsesRaisedundefined: number;
    }
    interface ItemLifeRegeneration extends Ability {
        hitPointsRegeneratedPerSecond: number;
    }
    interface ItemLifeRegenerationLesser extends Ability {
        hitPointsRegeneratedPerSecond: number;
    }
    interface ItemSightRangeBonus extends Ability {
        sightRangeBonus: number;
    }
    interface ItemSlowOrbVersion extends Ability {
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        alwaysAutocastundefined: boolean;
    }
    interface ItemSoulTheft extends Ability {
    }
    interface ItemSoulPossession extends Ability {
    }
    interface ItemImmolation extends Ability {
        damagePerDuration: number;
        manaUsedPerSecond: number;
        extraManaRequired: number;
    }
    interface ItemCommand extends Ability {
        maximumCreepLevelundefined: number;
    }
    interface ItemAreaTreeOrWallDamage extends Ability {
    }
    interface ItemTemporaryAreaArmorBonus extends Ability {
        defenseBonusundefined: number;
        hitPointsGainedundefined: number;
        manaPointsGainedundefined: number;
    }
    interface ItemTemporaryAreaArmorBonusWithLifeAndManaHealing extends Ability {
        defenseBonusundefined: number;
        hitPointsGainedundefined: number;
        manaPointsGainedundefined: number;
    }
    interface ItemAreaDetection extends Ability {
        detectionRadiusundefined: string;
    }
    interface ItemDispel extends Ability {
        manaLossPerUnit: number;
        damageToSummonedUnits: number;
    }
    interface ItemDispelWithCooldown extends Ability {
        manaLossPerUnit: number;
        damageToSummonedUnits: number;
    }
    interface PowerupDispel extends Ability {
        manaLossPerUnit: number;
        damageToSummonedUnits: number;
    }
    interface ItemHealingLesser extends Ability {
        hitPointsGainedundefined: number;
    }
    interface ItemHealingGreater extends Ability {
        hitPointsGainedundefined: number;
    }
    interface LeastHealingSlowCooldown extends Ability {
        hitPointsGainedundefined: number;
    }
    interface ItemAreaHealing extends Ability {
        hitPointsGainedundefined: number;
    }
    interface ItemAreaHealingGreater extends Ability {
        hitPointsGainedundefined: number;
    }
    interface PowerupAreaHealingLesser extends Ability {
        hitPointsGainedundefined: number;
    }
    interface PowerupAreaHealing extends Ability {
        hitPointsGainedundefined: number;
    }
    interface PowerupAreaHealingGreater extends Ability {
        hitPointsGainedundefined: number;
    }
    interface HealingWardItem extends Ability {
        wardUnitTypeundefined: string;
    }
    interface SentryWardItem extends Ability {
        wardUnitTypeundefined: string;
    }
    interface ItemIllusions extends Ability {
        damageDealtPercentOfNormal: number;
        damageReceivedMultiplier: number;
    }
    interface ItemTemporaryInvisibilityLesser extends Ability {
    }
    interface ItemTemporaryInvisibilityGreater extends Ability {
    }
    interface ItemTemporaryInvulnerability extends Ability {
        isMagicImmune: boolean;
    }
    interface ItemTemporaryInvulnerabilityLesser extends Ability {
        isMagicImmune: boolean;
    }
    interface ItemTemporaryInvulnerabilityDivinity extends Ability {
        isMagicImmune: boolean;
    }
    interface ItemManaRegainLesser extends Ability {
        manaPointsGainedundefined: number;
    }
    interface ItemManaRegainGreater extends Ability {
        manaPointsGainedundefined: number;
    }
    interface ItemAreaManaRegain extends Ability {
        manaPointsGainedundefined: number;
    }
    interface RuneAreaManaRegain extends Ability {
        manaPointsGainedundefined: number;
    }
    interface RuneAreaManaRegainGreater extends Ability {
        manaPointsGainedundefined: number;
    }
    interface ItemPlaceGoblinLandMine extends Ability {
        unitTypeundefined: string;
    }
    interface ItemRecall extends Ability {
        maximumNumberOfUnitsundefined: number;
        useTeleportClusteringundefined: boolean;
    }
    interface ItemManaRegeneration extends Ability {
        manaRegenerationBonusAsFractionOfNormal: number;
    }
    interface UndefinedLesser extends Ability {
        manaRegenerationBonusAsFractionOfNormal: number;
    }
    interface ItemReincarnation extends Ability {
        delayAfterDeathSeconds: number;
        restoredLife: number;
        restoredMana1ForCurrent: number;
    }
    interface ItemHealOrManaRegain extends Ability {
        hitPointsRestored: number;
        manaPointsRestored: number;
    }
    interface ItemAreaHealOrManaRegain extends Ability {
        hitPointsRestored: number;
        manaPointsRestored: number;
    }
    interface RuneAreaHealOrManaRegain extends Ability {
        hitPointsRestored: number;
        manaPointsRestored: number;
    }
    interface ItemTemporarySpeedBonus extends Ability {
        movementSpeedIncrease: number;
    }
    interface ScrollOfHaste extends Ability {
        movementSpeedIncrease: number;
    }
    interface RuneOfSpeed extends Ability {
        movementSpeedIncrease: number;
    }
    interface ItemTownPortal extends Ability {
        maximumNumberOfUnitsundefined: number;
        useTeleportClusteringundefined: boolean;
    }
    interface UndefinedItem extends Ability {
        armorBonusundefined: number;
        percentBonusundefined: boolean;
    }
    interface UndefinedItem extends Ability {
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
        attackDamageIncreaseundefined: number;
    }
    interface UndefinedItem extends Ability {
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
        attackDamageIncrease: number;
        playChannelAnimation: boolean;
    }
    interface UndefinedItem extends Ability {
        manaRegenerationIncrease: number;
        percentBonus: boolean;
    }
    interface UndefinedItem extends Ability {
        attackDamageStolenPercent: number;
    }
    interface UndefinedItem extends Ability {
        damageBonusPercent: number;
        meleeBonus: boolean;
        rangedBonus: boolean;
        flatBonus: boolean;
    }
    interface UndefinedItem extends Ability {
        movementSpeedIncreasePercentundefined: number;
        attackSpeedIncreasePercent: number;
    }
    interface UndefinedItem extends Ability {
        movementSpeedIncreasePercentundefined: number;
        lifeRegenerationIncreasePercent: number;
        percentBonusundefined: boolean;
    }
    interface UltravisionItem extends Ability {
    }
    interface LightningShieldItem extends Ability {
        damagePerSecondSecond: number;
        damagePerSecondundefined: number;
    }
    interface ItemAntiMagicShell extends Ability {
        shieldLife: number;
        manaLoss: number;
        damageToSummonedUnitsundefined: number;
        magicDamageReductionundefined: number;
    }
    interface ItemAnimateDead extends Ability {
        inheritUpgrades: boolean;
        raisedUnitsAreInvulnerable: boolean;
        numberOfCorpsesRaisedundefined: number;
    }
    interface ItemResurrection extends Ability {
        numberOfCorpsesRaisedundefined: number;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface RoarItem extends Ability {
        damageIncreasePercentundefined: number;
        defenseIncreaseundefined: number;
        lifeRegenerationRate: number;
        manaRegen: number;
        preferHostiles: boolean;
        preferFriendlies: boolean;
        maxUnits: number;
    }
    interface EvasionItem extends Ability {
        chanceToEvadeundefined: number;
    }
    interface SpellImmunityItem extends Ability {
        magicDamageFactor: number;
    }
    interface ItemPermanentLifeGainPlus50 extends Ability {
        maxLifeGained: number;
    }
    interface ItemManaBonusLeast extends Ability {
        maxManaGained: number;
    }
    interface ItemManaBonusGreater extends Ability {
        maxManaGained: number;
    }
    interface ItemAttackSpeedBonusGlovesOfHaste extends Ability {
        attackSpeedIncrease: number;
    }
    interface HealingSalve extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface ClarityPotion extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface ScrollOfRegeneration extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface LesserClarityPotion extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffect extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffectII extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffectIII extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffectIV extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffectV extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface GenericItemRejuvEffectVI extends Ability {
        lifeRegenerated: number;
        manaRegenerated: number;
        allowWhenFullundefined: string;
        noTargetRequiredundefined: boolean;
        dispelOnAttack: boolean;
    }
    interface ChestOfGold extends Ability {
        goldGiven: number;
    }
    interface BundleOfLumber extends Ability {
        lumberGiven: number;
    }
    interface ItemRevealEntireMap extends Ability {
        detectionTypeundefined: string;
    }
    interface ItemChainDispel extends Ability {
        manaLossPerUnitundefined: number;
        summonedUnitDamageundefined: number;
        maximumDispelledUnits: number;
    }
    interface ItemWeb extends Ability {
        airUnitLowerDuration: number;
        airUnitHeight: number;
        meleeAttackRange: number;
    }
    interface MonsterLure extends Ability {
        numberOfLures: number;
        activationDelayundefined: number;
        lureIntervalSeconds: number;
        lureUnitType: string;
    }
    interface ChangeTimeOfDay extends Ability {
        newTimeOfDayHour: number;
        newTimeOfDayMinute: number;
    }
    interface RandomItem extends Ability {
    }
    interface SpellDamageReduction extends Ability {
        damageBonusundefined: number;
        damageReductionundefined: number;
    }
    interface BlightPlacement extends Ability {
        expansionAmount: number;
        createsBlight: boolean;
    }
    interface VampiricPotion extends Ability {
        damageBonusundefined: number;
        lifeStealAmount: number;
        amountIsRawValue: boolean;
    }
    interface Steal extends Ability {
        lifeConvertedToMana: number;
        lifeConvertedToLife: number;
        manaConversionAsPercent: boolean;
        lifeConversionAsPercent: boolean;
        leaveTargetAlive: boolean;
    }
    interface MechanicalCritter extends Ability {
        numberOfUnitsCreatedundefined: number;
    }
    interface WandOfShadowsight extends Ability {
    }
    interface StaffOfPreservation extends Ability {
        buildingTypesAllowed: string;
    }
    interface StaffOfSanctuary extends Ability {
        buildingTypesAllowedundefined: string;
        heroRegenerationDelay: number;
        unitRegenerationDelay: number;
        magicDamageReductionundefined: number;
        hitPointsPerSecondundefined: number;
    }
    interface SpellShieldAmulet extends Ability {
    }
    interface SpellShieldRune extends Ability {
        shieldCooldownTime: number;
    }
    interface TomeOfRetraining extends Ability {
    }
    interface StaffOfTeleportation extends Ability {
        numberOfUnitsTeleported: number;
        castingDelay: number;
        useTeleportClustering: boolean;
    }
    interface SpellBook extends Ability {
        spellList: string;
        sharedSpellCooldown: boolean;
        minimumSpells: number;
        maximumSpells: number;
        baseOrderIDundefined: string;
    }
    interface RaiseDeadItem extends Ability {
        unitsSummonedTypeOne: number;
        unitsSummonedTypeTwo: number;
        unitTypeOne: string;
        unitTypeTwo: string;
        unitTypeForLimitCheck: string;
    }
    interface DustOfAppearance extends Ability {
        detectionTypeundefined: string;
    }
    interface ItemDivineShield extends Ability {
        canDeactivate: boolean;
    }
    interface ItemSilence extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface ItemPurge2 extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface ItemPurge3 extends Ability {
        movementUpdateFrequencyundefined: number;
        attackUpdateFrequencyundefined: number;
        summonedUnitDamageundefined: number;
        unitPauseDuration: number;
        heroPauseDuration: number;
        manaLossundefined: number;
    }
    interface CloudOfFog extends Ability {
        attacksPrevented: string;
        chanceToMissPercent: number;
        movementSpeedModifier: number;
        attackSpeedModifier: number;
    }
    interface LesserRuneResurrection extends Ability {
        numberOfCorpsesRaisedundefined: number;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface GreaterRuneResurrection extends Ability {
        numberOfCorpsesRaisedundefined: number;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface Rebirth extends Ability {
    }
    interface SpiritLinkArea extends Ability {
        distributedDamageFactor: number;
        maximumNumberOfTargetsundefined: number;
    }
    interface DarkSummoning extends Ability {
        useTeleportClustering: boolean;
        maximumUnits: number;
        castingDelaySeconds: number;
    }
    interface RuneOfTheWatcher extends Ability {
        wardUnitTypeundefined: string;
    }
    interface UnholyFrenzyItem extends Ability {
        attackSpeedBonusPercent: number;
        damagePerSecondundefined: number;
    }
    interface ItemArmorBonusPlus10 extends Ability {
        defenseBonusundefined: number;
    }
    interface ControlMagicItem extends Ability {
        maximumCreepLevelundefined: number;
        manaPerSummonedHitpoint: number;
        chargeForCurrentLife: number;
    }
    interface ItemManaBonus100 extends Ability {
        maxManaGained: number;
    }
    interface FingerOfDeathItem extends Ability {
        graphicDelay: number;
        graphicDuration: number;
        damageundefined: number;
    }
    interface DeathPactItem extends Ability {
        lifeConvertedToMana: number;
        lifeConvertedToLife: number;
        manaConversionAsPercent: boolean;
        lifeConversionAsPercent: boolean;
        leaveTargetAlive: boolean;
    }
    interface ItemManaBonus75 extends Ability {
        maxManaGained: number;
    }
    interface ItemPermanentLifeGainLesser extends Ability {
        maxLifeGained: number;
    }
    interface DefendPassiveDefenseItem extends Ability {
        damageTakenPercentundefined: number;
        damageDealtPercentundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        magicDamageReductionundefined: number;
        chanceToDeflect: number;
        deflectDamageTakenPiercing: number;
        deflectDamageTakenSpells: number;
    }
    interface ItemArmorBonusPlus8 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemArmorBonusPlus7 extends Ability {
        defenseBonusundefined: number;
    }
    interface ItemLifeBonusLeast extends Ability {
        maxLifeGained: number;
    }
    interface ItemHealingLeast extends Ability {
        hitPointsGainedundefined: number;
    }
    interface ItemHeroStatBonusPlus10Agility extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemResurrectionCooldown extends Ability {
        numberOfCorpsesRaisedundefined: number;
        raisedUnitsAreInvulnerable: boolean;
    }
    interface BashItem extends Ability {
        chanceToBash: number;
        damageMultiplierundefined: number;
        damageBonusundefined: number;
        chanceToMiss: number;
        neverMissundefined: boolean;
    }
    interface ItemDamageBonusPlus20 extends Ability {
        attackBonus: number;
    }
    interface WateryMinionItem extends Ability {
        summonedUnitType: string;
        summonedUnitCount: number;
    }
    interface SummonHeadhunterItem extends Ability {
        summonedUnitundefined: string;
        numberOfSummonedUnits: number;
    }
    interface ItemManaBonus200 extends Ability {
        maxManaGained: number;
    }
    interface RegenerationAuraItem extends Ability {
        amountOfHitPointsRegenerated: number;
        percentage: boolean;
    }
    interface HolyLightItem extends Ability {
        amountHealedOrDamagedundefined: number;
    }
    interface SlowPoisonItem extends Ability {
        damagePerSecondundefined: number;
        movementSpeedFactorundefined: number;
        attackSpeedFactorundefined: number;
        stackingTypeundefined: string;
    }
    interface PenguinSqueek extends Ability {
        hitPointsGainedundefined: number;
    }
    interface MeleeFireDamageBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface MeleeColdDamageBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
    }
    interface MeleeLightningDamageBonus extends Ability {
        damageBonusundefined: number;
        enabledAttackIndex: number;
        chanceToHitUnitsPercent: number;
        chanceToHitHerosPercent: number;
        chanceToHitSummonsPercent: number;
        effectAbility: string;
    }
    interface CriticalStrikeItem extends Ability {
        chanceToCriticalStrike: number;
        damageMultiplier: number;
        damageBonus: number;
        chanceToEvade: number;
        neverMiss: boolean;
        excludeItemDamage: boolean;
    }
    interface ChainLightningItem extends Ability {
        damagePerTarget: number;
        numberOfTargetsHit: number;
        damageReductionPerTarget: number;
    }
    interface ItemHeroStatBonusPlus3AllStats extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface ItemHeroStatBonusPlus4AllStats extends Ability {
        agilityBonus: number;
        intelligenceBonus: number;
        strengthBonusundefined: number;
        hideButton: boolean;
    }
    interface BerserkItem extends Ability {
        movementSpeedIncreaseundefined: number;
        attackSpeedIncreaseundefined: number;
        damageTakenIncrease: number;
    }
    interface RitualDaggerInstantHeal extends Ability {
        leaveTargetAlive: boolean;
        hitPointsGainedundefined: number;
        requiresUndeadTarget: boolean;
        affectsInitialTarget: boolean;
        targetsAllowedForHeal: string;
    }
    interface RitualDaggerRegenerate extends Ability {
        leaveTargetAlive: boolean;
        hitPointsGainedundefined: number;
        requiresUndeadTarget: boolean;
        affectsInitialTarget: boolean;
        targetsAllowedForHeal: string;
    }
    interface ItemAttackHealReductionBonus extends Ability {
        healingMultiplier: number;
    }
    interface SunderingBlades extends Ability {
        bonusDamageFlat: number;
        bonusDamagePercent: number;
        defenseTypeAffected: string;
    }
    interface LongRiflesIcon extends Ability {
    }
    interface AnimalWarTrainingIcon extends Ability {
    }
    interface PhoenixIcon extends Ability {
    }
    interface ImprovedLumberHarvestingImprovedLumberHarvestingAdvancedLumberHarvestingIcon extends Ability {
    }
    interface BruteStrengthIcon extends Ability {
    }
    interface BerserkerUpgradeIcon extends Ability {
    }
    interface ReinforcedDefensesIcon extends Ability {
    }
    interface SpikedBarricadesSpikedBarricadesImprovedSpikedBarricadesIcon extends Ability {
    }
    interface TrollRegenerationIcon extends Ability {
    }
    interface GhoulFrenzyIcon extends Ability {
    }
    interface ShadeIcon extends Ability {
    }
    interface SkeletalMasteryIcon extends Ability {
    }
    interface ImprovedBowsIcon extends Ability {
    }
    interface MarksmanshipIcon extends Ability {
    }
    interface WellSpringIcon extends Ability {
    }
    interface ItemFurbolgTrackerSummon extends Ability {
        summon1Amount: number;
        summon1UnitType: string;
        summon2Amount: number;
        summon2UnitType: string;
    }
    interface ItemTransmute extends Ability {
        goldCostFactor: number;
        lumberCostFactor: number;
        maxCreepLevelundefined: number;
        allowBounty: boolean;
    }
    interface Prioritize extends Ability {
        initiallyEnabled: boolean;
    }
}
export declare const AbilityProps: ({
    id: "anam";
    name: "name";
    type: "string";
    netsafe: "true";
} | {
    id: "ansf";
    name: "editorSuffix";
    type: "string";
    netsafe: "true";
} | {
    id: "aher";
    name: "heroAbility";
    type: "bool";
    netsafe: "false";
} | {
    id: "aite";
    name: "itemAbility";
    type: "bool";
    netsafe: "false";
} | {
    id: "arac";
    name: "race";
    type: "unitRace";
    netsafe: "false";
} | {
    id: "abpx";
    name: "buttonPositionNormalX";
    type: "int";
    netsafe: "true";
} | {
    id: "abpy";
    name: "buttonPositionNormalY";
    type: "int";
    netsafe: "true";
} | {
    id: "aubx";
    name: "buttonPositionTurnOffX";
    type: "int";
    netsafe: "true";
} | {
    id: "auby";
    name: "buttonPositionTurnOffY";
    type: "int";
    netsafe: "true";
} | {
    id: "arpx";
    name: "buttonPositionResearchX";
    type: "int";
    netsafe: "true";
} | {
    id: "arpy";
    name: "buttonPositionResearchY";
    type: "int";
    netsafe: "true";
} | {
    id: "aart";
    name: "iconNormal";
    type: "icon";
    netsafe: "true";
} | {
    id: "auar";
    name: "iconTurnOff";
    type: "icon";
    netsafe: "true";
} | {
    id: "arar";
    name: "iconResearch";
    type: "icon";
    netsafe: "true";
} | {
    id: "acat";
    name: "caster";
    type: "modelList";
    netsafe: "true";
} | {
    id: "atat";
    name: "target";
    type: "modelList";
    netsafe: "true";
} | {
    id: "asat";
    name: "special";
    type: "modelList";
    netsafe: "true";
} | {
    id: "aeat";
    name: "effect";
    type: "modelList";
    netsafe: "true";
} | {
    id: "aaea";
    name: "areaEffect";
    type: "modelList";
    netsafe: "true";
} | {
    id: "alig";
    name: "lightningEffects";
    type: "lightningList";
    netsafe: "true";
} | {
    id: "amat";
    name: "missileArt";
    type: "modelList";
    netsafe: "true";
} | {
    id: "amsp";
    name: "missileSpeed";
    type: "int";
    netsafe: "false";
} | {
    id: "amac";
    name: "missileArc";
    type: "unreal";
    netsafe: "true";
} | {
    id: "amho";
    name: "missileHomingEnabled";
    type: "bool";
    netsafe: "false";
} | {
    id: "atac";
    name: "targetAttachments";
    type: "int";
    netsafe: "true";
} | {
    id: "ata0";
    name: "targetAttachmentPoint1";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ata1";
    name: "targetAttachmentPoint2";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ata2";
    name: "targetAttachmentPoint3";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ata3";
    name: "targetAttachmentPoint4";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ata4";
    name: "targetAttachmentPoint5";
    type: "stringList";
    netsafe: "true";
} | {
    id: "ata5";
    name: "targetAttachmentPoint6";
    type: "stringList";
    netsafe: "true";
} | {
    id: "acac";
    name: "casterAttachments";
    type: "int";
    netsafe: "true";
} | {
    id: "acap";
    name: "casterAttachmentPoint1";
    type: "stringList";
    netsafe: "true";
} | {
    id: "aca1";
    name: "casterAttachmentPoint2";
    type: "stringList";
    netsafe: "true";
} | {
    id: "aspt";
    name: "specialAttachmentPoint";
    type: "stringList";
    netsafe: "true";
} | {
    id: "aani";
    name: "animationNames";
    type: "stringList";
    netsafe: "true";
} | {
    id: "atp1";
    name: "tooltipNormal";
    type: "string";
    netsafe: "true";
} | {
    id: "aut1";
    name: "tooltipTurnOff";
    type: "string";
    netsafe: "true";
} | {
    id: "aub1";
    name: "tooltipNormalExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "auu1";
    name: "tooltipTurnOffExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "aret";
    name: "tooltipLearn";
    type: "string";
    netsafe: "true";
} | {
    id: "arut";
    name: "tooltipLearnExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "arhk";
    name: "hotkeyLearn";
    type: "char";
    netsafe: "true";
} | {
    id: "ahky";
    name: "hotkeyNormal";
    type: "char";
    netsafe: "true";
} | {
    id: "auhk";
    name: "hotkeyTurnOff";
    type: "char";
    netsafe: "true";
} | {
    id: "areq";
    name: "requirements";
    type: "techList";
    netsafe: "false";
} | {
    id: "arqa";
    name: "requirementsLevels";
    type: "intList";
    netsafe: "false";
} | {
    id: "achd";
    name: "checkDependencies";
    type: "bool";
    netsafe: "false";
} | {
    id: "apri";
    name: "priorityForSpellSteal";
    type: "int";
    netsafe: "false";
} | {
    id: "aord";
    name: "orderStringUseOrTurnOn";
    type: "orderString";
    netsafe: "false";
} | {
    id: "aoru";
    name: "orderStringTurnOff";
    type: "orderString";
    netsafe: "false";
} | {
    id: "aoro";
    name: "orderStringActivate";
    type: "orderString";
    netsafe: "false";
} | {
    id: "aorf";
    name: "orderStringDeactivate";
    type: "orderString";
    netsafe: "false";
} | {
    id: "aefs";
    name: "effectSound";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "aefl";
    name: "effectSoundLooping";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "alev";
    name: "levels";
    type: "int";
    netsafe: "false";
} | {
    id: "arlv";
    name: "requiredLevel";
    type: "int";
    netsafe: "false";
} | {
    id: "alsk";
    name: "levelSkipRequirement";
    type: "int";
    netsafe: "false";
} | {
    id: "atar";
    name: "targetsAllowed";
    type: "targetList";
    netsafe: "false";
} | {
    id: "acas";
    name: "castingTime";
    type: "unreal";
    netsafe: "false";
} | {
    id: "adur";
    name: "durationNormal";
    type: "unreal";
    netsafe: "false";
} | {
    id: "ahdu";
    name: "durationHero";
    type: "unreal";
    netsafe: "false";
} | {
    id: "acdn";
    name: "cooldown";
    type: "unreal";
    netsafe: "false";
} | {
    id: "amcs";
    name: "manaCost";
    type: "int";
    netsafe: "false";
} | {
    id: "aare";
    name: "areaOfEffect";
    type: "unreal";
    netsafe: "false";
} | {
    id: "aran";
    name: "castRange";
    type: "unreal";
    netsafe: "false";
} | {
    id: "abuf";
    name: "buffs";
    type: "buffList";
    netsafe: "false";
} | {
    id: "aeff";
    name: "effects";
    type: "effectList";
    netsafe: "false";
} | {
    id: "ausk";
    name: "unitSkinList";
    type: "unitSkinList";
    netsafe: "true";
})[];
export declare const AbilitySpecificProps: {
    AHbz: ({
        id: "Hbz1";
        name: "numberOfWaves";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz2";
        name: "damage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz3";
        name: "numberOfShards";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz4";
        name: "buildingReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz5";
        name: "damagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz6";
        name: "maximumDamagePerWave";
        type: "unreal";
        netsafe: "false";
    })[];
    AHab: ({
        id: "Hab1";
        name: "manaRegenerationIncrease";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hab2";
        name: "percentBonus";
        type: "bool";
        netsafe: "false";
    })[];
    AHmt: ({
        id: "Hmt1";
        name: "numberOfUnitsTeleported";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hmt2";
        name: "castingDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hmt3";
        name: "useTeleportClustering";
        type: "bool";
        netsafe: "false";
    })[];
    AHwe: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    ANst: ({
        id: "Nst1";
        name: "beastsPerSecond";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nst2";
        name: "beastCollisionRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst3";
        name: "damageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst4";
        name: "damageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst5";
        name: "damageDelay";
        type: "unreal";
        netsafe: "false";
    })[];
    ANsg: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    ANsq: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    ANsw: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AOww: ({
        id: "Oww1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oww2";
        name: "magicDamageReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    AOcr: ({
        id: "Ocr1";
        name: "chanceToCriticalStrike";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr2";
        name: "damageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr3";
        name: "damageBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr4";
        name: "chanceToEvade";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr5";
        name: "neverMiss";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ocr6";
        name: "excludeItemDamage";
        type: "bool";
        netsafe: "false";
    })[];
    AOmi: ({
        id: "Omi1";
        name: "numberOfImages";
        type: "int";
        netsafe: "false";
    } | {
        id: "Omi2";
        name: "damageDealtPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Omi3";
        name: "damageTakenPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Omi4";
        name: "animationDelay";
        type: "unreal";
        netsafe: "false";
    })[];
    AOwk: ({
        id: "Owk1";
        name: "transitionTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk2";
        name: "movementSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk3";
        name: "backstabDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk4";
        name: "backstabDamageEnabled";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Owk5";
        name: "startCooldownWhenDecloak";
        type: "bool";
        netsafe: "false";
    })[];
    AHbn: ({
        id: "Hbn1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbn2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AHfs: ({
        id: "Hfs1";
        name: "fullDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs2";
        name: "fullDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs3";
        name: "halfDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs4";
        name: "halfDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs5";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs6";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AHdr: ({
        id: "Ndr1";
        name: "hitPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr2";
        name: "manaPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr3";
        name: "drainIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr4";
        name: "lifeTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr5";
        name: "manaTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr6";
        name: "bonusLifeFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr7";
        name: "bonusLifeDecay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr8";
        name: "bonusManaFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr9";
        name: "bonusManaDecay";
        type: "unreal";
        netsafe: "false";
    })[];
    AHpx: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AUcb: ({
        id: "Rai1";
        name: "unitsSummonedTypeOne";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai2";
        name: "unitsSummonedTypeTwo";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai3";
        name: "unitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Rai4";
        name: "unitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Ucb5";
        name: "maxUnitsSummoned";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ucb6";
        name: "killOnCasterDeath";
        type: "bool";
        netsafe: "false";
    })[];
    AUim: ({
        id: "Uim1";
        name: "waveDistance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim2";
        name: "waveTimeSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim3";
        name: "damageDealtundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim4";
        name: "airTimeSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim5";
        name: "uninterruptible";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Uim6";
        name: "airborneTargetsVulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    AUls: ({
        id: "Uls1";
        name: "numberOfSwarmUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uls2";
        name: "unitReleaseIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uls3";
        name: "maxSwarmUnitsPerTarget";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uls4";
        name: "damageReturnFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uls5";
        name: "damageReturnThreshold";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ulsu";
        name: "swarmUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AUts: ({
        id: "Uts1";
        name: "returnedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts2";
        name: "receivedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts3";
        name: "defenseBonusundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANba: ({
        id: "Nba1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nba2";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nba3";
        name: "summonedUnitDurationSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbau";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANch: {
        id: "Nch1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    }[];
    ANdr: ({
        id: "Ndr1";
        name: "hitPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr2";
        name: "manaPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr3";
        name: "drainIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr4";
        name: "lifeTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr5";
        name: "manaTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr6";
        name: "bonusLifeFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr7";
        name: "bonusLifeDecay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr8";
        name: "bonusManaFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr9";
        name: "bonusManaDecay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "NdrA";
        name: "useBlackArrowEffect";
        type: "bool";
        netsafe: "false";
    })[];
    ANsi: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    AUan: ({
        id: "Uan1";
        name: "numberOfCorpsesRaised";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uan3";
        name: "inheritUpgrades";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    AUdc: {
        id: "Udc1";
        name: "amountHealedOrDamaged";
        type: "unreal";
        netsafe: "false";
    }[];
    AUdp: ({
        id: "Udp1";
        name: "lifeConvertedToMana";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp2";
        name: "lifeConvertedToLife";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp3";
        name: "manaConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp4";
        name: "lifeConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    })[];
    AUau: ({
        id: "Uau1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau2";
        name: "lifeRegenerationIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau3";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AEev: {
        id: "Eev1";
        name: "chanceToEvadeundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AEim: ({
        id: "Eim1";
        name: "damagePerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim2";
        name: "manaDrainedPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim3";
        name: "bufferManaRequired";
        type: "unreal";
        netsafe: "false";
    })[];
    AEmb: ({
        id: "Emb1";
        name: "maxManaDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb2";
        name: "boltDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb3";
        name: "boltLifetime";
        type: "unreal";
        netsafe: "false";
    })[];
    AEme: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme5";
        name: "alternateFormHitPointBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    AUsl: {
        id: "Usl1";
        name: "stunDuration";
        type: "unreal";
        netsafe: "false";
    }[];
    AUav: {
        id: "Uav1";
        name: "attackDamageStolenPercent";
        type: "unreal";
        netsafe: "false";
    }[];
    AUcs: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    })[];
    AUin: ({
        id: "Uin1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin2";
        name: "duration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin3";
        name: "impactDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin4";
        name: "summonedUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    AOcl: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    AOeq: ({
        id: "Oeq1";
        name: "effectDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq2";
        name: "damagePerSecondToBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq3";
        name: "unitsSlowedPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AOfs: {
        id: "Ofs1";
        name: "detectionType";
        type: "detectionType";
        netsafe: "false";
    }[];
    AOsf: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    AEer: {
        id: "Eer1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AEfn: ({
        id: "Efn1";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Efnu";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    AEah: ({
        id: "Eah1";
        name: "damageDealtToAttackers";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eah2";
        name: "damageIsPercentReceived";
        type: "bool";
        netsafe: "false";
    })[];
    AEtq: ({
        id: "Etq1";
        name: "lifeHealed";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Etq2";
        name: "healInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Etq3";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Etq4";
        name: "initialImmunityDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    AUdr: ({
        id: "Udp1";
        name: "lifeConvertedToMana";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp2";
        name: "lifeConvertedToLife";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp3";
        name: "manaConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp4";
        name: "lifeConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    })[];
    AUdd: ({
        id: "Udd1";
        name: "maxLifeDrainedPerSecondPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udd2";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AUfa: ({
        id: "Ufa1";
        name: "armorDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufa2";
        name: "armorBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    AUfu: ({
        id: "Ufa1";
        name: "armorDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufa2";
        name: "armorBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    AUfn: ({
        id: "Ufn1";
        name: "areaOfEffectDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufn2";
        name: "specificTargetDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufn5";
        name: "maximumDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    AHav: ({
        id: "Hav1";
        name: "defenseBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav2";
        name: "hitPointBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav4";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AHbh: ({
        id: "Hbh1";
        name: "chanceToBash";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh2";
        name: "damageMultiplierundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh4";
        name: "chanceToMiss";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh5";
        name: "neverMissundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AHtb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AHtc: ({
        id: "Htc1";
        name: "aOEDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Htc2";
        name: "specificTargetDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Htc3";
        name: "movementSpeedReductionPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Htc4";
        name: "attackSpeedReductionPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Htc5";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANfl: ({
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    })[];
    ANfa: ({
        id: "Hca1";
        name: "extraDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca2";
        name: "movementSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca3";
        name: "attackSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca4";
        name: "stackFlags";
        type: "stackFlags";
        netsafe: "false";
    })[];
    ANto: {
        id: "Ntou";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    ANms: ({
        id: "Nms1";
        name: "manaPerHitPoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nms2";
        name: "damageAbsorbedPercent";
        type: "unreal";
        netsafe: "false";
    })[];
    AHad: ({
        id: "Had1";
        name: "armorBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Had2";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AHds: {
        id: "Hds1";
        name: "canDeactivate";
        type: "bool";
        netsafe: "false";
    }[];
    AHhb: {
        id: "Hhb1";
        name: "amountHealedOrDamagedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AHre: ({
        id: "Hre1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    ANbf: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbf5";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANdb: ({
        id: "Ocr1";
        name: "chanceToCriticalStrike";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr2";
        name: "damageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr3";
        name: "damageBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr4";
        name: "chanceToEvade";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr5";
        name: "neverMiss";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ocr6";
        name: "excludeItemDamage";
        type: "bool";
        netsafe: "false";
    })[];
    ANdh: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    ANef: {
        id: "Nef1";
        name: "summonedUnitTypes";
        type: "unitList";
        netsafe: "false";
    }[];
    ANdo: ({
        id: "Ndo1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndo2";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndo3";
        name: "summonedUnitDurationSecondsundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndo4";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndo5";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndou";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANht: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    ANca: {
        id: "nca1";
        name: "distributedDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ANrf: ({
        id: "Hbz1";
        name: "numberOfWaves";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz2";
        name: "damage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz3";
        name: "numberOfShards";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz4";
        name: "buildingReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz5";
        name: "damagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz6";
        name: "maximumDamagePerWave";
        type: "unreal";
        netsafe: "false";
    })[];
    AHfa: {
        id: "Hfa1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AEst: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AEsf: ({
        id: "Esf1";
        name: "damageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf2";
        name: "damageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf3";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AEar: ({
        id: "Ear1";
        name: "damageBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    })[];
    AOae: ({
        id: "Oae1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oae2";
        name: "attackSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    })[];
    AOre: {
        id: "Ore1";
        name: "reincarnationDelay";
        type: "unreal";
        netsafe: "false";
    }[];
    AOsh: ({
        id: "Osh1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh2";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh3";
        name: "distanceundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AOws: {
        id: "Wrs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AOhw: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    AOhx: ({
        id: "Ply1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ply2";
        name: "morphUnitsGround";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply3";
        name: "morphUnitsAir";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply4";
        name: "morphUnitsAmphibious";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply5";
        name: "morphUnitsWater";
        type: "unitList";
        netsafe: "false";
    })[];
    AOsw: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AEbl: ({
        id: "Ebl1";
        name: "maximumRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ebl2";
        name: "minimumRange";
        type: "unreal";
        netsafe: "false";
    })[];
    AEfk: ({
        id: "Efk1";
        name: "damagePerTargetundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Efk2";
        name: "maximumTotalDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Efk3";
        name: "maximumNumberOfTargets";
        type: "int";
        netsafe: "false";
    } | {
        id: "Efk4";
        name: "maximumSpeedAdjustment";
        type: "unreal";
        netsafe: "false";
    })[];
    AEsh: ({
        id: "Esh1";
        name: "decayingDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh4";
        name: "decayPower";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh5";
        name: "initialDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    AEsv: ({
        id: "Esv1";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Esvu";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANab: ({
        id: "Nab1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nab2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nab3";
        name: "armorPenaltyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nab4";
        name: "primaryDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nab5";
        name: "secondaryDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nab6";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANcr: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncr5";
        name: "moveSpeedBonusInfoPanelOnly";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncr6";
        name: "attackSpeedBonusInfoPanelOnly";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANhs: ({
        id: "Nhs6";
        name: "waveCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs2";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs3";
        name: "missileCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs4";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs5";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANtm: ({
        id: "Ntm1";
        name: "goldCostFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ntm2";
        name: "lumberCostFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ntm3";
        name: "maxCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ntm4";
        name: "allowBounty";
        type: "bool";
        netsafe: "false";
    })[];
    ANeg: ({
        id: "Neg1";
        name: "moveSpeedBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Neg2";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Neg3";
        name: "abilityUpgrade1";
        type: "heroAbilityList";
        netsafe: "false";
    } | {
        id: "Neg4";
        name: "abilityUpgrade2";
        type: "heroAbilityList";
        netsafe: "false";
    } | {
        id: "Neg5";
        name: "abilityUpgrade3";
        type: "heroAbilityList";
        netsafe: "false";
    } | {
        id: "Neg6";
        name: "abilityUpgrade4";
        type: "heroAbilityList";
        netsafe: "false";
    })[];
    ANcs: ({
        id: "Ncs1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs2";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs3";
        name: "missileCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs4";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs5";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs6";
        name: "effectDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ANc1: ({
        id: "Ncs1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs2";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs3";
        name: "missileCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs4";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs5";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs6";
        name: "effectDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ANc2: ({
        id: "Ncs1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs2";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs3";
        name: "missileCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs4";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs5";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs6";
        name: "effectDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ANc3: ({
        id: "Ncs1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs2";
        name: "damageIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs3";
        name: "missileCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ncs4";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs5";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncs6";
        name: "effectDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ANrg: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nrg5";
        name: "strengthBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nrg6";
        name: "defenseBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANg1: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nrg5";
        name: "strengthBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nrg6";
        name: "defenseBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANg2: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nrg5";
        name: "strengthBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nrg6";
        name: "defenseBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANg3: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nrg5";
        name: "strengthBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nrg6";
        name: "defenseBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANsy: ({
        id: "Nsy1";
        name: "spawnInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy2";
        name: "spawnUnitID";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Nsy3";
        name: "spawnUnitDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy4";
        name: "spawnUnitOffset";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy5";
        name: "leashRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsyu";
        name: "factoryUnitID";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANs1: ({
        id: "Nsy1";
        name: "spawnInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy2";
        name: "spawnUnitID";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Nsy3";
        name: "spawnUnitDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy4";
        name: "spawnUnitOffset";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy5";
        name: "leashRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsyu";
        name: "factoryUnitID";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANs2: ({
        id: "Nsy1";
        name: "spawnInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy2";
        name: "spawnUnitID";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Nsy3";
        name: "spawnUnitDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy4";
        name: "spawnUnitOffset";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy5";
        name: "leashRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsyu";
        name: "factoryUnitID";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANs3: ({
        id: "Nsy1";
        name: "spawnInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy2";
        name: "spawnUnitID";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Nsy3";
        name: "spawnUnitDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy4";
        name: "spawnUnitOffset";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsy5";
        name: "leashRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsyu";
        name: "factoryUnitID";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANde: ({
        id: "Nde1";
        name: "chanceToDemolish";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde2";
        name: "damageMultiplierBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde3";
        name: "damageMultiplierUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde4";
        name: "damageMultiplierHeroes";
        type: "unreal";
        netsafe: "false";
    })[];
    ANd1: ({
        id: "Nde1";
        name: "chanceToDemolish";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde2";
        name: "damageMultiplierBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde3";
        name: "damageMultiplierUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde4";
        name: "damageMultiplierHeroes";
        type: "unreal";
        netsafe: "false";
    })[];
    ANd2: ({
        id: "Nde1";
        name: "chanceToDemolish";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde2";
        name: "damageMultiplierBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde3";
        name: "damageMultiplierUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde4";
        name: "damageMultiplierHeroes";
        type: "unreal";
        netsafe: "false";
    })[];
    ANd3: ({
        id: "Nde1";
        name: "chanceToDemolish";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde2";
        name: "damageMultiplierBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde3";
        name: "damageMultiplierUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nde4";
        name: "damageMultiplierHeroes";
        type: "unreal";
        netsafe: "false";
    })[];
    ANic: ({
        id: "Nic1";
        name: "bonusDamageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nic2";
        name: "deathDamageFullAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nic3";
        name: "deathDamageFullArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nic4";
        name: "deathDamageHalfAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nic5";
        name: "deathDamageHalfArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nic6";
        name: "deathDamageDelay";
        type: "unreal";
        netsafe: "false";
    })[];
    ANso: ({
        id: "Nso1";
        name: "damageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nso2";
        name: "damagePeriod";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nso3";
        name: "damagePenalty";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nso4";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nso5";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANlm: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nlm2";
        name: "splitDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nlm3";
        name: "splitAttackCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nlm4";
        name: "maxHitpointFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nlm5";
        name: "lifeDurationSplitBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nlm6";
        name: "generationCount";
        type: "int";
        netsafe: "false";
    })[];
    ANvc: ({
        id: "Nvc1";
        name: "rockRingCount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nvc2";
        name: "waveCountundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nvc3";
        name: "waveInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nvc4";
        name: "buildingDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nvc5";
        name: "fullDamageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nvc6";
        name: "halfDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nvcu";
        name: "destructibleID";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANin: ({
        id: "Uin1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin2";
        name: "duration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin3";
        name: "impactDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin4";
        name: "summonedUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    SNin: ({
        id: "Uin1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin2";
        name: "duration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin3";
        name: "impactDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin4";
        name: "summonedUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANfb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ANfd: ({
        id: "Nfd1";
        name: "graphicDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd2";
        name: "graphicDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd3";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACfd: ({
        id: "Nfd1";
        name: "graphicDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd2";
        name: "graphicDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd3";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACf3: ({
        id: "Nfd1";
        name: "graphicDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd2";
        name: "graphicDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd3";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANdp: ({
        id: "Ndp1";
        name: "spawnedUnits";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ndp2";
        name: "minimumNumberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndp3";
        name: "maximumNumberOfUnits";
        type: "int";
        netsafe: "false";
    })[];
    ANrc: ({
        id: "Nrc1";
        name: "abilityForUnitCreation";
        type: "abilCode";
        netsafe: "false";
    } | {
        id: "Nrc2";
        name: "numberOfUnitsCreated";
        type: "int";
        netsafe: "false";
    })[];
    ANr3: ({
        id: "Nrc1";
        name: "abilityForUnitCreation";
        type: "abilCode";
        netsafe: "false";
    } | {
        id: "Nrc2";
        name: "numberOfUnitsCreated";
        type: "int";
        netsafe: "false";
    })[];
    AEsb: ({
        id: "Esf1";
        name: "damageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf2";
        name: "damageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf3";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANrn: {
        id: "Ore1";
        name: "reincarnationDelay";
        type: "unreal";
        netsafe: "false";
    }[];
    ANdc: ({
        id: "Ndc1";
        name: "raceToConvert";
        type: "unitRace";
        netsafe: "false";
    } | {
        id: "Ndc2";
        name: "conversionUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    SNdc: ({
        id: "Ndc1";
        name: "raceToConvert";
        type: "unitRace";
        netsafe: "false";
    } | {
        id: "Ndc2";
        name: "conversionUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANsl: {
        id: "Nsl1";
        name: "unitToPreserve";
        type: "unitCode";
        netsafe: "false";
    }[];
    AEIl: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme5";
        name: "alternateFormHitPointBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    AEvi: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme5";
        name: "alternateFormHitPointBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    SNeq: ({
        id: "Oeq1";
        name: "effectDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq2";
        name: "damagePerSecondToBuildings";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq3";
        name: "unitsSlowedPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oeq4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    SNdd: ({
        id: "Udd1";
        name: "maxLifeDrainedPerSecondPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udd2";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANmo: ({
        id: "Esf1";
        name: "damageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf2";
        name: "damageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf3";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AEpa: ({
        id: "Poa1";
        name: "extraDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poa2";
        name: "wESTRING_AEVAL_POI1";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poa3";
        name: "wESTRING_AEVAL_POI2";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poa4";
        name: "wESTRING_AEVAL_POI3";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poa5";
        name: "wESTRING_AEVAL_POI4";
        type: "stackFlags";
        netsafe: "false";
    })[];
    ANwm: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AHca: ({
        id: "Hca1";
        name: "extraDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca2";
        name: "movementSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca3";
        name: "attackSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca4";
        name: "stackFlags";
        type: "stackFlags";
        netsafe: "false";
    })[];
    ANbr: ({
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nbr1";
        name: "damageIncrease";
        type: "unreal";
        netsafe: "false";
    })[];
    Arsg: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    Aamk: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    Arsq: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    Arsp: ({
        id: "Nst1";
        name: "beastsPerSecond";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nst2";
        name: "beastCollisionRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst3";
        name: "damageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst4";
        name: "damageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nst5";
        name: "damageDelay";
        type: "unreal";
        netsafe: "false";
    })[];
    ANsb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ANhw: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    Arsw: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    ANhx: ({
        id: "Ply1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ply2";
        name: "morphUnitsGround";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply3";
        name: "morphUnitsAir";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply4";
        name: "morphUnitsAmphibious";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply5";
        name: "morphUnitsWater";
        type: "unitList";
        netsafe: "false";
    })[];
    AOls: ({
        id: "Uls1";
        name: "numberOfSwarmUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uls2";
        name: "unitReleaseIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uls3";
        name: "maxSwarmUnitsPerTarget";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uls4";
        name: "damageReturnFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uls5";
        name: "damageReturnThreshold";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ulsu";
        name: "swarmUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANcf: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbf5";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Acdb: ({
        id: "Ocr1";
        name: "chanceToCriticalStrike";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr2";
        name: "damageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr3";
        name: "damageBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr4";
        name: "chanceToEvade";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr5";
        name: "neverMiss";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ocr6";
        name: "excludeItemDamage";
        type: "bool";
        netsafe: "false";
    })[];
    Acdh: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    Acef: {
        id: "Nef1";
        name: "summonedUnitTypes";
        type: "unitList";
        netsafe: "false";
    }[];
    AOr2: ({
        id: "Oae1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oae2";
        name: "attackSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    })[];
    AOr3: {
        id: "Ore1";
        name: "reincarnationDelay";
        type: "unreal";
        netsafe: "false";
    }[];
    AOs2: ({
        id: "Osh1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh2";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh3";
        name: "distanceundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AOw2: {
        id: "Wrs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ANcl: ({
        id: "Ncl1";
        name: "followThroughTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncl2";
        name: "targetType";
        type: "channelType";
        netsafe: "false";
    } | {
        id: "Ncl3";
        name: "options";
        type: "channelFlags";
        netsafe: "false";
    } | {
        id: "Ncl4";
        name: "artDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ncl5";
        name: "disableOtherAbilities";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ncl6";
        name: "baseOrderIDundefined";
        type: "orderString";
        netsafe: "false";
    })[];
    Aadm: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Andm: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACdm: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACd2: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Aabs: ({
        id: "abs1";
        name: "maximumLifeAbsorbed";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "abs2";
        name: "maximumManaAbsorbed";
        type: "unreal";
        netsafe: "false";
    })[];
    ANav: ({
        id: "Hav1";
        name: "defenseBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav2";
        name: "hitPointBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hav4";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Aall: ({
        id: "Neu1";
        name: "activationRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Neu2";
        name: "interactionType";
        type: "interactionFlags";
        netsafe: "false";
    } | {
        id: "Neu3";
        name: "showSelectUnitButton";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Neu4";
        name: "showUnitIndicator";
        type: "bool";
        netsafe: "false";
    })[];
    Aast: ({
        id: "ast1";
        name: "lifeRestoredFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "ast2";
        name: "manaRestoredFactor";
        type: "unreal";
        netsafe: "false";
    })[];
    ACad: ({
        id: "Uan3";
        name: "inheritUpgrades";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Cad1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    })[];
    Aams: ({
        id: "Ams1";
        name: "summonedUnitDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams2";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams3";
        name: "shieldLife";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ams4";
        name: "manaLoss";
        type: "int";
        netsafe: "false";
    })[];
    Aam2: ({
        id: "Ams1";
        name: "summonedUnitDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams2";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams3";
        name: "shieldLife";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ams4";
        name: "manaLoss";
        type: "int";
        netsafe: "false";
    })[];
    ACam: ({
        id: "Ams1";
        name: "summonedUnitDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams2";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ams3";
        name: "shieldLife";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ams4";
        name: "manaLoss";
        type: "int";
        netsafe: "false";
    })[];
    ACba: ({
        id: "Hab1";
        name: "manaRegenerationIncrease";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hab2";
        name: "percentBonus";
        type: "bool";
        netsafe: "false";
    })[];
    ACac: ({
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Cac1";
        name: "attackDamageIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACav: ({
        id: "Had1";
        name: "armorBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Had2";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    SCae: ({
        id: "Oae1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oae2";
        name: "attackSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    })[];
    Aap1: ({
        id: "Apl1";
        name: "auraDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl3";
        name: "durationOfPlagueWard";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Aplu";
        name: "plagueWardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aap2: ({
        id: "Apl1";
        name: "auraDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl3";
        name: "durationOfPlagueWard";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Aplu";
        name: "plagueWardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aap3: ({
        id: "Apl1";
        name: "auraDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl3";
        name: "durationOfPlagueWard";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Aplu";
        name: "plagueWardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aap4: ({
        id: "Apl1";
        name: "auraDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl3";
        name: "durationOfPlagueWard";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Aplu";
        name: "plagueWardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aap5: ({
        id: "Apl1";
        name: "auraDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Apl3";
        name: "durationOfPlagueWard";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Aplu";
        name: "plagueWardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aoar: ({
        id: "Oar1";
        name: "amountOfHitPointsRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oar2";
        name: "percentage";
        type: "bool";
        netsafe: "false";
    })[];
    Aabr: ({
        id: "Oar1";
        name: "amountOfHitPointsRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oar2";
        name: "percentage";
        type: "bool";
        netsafe: "false";
    })[];
    Aasl: ({
        id: "Slo1";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo2";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo3";
        name: "alwaysAutocastundefined";
        type: "bool";
        netsafe: "false";
    })[];
    ACat: ({
        id: "Ear1";
        name: "damageBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    })[];
    Aakb: ({
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Akb1";
        name: "attackDamageIncrease";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Akb2";
        name: "playChannelAnimation";
        type: "bool";
        netsafe: "false";
    })[];
    Aave: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "ave5";
        name: "lifeRegenerationRatePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abof: ({
        id: "Hfs1";
        name: "fullDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs2";
        name: "fullDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs3";
        name: "halfDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs4";
        name: "halfDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs5";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs6";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbn: ({
        id: "Hbn1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbn2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbh: ({
        id: "Hbh1";
        name: "chanceToBash";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh2";
        name: "damageMultiplierundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh4";
        name: "chanceToMiss";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh5";
        name: "neverMissundefined";
        type: "bool";
        netsafe: "false";
    })[];
    ANbh: ({
        id: "Hbh1";
        name: "chanceToBash";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh2";
        name: "damageMultiplierundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh4";
        name: "chanceToMiss";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh5";
        name: "neverMissundefined";
        type: "bool";
        netsafe: "false";
    })[];
    ANb2: ({
        id: "Hbh1";
        name: "chanceToBash";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh2";
        name: "damageMultiplierundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh4";
        name: "chanceToMiss";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh5";
        name: "neverMissundefined";
        type: "bool";
        netsafe: "false";
    })[];
    Abtl: ({
        id: "Btl1";
        name: "allowedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Btl2";
        name: "summonBusyUnits";
        type: "bool";
        netsafe: "false";
    })[];
    Sbtl: ({
        id: "Btl1";
        name: "allowedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Btl2";
        name: "summonBusyUnits";
        type: "bool";
        netsafe: "false";
    })[];
    Abrf: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Absk: ({
        id: "bsk1";
        name: "movementSpeedIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "bsk2";
        name: "attackSpeedIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "bsk3";
        name: "damageTakenIncrease";
        type: "unreal";
        netsafe: "false";
    })[];
    Sbsk: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    ACbk: ({
        id: "Nba1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nba2";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nba3";
        name: "summonedUnitDurationSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbau";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abds: ({
        id: "Bli1";
        name: "expansionAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bli2";
        name: "createsBlight";
        type: "bool";
        netsafe: "false";
    })[];
    Abdl: ({
        id: "Bli1";
        name: "expansionAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bli2";
        name: "createsBlight";
        type: "bool";
        netsafe: "false";
    })[];
    Abgs: ({
        id: "Bli1";
        name: "expansionAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bli2";
        name: "createsBlight";
        type: "bool";
        netsafe: "false";
    })[];
    Abgl: ({
        id: "Bli1";
        name: "expansionAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bli2";
        name: "createsBlight";
        type: "bool";
        netsafe: "false";
    })[];
    Abgm: ({
        id: "Bgm1";
        name: "goldPerInterval";
        type: "int";
        netsafe: "false";
    } | {
        id: "Bgm2";
        name: "intervalDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bgm3";
        name: "maxNumberOfMiners";
        type: "int";
        netsafe: "false";
    } | {
        id: "Bgm4";
        name: "radiusOfMiningRing";
        type: "unreal";
        netsafe: "false";
    })[];
    ANbl: ({
        id: "Ebl1";
        name: "maximumRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ebl2";
        name: "minimumRange";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbz: ({
        id: "Hbz1";
        name: "numberOfWaves";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz2";
        name: "damage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz3";
        name: "numberOfShards";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz4";
        name: "buildingReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz5";
        name: "damagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz6";
        name: "maximumDamagePerWave";
        type: "unreal";
        netsafe: "false";
    })[];
    Ablo: ({
        id: "Blo1";
        name: "attackSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo2";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo3";
        name: "scalingFactor";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbl: ({
        id: "Blo1";
        name: "attackSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo2";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo3";
        name: "scalingFactor";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbb: ({
        id: "Blo1";
        name: "attackSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo2";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo3";
        name: "scalingFactor";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbc: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbf5";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACbf: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbf5";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Abur: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abu2: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abu3: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abu5: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Abdt: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Acan: ({
        id: "Can1";
        name: "hitPointsPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Can2";
        name: "maxHitPoints";
        type: "unreal";
        netsafe: "false";
    })[];
    Acn2: ({
        id: "Can1";
        name: "hitPointsPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Can2";
        name: "maxHitPoints";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcn: ({
        id: "Can1";
        name: "hitPointsPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Can2";
        name: "maxHitPoints";
        type: "unreal";
        netsafe: "false";
    })[];
    Abun: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Advc: ({
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "Dev2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dev3";
        name: "maximumCreepLevel";
        type: "int";
        netsafe: "false";
    })[];
    Sch2: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Sch5: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Sch4: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Sch3: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Aenc: {
        id: "Car1";
        name: "cargoCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Achd: ({
        id: "Chd1";
        name: "movementUpdateFrequency";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Chd2";
        name: "attackUpdateFrequency";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Chd3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACca: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcv: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    })[];
    ACc2: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    })[];
    ACc3: ({
        id: "Ucs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs2";
        name: "maxDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcl: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    Ache: ({
        id: "idc1";
        name: "manaLossPerUnitundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "idc2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "idc3";
        name: "maximumDispelledUnits";
        type: "int";
        netsafe: "false";
    })[];
    Sca1: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sca2: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sca3: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sca4: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sca5: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sca6: {
        id: "Cha1";
        name: "newUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Achl: {
        id: "Chl1";
        name: "unitTypeAllowed";
        type: "unitCode";
        netsafe: "false";
    }[];
    ACch: {
        id: "Nch1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    }[];
    ACce: {
        id: "nca1";
        name: "distributedDamageFactorundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Aclf: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcw: ({
        id: "Hca1";
        name: "extraDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca2";
        name: "movementSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca3";
        name: "attackSpeedFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hca4";
        name: "stackFlags";
        type: "stackFlags";
        netsafe: "false";
    })[];
    Acmg: ({
        id: "Nch1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Cmg2";
        name: "manaPerSummonedHitpoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cmg3";
        name: "chargeForCurrentLife";
        type: "unreal";
        netsafe: "false";
    })[];
    Acpf: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Acor: {
        id: "Cor1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Acoa: ({
        id: "coau";
        name: "resultingUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa1";
        name: "partnerUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Acoh: ({
        id: "coau";
        name: "resultingUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa1";
        name: "partnerUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aco2: ({
        id: "coau";
        name: "resultingUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa1";
        name: "partnerUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa2";
        name: "moveToPartner";
        type: "bool";
        netsafe: "false";
    })[];
    Aco3: ({
        id: "coau";
        name: "resultingUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa1";
        name: "partnerUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "coa2";
        name: "moveToPartner";
        type: "bool";
        netsafe: "false";
    })[];
    Acri: ({
        id: "Cri1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri3";
        name: "damageReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    Scri: ({
        id: "Cri1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri3";
        name: "damageReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcr: ({
        id: "Cri1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cri3";
        name: "damageReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    ACct: ({
        id: "Ocr1";
        name: "chanceToCriticalStrike";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr2";
        name: "damageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr3";
        name: "damageBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr4";
        name: "chanceToEvade";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr5";
        name: "neverMiss";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ocr6";
        name: "excludeItemDamage";
        type: "bool";
        netsafe: "false";
    })[];
    Acrs: {
        id: "Crs";
        name: "chanceToMissundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ACcs: {
        id: "Crs";
        name: "chanceToMissundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Acyc: {
        id: "cyc1";
        name: "canBeDispelled";
        type: "bool";
        netsafe: "false";
    }[];
    Acny: {
        id: "cyc1";
        name: "canBeDispelled";
        type: "bool";
        netsafe: "false";
    }[];
    ACcy: {
        id: "cyc1";
        name: "canBeDispelled";
        type: "bool";
        netsafe: "false";
    }[];
    SCc1: {
        id: "cyc1";
        name: "canBeDispelled";
        type: "bool";
        netsafe: "false";
    }[];
    ACdc: {
        id: "Udc1";
        name: "amountHealedOrDamaged";
        type: "unreal";
        netsafe: "false";
    }[];
    Adda: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    })[];
    Amnx: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    })[];
    Amnz: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    })[];
    Adec: ({
        id: "dcp1";
        name: "partnerUnitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "dcp2";
        name: "partnerUnitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    })[];
    Adef: ({
        id: "Def1";
        name: "damageTakenPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def2";
        name: "damageDealtPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def3";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def4";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def5";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def6";
        name: "chanceToDeflect";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def7";
        name: "deflectDamageTakenPiercing";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def8";
        name: "deflectDamageTakenSpells";
        type: "unreal";
        netsafe: "false";
    })[];
    Adt1: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Atru: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Adtg: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    ANtr: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Agyv: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Adts: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Adtn: ({
        id: "Dtn1";
        name: "manaLossPerUnitundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dtn2";
        name: "damageToSummonedUnitsundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Adev: {
        id: "Dev1";
        name: "maxCreepLevel";
        type: "int";
        netsafe: "false";
    }[];
    ACdv: {
        id: "Dev1";
        name: "maxCreepLevel";
        type: "int";
        netsafe: "false";
    }[];
    Advm: ({
        id: "dvm1";
        name: "lifePerUnit";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm2";
        name: "manaPerUnit";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm3";
        name: "lifePerBuff";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm4";
        name: "manaPerBuff";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm5";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm6";
        name: "ignoreFriendlyBuffs";
        type: "bool";
        netsafe: "false";
    })[];
    ACde: ({
        id: "dvm1";
        name: "lifePerUnit";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm2";
        name: "manaPerUnit";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm3";
        name: "lifePerBuff";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm4";
        name: "manaPerBuff";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm5";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "dvm6";
        name: "ignoreFriendlyBuffs";
        type: "bool";
        netsafe: "false";
    })[];
    Adch: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Adcn: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Adis: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Adsm: ({
        id: "Adm1";
        name: "manaLossundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Adm2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACds: {
        id: "Hds1";
        name: "canDeactivate";
        type: "bool";
        netsafe: "false";
    }[];
    ACdr: ({
        id: "Ndr1";
        name: "hitPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr2";
        name: "manaPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr3";
        name: "drainIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr4";
        name: "lifeTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr5";
        name: "manaTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr6";
        name: "bonusLifeFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr7";
        name: "bonusLifeDecay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr8";
        name: "bonusManaFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr9";
        name: "bonusManaDecay";
        type: "unreal";
        netsafe: "false";
    })[];
    Aeat: ({
        id: "Eat1";
        name: "ripDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eat2";
        name: "eatDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eat3";
        name: "hitPointsGained";
        type: "unreal";
        netsafe: "false";
    })[];
    Aegr: ({
        id: "Def1";
        name: "damageTakenPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def2";
        name: "damageDealtPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def3";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def4";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def5";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def6";
        name: "chanceToDeflect";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def7";
        name: "deflectDamageTakenPiercing";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def8";
        name: "deflectDamageTakenSpells";
        type: "unreal";
        netsafe: "false";
    })[];
    ANen: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    Aens: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    ACen: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    Aent: {
        id: "ent1";
        name: "resultingUnitType";
        type: "unitCode";
        netsafe: "false";
    }[];
    Aegm: ({
        id: "Egm1";
        name: "goldPerIntervalundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Egm2";
        name: "intervalDurationundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Aenr: {
        id: "Eer1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Aenw: {
        id: "Eer1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Aetf: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ACev: {
        id: "Eev1";
        name: "chanceToEvadeundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ACes: {
        id: "Eev1";
        name: "chanceToEvadeundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Aexh: ({
        id: "exh1";
        name: "maximumNumberOfCorpsesundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "exhu";
        name: "unitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANfy: ({
        id: "Nfy1";
        name: "spawnIntervalundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfy2";
        name: "leashRangeundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfyu";
        name: "spawnUnitIDundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    Afae: ({
        id: "Fae1";
        name: "defenseReduction";
        type: "int";
        netsafe: "false";
    } | {
        id: "Fae2";
        name: "alwaysAutocast";
        type: "bool";
        netsafe: "false";
    })[];
    Afa2: ({
        id: "Fae1";
        name: "defenseReduction";
        type: "int";
        netsafe: "false";
    } | {
        id: "Fae2";
        name: "alwaysAutocast";
        type: "bool";
        netsafe: "false";
    })[];
    ACff: ({
        id: "Fae1";
        name: "defenseReduction";
        type: "int";
        netsafe: "false";
    } | {
        id: "Fae2";
        name: "alwaysAutocast";
        type: "bool";
        netsafe: "false";
    })[];
    Afbk: ({
        id: "fbk1";
        name: "maxManaDrainedUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk2";
        name: "damageRatioUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk3";
        name: "maxManaDrainedHeros";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk4";
        name: "damageRatioHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk5";
        name: "summonedDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    Afbt: ({
        id: "fbk1";
        name: "maxManaDrainedUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk2";
        name: "damageRatioUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk3";
        name: "maxManaDrainedHeros";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk4";
        name: "damageRatioHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk5";
        name: "summonedDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    Afbb: ({
        id: "fbk1";
        name: "maxManaDrainedUnits";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk2";
        name: "damageRatioUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk3";
        name: "maxManaDrainedHeros";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk4";
        name: "damageRatioHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fbk5";
        name: "summonedDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    ACsf: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACs9: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACs8: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACs7: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    Afod: ({
        id: "Nfd1";
        name: "graphicDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd2";
        name: "graphicDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd3";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Awfb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ACfb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Aflk: ({
        id: "flk1";
        name: "mediumDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk2";
        name: "smallDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk3";
        name: "fullDamageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk4";
        name: "mediumDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk5";
        name: "smallDamageAmount";
        type: "unreal";
        netsafe: "false";
    })[];
    Afla: ({
        id: "Fla1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    } | {
        id: "Fla2";
        name: "effectDelayundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Fla3";
        name: "flareCount";
        type: "int";
        netsafe: "false";
    })[];
    ACfs: ({
        id: "Hfs1";
        name: "fullDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs2";
        name: "fullDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs3";
        name: "halfDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs4";
        name: "halfDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs5";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs6";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANfs: ({
        id: "Hfs1";
        name: "fullDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs2";
        name: "fullDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs3";
        name: "halfDamageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs4";
        name: "halfDamageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs5";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hfs6";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACfr: ({
        id: "Efn1";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Efnu";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ACfl: ({
        id: "Ucs3";
        name: "distance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ucs4";
        name: "finalArea";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    })[];
    Afsh: ({
        id: "flk1";
        name: "mediumDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk2";
        name: "smallDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk3";
        name: "fullDamageAmountundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk4";
        name: "mediumDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "flk5";
        name: "smallDamageAmount";
        type: "unreal";
        netsafe: "false";
    })[];
    Afzy: ({
        id: "Blo1";
        name: "attackSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo2";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Blo3";
        name: "scalingFactor";
        type: "unreal";
        netsafe: "false";
    })[];
    ACfa: ({
        id: "Ufa1";
        name: "armorDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufa2";
        name: "armorBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    ACf2: ({
        id: "Ufa1";
        name: "armorDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufa2";
        name: "armorBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    ACfu: ({
        id: "Ufa1";
        name: "armorDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufa2";
        name: "armorBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    ACfn: ({
        id: "Ufn1";
        name: "areaOfEffectDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufn2";
        name: "specificTargetDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ufn5";
        name: "maximumDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    ACcb: {
        id: "Htb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Agho: ({
        id: "Gho1";
        name: "autoAcquireAttackTargets";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Gho2";
        name: "wESTRING_AEVAL_ETH1";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Gho3";
        name: "wESTRING_AEVAL_ETH2";
        type: "bool";
        netsafe: "false";
    })[];
    Aeth: ({
        id: "Eth1";
        name: "immuneToMorphEffects";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Eth2";
        name: "doesNotBlockBuildings";
        type: "bool";
        netsafe: "false";
    })[];
    Agld: ({
        id: "Gld1";
        name: "maxGold";
        type: "int";
        netsafe: "false";
    } | {
        id: "Gld2";
        name: "miningDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Gld3";
        name: "miningCapacity";
        type: "int";
        netsafe: "false";
    })[];
    Agra: ({
        id: "gra1";
        name: "attachDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "gra2";
        name: "removeDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "gra3";
        name: "disabledAttackIndex";
        type: "int";
        netsafe: "false";
    } | {
        id: "gra4";
        name: "enabledAttackIndexundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "gra5";
        name: "maximumAttacks";
        type: "int";
        netsafe: "false";
    })[];
    Agyd: ({
        id: "Gyd1";
        name: "maximumNumberOfCorpses";
        type: "int";
        netsafe: "false";
    } | {
        id: "Gyd2";
        name: "radiusOfGravestones";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Gyd3";
        name: "radiusOfCorpses";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Gydu";
        name: "corpseUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Assk: ({
        id: "Ssk1";
        name: "chanceToReduceDamagePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk2";
        name: "minimumDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk3";
        name: "ignoredDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk4";
        name: "includeRangedDamage";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ssk5";
        name: "includeMeleeDamage";
        type: "bool";
        netsafe: "false";
    })[];
    Ansk: ({
        id: "Ssk1";
        name: "chanceToReduceDamagePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk2";
        name: "minimumDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk3";
        name: "ignoredDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ssk4";
        name: "includeRangedDamage";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ssk5";
        name: "includeMeleeDamage";
        type: "bool";
        netsafe: "false";
    })[];
    Ahar: ({
        id: "Har1";
        name: "damageToTree";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har2";
        name: "lumberCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har3";
        name: "goldCapacity";
        type: "int";
        netsafe: "false";
    })[];
    ANha: ({
        id: "Har1";
        name: "damageToTree";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har2";
        name: "lumberCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har3";
        name: "goldCapacity";
        type: "int";
        netsafe: "false";
    })[];
    Ahrl: ({
        id: "Har1";
        name: "damageToTree";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har2";
        name: "lumberCapacity";
        type: "int";
        netsafe: "false";
    })[];
    Ahr3: ({
        id: "Har1";
        name: "damageToTree";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har2";
        name: "lumberCapacity";
        type: "int";
        netsafe: "false";
    })[];
    Ahr2: ({
        id: "Har1";
        name: "damageToTree";
        type: "int";
        netsafe: "false";
    } | {
        id: "Har2";
        name: "lumberCapacity";
        type: "int";
        netsafe: "false";
    })[];
    Ahea: {
        id: "Hea1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Anhe: {
        id: "Hea1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Anh1: {
        id: "Hea1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Anh2: {
        id: "Hea1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Ahwd: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AChw: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AChv: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    Ahnl: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    AChx: ({
        id: "Ply1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ply2";
        name: "morphUnitsGround";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply3";
        name: "morphUnitsAir";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply4";
        name: "morphUnitsAmphibious";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply5";
        name: "morphUnitsWater";
        type: "unitList";
        netsafe: "false";
    })[];
    Acht: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACim: ({
        id: "Eim1";
        name: "damagePerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim2";
        name: "manaDrainedPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim3";
        name: "bufferManaRequired";
        type: "unreal";
        netsafe: "false";
    })[];
    ACmp: ({
        id: "Uim1";
        name: "waveDistance";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim2";
        name: "waveTimeSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim3";
        name: "damageDealtundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim4";
        name: "airTimeSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uim5";
        name: "uninterruptible";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Uim6";
        name: "airborneTargetsVulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    Ainf: ({
        id: "Inf1";
        name: "damageIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Inf2";
        name: "defenseIncrease";
        type: "int";
        netsafe: "false";
    } | {
        id: "Inf3";
        name: "autocastRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Inf4";
        name: "lifeRegenRate";
        type: "unreal";
        netsafe: "false";
    })[];
    ACif: ({
        id: "Inf1";
        name: "damageIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Inf2";
        name: "defenseIncrease";
        type: "int";
        netsafe: "false";
    } | {
        id: "Inf3";
        name: "autocastRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Inf4";
        name: "lifeRegenRate";
        type: "unreal";
        netsafe: "false";
    })[];
    Aivs: {
        id: "Ivs1";
        name: "transitionTimeSeconds";
        type: "unreal";
        netsafe: "false";
    }[];
    AInv: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Apak: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Aion: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Aihn: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Aien: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Aiun: ({
        id: "inv1";
        name: "itemCapacity";
        type: "int";
        netsafe: "false";
    } | {
        id: "inv2";
        name: "dropItemsOnDeath";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv3";
        name: "canUseItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv4";
        name: "canGetItems";
        type: "bool";
        netsafe: "false";
    } | {
        id: "inv5";
        name: "canDropItems";
        type: "bool";
        netsafe: "false";
    })[];
    Alit: ({
        id: "Lit1";
        name: "graphicDelayundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Lit2";
        name: "graphicDurationundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Alsh: {
        id: "Lsh1";
        name: "damagePerSecondSecond";
        type: "unreal";
        netsafe: "false";
    }[];
    ACls: {
        id: "Lsh1";
        name: "damagePerSecondSecond";
        type: "unreal";
        netsafe: "false";
    }[];
    Aliq: ({
        id: "liq1";
        name: "extraDamagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "liq2";
        name: "movementSpeedReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "liq3";
        name: "attackSpeedReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "liq4";
        name: "repairsAllowed";
        type: "bool";
        netsafe: "false";
    })[];
    Aloa: {
        id: "Loa1";
        name: "allowedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    Sloa: {
        id: "Loa1";
        name: "allowedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    Slo2: {
        id: "Loa1";
        name: "allowedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    Slo3: {
        id: "Loa1";
        name: "allowedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    Amdf: ({
        id: "Def1";
        name: "damageTakenPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def2";
        name: "damageDealtPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def3";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def4";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def5";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def6";
        name: "chanceToDeflect";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def7";
        name: "deflectDamageTakenPiercing";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def8";
        name: "deflectDamageTakenSpells";
        type: "unreal";
        netsafe: "false";
    })[];
    Amim: {
        id: "mim1";
        name: "magicDamageFactor";
        type: "unreal";
        netsafe: "false";
    }[];
    ACmi: {
        id: "mim1";
        name: "magicDamageFactor";
        type: "unreal";
        netsafe: "false";
    }[];
    ACm2: {
        id: "mim1";
        name: "magicDamageFactor";
        type: "unreal";
        netsafe: "false";
    }[];
    ACm3: {
        id: "mim1";
        name: "magicDamageFactor";
        type: "unreal";
        netsafe: "false";
    }[];
    Amls: {
        id: "mls1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Ambt: ({
        id: "Mbt1";
        name: "manaGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt2";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt3";
        name: "autocastRequirement";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt4";
        name: "waterHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt5";
        name: "regenerateOnlyAtNight";
        type: "bool";
        netsafe: "false";
    })[];
    Amb2: ({
        id: "Mbt1";
        name: "manaGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt2";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt3";
        name: "autocastRequirement";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt4";
        name: "waterHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Mbt5";
        name: "regenerateOnlyAtNight";
        type: "bool";
        netsafe: "false";
    })[];
    Amnb: ({
        id: "Emb1";
        name: "maxManaDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb2";
        name: "boltDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb3";
        name: "boltLifetime";
        type: "unreal";
        netsafe: "false";
    })[];
    Ambd: ({
        id: "Emb1";
        name: "maxManaDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb2";
        name: "boltDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb3";
        name: "boltLifetime";
        type: "unreal";
        netsafe: "false";
    })[];
    Ambb: ({
        id: "Emb1";
        name: "maxManaDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb2";
        name: "boltDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emb3";
        name: "boltLifetime";
        type: "unreal";
        netsafe: "false";
    })[];
    Amfl: ({
        id: "mfl1";
        name: "unitDamagePerManaPoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "mfl2";
        name: "heroDamagePerManaPoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "mfl3";
        name: "unitMaximumDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "mfl4";
        name: "heroMaximumDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "mfl5";
        name: "damageCooldown";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "mfl6";
        name: "casterOnlySplash";
        type: "bool";
        netsafe: "false";
    })[];
    ACmf: ({
        id: "Nms1";
        name: "manaPerHitPoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nms2";
        name: "damageAbsorbedPercent";
        type: "unreal";
        netsafe: "false";
    })[];
    Amil: ({
        id: "Mil1";
        name: "normalFormUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Mil2";
        name: "alternateFormUnitundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    ANmr: {
        id: "Nmr1";
        name: "manaDrainedPerSecondundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Amin: ({
        id: "Min1";
        name: "activationDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Min2";
        name: "invisibilityTransitionTime";
        type: "unreal";
        netsafe: "false";
    })[];
    ACmo: ({
        id: "Esf1";
        name: "damageDealt";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf2";
        name: "damageInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esf3";
        name: "buildingReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Aneu: ({
        id: "Neu1";
        name: "activationRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Neu2";
        name: "interactionType";
        type: "interactionFlags";
        netsafe: "false";
    } | {
        id: "Neu3";
        name: "showSelectUnitButton";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Neu4";
        name: "showUnitIndicator";
        type: "bool";
        netsafe: "false";
    })[];
    Ane2: ({
        id: "Neu1";
        name: "activationRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Neu2";
        name: "interactionType";
        type: "interactionFlags";
        netsafe: "false";
    } | {
        id: "Neu3";
        name: "showSelectUnitButton";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Neu4";
        name: "showUnitIndicator";
        type: "bool";
        netsafe: "false";
    })[];
    Andt: ({
        id: "Ndt1";
        name: "goldCost";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndt2";
        name: "lumberCost";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndt3";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    })[];
    ANre: ({
        id: "Arm1";
        name: "amountRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Arm2";
        name: "percentageundefined";
        type: "bool";
        netsafe: "false";
    })[];
    ACnr: ({
        id: "Oar1";
        name: "amountOfHitPointsRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oar2";
        name: "percentage";
        type: "bool";
        netsafe: "false";
    })[];
    AAns: ({
        id: "Ndt1";
        name: "goldCost";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ndt2";
        name: "lumberCost";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ans5";
        name: "baseOrderID";
        type: "orderString";
        netsafe: "false";
    } | {
        id: "Ans6";
        name: "chargeOwningPlayer";
        type: "bool";
        netsafe: "false";
    })[];
    Afak: ({
        id: "fak1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak2";
        name: "mediumDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak3";
        name: "smallDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak4";
        name: "fullDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak5";
        name: "halfDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANak: ({
        id: "fak1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak2";
        name: "mediumDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak3";
        name: "smallDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak4";
        name: "fullDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "fak5";
        name: "halfDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANpa: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    } | {
        id: "ipmu";
        name: "unitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Npa5";
        name: "summonedUnitCountundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Npa6";
        name: "summonedUnitDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ACpa: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    } | {
        id: "ipmu";
        name: "unitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Npa5";
        name: "summonedUnitCountundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Npa6";
        name: "summonedUnitDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ANpi: ({
        id: "Eim1";
        name: "damagePerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim2";
        name: "manaDrainedPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim3";
        name: "bufferManaRequired";
        type: "unreal";
        netsafe: "false";
    })[];
    Apmf: ({
        id: "Eim1";
        name: "damagePerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim2";
        name: "manaDrainedPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim3";
        name: "bufferManaRequired";
        type: "unreal";
        netsafe: "false";
    })[];
    Apig: ({
        id: "Eim1";
        name: "damagePerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim2";
        name: "manaDrainedPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eim3";
        name: "bufferManaRequired";
        type: "unreal";
        netsafe: "false";
    })[];
    Apiv: {
        id: "Gho1";
        name: "autoAcquireAttackTargets";
        type: "bool";
        netsafe: "false";
    }[];
    Apsh: ({
        id: "Hbn1";
        name: "movementSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbn2";
        name: "attackSpeedReductionPercentundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Aphx: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Apxf: ({
        id: "pxf1";
        name: "initialDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "pxf2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Apts: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    Apoi: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    })[];
    Aply: ({
        id: "Ply1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ply2";
        name: "morphUnitsGround";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply3";
        name: "morphUnitsAir";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply4";
        name: "morphUnitsAmphibious";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply5";
        name: "morphUnitsWater";
        type: "unitList";
        netsafe: "false";
    })[];
    ACpy: ({
        id: "Ply1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ply2";
        name: "morphUnitsGround";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply3";
        name: "morphUnitsAir";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply4";
        name: "morphUnitsAmphibious";
        type: "unitList";
        netsafe: "false";
    } | {
        id: "Ply5";
        name: "morphUnitsWater";
        type: "unitList";
        netsafe: "false";
    })[];
    Apos: {
        id: "Pos1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    }[];
    ACps: {
        id: "Pos1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    }[];
    Aps2: ({
        id: "Pos1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Pos2";
        name: "damageAmplification";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Pos3";
        name: "targetIsInvulnerable";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Pos4";
        name: "targetIsMagicImmune";
        type: "bool";
        netsafe: "false";
    })[];
    Awar: ({
        id: "War1";
        name: "chanceToStompPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War2";
        name: "damageDealtundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War3";
        name: "fullDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War4";
        name: "halfDamageRadius";
        type: "unreal";
        netsafe: "false";
    })[];
    ACpv: ({
        id: "War1";
        name: "chanceToStompPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War2";
        name: "damageDealtundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War3";
        name: "fullDamageRadiusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "War4";
        name: "halfDamageRadius";
        type: "unreal";
        netsafe: "false";
    })[];
    Aprg: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    Apg2: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    ACpu: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    ACrf: ({
        id: "Hbz1";
        name: "numberOfWaves";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz2";
        name: "damage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz3";
        name: "numberOfShards";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz4";
        name: "buildingReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz5";
        name: "damagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz6";
        name: "maximumDamagePerWave";
        type: "unreal";
        netsafe: "false";
    })[];
    ACrg: ({
        id: "Hbz1";
        name: "numberOfWaves";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz2";
        name: "damage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz3";
        name: "numberOfShards";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hbz4";
        name: "buildingReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz5";
        name: "damagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbz6";
        name: "maximumDamagePerWave";
        type: "unreal";
        netsafe: "false";
    })[];
    Arai: ({
        id: "Rai1";
        name: "unitsSummonedTypeOne";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai2";
        name: "unitsSummonedTypeTwo";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai3";
        name: "unitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Rai4";
        name: "unitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Raiu";
        name: "unitTypeForLimitCheck";
        type: "unitCode";
        netsafe: "false";
    })[];
    ACrd: ({
        id: "Rai1";
        name: "unitsSummonedTypeOne";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai2";
        name: "unitsSummonedTypeTwo";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai3";
        name: "unitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Rai4";
        name: "unitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Raiu";
        name: "unitTypeForLimitCheck";
        type: "unitCode";
        netsafe: "false";
    })[];
    Arav: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Amrf: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    ACrn: {
        id: "Ore1";
        name: "reincarnationDelay";
        type: "unreal";
        netsafe: "false";
    }[];
    ANr2: {
        id: "Ore1";
        name: "reincarnationDelay";
        type: "unreal";
        netsafe: "false";
    }[];
    Arej: ({
        id: "Rej1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej2";
        name: "manaPointsGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej3";
        name: "allowWhenFull";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "Rej4";
        name: "noTargetRequired";
        type: "bool";
        netsafe: "false";
    })[];
    ACrj: ({
        id: "Rej1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej2";
        name: "manaPointsGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej3";
        name: "allowWhenFull";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "Rej4";
        name: "noTargetRequired";
        type: "bool";
        netsafe: "false";
    })[];
    ACr2: ({
        id: "Rej1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej2";
        name: "manaPointsGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej3";
        name: "allowWhenFull";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "Rej4";
        name: "noTargetRequired";
        type: "bool";
        netsafe: "false";
    })[];
    Aren: ({
        id: "Rep1";
        name: "repairCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep2";
        name: "repairTimeRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep3";
        name: "powerbuildCost";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep4";
        name: "powerbuildRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep5";
        name: "navalRangeBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    Ahrp: ({
        id: "Rep1";
        name: "repairCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep2";
        name: "repairTimeRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep3";
        name: "powerbuildCost";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep4";
        name: "powerbuildRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep5";
        name: "navalRangeBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    Arep: ({
        id: "Rep1";
        name: "repairCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep2";
        name: "repairTimeRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep3";
        name: "powerbuildCost";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep4";
        name: "powerbuildRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep5";
        name: "navalRangeBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    Arpb: ({
        id: "Rej1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rej2";
        name: "manaPointsGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb3";
        name: "minimumLifeRequired";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb4";
        name: "minimumManaRequired";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb5";
        name: "maximumUnitsChargedToCaster";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rpb6";
        name: "maximumUnitsAffected";
        type: "int";
        netsafe: "false";
    })[];
    Arpl: ({
        id: "Rej1";
        name: "hitPointsGainedundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb3";
        name: "minimumLifeRequired";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb5";
        name: "maximumUnitsChargedToCaster";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rpb6";
        name: "maximumUnitsAffected";
        type: "int";
        netsafe: "false";
    })[];
    Arpm: ({
        id: "Rej2";
        name: "manaPointsGained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb4";
        name: "minimumManaRequired";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rpb5";
        name: "maximumUnitsChargedToCaster";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rpb6";
        name: "maximumUnitsAffected";
        type: "int";
        netsafe: "false";
    })[];
    Arst: ({
        id: "Rep1";
        name: "repairCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep2";
        name: "repairTimeRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep3";
        name: "powerbuildCost";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep4";
        name: "powerbuildRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Rep5";
        name: "navalRangeBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    Argd: ({
        id: "Rtn1";
        name: "acceptsGold";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Rtn2";
        name: "acceptsLumber";
        type: "bool";
        netsafe: "false";
    })[];
    Argl: ({
        id: "Rtn1";
        name: "acceptsGold";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Rtn2";
        name: "acceptsLumber";
        type: "bool";
        netsafe: "false";
    })[];
    Arlm: ({
        id: "Rtn1";
        name: "acceptsGold";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Rtn2";
        name: "acceptsLumber";
        type: "bool";
        netsafe: "false";
    })[];
    AHta: {
        id: "Idet";
        name: "detectionRadiusundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    Aroa: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    Ara2: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACr1: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    ACro: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    Aroc: ({
        id: "Efk1";
        name: "damagePerTargetundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Efk2";
        name: "maximumTotalDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Efk3";
        name: "maximumNumberOfTargets";
        type: "int";
        netsafe: "false";
    })[];
    Aro1: ({
        id: "Roo1";
        name: "rootedWeapons";
        type: "attackBits";
        netsafe: "false";
    } | {
        id: "Roo2";
        name: "uprootedWeapons";
        type: "attackBits";
        netsafe: "false";
    } | {
        id: "Roo3";
        name: "rootedTurning";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roo4";
        name: "uprootedDefenseType";
        type: "defenseTypeInt";
        netsafe: "false";
    })[];
    Aro2: ({
        id: "Roo1";
        name: "rootedWeapons";
        type: "attackBits";
        netsafe: "false";
    } | {
        id: "Roo2";
        name: "uprootedWeapons";
        type: "attackBits";
        netsafe: "false";
    } | {
        id: "Roo3";
        name: "rootedTurning";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roo4";
        name: "uprootedDefenseType";
        type: "defenseTypeInt";
        netsafe: "false";
    })[];
    Asal: ({
        id: "Sal1";
        name: "salvageCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sal2";
        name: "accumulationStep";
        type: "int";
        netsafe: "false";
    })[];
    ACsa: {
        id: "Hfa1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    Asds: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds1";
        name: "buildingDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds6";
        name: "explodesOnDeath";
        type: "bool";
        netsafe: "false";
    })[];
    Asdg: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds1";
        name: "buildingDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds6";
        name: "explodesOnDeath";
        type: "bool";
        netsafe: "false";
    })[];
    Asd2: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds1";
        name: "buildingDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds6";
        name: "explodesOnDeath";
        type: "bool";
        netsafe: "false";
    })[];
    Asd3: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds1";
        name: "buildingDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sds6";
        name: "explodesOnDeath";
        type: "bool";
        netsafe: "false";
    })[];
    Aesn: ({
        id: "Esn1";
        name: "inFlightSightRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn2";
        name: "hoveringSightRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn3";
        name: "hoveringHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn4";
        name: "numberOfOwls";
        type: "int";
        netsafe: "false";
    } | {
        id: "Esn5";
        name: "durationOfOwls";
        type: "unreal";
        netsafe: "false";
    })[];
    Aesr: ({
        id: "Esn1";
        name: "inFlightSightRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn2";
        name: "hoveringSightRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn3";
        name: "hoveringHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esn4";
        name: "numberOfOwls";
        type: "int";
        netsafe: "false";
    } | {
        id: "Esn5";
        name: "durationOfOwls";
        type: "unreal";
        netsafe: "false";
    })[];
    Aeye: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    ACtn: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    Ashm: ({
        id: "Shm1";
        name: "fadeDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm2";
        name: "dayOrNightDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm3";
        name: "actionDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm4";
        name: "permanentCloak";
        type: "bool";
        netsafe: "false";
    })[];
    AIhm: ({
        id: "Shm1";
        name: "fadeDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm2";
        name: "dayOrNightDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm3";
        name: "actionDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm4";
        name: "permanentCloak";
        type: "bool";
        netsafe: "false";
    })[];
    Sshm: ({
        id: "Shm1";
        name: "fadeDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm2";
        name: "dayOrNightDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm3";
        name: "actionDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm4";
        name: "permanentCloak";
        type: "bool";
        netsafe: "false";
    })[];
    Ahid: ({
        id: "Shm1";
        name: "fadeDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm2";
        name: "dayOrNightDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Shm3";
        name: "actionDuration";
        type: "unreal";
        netsafe: "false";
    })[];
    ACss: ({
        id: "Esh1";
        name: "decayingDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh4";
        name: "decayPower";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Esh5";
        name: "initialDamage";
        type: "unreal";
        netsafe: "false";
    })[];
    ACsh: ({
        id: "Osh1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh2";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh3";
        name: "distanceundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACst: ({
        id: "Osh1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh2";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh3";
        name: "distanceundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANsh: ({
        id: "Osh1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh2";
        name: "maximumDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh3";
        name: "distanceundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Osh4";
        name: "finalAreaundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACsi: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    ACsm: ({
        id: "Ndr1";
        name: "hitPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr2";
        name: "manaPointsDrained";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr3";
        name: "drainIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr4";
        name: "lifeTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr5";
        name: "manaTransferredPerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr6";
        name: "bonusLifeFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr7";
        name: "bonusLifeDecay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr8";
        name: "bonusManaFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ndr9";
        name: "bonusManaDecay";
        type: "unreal";
        netsafe: "false";
    })[];
    ACsl: {
        id: "Usl1";
        name: "stunDuration";
        type: "unreal";
        netsafe: "false";
    }[];
    Asla: ({
        id: "sla1";
        name: "sleepOnce";
        type: "bool";
        netsafe: "false";
    } | {
        id: "sla2";
        name: "allowOnAnyPlayerSlot";
        type: "bool";
        netsafe: "false";
    })[];
    Aslo: ({
        id: "Slo1";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo2";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo3";
        name: "alwaysAutocastundefined";
        type: "bool";
        netsafe: "false";
    })[];
    ACsw: ({
        id: "Slo1";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo2";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo3";
        name: "alwaysAutocastundefined";
        type: "bool";
        netsafe: "false";
    })[];
    Aspo: ({
        id: "Spo1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo4";
        name: "stackingTypeundefined";
        type: "stackFlags";
        netsafe: "false";
    })[];
    Asod: ({
        id: "Sod1";
        name: "numberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Sod2";
        name: "unitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Assp: ({
        id: "Sod1";
        name: "numberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Sod2";
        name: "unitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aspd: ({
        id: "Sod1";
        name: "numberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Sod2";
        name: "unitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aspy: ({
        id: "Sod1";
        name: "numberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Sod2";
        name: "unitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aspt: ({
        id: "Sod1";
        name: "numberOfUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Sod2";
        name: "unitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aspa: {
        id: "Spa1";
        name: "spiderCapacity";
        type: "int";
        netsafe: "false";
    }[];
    Aspl: ({
        id: "spl1";
        name: "distributedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "spl2";
        name: "maximumNumberOfTargetsundefined";
        type: "int";
        netsafe: "false";
    })[];
    Asta: ({
        id: "Sta1";
        name: "activationDelayundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sta2";
        name: "detectionRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sta3";
        name: "detonationRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sta4";
        name: "stunDurationundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sta5";
        name: "detonationDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Stau";
        name: "wardUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    Astn: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eme4";
        name: "landingDelayTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "ave5";
        name: "lifeRegenerationRatePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Asb1: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Asb2: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Asb3: ({
        id: "Eme1";
        name: "normalFormUnit";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Eme2";
        name: "morphingFlags";
        type: "morphFlags";
        netsafe: "false";
    } | {
        id: "Eme3";
        name: "altitudeAdjustmentDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Emeu";
        name: "alternateFormUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    Aslp: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    ACwe: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    Atau: ({
        id: "Tau1";
        name: "preferHostilesundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau2";
        name: "preferFriendliesundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau3";
        name: "maxUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau4";
        name: "numberOfPulses";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau5";
        name: "intervalBetweenPulses";
        type: "unreal";
        netsafe: "false";
    })[];
    ANta: ({
        id: "Tau1";
        name: "preferHostilesundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau2";
        name: "preferFriendliesundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau3";
        name: "maxUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau4";
        name: "numberOfPulses";
        type: "int";
        netsafe: "false";
    } | {
        id: "Tau5";
        name: "intervalBetweenPulses";
        type: "unreal";
        netsafe: "false";
    })[];
    ANth: ({
        id: "Uts1";
        name: "returnedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts2";
        name: "receivedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts3";
        name: "defenseBonusundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANt2: ({
        id: "Uts1";
        name: "returnedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts2";
        name: "receivedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uts3";
        name: "defenseBonusundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACah: ({
        id: "Eah1";
        name: "damageDealtToAttackers";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Eah2";
        name: "damageIsPercentReceived";
        type: "bool";
        netsafe: "false";
    })[];
    ACtb: {
        id: "Ctb1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    ACtc: ({
        id: "Ctc1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc2";
        name: "extraDamageToTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc3";
        name: "movementSpeedReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc4";
        name: "attackSpeedReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    ACt2: ({
        id: "Ctc1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc2";
        name: "extraDamageToTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc3";
        name: "movementSpeedReduction";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ctc4";
        name: "attackSpeedReduction";
        type: "unreal";
        netsafe: "false";
    })[];
    Atdg: ({
        id: "Tdg1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Tdg2";
        name: "mediumDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Tdg3";
        name: "mediumDamagePerSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Tdg4";
        name: "smallDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Tdg5";
        name: "smallDamagePerSecond";
        type: "unreal";
        netsafe: "false";
    })[];
    Atsp: ({
        id: "Tsp1";
        name: "airTimeSecondsundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Tsp2";
        name: "minimumHitIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    })[];
    ACua: ({
        id: "Uau1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau2";
        name: "lifeRegenerationIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau3";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    Auhf: ({
        id: "Uhf1";
        name: "attackSpeedBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uhf2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Suhf: ({
        id: "Uhf1";
        name: "attackSpeedBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uhf2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ACuf: ({
        id: "Uhf1";
        name: "attackSpeedBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uhf2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Auuf: ({
        id: "Uuf1";
        name: "requiresUndeadTargetundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Uuf2";
        name: "leaveTargetAliveundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Uuf3";
        name: "targetsAllowedForBuff";
        type: "targetList";
        netsafe: "false";
    })[];
    Auco: ({
        id: "Dda1";
        name: "fullDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda2";
        name: "fullDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda3";
        name: "partialDamageRadius";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Dda4";
        name: "partialDamageAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uco5";
        name: "maxDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uco6";
        name: "moveSpeedBonus";
        type: "unreal";
        netsafe: "false";
    })[];
    Auns: ({
        id: "Sal1";
        name: "salvageCostRatio";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Sal2";
        name: "accumulationStep";
        type: "int";
        netsafe: "false";
    })[];
    SCva: {
        id: "Ivam";
        name: "lifeStolenPerAttack";
        type: "unreal";
        netsafe: "false";
    }[];
    ACvp: {
        id: "Uav1";
        name: "attackDamageStolenPercent";
        type: "unreal";
        netsafe: "false";
    }[];
    Avng: ({
        id: "Rai1";
        name: "unitsSummonedTypeOne";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai2";
        name: "unitsSummonedTypeTwo";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai3";
        name: "unitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Rai4";
        name: "unitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Raiu";
        name: "unitTypeForLimitCheck";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Ucb5";
        name: "maxUnitsSummoned";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ucb6";
        name: "killOnCasterDeath";
        type: "bool";
        netsafe: "false";
    })[];
    Awrs: ({
        id: "Wrs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs2";
        name: "terrainDeformationAmplitude";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs3";
        name: "terrainDeformationDurationMs";
        type: "int";
        netsafe: "false";
    })[];
    Awrg: ({
        id: "Wrs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs2";
        name: "terrainDeformationAmplitude";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs3";
        name: "terrainDeformationDurationMs";
        type: "int";
        netsafe: "false";
    })[];
    Awrh: ({
        id: "Wrs1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs2";
        name: "terrainDeformationAmplitude";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrs3";
        name: "terrainDeformationDurationMs";
        type: "int";
        netsafe: "false";
    })[];
    ANwk: ({
        id: "Owk1";
        name: "transitionTime";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk2";
        name: "movementSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk3";
        name: "backstabDamage";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Owk4";
        name: "backstabDamageEnabled";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Owk5";
        name: "startCooldownWhenDecloak";
        type: "bool";
        netsafe: "false";
    })[];
    Awha: ({
        id: "Wha1";
        name: "lumberPerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wha2";
        name: "intervalsBeforeChangingTrees";
        type: "int";
        netsafe: "false";
    } | {
        id: "Wha3";
        name: "artAttachmentHeight";
        type: "unreal";
        netsafe: "false";
    })[];
    Awh2: ({
        id: "Wha1";
        name: "lumberPerInterval";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wha2";
        name: "intervalsBeforeChangingTrees";
        type: "int";
        netsafe: "false";
    } | {
        id: "Wha3";
        name: "artAttachmentHeight";
        type: "unreal";
        netsafe: "false";
    })[];
    Aven: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    })[];
    ACvs: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    })[];
    Awrp: ({
        id: "Wrp1";
        name: "teleportAreaWidth";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Wrp2";
        name: "teleportAreaHeight";
        type: "unreal";
        netsafe: "false";
    })[];
    Aweb: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    ACwb: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    AIa1: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIa3: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIa4: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIa5: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIa6: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIx5: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIx1: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIx2: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIs1: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIs2: {
        id: "Isx1";
        name: "attackSpeedIncrease";
        type: "unreal";
        netsafe: "false";
    }[];
    AIs3: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIs4: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIs5: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIs6: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIi1: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIi3: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIi4: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIi5: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIi6: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIxm: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIam: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIim: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIsm: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIgm: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AItm: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AInm: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIaa: {
        id: "Iaa1";
        name: "attackModification";
        type: "int";
        netsafe: "false";
    }[];
    AIat: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIt6: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIt9: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItc: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItf: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItg: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIth: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIti: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItj: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItk: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItl: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AItn: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIva: {
        id: "Ivam";
        name: "lifeStolenPerAttack";
        type: "unreal";
        netsafe: "false";
    }[];
    AIbk: ({
        id: "Ebl1";
        name: "maximumRange";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ebl2";
        name: "minimumRange";
        type: "unreal";
        netsafe: "false";
    })[];
    AIbl: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbg: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbt: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbb: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbf: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbr: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbs: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIbh: {
        id: "Ibl1";
        name: "unitCreatedPerPlayerRace";
        type: "unitList";
        netsafe: "false";
    }[];
    AIcy: {
        id: "cyc1";
        name: "canBeDispelled";
        type: "bool";
        netsafe: "false";
    }[];
    AId1: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AId2: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AId3: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AId4: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AId5: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIgf: ({
        id: "Igl1";
        name: "upgradeLevels";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iglu";
        name: "upgradeType";
        type: "upgradeCode";
        netsafe: "false";
    })[];
    AIgu: ({
        id: "Igl1";
        name: "upgradeLevels";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iglu";
        name: "upgradeType";
        type: "upgradeCode";
        netsafe: "false";
    })[];
    AIem: {
        id: "Ixpg";
        name: "experienceGained";
        type: "int";
        netsafe: "false";
    }[];
    AIe2: {
        id: "Ixpg";
        name: "experienceGained";
        type: "int";
        netsafe: "false";
    }[];
    AIfd: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIff: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIfr: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIfu: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIfh: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIfs: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIir: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIuw: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIfa: ({
        id: "Ifa1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    } | {
        id: "Idel";
        name: "delayForTargetEffect";
        type: "unreal";
        netsafe: "false";
    })[];
    AIin: ({
        id: "Uin1";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin2";
        name: "duration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin3";
        name: "impactDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uin4";
        name: "summonedUnit";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIlm: {
        id: "Ilev";
        name: "levelsGained";
        type: "int";
        netsafe: "false";
    }[];
    AIlp: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIlf: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AIl1: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AIl2: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AIms: {
        id: "Imvb";
        name: "movementSpeedBonus";
        type: "int";
        netsafe: "false";
    }[];
    ANbs: ({
        id: "Nba1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nba2";
        name: "numberOfSummonedUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Nba3";
        name: "summonedUnitDurationSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nbau";
        name: "summonedUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIdf: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iob2";
        name: "chanceToHitUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob3";
        name: "chanceToHitHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob4";
        name: "chanceToHitSummonsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iobu";
        name: "effectAbility";
        type: "abilCode";
        netsafe: "false";
    })[];
    AIcb: ({
        id: "Idic";
        name: "damageBonusDice";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iarp";
        name: "armorPenalty";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIdn: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIfb: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIgd: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIzb: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIob: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIll: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iob2";
        name: "chanceToHitUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob3";
        name: "chanceToHitHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob4";
        name: "chanceToHitSummonsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iobu";
        name: "effectAbility";
        type: "abilCode";
        netsafe: "false";
    })[];
    AIlb: ({
        id: "Idic";
        name: "damageBonusDice";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIsb: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iob2";
        name: "chanceToHitUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob3";
        name: "chanceToHitHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob4";
        name: "chanceToHitSummonsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iobu";
        name: "effectAbility";
        type: "abilCode";
        netsafe: "false";
    })[];
    AIpb: ({
        id: "Idic";
        name: "damageBonusDice";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    Apo2: ({
        id: "Poi1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Poi4";
        name: "stackingType";
        type: "stackFlags";
        netsafe: "false";
    })[];
    AInd: ({
        id: "Uan3";
        name: "inheritUpgrades";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Cad1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    })[];
    Arel: {
        id: "Ihpr";
        name: "hitPointsRegeneratedPerSecond";
        type: "int";
        netsafe: "false";
    }[];
    Arll: {
        id: "Ihpr";
        name: "hitPointsRegeneratedPerSecond";
        type: "int";
        netsafe: "false";
    }[];
    AIsi: {
        id: "Isib";
        name: "sightRangeBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIos: ({
        id: "Slo1";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo2";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Slo3";
        name: "alwaysAutocastundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AIcf: ({
        id: "Icfd";
        name: "damagePerDuration";
        type: "int";
        netsafe: "false";
    } | {
        id: "Icfm";
        name: "manaUsedPerSecond";
        type: "int";
        netsafe: "false";
    } | {
        id: "Icfx";
        name: "extraManaRequired";
        type: "int";
        netsafe: "false";
    })[];
    AIco: {
        id: "Icre";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIda: ({
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihp2";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Imp2";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIdb: ({
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihp2";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Imp2";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIta: {
        id: "Idet";
        name: "detectionRadiusundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    AIdi: ({
        id: "Idim";
        name: "manaLossPerUnit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idid";
        name: "damageToSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    AIds: ({
        id: "Idim";
        name: "manaLossPerUnit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idid";
        name: "damageToSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    APdi: ({
        id: "Idim";
        name: "manaLossPerUnit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idid";
        name: "damageToSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    AIh1: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIh2: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIh3: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIha: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIhb: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    APh1: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    APh2: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    APh3: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIhw: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AIsw: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AIil: ({
        id: "Iild";
        name: "damageDealtPercentOfNormal";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iilw";
        name: "damageReceivedMultiplier";
        type: "unreal";
        netsafe: "false";
    })[];
    AIvu: {
        id: "AIvu";
        name: "isMagicImmune";
        type: "bool";
        netsafe: "false";
    }[];
    AIvl: {
        id: "AIvu";
        name: "isMagicImmune";
        type: "bool";
        netsafe: "false";
    }[];
    AIvg: {
        id: "AIvu";
        name: "isMagicImmune";
        type: "bool";
        netsafe: "false";
    }[];
    AIm1: {
        id: "Impg";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIm2: {
        id: "Impg";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AImr: {
        id: "Impg";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    APmr: {
        id: "Impg";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    APmg: {
        id: "Impg";
        name: "manaPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIpm: {
        id: "ipmu";
        name: "unitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AIrt: ({
        id: "Irec";
        name: "maximumNumberOfUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Itp2";
        name: "useTeleportClusteringundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AIrm: {
        id: "Imrp";
        name: "manaRegenerationBonusAsFractionOfNormal";
        type: "unreal";
        netsafe: "false";
    }[];
    AIrn: {
        id: "Imrp";
        name: "manaRegenerationBonusAsFractionOfNormal";
        type: "unreal";
        netsafe: "false";
    }[];
    AIrc: ({
        id: "Ircd";
        name: "delayAfterDeathSeconds";
        type: "int";
        netsafe: "false";
    } | {
        id: "irc2";
        name: "restoredLife";
        type: "int";
        netsafe: "false";
    } | {
        id: "irc3";
        name: "restoredMana1ForCurrent";
        type: "int";
        netsafe: "false";
    })[];
    AIre: ({
        id: "Ihps";
        name: "hitPointsRestored";
        type: "int";
        netsafe: "false";
    } | {
        id: "Imps";
        name: "manaPointsRestored";
        type: "int";
        netsafe: "false";
    })[];
    AIra: ({
        id: "Ihps";
        name: "hitPointsRestored";
        type: "int";
        netsafe: "false";
    } | {
        id: "Imps";
        name: "manaPointsRestored";
        type: "int";
        netsafe: "false";
    })[];
    APra: ({
        id: "Ihps";
        name: "hitPointsRestored";
        type: "int";
        netsafe: "false";
    } | {
        id: "Imps";
        name: "manaPointsRestored";
        type: "int";
        netsafe: "false";
    })[];
    AIsp: {
        id: "Ispi";
        name: "movementSpeedIncrease";
        type: "unreal";
        netsafe: "false";
    }[];
    AIsa: {
        id: "Ispi";
        name: "movementSpeedIncrease";
        type: "unreal";
        netsafe: "false";
    }[];
    APsa: {
        id: "Ispi";
        name: "movementSpeedIncrease";
        type: "unreal";
        netsafe: "false";
    }[];
    AItp: ({
        id: "Itpm";
        name: "maximumNumberOfUnitsundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Itp2";
        name: "useTeleportClusteringundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AIad: ({
        id: "Had1";
        name: "armorBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Had2";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AIcd: ({
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Cac1";
        name: "attackDamageIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AIwd: ({
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Akb1";
        name: "attackDamageIncrease";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Akb2";
        name: "playChannelAnimation";
        type: "bool";
        netsafe: "false";
    })[];
    AIba: ({
        id: "Hab1";
        name: "manaRegenerationIncrease";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hab2";
        name: "percentBonus";
        type: "bool";
        netsafe: "false";
    })[];
    AIav: {
        id: "Uav1";
        name: "attackDamageStolenPercent";
        type: "unreal";
        netsafe: "false";
    }[];
    AIar: ({
        id: "Ear1";
        name: "damageBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ear2";
        name: "meleeBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear3";
        name: "rangedBonus";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ear4";
        name: "flatBonus";
        type: "bool";
        netsafe: "false";
    })[];
    AIae: ({
        id: "Oae1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oae2";
        name: "attackSpeedIncreasePercent";
        type: "unreal";
        netsafe: "false";
    })[];
    AIau: ({
        id: "Uau1";
        name: "movementSpeedIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau2";
        name: "lifeRegenerationIncreasePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uau3";
        name: "percentBonusundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AIls: ({
        id: "Lsh1";
        name: "damagePerSecondSecond";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Idps";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AIxs: ({
        id: "Ams3";
        name: "shieldLife";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ams4";
        name: "manaLoss";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ixs1";
        name: "damageToSummonedUnitsundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ixs2";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AIan: ({
        id: "Uan3";
        name: "inheritUpgrades";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Cad1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIrs: ({
        id: "Hre1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    AIrr: ({
        id: "Roa1";
        name: "damageIncreasePercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa2";
        name: "defenseIncreaseundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Roa3";
        name: "lifeRegenerationRate";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa4";
        name: "manaRegen";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Roa5";
        name: "preferHostiles";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa6";
        name: "preferFriendlies";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Roa7";
        name: "maxUnits";
        type: "int";
        netsafe: "false";
    })[];
    AIev: {
        id: "Eev1";
        name: "chanceToEvadeundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AImx: {
        id: "mim1";
        name: "magicDamageFactor";
        type: "unreal";
        netsafe: "false";
    }[];
    AImh: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AImb: {
        id: "Iman";
        name: "maxManaGained";
        type: "int";
        netsafe: "false";
    }[];
    AIbm: {
        id: "Iman";
        name: "maxManaGained";
        type: "int";
        netsafe: "false";
    }[];
    AIsx: {
        id: "Isx1";
        name: "attackSpeedIncrease";
        type: "unreal";
        netsafe: "false";
    }[];
    AIrl: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIpr: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIsl: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIpl: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp1: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp2: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp3: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp4: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp5: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIp6: ({
        id: "irl1";
        name: "lifeRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl2";
        name: "manaRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "irl3";
        name: "allowWhenFullundefined";
        type: "fullFlags";
        netsafe: "false";
    } | {
        id: "irl4";
        name: "noTargetRequiredundefined";
        type: "bool";
        netsafe: "false";
    } | {
        id: "irl5";
        name: "dispelOnAttack";
        type: "bool";
        netsafe: "false";
    })[];
    AIgo: {
        id: "Igol";
        name: "goldGiven";
        type: "int";
        netsafe: "false";
    }[];
    AIlu: {
        id: "Ilum";
        name: "lumberGiven";
        type: "int";
        netsafe: "false";
    }[];
    AIrv: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    AIdc: ({
        id: "idc1";
        name: "manaLossPerUnitundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "idc2";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "idc3";
        name: "maximumDispelledUnits";
        type: "int";
        netsafe: "false";
    })[];
    AIwb: ({
        id: "Ens1";
        name: "airUnitLowerDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens2";
        name: "airUnitHeight";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ens3";
        name: "meleeAttackRange";
        type: "unreal";
        netsafe: "false";
    })[];
    AImo: ({
        id: "imo1";
        name: "numberOfLures";
        type: "int";
        netsafe: "false";
    } | {
        id: "imo2";
        name: "activationDelayundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "imo3";
        name: "lureIntervalSeconds";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "imou";
        name: "lureUnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIct: ({
        id: "ict1";
        name: "newTimeOfDayHour";
        type: "int";
        netsafe: "false";
    } | {
        id: "ict2";
        name: "newTimeOfDayMinute";
        type: "int";
        netsafe: "false";
    })[];
    AIsr: ({
        id: "isr1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "isr2";
        name: "damageReductionundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    Ablp: ({
        id: "Bli1";
        name: "expansionAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Bli2";
        name: "createsBlight";
        type: "bool";
        netsafe: "false";
    })[];
    AIpv: ({
        id: "ipv1";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "ipv2";
        name: "lifeStealAmount";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "ipv3";
        name: "amountIsRawValue";
        type: "bool";
        netsafe: "false";
    })[];
    Aste: ({
        id: "Udp1";
        name: "lifeConvertedToMana";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp2";
        name: "lifeConvertedToLife";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp3";
        name: "manaConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp4";
        name: "lifeConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    })[];
    Amec: {
        id: "mec1";
        name: "numberOfUnitsCreatedundefined";
        type: "int";
        netsafe: "false";
    }[];
    ANpr: {
        id: "Npr1";
        name: "buildingTypesAllowed";
        type: "pickFlags";
        netsafe: "false";
    }[];
    ANsa: ({
        id: "Nsa1";
        name: "buildingTypesAllowedundefined";
        type: "pickFlags";
        netsafe: "false";
    } | {
        id: "Nsa2";
        name: "heroRegenerationDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsa3";
        name: "unitRegenerationDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsa4";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsa5";
        name: "hitPointsPerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    ANse: {
        id: "Nse1";
        name: "shieldCooldownTime";
        type: "unreal";
        netsafe: "false";
    }[];
    AImt: ({
        id: "Hmt1";
        name: "numberOfUnitsTeleported";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hmt2";
        name: "castingDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hmt3";
        name: "useTeleportClustering";
        type: "bool";
        netsafe: "false";
    })[];
    Aspb: ({
        id: "spb1";
        name: "spellList";
        type: "abilityList";
        netsafe: "false";
    } | {
        id: "spb2";
        name: "sharedSpellCooldown";
        type: "bool";
        netsafe: "false";
    } | {
        id: "spb3";
        name: "minimumSpells";
        type: "int";
        netsafe: "false";
    } | {
        id: "spb4";
        name: "maximumSpells";
        type: "int";
        netsafe: "false";
    } | {
        id: "spb5";
        name: "baseOrderIDundefined";
        type: "orderString";
        netsafe: "false";
    })[];
    AIrd: ({
        id: "Rai1";
        name: "unitsSummonedTypeOne";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai2";
        name: "unitsSummonedTypeTwo";
        type: "int";
        netsafe: "false";
    } | {
        id: "Rai3";
        name: "unitTypeOne";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Rai4";
        name: "unitTypeTwo";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Raiu";
        name: "unitTypeForLimitCheck";
        type: "unitCode";
        netsafe: "false";
    })[];
    AItb: {
        id: "Det1";
        name: "detectionTypeundefined";
        type: "detectionType";
        netsafe: "false";
    }[];
    AIdv: {
        id: "Hds1";
        name: "canDeactivate";
        type: "bool";
        netsafe: "false";
    }[];
    AIse: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    AIpg: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIps: ({
        id: "Prg1";
        name: "movementUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg2";
        name: "attackUpdateFrequencyundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Prg3";
        name: "summonedUnitDamageundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg4";
        name: "unitPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg5";
        name: "heroPauseDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Prg6";
        name: "manaLossundefined";
        type: "int";
        netsafe: "false";
    })[];
    AIfg: ({
        id: "Nsi1";
        name: "attacksPrevented";
        type: "silenceFlags";
        netsafe: "false";
    } | {
        id: "Nsi2";
        name: "chanceToMissPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi3";
        name: "movementSpeedModifier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nsi4";
        name: "attackSpeedModifier";
        type: "unreal";
        netsafe: "false";
    })[];
    APrl: ({
        id: "Hre1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    APrr: ({
        id: "Hre1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    Aspp: ({
        id: "spl1";
        name: "distributedDamageFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "spl2";
        name: "maximumNumberOfTargetsundefined";
        type: "int";
        netsafe: "false";
    })[];
    AUds: ({
        id: "Hmt3";
        name: "useTeleportClustering";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Uds1";
        name: "maximumUnits";
        type: "int";
        netsafe: "false";
    } | {
        id: "Uds2";
        name: "castingDelaySeconds";
        type: "unreal";
        netsafe: "false";
    })[];
    APwt: {
        id: "hwdu";
        name: "wardUnitTypeundefined";
        type: "unitCode";
        netsafe: "false";
    }[];
    AIuf: ({
        id: "Uhf1";
        name: "attackSpeedBonusPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Uhf2";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AId0: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIcm: ({
        id: "Nch1";
        name: "maximumCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Cmg2";
        name: "manaPerSummonedHitpoint";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Cmg3";
        name: "chargeForCurrentLife";
        type: "unreal";
        netsafe: "false";
    })[];
    AImz: {
        id: "Iman";
        name: "maxManaGained";
        type: "int";
        netsafe: "false";
    }[];
    AIfz: ({
        id: "Nfd1";
        name: "graphicDelay";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd2";
        name: "graphicDuration";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Nfd3";
        name: "damageundefined";
        type: "unreal";
        netsafe: "false";
    })[];
    AIdp: ({
        id: "Udp1";
        name: "lifeConvertedToMana";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp2";
        name: "lifeConvertedToLife";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Udp3";
        name: "manaConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp4";
        name: "lifeConversionAsPercent";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    })[];
    AImv: {
        id: "Iman";
        name: "maxManaGained";
        type: "int";
        netsafe: "false";
    }[];
    AIpx: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AIdd: ({
        id: "Def1";
        name: "damageTakenPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def2";
        name: "damageDealtPercentundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def3";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def4";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def5";
        name: "magicDamageReductionundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def6";
        name: "chanceToDeflect";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def7";
        name: "deflectDamageTakenPiercing";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Def8";
        name: "deflectDamageTakenSpells";
        type: "unreal";
        netsafe: "false";
    })[];
    AId8: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AId7: {
        id: "Idef";
        name: "defenseBonusundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIlz: {
        id: "Ilif";
        name: "maxLifeGained";
        type: "int";
        netsafe: "false";
    }[];
    AIhx: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIaz: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIrx: ({
        id: "Hre1";
        name: "numberOfCorpsesRaisedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Hre2";
        name: "raisedUnitsAreInvulnerable";
        type: "bool";
        netsafe: "false";
    })[];
    AIbx: ({
        id: "Hbh1";
        name: "chanceToBash";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh2";
        name: "damageMultiplierundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh3";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh4";
        name: "chanceToMiss";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hbh5";
        name: "neverMissundefined";
        type: "bool";
        netsafe: "false";
    })[];
    AItx: {
        id: "Iatt";
        name: "attackBonus";
        type: "int";
        netsafe: "false";
    }[];
    AIwm: ({
        id: "Hwe1";
        name: "summonedUnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Hwe2";
        name: "summonedUnitCount";
        type: "int";
        netsafe: "false";
    })[];
    AIsh: ({
        id: "Osf1";
        name: "summonedUnitundefined";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Osf2";
        name: "numberOfSummonedUnits";
        type: "int";
        netsafe: "false";
    })[];
    AI2m: {
        id: "Iman";
        name: "maxManaGained";
        type: "int";
        netsafe: "false";
    }[];
    AIgx: ({
        id: "Oar1";
        name: "amountOfHitPointsRegenerated";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Oar2";
        name: "percentage";
        type: "bool";
        netsafe: "false";
    })[];
    AIhl: {
        id: "Hhb1";
        name: "amountHealedOrDamagedundefined";
        type: "unreal";
        netsafe: "false";
    }[];
    AIsz: ({
        id: "Spo1";
        name: "damagePerSecondundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo2";
        name: "movementSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo3";
        name: "attackSpeedFactorundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Spo4";
        name: "stackingTypeundefined";
        type: "stackFlags";
        netsafe: "false";
    })[];
    AIpz: {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    }[];
    AIfw: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIft: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    })[];
    AIlx: ({
        id: "Idam";
        name: "damageBonusundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob5";
        name: "enabledAttackIndex";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iob2";
        name: "chanceToHitUnitsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob3";
        name: "chanceToHitHerosPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iob4";
        name: "chanceToHitSummonsPercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Iobu";
        name: "effectAbility";
        type: "abilCode";
        netsafe: "false";
    })[];
    AIcs: ({
        id: "Ocr1";
        name: "chanceToCriticalStrike";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr2";
        name: "damageMultiplier";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr3";
        name: "damageBonus";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr4";
        name: "chanceToEvade";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocr5";
        name: "neverMiss";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ocr6";
        name: "excludeItemDamage";
        type: "bool";
        netsafe: "false";
    })[];
    AIcl: ({
        id: "Ocl1";
        name: "damagePerTarget";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ocl2";
        name: "numberOfTargetsHit";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ocl3";
        name: "damageReductionPerTarget";
        type: "unreal";
        netsafe: "false";
    })[];
    AIx3: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIx4: ({
        id: "Iagi";
        name: "agilityBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Iint";
        name: "intelligenceBonus";
        type: "int";
        netsafe: "false";
    } | {
        id: "Istr";
        name: "strengthBonusundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ihid";
        name: "hideButton";
        type: "bool";
        netsafe: "false";
    })[];
    AIxk: ({
        id: "bsk1";
        name: "movementSpeedIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "bsk2";
        name: "attackSpeedIncreaseundefined";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "bsk3";
        name: "damageTakenIncrease";
        type: "unreal";
        netsafe: "false";
    })[];
    AIdg: ({
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idg1";
        name: "requiresUndeadTarget";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Idg2";
        name: "affectsInitialTarget";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Idg3";
        name: "targetsAllowedForHeal";
        type: "targetList";
        netsafe: "false";
    })[];
    AIg2: ({
        id: "Udp5";
        name: "leaveTargetAlive";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Ihpg";
        name: "hitPointsGainedundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Idg1";
        name: "requiresUndeadTarget";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Idg2";
        name: "affectsInitialTarget";
        type: "bool";
        netsafe: "false";
    } | {
        id: "Idg3";
        name: "targetsAllowedForHeal";
        type: "targetList";
        netsafe: "false";
    })[];
    AIf2: {
        id: "Iofr";
        name: "healingMultiplier";
        type: "unreal";
        netsafe: "false";
    }[];
    Ahsb: ({
        id: "Hsb1";
        name: "bonusDamageFlat";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hsb2";
        name: "bonusDamagePercent";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Hsb3";
        name: "defenseTypeAffected";
        type: "defenseTypeInt";
        netsafe: "false";
    })[];
    AIut: ({
        id: "Isn1";
        name: "summon1Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist1";
        name: "summon1UnitType";
        type: "unitCode";
        netsafe: "false";
    } | {
        id: "Isn2";
        name: "summon2Amount";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ist2";
        name: "summon2UnitType";
        type: "unitCode";
        netsafe: "false";
    })[];
    AIts: ({
        id: "Ntm1";
        name: "goldCostFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ntm2";
        name: "lumberCostFactor";
        type: "unreal";
        netsafe: "false";
    } | {
        id: "Ntm3";
        name: "maxCreepLevelundefined";
        type: "int";
        netsafe: "false";
    } | {
        id: "Ntm4";
        name: "allowBounty";
        type: "bool";
        netsafe: "false";
    })[];
    Aatp: {
        id: "Aat1";
        name: "initiallyEnabled";
        type: "bool";
        netsafe: "false";
    }[];
};
export declare enum Abilities {
    AOEDamageUponDeathBigMine = "Amnz",
    AOEDamageUponDeathGoblinMine = "Amnx",
    AOEDamageUponDeathSapper = "Adda",
    AbolishMagic = "Aadm",
    AbolishMagic1 = "Andm",
    AbolishMagicNeutralHostile = "ACdm",
    AbolishMagicNeutralHostileSecondPosition = "ACd2",
    AbsorbMana = "Aabs",
    AcidBomb = "ANab",
    AerialShackles = "Amls",
    Alarm = "Aalr",
    AncestralSpirit = "Aast",
    AnimalWarTrainingIcon = "Ahan",
    AnimateDead = "AUan",
    AnimateDeadNeutralHostileNeutralHostile = "ACad",
    AntiMagicShell = "Aams",
    AntiMagicShellMagicResistance = "Aam2",
    AntiMagicShellNeutralHostile = "ACam",
    Attack = "Aatk",
    AttributeBonus = "Aamk",
    AuraOfBlight = "Aabr",
    Avatar = "AHav",
    AvatarNeutral = "ANav",
    Banish = "AHbn",
    BanishNeutralHostile = "ACbn",
    Barrage = "Aroc",
    Bash = "AHbh",
    BashItem = "AIbx",
    BashNeutralHostile1 = "ACbh",
    BashNeutralHostile2 = "ANbh",
    BattleRoar = "ANbr",
    BattleStations = "Abtl",
    BattleStationsFelOrcBurrow = "Sbtl",
    BearForm = "Abrf",
    Berserk = "Absk",
    BerserkItem = "AIxk",
    BerserkerUpgrade = "Sbsk",
    BerserkerUpgradeIcon = "Aobk",
    BigBadVoodoo = "AOvd",
    BlackArrow = "ANba",
    BlackArrowNeutralHostile = "ACbk",
    Bladestorm = "AOww",
    BlightDispelLarge = "Abdl",
    BlightDispelSmall = "Abds",
    BlightGrowthLarge = "Abgl",
    BlightGrowthSmall = "Abgs",
    BlightPlacement = "Ablp",
    BlightedGoldMineAbility = "Abgm",
    Blink = "AEbl",
    BlinkItemVersion = "AIbk",
    BlinkNeutral = "ANbl",
    Blizzard = "AHbz",
    BlizzardNeutralHostile = "ACbz",
    Bloodlust = "Ablo",
    BloodlustNeutralHostile1 = "ACbl",
    BloodlustNeutralHostile2 = "ACbb",
    BreathOfFire = "ANbf",
    BreathOfFireChen = "ANcf",
    BreathOfFireNeutralHostile = "ACbc",
    BreathOfFrost = "ACbf",
    BrillianceAura = "AHab",
    BrillianceAuraNeutralHostile = "ACba",
    BruteStrengthIcon = "Aobs",
    BuildHuman = "AHbu",
    BuildNaga = "AGbu",
    BuildNeutral = "ANbu",
    BuildNightElf = "AEbu",
    BuildOrc = "AObu",
    BuildTinyAltarOfKings = "AIbh",
    BuildTinyBarracks = "AIbs",
    BuildTinyBlacksmith = "AIbb",
    BuildTinyCastle = "AIbl",
    BuildTinyFarm = "AIbf",
    BuildTinyGreatHall = "AIbg",
    BuildTinyLumberMill = "AIbr",
    BuildTinyScoutTower = "AIbt",
    BuildUndead = "AUbu",
    BuildingDamageAuraTornado = "Atdg",
    BundleOfLumber = "AIlu",
    BurningOil = "Abof",
    BurrowCryptFiend = "Abur",
    BurrowDetectionFliersObsolete = "Abdt",
    BurrowNeutralHostile = "Abu5",
    BurrowScarabLvl2 = "Abu2",
    BurrowScarabLvl3 = "Abu3",
    CallToArmsPeasant = "Amil",
    CallToArmsTownHall = "Amic",
    Cannibalize = "Acan",
    Cannibalize1 = "Acn2",
    CannibalizeNeutralHostile = "ACcn",
    CargoHoldDeath = "Achd",
    CargoHoldGoblinZeppelin = "Sch3",
    CargoHoldMeatWagon = "Sch2",
    CargoHoldOrcBurrow = "Abun",
    CargoHoldShip = "Sch5",
    CargoHoldTank = "Sch4",
    CarrionBeetles = "AUcb",
    CarrionSwarm = "AUcs",
    CarrionSwarmNeutralHostile = "ACca",
    ChainLightning = "AOcl",
    ChainLightningItem = "AIcl",
    ChainLightningNeutralHostile = "ACcl",
    ChangeTimeOfDay = "AIct",
    Channel = "ANcl",
    ChaosCargoLoad = "Achl",
    ChargeGoldAndLumber = "AAns",
    Charm = "ANch",
    CharmNeutralHostile = "ACch",
    ChemicalRage = "ANcr",
    ChestOfGold = "AIgo",
    ClarityPotion = "AIpr",
    CleavingAttack = "ANca",
    CleavingAttackNeutralHostile = "ACce",
    Cloud = "Aclf",
    CloudOfFog = "AIfg",
    ClusterRockets = "ANcs",
    ClusterRocketsUpgradeLevel1 = "ANc1",
    ClusterRocketsUpgradeLevel2 = "ANc2",
    ClusterRocketsUpgradeLevel3 = "ANc3",
    ColdArrows = "AHca",
    ColdArrowsNeutralHostile = "ACcw",
    CommandAura = "ACac",
    ControlMagic = "Acmg",
    ControlMagicItem = "AIcm",
    CorporealForm = "Acpf",
    CorrosiveBreath = "Acor",
    CreateCorpse = "Agyd",
    Cripple = "Acri",
    CrippleNeutralHostile = "ACcr",
    CrippleWarlock = "Scri",
    CriticalStrike = "AOcr",
    CriticalStrikeItem = "AIcs",
    CriticalStrikeNeutralHostile = "ACct",
    CrowForm = "Amrf",
    CrushingWave = "ACcv",
    CrushingWaveLesser = "ACc2",
    CrushingWaveLesser1 = "ACc3",
    Curse = "Acrs",
    CurseNeutralHostile = "ACcs",
    Cyclone = "Acyc",
    Cyclone1 = "Acny",
    CycloneCenarius = "SCc1",
    CycloneItem = "AIcy",
    CycloneNeutralHostile = "ACcy",
    DarkConversionMalganis = "ANdc",
    DarkConversionMalganisFast = "SNdc",
    DarkPortalArchimonde = "ANdp",
    DarkRitual = "AUdr",
    DarkSummoning = "AUds",
    DeathAndDecay = "AUdd",
    DeathAndDecayNeutralHostile = "SNdd",
    DeathCoil = "AUdc",
    DeathCoilNeutralHostile = "ACdc",
    DeathPact = "AUdp",
    DeathPactItem = "AIdp",
    Defend = "Adef",
    DefendPassiveDefenseItem = "AIdd",
    Demolish = "ANde",
    DemolishUpgradeLevel1 = "ANd1",
    DemolishUpgradeLevel2 = "ANd2",
    DemolishUpgradeLevel3 = "ANd3",
    DestroyerForm = "Aave",
    DetectorSentryWard = "Adt1",
    Detonate = "Adtn",
    DevotionAura = "AHad",
    DevotionAuraNeutralHostile = "ACav",
    Devour = "Adev",
    DevourCargo = "Advc",
    DevourMagic = "Advm",
    DevourMagicNeutralHostile = "ACde",
    DevourNeutralHostile = "ACdv",
    DiseaseCloudAbomination = "Aap1",
    DiseaseCloudAnimateDead = "Aap5",
    DiseaseCloudMeatWagon = "Apts",
    DiseaseCloudNeutralHostile = "Aap3",
    DiseaseCloudNeutralHostileNoDamage = "Aap4",
    DiseaseCloudPlagueWard = "Aap2",
    Disenchant = "Adcn",
    DisenchantOld = "Adch",
    Dismount = "Adec",
    DispelMagic = "Adis",
    DispelMagicNeutralHostile = "Adsm",
    DivineShield = "AHds",
    DivineShieldNeutralHostile = "ACds",
    Doom = "ANdo",
    DropCorpse = "Amed",
    DropPilot = "Atdp",
    DrunkenBrawler = "ANdb",
    DrunkenBrawlerChen = "Acdb",
    DrunkenHaze = "ANdh",
    DrunkenHazeChen = "Acdh",
    DustOfAppearance = "AItb",
    Earthquake = "AOeq",
    EarthquakeNeutralHostile = "SNeq",
    EatTree = "Aeat",
    ElunesGrace = "Aegr",
    EnduranceAura = "AOae",
    EnduranceAuraCairne = "AOr2",
    EnduranceAuraNeutralHostile = "SCae",
    EngineeringUpgrade = "ANeg",
    Ensnare = "ANen",
    Ensnare1 = "Aens",
    EnsnareNeutralHostile = "ACen",
    EntangleGoldMine = "Aent",
    EntangledGoldMineAbility = "Aegm",
    EntanglingRoots = "AEer",
    EntanglingRootsNeutralHostile1 = "Aenr",
    EntanglingRootsNeutralHostile2 = "Aenw",
    EnvenomedSpears = "Aven",
    EnvenomedWeaponsNeutralHostile = "ACvs",
    EssenceOfBlight = "Arpl",
    Ethereal = "Aetl",
    EtherealForm = "Aetf",
    Evasion = "AEev",
    EvasionItem = "AIev",
    EvasionNeutralHostile = "ACev",
    EvasionNeutralHostile100Percent = "ACes",
    ExhumeCorpses = "Aexh",
    Factory = "ANfy",
    FaerieFire = "Afae",
    FaerieFireMorph = "Afa2",
    FaerieFireNeutralHostile = "ACff",
    FanOfKnives = "AEfk",
    FarSight = "AOfs",
    Feedback = "Afbb",
    FeedbackArcaneTower = "Afbt",
    FeedbackSpellbreaker = "Afbk",
    FeralSpirit = "AOsf",
    FeralSpirit1 = "ACs7",
    FeralSpiritNeutralHostile = "ACsf",
    FeralSpiritNeutralHostilePig = "ACs9",
    FingerOfDeathArchimonde = "ANfd",
    FingerOfDeathItem = "AIfz",
    FingerOfDeathNeutralHostile = "Afod",
    FingerOfPainNeutralHostile = "ACfd",
    FingerOfPainNeutralHostile1 = "ACf3",
    FireboltNeutralHostile = "ANfb",
    FireboltNeutralHostile1 = "ACfb",
    FireboltWarlock = "Awfb",
    FlakCannons = "Aflk",
    FlameStrike = "AHfs",
    FlameStrikeNeutralHostile = "ACfs",
    FlameStrikeNeutralHostile2 = "ANfs",
    Flare = "Afla",
    FlareGun = "AIfa",
    FlyingMachineBombs = "Agyb",
    ForceOfNature = "AEfn",
    ForceOfNatureNeutralHostile = "ACfr",
    ForkedLightning = "ANfl",
    ForkedLightningNeutralHostile = "ACfl",
    FragmentationShards = "Afsh",
    FreezingBreath = "Afrz",
    Frenzy = "Afzy",
    FrostArmor = "AUfa",
    FrostArmorAutocast = "AUfu",
    FrostArmorAutocast1 = "ACfu",
    FrostArmorAutocastNeutralHostile = "ACf2",
    FrostArmorNeutralHostile = "ACfa",
    FrostArrows = "ANfa",
    FrostAttack = "Afra",
    FrostAttack1 = "Afr2",
    FrostAttackNewHasIcon = "Afrc",
    FrostBolt = "ACcb",
    FrostBreath = "Afrb",
    FrostNova = "AUfn",
    FrostNovaNeutralHostile = "ACfn",
    GatherAcolyteGold = "Aaha",
    GatherWispGoldAndLumber = "Awha",
    GatherWispGoldAndLumberAncientSpirits = "Awh2",
    GenericItemRejuvEffect = "AIp1",
    GenericItemRejuvEffectII = "AIp2",
    GenericItemRejuvEffectIII = "AIp3",
    GenericItemRejuvEffectIV = "AIp4",
    GenericItemRejuvEffectV = "AIp5",
    GenericItemRejuvEffectVI = "AIp6",
    GetCorpse = "Amel",
    Ghost = "Agho",
    GhostVisible = "Aeth",
    GhoulFrenzyIcon = "Augf",
    GlyphOfFortification = "AIgf",
    GlyphOfFortification1 = "AIgu",
    GoldMineAbility = "Agld",
    GreaterRuneResurrection = "APrr",
    HardenedSkin = "Assk",
    HardenedSkin1 = "Ansk",
    HarvestArchimondesGhoulsLumber = "Ahr2",
    HarvestGhoulsLumber = "Ahrl",
    HarvestGoblinShreddersLumber = "Ahr3",
    HarvestGoldAndLumber = "Ahar",
    HarvestNeutralGoldAndLumber = "ANha",
    Heal = "Ahea",
    HealNeutralHostile1 = "Anhe",
    HealNeutralHostile2 = "Anh1",
    HealNeutralHostile3 = "Anh2",
    HealingSalve = "AIrl",
    HealingSpray = "ANhs",
    HealingWardAuraHealingWard = "Aoar",
    HealingWardItem = "AIhw",
    HealingWardNeutralHostile = "AChw",
    HealingWardWitchDoctor = "Ahwd",
    HealingWave = "AOhw",
    HealingWaveNeutralHostile = "AChv",
    HealingWaveRokhan = "ANhw",
    Hero = "AHer",
    Hex = "AOhx",
    HexNeutralHostile = "AChx",
    HexRokhan = "ANhx",
    HolyLight = "AHhb",
    HolyLightItem = "AIhl",
    HowlOfTerror = "ANht",
    HowlOfTerrorNeutralHostile = "Acht",
    HurlBoulder = "ACtb",
    Immolation = "AEim",
    ImmolationNeutralHostile = "ACim",
    Impale = "AUim",
    ImpaleNeutralHostile = "ACmp",
    ImprovedBowsIcon = "Aeib",
    ImprovedLumberHarvestingImprovedLumberHarvestingAdvancedLumberHarvestingIcon = "Ahlh",
    Incinerate = "ANic",
    IncinerateArrow = "ANia",
    InciteUnholyFrenzy = "Auuf",
    Inferno = "AUin",
    InfernoNeutralHostile = "ANin",
    InfernoTichondrius = "SNin",
    InnerFire = "Ainf",
    InnerFireNeutralHostile = "ACif",
    InventoryHero = "AInv",
    Invisibility = "Aivs",
    InvulnerableNeutral = "Avul",
    ItemAgilityGain = "AIam",
    ItemAgilityGainPlus2 = "AIgm",
    ItemAnimateDead = "AIan",
    ItemAntiMagicShell = "AIxs",
    ItemAreaDetection = "AIta",
    ItemAreaHealOrManaRegain = "AIra",
    ItemAreaHealing = "AIha",
    ItemAreaHealingGreater = "AIhb",
    ItemAreaManaRegain = "AImr",
    ItemAreaTreeOrWallDamage = "AIdm",
    ItemArmorBonusPlus1 = "AId1",
    ItemArmorBonusPlus10 = "AId0",
    ItemArmorBonusPlus2 = "AId2",
    ItemArmorBonusPlus3 = "AId3",
    ItemArmorBonusPlus4 = "AId4",
    ItemArmorBonusPlus5 = "AId5",
    ItemArmorBonusPlus7 = "AId7",
    ItemArmorBonusPlus8 = "AId8",
    ItemAttackBlackArrowBonus = "AIdf",
    ItemAttackCorruptionBonus = "AIcb",
    ItemAttackFireBonus = "AIfb",
    ItemAttackFireBonusGuldan = "AIgd",
    ItemAttackFrostBonus = "AIob",
    ItemAttackHealReductionBonus = "AIf2",
    ItemAttackLightningBonus = "AIlb",
    ItemAttackLightningBonusNew = "AIll",
    ItemAttackPoisonBonus = "AIpb",
    ItemAttackSlowBonus = "AIsb",
    ItemAttackSpeedBonusGlovesOfHaste = "AIsx",
    ItemAttackSpeedBonusGreater = "AIs2",
    ItemBlackArrow = "ANbs",
    ItemBlueDragonspawnOverseerSummon = "AIff",
    ItemBlueDrakeSummon = "AIfd",
    ItemCaptureTheFlag = "AIfl",
    ItemCaptureTheFlagHuman = "AIfm",
    ItemCaptureTheFlagNightElf = "AIfn",
    ItemCaptureTheFlagOrc = "AIfo",
    ItemCaptureTheFlagUndead = "AIfe",
    ItemChainDispel = "AIdc",
    ItemCommand = "AIco",
    ItemDamageBonusPlus1 = "AItg",
    ItemDamageBonusPlus10 = "AItn",
    ItemDamageBonusPlus12 = "AItc",
    ItemDamageBonusPlus15 = "AItf",
    ItemDamageBonusPlus2 = "AIth",
    ItemDamageBonusPlus20 = "AItx",
    ItemDamageBonusPlus3 = "AIat",
    ItemDamageBonusPlus4 = "AIti",
    ItemDamageBonusPlus5 = "AItj",
    ItemDamageBonusPlus6 = "AIt6",
    ItemDamageBonusPlus7 = "AItk",
    ItemDamageBonusPlus8 = "AItl",
    ItemDamageBonusPlus9 = "AIt9",
    ItemDispel = "AIdi",
    ItemDispelWithCooldown = "AIds",
    ItemDivineShield = "AIdv",
    ItemDoomGuardSummon = "AIfu",
    ItemExperienceGain = "AIem",
    ItemExperienceGainGreater = "AIe2",
    ItemFelStalkerSummon = "AIfh",
    ItemFreezeDamageBonus = "AIzb",
    ItemFurbolgTrackerSummon = "AIut",
    ItemHealOrManaRegain = "AIre",
    ItemHealingGreater = "AIh2",
    ItemHealingLeast = "AIhx",
    ItemHealingLesser = "AIh1",
    ItemHeroStatBonusPlus10Agility = "AIaz",
    ItemHeroStatBonusPlus1Agility = "AIa1",
    ItemHeroStatBonusPlus1AllStats = "AIx1",
    ItemHeroStatBonusPlus1Intelligence = "AIi1",
    ItemHeroStatBonusPlus1Strength = "AIs1",
    ItemHeroStatBonusPlus2AllStats = "AIx2",
    ItemHeroStatBonusPlus3Agility = "AIa3",
    ItemHeroStatBonusPlus3AllStats = "AIx3",
    ItemHeroStatBonusPlus3Intelligence = "AIi3",
    ItemHeroStatBonusPlus3Strength = "AIs3",
    ItemHeroStatBonusPlus4Agility = "AIa4",
    ItemHeroStatBonusPlus4AllStats = "AIx4",
    ItemHeroStatBonusPlus4Intelligence = "AIi4",
    ItemHeroStatBonusPlus4Strength = "AIs4",
    ItemHeroStatBonusPlus5Agility = "AIa5",
    ItemHeroStatBonusPlus5AllStats = "AIx5",
    ItemHeroStatBonusPlus5Intelligence = "AIi5",
    ItemHeroStatBonusPlus5Strength = "AIs5",
    ItemHeroStatBonusPlus6Agility = "AIa6",
    ItemHeroStatBonusPlus6Intelligence = "AIi6",
    ItemHeroStatBonusPlus6Strength = "AIs6",
    ItemIceRevenantSummon = "AIir",
    ItemIllusions = "AIil",
    ItemImmolation = "AIcf",
    ItemIntOrAgiOrStrGain = "AIxm",
    ItemIntelligenceGain = "AIim",
    ItemIntelligenceGainPlus2 = "AItm",
    ItemLevelGain = "AIlm",
    ItemLifeBonusGreater = "AIl2",
    ItemLifeBonusLeast = "AIlf",
    ItemLifeBonusLeast1 = "AIlz",
    ItemLifeBonusLesser = "AIl1",
    ItemLifeRegeneration = "Arel",
    ItemLifeRegenerationLesser = "Arll",
    ItemLifeSteal = "AIva",
    ItemManaBonus100 = "AImz",
    ItemManaBonus200 = "AI2m",
    ItemManaBonus75 = "AImv",
    ItemManaBonusGreater = "AIbm",
    ItemManaBonusLeast = "AImb",
    ItemManaRegainGreater = "AIm2",
    ItemManaRegainLesser = "AIm1",
    ItemManaRegeneration = "AIrm",
    ItemMoveSpeedBonus = "AIms",
    ItemOrcishBattleStandard = "AIfx",
    ItemPermanentDamageGainItemAttackDamageGain = "AIaa",
    ItemPermanentLifeGainLesser = "AIpx",
    ItemPermanentLifeGainPlus50 = "AImh",
    ItemPlaceGoblinLandMine = "AIpm",
    ItemPurge1 = "AIlp",
    ItemPurge2 = "AIpg",
    ItemPurge3 = "AIps",
    ItemRecall = "AIrt",
    ItemReincarnation = "AIrc",
    ItemResurrection = "AIrs",
    ItemResurrectionCooldown = "AIrx",
    ItemRevealEntireMap = "AIrv",
    ItemRockGolemSummon = "AIfr",
    ItemSightRangeBonus = "AIsi",
    ItemSilence = "AIse",
    ItemSkeletonSummon = "AIfs",
    ItemSlowOrbVersion = "AIos",
    ItemSoulPossession = "Asou",
    ItemSoulTheft = "AIso",
    ItemStrengthGain = "AIsm",
    ItemStrengthGainPlus2 = "AInm",
    ItemTemporaryAreaArmorBonus = "AIda",
    ItemTemporaryAreaArmorBonusWithLifeAndManaHealing = "AIdb",
    ItemTemporaryInvisibilityGreater = "AIv2",
    ItemTemporaryInvisibilityLesser = "AIv1",
    ItemTemporaryInvulnerability = "AIvu",
    ItemTemporaryInvulnerabilityDivinity = "AIvg",
    ItemTemporaryInvulnerabilityLesser = "AIvl",
    ItemTemporarySpeedBonus = "AIsp",
    ItemTownPortal = "AItp",
    ItemTransmute = "AIts",
    ItemUrsaWarriorSummon = "AIuw",
    ItemWeb = "AIwb",
    KaboomClockwerkGoblinLevel1 = "Asdg",
    KaboomClockwerkGoblinLevel2 = "Asd2",
    KaboomClockwerkGoblinLevel3 = "Asd3",
    KaboomGoblinSapper = "Asds",
    LeastHealingSlowCooldown = "AIh3",
    LesserClarityPotion = "AIpl",
    LesserRuneResurrection = "APrl",
    LifeDrain = "ANdr",
    LifeDrainNeutralHostile = "ACdr",
    LifeRegenerationAuraNeutral = "ACnr",
    LifeStealFrostmourne = "SCva",
    LightningAttack = "Alit",
    LightningShield = "Alsh",
    LightningShieldItem = "AIls",
    LightningShieldNeutralHostile = "ACls",
    LiquidFire = "Aliq",
    LoadEntangledGoldMine = "Aenc",
    LoadGoblinZeppelin = "Aloa",
    LoadOrcBurrow = "Sloa",
    LoadPilot = "Atlp",
    LoadShips = "Slo3",
    LoadWisp = "Slo2",
    Locust = "Aloc",
    LocustSwarm = "AUls",
    LongRiflesIcon = "Ahri",
    MagicDefense = "Amdf",
    MagicSentryHumanTowers = "Adts",
    ManaBurn = "AEmb",
    ManaBurnNeutralHostile1 = "Ambd",
    ManaBurnNeutralHostile2 = "Amnb",
    ManaBurnNeutralHostile3 = "Ambb",
    ManaFlare = "Amfl",
    ManaRegenerationLifeRegenerationAuraNeutral = "ANre",
    ManaShield = "ANms",
    ManaShieldNeutralHostile = "ACmf",
    MarksmanshipIcon = "Aemk",
    MassTeleport = "AHmt",
    MaulNeutralHostile3OrMaul = "ANb2",
    MechanicalCritter = "Amec",
    MeleeColdDamageBonus = "AIft",
    MeleeFireDamageBonus = "AIfw",
    MeleeLightningDamageBonus = "AIlx",
    Metamorphosis = "AEme",
    MetamorphosisEvilIllidan = "AEvi",
    MetamorphosisIllidan = "AEIl",
    MindRot = "ANmr",
    MineExplodingGoblinLandMine = "Amin",
    MirrorImage = "AOmi",
    Monsoon = "ANmo",
    Monsoon1 = "ACmo",
    MonsterLure = "AImo",
    MoonGlaive = "Amgl",
    MoonGlaiveNaisha = "Amgr",
    MountHippogryph = "Aco2",
    MountHippogryphOld = "Acoa",
    Move = "Amov",
    OnFire = "Afir",
    OnFireHuman = "Afih",
    OnFireNightElf = "Afin",
    OnFireOrc = "Afio",
    OnFireUndead = "Afiu",
    OrbOfAnnihilation = "Afak",
    PackMule = "Apak",
    Parasite = "ANpa",
    Parasite1 = "ACpa",
    PenguinSqueek = "AIpz",
    PermanentImmolationNeutralHostile1 = "ANpi",
    PermanentImmolationNeutralHostile2 = "Apig",
    PermanentInvisibility = "Apiv",
    PhaseShift = "Apsh",
    Phoenix = "AHpx",
    PhoenixFire = "Apxf",
    PhoenixFireFlyer = "Apmf",
    PhoenixIcon = "Ahpe",
    PhoenixMorphingEggRelated = "Aphx",
    PickUpArcher = "Aco3",
    PickUpArcherOld = "Acoh",
    Pillage = "Asal",
    PocketFactory = "ANsy",
    PocketFactoryUpgrade1 = "ANs1",
    PocketFactoryUpgrade2 = "ANs2",
    PocketFactoryUpgrade3 = "ANs3",
    PoisonArrows = "AEpa",
    PoisonSting = "Apoi",
    PoisonStingOrbOfVenom = "Apo2",
    Polymorph = "Aply",
    PolymorphNeutralHostile = "ACpy",
    Possession = "Apos",
    PossessionChanneling = "Aps2",
    PossessionNeutralHostile = "ACps",
    PowerupAreaHealing = "APh2",
    PowerupAreaHealingGreater = "APh3",
    PowerupAreaHealingLesser = "APh1",
    PowerupDispel = "APdi",
    Prioritize = "Aatp",
    PulverizeNeutralHostile = "ACpv",
    PulverizePulverize = "Awar",
    Purge = "Aprg",
    Purge1 = "Apg2",
    PurgeNeutralHostile = "ACpu",
    QuillSpray = "ANak",
    RainOfChaosArchimonde = "ANrc",
    RainOfChaosBalnazzar = "ANr3",
    RainOfFire = "ANrf",
    RainOfFireNeutralHostile1 = "ACrg",
    RainOfFireNeutralHostile2 = "ACrf",
    RaiseDead = "Arai",
    RaiseDeadItem = "AIrd",
    RaiseDeadNeutralHostile = "ACrd",
    Rally = "ARal",
    RandomItem = "AIri",
    RayOfDisruption = "Ache",
    ReanimationSpecialCampaignItem = "AInd",
    Rebirth = "AIrb",
    RegenerationAuraItem = "AIgx",
    Reincarnation = "AOre",
    Reincarnation1 = "ANr2",
    ReincarnationCairne = "AOr3",
    ReincarnationMannoroth = "ANrn",
    ReincarnationNeutralHostile = "ACrn",
    ReinforcedBurrowsUpgrade = "Arbr",
    ReinforcedDefensesIcon = "Aorb",
    Rejuvenation = "Arej",
    RejuvenationFurbolg = "ACr2",
    RejuvenationNeutralHostile = "ACrj",
    Renew = "Aren",
    Repair = "Arep",
    RepairHuman = "Ahrp",
    Replenish = "Arpb",
    ReplenishMana = "Amb2",
    ReplenishManaAndLife = "Ambt",
    ResistantSkin = "Arsk",
    ResistantSkinNeutralHostile1 = "ACrk",
    ResistantSkinNeutralHostile2 = "ACsk",
    Restore = "Arst",
    Resurrection = "AHre",
    ReturnGold = "Argd",
    ReturnGoldAndLumber = "Argl",
    ReturnLumber = "Arlm",
    Reveal = "Andt",
    Reveal1 = "AHta",
    Revenge = "Arng",
    ReviveHero = "Arev",
    ReviveHeroInstantly = "Aawa",
    RitualDaggerInstantHeal = "AIdg",
    RitualDaggerRegenerate = "AIg2",
    Roar = "Aroa",
    RoarItem = "AIrr",
    RoarMorph = "Ara2",
    RoarNeutralHostile = "ACro",
    RoarSkeletalOrcChampion = "ACr1",
    RoboGoblin = "ANrg",
    RoboGoblinUpgradeLevel1 = "ANg1",
    RoboGoblinUpgradeLevel2 = "ANg2",
    RoboGoblinUpgradeLevel3 = "ANg3",
    RootAncientProtector = "Aro2",
    RootAncients = "Aro1",
    RuneAreaHealOrManaRegain = "APra",
    RuneAreaManaRegain = "APmr",
    RuneAreaManaRegainGreater = "APmg",
    RuneOfSpeed = "APsa",
    RuneOfTheWatcher = "APwt",
    SacrificeAcolyte = "Alam",
    SacrificeSacrificialPit = "Asac",
    Scout = "AEst",
    ScrollOfHaste = "AIsa",
    ScrollOfRegeneration = "AIsl",
    SearingArrows = "AHfa",
    SearingArrowsNeutralHostile = "ACsa",
    SelectHero = "Aneu",
    SelectUnit = "Ane2",
    SellItems = "Asid",
    SellUnits = "Asud",
    Sentinel = "Aesn",
    SentinelNaisha = "Aesr",
    SentryWard = "Aeye",
    SentryWardItem = "AIsw",
    SerpentWard = "AOsw",
    SerpentWardRokhan = "Arsw",
    ShadeIcon = "Augh",
    ShadowMeld = "Ashm",
    ShadowMeldAkama = "Ahid",
    ShadowMeldInstant = "Sshm",
    ShadowMeldItem = "AIhm",
    ShadowOrbAbility = "AIdn",
    ShadowStrike = "AEsh",
    Shockwave = "AOsh",
    Shockwave1 = "ANsh",
    ShockwaveCairne = "AOs2",
    ShockwaveNeutralHostile = "ACsh",
    ShockwaveTrap = "ACst",
    ShopPurchaseItem = "Apit",
    ShopSharingAlliedBldg = "Aall",
    Silence = "ANsi",
    SilenceNeutralHostile = "ACsi",
    SiphonMana = "AHdr",
    SiphonManaNeutralHostile = "ACsm",
    SkeletalMasteryIcon = "Ausm",
    SlamNeutralHostile = "ACtc",
    SlamThunderLizard = "ACt2",
    Sleep = "AUsl",
    Sleep1 = "ACsp",
    SleepAlways = "Asla",
    SleepNeutralHostile = "ACsl",
    Slow = "Aslo",
    SlowAuraTornado = "Aasl",
    SlowNeutralHostile = "ACsw",
    SlowPoison = "Aspo",
    SlowPoisonItem = "AIsz",
    SoulBurn = "ANso",
    SoulPreservationMalganis = "ANsl",
    SpawnHydra = "Aspy",
    SpawnHydraHatchling = "Aspt",
    SpawnSkeletonProbablyBlackArrow = "Asod",
    SpawnSpiderlingsNeutralHostile = "Assp",
    SpawnSpidersNeutralHostile = "Aspd",
    SpawnTentacle = "ACtn",
    SpellBook = "Aspb",
    SpellDamageReduction = "AIsr",
    SpellImmunity = "Amim",
    SpellImmunityItem = "AImx",
    SpellImmunityNeutralHostile = "ACmi",
    SpellImmunitySpellImmunityArchimonde = "ACm2",
    SpellImmunitySpellImmunityDragon = "ACm3",
    SpellShieldAmulet = "ANss",
    SpellShieldRune = "ANse",
    SpellSteal = "Asps",
    Sphere = "Asph",
    SphereVengeanceLevel1 = "Asp1",
    SphereVengeanceLevel2 = "Asp2",
    SphereVengeanceLevel3 = "Asp3",
    SphereVengeanceLevel4 = "Asp4",
    SphereVengeanceLevel5 = "Asp5",
    SphereVengeanceLevel6 = "Asp6",
    SpiderAttack = "Aspa",
    SpikedBarricades = "Aspi",
    SpikedBarricadesSpikedBarricadesImprovedSpikedBarricadesIcon = "Aosp",
    SpikedCarapace = "AUts",
    SpikedShell = "ANth",
    SpikedShell22ButtonPos = "ANt2",
    SpiritBeast = "ACs8",
    SpiritLink = "Aspl",
    SpiritLinkArea = "Aspp",
    SpiritOfVengeance = "Avng",
    SpiritTouch = "Arpm",
    StaffOfPreservation = "ANpr",
    StaffOfSanctuary = "ANsa",
    StaffOfTeleportation = "AImt",
    Stampede = "ANst",
    StampedeRexxar = "Arsp",
    StandDown = "Astd",
    Starfall = "AEsf",
    StarfallMorePowerful = "AEsb",
    StasisTrap = "Asta",
    Steal = "Aste",
    StoneForm = "Astn",
    StormBolt = "AHtb",
    StormBolt1 = "ANsb",
    StormCrowForm = "Arav",
    StormEarthAndFire = "ANef",
    StormEarthAndFireChen = "Acef",
    StormHammers = "Asth",
    SubmergeMyrmidon = "Asb1",
    SubmergeRoyalGuard = "Asb2",
    SubmergeSnapDragon = "Asb3",
    SummonBear = "ANsg",
    SummonHawk = "ANsw",
    SummonHeadhunterItem = "AIsh",
    SummonLavaSpawn = "ANlm",
    SummonMishaRexxar = "Arsg",
    SummonPrawns = "Aslp",
    SummonQuilbeast = "ANsq",
    SummonQuilbeastRexxar = "Arsq",
    SummonSeaElemental = "ACwe",
    SummonWaterElemental = "AHwe",
    SummoningRitual = "Ahnl",
    SunderingBlades = "Ahsb",
    Taunt = "Atau",
    TauntNeutralHostile = "ANta",
    ThornsAura = "AEah",
    ThornsAuraNeutralHostile = "ACah",
    ThunderClap = "AHtc",
    TomeOfRetraining = "Aret",
    Tornado = "ANto",
    TornadoSpinTornado = "Atsp",
    TornadoWanderTornado = "Atwa",
    Tranquility = "AEtq",
    Transmute = "ANtm",
    TreeOfLifeUpgradeAbility = "Atol",
    TrollRegenerationIcon = "Aotr",
    TrueSightFlyingMachine = "Agyv",
    TrueSightNeutral1 = "Adtg",
    TrueSightNeutral2 = "ANtr",
    TrueSightShade = "Atru",
    TrueshotAura = "AEar",
    TrueshotAuraNeutralHostile = "ACat",
    Turret = "Attu",
    Ultravision = "Ault",
    UltravisionItem = "AIuv",
    UndefinedGrommash = "Sca6",
    UndefinedGrunt = "Sca1",
    UndefinedItem = "AIin",
    UndefinedItem1 = "AIad",
    UndefinedItem2 = "AIcd",
    UndefinedItem3 = "AIwd",
    UndefinedItem4 = "AIba",
    UndefinedItem5 = "AIav",
    UndefinedItem6 = "AIar",
    UndefinedItem7 = "AIae",
    UndefinedItem8 = "AIau",
    UndefinedKodoBeast = "Sca4",
    UndefinedLesser = "AIrn",
    UndefinedNeutralHostile = "ACss",
    UndefinedPeon = "Sca5",
    UndefinedRaider = "Sca2",
    UndefinedShaman = "Sca3",
    UnholyAura = "AUau",
    UnholyAuraNeutralHostile = "ACua",
    UnholyFrenzy = "Auhf",
    UnholyFrenzyItem = "AIuf",
    UnholyFrenzyNeutralHostile = "ACuf",
    UnholyFrenzyWarlock = "Suhf",
    UnitInventoryHuman = "Aihn",
    UnitInventoryNightElf = "Aien",
    UnitInventoryOrc = "Aion",
    UnitInventoryUndead = "Aiun",
    UnloadAirTransportsGoblinZeppelin = "Adro",
    UnloadInstantEntangledMine = "Adri",
    UnloadSeaTransports = "Sdro",
    UnstableConcoction = "Auco",
    UnsummonBuilding = "Auns",
    VampiricAura = "AUav",
    VampiricAuraNeutralHostile = "ACvp",
    VampiricPotion = "AIpv",
    Vengeance = "AEsv",
    Volcano = "ANvc",
    VoodooSpirits = "AOls",
    VorpalBlades = "Aimp",
    WandOfShadowsight = "Ashs",
    WanderNeutral = "Awan",
    WarClub = "Agra",
    WarDrums = "Aakb",
    WarStomp = "AOws",
    WarStomp1 = "AOw2",
    WarStompNeutralHostile1NeutralHostile = "Awrs",
    WarStompNeutralHostile2NeutralHostile = "Awrh",
    WarStompNeutralHostile3NeutralHostile = "Awrg",
    WateryMinion = "ANwm",
    WateryMinionItem = "AIwm",
    WaygateAbility = "Awrp",
    Web = "Aweb",
    WebNeutralHostile = "ACwb",
    WellSpringIcon = "Aews",
    WindWalk = "AOwk",
    WindWalkNeutralHostile = "ANwk"
}
export declare class AbilityContainer extends Container<Ability> {
    game: Readonly<{
        [key in Abilities]: Readonly<Ability>;
    }>;
}
export {};
