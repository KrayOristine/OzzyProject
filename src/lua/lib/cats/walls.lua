do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                Requires:
                                ALICE                               https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/
                                PrecomuptedHeightMap (optional)     https://www.hiveworkshop.com/threads/precomputed-synchronized-terrain-height-map.353477/

    =============================================================================================================================================================
                                                                        W A L L S
    =============================================================================================================================================================

    This template contains various functions to detect and execute collisions between gizmos* and walls. The functions are accessed by adding them to your gizmo
    class tables (for an example, see gizmos CAT).

        *Objects represented by a table with coordinate fields .x, .y, .z, velocity fields .vx, .vy, .vz, and a special effect .visual.


    To add wall collisions, add the CAT_WallCollisionCheck function to your gizmo's interactions table.
   
    To create a wall, do CAT_CreateWall(x1, y1, x2, y2, fields).

    These fields should be present in your gizmo table:
        • .collisionRadius must be set to define the radius of your gizmo.
        • .onWallCollision determines the function that is called when the gizmo collides with the wall. It is called with the parameters (gizmo, wall).
          You can use one of the three preset functions or your own. If no function is set, then the gizmo will be destroyed on impact.
        • .onWallCallback is an additional callback that can be used if one of the preset collision functions is used as the onWallCollision function. It is called
          with the parameters (gizmo, wall, , collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed).
        • .elasticity modifies the elasticity of the bounce for the CAT_WallBounce function. The elasticity of the collision is sqrt(gizmo.elasticity*wall.elasticity).
        • .maxSpeed controls how often a collision check is performed. It represents the maximum speed that the gizmo can reasonably reach. If not set, the
          default value, set in the Data CAT, will be used.

    These fields are recognized for the wall table:
        • .wallHeight controls the height of the wall. If it isn't set, the collision check will be performed in 2D. Otherwise, the wall extends from its z-position
          up to its z-position plus its wallHeight.
        • .z controls the z-position of the wall origin for a wall with wallHeight. Uses the terrain z-value if not set.
        • visualize is a debug option to visualize the wall using special effects.

    Any additional fields contained in the fields parameter of CAT_CreateWall are passed into ALICE_Create, including identifiers and interactions. If no identifier
    is set, the wall gets the "wall" identifier.

    =============================================================================================================================================================
                                                            L I S T   O F   F U N C T I O N S
    =============================================================================================================================================================

    CAT_CreateWall(x1, y1, x2, y2, fields)      Creates a wall with the endpoints x1, y1 and x2, y2. All fields contained in the fields parameter are passed into
                                                ALICE_Create.

    CAT_WallCollisionCheck                      The main collision detection function for walls. The gizmo is the male actor and the wall the female actor in the
                                                interaction.

    CAT_WallBounce                              Reflects the gizmo on the wall.
    CAT_WallImpact                              Destroys the gizmo when it collides with the wall.
    CAT_WallPassThrough                         Execute the onWallCallback function once, but do not bounce or destroy the gizmo.

    =============================================================================================================================================================
    ]]

    local abs = math.abs
    local sqrt = math.sqrt

    local GetTerrainZ                       = nil       ---@type function
    local moveableLoc                       = nil       ---@type location

    ---Creates a wall with the endpoints x1, y1 and x2, y2. All fields contained in the fields parameter are passed into ALICE_Create.
    ---@param x1 number
    ---@param y1 number
    ---@param x2 number
    ---@param y2 number
    ---@param fields? table
    ---@return table
    function CAT_CreateWall(x1, y1, x2, y2, fields)
        local self = {
            x = (x1 + x2)/2,
            y = (y1 + y2)/2,
            width = abs(x2 - x1) + ALICE_Config.CELL_SIZE,
            height = abs(y2 - y1) + ALICE_Config.CELL_SIZE,
        }

        if fields then
            for key, value in pairs(fields) do
                self[key] = value
            end
        end

        if self.wallHeight then
            self.z = self.z or GetTerrainZ(self.x, self.y)
        end

        self.dx = x2 - x1
        self.dy = y2 - y1
        self.length = sqrt(self.dx^2 + self.dy^2)
        self.normalX = self.dy/self.length
        self.normalY = -self.dx/self.length
        self.isStationary = true
        self.identifier = self.identifier or "wall"

        if fields and fields.visualize then
            self.visualizer = {}
            if self.wallHeight then
                local numEffects = self.length // 64
                local numEffectsVertical = self.wallHeight // 64
                for i = 1, numEffects + 1 do
                    self.visualizer[i] = {}
                    for j = 1, numEffectsVertical + 1 do
                        self.visualizer[i][j] = AddSpecialEffect("Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl", x1 + (i-1)/numEffects*self.dx, y1 + (i-1)/numEffects*self.dy)
                        BlzSetSpecialEffectZ(self.visualizer[i][j], self.z + (j-1)*self.wallHeight/numEffectsVertical)
                    end
                end
            else
                local numEffects = self.length // 64
                for i = 1, numEffects + 1 do
                    self.visualizer[i] = AddSpecialEffect("Abilities\\Weapons\\WitchDoctorMissile\\WitchDoctorMissile.mdl", x1 + (i-1)/numEffects*self.dx, y1 + (i-1)/numEffects*self.dy)
                end
            end
        end

        ALICE_Create(self)

        return self
    end

    local function GetImpactParameters(gizmo, wall, perpendicularDist)
        local perpendicularSpeed = (wall.dx*gizmo.vy - wall.dy*gizmo.vx)/wall.length
        local parallelSpeed = (gizmo.vx*wall.dx + gizmo.vy*wall.dy)/wall.length
        local totalSpeed = sqrt(gizmo.vx^2 + gizmo.vy^2)

        local backtrackFactor
        if perpendicularSpeed ~= 0 then
            if perpendicularDist > 0 then
                backtrackFactor = (-perpendicularDist + gizmo.collisionRadius)/perpendicularSpeed
            else
                backtrackFactor = (-perpendicularDist - gizmo.collisionRadius)/perpendicularSpeed
            end
        else
            backtrackFactor = 0
        end

        local collisionX = gizmo.x + backtrackFactor*gizmo.vx
        local collisionY = gizmo.y + backtrackFactor*gizmo.vy
        local collisionZ
        if gizmo.z and gizmo.vz then
            collisionZ = gizmo.z + backtrackFactor*gizmo.vz
        end

        return collisionX, collisionY, collisionZ, abs(perpendicularSpeed), abs(parallelSpeed), totalSpeed
    end

    function CAT_WallBounce(gizmo, wall)
        local perpendicularDist = (wall.dx*(gizmo.y - wall.y) - wall.dy*(gizmo.x - wall.x))/wall.length
        local collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed = GetImpactParameters(gizmo, wall, perpendicularDist)

        local elasticity = sqrt((gizmo.elasticity or 1)*(wall.elasticity or 1))
        local bounceFactor = (1 + elasticity)*(gizmo.vx*wall.normalX + gizmo.vy*wall.normalY)
        gizmo.vx = gizmo.vx - bounceFactor*wall.normalX
        gizmo.vy = gizmo.vy - bounceFactor*wall.normalY

        local displaceFactor
        if perpendicularDist > 0 then
            displaceFactor = (1 + elasticity)*(perpendicularDist - gizmo.collisionRadius)
        else
            displaceFactor = (1 + elasticity)*(perpendicularDist + gizmo.collisionRadius)
        end
        gizmo.x = gizmo.x + displaceFactor*wall.normalX
        gizmo.y = gizmo.y + displaceFactor*wall.normalY

        local callback = ALICE_FindField(gizmo.onWallCallback, wall)
        if callback then
            callback(gizmo, wall, collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed)
        end
    end

    function CAT_WallImpact(gizmo, wall)
        local perpendicularDist = (wall.dx*(gizmo.y - wall.y) - wall.dy*(gizmo.x - wall.x))/wall.length
        local collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed = GetImpactParameters(gizmo, wall, perpendicularDist)

        local callback = ALICE_FindField(gizmo.onWallCallback, wall)
        if callback then
            callback(gizmo, wall, collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed)
        end

        if HandleType[gizmo.visual] == "effect" then
            BlzSetSpecialEffectPosition(gizmo.visual, collisionX, collisionY, gizmo.z or GetTerrainZ(collisionX, collisionY))
        end

        ALICE_Kill(gizmo)
    end

    function CAT_WallPassThrough(gizmo, wall)
        local perpendicularDist = (wall.dx*(gizmo.y - wall.y) - wall.dy*(gizmo.x - wall.x))/wall.length
        local collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed = GetImpactParameters(gizmo, wall, perpendicularDist)

        local callback = ALICE_FindField(gizmo.onWallCallback, wall)
        if callback then
            callback(gizmo, wall, collisionX, collisionY, collisionZ, perpendicularSpeed, parallelSpeed, totalSpeed)
        end

        ALICE_PairDisable()
    end

    function CAT_WallCollisionCheck(gizmo, wall)
        local data = ALICE_PairLoadData()
        local xg, yg, xw, yw = gizmo.x, gizmo.y, wall.x, wall.y
        local perpendicularDist = (wall.dx*(yg - yw) - wall.dy*(xg - xw))/wall.length
        local correctedDist = (perpendicularDist < 0 and -perpendicularDist or perpendicularDist) - gizmo.collisionRadius

        if ALICE_PairIsFirstContact() then
            data.isPositive = perpendicularDist > 0
            data.parallelDist = ((xw - xg)*wall.dx + (yw - yg)*wall.dy)/wall.length
            if data.parallelDist < 0 then
                data.parallelDist = -data.parallelDist
            end
        else
            local isPositive = perpendicularDist > 0
            if isPositive ~= data.isPositive or correctedDist < 0 then
                if data.parallelDist <= wall.length and (wall.wallHeight == nil or (gizmo.z <= wall.z + wall.wallHeight and gizmo.z >= wall.z)) then
                    local callback = ALICE_FindField(gizmo.onWallCollision, wall)
                    gizmo.hasCollided = true
                    if callback then
                        callback(gizmo, wall)
                    else
                        ALICE_Kill(gizmo)
                    end
                else
                    data.isPositive = isPositive
                end
            end
            data.parallelDist = ((xw - xg)*wall.dx + (yw - yg)*wall.dy)/wall.length
            if data.parallelDist < 0 then
                data.parallelDist = -data.parallelDist
            end
        end
        return correctedDist/(gizmo.maxSpeed or CAT_Data.DEFAULT_GIZMO_MAX_SPEED)
    end

    function InitWallsCAT()
        local precomputedHeightMap = Require.optionally "PrecomputedHeightMap"

        ALICE_FuncRequireFields(CAT_WallCollisionCheck, true, false, "collisionRadius")

        if precomputedHeightMap then
            GetTerrainZ = _G.GetTerrainZ
        else
            moveableLoc = Location(0, 0)
            GetTerrainZ = function(x, y)
                MoveLocation(moveableLoc, x, y)
                return GetLocationZ(moveableLoc)
            end
        end
    end

    OnInit.final(InitWallsCAT)
end