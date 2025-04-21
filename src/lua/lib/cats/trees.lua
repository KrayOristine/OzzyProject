if Debug then Debug.beginFile "CAT Trees" end
do
    --[[
    =============================================================================================================================================================
                                                                Complementary ALICE Template
                                                                        by Antares

                                Requires:
                                ALICE                               https://www.hiveworkshop.com/threads/a-l-i-c-e-interaction-engine.353126/

    =============================================================================================================================================================
                                                                         T R E E S
    =============================================================================================================================================================

    This template detects whether a destructable is a tree and adds the tree identifier. Make sure the TREE_HARVESTER_FOUR_CC and TREE_HARVEST_ABILITY_FOUR_CC
    variables are set correctly so that the dummy can attempt to harvest trees.

    =============================================================================================================================================================
    ]]

    local TREE_HARVESTER_FOUR_CC            = "hpea"
    local TREE_HARVEST_ABILITY_FOUR_CC      = "Ahrl"

    --===========================================================================================================================================================

    local treeHarvester
    local orderIdHarvest
    local orderIdStop

    OnInit.global("CAT_Trees", function()
        treeHarvester = CreateUnit(Player(PLAYER_NEUTRAL_PASSIVE), FourCC(TREE_HARVESTER_FOUR_CC), 0, 0, 0)
        UnitAddAbility(treeHarvester, FourCC(TREE_HARVEST_ABILITY_FOUR_CC))
        ShowUnit(treeHarvester, false)
        orderIdHarvest = OrderId("harvest")
        orderIdStop = OrderId("stop")

        ALICE_OnCreationAddIdentifier("destructable", function(destructable)
            IssueTargetDestructableOrder(treeHarvester, "harvest", destructable)
            if GetUnitCurrentOrder(treeHarvester) == orderIdHarvest then
                IssueImmediateOrderById(treeHarvester, orderIdStop)
                return "tree"
            else
                IssueImmediateOrderById(treeHarvester, orderIdStop)
                return nil
            end
        end)
    end)
end
if Debug then Debug.endFile() end