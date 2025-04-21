if Debug then Debug.beginFile "CAT Forces3D" end ---@diagnostic disable: need-check-nil
do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                    Requires:
                                    ALICE                       https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/
                                    Data CAT
                                    Units CAT
                                    Interfaces CAT
                                    TotalInitialization         https://www.hiveworkshop.com/threads/total-initialization.317099/

    =============================================================================================================================================================
                                                                      F O R C E S   3 D
    =============================================================================================================================================================

    The forces library allows you to create interactions where objects are pushing or pulling other objects in the vicinity. A force can affect units and gizmos,
    but the source cannot be a unit. To enable a unit as the source of a force, create a class as the source of the force and anchor it to that unit. There are
    preset force functions packaged with this CAT that you can use, but you can also create your own force functions.

    To add a force to a class, use the corresponding AddForce function on your class on map initialization. The function will add the necessary entries to your
    class table to make the class instances a source of the force field. The AddForce functions modify the class's interaction tables. Make sure these changes 
    are preserved!
    
    To define your own force, you need to define three functions:
    
    InitFunc        This function is called when a pair is created for this force interaction. It can be used to precompute data and write it into the pair matrix.
    ForceFunc       This function determines the strength and direction of the force. It receives 10 input arguments:
                    (source, target, matrixData, distance, deltaX, deltaY, deltaZ, deltaVelocityX, deltaVelocityY, deltaVelocityZ). It returns three numbers:
                    (forceX, forceY, forceZ).
    IntervalFunc    This function determines the interaction interval of your force (the same as the ALICE interactionFunc interval). A lower interval makes the
                    force more accurate. It receives the same 10 input arguments and returns a number.

    The preset force functions can serve as a blueprint for your custom functions.

    =============================================================================================================================================================
                                                                L I S T   O F   F U N C T I O N S
    =============================================================================================================================================================

                        The pairsWith parameter is a string or a string sequence listing identifiers of objects that the force should affect.

    CAT_AddGravity3D(gizmo, pairsWith)                                      A long-range attraction that gets stronger as objects move closer together. Uses the
                                                                            mass field to determine the force strength.
    CAT_AddPressure3D(gizmo, pairsWith)                                     Pushes nearby objects away. The strength is determined by the .pressureStrength field.
                                                                            The coupling strength with objects is based on the .collisionRadius in the case of
                                                                            gizmos, and the collision radius and height in the case of units. The field
                                                                            .pressureMaxRange determines the maximum range of the force. The force will drop
                                                                            gradually until it hits zero at that range.
    CAT_AddWindField3D(gizmo, pairsWith)                                    A force that pushes objects into a certain direction. The .windFieldDensity field
                                                                            determines the strength of the wind field. The .windFieldSpeed field determines the
                                                                            speed of the wind, the field .windFieldAnglePhi the horizontal direction of the wind,
                                                                            and the field .windFieldAngleTheta the vertical direction. The .windFieldMaxRange
                                                                            field determines the radius of the field. The wind density will drop gradually until
                                                                            it hits zero at that range.
    CAT_AddForce3D(gizmo, pairsWith, initFunc, forceFunc, intervalFunc)     Add a custom force to the gizmo.

    =============================================================================================================================================================
                                                                        C O N F I G
    =============================================================================================================================================================
    ]]

    --Multiplies the forces on a unit (compared to a gizmo) by this factor.
    local FORCE_UNIT_MULTIPLIER             = 0.3           ---@type number

    --Determines the strength of gravity.
    local GRAVITY_STRENGTH                  = 50000           ---@type number

    --Determines how often the force fields are updated for gravity. A greater accuracy requires more calculations. Use debug mode to gauge the appropriate accuracy.
    local GRAVITY_ACCURACY                  = 10            ---@type number

    --Avoids infinities by making the gravity strength not increase further when objects move closer to each other than this value. Can be overwritten with the
    --.minDistance field.
    local DEFAULT_GRAVITY_MIN_DISTANCE      = 128           ---@type number

    --Determines how often the force fields are updated for the pressure force. A greater accuracy requires more calculations. Use debug mode to gauge the
    --appropriate accuracy.
    local PRESSURE_ACCURACY                 = 0.05          ---@type number

    --Determines how often the force fields are updated for the wind force. A greater accuracy requires more calculations. Use debug mode to gauge the appropriate
    --accuracy.
    local WIND_FIELD_ACCURACY               = 2.0           ---@type number

    --===========================================================================================================================================================

    local sqrt                      = math.sqrt
    local cos                       = math.cos
    local sin                       = math.sin
    
    local INTERVAL                  = nil
    local unitForce                 = {}
    local Force3D                   = nil                   ---@type function

    local SPHERE_CROSS_SECTION      = 4 - 8/bj_PI
    local CYLINDER_CROSS_SECTION    = 2/bj_PI

    ---@gizmo forceMatrix
    local forceMatrix = {
        Fx = 0,
        Fy = 0,
        Fz = 0,
        Fxdt = 0,
        Fydt = 0,
        Fzdt = 0,
        lastUpdate = nil,
        doUserInit = true
    }

    forceMatrix.__index = forceMatrix

    local function GetObjectCrossSection(object)
        if type(object) == "table" then
            if object.collisionRadius then
                return SPHERE_CROSS_SECTION*object.collisionRadius
            elseif object.anchor then
                if type(object.anchor) == "table" then
                    return SPHERE_CROSS_SECTION*object.anchor.collisionRadius
                elseif HandleType[object.anchor] == "unit" then
                    local collisionSize = BlzGetUnitCollisionSize(object.anchor)
                    return CYLINDER_CROSS_SECTION*collisionSize*(CAT_Data.WIDGET_TYPE_HEIGHT[GetUnitTypeId(object.anchor)] or CAT_Data.DEFAULT_UNIT_HEIGHT_FACTOR*collisionSize)
                else
                    return 0
                end
            else
                return 0
            end
        elseif HandleType[object] == "unit" then
            local collisionSize = BlzGetUnitCollisionSize(object)
            return CYLINDER_CROSS_SECTION*collisionSize*(CAT_Data.WIDGET_TYPE_HEIGHT[GetUnitTypeId(object)] or CAT_Data.DEFAULT_UNIT_HEIGHT_FACTOR*collisionSize)
        else
            return 0
        end
    end

    --===========================================================================================================================================================
    --3D Force Functions
    --===========================================================================================================================================================

    local function InitAccelerateGizmo3D(gizmo)
        gizmo.multiplier = INTERVAL/CAT_GetObjectMass(gizmo)
        if gizmo.multiplier == math.huge then
            error("Attempting to apply force to object for which no mass was assigned.")
        end
    end

    local function AccelerateGizmo3D(gizmo)
        if gizmo.Fx == 0 and gizmo.Fy == 0 and gizmo.Fz == 0 then
            ALICE_PairPause()
            return
        end
        if gizmo.anchor then
            if type(gizmo.anchor) == "table" then
                gizmo.anchor.vx =  gizmo.anchor.vx + gizmo.Fx*gizmo.multiplier
                gizmo.anchor.vy =  gizmo.anchor.vy + gizmo.Fy*gizmo.multiplier
                gizmo.anchor.vz =  gizmo.anchor.vz + gizmo.Fz*gizmo.multiplier
            else
                CAT_Knockback(gizmo.anchor, gizmo.Fx*gizmo.multiplier, gizmo.Fy*gizmo.multiplier, gizmo.Fz*gizmo.multiplier)
            end
        else
            gizmo.vx = gizmo.vx + gizmo.Fx*gizmo.multiplier
            gizmo.vy = gizmo.vy + gizmo.Fy*gizmo.multiplier
            gizmo.vz = gizmo.vz + gizmo.Fz*gizmo.multiplier
        end
        gizmo.Fx = gizmo.Fx + gizmo.Fxdt*INTERVAL
        gizmo.Fy = gizmo.Fy + gizmo.Fydt*INTERVAL
        gizmo.Fz = gizmo.Fz + gizmo.Fzdt*INTERVAL
    end

    local function ResumForceCallback3D(source, target, forceTable)
        local data = ALICE_PairLoadData(forceMatrix)
        forceTable.Fx = forceTable.Fx + data.Fx
        forceTable.Fy = forceTable.Fy + data.Fy
        forceTable.Fz = forceTable.Fz + data.Fz
        forceTable.Fxdt = forceTable.Fxdt + data.Fxdt
        forceTable.Fydt = forceTable.Fydt + data.Fydt
        forceTable.Fzdt = forceTable.Fzdt + data.Fzdt
    end

    local function ResumForceGizmo3D(gizmo)
        gizmo.Fx, gizmo.Fy, gizmo.Fz = 0, 0, 0
        gizmo.Fxdt, gizmo.Fydt, gizmo.Fzdt = 0, 0, 0
        ALICE_ForAllPairsDo(ResumForceCallback3D, gizmo, Force3D, false, nil, gizmo)
        if gizmo.Fx == 0 and gizmo.Fy == 0 and gizmo.Fz == 0 then
            ALICE_PairPause()
        end
        return 5.0
    end

    local function ClearUnitForce(unit, __, __)
        unitForce[unit] = nil
    end

    local function InitAccelerateUnit3D(unit)
        local data = ALICE_PairLoadData(forceMatrix)
        data.multiplier = INTERVAL/CAT_GetObjectMass(unit)
        if data.multiplier == math.huge then
            error("Attempting to apply force to unit with no mass.")
        end
    end

    local function AccelerateUnit3D(unit)
        local data = ALICE_PairLoadData(forceMatrix)
        local forceTable = unitForce[unit]
        if not forceTable or (forceTable.Fx == 0 and forceTable.Fy == 0 and forceTable.Fz == 0) then
            ALICE_PairPause()
            return
        end
        CAT_Knockback(unit, forceTable.Fx*data.multiplier, forceTable.Fy*data.multiplier, forceTable.Fz*data.multiplier)
        forceTable.Fx = forceTable.Fx + forceTable.Fxdt*INTERVAL
        forceTable.Fy = forceTable.Fy + forceTable.Fydt*INTERVAL
        forceTable.Fz = forceTable.Fz + forceTable.Fzdt*INTERVAL
    end

    local function ResumForceUnit3D(unit)
        local forceTable = unitForce[unit]
        if forceTable == nil then
            ALICE_PairPause()
            return 5.0
        end
        forceTable.Fx, forceTable.Fy, forceTable.Fz = 0, 0, 0
        forceTable.Fxdt, forceTable.Fydt, forceTable.Fzdt = 0, 0, 0
        ALICE_ForAllPairsDo(ResumForceCallback3D, unit, Force3D, false, nil, forceTable)
        if forceTable.Fx == 0 and forceTable.Fy == 0 then
            ALICE_PairPause()
        end
        return 5.0
    end

    --===========================================================================================================================================================

    local function ClearForce3D(source, target)
        local data = ALICE_PairLoadData(forceMatrix)
        local FxOld = data.Fx + data.Fxdt*(ALICE_TimeElapsed - data.lastUpdate)
        local FyOld = data.Fy + data.Fydt*(ALICE_TimeElapsed - data.lastUpdate)
        local FzOld = data.Fz + data.Fzdt*(ALICE_TimeElapsed - data.lastUpdate)
        local FxdtOld = data.Fxdt
        local FydtOld = data.Fydt
        local FzdtOld = data.Fzdt

        local forceTable
        if data.targetIsGizmo then
            forceTable = target
        else
            forceTable = unitForce[target]
        end
        
        if forceTable then
            forceTable.Fx = forceTable.Fx - FxOld
            forceTable.Fy = forceTable.Fy - FyOld
            forceTable.Fz = forceTable.Fz - FzOld
            forceTable.Fxdt = forceTable.Fxdt - FxdtOld
            forceTable.Fydt = forceTable.Fydt - FydtOld
            forceTable.Fzdt = forceTable.Fzdt - FzdtOld
        end
    end

    local function InitForce3D(source, target)
        local data = ALICE_PairLoadData(forceMatrix)
        data.lastUpdate = ALICE_TimeElapsed
        data.targetIsGizmo = type(target) == "table"
        if data.targetIsGizmo then
            data.typeMultiplier = 1
            if target.Fx == nil then
                ALICE_AddSelfInteraction(target, AccelerateGizmo3D)
                ALICE_AddSelfInteraction(target, ResumForceGizmo3D)
                target.Fx, target.Fy, target.Fz = 0, 0, 0
                target.Fxdt, target.Fydt, target.Fzdt = 0, 0, 0
            end
        elseif HandleType[target] == "unit" then
            data.typeMultiplier = FORCE_UNIT_MULTIPLIER
            if unitForce[target] == nil then
                unitForce[target] = {}
                local forceTable = unitForce[target]
                ALICE_AddSelfInteraction(target, AccelerateUnit3D)
                ALICE_AddSelfInteraction(target, ResumForceUnit3D)
                forceTable.Fx, forceTable.Fy, forceTable.Fz = 0, 0, 0
                forceTable.Fxdt, forceTable.Fydt, forceTable.Fzdt = 0, 0, 0
            end
        end
    end

    Force3D = function(source, target)
        local data = ALICE_PairLoadData(forceMatrix)

        if data.doUserInit then
            if source.initForceFunc then
                source.initForceFunc(source, target)
            end
            data.doUserInit = false
        end

        local xf, yf, zf, xo, yo, zo = ALICE_PairGetCoordinates3D()
        local vxf, vyf, vzf = CAT_GetObjectVelocity3D(source)
        local vxo, vyo, vzo = CAT_GetObjectVelocity3D(target)
        local dx, dy, dz = xf - xo, yf - yo, zf - zo
        local dvx, dvy, dvz = vxf - vxo, vyf - vyo, vzf - vzo
        local dist = sqrt(dx*dx + dy*dy + dz*dz)

        local forceX, forceY, forceZ = source.forceFunc(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)

        local interval = (source.intervalFunc(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz) / INTERVAL + 1)*INTERVAL
        if interval > ALICE_Config.MAX_INTERVAL then
            interval = ALICE_Config.MAX_INTERVAL
        end

        --Force at next step.
        local dxNS = dx + 0.5*dvx*interval
        local dyNS = dy + 0.5*dvy*interval
        local dzNS = dz + 0.5*dvz*interval
        local distNS = sqrt(dxNS*dxNS + dyNS*dyNS + dzNS*dzNS)

        local forceXNS, forceYNS, forceZNS = source.forceFunc(source, target, data, distNS, dxNS, dyNS, dzNS, dvx, dvy, dvz)

        local forceXdt = 2*(forceXNS - forceX)/interval
        local forceYdt = 2*(forceYNS - forceY)/interval
        local forceZdt = 2*(forceZNS - forceZ)/interval

        local lastInterval = (ALICE_TimeElapsed - data.lastUpdate)

        local forceTable
        if data.targetIsGizmo then
            forceTable = target
        else
            forceTable = unitForce[target]
        end

        local FxOld = data.Fx + data.Fxdt*lastInterval
        local FyOld = data.Fy + data.Fydt*lastInterval
        local FzOld = data.Fz + data.Fzdt*lastInterval

        if forceTable.Fx == 0 and forceTable.Fy == 0 and forceTable.Fz == 0 and (forceX ~= 0 or forceY ~= 0 or forceZ ~= 0) then
            ALICE_Unpause(target)
        end

        forceTable.Fxdt = forceTable.Fxdt + forceXdt - data.Fxdt
        forceTable.Fydt = forceTable.Fydt + forceYdt - data.Fydt
        forceTable.Fzdt = forceTable.Fzdt + forceZdt - data.Fzdt

        forceTable.Fx = forceTable.Fx + forceX - FxOld
        forceTable.Fy = forceTable.Fy + forceY - FyOld
        forceTable.Fz = forceTable.Fz + forceZ - FzOld

        data.Fx, data.Fy, data.Fz = forceX, forceY, forceZ
        data.Fxdt, data.Fydt, data.Fzdt = forceXdt, forceYdt, forceZdt

        data.lastUpdate = ALICE_TimeElapsed
        return interval
    end

    --===========================================================================================================================================================
    --Gravity
    --===========================================================================================================================================================

    local function InitGravity(source, target)
        local data, __ = ALICE_PairLoadData(forceMatrix)
        local massSource = CAT_GetObjectMass(source)
        local massTarget = CAT_GetObjectMass(target)
        data.strength = massSource*massTarget*(GRAVITY_STRENGTH*1.0001)*data.typeMultiplier --1.0001 to convert to float to avoid integer overflow
        data.minDistance = source.minDistance or DEFAULT_GRAVITY_MIN_DISTANCE
        data.intervalFactor = 1/(GRAVITY_ACCURACY*data.strength/massTarget)
        if data.strength == 0 then
            ALICE_PairDisable()
        end
    end

    local function GravityForce3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        if data.minDistance > dist then
            dist = data.minDistance
        end
        local factor = data.strength/dist^3
        return dx*factor, dy*factor, dz*factor
    end

    local function GravityInterval3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        --Increased update frequency when objects are moving towards each other.
        local vdotd = -(dvx*dx + dvy*dy + dvz*dz)
        if vdotd < 0 then
            vdotd = 0
        end
        return dist*dist*data.intervalFactor/(1 + vdotd*data.intervalFactor)
    end

    --===========================================================================================================================================================
    --Pressure Force
    --===========================================================================================================================================================

    local function InitPressureForce(source, target)
        local data, __ = ALICE_PairLoadData(forceMatrix)
        data.strengthFactor = GetObjectCrossSection(target)*data.typeMultiplier
        data.intervalFactor = CAT_GetObjectMass(target)/(PRESSURE_ACCURACY*data.strengthFactor)
        if data.strengthFactor*source.pressureStrength == 0 then
            ALICE_PairDisable()
        end
    end

    local function PressureForce3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        if dist > source.pressureMaxRange then
            return 0, 0, 0
        end
        local factor = -source.pressureStrength*data.strengthFactor*(source.pressureMaxRange - dist)/(source.pressureMaxRange*dist)
        return dx*factor, dy*factor, dz*factor
    end

    local function PressureInterval3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        --Increased update frequency when objects are moving towards each other.
        local vdivd = -(dvx*dx + dvy*dy + dvz*dz)/dist^2
        if vdivd < 0 then
            vdivd = 0
        end
        --Arbitrary numbers
        local interval = (0.15 + 0.85*(dist/source.pressureMaxRange))*data.intervalFactor/source.pressureStrength
        return interval/(1 + vdivd*interval)
    end

    --===========================================================================================================================================================
    --Windfield Force
    --===========================================================================================================================================================

    local function InitWindField(source, target)
        local data, __ = ALICE_PairLoadData(forceMatrix)
        data.strengthFactor = GetObjectCrossSection(target)*data.typeMultiplier/1000
        data.intervalFactor = CAT_GetObjectMass(target)/(WIND_FIELD_ACCURACY*data.strengthFactor)
        data.vx = source.windFieldSpeed*cos(source.windFieldAnglePhi)*cos(source.windFieldAngleTheta or 0)
        data.vy = source.windFieldSpeed*sin(source.windFieldAnglePhi)*cos(source.windFieldAngleTheta or 0)
        data.vz = source.windFieldSpeed*sin(source.windFieldAngleTheta or 0)

        if data.strengthFactor*source.windFieldDensity == 0 then
            ALICE_PairDisable()
        end
    end

    local function WindForce3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        if dist > source.windFieldMaxRange then
            return 0, 0, 0
        end
        local dvxWind = dvx + data.vx
        local dvyWind = dvy + data.vy
        local dvzWind = dvz + data.vz
        local dvWindTotal = sqrt(dvxWind*dvxWind + dvyWind*dvyWind + dvzWind*dvzWind)
        local factor = dvWindTotal*source.windFieldDensity*data.strengthFactor*(source.windFieldMaxRange - dist)/(source.windFieldMaxRange*dist)
        return dvxWind*factor, dvyWind*factor, dvzWind*factor
    end

    local function WindFieldInterval3D(source, target, data, dist, dx, dy, dz, dvx, dvy, dvz)
        --Increased update frequency when objects are moving towards each other.
        local vdivd = -(dvx*dx + dvy*dy + dvz*dz)/dist^2
        if vdivd < 0 then
            vdivd = 0
        end
        local interval = (0.15 + 0.85*(dist/source.windFieldMaxRange))*data.intervalFactor/source.windFieldDensity
        return interval/(1 + vdivd*interval)
    end

    --===========================================================================================================================================================
    --API
    --===========================================================================================================================================================                               

    ---Add a custom force to the gizmo.
    ---@param class table
    ---@param interactsWith table | string
    ---@param initFunc function
    ---@param forceFunc function
    ---@param intervalFunc function
    function CAT_AddForce3D(class, interactsWith, initFunc, forceFunc, intervalFunc)
        class.initForceFunc = initFunc
        class.forceFunc = forceFunc
        class.intervalFunc = intervalFunc

        if class.interactions == nil then
            class.interactions = {}
        end

        if type(interactsWith) == "table" then
            for __, id in pairs(interactsWith) do
                class.interactions[id] = Force3D
            end
        else
            class.interactions[interactsWith] = Force3D
        end
    end

    ---A long-range attraction that gets stronger as objects move closer together. Uses the mass field to determine the force strength.
    ---@param class table
    ---@param interactsWith table | string
    function CAT_AddGravity3D(class, interactsWith)
        CAT_AddForce3D(class, interactsWith, InitGravity, GravityForce3D, GravityInterval3D)
        class.hasInfiniteRange = true
    end

    ---Pushes nearby objects away. The strength is determined by the .pressureStrength field. The coupling strength with objects is based on the .collisionRadius in the case of gizmos, and the collision radius and height in the case of units. The field .pressureMaxRange determines the maximum range of the data. The force will drop gradually until it hits zero at that range.
    ---@param class table
    ---@param interactsWith table | string
    function CAT_AddPressure3D(class, interactsWith)
        CAT_AddForce3D(class, interactsWith, InitPressureForce, PressureForce3D, PressureInterval3D)
        class.radius = math.max(class.radius or ALICE_Config.DEFAULT_OBJECT_RADIUS, class.pressureMaxRange)
    end

    ---A force that pushes objects into a certain direction. The .windFieldDensity field determines the strength of the wind field. The .windFieldSpeed field determines the speed of the wind, the field .windFieldAnglePhi the horizontal direction of the wind, and the field .windFieldAngleTheta the vertical direction. The .windFieldMaxRange field determines the radius of the field. The wind density will drop gradually until it hits zero at that range.
    ---@param class table
    ---@param interactsWith table | string
    function CAT_AddWindField3D(class, interactsWith)
        CAT_AddForce3D(class, interactsWith, InitWindField, WindForce3D, WindFieldInterval3D)
        class.radius = math.max(class.radius or ALICE_Config.DEFAULT_OBJECT_RADIUS, class.windFieldMaxRange)
    end

    --===========================================================================================================================================================

    local function InitForcesCAT()
        Require "ALICE"
        Require "CAT_Data"
        Require "CAT_Units"
        Require "CAT_Interfaces"
        INTERVAL = ALICE_Config.MIN_INTERVAL
        ALICE_FuncSetInit(AccelerateGizmo3D, InitAccelerateGizmo3D)
        ALICE_FuncSetInit(AccelerateUnit3D, InitAccelerateUnit3D)
        ALICE_FuncSetInit(Force3D, InitForce3D)
        ALICE_FuncDistribute(ResumForceGizmo3D, 5.0)
        ALICE_FuncDistribute(ResumForceUnit3D, 5.0)
        ALICE_FuncSetOnBreak(Force3D, ClearForce3D)
        ALICE_FuncSetOnDestroy(AccelerateUnit3D, ClearUnitForce)
        ALICE_FuncSetName(AccelerateGizmo3D, "AccelerateGizmo3D")
        ALICE_FuncSetName(ResumForceGizmo3D, "ResumForceGizmo3D")
        ALICE_FuncSetName(AccelerateUnit3D, "AccelerateUnit3D")
        ALICE_FuncSetName(ResumForceUnit3D, "ResumForceUnit3D")
        ALICE_FuncSetName(Force3D, "Force3D")
    end

    OnInit.final("CAT_Forces3D", InitForcesCAT)

end