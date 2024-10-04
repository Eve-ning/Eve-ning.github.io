---
title: "Hit Sounds, Visual and Audio Offset impact on Syncing in Rhythm Games"
tags: [ VSRG ]
---

How do you sync every source of feedback in Rhythm Games? Are visual and audio
offsets important? Furthermore, do Hit Sounds contribute positively or
negatively to player experience?

<!--more-->

# Introduction

Hitsounds in Rhythm Games are a way to give feedback on player inputs.

Ideally, the 2 major sources of feedback in Rhythm Games, *visual* and *aural*
are exactly synced together. Though syncing the **physical keyboard sound**
and **game hitsound** is just not physically possible.

## Disclaimer

The values in the graphs below are made-up to simplify the point I'm making,
though they can be analytically found through experiments.

## Background

To explain, let's take a look at a simple timeline on how a note is handled.

There are 4 critical timestamps to consider:

1. When the input is **demanded** by the game
2. When the input is **provided** by the player
3. When the input is **received** by the game
4. When feedback is **received** by the player

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  Game Demands KB Input: milestone, 00:05,
  Player Provides KB Input: milestone, 00:05,
  KB Feedback Delay: 00:05, 00:10
  Player Hears KB Feedback: crit, milestone, 00:10,
  Game Feedback Delay: 00:05, 00:35
  Player Receives Game Feedback: crit, milestone, 00:35,
```

See the red diamonds:
As the KB hit sound (the clack of the KB) and the Game "hit sound" don't happen
at the same time players hear 2 different audio feedback sources.
This is especially disorientating for players using speakers,
they clearly hear themselves hitting the keyboard
then the game hit sound feedback. This explains why players often play with
headphones on to listen to the Game Hit Sound, or just entirely remove the
Game Hit Sound to hear their KB only.

To set the foundation, we firstly show the perfect scenario,
then illustrate solutions game take to work towards it.

### The Ideal Feedback Sync Scenario

Ideally, in a perfect world, we should **sense** these things sync exactly on
each other:

1. Keyboard Hit Sound (KB Feedback)
2. Game Hit Sound/Aural Feedback (Game Feedback)
3. Game Visual Feedback (Game Feedback)

We extensively refer to these sources of feedback for the rest of the article.

Notably, the most difficult constraint is syncing KB Feedback with
Game Feedback because one is physical and the other is constrained by the
game processing speed, which can never be as fast.

While Game Music Sync is not exactly a source of feedback as it's
**independent** of the player keyboard input,
it's still vital to sync it exactly
on all sources. However, because it's easy to control the delay, we won't
include it in all future discussions unless necessary.

We have to now talk about the 2 main methods that games do this.

## Reactive Feedback

**Reactive Feedback** implies that the game only gives feedback **after** the
player provides an input.
As we know, physically, the Game Feedback will always lag milliseconds after KB
Feedback. Therefore, we can never achieve the ideal scenario.

See below:

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:32
    Player Sees Visual Game Feedback: crit, milestone, 00:32,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

The number here are estimated by my experience, but most importantly,
Game Feedback will always take longer. There is no solution to make them all
sync... unless we compromise.

### Solution 1 & 2: Remove a Source of Feedback

Unsurprisingly, many players do not rely on all 3 sources of feedback.

1. Players don headphones, mostly blocking out KB Feedback
2. Players deafen Game Hit Sound
3. Some can remove the Game Visual Feedback, like hit lightning or judgements,
   removing.

Furthermore, players can independently choose their preferred combination of
feedback. The table below shows all possible combinations of feedback

| KB | Game Audio | Game Visual | Sync       | Notes                                                 |
|----|------------|-------------|------------|-------------------------------------------------------|
| O  | O          | O           | Impossible | Impossible due to technical limitations               |
| O  | O          |             | Impossible | Impossible due to technical limitations               |
| O  |            | O           | Compromise | Visual Sync may not be crucial, not necessary to sync |
|    | O          | O           | Possible   | w/ Headphones & appropriate delays                    |
| O  |            |             | Possible   | w/o Headphones and no Game Feedback                   |
|    | O          |             | Possible   | w/ Headphones and Hitsound without Hit Lightning      |
|    |            | O           | Possible   | w/ Headphones and no Hitsound                         |

As an example, players who don headphones rely on both Game Audio and Visual,
syncing them will be trivial with delays.

We show this solution graphically below

**SOLUTION 1**: Game Audio & Visual Sync

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: milestone, 00:10,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:32
    Add Delay: 00:32, 00:35
    Player Sees Visual Game Feedback: crit, milestone, 00:35,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

Another solution could be to remove game feedback entirely.
This solution brings the feedback much closer to the actual physical
hit, which may feel more natural.

**SOLUTION 2**: KB Only Sync

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:32
    Player Sees Visual Game Feedback: milestone, 00:32,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: milestone, 00:35,
```

