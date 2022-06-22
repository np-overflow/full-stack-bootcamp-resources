# Exploring styles

* Previously, we styled our code using UnoCSS
* UnoCSS provided us "utility" classes to style our elements
* It isn't the first library to implement this
  * The idea of "utility" classes was widely popularized by [TailwindCSS](https://tailwindcss.com)

Let's install UnoCSS in our project! In Powershell, run

```shell
pnpm install -D unocss
```

---
layout: two-cols
---

# UnoCSS with Vite

* UnoCSS has exclusive support for Vite, which is great for us 😍
* To add UnoCSS to Vite, we use the Vite configuration file

> Remember to add the comma after `vue()`

::right::

`vite.config.js`

```javascript {all|4|10|all}
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), 
        unocss()
    ],
    build: {
        outDir: '../../dist/examples/firebase'
    }
})
```

---
layout: two-cols
---

# UnoCSS with Vite

* We want to enable some convenience features in UnoCSS
* Create a new file `uno.config.js`

::right::

`uno.config.js`

```javascript
import {defineConfig} from 'unocss'

import {presetUno} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify()
    ],
    transformers: [
        transformerDirective(),
        transformerVariantGroup()
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto Flex', 'sans-serif'],
        },
    },
})
```

---
layout: two-cols
---

# UnoCSS with Vite

* Then, we need to import UnoCSS in `main.js`

::right::

`main.js`

```javascript {all|4}
import { createApp } from 'vue'
import { initializeApp } from 'firebase/app';

import 'uno.css'

import App from './App.vue'

const firebaseConfig = {
  apiKey: 'AIzaSyAWTQczJnVmx_xn3lGAyBLB129tamE-28g',
  authDomain: 'overflow-bootcamp.firebaseapp.com',
  databaseURL: 'https://overflow-bootcamp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'overflow-bootcamp',
  storageBucket: 'overflow-bootcamp.appspot.com',
  messagingSenderId: '877760255311',
  appId: '1:877760255311:web:829f8938e945b185cfa13a',
  measurementId: 'G-CQGF65LHS5'
};

initializeApp(firebaseConfig)

const app = createApp(App)
app.mount('#app')
```

