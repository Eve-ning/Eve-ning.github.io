---
title: Thoughts on Statistically Understanding Tournament Difficulty Progression
tags: [tournaments, vsrg]
---

How could we statistically set a guideline for difficulty of each pool?

<!--more-->

# Visualizing the Pool Framework

Before we jump the gun on how we should approach defining pool difficulty
progression, we should revisit the fundamentals and motivations. There are 2
reasons why a well-regulated and well-defined difficulty is beneficial to a
tournament:

1. Players are **fairly** judged at every stage
2. Mappers and poolers will have an approximate reference on target difficulty,
   **reducing confusion**, improving **difficulty accuracy**.

There are 2 key dimensions of a pool:

1. **Depth**: The progression of the pool, difficulty of each stage.
2. **Width**: The diversity of the pool, the mapping style to target.

We can describe this using the following diagram:

```mermaid
quadrantChart
  title Example Pool Progression
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

We illustrate a few details in the quadrant above:

1. Easier rounds cover less width, while later covers more. This follows the
   idea that some skill-sets, especially niche ones, only occur in higher
   difficulties. Therefore, this will form a "cone-like" shape
2. Easier rounds tend to have fewer maps than later ones. This follows the above
   idea: in later rounds new skill-sets surface, therefore, a pool should adapt
   and cover more ground.

Assuming this ideal framework, we just have to find, or create maps that best
match the placements on the quadrant.

## Finding Appropriate Maps through Difficulty Systems

To find maps that best match these points, we need to have a well-recognized
definition for both axes, and this is where referencing a commonly used
*difficulty system* like **Stella**, **osu!mania Dans**, **O2Jam Level System**
comes in handy.

Similar to how we describe the pool, these *difficulty systems* tend to be:
1. **Deep in Depth**: These systems often consider a large span of difficulties
   that many players engage with.
2. **Narrow in Width**: However, they tend to only consider a smaller subset
   of patterns. For example, BMS Systems often focus on Rice, and O2Jam on LNs.

As an example, we may envision some samples of these systems like the following.
```mermaid
quadrantChart
  title Example Samples of Difficulty System
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

As shown, we do see how each difficulty system has good coverage in depth,
however because they focus on a certain play style, their width naturally is
thinner.

This diagram gives intuition on the difficulties that poolers/mappers face when
selecting/creating maps for the pool:
1. In the diagram, we assumed that certain O2Jam Levels equated to certain BMS
   levels. However, this is up to debate, experts that are accustomed to
   both systems should be consulted to balance.
2. We observe that difficulty systems tend to avoid the middle column. This
   intersection of styles is uncommon for several reasons we do not expand upon.
   But it's easy to see that if there's less reference points, more
   disagreements arise, and thus trustworthiness of difficulty accuracy
   is impeded.

Additionally, maps not in the dan courses, but yet are accurately manually rated
can be considered too!
{:.info}