There are some solutions where it's still impossible though, mainly because
the KB Feedback **cannot** be delayed physically. For example, if the player
only removes the Game Visual Feedback, they will still run into the problem of
syncing both KB and Game Aural Feedback without any solution.

**NON SOLUTION**: KB & Game Audio Sync

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:32
    Player Sees Visual Game Feedback: milestone, 00:32,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

### Solution 3: Compromising w/ Delayed Visuals

While it's good to sync all 3 sources of feedback, many players choose to
compromise with a de-synced visual feedback.
From my experience, it's not particularly distracting as long as it's not too
off-sync. This compromise is usually worthwhile, as visual feedback are still
crucial during gameplay for players to adapt to their mistakes.

So, a 3rd option, graphically:

**SOLUTION 3**: KB Audio & Game Visual Off-sync

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:32
    Player Sees Visual Game Feedback: crit, milestone, 00:32,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: milestone, 00:35,
```

## Proactive Feedback

Unconventionally, we could **proactively** give feedback to the player. This
means that we **expect**, ahead of time, that the player will give some input.
This approach is definitely uncommon, but we provide some brief justification
on how it works.

One common way is to **assume** that the player performed the required input,
perfect, unless otherwise.

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:30,

  section KB Feedback
    Aural KB Feedback Delay: 00:30, 00:35
    Player Hears Aural KB Feedback: crit, milestone, 00:35,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

We see that because we're not limited to **reacting** to the KB Input, we have
the freedom to shift the Game Feedback Delays forward.

As expected, there's one gaping problem here:

> If we assume the player performed the input, doesn't it affect the judgement?

Remember how both the Game Visual and Aural feedback are separate? And how the
delayed Visual Feedback isn't as important? Therefore, in actuality, we can
play around with this leeway.

### Solution 4: Proactive Aural Feedback, Reactive Visual Feedback

Let's assume that we're not that picky about syncing visual feedback, but want
to perform proactive aural feedback. We can expect something like this:

**SOLUTION 4**: Proactive Aural Feedback Game

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:30,

  section KB Feedback
    Aural KB Feedback Delay: 00:30, 00:35
    Player Hears Aural KB Feedback: crit, milestone, 00:35,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,

  section Game Visual
    Visual Game Feedback Delay: 00:30, 00:59
    Player Sees Visual Game Feedback: milestone, 00:59,
```

As expected, we do not sync the visual feedback.

