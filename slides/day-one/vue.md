---
layout: two-cols
---

# Vue

* Progressive web framework
  * Gradually implementation into existing applications
* Performant
  * Truly reactive
  * Compiler optimized
  * Rarely requires manual optimization 
* No, definitely not React
  * Oh look, there's no ~~`useFootGun`~~ `useEffect`*

::right::

<div flex="~ col" class="h-full justify-center">
  <img class="w-32 self-center" src="https://api.iconify.design/logos:vue.svg"/>
</div>

---

# Vue

* Use Vue 3
* Prefer Composition API over Options API
  * If you're using the Vue documentation, remember to toggle this!

---

# Vue components

* A core part of Vue is its support for **components**
* Components are like an HTML element
  * Shows something on the screen
  * Can contain other components
  * Can be reused
* Components help you organize and build scalable code

---
layout: two-cols
---

# Vue components

Components are simply objects with a few properties

* `template`: what to show on the screen
* `setup`: a function that returns an object
  * Properties from this returned object can be used in the `template`

---
layout: two-cols
---

# Vue components

* Use backticks (`) to create multi-line strings
* Template is the usual HTML content

::right::
  
`index.js`
```javascript {all|2-6}
const App = {
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `,
  setup() {
    return {
      message: 'Hello, world!'
    }
  }
}
```

---
layout: two-cols
---

# Vue components

* Use `{{` and `}}` to interpolate (fancy word for embed) variables

::right::
  
`index.js`
```javascript {4}
const App = {
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `,
  setup() {
    return {
      message: 'Hello, world!'
    }
  }
}
```

---
layout: two-cols
---

# Vue components

* Object properties can also be functions!
* `setup() {}` creates a property `setup` which is a function

::right::
  
`index.js`
```javascript {7,11}
const App = {
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `,
  setup() {
    return {
      message: 'Hello, world!'
    }
  }
}
```

---
layout: two-cols
---

# Vue components

* Object returned from `setup` function can be used in `template`

::right::
  
`index.js`
```javascript {4,9}
const App = {
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `,
  setup() {
    return {
      message: 'Hello, world!'
    }
  }
}
```

---
layout: center
---

<div class="text-center">

# ⚠️ Demo on screen ⚠️

🙌 Remember to follow along! 🙌

</div>

---
layout: two-cols
---

# Demo

1. Install [Visual Studio <u>**Code**</u>](https://code.visualstudio.com/)
    * This is different from **Visual Studio**

<v-clicks>

2. Create a new file called `index.html`
    * From VSCode: `File` -> `New File`

3. Paste in the boilerplate on the right
    * We went through this earlier

4. Open the file in your browser
    * From File Explorer: Double click the file

</v-clicks>


::right::

`index.html`
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

# Vue

* To import Vue, simply add this line inside your `script` tag

```html {all|5}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      import { createApp } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
    </script>
    <style></style>
  </head>
  <body>
    <h1>HELLO!</h1>
  </body>
</html>

```

---

# Vue 

* Create a Vue application with the `createApp` function
* A Vue application needs a root component

```html
<script>
  import { createApp } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
  const app = createApp({
    template: `
      <h1>This is the root component!</h1>
    `
  })
</script>
```

---
layout: two-cols
---

# Event handlers

* HTML elements produce **events** that we can *listen* to
  * For example, when a button is clicked, the `click` event fires

* When we subscribe to an event, we provide some JS that's ran when they're triggerred
  * Also known as an event handler

::right::

`{ setup }`
```javascript
return {
  clicked() {
    // do something
  }
}
```

`{ template }`
```html {all|1}
<button @click="clicked">
  Click me!
</button>
```

---
layout: two-cols
---

# Vue directives

* Additional attributes you can add to an element
* These attributes modify the behavior of the element
* Default Vue directives are prefixed with `v-` [^1]

::right::

`{ setup }`
```javascript
return {
  showMessage: true
}
```

`{ template }`
```html
<div v-if="showMessage === true">
  I will only show if `message` is "Hello, world!"
</div>
```

[^1]: [Default directives](https://vuejs.org/api/built-in-directives.html#built-in-directives)

---
layout: center
---

# Quiz

---

# Vue reactivity

* Reactivity is used to update content shown on the screen
* For example, updating a header as the user types into an `input`
* Vue has two ways to create reactive values
  * `ref`: use for primitive values
  * `reactive`: use for objects
* Any reactive values has to be created in the `setup` function
  
```html {all|2}
<script>
  import { createApp, ref, reactive } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
  const app = createApp({
    template: `
      <h1>This is the root component!</h1>
    `
  })
</script>
```

---

# Vue reactivity

##### Using`ref`

<br/>

```html {all|6|10|11|all}
<script>
  import { createApp, ref, reactive } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
  const app = createApp({
    setup() {
      const msg = ref('Hello, world!')
      return {
        msg
      }
    },
    template: `
      <h1>{{ msg }}</h1>
      <input v-model="msg" />   `
  })
</script>
```

---

# Vue reactivity

##### Using `reactive`

<br/>

```html {all|5-7|13-14|all}
<script>
  import { createApp, ref, reactive } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
  const app = createApp({
    setup() {
      const state = reactive({
        msg: 'Hello, world!'
      })
      return {
        state,
      }
    },
    template: `
      <h1>{{ state.msg }}</h1>
      <input v-model="state.msg" />   `
  })
</script>
```

---

# Vue computed values

* Computed values are reactive values **derived** from other reactive values

```html {all|5-7|13-14|all}
<script>
  import { createApp, ref, reactive } from 'https://unpkg.com/vue@3.2.37/dist/vue.esm-browser.js'
  const app = createApp({
    setup() {
      const msg = ref('Hello, world!')
      const msgLength = computed(function() {
        return msg.value.length
      })
      return {
        msg,
        msgLength
      }
    },
    template: `
      <h1>{{ msgLength }}</h1>
      <input v-model="state.msg" />   `
  })
</script>
```

---

# Vue watchers

* Watchers are used to watch for changes in a reactive value

`watch`, `watchEffect`

---

# Vue
