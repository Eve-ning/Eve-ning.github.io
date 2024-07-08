---
layout: article
titles: Projects
key: page-about
aside:
  toc: true
---

# Major Projects

## [FRDC](https://github.com/FR-DC/FRDC-ML/)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/PyTorch.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/PyTorchLightning.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Docker.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GCP.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Terraform.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/LabelStudio.svg"></div>

**Computer-Vision Tree Classification from Drone Multispectral Imagery**

![FRML Sample Image]({{ site.baseurl }}/assets/images/projects/frml.png)

This project aims to estimate secondary forest recovery by using metrics
derived from aerial drone imagery. We achieve this complex transformation of
imagery to metric using a performant CNN backbone (EfficientNetB1) and
further improve its performance through Semi-Supervised Learning (FixMatch).

I'm responsible for anything engineering:

- MLOps / DevOps
- ML Engineering
- Python Development
- Cloud Engineering

And... I do a little management too:

- Jira
- Confluence

## [Re:amber](https://github.com/Eve-ning/reamber)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/CPlusPlus.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Qt.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>

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

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>

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

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/PyTorchLightning.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Streamlit.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/MySQL.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Docker.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Bash.svg"></div>

**opal is an osu! player accuracy-prediction model.**

![Opal GUI]({{ site.baseurl }}/assets/images/projects/opal.png)

It's an Machine Learning model which uses a simple Matrix Factorization branch
& Multi-layered Perceptron branch to learn associations between user and maps,
then use those associations to predict new scores never before seen.

It's dependent on [osu-data](https://github.com/Eve-ning/osu-data) which is a
bash script wrapped in Python, so it's uploadable to PyPI. This allows itself
to be installed through `pip` for easy usage.

# Minor Projects

Most projects here are unmaintained, so they may not work.
{:.warning}

## [monkeydance](https://dev-evening.itch.io/monkeydance)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Unity.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/CSharp.svg"></div>

A small Unity Game made in 24 Hours, test how fast can you press arrow keys
correctly!

![Monkeydance Game]({{ site.baseurl }}/assets/images/projects/monkeydance.png)

## [Jio](https://github.com/Eve-ning/Jio)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Unity.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/CSharp.svg"></div>

This was made for the Design and Innovation Project (DIP) course in NTU.
{:.info}

JIO is an app for both for social and productivity purposes.
JIO will allow users to meet up virtually with their friends, in a game-like
setting.

![Jio]({{ site.baseurl }}/assets/images/projects/jio.png)

## [vsrgtools](https://github.com/Eve-ning/vsrgtools)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/RLang.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
R-Variant of re:amberPy

## [sv-tool](https://github.com/Eve-ning/sv-tool)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/CPlusPlus.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
Ancient C++ CLI of re:amberPy

## [ARXScore](https://github.com/Eve-ning/ARXScore)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
An XGBoost estimator for VSRG map difficulty estimation

## [aleph0](https://github.com/Eve-ning/aleph0)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>

{%- include extensions/youtube.html id='V5OMJpN00Js' -%}

Python code used to generate the visual Beatmap Aleph-0 Extended By LeaF.

## [numpy_as_strided_guide](https://github.com/Eve-ning/numpy_as_strided_guide)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/LaTeX.svg"></div>


![numpy_as_strided_guide Preview]({{ site.baseurl }}/assets/images/projects/numpy_as_strided_guide.png)

A LaTeX Document on how NumPy `as_strided` operates,

## [ppshift_ml](https://github.com/Eve-ning/ppshift_ml)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/PyTorch.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
An early approach on map difficulty estimation using DNNs.

## [SV-Crash-Course-LaTeX](https://github.com/Eve-ning/SV-Crash-Course-LaTeX)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/LaTeX.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>
A LaTeX document tutorial on how SVs in osu! operate.

## [Django - re:amberPy](https://evening-osu.herokuapp.com/analytics/render/)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Bootstrap.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/HTML5.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Django.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Azure.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>

Because Heroku is now on paid plans, the website stopped working
{:.warning}

Using Django, I pivot off of `re:amberPy` to create an online tool hosted by
Heroku, hosted on Microsoft Azure

## [Streamlit - re:amberPy](https://share.streamlit.io/eve-ning/streamlit-example/analysis.py)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Streamlit.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/osu!.svg"></div>

Using Streamlit, with `re:amberPy`
I create another online tool hosted by Streamlit Cloud!

## Previous Website(s)

<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Bootstrap.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/HTML5.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/VueJS.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Svelte.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/DaisyUI.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/SCSS.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/Sanity.svg"></div>
<div class="proj-icon" src="{{ site.baseurl }}/assets/icons/JavaScript.svg"></div>

I have a few prior websites to this, they were built using several technologies
as listed above. I wouldn't say I'm a seasoned web developer, but I'm proud of
how much I've explored in this area :bulb:

You can take a look at how I developed these old websites in my article
[Why did you change your website 4 times ???]({{ site.baseurl
}}/2024/07/03/why-did-you-change-your-website-4-times.html)


<style>
div.proj-icon {
  display: inline;
  margin: 0 5px;
}
div.proj-icon img{
  height: 25px;
  width: auto;
  margin: 0 5px 0 0;
  padding: 3px;
  background-color: #222;
  border-radius: 25%;
}
</style>
<script>
function getFileName(path) {
  const segments = path.split('/');
  const fileNameWithExtension = segments.pop();
  const fileName = fileNameWithExtension.split('.')[0];
  return fileName;
}
document.addEventListener('DOMContentLoaded', function() {
  const projectIcons = document.querySelectorAll('div.proj-icon');
  projectIcons.forEach(function(div) {
    const src = div.getAttribute('src');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.classList.add('proj-icon');

    const pathText = document.createElement('span');
    pathText.textContent = getFileName(src);

    div.appendChild(img);
    div.removeAttribute('src');
    img.insertAdjacentElement('afterend', pathText);
  });
});
</script>
