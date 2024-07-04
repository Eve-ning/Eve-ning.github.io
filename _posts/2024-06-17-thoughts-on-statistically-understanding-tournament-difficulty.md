---
title: (Draft) Thoughts on Statistically Understanding Tournament Difficulty Progression
tags: [ tournaments, vsrg, draft ]
---

How could we statistically set a guideline for difficulty of each pool?

<!--more-->

This is still in draft
{:.warning}

# Motivation

There are 2 reasons why a well-regulated and well-defined difficulty is
beneficial to a tournament:

1. Players are **fairly** judged at every stage
2. Mappers and poolers will have an approximate reference on target difficulty,
   **reducing confusion**, improving **difficulty accuracy**.

Difficulty regulation is difficult, because the definition of difficulty is
weak, subjective. Commonly, and acceptably, just defining the pool difficulty
through "vibes" is sufficient, and it has worked well, for the past few
hundred tournaments.

As a member of many pooling teams, I've seen common patterns that could be
documented in an aggregated manner, to act as a possible reference point for
future pooling. This reference point is the **difficulty space**

# Visualizing the Pool on the _Difficulty Space_

This "space" is a 2-dimensional space that roughly defines attributes of maps.
Using this space, we can define what types of maps should go into the poolp.

The 2 dimensions, vertical and horizontal are defined by:

1. **Depth** (Vertical): Further up are maps that are more difficult,
   further down are easier ones.
2. **Width** (Horizontal): Left and right defines different styles, we define
   left as RC and right as LN. If necessary, we can extend to memorization skills
   and so on.

For example, a pool could be described like the following diagram.

```mermaid
quadrantChart
  title Pool Progression in the Difficulty Space
  x-axis RC Oriented --> LN Oriented
  y-axis Easy --> Hard
  quadrant-1 Hard LN
  quadrant-2 Hard RC
  quadrant-3 Easy RC
  quadrant-4 Easy LN
  RO24 RC: [0.25, 0.12]
  RO24 RCHB: [0.34, 0.08]
  RO24 HB: [0.48, 0.08]
  RO24 LNHB: [0.55, 0.13]
  RO24 LN: [0.7, 0.1]
  QF RC: [0.14, 0.41]
  .: [0.26, 0.42]
  .: [0.36, 0.38]
  QF HB: [0.52, 0.37]
  .: [0.63, 0.43]
  .: [0.7, 0.44]
  QF LN: [0.83, 0.37]
  GF RC: [0.1, 0.91]
  .: [0.2, 0.92]
  .: [0.3, 0.9]
  .: [0.4, 0.88]
  GF HB: [0.5, 0.89]
  .: [0.6, 0.9]
  .: [0.7, 0.91]
  .: [0.8, 0.88]
  GF LN: [0.9, 0.91]
```

Assuming we agree with this _abstract_ sketch of how we can define the ideal
pool, we now have to put _actual_ definitions onto each point. E.g. what does
$(x=0.2, y=0.8)$ mean? There are several methods that poolers usually resort to
for the above problem:

1. Referencing Difficulty Systems (and related maps)
2. Score Matching
3. Qualitative Feedback

## Referencing Difficulty Systems

To understand the **difficulty space**, we can first reference
well-established difficulty systems like **Stella**, **osu!mania Dans**,
**O2Jam Level System**.

We can roughly describe these *difficulty systems* in the space:

1. **Deep in Depth**: These systems often consider a large span of difficulties
   that many players engage with.
2. **Narrow in Width**: Unfortunately, they tend to only consider a subset
   of patterns. For example, BMS Systems often focus on Rice, and O2Jam on LNs.

```mermaid
quadrantChart
  title BMS Difficulty System
  x-axis RC Oriented --> LN Oriented
  y-axis Easy --> Hard
  quadrant-1 Hard LN
  quadrant-2 Hard RC
  quadrant-3 Easy RC
  quadrant-4 Easy LN
  BMS Lv.1: [0.25, 0.12]
  BMS Lv.3: [0.2, 0.2]
  BMS Lv.5: [0.26, 0.24]
  BMS Lv.7: [0.27, 0.3]
  BMS Lv.9: [0.22, 0.4]
  BMS Lv.11: [0.12, 0.44]
  BMS Lv.15: [0.4, 0.6]
  BMS Lv.19: [0.18, 0.7]
  BMS Lv.21: [0.13, 0.8]
  BMS Lv.22: [0.3, 0.9]
```

