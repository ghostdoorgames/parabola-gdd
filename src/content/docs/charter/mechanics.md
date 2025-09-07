---
title: "Game Mechanics"
---

## The Auxiliary Resonance Cannon (ARC)

The breadth of Parabola's primary gameplay loop is based around arcing physics, thus the name, in a nod to the mathematical term for this shape. This is facilitated primarily through the ARC, a handheld cannon-like gun that shoots **Luma**, which are energized bundles of light.

The player can fire the cannon in single shots, or hold their mapped control to rapid-fire them at the set fire rate (which can vary slightly).

The mysterious workings of this device and its true purpose are not made clear to the player. What is made clear through early diegetic instruction, is that it relies on the three glowing crystals seen sticking from the butt-end of the cannon. These, and many crystals like it, are seen all throughout the game world and can be assumed to harness power of some kind.

These crystals are the limiting factor of the ARC. They visually represent the current charge of the cannon, which is analogous to overheating seen in various shooting games. As the player fires the cannon rapidly the charge will deplete (visually aided by the glow of each crystal fading in succession). If the player depletes all three crystals (also denoted on the HUD), the overheat animation will commence and a 3 second cooldown will be enforced as the crystals recharge to full. So long as the ARC has charge, it will immediately refill after 3 seconds of idling, but without locking the player into a cooldown.

:::note
_This is intended as a marginal stop-gap to spamming, but will likely need many passes of balance to get right._
:::

## Luma

Just as mysterious as the ARC which fires them, these glowing bouncing balls of pure light energy radiate electromagnetic forces until they burn down into nothing. Besides being bright and bouncy, the energy they carry can be transmitted to what are essentially photovoltaic cells.

In the game, this takes the form of **Powered Elements** - puzzle elements or obstacles that can be/must be powered. To power these elements with Luma, players will need to locate that element's corresponding charger - which takes the form of either a **Pad** or a **Bucket** - when it strikes a Pad or lands in a Bucket it's charge will be transferred to a storage crystal that then powers the element. Some elements may have more than 1 storage crystal, meaning there are more than one sources needed to power it.

The only difference between a Pad and Bucket, outside of their physics, is that a Bucket will completely absorb the Luma, whereas the Pad will just take 25% from it's charge. This means that a single Luma can potentially charge via multiple Pads.

A Luma's charge begins at 100% once fired and depletes by 10% each second, meaning a freely flying Luma would do so for 10 seconds. When a Luma collides with any solid surface that isn't a **Special Surface** or a charging element, it loses 5% of it's charge. This puts pressure on ricocheted shots not bouncing too much before they reach their intended target.

:::note
_Luma charge should be diegetically relayed to the player somehow. Deduction values will likely need a few balance passes to get right._
:::

### Acquisition

As players progress through the puzzle box they will encounter various Puzzle Elements and Chargers that feature various colors. These correlate to the color of the Luma needed to power them. Any colored Luma will power any Neutral/White charger/element.

Players will also see **Siphon Crystals**, these crystals absorb and store colored light and the ARC can harness that to change its color state, leaving the Siphon Crystal empty.

Players can return their ARC to a Neutral Luma by putting the color back in an empty Siphon or swapping it with the color from another.

In addition to changing the color state of the fired Luma, the player in effect changes state, which correlates with **Colored Phase Gates**.

### Colors

Each of the Luma colors has a distinct set of physics and/or effects beyond being necessary to power like-colored puzzle elements. They are as follows:

- White: default neutral Luma
- Orange: slower, loftier shot - great for Buckets
- Cyan: fires in a straight line, unaffected by gravity
- Purple: faster, bouncier shot
- Gold/Yellow: 2x the charge for longer duration shots, or more bouncing

## Mystic Eggs

In order to complete the game, the player must bring any 4 of these 5 eggs to the **Exit Chamber**.

Each of these, except the Teleport Egg, are accessible within the first several scenarios/puzzles in the game. They are expected to be used in conjunction to get through the puzzle box in whatever manner the player finds suitable and doable.

The player can only carry one Mystic Egg at a time. The action for _Picking Up (Carry)_ and _Dropping (Place)_ are mapped to the same control. A second control will be mapped for the _Throw_ action. Each egg has an effect for each of these states/actions.

The Mystic Eggs and their distinct effects are as follows:

- **Light**: semi-transparent cloudy looking egg that floats above the players off-hand
  - Carry - reduces gravity on player/makes them a little faster and floatier
  - Place - will lift platforms or other puzzle elements off the ground
  - Throw - travels slow and lofty through the air
- **Heavy**: opaque and rough stone looking egg that sits lower on the screen due to it's hefty weight
  - Carry - Slows movement and sprinting and prevents jumping
  - Place - Triggers weight based puzzles - pressure plates, scales, etc
  - Throw - Can barely be thrown and does not roll
- **Charged**: metallic egg buzzing with sparks of electromagnetic energy
  - Carry - Player can pass through Shield Doors
  - Place - Powers OFF puzzle elements within a radius and jams/disables puzzle elements that are ON
  - Throw - Can be thrown through Shield Doors
- **Teleport**: pulsating glowing egg that changes between blue and orange when interacted with (a subtle homage to Portal)
  - Carry - Can pass through Portals to traverse the world
  - Place - Creates a Portal back to a central "Main Portal", which will in turn take you back to the Egg
  - Throw - Throws similar to a Luma, teleports the player to the first point of impact on Portal-only surfaces
- **Stasis**: a mysterious egg that looks like it encapsulates a small galaxy
  - Carry - Surrounded by time-bubble that slows moving platforms and hazards within a radius; player cannot sprint and ARC fire rate is reduced; projectiles fired by Turrets are also slowed when they enter the bubble
  - Place - Freezes moving puzzle elements within a certain radius
  - Throw - Thrown like a Luma but a very slow pace

## Puzzle Elements

### Chargers

- Pad
- Bucket

### Powered Elements

- Mechanical Door
- Mechanical Lift

### Obstacles

- Shield Doors - Eggs (except Charged) and Luma cannot pass through; player can only pass through if they are carrying the Charged Egg
- Colored Phase Gates - only Luma of like color can pass through; only players of like color state can pass through
- Anti-Egg Gates (Dark Gates) - the player cannot pass through this gate while holding ANY Mystic Egg

### Enemies

- Luma Turrets
- Seeker Drones (ground)
- Flying Seeker Drones

### Special Surfaces

- Absorptive/nullifying surface - any Luma that comes into contact with this surface will have it's charge immediately absorbed effectively destroying it
- Recharging surface - any Luma that comes into contact with this surface will have it's charge reset to full no matter how much charge it has left in flight
