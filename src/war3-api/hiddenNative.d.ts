/** @noSelfInFile */


// Hidden natives

declare const _GV: LuaUserdata;
declare const globals: LuaUserdata;

/**
 * Returns an empty table, where accessing any unused key will return the specified default value.
 * The created table will have a metatable attached. Changing this metatable (or rather its __index metamethod) will break behaviour.
 * @param defaultValue any
 * @return table emptyTable
*/
declare function __jarray(defaultValue: any): LuaTable ;

/**
 * Returns true, if the specified unit is alive, and false otherwise.
 * Always use this over IsUnitAliveBJ (doesn't suffer from the known bugs of IsUnitAliveBJ).
*/
declare function UnitAlive(whichUnit: unit): boolean ;

/**
 * Returns the gold cost for the specified unittype as set in the object editor.
 * Using this on a hero unittype will crash the game.
*/
declare function GetUnitGoldCost(unitTypeId: number): number ;

/**
 * Returns the wood cost for the specified unittype as set in the object editor.
 * Using this on a hero unittype will crash the game.
*/
declare function GetUnitWoodCost(unitTypeId: number): number ;

/**
 * Returns the build time in seconds for the specified unittype as set in the object editor.
 * @return build time in seconds
*/
declare function GetUnitBuildTime(unitTypeId: number): number ;

/**
 * Returns the number of living units of the specified unittype currently owned by the specified player.
 * Counts units in training, heroes during revive and buildings in construction. Doesn't count dead units.
 * Buildings in the process of upgrading count as the type they are upgrading to.
*/
declare function GetPlayerUnitTypeCount(p: player, unittypeid: number): number ;

/**
 * Unlearns the specified hero ability from the specified hero. Ability resets to level 0 and can be skilled again. Hero points previously spent on the ability are lost.
 * Does not work on normal abilities.
*/
declare function BlzDeleteHeroAbility(whichHero: unit, heroAbilCode: number): void ;

/**
 * Sets the primary attribute (str/int/agi) of the specified hero to the specified amount.
*/
declare function BlzSetHeroPrimaryStat(whichHero: unit, amount: number): void ;

/**
 *
 *  1 # GetHandleId( HERO_ATTRIBUTE_STR )
 *
 *  2 # GetHandleId( HERO_ATTRIBUTE_INT )
 *
 *  3 # GetHandleId( HERO_ATTRIBUTE_AGI )
 */
type heroattributeId = 1|2|3;

/**
 * Sets the specified attribute (str, int or dex) of the specified hero to the specified amount.
 * The attribute is represented by an integer (see below).
*/
declare function BlzSetHeroStatEx(whichHero: unit, statId: heroattributeId, amount: number): void ;

/**
 * Returns the integer representation of the primary attribute of the specified hero (not the amount of that stat owned by the hero!).
 * Use ConvertHeroAttribute(i) on the return value to get the actual heroattribute (such as HERO_ATTRIBUTE_STR for the human paladin) and GetHandleId() to convert back.
*/
declare function BlzGetHeroPrimaryStat(whichHero: unit): heroattributeId ;

/**
 * Returns the amount that the specified hero owns of the specified hero attribute (str/int/agi).
 * The stat is represented by an integer.
*/
declare function BlzGetHeroStat(whichHero: unit, statId: heroattributeId): number ;

/**
 *
 *
 *  0 # GetHandleId( ARMOR_TYPE_WHOKNOWS )
 *
 *  1 # GetHandleId( ARMOR_TYPE_FLESH )
 *
 *  2 # GetHandleId( ARMOR_TYPE_METAL )
 *
 *  3 # GetHandleId( ARMOR_TYPE_WOOD )
 *
 *  4 # GetHandleId( ARMOR_TYPE_ETHREAL )
 *
 *  5 # GetHandleId( ARMOR_TYPE_STONE )
*/

type armortypeId = 0|1|2|3|4|5

/**
 * Returns the integer representation of the armortype of the specified unit.
 * Use ConvertArmorType(i) on the return value to receive the actual armortype (such as ARMOR_TYPE_METAL for the human paladin) and GetHandleId() to convert back.
*/
declare function BlzGetUnitArmorType(whichUnit: unit): armortypeId ;


/**
 *
 *  0 - GetHandleId( MOVE_TYPE_UNKNOWN )
 *
 *  1 - GetHandleId( MOVE_TYPE_FOOT )
 *
 *  2 - GetHandleId( MOVE_TYPE_FLY )
 *
 *  4 - GetHandleId( MOVE_TYPE_HORSE )
 *
 *  8 - GetHandleId( MOVE_TYPE_HOVER )
 *
 *  16 - GetHandleId( MOVE_TYPE_FLOAT )
 *
 *  32 - GetHandleId( MOVE_TYPE_AMPHIBIOUS )
 *
 *  64 - GetHandleId( MOVE_TYPE_UNBUILDABLE )
 */
type movetypeid = 0|1|2|4|8|16|32|64

/**
 * Returns the integer representation of the movetype of the specified unit.
 * Use ConvertMoveType(i) on the return value to receive the actual movetype (such as MOVE_TYPE_FOOT for the human paladin) and GetHandleId() to convert back.
*/
declare function BlzGetUnitMovementType(whichUnit: unit): movetypeid ;

/**
 *
 * Sets the specified movetype (represented as integer) to the specified unit.
 * Doesn't seem to properly apply the pathing properties of the new movetype (like setting a movetype to flying doesn't make the unit able to get across cliffs). Needs more testing.
*/
declare function BlzSetUnitMovementType(whichUnit: unit, movetypeId: movetypeid): void ;
