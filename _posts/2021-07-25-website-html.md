---
title: Website HTML
tags: [ Website, GitHub, Bootstrap, SCSS, JavaScript, HTML5  ]
project:
  status: completed
  url: https://eve-ning.github.io/website-html/
  repo: https://github.com/eve-ning/website-html/
---

My second website, built with Bootstrap, SCSS, JS and good ol' HTML5 (I'm not
sure why either)

<!--more-->

> **Websites Directory**
> - [Ver. 1 Website (Jekyll)]({%- post_url 2020-02-23-website-jekyll -%})
> - [Ver. 2 Website (HTML)]({%- post_url 2021-07-25-website-html -%})
> - [Ver. 3 Website (Vue 1)]({%- post_url 2021-08-02-website-vue-1 -%})
> - [Ver. 4 Website (Vue 2)]({%- post_url 2021-12-20-website-vue-2 -%})
> - [Ver. 5 Website (Svelte)]({%- post_url 2023-12-03-website-svelte -%})
> - Ver. 6 Website (this one!)

# The 2nd Website

It's been a while since I've seen this. I'm not sure how I worked with light
mode honestly. This has similar content to the first one, but I worked quite
hard in fleshing it out, such as adding the pattern rendering capabilities
; u;)b

As expected, eventually it became a pain to code in HTML, I think it's one of
the main reasons why I tried Vue in the next version

## VSRG Rendering

This one had a fancy Vertical Scrolling Rhythm Game (VSRG) Pattern page. All
of these patterns are rendered using JavaScript!

If you took a look at the pre-rendered HTML, you see `<div>` blocks like this

```html
<div class="pattern-data" data-keys="4">
  ;  o ;
  ;   o;
  ;  o ;
  ; o  ;
  ;  o ;
  ;   o;
  ;  o ;
</div>
```

The JavaScript included at the bottom then draws a new `<canvas>` element for
each `<div class="pattern-data">` found. The end result is pretty good:

![image](/assets/images/posts/2021-07-25-website-html/img.png)

If there were multiple patterns, it will slot them into a
[Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/),
so it automatically scrolls through the image every few seconds!
