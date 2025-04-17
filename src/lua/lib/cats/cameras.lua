if Debug then Debug.beginFile "CAT Camera" end
do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                Requires:
                                ALICE                               https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/
                                PrecomputedHeightMap (optional)     https://www.hiveworkshop.com/threads/precomputed-synchronized-terrain-height-map.353477/

    =============================================================================================================================================================
                                                                       C A M E R A S
    =============================================================================================================================================================

    This template creates an actor for each player's camera, which can be used for visibility detection. The camera gets the identifier "camera".
    
    The camera actor is fully asynchronous and must not engage in any interactions that require synchronicity (see under Tutorial & Documentation -> Advanced ->
    Asynchronous Code).

    The following fields can be read:
    CAT_Camera.x                The camera's target position.
    CAT_Camera.y
    CAT_Camera.z

    CAT_Camera.eyeX             The camera's eye position.
    CAT_Camera.eyeY
    CAT_Camera.eyeZ

    CAT_Camera.angleOfAttack    The camera's angle of attack.
    CAT_Camera.rotation         The camera's rotation.

    =============================================================================================================================================================
                                                                        C O N F I G
    =============================================================================================================================================================
    ]]

    local MAX_CAMERA_RADIUS                     = 3000          ---@type number
    --Caps the maximum radius of the camera field when the camera is at a low angle.

    --===========================================================================================================================================================

    CAT_Camera                                  = nil           ---@type Camera

    --InteractionFunc
    function UpdateCameraParameters(camera)
        camera.angleOfAttack = GetCameraField(CAMERA_FIELD_ANGLE_OF_ATTACK)
        camera.rotation = GetCameraField(CAMERA_FIELD_ROTATION)

        camera.eyeX = GetCameraEyePositionX()
        camera.eyeY = GetCameraEyePositionY()
        camera.eyeZ = GetCameraEyePositionZ()

        camera.x = GetCameraTargetPositionX()
        camera.y = GetCameraTargetPositionY()
        camera.z = GetCameraTargetPositionZ()

        --Approximation of camera viewing distance.
        local newCameraRadius = math.min(MAX_CAMERA_RADIUS, 0.5*GetCameraField(CAMERA_FIELD_TARGET_DISTANCE)/(5.88 - camera.angleOfAttack))
        if math.abs(ALICE_GetFlag(camera, "radius") - newCameraRadius) > 100 then
            ALICE_SetFlag(camera, "radius", newCameraRadius)
        end
    end

    ---@class Camera
    local Camera = {
        eyeX = nil,
        eyeY = nil,
        eyeZ = nil,
        angleOfAttack = nil,
        rotation = nil,
        --ALICE
        x = nil,
        y = nil,
        z = nil,
        identifier = nil,
        interactions = nil,
        cellCheckInterval = nil,
    }

    Camera.__index = Camera

    OnInit.final("CAT_Camera", function()
        Require "ALICE"

        CAT_Camera = {
            eyeX = GetCameraEyePositionX(),
            eyeY = GetCameraEyePositionY(),
            eyeZ = GetCameraEyePositionZ(),
            angleOfAttack = 0,
            rotation = 0,
            --ALICE
            x = GetCameraTargetPositionX(),
            y = GetCameraTargetPositionY(),
            z = GetCameraTargetPositionZ(),
            identifier = "camera",
            interactions = {
                self = UpdateCameraParameters,
            },
            cellCheckInterval = ALICE_Config.MIN_INTERVAL,
        }

        ALICE_Create(CAT_Camera)
    end)
end