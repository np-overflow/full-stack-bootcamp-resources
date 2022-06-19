# HTML elements

* Elements are the basic building blocks of what you see on a webpage
  * Like text, buttons, etc!
* Elements usually contain other elements

<br/>

<RunnerWebsite code="<h1>I am an element</h1><button>So am I</button>">

```html
<h1>I am an element</h1>
<button>So am I</button>
```

</RunnerWebsite>

---
layout: two-cols
---

# HTML tags

* Specify the type of element
* Many types of elements you can choose from [^1]
  * Headings
  * Buttons
  * Input fields
  * Cat 🙀

*Create a tag* by wrapping an element type in `<` and `>`

Every tag **needs** a closing tag, which is created by wrapping the element type in `</` and `>`

::right::

<div class="flex flex-col h-full justify-center">

##### Headings

<RunnerWebsite code="<h1>hello</h1><h2>Smaller hello</h2>">

```html {all|1,3|4,6|all}
<h1>
  hello
</h1>
<h2>
  Smaller hello
</h2>
```

</RunnerWebsite>

<br/>

##### Buttons

<RunnerWebsite code="<button>BUTTOTOOTTN</button>">

```html {all|1,3}
<button>
  BUTTOTOOTTN
</button>
```

</RunnerWebsite>
</div>

[^1]: [List of HTML tags, please read at your own free time](https://www.w3schools.com/TAGs/)

---
layout: two-cols
---

<div class="flex flex-col items-between">

# HTML attributes

* Customize elements [^1]
  * `style`
  * `type`
  * etc

<br />

##### Inputs

<RunnerWebsite code='<div style="padding: 0.3em;"><input type="submit"/><br/><input type="date"/><br/><input type="checkbox"/></div>'>

```html {all|2,4,6|all}
<input 
  type="submit" />
<input 
  type="datetime" />
<input 
  type="checkbox" />
```

</RunnerWebsite>
</div>

::right::

<div class="flex flex-col h-full ml-5 justify-center">

##### Headings

<RunnerWebsite code='<h1 style="color: red;">hello</h1><h2 style="color: blue;">Smaller hello</h2>'>

```html {all|2,6|all}
<h1 
  style="color: red;">
  hello
</h1>
<h2 
  style="color: blue;">
  Smaller hello
</h2>
```

</RunnerWebsite>

<br/>

##### Buttons

<RunnerWebsite code='<button style="background: red;">BUTTOTOOTTN</button>'>

```html {all|2|all}
<button 
  style="background: red;">
  BUTTOTOOTTN
</button>
```

</RunnerWebsite>
</div>

[^1]: [More about attributes](https://www.w3schools.com/htmL/html_attributes.asp)

---
layout: center
---

# Quiz
