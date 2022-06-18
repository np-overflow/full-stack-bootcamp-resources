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
* Copy the JSON
* Click on "Continue to console"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RegisterApp-003.png" />

---
layout: two-cols
---

# Auth (Code) - Init

* Create new file 'firebase.js' under src folder
* Paste the JSON into 'firebase.js'

::right::

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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

const app = initializeApp(firebaseConfig);
const authentication = getAuth();
const database = getDatabase();

export default { app, authentication, database }
```

---
layout: two-cols
---

# Auth (Code - HTML) - Register

* Create a view component under 'src/components' folder
* Create a view template
* Alternative way, copy & paste the code

::right::

```html
<!-- <template> -->
    <table>
        <thead>
            <tr>
                <th>Login | Registration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input v-model="email" placeholder="Email" ref="email" /></td>
            </tr>
            <tr>
                <td><input v-model="password" placeholder="Password" ref="password" /></td>
            </tr>
        </tbody>
        <tfoot>
            <button @click="register">Register</button>
            <button @click="login">Login</button>
        </tfoot>
    </table>
<!-- </template> -->
```

---
layout: two-cols
---

# Auth (Code - CSS) - Register

* Add basic css design

::right::

```css
/* <style scoped> */
table {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
/* </style> */
```

---
layout: two-cols
---

# Auth (Code - JS) - Register

* Create a function to handle signup event

::right::

```javascript
// <script steup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authentication = getAuth();

export default {
    methods: {
        register: function () {
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            createUserWithEmailAndPassword(authentication, email, password)
                .then((credential) => {
                    alert('SignUp ok, details in console panel')
                    console.log(credential.user);
                })
                .catch((error) => alert(error.message));
        }
    }
}
// </script>
```

---
layout: two-cols
---

# Auth (Code - JS) - LogIn

* Create a function to handle login event

::right::

```javascript
// <script steup>
import { /** ... */, signInWithEmailAndPassword } from "firebase/auth";

export default {
    methods: {
        login: function () {
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;

            signInWithEmailAndPassword(authentication, email, password)
                .then((credential) => {
                    alert('SignIn ok, details in console panel')
                    console.log(credential.user);
                })
                .catch((error) => alert(error.message));
        },

        register: function () { /** ... */}
      }
    }
// </script>
```
