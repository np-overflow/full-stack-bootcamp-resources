---
layout: two-cols
---

# Vite + Vue ❤️

<v-clicks>

* Vite is a rapid frontend development tool
* Optimized for speed
  * Near instant loading
  * See your changes right after saving the file
* Build your Vue project for production
  * Automagically bundles and optimizes your code
* Extensible
  * Support for Vue, React, Svelte... the list goes on

</v-clicks>

::right::

<div class="h-full flex items-center justify-center">
  <div class="flex items-center justify-center text-7xl">
    <img class="w-32" src="https://api.iconify.design/logos:vitejs.svg"/>
      😍
    <img class="w-32" src="https://api.iconify.design/logos:vue.svg"/>
  </div>
</div>

---
layout: center
---

<div class="text-center">

# ⚠️ Demo on screen ⚠️

🙌 Remember to follow along! 🙌

</div>

---

# Creating a Vite project

You need to install these things first:

* NodeJS
* NPM
* Firebase CLI

---

# NodeJS and NPM

1. Download the `exe` installer file

* If you're on a Mac, just run the `curl get.volta.sh | bash` command in Terminal

2. Run the installer
3. Run the following commands in Powershell (or Terminal if you're on macOS)

[Link to download](https://docs.volta.sh/guide/getting-started#windows-installation)

```bash
volta install node
volta install npm
volta install pnpm
```

---

# Creating a Vite project

To create your project, run the command in Powershell (or Terminal)

```bash
cd /replace/with/your/favorite/directory
pnpm create vite
```

The directory should look something like `C:\Users\qingu\Desktop`

Select the `vue` project type

---

# Vite

* `index.html`
  * Starting point of the Vite application
* `public`
  * Folder containing static assets, i.e. images, etc
  * Files in this folder will retain its original file name when deploying
* `src`
  * Folder containing source code

---
layout: two-cols
---

# Vue SFC

* **SFC**: Single File Components
* Combines CSS, HTML, and JS into a single `.vue` file
* Recommended way to write Vue components
* Provides some time saving features

* `<script setup>` contains the `setup` function
  * Any variables declared here can be used in the template

::right::

`Component.vue`

```vue {all|1-2|1|4-5|7-8|all}
<script setup>
const I_CAN_BE_USED_IN_THE_TEMPLATE = 'hello'
</script>

<template>
  <h1>{{ I_CAN_BE_USED_IN_THE_TEMPLATE }}</h1>
</template>

<style>
</style>
```

---
layout: two-cols
---

# Vue Composables

* Splitting your reactive variables and logic into its own function
* Makes your reactive logic **reusable**
* Example
  * [VueUse](https://vueuse.org/functions.html), a collection of composables

#### Conventions

* File name: `snake-case`
* Composable name: `use*`
  * i.e. `useSomething`, `useFirebase`

---
layout: two-cols
---

# Vue component lifecycle

* Whenever a component shows on the screen, or disappears on the screen, we can tell Vue to call a function
* These functions are called lifecycle hooks

[Read more](https://vuejs.org/guide/essentials/lifecycle.html)

::right::

`Component.vue`
```vue {all|3|5-7|9-11|all}

<script setup>
import {onMounted, onBeforeUnmount} from 'vue'

onMounted(function () {
    console.log('The component showed on the screen')
})

onBeforeUnmount(function () {
    console.log('The component is about to disappear')
})
</script>

<template>
    <h1>HELLO!</h1>
</template>
```

---

# Vue slots



---
layout: two-cols
---

# Vue directives

These are some directives we might be using later

* `v-bind`: "binds" a reactive value to a specified attribute

Please familiarize yourself with the default directives available!

::right::

`{ setup }`

```javascript
return {
    classNames: ref('text-red-100')
}
```

`{ template }`

```html
<input v-bind:class="classNames"/>
```
