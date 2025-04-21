if Debug then Debug.beginFile "CAT Rects" end
do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                Requires:
                                ALICE                               https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/

    =============================================================================================================================================================
                                                                          R E C T S
    =============================================================================================================================================================

    This template contains function to help with the creation of actors representing rects, which can be built from the native rect type or from tables with the
    minX, minY, maxX, and maxY fields.

    =============================================================================================================================================================
                                                            L I S T   O F   F U N C T I O N S
    =============================================================================================================================================================

    CAT_CreateFromRect(rect, flags) Creates a stationary actor with the extents of the specified rect. Rect can be a native rect type or a table with the minX,
                                    minY, maxX, and maxY fields. All fields added with the fields parameter are passed into ALICE, including identifier and
                                    interactions. This parameter can be omitted and all fields directly put into the rect if a table is used to represent it. This
                                    function returns the table that it created for the host.

    CAT_RectCheck                   An interaction function. Checks if the object is inside the rect, invokes the .onEnter(object, rect) function when it enters,
                                    the .onPeriodic(object, rect) function while it is inside the rect, and the .onLeave(object, rect) function when it leaves the
                                    rect. The .interval field determines the interaction interval. The rect must be the female actor for this interaction function.

    CAT_IsPointInRect(x, y, rect)
    CAT_DoRectsIntersect(rect1, rect2)
    CAT_IsRectInRect(smallerRect, largerRect)

    =============================================================================================================================================================
    ]]

    ---Creates a stationary actor with the extents of the specified rect. All fields added with the fields parameter are passed into ALICE, including identifier and interactions. This parameter can be omitted and all fields directly put into the rect if a table is used to represent it. This function returns the table that it created for the host.
    ---@param rect rect | table
    ---@param fields? table
    ---@return table
    function CAT_CreateFromRect(rect, fields)
        local self

        if IsHandle[rect] then
            self = {
                x = GetRectCenterX(rect),
                y = GetRectCenterY(rect),
                minX = GetRectMinX(rect),
                minY = GetRectMinY(rect),
                maxX = GetRectMaxX(rect),
                maxY = GetRectMaxY(rect),
            }

            self.width = self.maxX - self.minX
            self.height = self.maxY - self.minY
        else
            self = rect
            self.x = (rect.maxX + rect.minX)/2
            self.y = (rect.maxY + rect.minY)/2
            self.width = rect.maxX - rect.minX
            self.height = rect.maxY - rect.minY
        end

        if fields then
            for key, value in pairs(fields) do
                self[key] = value
            end
        end

        self.identifier = self.identifier or "rect"

        self.isStationary = true

        ALICE_Create(self)

        return self
    end

    local function RectOnLeave(object, rect)
        if rect.onLeave then
            rect.onLeave(object, rect)
        end
    end

    function CAT_RectCheck(object, rect)
        local x, y = ALICE_GetCoordinates2D(object)
        if CAT_IsPointInRect(x, y, rect) then
            if ALICE_PairIsFirstContact() then
                if rect.onEnter then
                    rect.onEnter(object, rect)
                end
            end
            if rect.onPeriodic then
                rect.onPeriodic(object, rect)
            end
        else
            ALICE_PairReset()
        end
        return rect.interval or 0
    end

    ---@param x number
    ---@param y number
    ---@param rect table
    function CAT_IsPointInRect(x, y, rect)
        return x > rect.minX and x < rect.maxX and y > rect.minY and y < rect.maxY
    end

    ---@param rect1 table
    ---@param rect2 table
    function CAT_DoRectsIntersect(rect1, rect2)
        return rect1.maxX > rect2.minX and rect1.minX < rect2.maxX and rect1.maxY > rect2.minY and rect1.minY < rect2.maxY
    end

    ---@param smallerRect table
    ---@param largerRect table
    function CAT_IsRectInRect(smallerRect, largerRect)
        return smallerRect.minX >= largerRect.minX and smallerRect.maxX <= largerRect.maxX and smallerRect.minY >= largerRect.minY and smallerRect.maxY <= largerRect.maxY
    end

    local function InitRectsCAT()
        ALICE_FuncSetOnReset(CAT_RectCheck, RectOnLeave)
    end

    OnInit.global("CAT_Rects", InitRectsCAT)
end