
/**
 * Makes your gizmo get destroyed after X seconds, where X is set through the .lifetime field of your gizmo table.
 *
 * With the optional .onExpire field, you can set a callback function that is invoked when the gizmo decays.
 * @param gizmo
 */
declare function CAT_Decay(gizmo: ALICEHostTable);

/**
 * checks for terrain collision and invokes a callback function upon collision.
 *
 * The callback function is retrieved from the .onTerrainCollision field.
 *
 * It is called with the parameters (gizmo, normalSpeed, tangentialSpeed, totalSpeed).
 *
 * If the onTerrainCollision field is empty, ALICE_Kill will be invoked instead.
 *
 * Requires the .collisionRadius field of your table to be set.
 * @param gizmo
 */
declare function CAT_CheckTerrainCollision(gizmo: ALICEHostTable);

/**
 * A function for onTerrainCollision. Uses the .elasticity field to determine the elasticity of the collision.
 *
 * This value is multiplied by the CAT_Data.TERRAIN_TYPE_ELASTICITY, which can be set in the Data CAT.
 * @param gizmo
 */
declare function CAT_TerrainBounce(gizmo: ALICEHostTable, x: number, y: number);

/**
 * Checks if the gizmo has left the playable map area and destroys it if it does.
 *
 * You can set the .reflectsOnBounds field of your gizmo table to true to make it reflect on the bounds instead of being destroyed.
 *
 * Uses the .maxSpeed field to determine how often the out-of-bounds check is performed, or CAT_Data.DEFAULT_GIZMO_MAX_SPEED if not set.
 * @param gizmo
 */
declare function CAT_OutOfBoundsCheck(gizmo: ALICEHostTable);
/**
 * Initializes the gizmo's z-coordinate to GetTerrainZ(x, y) + gizmo.collisionRadius.
 * @param gizmo
 */
declare function CAT_AutoZ(gizmo: ALICEHostTable);
/**
 * Change the gizmo bounds for CAT_OutOfBoundsCheck. The default bounds are the world bounds. z-bounds are set in the config
 * @param minX
 * @param minY
 * @param maxX
 * @param maxY
 */
declare function CAT_SetGizmoBounds(minX: number, minY: number, maxX: number, maxY: number);
/**
 * Removes all widgets with the specified widgetId and calls the constructorFunc with the parameters func(x, y, z, life, mana, owner, facing).
 *
 * The last three parameters are nil if the widget is not a unit.
 * @param widgetId
 * @param widgetType
 * @param cctor
 */
declare function CAT_GlobalReplace(widgetId: number, widgetType: "unit"|"destructable"|"item", cctor: (x:number,y:number,z:number,life:number,mana:number|null,owner:player|null,facing:number|null)=>void);
/**
 * Shifts the position of the gizmo by its launchOffset field in the direction of its velocity.
 * @param gizmo
 */
declare function CAT_LaunchOffset(gizmo: ALICEHostTable);

type ALICE_gizmo_onTerrainCollide = (gizmo: ALICEHostTable, x: number, y: number)=>void;
type ALICE_gizmo_onTerrainCallback = (gizmo: ALICEHostTable, normalSpeed: number, tangentialSpeed: number, totalSpeed: number)=>void;

interface ALICEHostTable {
  vx: number;
  vy: number;
  vz: number;
  visual: effect;

  lifetime?: number;
  onExpire?: Fn<[ALICEHostTable],void>;
  onTerrainCollision?: ALICE_gizmo_onTerrainCollide
  onTerrainCallback?: ALICE_gizmo_onTerrainCallback;
}
