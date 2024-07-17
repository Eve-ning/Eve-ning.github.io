---
title: All my old websites
tags: [ Website, GitHub, Bootstrap, HTML5, VueJS, Svelte, DaisyUI, SCSS, Sanity, JavaScript ]
---

A trip around web dev technologies, to end up to the simplest one.

<!--more-->

I have a few prior websites to this, they were built using several technologies
as listed above. I wouldn't say I'm a seasoned web developer, but I'm proud of
how much I've explored in this area :bulb:

I have 5 different versions of my previous websites, you can go to them
via the links below. They are developed chronologically in the listed order.
Note that some functionalities may not work.

- [HTML + SCSS](https://eve-ning.github.io/website-html/)
- [Jekyll](https://eve-ning.github.io/website-jekyll/)
- [Vue (Version 1)](https://eve-ning.github.io/website-vue-1/)
- [Vue (Version 2)](https://eve-ning.github.io/website-vue-2/)
- [Svelte + Sanity](https://eve-ning.github.io/website-svelte/)

# HTML + SCSS

The 1st version was made in raw `HTML` and `SCSS`. I believe it used to look
much better


Let's not talk about that

## Version 2

The 2nd was in `Vue.JS`. I was introduced to it by my good friend IceDynamix.
Being the first website I'm developing with an actual framework, I got rather
comfortable in using classic programming practices like encapsulation, SOLID,
DRY, whatever. Ideally, as I put more work into it, it should make it easier
for me to work with in the future. Unfortunately, it slowly extended the time
taken for me to push out content.

You see, Vue has things called "Components", and each component kind of acts as
a template that can be repeatedly used to populate a commonly used HTML block.
So things like a fancy `hbar` or custom image border can be specified like:

- `<HBar .../>`
- `<CustomImage href="..." .../>`

Reminds me fondly of most common programming approaches, which is great!
However, I realised that I was actually writing posts in `HTML` still. Not
great, but not the worst (see Version 1).

Every time I had to create a new blog post, I had to refresh my memory on what
`Vue.JS` is (roughly), then remember how to do simple `HTML`, and finally
remember what custom components I've defined. In the end, it took up way too
much cognitive load even before I started. I burnt out of the post idea.

Thus, with newfound pain, I decided to scrap it and go for something simpler.

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
work. Unfortunately, I was deep in **dependency hell**

> Dependency hell is a colloquial term for the frustration of some software
> users who have installed software packages which have dependencies on specific
> versions of other software packages - Wikipedia

I don't want to throw shade at Sanity, it's a good solution, but I can't make it
work with my beloved extensions of MathJax, Mermaid and so on.
Adding one is always a new gamble to resolve dependencies.

You see, Sanity has its own content editor, called Sanity Studio, then there's
the website itself, which serves the content. Both of them **need** to have
the same packages so that you achieve a WYSIWYG architecture.
For example, to have `Mermaid.JS` on the website, you need it on Studio, so
you can preview what it could look like.

From my experience, because fundamentally they both have different dependencies,
it's frequent to experience dependency hell especially when many packages have
not been migrated to Sanity V2 or even touched on in a few years.

Ideally, I want `Mermaid.JS`, `MathJax`, and `HighlightJS` all in my posts, a
big ask, but hey, we finally did it with my new website.

## Version 4

We're here now, the simplest, it just works solution, `Jekyll`.

I've scoured GitHub for a very long time (2 hours) for the perfect template.
I think this works... well enough, the best thing is just that MathJax and
Mermaid are included, Chart.JS is a cool addition.

The lesson learnt? Just do the thing that works, wear fancy clothes later.

Check out this theme on the footer, I've left their link in :)

