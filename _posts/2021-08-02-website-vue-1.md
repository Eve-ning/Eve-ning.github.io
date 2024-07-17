---
title: Website Vue 1
tags: [ Website, GitHub, Bootstrap, VueJS, JavaScript ]
project:
  status: completed
  url: https://eve-ning.github.io/website-vue-1/
  repo: https://github.com/Eve-ning/website-vue-1/
---

The first website I built using a JavaScript framework, VueJS!

<!--more-->

> **Websites Directory**
> - [Ver. 1 Website (Jekyll)]({%- post_url 2020-02-23-website-jekyll -%})
> - [Ver. 2 Website (HTML)]({%- post_url 2021-07-25-website-html -%})
> - [Ver. 3 Website (Vue 1)]({%- post_url 2021-08-02-website-vue-1 -%})
> - [Ver. 4 Website (Vue 2)]({%- post_url 2021-12-20-website-vue-2 -%})
> - [Ver. 5 Website (Svelte)]({%- post_url 2023-12-03-website-svelte -%})
> - Ver. 6 Website (this one!)

# The 3rd Website

This has a very similar look to my previous website in HTML, it

During that time, I was knee-deep in doing software development. I looked at my
website, written in HTML5 at the time, and thought to approach web dev similarly
too! That's when my friend ababa (formerly IceDynamix) introduced to me VueJS,
which was what I needed.

## Refactoring

I think the biggest appeal in VueJS is the
[Components](https://vuejs.org/guide/essentials/component-basics.html), which
are kind of like Callable functions within the website. This means that if we
had any reusable elements, we can just invoke components repeatedly. Much like
functions, we can also include **arguments**

```html
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />
```

Vue also allows for fancy logic, much like most programming languages. What
these mean is that I can now refactor my web page files **a lot**.

One of the irks of my previous HTML website is the boilerplate code. We take
an excerpt from my VSRG Pattern repository code:

```html
<div class="pattern-card">
  <div class="pattern-header">Trills</div>
  <div class="pattern-desc">Repeating <code>ABAB...</code> pattern</div>
  <div class="pattern-data" data-keys="7">
      ; o  o  ;
      ;  o  o ;
      ...
  </div>
  <div class="pattern-data" data-keys="7"> ... </div>
  <div class="pattern-data" data-keys="4"> ... </div>
  <div class="pattern-data" data-keys="4"> ...  </div>
</div>
```

![image](/assets/images/posts/2021-07-25-website-html/img.png)

This is used to render many patterns into a canvas, then slot it into a
[Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/),

While we've abstracted much of the boilerplate into our JavaScript, it still is
a pain to scroll through thousand lines of code to edit patterns.

To solve this, we simply moved the patterns into a separate **JSON** file, load
it in using `import`, then use a `for loop` then render them.
This basically decouples the data from the visualization logic, making it much
cleaner!

The high-level logic is presented below, much more lean!
```vue
<template>
  <div class="container p-3">
    <Title>Primary Patterns</Title>
    <Pattern v-bind:data="primary" v-bind:name="'primary'"></Pattern>

    <Title>Secondary Patterns</Title>
    <Pattern v-bind:data="secondary" v-bind:name="'secondary'"></Pattern>

    <Title>Custom Patterns</Title>
    <Pattern v-bind:data="custom" v-bind:name="'custom'"></Pattern>
  </div>
</template>

<script>
import jsonPrimary from "@/assets/primary.json";
import jsonSecondary from "@/assets/secondary.json";
import jsonCustom from "@/assets/custom.json";
import Pattern from "@/components/Pattern";

export default {
  name: "PatternRender",
  components: { Pattern, ... },
  data() {
    return {
      primary: jsonPrimary,
      secondary: jsonSecondary,
      custom: jsonCustom,
    }
  },
};
</script>
```

## Oh no, it broke again

I don't exactly remember the details, but when I was making this website, Vue 3
was on the horizon, and being unfamiliar with how `npm` works, I unintentionally
added Vue 2 and Vue 3 components inside my project. To be honest, I'm not sure
which version of Vue my website is made with anymore, it could be both. I don't
think this is a good definition of back-compatibility.

Regardless, I had spent good time on this website design and I wanted to make
something fresh, so I tried again on a blank slate, with Vue 3 on
[a new website]({%- post_url 2021-12-20-website-vue-2 -%})




