---
theme: geist
colorSchema: light
highlighter: shiki
drawings:
  persist: true
fonts:
  sans: Inter
  mono: Jetbrains Mono
  weights: 200,400,600,800

info: |
  # Overflow Full Stack Bootcamp

  Day one

  Links to other slides:
    * [Day one](https://bootcamp.np-overflow.club/day-one)
    * [Day two](https://bootcamp.np-overflow.club/day-two)
    * [Day three](https://bootcamp.np-overflow.club/day-three)

src: introduction.md
---

---
layout: cover
---

# Games

10.15am - 11.00am

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: cover
---

# HTML, CSS, JS

11.00am - 12.15pm

<style>
h1 {
  background-color: orange;
  background-image: linear-gradient(45deg, orange 10%, orangered 50%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---
layout: two-cols
---

# HTML, CSS, JS

* HTML: Hypertext Markup Language
  * Provides the content of your webpage
  
* CSS: Cascading Style Sheets
  * Provides styling of your webpage

* JS: Javascript
  * Provides the functionality of your webpage
  
::right::

<div flex="~ col" class="h-full justify-center">
  <div class="flex justify-between">
    <img class="w-32" src="https://api.iconify.design/logos:javascript.svg"/>
    <img class="w-32" src="https://api.iconify.design/logos:css-3.svg"/>
  </div>
  <img class="w-32 self-center" src="https://api.iconify.design/logos:html-5.svg"/>
</div>

<style>
  ul {
    list-style: disc;
    padding-left: 1.25em;
  }
</style>

---

# HTML

##### Headings

<RunnerWebsite code="<h1>hello</h1><h2>Smaller hello</h2>">

```html
<h1>hello</h1>
<h2>Smaller hello</h2>
```

</RunnerWebsite>

<br/>

##### Buttons

<RunnerWebsite code="<button>BUTTOTOOTTN</button>">

```html
<button>BUTTOTOOTTN</button>
```

</RunnerWebsite>
