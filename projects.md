---
layout: article
titles: Projects
key: page-about
aside:
  toc: true
---

# Main Projects

## [FRDC](https://github.com/FR-DC/FRDC-ML/)

<div class="icon-badge" data-name="PyTorch"></div>
<div class="icon-badge" data-name="PyTorchLightning"></div>
<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Docker"></div>
<div class="icon-badge" data-name="GCP"></div>
<div class="icon-badge" data-name="Terraform"></div>
<div class="icon-badge" data-name="LabelStudio"></div>

**Computer-Vision Tree Classification from Drone Multispectral Imagery**

![FRML Sample Image]({{ site.baseurl }}/assets/images/projects/frml.png)

This project aims to estimate secondary forest recovery by using metrics
derived from aerial drone imagery. We achieve this complex transformation of
imagery to metric using a performant CNN backbone ([EfficientNetB1](https://pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b1.html)) and
further improve its performance through Semi-Supervised Learning ([FixMatch](https://arxiv.org/abs/2001.07685)).

I'm responsible for anything engineering:

- MLOps / DevOps
- ML Engineering
- Python Development
- Cloud Engineering

And... I do a little management too:

- Jira
- Confluence

## [Re:amber](https://github.com/Eve-ning/reamber)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="CPlusPlus"></div>
<div class="icon-badge" data-name="Qt"></div>
<div class="icon-badge" data-name="osu!"></div>

**osu!mania SV mapping GUI tool for Windows**

![Reamber GUI]({{ site.baseurl }}/assets/images/projects/reamber.png)

osu!mania, is the Rhythm Game I mostly play, and it's also one of the reasons I
first started programming! I was inspired
by [Agka](https://osu.ppy.sh/users/64811),
who first created a simple web-tool that normalizes speed. At that time, I used
it a ton to save so much time normalizing live mapped songs, which made me
realise the power of coding.

To challenge myself (and also try out programming)
I wanted to create a tool that aids in level-design (a.k.a. mapping),
I initially created `amber`!

At that time, `amber` was just coded with C++, as a **terminal tool**.
It extends Agka's toolkit to stutters, jumps and more.
As it became an evergrowing toolkit, its limited clunky terminal UI wasn't
breaking even the time-saved and thus I went for a overhaul,
a new effort: `Re:amber`.

`Re:amber`, is built on `Qt`, a GUI building toolkit that I thoroughly enjoyed
using. However, at that time, its only option was C++, so I had to roll with
that ... unfortunately. The choice of programming language became a huge
roadblock in many ways

1. Coding was safer, but slower
2. Compiling was a huge pain (that's why there's no Linux Distribution)

Therefore, every time I want to add a new functionality... it's a few weeks
of time-investment.

Thankfully, it has benefited many mappers, I'm grateful for those who PMed me
that they've made good use of it. Hopefully, it expanded the range of maps that
is possible (without having to resort to Excel).

## [Re:amberPy](https://github.com/Eve-ning/reamberPy)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="osu!"></div>

**VSRG game-file editing toolkit on Python**

> Re:amberPy... I know, odd name. I didn't know why I picked this name, probably
> time to rebrand one day.

`Re:amberPy` is a **Python** package with a similar goal to `Re:amber`. Making
mapping easier for mappers. This extends functionality way further than
what `Re:amber` has done, with the tradeoff that it doesn't have a GUI (yet).
By making this tradeoff, of no GUI and a simpler language, it can now:

- handle most VSRG formats, including: `.osu .sm .ojm .bms .qua`.
- flexible API to (batch) manipulate maps
- work with any OS

On the side, it is also aiming to be a **open-source** library that VSRG
programmers use to improve their Python skills while enjoying the game.

## [Opal](https://github.com/Eve-ning/opal)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="osu!"></div>
<div class="icon-badge" data-name="PyTorchLightning"></div>
<div class="icon-badge" data-name="Streamlit"></div>
<div class="icon-badge" data-name="MySQL"></div>
<div class="icon-badge" data-name="Docker"></div>
<div class="icon-badge" data-name="Bash"></div>

**opal is an osu! player accuracy-prediction model.**

![Opal GUI]({{ site.baseurl }}/assets/images/projects/opal.png)

It's an Machine Learning model which uses a simple Matrix Factorization branch
& Multi-layered Perceptron branch to learn associations between user and maps,
then use those associations to predict new scores never before seen.

It's dependent on [osu-data](https://github.com/Eve-ning/osu-data) which is a
bash script wrapped in Python, so it's uploadable to PyPI. This allows itself
to be installed through `pip` for easy usage.

# Side Projects

Most projects here are unmaintained, so they may not work.
{:.warning}

## [monkeydance](https://dev-evening.itch.io/monkeydance)

<div class="icon-badge" data-name="Unity"></div>
<div class="icon-badge" data-name="CSharp"></div>

A small Unity Game made in 24 Hours, test how fast can you press arrow keys
correctly!

![Monkeydance Game]({{ site.baseurl }}/assets/images/projects/monkeydance.png)

## [Jio](https://github.com/Eve-ning/Jio)

<div class="icon-badge" data-name="Unity"></div>
<div class="icon-badge" data-name="CSharp"></div>

This was made for the Design and Innovation Project (DIP) course in NTU.
{:.info}

JIO is an app for both for social and productivity purposes.
JIO will allow users to meet up virtually with their friends, in a game-like
setting.

![Jio]({{ site.baseurl }}/assets/images/projects/jio.png)

## [vsrgtools](https://github.com/Eve-ning/vsrgtools)

<div class="icon-badge" data-name="RLang"></div>
<div class="icon-badge" data-name="osu!"></div>
R-Variant of re:amberPy

## [sv-tool](https://github.com/Eve-ning/sv-tool)

<div class="icon-badge" data-name="CPlusPlus"></div>
<div class="icon-badge" data-name="osu!"></div>
Ancient C++ CLI of re:amberPy

## [ARXScore](https://github.com/Eve-ning/ARXScore)

<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="osu!"></div>
An XGBoost estimator for VSRG map difficulty estimation

## [aleph0](https://github.com/Eve-ning/aleph0)

<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="osu!"></div>

{%- include extensions/youtube.html id='V5OMJpN00Js' -%}

Python code used to generate the visual Beatmap Aleph-0 Extended By LeaF.

## [numpy_as_strided_guide](https://github.com/Eve-ning/numpy_as_strided_guide)

<div class="icon-badge" data-name="LaTeX"></div>


![numpy_as_strided_guide Preview]({{ site.baseurl
}}/assets/images/projects/numpy_as_strided_guide.png)

A LaTeX Document on how NumPy `as_strided` operates,

## [ppshift_ml](https://github.com/Eve-ning/ppshift_ml)

<div class="icon-badge" data-name="PyTorch"></div>
<div class="icon-badge" data-name="osu!"></div>
An early approach on map difficulty estimation using DNNs.

## [SV-Crash-Course-LaTeX](https://github.com/Eve-ning/SV-Crash-Course-LaTeX)

<div class="icon-badge" data-name="LaTeX"></div>
<div class="icon-badge" data-name="osu!"></div>
A LaTeX document tutorial on how SVs in osu! operate.

## [Django - re:amberPy](https://evening-osu.herokuapp.com/analytics/render/)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="Bootstrap"></div>
<div class="icon-badge" data-name="HTML5"></div>
<div class="icon-badge" data-name="Django"></div>
<div class="icon-badge" data-name="Azure"></div>
<div class="icon-badge" data-name="osu!"></div>

Because Heroku is now on paid plans, the website stopped working
{:.warning}

Using Django, I pivot off of `re:amberPy` to create an online tool hosted by
Heroku, hosted on Microsoft Azure

## [Streamlit - re:amberPy](https://share.streamlit.io/eve-ning/streamlit-example/analysis.py)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Python"></div>
<div class="icon-badge" data-name="Streamlit"></div>
<div class="icon-badge" data-name="osu!"></div>

Using Streamlit, with `re:amberPy`
I create another online tool hosted by Streamlit Cloud!

## Previous Website(s)

<div class="icon-badge" data-name="GitHub"></div>
<div class="icon-badge" data-name="Bootstrap"></div>
<div class="icon-badge" data-name="HTML5"></div>
<div class="icon-badge" data-name="VueJS"></div>
<div class="icon-badge" data-name="Svelte"></div>
<div class="icon-badge" data-name="DaisyUI"></div>
<div class="icon-badge" data-name="SCSS"></div>
<div class="icon-badge" data-name="Sanity"></div>
<div class="icon-badge" data-name="JavaScript"></div>

I have a few prior websites to this, they were built using several technologies
as listed above. I wouldn't say I'm a seasoned web developer, but I'm proud of
how much I've explored in this area :bulb:

You can take a look at how I developed these old websites in my article
[Why did you change your website 4 times ???]({{ site.baseurl
}}/2024/07/03/why-did-you-change-your-website-4-times.html)

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function() {
  const newIcons = document.querySelectorAll('div.icon-badge');
  newIcons.forEach(function(div) {
    const iconName = div.dataset.name;
    const img = document.createElement('img');
    img.setAttribute('src', "{{ site.baseurl }}/assets/icons/" + iconName + ".svg");
    img.classList.add('icon-badge');

    const pathText = document.createElement('span');
    pathText.textContent = iconName;

    div.appendChild(img);
    div.removeAttribute('src');
    img.insertAdjacentElement('afterend', pathText);
  });
});
</script>
