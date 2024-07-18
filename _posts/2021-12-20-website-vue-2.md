---
title: Website Vue 2
tags: [ Website, GitHub, Bootstrap, VueJS, JavaScript ]
project:
  status: completed
  url: https://eve-ning.github.io/website-vue-2/
---

I tried VueJS again!

<!--more-->

> **Websites Directory**
> - [Ver. 1 Website (Jekyll)]({%- post_url 2020-02-23-website-jekyll -%})
> - [Ver. 2 Website (HTML)]({%- post_url 2021-07-25-website-html -%})
> - [Ver. 3 Website (Vue 1)]({%- post_url 2021-08-02-website-vue-1 -%})
> - [Ver. 4 Website (Vue 2)]({%- post_url 2021-12-20-website-vue-2 -%})
> - [Ver. 5 Website (Svelte)]({%- post_url 2023-12-03-website-svelte -%})
> - Ver. 6 Website (this one!)

# The 4th Website

This is one of my longest lasting website! This was made after learning painful
mistakes from my first VueJS attempt, which bricked the development. In
retrospect, this is one of the more aesthetically cleanest websites I've
completed, I'm quite proud of it!

## Hero Gallery

One of the greater changes in this website is the gallery for me to just add
images and it'll randomly show them on the hero. Otherwise, this is similar in
content as before.

![image](/assets/images/posts/2021-12-20-website-vue-2/img.png)

## Easter Egg

On the website, there's a tab `express`, which is a map "album" that was made
during the
[2022 7K Mania World Cup Tournament](https://osu.ppy.sh/wiki/en/Tournaments/MWC/2022_7K).
It lists the general approach on how I tackled each map whilst adhering to the
theme of "expression".

## Complexity Creep

I built this website with Vue.js, and while I was happy with the structure,
keeping track of all the components became a challenge. It felt like 90% of the
time I spent creating a new blog post involved figuring out which pieces I
already had built, leaving only 10% for actual writing. This constant catch-up
was tiring.

It doesn't help that I'm still writing posts in HTML Tags

```html

<template>
  <div>
    <h1>Preface</h1>

    <p>
      lorem ipsum &amp;
      <strong>something something</strong>?
    </p>

    <img
      alt=""
      class="img-fluid p-3 border border-3 my-3"
      src="@/views/Blog/rsc/000/image1.png"
    />
    ...
</template>
```

It felt awful to do so every time. Considering the likes of Markdown, website
editors like Wix/Wordpress etc., I knew there had to be a better solution out
there. [Cue my next Website (Svelte)]({%- post_url
2023-12-03-website-svelte -%})
