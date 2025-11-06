

declare function CAT_GizmoCollisionCheck2D(host: ALICEObject, target: ALICEObject);
declare function CAT_UnitCollisionCheck2D(host: ALICEObject, target: unit);
declare function CAT_ItemCollisionCheck2D(host: ALICEObject, target: item);
declare function CAT_DestructableCollisionCheck2D(host: ALICEObject, target: destructable);

//@ gizmo collide
/**
 * Reflect the two gizmos.
 */
declare function CAT_GizmoBounce2D(host: ALICEObject, target: ALICEHostTable);
/**
 * Destroy the initiating gizmo and recoil the other.
 */
declare function CAT_GizmoImpact2D(host: ALICEObject, target: ALICEHostTable);
/**
 * Destroy the receiving gizmo and recoil the other.
 */
declare function CAT_GizmoDevour2D(host: ALICEObject, target: ALICEHostTable);
/**
 * Destroy both gizmos.
 */
declare function CAT_GizmoAnnihilate2D(host: ALICEObject, target: ALICEHostTable);
/**
 * Execute the callback function once, but do not destroy or recoil either.
 */
declare function CAT_GizmoPassThrough2D(host: ALICEObject, target: ALICEHostTable);
/**
 * Execute the callback function once each time the gizmo and the unit pass through each other.
 */
declare function CAT_GizmoMultiPassThrough2D(host: ALICEObject, target: ALICEHostTable);

//@ unit collide
/**
 * Reflect the gizmo on the unit and recoil the unit.
 */
declare function CAT_UnitBounce2D(host: ALICEObject, target: unit);
/**
 * Destroy the gizmo and recoil the unit.
 */
declare function CAT_UnitImpact2D(host: ALICEObject, target: unit);
/**
 * Kill the unit and recoil the gizmo.
 */
declare function CAT_UnitDevour2D(host: ALICEObject, target: unit);
/**
 * Destroy both the unit and the gizmo.
 */
declare function CAT_UnitAnnihilate2D(host: ALICEObject, target: unit);
/**
 * Execute the callback function once, but do not destroy or recoil either.
 */
declare function CAT_UnitPassThrough2D(host: ALICEObject, target: unit);
/**
 * Execute the callback function once each time the gizmo and the unit pass through each other.
 */
declare function CAT_UnitMultiPassThrough2D(host: ALICEObject, target: unit);

//@ destructable collide
/**
 * Reflect the gizmo on the destructable.
 */
declare function CAT_DestructableBounce2D(host: ALICEObject, target: destructable);
/**
 * Destroy the gizmo.
 */
declare function CAT_DestructableImpact2D(host: ALICEObject, target: destructable);
/**
 * Destroy the destructable and recoil the gizmo.
 */
declare function CAT_DestructableDevour2D(host: ALICEObject, target: destructable);
/**
 * Destroy both the destructable and the gizmo.
 */
declare function CAT_DestructableAnnihilate2D(host: ALICEObject, target: destructable);
/**
 * Execute the callback function once, but do not destroy or recoil either.
 */
declare function CAT_DestructablePassThrough2D(host: ALICEObject, target: destructable);
/**
 * Execute the callback function once each time the gizmo and the destructable pass through each other.
 */
declare function CAT_DestructableMultiPassThrough2D(host: ALICEObject, target: destructable);

//@ item collide
/**
 * Reflect the gizmo on the item.
 */
declare function CAT_ItemBounce2D(host: ALICEObject, target: item);
/**
 * Destroy the gizmo.
 */
declare function CAT_ItemImpact2D(host: ALICEObject, target: item);
/**
 * Destroy the item and recoil the gizmo.
 */
declare function CAT_ItemDevour2D(host: ALICEObject, target: item);
/**
 * Destroy the item and the gizmo.
 */
declare function CAT_ItemAnnihilate2D(host: ALICEObject, target: item);
/**
 * Execute the callback function once, but do not destroy or recoil either.
 */
declare function CAT_ItemPassThrough2D(host: ALICEObject, target: item);
/**
 * Execute the callback function once each time the gizmo and the item pass through each other.
 */
declare function CAT_ItemMultiPassThrough2D(host: ALICEObject, target: item);

type ALICE_gizmo_onCollisionInteraction<T> = {
  [key: string]: InteractionFn<T>;
}
type ALICE_gizmo_callbackInteraction<T> = (gizmo: ALICEObject, object: T,
        collisionPointX: number, collisionPointY: number, collisionPointZ: number,
        perpendicularSpeed: number, parallelSpeed: number, totalSpeed: number,
        centerOfMassVelocityX: number, centerOfMassVelocityY: number, centerOfMassVelocityZ: number)=>void;
type ALICE_gizmo_onCollideDamage<T> = {
  [key: string]: number | Fn<[ALICEObject,T], number>
}
type ALICE_gizmo_onDamage = (host: ALICEObject, target: ALICEObject, perpendicularSpeed: number, parallelSpeed: number, totalSpeed: number)=>number;

interface ALICEHostTable {
  /**
   * Must be set to define the radius of your gizmo. Their collision box is a sphere.
   *
   * The collision boxes of widgets are customized in the Data CAT.
   */
  collisionRadius?: number;
  /**
   * Used for knockbacks.
   *
   * The masses of units are customized in the Data CAT.
   */
  mass?: number;
  /**
   * Controls how often a collision check is performed.
   *
   * It represents the maximum speed that the gizmo can reasonably reach
   */
  maxSpeed?: number;
  /**
   * Used by bounce functions. The default value is 1.
   *
   * The elasticity of widgets can be customized in the Data CAT.
   *
   * The elasticity of a collision is sqrt(elasticity 1 * elasticity 2).
   */
  elasticity?: number;

  onGizmoCollision?: ALICE_gizmo_onCollisionInteraction<ALICEHostTable>;
  onGizmoCallback?: ALICE_gizmo_callbackInteraction<ALICEHostTable>;
  onUnitCollision?: ALICE_gizmo_onCollisionInteraction<unit>;
  onUnitCallback?: ALICE_gizmo_callbackInteraction<unit>;
  onDestructableCollision?: ALICE_gizmo_onCollisionInteraction<destructable>;
  onDestructableCallback?: ALICE_gizmo_callbackInteraction<destructable>;
  onItemCollision?: ALICE_gizmo_onCollisionInteraction<item>;
  onItemCallback?: ALICE_gizmo_callbackInteraction<item>;
  onUnitDamage: ALICE_gizmo_onCollideDamage<unit>;
  onItemDamage: ALICE_gizmo_onCollideDamage<item>;
  onDestructableDamage: ALICE_gizmo_onCollideDamage<destructable>;
  onUnitAttackType: attacktype;
  onUnitDamageType: damagetype;
  onDamage: ALICE_gizmo_onDamage;

  friendlyFire?: boolean;
  onlyTarget?: unit;
}
