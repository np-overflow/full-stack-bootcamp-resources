---
layout: two-cols
---

# Structure of HTML

* Combining HTML with CSS and JS to build a coherent website

::right::

`index.html`, a basic HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script></script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

* Tells the browser that this is an HTML5 file

::right::

`index.html`

```html {1}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script></script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

* Start of HTML

::right::

`index.html`

```html {2,10}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script></script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

* HTML `head`
* The `head` let's the browser know what scripts (Javascript files) and styles (CSS files) to load

::right::

`index.html`

```html {3-6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script></script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

* Scripts and styles can be **inline** or separate, in its own file

> This is an inline script

::right::

`index.html`

```html {4}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>console.log("hello")</script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

* Scripts and styles can be inline or **separate, in its own file**

> This is a script in its own file

::right::

`index.html`

```html {4}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js"></script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

`script.js`

```javascript
console.log("hello")
```

---
layout: two-cols
---

# Structure of HTML

* In order to use ESM imports, we have to specify `type="module"` in the script tag
* This lets the browser know we're using ESM imports

::right::

`index.html`

```html {4-8}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module" src="script.js"></script>
    <script type="module">
      import { getStudents } from "./students.js"
      console.log("Or an inline script")
    </script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

This is an inline stylesheet 

::right::

`index.html`

```html {5-9}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js"></script>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

---
layout: two-cols
---

# Structure of HTML

This is a stylesheet in its own file

::right::

`index.html`

```html {5}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>
```

`style.css`

```css
body {
  margin: 0;
}
```
