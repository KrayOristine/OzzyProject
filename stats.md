# Game core
  This file is for describing some and or all game mechanic in "easier" way and probably extend the description and or info on that mechanic if the maps does not able to explain it in a short sentence

## Attributes
- Basic:
  - Health Point
  - Resources Point
  - Attack Damage
  - Ability Power
  - Armor
  - Magic Resist
  - Attack Speed (display as attack per second)
  - Crit Chance
  - Movement Speed

- Extended:
  - Health Regen per 5s
  - Resource Regen per 5s
  - Physical Damage Rate
  - Magical Damage Rate
  - DMG Rate
  - Physical Res
  - Magical Res
  - DMG Res
  - [Tenacity](#tenacity)
  - Slow Resist
  - Crit DMG
  - Armor Pen
  - Magic Pen
  - Lifesteal
  - [Vamp](#vamp) (Physical, Magical, Omni)
  - Heal and Shield Power


## Damage
- Subtypes:
  - Physical (Mitigated by Armor, almost all basic attack dealt physical damage)
  - Magical (Mitigated by Magic Resist)
  - True (Ignore most type of damage modification, will respect shield, death immunity, damage immunity, and some other type of damage reduction)
  - Pure/Absolute/Myth (Bypass all type of damage modification, directly damage health point)

- Tags:
  - Default (ability based procs, will not interact with anything unless otherwise stated)
  - Proc (attack based proc, will not interact with anything unless otherwise stated)
  - Basic Attack
  - ActiveSpell
  - AOE
  - Periodic
  - Item
  - Pet
  - Non-redirectable
  - Indirect

- Properties:
  - Apply lifesteal
  - Apply on-hit
  - Apply omnivamp
  - Apply on-attack (trigger attack based effect)
  - Respect evasion
  - Respect crit (allow this damage to benefit from critical strike)

## On-X effects

  - On-Attack: Trigger on basic attack complete and finished but before hit it target
  - On-Hit: Trigger on basic attack that hit it target
  - On-Cast: Trigger after finished casting
  - On-Disabling: Trigger after applied some specific crowd-control effect
  - Parry: Prevent an attack from trigger on-hit, on-damage effect and nullify it damage
  - Block: Immune to basic attack damage, but still allow on-hit and on-damage effect to trigger
  - On-ability: Trigger when an ability deal damage to the target

## Vamp

  - Vamp have 3 subtypes:
    - Physical/Magical Vamp: Restore health based on a percentage amount physical/magical damage dealt
    - Spell Vamp: Restore health based on a percentage amount of damage dealt by spell effect
    - Omnivamp: Restore health based on a percentage amount of physical, magical, true damage dealt; And is reduced to 40% effectiveness against non-elite, non-bosses enemy, and further reduced to 15% effectiveness for summoned enemy

  - Lifesteal work like Vamp, but is only heal based on a percentage amount of damage dealt from a basic attack

## Tenacity

  A unique stats that reduce most crowd-control duration, any crowd-control will have it duration reduced by tenacity before it is applied to target
  - Tenacity can not reduce crowd-control duration down below 0.2s
  - All tenacity sources stack multiplicatively
  - Tenacity duration reduction will not reduce these crowd-control duration:
    - Airborne
    - Drowsy
    - Nearsight
    - Stasis
    - Suppression

## Slow Resist

  Reduce slow strength, any slow effect will have it effect reduced based on the stats percentage
  - Slow Resist above 100% will set the slow to strength to 0
  - Any effect that based on slow strength will also have it strength reduced by the same value
  - Slow resist can not reduce the strength of flat value slow (e.g reduce target movement speed by 100)

## Immunity

  This is a list of all immunity effect currently planned or already exist and or already used within the map
  - Damage Immunity: All damage taken is set to 0
  - Death Immunity: All damage taken that can kill the buff holder are set to 0
  - CC/X Immunity: Prevent application of all types or X crowd-control
  - Total/X Effect Immunity: Prevent application of all types of negative effect or specific X effect

## Negative effects

  This is a list of all or most named negative effects
  - Debuffs:
    - Grevious Wound: Reduce healing received from all sources by 50%, do not stack, multiple source will also not stack, refresh duration when re-applied
    - Fatal Wound: Reduce healing and shielding received from all sources by 80%, do not stack, multiple source will also not stack, refresh duration when re-applied
    - Death Marked You: Mark the target for death for 5s, then accumulate 50% of all post-mitigation damage taken by the target. Every seconds, if the target HP is lower than the total accumulated damage, they are [executed](#execution). When this effect expired and failed to trigger [execution](#execution), dealt all currently accumulated damage as physical damage and remove this effect. Do not stack, will not refresh duration on re-apply

  - Crowd-Control:
    - Total CC: Prevent movement, declare attack, casting ability, etc.
      - Airborne: Apply stun with it duration equal to airborne duration, only airborne duration can not reduced by tenacity, airborne can not be cleansed. Moving when stun applied by airborne end early will also end Airborne early
      - Sleep: Work like stun, but only last until target is damaged or end of duration
      - Stasis: Work like stun, target are also untargetable, damage immune
      - Stun: Prevent declaring any action
      - Suppression: Work like stun, but can not be cleansed and cant be reduced by tenacity
      - Suspension: Extend target airborne duration and apply stun for the same amount of extended time. Same as Airborne but can be prevented by having displacement immunity
      - Taunt: Force affected target to perform basic attack the buff sources, can be reduced by tenacity
      - Fear/Flee: Force affected target to run away from buff source, target will also have it movement speed slowed to 80 for the duration
      - Charm: Force affected target to move toward buff source, target will also have it movement speed slowed to 120 for the duration
    - Parital CC:
      - Grounded: Prevent affected target to cast blink, dash ability and also apply slow for the same duration. Can be cleansed, can not be reduced by tenacity
      - Nearsight: Reduce your vision to your attack ranges, remove allies vision. Can be cleansed, can not be reduced by tenacity
      - Silence: Prevent target from casting abilities
      - Blind: Make affected target miss it basic attack for the duration, miss will occur on-hit
      - Cripple: Make affected target have reduced total attack speed
      - Disarm: Prevent target from declaring basic attack
      - Root: Prevent target from declaring movement
      - Slow: Reduce target movement speed for the duration
      - Knockdown: Disrupt all dashing effect and Airborne, force target to be placed to the ground instantly


## Execution

  Execution is a special effect that applied by some ability under a specific condition. This effect will cause these thing to happen to the target in order (All of these happen in the order they are listed but in a very short timespan):
  - Play some effect indicate that this unit will vaporize
  - Destroy all shield, remove all damage immunity, death immunity effect
  - Take pure damage equal to 100% of this unit maximum HP that will also credit the kill to the effect source (but will not count as their damage)

  Some ability or status effect that apply this effect may modify the damage amount and or anything, but in the end they will always guarantee to kill the target regardless of their current health and or any damage modification