As shown, one difficulty system only targets a thin "column" in the
**difficulty space**. However, if we added another system...

```mermaid
quadrantChart
  title BMS & O2JAM Difficulty Systems
  x-axis RC Oriented --> LN Oriented
  y-axis Easy --> Hard
  quadrant-1 Hard LN
  quadrant-2 Hard RC
  quadrant-3 Easy RC
  quadrant-4 Easy LN
  BMS Lv.1: [0.25, 0.12]
  BMS Lv.3: [0.2, 0.2]
  BMS Lv.5: [0.26, 0.24]
  BMS Lv.7: [0.27, 0.3]
  BMS Lv.9: [0.22, 0.4]
  BMS Lv.11: [0.12, 0.44]
  BMS Lv.15: [0.4, 0.6]
  BMS Lv.19: [0.18, 0.7]
  BMS Lv.21: [0.13, 0.8]
  BMS Lv.22: [0.3, 0.9]
  O2Jam Lv.10: [0.85, 0.12]
  O2Jam Lv.20: [0.8, 0.2]
  O2Jam Lv.30: [0.6, 0.24]
  O2Jam Lv.40: [0.79, 0.3]
  O2Jam Lv.50: [0.68, 0.4]
  O2Jam Lv.60: [0.59, 0.44]
  O2Jam Lv.80: [0.75, 0.55]
  O2Jam Lv.100: [0.78, 0.76]
  O2Jam Lv.105: [0.83, 0.85]
  O2Jam Lv.110: [0.68, 0.95]
```

It can populate the empty space... however, the immediate issue that veteran
players have is the assertion that BMS Lv. X is equal in difficulty to O2Jam LV. Y.

You see, difficulty systems are mostly correct **within** each system,
however, there's no guarantee that it works **between** systems.
Therefore, an RC player could see the space as follows:

```mermaid
quadrantChart
  title BMS & O2JAM Difficulty System (Take 2)
  x-axis RC Oriented --> LN Oriented
  y-axis Easy --> Hard
  quadrant-1 Hard LN
  quadrant-2 Hard RC
  quadrant-3 Easy RC
  quadrant-4 Easy LN
  BMS Lv.1: [0.25, 0.21]
  BMS Lv.3: [0.2, 0.24]
  BMS Lv.5: [0.26, 0.27]
  BMS Lv.7: [0.27, 0.30]
  BMS Lv.9: [0.22, 0.35]
  BMS Lv.11: [0.12, 0.37]
  BMS Lv.15: [0.4, 0.45]
  BMS Lv.19: [0.18, 0.52]
  BMS Lv.21: [0.13, 0.56]
  BMS Lv.22: [0.3, 0.6]
  O2Jam Lv.10: [0.85, 0.12]
  O2Jam Lv.20: [0.8, 0.2]
  O2Jam Lv.30: [0.6, 0.24]
  O2Jam Lv.40: [0.79, 0.3]
  O2Jam Lv.50: [0.68, 0.4]
  O2Jam Lv.60: [0.59, 0.44]
  O2Jam Lv.80: [0.75, 0.55]
  O2Jam Lv.100: [0.78, 0.76]
  O2Jam Lv.105: [0.83, 0.85]
  O2Jam Lv.110: [0.68, 0.95]
```

Because their strong suit is RC, anything that's LN is substantially more
difficult.

This isn't all for naught though, we do have a way to relatively estimate
difficulty for each system by referencing these difficulty systems, however
it calls for a robust approach to match levels across systems.

Additionally, maps not in the dan courses, but yet are accurately manually rated
can be considered too!
{:.info}

### Difficulty System Matching

To recap, when we use 2 separate difficulty systems,
we have difficulty determining what "levels" of the system should equate.
In other words, determining if a BMS Lv.X be slotted in the same pool as a
O2Jam Lv.Y.
The simplest approach is to ask multiple test-players to play maps across these
systems, effectively, connecting the dots.
However, it's easy to see that conducting this large-scale experiment is
not only a logistics hell but also high effort.
