---
layout: article
titles: Projects
key: page-about
---

> :warning: _Oh god this is ugly!_
> I'm working on it! Also, these are outdated, I'll fix it in the coming days

[FRModel](https://github.com/Eve-ning/FRModel) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/pytorch.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/docker.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/gcp.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/terraform.svg"/>

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
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/cpp.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/qt.svg"/>

An osu! SV/BPM mapping tool that evolved from CLI to a GUI tool.
Dusting off this ancient artifact of a program, I recreated re:amber using
a more flexible framework Qt.
It has a long history and one of the main reasons why I program.
Currently, `re:amberPy` is being developed.,

[Re:amberPy](https://github.com/Eve-ning/reamberPy) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>

This is a **Python** package expected to cover most VSRG
formats,including: `.osu .sm .ojm .bms .qua`. The aim is to create an *
*open-source** library that VSRG programmers use to improve their Python skills
while enjoying the game. This is still under developement.

[Django - re:amberPy](https://evening-osu.herokuapp.com/analytics/render/) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/html5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/django.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/azure.svg"/>

Using Django, I pivot off of `re:amberPy` to create an online tool hosted by
Heroku, hosted on Microsoft Azure

**Previous Website** ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/html5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/vuejs.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/js.svg"/>

Using Bootstrap 5, I made this website from scratch :)
Not a fan of web development, but I'm proud of what I have done here.
Special Thanks to [https://twitter.com/IceDynamix](IceDynamix)
for introducing me to Vue!. It was also hosted on GitHub Pages

[Streamlit - re:amberPy](https://share.streamlit.io/eve-ning/streamlit-example/analysis.py) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/github.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/bootstrap.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/html5.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/streamlit.svg"/>
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/azure.svg"/>

Using Streamlit, with `re:amberPy`
I create another online tool hosted by Streamlit Cloud!

[vsrgtools](https://github.com/Eve-ning/vsrgtools) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/rlang.svg"/>
R-Variant of re:amberPy

[sv-tool](https://github.com/Eve-ning/sv-tool) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/cpp.svg"/>
Ancient C++ CLI of re:amberPy

[ARXScore](https://github.com/Eve-ning/ARXScore) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>
An XGBoost estimator for VSRG map difficulty estimation

[aleph0](https://github.com/Eve-ning/aleph0) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/python.svg"/>
Python code used to generate the visual Beatmap Aleph-0 Extended By LeaF.

[numpy_as_strided_guide](https://github.com/Eve-ning/numpy_as_strided_guide) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/latex.svg"/>
A LaTeX Document on how NumPy `as_strided`
operates,

[ppshift_ml](https://github.com/Eve-ning/ppshift_ml) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/pytorch.svg"/>
An early approach on map difficulty estimation using DNNs.

[SV-Crash-Course-LaTeX](https://github.com/Eve-ning/SV-Crash-Course-LaTeX) ---
<img class="projects-icon" src="{{ site.baseurl }}/assets/icons/latex.svg"/>
A LaTeX document tutorial on how SVs in osu! operate.

<script>
function getFileName(path) {
  const segments = path.split('/');
  const fileNameWithExtension = segments.pop();
  const fileName = fileNameWithExtension.split('.')[0];
  return fileName;
}
document.addEventListener('DOMContentLoaded', function() {
  const svgImages = document.querySelectorAll('img.svg');

  svgImages.forEach(function(img) {
    img.setAttribute('title', getFileName(img.getAttribute('src')));
  });
});
</script>