> Despite this being the weirdest solution, it's successfully implemented in
> the game [Rhythm Doctor](https://rhythmdr.com/). They expected the player to
> be playing with or without headphones and compromised for that.
> Furthermore, they actively discouraged visual syncing with some levels that
> distorted visuals, for example
> [Battleworm Insomniac](https://www.youtube.com/watch?v=7F8_Oc-rt_A)

Note that this option must be **embedded** within the game, and not a simple
customizable option Players can change freely, like using headphones or not.

### Nuances in Proactive Feedback

Proactive feedback is NOT just playing the feedback independently regardless
of the player input. If the player, actively hits significantly earlier than
expected, we could override the default proactive feedback.

For example, if the player hits around 35ms earlier than expected:

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Game Expects KB Input: active, milestone, 00:35,
    Player KB Input: milestone, 00:00,

  section KB Feedback
    Aural KB Feedback Delay: 00:00, 00:05
    Player Hears Aural KB Feedback: crit, milestone, 00:05,

  section Game Aural
    Aural Game Feedback Delay: 00:00, 00:30
    Player Hears Aural Game Feedback: crit, milestone, 00:30,

  section Game Visual
    Visual Game Feedback Delay: 00:00, 00:35
    Player Sees Visual Game Feedback: milestone, 00:35,
```

Though, this may not be **that** crucial when players are generally accurate.

## Demanding and Expecting Feedback

Before we go further, we need to quantify the concept of demand for feedback.
Generally, when the game demands, it signals the player to input **now**.

This has a simple consequence, the time of **demand** will affect the time of
**expectation**, accounting delays like KB Latency.

In the example following, we see that the game **must not expect** the input
**exactly** on the same millisecond as the **demand** due to latency.

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  tickInterval 5second

  section Demand
    Game Demands: milestone, 00:00,
    Demand Delay: 00:00, 00:05
    Player Receives Demand: milestone, 00:05,

  section KB Input
    Player KB Input: milestone, 00:05,
    Latency: 00:05, 00:15
    Game Expects Receive Input: milestone, 00:15
```

Note that this is **not necessary** to account for to **sync** all 3 feedback
sources, however, we will use this to holistically analyze the effects of
visual and aural offsetting.

## The Full Picture

Finally, we piece together everything we find:

1. The game demands input both visually and aurally
1. A visual demand can be a note approaching a receptor
2. An aural demand can be a rhythm in the music that the player predicts will
   be on that beat.
2. The player receives them, and hits exactly when they appear with no delay
3. The player will hear the keyboard hit sound as feedback
4. The game expects the KB input after some latency
5. The game will then play both visual and aural feedback.

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  tickInterval 5second

  section Aural Demand
    Game Demands Aurally: milestone, 00:00,
    Aural Demand Delay: 00:00, 00:05
    Player Hears Aural Demand: milestone, 00:05,

  section Visual Demand
    Game Demands Visually: milestone, 00:00,
    Visual Demand Delay: 00:00, 00:05
    Player Sees Visual Demand: milestone, 00:05,

  section KB Input
    Player KB Input: milestone, 00:05,
    Latency: 00:05, 00:15
    Game Expects Receive Input: milestone, 00:15

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,

  section Game Visual
    Visual Game Feedback Delay: 00:05, 00:40
    Player Sees Visual Game Feedback: crit, milestone, 00:40,
```

# Offsetting

Surprisingly, despite years of VSRGs being made, there's still contention on
if offsetting is necessary. In particular, there are 2 major offsets:

1. Audio Offset
2. Visual Offset

Not surprisingly, these are crucial configurations for highly competitive games
where every setting counts.

> Generally, we don't **need** to tweak the **demand offset**, mainly because
> it's too complicated for the laypeople just trying to play VSRGs. But we
> show for completeness.

To give an example, a player measured this weird de-synced Demand and Feedback
graph when playing.

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S

  section Aural D.
    Game Demands Aurally: milestone, 00:05,
    Aural Demand Delay: 00:05, 00:20
    Player Hears Aural Demand: active, milestone, 00:20,

  section Visual D.
    Game Demands Visually: milestone, 00:05,
    Visual Demand Delay: 00:05, 00:10
    Player Sees Visual Demand: active, milestone, 00:10,

  section KB Input
    Player KB Input: active, milestone, 00:15,

  section Game Aural
    Aural Game Feedback Delay: 00:15, 00:30
    Player Hears Aural Game Feedback: crit, milestone, 00:30,

  section Game Visual
    Visual Game Feedback Delay: 00:15, 00:40
    Player Sees Visual Game Feedback: crit, milestone, 00:40,

  section KB Feedback
    Aural KB Feedback Delay: 00:15, 00:25
    Player Hears Aural KB Feedback: crit, milestone, 00:25,
```

> This long of an Aural Demand delay is surprisingly common when you play on
> speakers!

Let's say they want to sync

1. (Light Blue) When they hit physically to the Aural and Visual Demand
2. (Red) When they receive Aural and Visual Feedback
3. Ignoring the Aural KB Feedback

We can apply:

1. -5ms Delay to the Aural Demand
2. +5ms Delay to the Visual Demand
3. +10ms Delay to the Aural Feedback

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S

  section Aural D.
    -5ms: crit, 00:00, 00:05
    Game Demands Aurally: milestone, 00:00,
    Aural Demand Delay: 00:00, 00:15
    Player Hears Aural Demand: active, milestone, 00:15,

  section Visual D.
    +5ms: crit, 00:05, 00:10
    Game Demands Visually: milestone, 00:10,
    Visual Demand Delay: 00:10, 00:15
    Player Sees Visual Demand: active, milestone, 00:15,

  section KB Input
    Player KB Input: active, milestone, 00:15,

  section Game Aural
    Aural Game Feedback Delay: 00:15, 00:30
    +10ms: crit, 00:30, 00:40
    Player Hears Aural Game Feedback: crit, milestone, 00:40,

  section Game Visual
    Visual Game Feedback Delay: 00:15, 00:40
    Player Sees Visual Game Feedback: crit, milestone, 00:40,

  section KB Feedback
    Aural KB Feedback Delay: 00:15, 00:25
    Player Hears Aural KB Feedback: milestone, 00:25,
```

> Notice that if your Demand and Feedback offsets are linked to the same offset,
> you can't get this configuration. But to be fair, generally no one fine-tunes
> this much.

Of course, this is configurable, let's say a player is more aurally oriented,
where they want to sync the aural demand (the music) exactly on the KB feedback
sound. As a compromise, they have to physically feel the hit slightly earlier,
but the audio sync usually helps a lot. (This also mimics actual instruments
closer!)

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S

  section Aural D.
    +5ms: crit, 00:05, 00:10
    Game Demands Aurally: milestone, 00:10,
    Aural Demand Delay: 00:10, 00:25
    Player Hears Aural Demand: crit, milestone, 00:25,

  section Visual D.
    +15ms: crit, 00:05, 00:20
    Game Demands Visually: milestone, 00:20,
    Visual Demand Delay: 00:20, 00:25
    Player Sees Visual Demand: crit, milestone, 00:25,

  section KB Input
    Player KB Input: milestone, 00:15,

  section Game Aural
    Aural Game Feedback Delay: 00:15, 00:30
    Player Hears Aural Game Feedback: milestone, 00:30,

  section Game Visual
    Visual Game Feedback Delay: 00:15, 00:40
    Player Sees Visual Game Feedback: crit, milestone, 00:40,

  section KB Feedback
    Aural KB Feedback Delay: 00:15, 00:25
    Player Hears Aural KB Feedback: crit, milestone, 00:25,
```

> Here, notice that if your Demand and Feedback offsets are linked, it doesn't
> matter since both Game Feedbacks are off.

We still keep the Visual Game Feedback since that's still crucial in gameplay.
But as explained earlier, it doesn't impact the sync much.

## What about w/o Visual Offset?

As mentioned, in VSRGs, players are often less sensitive to de-synced visuals
from the audio. So as a compromise, it's likely fine. To illustrate this:

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S

  section Aural D.
    +5ms: crit, 00:05, 00:10
    Game Demands Aurally: milestone, 00:10,
    Aural Demand Delay: 00:10, 00:25
    Player Hears Aural Demand: crit, milestone, 00:25,

  section Visual D.
    Game Demands Visually: milestone, 00:05,
    Visual Demand Delay: 00:05, 00:10
    Player Sees Visual Demand: crit, milestone, 00:10,

  section KB Input
    Player KB Input: milestone, 00:15,

  section Game Aural
    Aural Game Feedback Delay: 00:15, 00:30
    Player Hears Aural Game Feedback: milestone, 00:30,

  section Game Visual
    Visual Game Feedback Delay: 00:15, 00:40
    Player Sees Visual Game Feedback: crit, milestone, 00:40,

  section KB Feedback
    Aural KB Feedback Delay: 00:15, 00:25
    Player Hears Aural KB Feedback: crit, milestone, 00:25,
```

# Game Hit Sounds

Now, do hit sounds in-game actually help?

It depends on what one **wants to sync**. Though, giving the freedom of enabling
and disabling hit sounds will always make the game more accessible.

To recap, this is the general problem: we want to sync both KB Hit Sound and
Game Hit Sound as they are both major sources of feedback.
When they are de-synced, players will hear double feedback and can be
disorientating. The biggest bottleneck is that we cannot delay the KB Feedback
nor quicken the Game Aural Feedback, thus reaching a stalemate.

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:05,

  section KB Feedback
    Aural KB Feedback Delay: 00:05, 00:10
    Player Hears Aural KB Feedback: crit, milestone, 00:10,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

One way to work around this is to remove either source of feedback.
The other is to perform proactive game hit sound feedback, where we
predicatively play the Game Aural Feedback before the player hits the note

```mermaid
gantt
  dateFormat mm:ss
  axisFormat %M:%S
  section KB Input
    Player KB Input: milestone, 00:30,

  section KB Feedback
    Aural KB Feedback Delay: 00:30, 00:35
    Player Hears Aural KB Feedback: crit, milestone, 00:35,

  section Game Aural
    Aural Game Feedback Delay: 00:05, 00:35
    Player Hears Aural Game Feedback: crit, milestone, 00:35,
```

We recommend the reader to see the section for a more in-depth discussion for
this.

