---
layout: cover
---

# Firebase Auth

Allow your apps to have authentication service etc., Login & SignUp

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

# Firebase Auth - Email/Password

* Click on "Email/Password"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-002.png" />

---
layout: two-cols
---

# Firebase Auth - Enable service

* Toggle the "switch" to enable the email/password authentication service
* Click on "Save" button

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-003.png" />

---
layout: two-cols
---

# Firebase Auth - Completed

A "Enabled" status will be show if the authentication service enabled sucessfully

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-Auth-004.png" />

---
layout: two-cols
---

# Firebase Auth - Add App

* Click on "Project Overview"
* Click on "Web project"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-001.png" />

---
layout: two-cols
---

# Firebase Auth - Add App

* Give your app a nickname
* Click on "Register app"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-002.png" />

---
layout: two-cols
---

# Firebase Auth - Add App

* Install Firebase library in your vite project
* Click on "Continue to console"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-003.png" />

---
layout: two-cols
---

# Firebase Auth - Init (JS)

_Initialize firebase app_

Open your main.js, 

Add the code copied from firebase just now
::right::

```javascript
// import { createApp } from 'vue'
// import App from './App.vue'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "********************",
  authDomain: "overflow-bootcamp.firebaseapp.com",
  projectId: "overflow-bootcamp",
  storageBucket: "overflow-bootcamp.appspot.com",
  messagingSenderId: "877760255311",
  appId: "********************",
  measurementId: "G-CQGF65LHS5"
};

initializeApp(firebaseConfig);

// createApp(App).mount('#app')
```

---
layout: two-cols
---

# Firebase Auth - SignUp (HTML)

_Basic HTML_

* Create a view component
* Create a form with 2 text input and 1 submit button
* Alternative way, copy & paste the code

::right::

```html
<!-- <template scoped> -->
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet' type='text/css'>
  <div class='login'>
    <h2>Register</h2>
    <input id='txtemail' name='email' placeholder='E-Mail Address' type='text'>
    <input id='txtpassword' name='password' placeholder='Password' type='password'>
    <input id='btnSubmit' class='animated' type='submit' value='Register' v-on:click="register()">
  </div>
<!-- </template> -->
```

---
layout: two-cols
---

# Firebase Auth - SignUp (JS)

_Basic Javascript_

Code to create an account using Firebase Auth service

::right::

```javascript
// <script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase Initialization
const auth = getAuth();

function register() {
  const email = $('input#txtemail').val();
  const password = $('input#txtpassword').val();

  createUserWithEmailAndPassword(auth, email, password)
    .then((credential) => {
      alert('SignUp ok, details in console panel')
      console.log(credential.user);
    })
    .catch((error) => alert(error.message));
}
// </script>
```

---
layout: two-cols
---

# Firebase Auth - SignIn (HTML)

_Addon HTML code_

::right::

```html
<!--     <input id='txtpassword' name='password' placeholder='Password' type='password' /> -->
<!--     <input id='btnSignUp' class='animated' type='submit' value='Register' v-on:click="register()" /> -->
         <input id='btnSignIn' class='animated' type="submit" value='Log In' v-on:click="login()" />
<!--   </div> -->
<!-- </template> -->
```

---
layout: two-cols
---

# Firebase Auth - SignIn (JS)

_Addon JS code_

::right::

```javascript
// <script setup>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function register() { /** Magic code */ }

function login() {
  const email = $('input#txtemail').val();
  const password = $('input#txtpassword').val();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('SignIn ok, details in console panel')
      console.log(userCredential.user);
    })
    .catch((error) => alert(error.message));
}
// </script>
```
