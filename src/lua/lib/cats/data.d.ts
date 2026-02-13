interface CATData {
  /**
   * Shifts the coordinates returned by ALICE up by half a widget's height so that it represents the center, not the origin.
   *
   * The Collisions CAT is expecting center-point coordinates.
   */
  CENTER_POINT_COORDINATES: boolean;

  /**
   * By default, a unit's height is this factor times its collision size.
   */
  DEFAULT_UNIT_HEIGHT_FACTOR: number;

  DEFAULT_DESTRUCTABLE_COLLISION_RADIUS: number;
  DEFAULT_DESTRUCTABLE_HEIGHT: number;
  DEFAULT_ITEM_COLLISION_RADIUS: number;
  DEFAULT_ITEM_HEIGHT: number;

  WIDGET_TYPE_COLLISION_RADIUS: LuaTable<string, number>;
  WIDGET_TYPE_HEIGHT: LuaTable<string, number>;

  DEFAULT_UNIT_ELASTICITY: number;
  DEFAULT_UNIT_MASS: number;
  DEFAULT_UNIT_FRICTION: number;
  DEFAULT_DESTRUCTABLE_ELASTICITY: number;
  DEFAULT_ITEM_ELASTICITY: number;
  UNIT_TYPE_MASS: LuaTable<string, number>;
  UNIT_TYPE_FRICTION: LuaTable<string, number>;
  WIDGET_TYPE_ELASTICITY: LuaTable<string, number>;
  /**
   * Periodically check each unit's position so that the unit's velocity can be retrieved for collisions.
   */
  MONITOR_UNIT_VELOCITY: boolean;

  /**
   * The maximum speed that a gizmo can reasonably achieve to determine the frequency with which collision checks must be performed.
   *
   * Can be overwritten with the maxSpeed field in a gizmo's table.
   */
  DEFAULT_GIZMO_MAX_SPEED: number;
  /**
   * Sets the vertical bounds for the kill trigger in CAT_OutOfBoundsCheck.
   */
  GIZMO_MAXIMUM_Z: number;
  /**
   * Sets the vertical bounds for the kill trigger in CAT_OutOfBoundsCheck.
   */
  GIZMO_MINIMUM_Z: number;

  /**
   * The friction increase for a sliding object when it comes to rest. High value can prevent jittering in tightly packed collisions.
   */
  STATIC_FRICTION_FACTOR: number;
  /**
   * If an airborne object would bounce off the surface with this much or less speed, it will become ground-bound instead.
   */
  MINIMUM_BOUNCE_VELOCITY: number;
  /**
   * Strength of gravitational acceleration.
   */
  GRAVITY: number;

  /**
   * Determines how curved a surface must be before an object can no longer slide across it but is instead reflected as though it hit a wall.
   *
   * Higher value is less forgiving.
   */
  MAX_SLIDING_CURVATURE_RADIUS: number;

  /**
   * You can adjust the friction of different terrain types by editing the TERRAIN_TYPE_FRICTION table.
   *
   * Disable if not needed to improve performance.
   */
  DIFFERENT_SURFACE_FRICTIONS: boolean;
  TERRAIN_TYPE_FRICTION: LuaTable<string, number>;
  TERRAIN_TYPE_ELASTICITY: LuaTable<string, number>;
}

/**
 * Global cata constant for ALICE CATs
 */
declare const CAT_Data: CATData;
