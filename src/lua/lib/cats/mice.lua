if Debug then Debug.beginFile "CAT Mice" end
do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                Requires:
                                ALICE                               https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/
                                PrecomputedHeightMap (optional)     https://www.hiveworkshop.com/threads/precomputed-synchronized-terrain-height-map.353477/

    =============================================================================================================================================================
                                                                          M I C E
    =============================================================================================================================================================

    This template creates an actor for each player's mouse. The mouse gets the identifier "mouse".

    =============================================================================================================================================================
    ]]

    CAT_PlayerMouse                     = {}        ---@type Mouse[]
    local moveableLoc                   = nil       ---@type location
    local GetTerrainZ                   = nil       ---@type function

    local function OnMoveMouse()
        local whichMouse = CAT_PlayerMouse[GetTriggerPlayer()]
        local x, y = BlzGetTriggerPlayerMouseX(), BlzGetTriggerPlayerMouseY()
        if x ~= 0 or y ~= 0 then
            whichMouse.x = x
            whichMouse.y = y
            whichMouse.z = GetTerrainZ(x, y)
        end
    end

    local function OnLeave()
        local P = GetTriggerPlayer()
        ALICE_Kill(CAT_PlayerMouse[P])
        CAT_PlayerMouse[P] = nil
    end

    local function InitMiceCAT()
        Require "ALICE"

        ---@class Mouse
        local Mouse = {
            x = nil,
            y = nil,
            z = nil,
            owner = nil,
            identifier = "mouse",
            interactions = nil,
            cellCheckInterval = ALICE_Config.MIN_INTERVAL,
            isUnselectable = true
        }

        Mouse.__index = Mouse

        local moveTrig = CreateTrigger()
        local leaveTrig = CreateTrigger()
        local newMouse

        for i = 0, bj_MAX_PLAYER_SLOTS do
            local P = Player(i)
            if GetPlayerSlotState(P) == PLAYER_SLOT_STATE_PLAYING and GetPlayerController(P) == MAP_CONTROL_USER then
                TriggerRegisterPlayerEvent(moveTrig, P, EVENT_PLAYER_MOUSE_MOVE)

                newMouse = {}
                setmetatable(newMouse, Mouse)
                newMouse.x, newMouse.y, newMouse.z = 0, 0, 0
                newMouse.owner = P
                ALICE_Create(newMouse)
                CAT_PlayerMouse[P] = newMouse

                TriggerRegisterPlayerEvent(leaveTrig, P, EVENT_PLAYER_LEAVE)

            end
        end

        TriggerAddAction(moveTrig, OnMoveMouse)
        TriggerAddAction(leaveTrig, OnLeave)

        local precomputedHeightMap = Require.optionally "PrecomputedHeightMap"

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

    OnInit.final("CAT_Mice", InitMiceCAT)
end