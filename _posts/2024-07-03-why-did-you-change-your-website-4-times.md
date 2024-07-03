---
title: Why did you change your website 4 times ???
tags: [ website ]
---

If you didn't know, great, if you did, sorry.

<!--more-->

# Background

To recap I have 4 versions:

## Version 1

The 1st version was made in raw `HTML` and `SCSS`, ouch

Let's not talk about that

## Version 2

The 2nd was in `Vue.JS`, not bad, but honestly, I think I made it way too
complex. There are too many things to relearn every time I want to create
a new blog post. I decided to scrap it and go for something simpler... or
so I thought.

## Version 3

The 3rd was in `Svelte.JS`, `Sanity` (Headless CMS hosted on Vercel),
`DaisyUI` for styling.

I know what you're thinking:

> Oh god they went and did it again.

Trust me, I thought it was simple, because I had everything encapsulated:
- front-facing: DaisyUI
- back-end content: Sanity
- serving: GitHub Actions

The goal is to edit content in markdown in Sanity, and everything will magically
work. Unfortunately, no.

I don't want to throw shade at Sanity, it's a good solution, but I can't make it
work with my beloved extensions of MathJax, Mermaid and so on.
Adding one is always a new gamble.

For longer posts, Sanity is guaranteed to lag, and sometimes even crash. It
became a chore to set up a new post, and here we are.

## Version 4

We're here now, the simplest, it just works solution, `Jekyll`.

I've scoured GitHub for a very long time (2 hours) for the perfect template.
I think this works... well enough, the best thing is just that MathJax and
Mermaid are included, Chart.JS is a cool addition.

The lesson learnt? Just do the thing that works, wear fancy clothes later.

Check out this theme on the footer, I've left their link in :)

