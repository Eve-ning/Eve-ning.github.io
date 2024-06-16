---
title: Estimate Difficulty of VSRG Difficulty Estimate
tags: vsrg
---

After years studying difficulty estimation for VSRG, I lay out common problems
with it, and why it really isn't that trivial

<!--more-->
> This article is written loosely, for the purpose of populating my blog for
> quick thoughts.

# Definition of Difficulty

Even, the simplest of problems, of defining difficulty, faces difficulties. Take
for example, if we have 2 maps (A and B), 1 player C. How do we figure out if
Map A is harder than Map B for this Player C?

We have the following score data for this Player C:

- Map A: 85%
- Map B: 90%

We can write down the following verdict:
> It's **likely** that Map A is more difficult than B, **for Player C**

## Only "likely"

There are many variables that can impact this verdict:

- Player C was **warming up** with Map A, thus performed significantly poorer
- Map A had **gimmicks** that required much more learning, and the Player only
  played it once.

However, if we had more data:

- Map A: 85%, 86%, 84%, 80%, 88%
- Map B: 90%, 95%, 91%, 92%

With more data, doesn't our verdict become more confident?
This brings us to another problem:
> How much data do we need to say "Map A is harder than B for Player C?"

## Only "Player C"

Several problems arise:

This is only for **1 player**.

> If Map A is harder than B for Player C, will it hold true for other Players?
> If not, how many others does it hold true? Does this proportion of players have
> any meaning?

This player, despite being the same player, when playing these maps, may have
improved/deproved.

> If Players always improve and deprove in different contexts, how would we ever
> compare Map A and B for the "same" Player.

## The Data

Finally, the data we get, may not be complete. Take for example, **osu!mania**
only stores the highest scores, which can prove to be a problem in determining
if Map A is harder than B.

With complete data, we can determine some confidence, that A > B, but with only
the maximum scores, can we still evaluate some confidence, based on just the
number of replays, and the maximum?

## Afterword

It's... more complicated, than expected to fully understand, and quantify
difficulty. As of now, it's apt to perform difficulty algorithm adjustments
without the complete picture.

This doesn't necessarily mean that we entirely forego this, there needs to be
some balance of research in the statistical approach, and by intuition. Both
approaches are valuable, as we don't wish tunnel visioning into a certain
approach.
