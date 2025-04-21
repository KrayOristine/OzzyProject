--[[
    ====================================================================================================================================================================
                                                                        B A S I C    A P I
    ====================================================================================================================================================================

                                    • All object functions use keyword as an optional parameter. This parameter is only needed if
                                      you create multiple actors for one host. It searches for the actor that has that keyword in
                                      its identifier.
                                    • All functions starting with ALICE_Pair are only accessible within user-defined functions
                                      called by ALICE.
                                    • All functions starting with ALICE_Func can be called from the Lua root, as long as ALICE is
                                      above.
                                    • All functions other than debug functions are async-safe as long as the code executed with
                                      them is also async-safe.

    -----CORE API------
    ALICE_Create(host, identifier, interactions, flags)                             Create an actor for the object host and add it to the cycle. If the host is a table and is
                                                                                    provided as the only input argument, all other arguments will be retrieved directly from
                                                                                    that table.
    ALICE_Destroy(whichObject)                                                      Destroy the actor of the specified object.
    ALICE_Kill(whichObject)                                                         Calls the appropriate function to destroy the object, then destroys all actors attached to
                                                                                    it. If the object is a table, the object:destroy() method will be called. If no destroy
                                                                                    function exists, it will try to destroy the table's visual, which can be an effect, a unit,
                                                                                    or an image.


    -----MATH API-----
    ALICE_PairGetDistance2D()                                                       Returns the distance between the objects of the pair currently being evaluated in two
                                                                                    dimensions.
    ALICE_PairGetDistance3D()                                                       The same, but takes z into account.
    ALICE_PairGetAngle2D()                                                          Returns the angle from object A to object B of the pair currently being evaluated.
    ALICE_PairGetAngle3D()                                                          Returns the horizontal and vertical angles from object A to object B.
    ALICE_PairGetCoordinates2D()                                                    Returns the coordinates of the objects in the pair currently being evaluated in the order
                                                                                    x1, y1, x2, y2.
    ALICE_PairGetCoordinates3D()                                                    Returns the coordinates of the objects in the pair currently being evaluated in the order
                                                                                    x1, y1, z1, x2, y2, z2.
    ALICE_GetCoordinates2D(whichObject)                                             Returns the coordinates x, y of an object.
    ALICE_GetCoordinates3D(whichObject)                                             Returns the coordinates x, y, z of an object.


                                    • Enum functions return a table with all objects that have the specified identifier. Identifier
                                      can be a string or a table. If it is a table, the last entry must be MATCHING_TYPE_ANY or
                                      MATCHING_TYPE_ALL. Optional condition function to further filter out objects with additional
                                      arguments passed to enum function being passed to condition function. For example, this will
                                      return all flying units that are owned by red:

                                      function IsOwnedByPlayer(object, whichPlayer)
                                        return GetOwningPlayer(object) == whichPlayer
                                      end
                                      ALICE_EnumObjects({"unit", "flying", MATCHING_TYPE_ALL}, IsOwnedByPlayer, Player(0))

    -----ENUM API-----
    ALICE_EnumObjects(identifier, condition)
    ALICE_EnumObjectsInRange(x, y, range, identifier, condition)
    ALICE_EnumObjectsInRect(minx, miny, maxx, maxy, identifier, condition)
    ALICE_EnumObjectsInLineSegment(x1, y1, x2, y2, halfWidth, condition)
    ALICE_ForAllObjectsDo(action, identifier, condition)
    ALICE_ForAllObjectsInRangeDo(action, x, y, range, identifier, condition)
    ALICE_ForAllObjectsInRectDo(action, minx, miny, maxx, maxy, identifier, condition)
    ALICE_ForAllObjectsInLineSegmentDo(action, x1, y1, x2, y2, halfWidth, condition)
    ALICE_GetClosestObject(x, y, identifier, cutOffDistance, condition)


                                    • The Callback API allows for convenient creation of delayed callbacks of any kind, with the
                                      added benefit that callbacks will be delayed if ALICE is paused or slowed down. This allows
                                      the pausing of the entire game for debugging or other purposes.

    -----CALLBACK API-----
    ALICE_CallDelayed(callback, delay)                                              Invokes the callback function after the specified delay, passing additional arguments into
                                                                                    the callback function.
    ALICE_PairCallDelayed(callback, delay)                                          Invokes the callback function after the specified delay, passing the hosts of the current
                                                                                    pair as arguments. A third parameter is passed into the callback, specifying whether you
                                                                                    have access to the ALICE_Pair functions. You will not if the current pair has been
                                                                                    destroyed after the callback was queued up.
    ALICE_CallPeriodic(callback, delay)                                             Periodically invokes the callback function. Optional delay parameter to delay the first
                                                                                    execution. Additional arguments are passed into the callback function. The return value of
                                                                                    the callback function specifies the interval until next execution.
    ALICE_CallRepeated(callback, howOften, delay)                                   Periodically invokes the callback function up to howOften times. Optional delay parameter to
                                                                                    delay the first execution. The arguments passed into the callback function are the current
                                                                                    iteration, followed by any additional arguments. The return value of the callback function
                                                                                    specifies the interval until next execution.
    ALICE_DisableCallback(callback)                                                 Disables a callback returned by ALICE_CallDelayed, ALICE_CallPeriodic, or ALICE_CallRepeated.
                                                                                    If called from within a periodic callback function itself, the parameter can be omitted.
    ALICE_PauseCallback(callback, enable)                                           Pauses or unpauses a callback returned by ALICE_CallDelayed, ALICE_CallPeriodic, or
                                                                                    ALICE_CallRepeated. If a periodic callback is unpaused this way, the next iteration will be
                                                                                    executed immediately. Otherwise, the remaining time will be waited. If called from within a
                                                                                    periodic callback function itself, the callback parameter can be omitted.


    ====================================================================================================================================================================
                                                                    A D V A N C E D   A P I
    ====================================================================================================================================================================


                                    • Type "downtherabbithole" in-game to enable debug mode. In debug mode, you can click near an
                                      object to visualize its actor, its interactions, and see all attributes of that actor. The
                                      actor tooltips require CustomTooltip.fdf and CustomTooltip.toc


    -----DEBUG API------
    ALICE_Debug()                                                                   Enable or disable debug mode.
    ALICE_ListGlobals()                                                             List all global actors.
    ALICE_Select(whichActor)                                                        Select the actor of the specified object if qualifier is an object, the first actor
                                                                                    encountered with the specified identifier if qualifier is a string, or the actor with the
                                                                                    specified unique number if qualifier is an integer. Requires debug mode.
    ALICE_PairIsSelected()                                                          Returns true if one of the actors in the current pair is selected.
    ALICE_PairVisualize(duration)                                                   Create a lightning effect between the objects of the current pair. Useful to check
                                                                                    if objects are interacting as intended. Optional lightning type parameter.
    ALICE_Halt(pauseGame)                                                           Halt the entire cycle. Optional pauseGame parameter to pause all units on the map.
    ALICE_Resume()                                                                  Resume the entire cycle.
    ALICE_NextStep()                                                                Go to the next step in the cycle.
    ALICE_Statistics()                                                              Prints out statistics showing which functions are occupying which percentage of the
                                                                                    calculations.
    ALICE_Benchmark()                                                               Continuously prints the cycle evaluation time and the number of actors, pair interactions,
                                                                                    and cell checks until disabled.
    ALICE_TrackVariables(whichVar)                                                  Prints the values of _G.whichVar[host], if _G.whichVar exists, as well as host.whichVar,
                                                                                    if the host is a table, in the actor tooltips in debug mode. You can list multiple
                                                                                    variables.
    ALICE_GetPairState(objectA, objectB)                                            Attempts to find the pair of the specified objects and prints the state of that pair.
                                                                                    Pass integers to access actors by unique numbers. Possible return values are "active",
                                                                                    "paused", "outofrange", "disabled", and "uninitialized".
    ALICE_VisualizeAllCells()                                                       Create lightning effects around all cells.
    ALICE_VisualizeAllActors()                                                      Creates arrows above all non-global actors.
    ALICE_FuncRequireFields(whichFunc, requireMale, requireFemale, whichFields)     Display warnings in the actor tooltips and crash messages of actors interacting with the
                                                                                    specified function or list of functions if the listed fields are not present in the host
                                                                                    table. requiredOnMale and requiredOnFemale control whether the field is expected to exist
                                                                                    in the host table of the initiating (male) or receiving (female) actor of the interaction.
                                                                                    Strings or string sequences specify fields that always need to be present. A table entry
                                                                                    {optionalField = requiredField} denotes that requiredField must be present only if
                                                                                    optionalField is also present in the table. requiredField can be a string or string
                                                                                    sequence.
    ALICE_FuncSetName(whichFunc, name)                                              Sets the name of a function when displayed in debug mode.


    -----PAIR UTILITY API-----
    ALICE_PairIsFriend()                                                            Returns true if the owners of the objects in the current pair are allies.
    ALICE_PairIsEnemy()                                                             Returns true if the owners of the objects in the current pair are enemies.
    ALICE_PairDisable()                                                             Disables interactions between the actors of the current pair after this one.
    ALICE_PairPreciseInterval(number)                                               Modifies the return value of an interactionFunc so that, on average, the interval is the
                                                                                    specified value, even if it isn't an integer multiple of the minimum interval.
    ALICE_PairIsUnoccupied()                                                        Returns false if this function was invoked for another pair that has the same
                                                                                    interactionFunc and the same receiving actor. Otherwise, returns true. In other words,
                                                                                    only one pair can execute the code within an ALICE_PairIsUnoccupied() block. Useful for
                                                                                    creating non-stacking effects.
    ALICE_PairCooldown(duration)                                                    Returns the remaining cooldown for this pair, then invokes a cooldown of the specified
                                                                                    duration. Optional cooldownType parameter to create and differentiate between multiple
                                                                                    separate cooldowns.
    ALICE_PairLoadData()                                                            Returns a table unique to the pair currently being evaluated, which can be used to read
                                                                                    and write data. Optional argument to set a metatable for the data table.
    ALICE_PairIsFirstContact()                                                      Returns true if this is the first time this function was invoked for the current pair,
                                                                                    otherwise false. Resets when the objects in the pair leave the interaction range.
    ALICE_FuncSetInit(whichFunc, initFunc)                                          Calls the initFunc(hostA, hostB) whenever a pair is created with the specified
                                                                                    interactionFunc.
    ALICE_FuncSetOnDestroy(whichFunc, onDestroyFunc)                                Executes the function onDestroyFunc(objectA, objectB, pairData) when a pair using the
                                                                                    specified function is destroyed or a callback using that function expires or is disabled.
                                                                                    Only one callback per function.
    ALICE_FuncSetOnBreak(whichFunc, onBreakFunc)                                    Executes the function onBreakFunc(objectA, objectB, pairData, wasDestroyed) when a pair
                                                                                    using the specified function is destroyed or the actors leave interaction range. Only one
                                                                                    callback per function.
    ALICE_FuncSetOnReset(whichFunc, onResetFunc)                                    Executes the function onResetFunc(objectA, objectB, pairData, wasDestroyed) when a pair
                                                                                    using the specified function is destroyed, the actors leave interaction range, or the
                                                                                    ALICE_PairReset function is called, but only if ALICE_PairIsFirstContact has been called
                                                                                    previously. Only one callback per function.
    ALICE_PairReset()                                                               Resets ALICE_PairIsFirstContact and calls the onReset function if it was reset. Also
                                                                                    resets the ALICE_IsUnoccupied function.
    ALICE_PairInterpolate()                                                         Repeatedly calls the interaction function of the current pair at a rate of the
                                                                                    ALICE_Config.INTERPOLATION_INTERVAL until the next main step. A true is passed into the
                                                                                    interaction function as the third parameter if it is called from within the interpolation loop.


    ------WIDGET API-----
    ALICE_IncludeTypes(whichType)                                                   Widgets with the specified fourCC codes will always receive actors, indepedent of the config.
    ALICE_ExcludeTypes(whichType)                                                   Widgets with the specified fourCC codes will not receive actors, indepedent of the config.
    ALICE_OnWidgetEvent(hookTable)                                                  Injects the functions listed in the hookTable into the hooks created by ALICE. The hookTable
                                                                                    can have the following keys: onUnitEnter - The listed function is called for all preplaced
                                                                                    units and whenever a unit enters the map or a hero is revived. onUnitDeath - The listed
                                                                                    function is called when a unit dies. onUnitRevive - The listed function is called when a
                                                                                    nonhero unit is revived. onUnitChangeOwner - The listed function is called when a unit changes
                                                                                    owner. onUnitRemove - The listed function is called when a unit is removed from the game or its
                                                                                    corpse decays fully. onDestructableEnter - The listed function is called for all preplaced
                                                                                    destructables and whenever a destructable is created. onDestructableDestroy - The listed
                                                                                    function is called when a destructable dies or is removed. onItemEnter - The listed function is
                                                                                    called for all preplaced items and whenever an item first appears on the map. onItemDestroy -
                                                                                    The listed function is called when an item is destroyed or removed.


    -----IDENTIFIER API------
    ALICE_AddIdentifier(whichObject, whichIdentifier)                               Add identifier(s) to an object and pair it with all other objects it is now eligible to be
                                                                                    paired with.
    ALICE_RemoveIdentifier(whichObject, whichIdentifier)                            Remove identifier(s) from an object and remove all pairings with objects it is no longer
                                                                                    eligible to be paired with.
    ALICE_SwapIdentifier(whichObject, oldIdentifier, newIdentifier)                 Exchanges one of the object's identifier with another. If the old identifier is not found,
                                                                                    the new one won't be added.
    ALICE_SetIdentifier(whichObject, newIdentifier)                                 Sets the object's identifier to a string or string sequence.
    ALICE_HasIdentifier(whichObject, identifier)                                    Checks if the object has the specified identifiers. Identifier can be a string or a table.
                                                                                    If it is a table, the last entry must be MATCHING_TYPE_ANY or MATCHING_TYPE_ALL.
    ALICE_GetIdentifier(whichObject)                                                Compiles the identifiers of an object into the provided table or a new table.
    ALICE_FindIdentifier(whichObject, whichIdentifiers)                             Returns the first entry in the given list of identifiers for which an actor exists for the
                                                                                    specified object.
    ALICE_FindField(table, object)                                                  If table is a table with identifier keys, returns the field that matches with the specified
                                                                                    object's identifier. If no match is found, returns table.other. If table is not a table,
                                                                                    returns the variable itself.


    -----INTERACTION API-----
    ALICE_SetInteractionFunc(whichObject, target, interactionFunc)                  Changes the interaction function of the specified object towards the target identifier to
                                                                                    the specified function or removes it.
    ALICE_AddSelfInteraction(whichObject, whichFunc)                                Adds a self-interaction with the specified function to the object. If a self-interaction
                                                                                    with that function already exists, nothing happens. Optional data parameter to initialize
                                                                                    a data table that can be accessed with ALICE_PairLoadData.
    ALICE_RemoveSelfInteraction(whichObject, whichFunc)                             Removes the self-interaction with the specified function from the object.
    ALICE_HasSelfInteraction(whichObject, whichFunc)                                Checks if the object has a self-interaction with the specified function.
    ALICE_PairSetInteractionFunc(whichFunc)                                         Changes the interactionFunc of the pair currently being evaluated. You cannot replace a
                                                                                    function with a return value with one that has no return value and vice versa.


    -----MISC API-----
    ALICE_FuncSetDelay(whichFunc, delay)                                            The first interaction of all pairs using this function will be delayed by the specified
                                                                                    number.
    ALICE_FuncSetUnbreakable(whichFunc)                                             Changes the behavior of pairs using the specified function so that the interactions
                                                                                    continue to be evaluated when the two objects leave their interaction range. Also changes
                                                                                    the behavior of ALICE_PairDisable to not prevent the two object from pairing again.
    ALICE_FuncSetUnsuspendable(whichFunc)                                           Changes the behavior of the specified function such that pairs using this function will
                                                                                    persist if a unit is loaded into a transport or an item is picked up by a unit.
    ALICE_HasActor(object, identifier)                                              Checks if an actor exists with the specified identifier for the specified object. Optional
                                                                                    strict flag to exclude actors that are anchored to that object.
    ALICE_GetAnchor(object)                                                         Returns the object the specified object is anchored to or itself if there is no anchor.
    ALICE_GetFlag(object, whichFlag)                                                Returns the value stored for the specified flag of the specified actor.
    ALICE_SetFlag(object, whichFlag, value)                                         Sets the value of a flag for the actor of an object to the specified value. To change the
                                                                                    isStationary flag, use ALICE_SetStationary instead. Cannot change hasInfiniteRange flag.
    ALICE_GetAnchoredObject(object, identifier)                                     Accesses all objects anchored to the specified object and returns the one with the
                                                                                    specified identifier.
    ALICE_GetOwner(object)                                                          Returns the owner of the specified object. Faster than GetOwningPlayer.
    ALICE_TimeElapsed                                                               The time elapsed since the start of the game. Useful to store the time of the last
                                                                                    interaction between two objects.
    ALICE_CPULoad                                                                   The fraction of time the game is occupied running the ALICE cycle. Asynchronous!


    ====================================================================================================================================================================
                                                                S U P E R   A D V A N C E D   A P I
    ====================================================================================================================================================================


    -----OPTIMIZATION API-----
    ALICE_PairPause()                                                               Pauses interactions of the current pair after this one. Resume with ALICE_Unpause.
    ALICE_Unpause(whichObject, whichFunctions)                                      Unpauses all paused interactions of the object. Optional whichFunctions parameter, which
                                                                                    can be a function or a function sequence, to limit unpausing to pairs using those functions.
    ALICE_FuncPauseOnStationary(whichFunc)                                          Automatically pauses and unpauses all pairs using the specified function whenever the
                                                                                    initiating (male) actor is set to stationary/not stationary.
    ALICE_SetStationary(whichObject, enable)                                        Sets an object to stationary/not stationary. Will affect all actors attached to the object.
    ALICE_IsStationary(whichObject)                                                 Returns whether the specified object is set to stationary.
    ALICE_FuncDistribute(whichFunc, interval)                                       The first interaction of all pairs using this function will be delayed by up to the specified
                                                                                    number, distributing individual calls over the interval to prevent computation spikes.


                                    • The Modular API allows libraries to change the behavior of existing libraries, including
                                      the in-built widget libraries and add new functionality. Functions must be called before
                                      OnInit.final to affect preplaced widgets.
                                    • OnCreation hooks are executed in the order OnCreation -> OnCreationAddFlag ->
                                      OnCreationAddIdentifier -> OnCreationAddInteraction, OnCreationAddSelfInteraction,
                                      taking into account the changes made by previous hooks.

    -----MODULAR API-----
    ALICE_OnCreation(matchingIdentifier, whichFunc)                                 Executes the specified function before an object with the specified identifier is created.
                                                                                    The function is called with the host as the parameter.
    ALICE_OnCreationAddFlag(matchingIdentifier, flag, value)                        Add a flag with the specified value to objects with matchingIdentifier as they are created.
                                                                                    Flags that can be modified are radius, cellCheckInterval, radius, isStationary, priority,
                                                                                    onActorDestroy, and zOffset. If a function is set for value, the function will be called
                                                                                    with the host as the argument and the return value used for the flag. If a function is
                                                                                    provided for value, the returned value of the function will be added.
    ALICE_OnCreationAddIdentifier(matchingIdentifier, additionalIdentifier)         Adds an additional identifier to objects with matchingIdentifier as they are created.
                                                                                    If a function is provided for value, the returned string of the function will be added.
    ALICE_OnCreationAddInteraction(matchingIdentifier, keyword, interactionFunc)    Adds an interaction to all objects with matchingIdentifier as they are created towards
                                                                                    objects with the specified keyword in their identifier. To add a self-interaction, use
                                                                                    ALICE_OnCreationAddSelfInteraction instead.
    ALICE_OnCreationAddSelfInteraction(matchingIdentifier, selfInteractionFunc)     Adds a self-interaction to all objects with matchingIdentifier as they are created.


                                    • The Pair Access API allows external functions to influence pairs and to access pair data.

    -----PAIR ACCESS API-----
    ALICE_Enable(objectA, objectB)                                                  Restore a pair that has been previously destroyed with ALICE_PairDisable. Returns two
                                                                                    booleans. The first denotes whether a pair now exists and the second if it was just created.
    ALICE_AccessData(objectA, objectB)                                              Access the pair for objects A and B and, if it exists, return the data table stored for that
                                                                                    pair. If objectB is a function, returns the data of the self-interaction of objectA using the
                                                                                    specified function.
    ALICE_UnpausePair(objectA, objectB)                                             Access the pair for objects A and B and, if it is paused, unpause it. If objectB is a function,
                                                                                    unpauses the self-interaction of objectA using the specified function.
    ALICE_GetPairAndDo(action, objectA, objectB)                                    Access the pair for objects A and B and, if it exists, perform the specified action. Returns
                                                                                    the return value of the action function. The hosts of the pair as well as any additional
                                                                                    parameters are passed into the action function.  If objectB is a function, accesses the
                                                                                    self-interaction of objectA using the specified function.
    ALICE_ForAllPairsDo(action, object, whichFunc)                                  Access all pairs active for the object using the specified interactionFunc and perform the
                                                                                    specified action. The hosts of the pairs as well as any additional parameters are passed into
                                                                                    the action function.

    ====================================================================================================================================================================
]]
