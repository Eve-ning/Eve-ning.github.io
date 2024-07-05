---
layout: article
titles: Projects
key: page-about
---

> :warning: _Oh god this is ugly!_
> I'm working on it! Also, these are outdated, I'll fix it in the coming days

[FRModel](https://github.com/Eve-ning/FRModel) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/PyTorch.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Docker.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GCP.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Terraform.svg"/>

**Computer-Vision Tree Classification from Multispectral Drone Imagery**

This project aims to estimate secondary forest recovery by using metrics
derived from aerial drone imagery. We achieve this complex transformation of
imagery to metric using a well performing CNN backbone, EfficientNetB1 and
further improve its performance through a Semi-Supervised Learning framework,
FixMatch.

I'm responsible for anything engineering:

- MLOps / DevOps
- ML Engineering
- Python Development
- Cloud Engineering

And... I do a little management too:

- Jira
- Confluence

[Re:amber](https://github.com/Eve-ning/reamber) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/CPlusPlus.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Qt.svg"/>

**osu!mania SV mapping GUI tool for Windows**

Those unfamiliar with osu!mania, it's a Rhythm Game I mostly play, and it's also
one of the reasons I first started programming. I wanted to create a tool that
aids in level-design (a.k.a. mapping), thus `amber` was born.

At that time, `amber` was entirely coded with C++, as a simple terminal tool

One of my first few languages
is C++, and `amber` was
a more flexible framework Qt.
It has a long history and one of the main reasons why I program.


[Re:amberPy](https://github.com/Eve-ning/reamberPy) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>

This is a **Python** package expected to cover most VSRG
formats,including: `.osu .sm .ojm .bms .qua`. The aim is to create an *
*open-source** library that VSRG programmers use to improve their Python skills
while enjoying the game. This is still under developement.

[Django - re:amberPy](https://evening-osu.herokuapp.com/analytics/render/) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/HTML5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Django.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Azure.svg"/>

Using Django, I pivot off of `re:amberPy` to create an online tool hosted by
Heroku, hosted on Microsoft Azure

**Previous Website** ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/GitHub.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Html5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Vuejs.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/JavaScript.svg"/>

Using Bootstrap 5, I made this website from scratch :)
Not a fan of web development, but I'm proud of what I have done here.
Special Thanks to [https://twitter.com/IceDynamix](IceDynamix)
for introducing me to Vue!. It was also hosted on GitHub Pages

[Streamlit - re:amberPy](https://share.streamlit.io/eve-ning/streamlit-example/analysis.py) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/HTML5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Streamlit.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Azure.svg"/>

Using Streamlit, with `re:amberPy`
I create another online tool hosted by Streamlit Cloud!

[vsrgtools](https://github.com/Eve-ning/vsrgtools) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/RLang.svg"/>
R-Variant of re:amberPy

[sv-tool](https://github.com/Eve-ning/sv-tool) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/CPlusPlus.svg"/>
Ancient C++ CLI of re:amberPy

[ARXScore](https://github.com/Eve-ning/ARXScore) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>
An XGBoost estimator for VSRG map difficulty estimation

[aleph0](https://github.com/Eve-ning/aleph0) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/Python.svg"/>
Python code used to generate the visual Beatmap Aleph-0 Extended By LeaF.

[numpy_as_strided_guide](https://github.com/Eve-ning/numpy_as_strided_guide) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/LaTeX.svg"/>
A LaTeX Document on how NumPy `as_strided`
operates,

[ppshift_ml](https://github.com/Eve-ning/ppshift_ml) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/PyTorch.svg"/>
An early approach on map difficulty estimation using DNNs.

[SV-Crash-Course-LaTeX](https://github.com/Eve-ning/SV-Crash-Course-LaTeX) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/LaTeX.svg"/>
A LaTeX document tutorial on how SVs in osu! operate.

<script>
function getFileName(path) {
  const segments = path.split('/');
  const fileNameWithExtension = segments.pop();
  const fileName = fileNameWithExtension.split('.')[0];
  return fileName;
}
document.addEventListener('DOMContentLoaded', function() {
  const svgImages = document.querySelectorAll('img.projects-icon');

  svgImages.forEach(function(img) {
    img.setAttribute('title', getFileName(img.getAttribute('src')));
  });
});
</script>
