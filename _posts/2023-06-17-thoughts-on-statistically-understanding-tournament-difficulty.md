---
title: Thoughts on Statistically Understanding Tournament Difficulty Progression
tags: Tournaments
---

How could we statistically set a guideline for difficulty of each pool?

<!--more-->

# Visualizing the Pool Framework

Before we jump the gun on how we should approach defining pool difficulty
progression, we should revisit the fundamentals and motivations. There are many
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
   idea: in later rounds new skill-sets surface, and form their own categories
   that are testable.

We can assume this as the ideal framework to design the pool, where we have to
find, or create maps that best match the placements on the quadrant.

---

One of the most common problems in tournament pooling is defining the optimal
difficulty of the pool at each stage. The most common, and simplest approach is
through using some difficulty chart, e.g. **Stella**, **osu!mania Dans**,
**O2Jam Level System**, etc.

Many benefits come from referencing a difficulty system, not only are those
Dan systems well recognized, many maps too, use these systems to define what
their map difficulties are. As a result, when the pooling team constructs a new
pool, they have many references to refine their map difficulty.

However, there are still some variables that are still free for poolers to
define.

1. The progression of difficulty from stage to stage
2.

```mermaid
quadrantChart
  x-axis RC-Easy --> RC-Hard
  y-axis LN-Easy --> LN-Hard
  quadrant-1 Hybrid Hard
  quadrant-2 LN Oriented
  quadrant-3 Hybrid Easy
  quadrant-4 RC Oriented
```



