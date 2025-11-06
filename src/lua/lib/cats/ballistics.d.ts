
type BallisticGetResult = LuaMultiReturn<[number|null,number|null,number|null]>;

declare function CAT_MoveBallistic();
declare function CAT_GetBallisticLaunchSpeedFromVelocity(xLaunch: number, yLaunch: number, zLaunch: number, xTarget: number, yTarget: number, zTarget: number, velocity: number, highArc?: boolean): BallisticGetResult
declare function CAT_GetBallisticLaunchSpeedFromAngle(xLaunch: number, yLaunch: number, zLaunch: number, xTarget: number, yTarget: number, zTarget: number, angle: number): BallisticGetResult
