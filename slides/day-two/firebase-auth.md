# Firebase Auth

* Add authentication functionality into your application automagically!
* Firebase Auth **helps you store your user data**, etc
* You only need to provide a user interface!

Here's a demo using Firebase Auth
-> [https://bootcamp.np-overflow.club/examples/firebase/#/auth](https://bootcamp.np-overflow.club/examples/firebase/#/auth)

---
layout: two-cols
---

# Firebase Auth

* Click on "Authentication" under the Build (left nav bar)
* Click on "Get started" button

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-001.png" />

---
layout: two-cols
---

# Email/Password

* Click on "Email/Password"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-002.png" />

---
layout: two-cols
---

# Enable service

* Toggle the "switch" to enable the email/password authentication service
* Click on "Save" button

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-003.png" />

---
layout: two-cols
---

#  Completed

A "Enabled" status will be show if the authentication service enabled sucessfully

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-004.png" />

---
layout: two-cols
---

# Add App

* Click on "Project Overview"
* Click on "Web project"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-001.png" />

---
layout: two-cols
---

# Add App

* Give your app a nickname
* Click on "Register app"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-002.png" />

---
layout: two-cols
---

# Add App

* Install Firebase library in your vite project
    1. `cd /path/to/project`
    2. `pnpm i firebase`
* Copy the JSON
* Click on "Continue to console"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-003.png" />

---

# Init Firebase

1. Add your Firebase config inside `main.js`

<br/>

```javascript
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "********************",
    authDomain: "overflow-bootcamp.firebaseapp.com",
    databaseURL: "********************",
    projectId: "overflow-bootcamp",
    storageBucket: "overflow-bootcamp.appspot.com",
    messagingSenderId: "877760255311",
    appId: "********************",
    measurementId: "G-CQGF65LHS5"
};

initializeApp(firebaseConfig)
```

---
layout: two-cols
---

# Create auth page

* Create a new page under 'src/pages/' folder
* Alternative way, copy & paste the code

::right::

`Auth.vue`

```vue

<template>
    <form @submit.prevent="login">
        <input type="email" placeholder="jimmy@np-overflow.club" v-model="form.email">
        <br/>
        <input type="password" v-model="form.password" placeholder="jimmyslittlesecret">
        <br/>
        <div class="flex gap-3 justify-between">
            <button variant="alternative" @click="register">Register</button>
            <button type="submit">Login</button>
        </div>
    </form>
</template>
```

---
layout: two-cols
---

# Register function

* Create a function to handle register event

::right::

```html

<script setup>
    import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

    const auth = getAuth()
    const form = reactive({
        email: '',
        password: '',
        errorMessage: null
    })

    async function register() {
        form.errorMessage = null
        console.log('register', form)
        try {
            const credentials = await createUserWithEmailAndPassword(auth, form.email, form.password)
            console.log(credentials)
        } catch (e) {
            form.errorMessage = e.message
        }
    }
</script>
```

---
layout: two-cols
---

# Login

* Create a function to handle login event

::right::

```vue

<script setup>
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth';

/**
 * Register function from previous slide
 * ...
 */

async function login() {
    form.errorMessage = null
    try {
        const credentials = await signInWithEmailAndPassword(auth, form.email, form.password)
        console.log(credentials)
    } catch (e) {
        form.errorMessage = e.message
    }
}
</script>
```

---

# Logout

* Create a function to handle logout event

```vue

<script setup>
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from 'firebase/auth';

/**
 * Register and login functions from previous slide
 * ...
 */

async function logout() {
    form.errorMessage = null
    try {
        await signOut(auth)
    } catch (e) {
        form.errorMessage = e.message
    }
}
</script>
```
