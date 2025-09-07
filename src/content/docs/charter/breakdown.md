---
title: "Concept Breakdown"
---

## Core Concept

Parabola is a puzzle-driven, physics-based experience centered on arcing projectile mechanics. The player wields the **[Auxiliary Resonance Cannon (ARC)](/charter/breakdown/#the-auxiliary-resonance-cannon-arc)** to fire energized projectiles known as **[Luma](/charter/breakdown/#luma)**, which interact with the world by powering puzzle elements, overcoming obstacles, and navigating increasingly complex scenarios.

Progression is gated by the discovery and use of **[Mystic Eggs](/charter/breakdown/#mystic-eggs)**, each offering unique abilities that expand puzzle-solving possibilities and challenge the player to creatively combine tools under constraint.

## Gameplay Overview

- **Primary Loop:**

  1. Fire Luma using the ARC.
  2. Manipulate puzzle elements via Luma-powered chargers.
  3. Overcome environmental obstacles and enemies.
  4. Acquire and utilize Mystic Eggs.
  5. Deliver 4 of 5 Mystic Eggs to the Exit Chamber to complete the game.

- **Player Constraints:**
  - ARC overheat mechanic (crystal depletion).
  - Luma decay over time and through collisions.
  - Only one Mystic Egg can be carried at a time.
  - Environmental gates and enemies limit free traversal.

## The Auxiliary Resonance Cannon (ARC)

- **Function:** Fires Luma projectiles.
- **Fire Modes:**
  - Single shot.
  - Rapid-fire (limited by charge depletion and fire rate).
- **Charge Mechanic:**
  - Represented by three crystals on the ARC and HUD.
  - Firing depletes crystal charge sequentially.
  - Full depletion triggers 3-second cooldown.
  - Partial recharge occurs after 3 seconds of inactivity.

**Design Intent:** Overheat serves as a pacing mechanism to discourage spamming while keeping flow smooth. Balance adjustments expected.

## Luma

- **Definition:** Energized bundles of light that decay over time and collisions.
- **Lifecycle:**

  - Starts at 100% charge.
  - Loses 10% charge per second.
  - Loses 5% per collision with non-special surfaces.
  - Lifespan: ~10 seconds under ideal conditions.

- **Interactions:**
  - Charge puzzle elements via Pads (25% drain) or Buckets (full absorption).
  - Cannot survive contact with absorptive/nullifying surfaces.
  - Restored to 100% charge by recharging surfaces.

### Acquisition

- **Neutral (White) Luma:** Default.
- **Colored Luma:** Obtained by absorbing from **Siphon Crystals**.
- **Returning to Neutral:** Swap back into empty or alternative Siphon Crystals.
- **Player State:** Matches Luma color; determines access through **Colored Phase Gates**.

### Color Variants

- **White:** Default neutral.
- **Orange:** Loftier arc; optimized for Buckets.
- **Cyan:** Gravity-free straight shot.
- **Purple:** Faster and bouncier.
- **Gold/Yellow:** Doubled charge for extended lifetime and ricochets.

## Mystic Eggs

- **Objective:** Deliver any 4 of 5 Mystic Eggs to the Exit Chamber.
- **Carry Restriction:** Only one egg at a time.
- **Controls:**
  - Carry (mapped to Pick Up/Drop).
  - Place (contextual with Carry).
  - Throw (separate control).

### Egg Abilities

1. **Light Egg** — _semi-transparent cloudy-looking egg that floats above the player's off-hand_

   - Carry: Reduced gravity, faster movement.
   - Place: Lifts puzzle elements.
   - Throw: Floats loftily.

2. **Heavy Egg** — _opaque, rough stone-looking egg that sits lower on the screen due to its weight_

   - Carry: Slows movement, disables jumping.
   - Place: Triggers weight-based mechanisms.
   - Throw: Minimal throw, no rolling.

3. **Charged Egg** — _metallic egg buzzing with sparks of electromagnetic energy_

   - Carry: Pass through Shield Doors.
   - Place: Powers off or jams nearby active elements.
   - Throw: Travels through Shield Doors.

4. **Teleport Egg** — _pulsating, glowing egg that shifts between blue and orange when interacted with_

   - Carry: Enables Portal traversal.
   - Place: Creates return portal to Main Portal.
   - Throw: Teleports player to impact point on portal-only surfaces.

5. **Stasis Egg** — _a mysterious egg that appears to encapsulate a small galaxy_
   - Carry: Creates local time-slow bubble; reduces player speed and ARC fire rate; slows enemy projectiles.
   - Place: Freezes moving puzzle elements.
   - Throw: Extremely slow projectile.

## Puzzle Elements

### Chargers

- **Pad:** Drains 25% Luma charge per hit; non-destructive.
- **Bucket:** Fully absorbs Luma; single-use per shot.

### Powered Elements

- **Mechanical Door:** Requires charge to open.
- **Mechanical Lift:** Requires charge to move platforms.

### Obstacles

- **Shield Doors:** Block Luma and Eggs; passable only when carrying Charged Egg.
- **Colored Phase Gates:** Restrict traversal to matching-color Luma/player states.
- **Anti-Egg (Dark) Gates:** Block passage when carrying any Egg.

### Enemies

- **Luma Turrets:** Stationary, projectile-firing hazards.
- **Seeker Drones (Ground):** Mobile threats that patrol surfaces.
- **Flying Seeker Drones:** Aerial pursuers that harass player in open areas.

### Special Surfaces

- **Absorptive/Nullifying:** Destroy Luma on contact.
- **Recharging:** Restore Luma to full charge on impact.

## Progression & Objectives

- Early stages introduce ARC basics and neutral Luma.
- Gradual introduction of colored Luma and matching Phase Gates.
- Eggs become available in early scenarios, each expanding player abilities.
- Increasing complexity requires combining Luma mechanics and Egg powers.
- Final challenge: Deliver any 4 Mystic Eggs to the Exit Chamber.

## Balance & Design Considerations

- **ARC Overheat:** Must prevent trivialization of puzzles through rapid spam while not overly frustrating the player.
- **Luma Decay:** Encourages precision and planning; balance requires testing on ricochet frequency.
- **Egg Restrictions:** Carry limitation ensures players consider trade-offs.
- **Enemy Threats:** Primarily pacing obstacles; not intended to dominate gameplay.

## Visual & Diegetic Communication

- **ARC Crystals:** Glow intensity communicates charge.
- **Luma Decay:** Charge state should be visually evident (fading, dimming, shrinking).
- **Egg Effects:** Each egg’s aura or physical appearance reflects its active state.
- **Puzzle Elements:** Pads, Buckets, Gates, and Surfaces must be visually distinct and consistent.
