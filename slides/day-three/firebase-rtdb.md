# Firebase Realtime Database

* Allows you to store and manipulate data as an `Object`
* Highly flexible and scalable
* Ability to subscribe to data changes globally

Here's a demo using Firebase Realtime Database
-> [https://bootcamp.np-overflow.club/examples/firebase/#/rtdb](https://bootcamp.np-overflow.club/examples/firebase/#/rtdb)

---
layout: two-cols
---

# Setup

* Click on "Realtime Database"
* Click on "Create Database"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-001.png" />

---
layout: two-cols
---

# Region

* Toggle the dropdown list and<br/>select "Singapore (asia-southeast1)"
* Click on "Next"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-002.png" />

---
layout: two-cols
---

# Mode

* Leave default<br/>"Start in **locked mode**"
* Click on "Enable"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-003.png" />

---
layout: two-cols
---

# Rules

* Select "Rules" from the Tab
* Change ".read" from `false` to `true`
* Change ".write" from `false` to `true`
* Click on "Publish"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-004.png" />

---
layout: two-cols
---

# Continuation from yesterday

* Let's refactor our code into composables
* Create a new file `composables/use-auth.js`

::right::

```javascript
import { ref, computed } from 'vue'
import { getAuth } from "firebase/auth";

export function useAuth() {
  const auth = getAuth()

  const loading = ref(true)
  const user = ref(auth.currentUser)
  const isAuthenticated = computed(() => !!user.value)

  auth.onIdTokenChanged(authUser => {
    user.value = authUser
    loading.value = false
  })

  return {
    auth,
    user,
    loading,
    isAuthenticated,
  }
}
```

---

# Create RTDB Composable

<div grid="~ cols-2" class="gap-5">
<div>

* Recap: what is a composable?
  * Splitting your reactive variables and logic into its own function
  * Makes your reactive logic **reusable**
* Create your file in the `composables/` folder

</div>
<div>

`use-rtdb.js`

```javascript
import {ref} from 'vue'
import {getDatabase, onValue, ref as dbRef} from "firebase/database";

export function useRTDB(path) {
    const data = ref(undefined)

    const database = getDatabase()
    const docRef = dbRef(database, path)

    onValue(docRef, (snapshot) => {
        data.value = snapshot.val()
    })

    return {data, database}
}
```

</div>
</div>

---
layout: two-cols
---

# Create RTDB page

* Create a new page `src/pages/` folder
* Use our composable to get data from RTDB

::right::

`RTDB.vue`

```vue

<script setup>
import {useRTDB} from "../composables/use-rtdb.js";

const {data, database} = useRTDB('students')
</script>
```

---
layout: two-cols
---

# Create RTDB page

* To show the data in a table, first we add the table headings

::right::

`RTDB.vue`

```vue

<template>
    <table class="w-full">
        <thead>
        <tr>
            <th class="min-w-50">
                Name
            </th>
            <th class="min-w-50">
                Course
            </th>
            <th class="min-w-50">
                Favorite number
            </th>
            <th>
                UID
            </th>
            <th>
                Email
            </th>
        </tr>
        </thead>
    </table>
</template>
```

---
layout: two-cols
---

# Create RTDB page

* Display values in our table using the `v-for` directive

::right::

`RTDB.vue`

```html

<template>
    <!-- <table><thead>...</thead> -->
    <tbody>
    <tr v-for="{ uid, email, name, course, number } in data" class="border-b-2 border-orange-100">
        <td>
            {{ name }}
        </td>
        <td>
            {{ course }}
        </td>
        <td>
            {{ number }}
        </td>
        <td>
            {{ uid }}
        </td>
        <td>
            {{ email }}
        </td>
    </tr>
    </tbody>
    <!-- </table> -->
</template>
```

---
layout: two-cols
---

# Create items in RTDB

* To let users add their own entry to RTDB, let's create a form
* We also make a function `create`, that adds the entries using our form values

::right::

```vue

<script setup>
import {set, ref as dbRef} from "firebase/database"
import {getAuth} from 'firebase/auth'
import {ref} from 'vue'

/**
 * Other code we wrote on previous slides
 */

const user = getAuth().currentUser

const form = ref({
    name: '',
    course: '',
    number: 0
})

function create() {
    set(dbRef(database, `students/${user.value.uid}`), {
        ...form.value,
        uid: user.value.uid,
        email: user.value.email,
    })
}
</script>
```

---
layout: two-cols
---

# Create items in RTDB

* Let's show the form in the `template`

::right::

`RTDB.vue`

```vue

<template>
    <!-- Other code from previous slides -->
    <form @submit.prevent="create">
        <div class="grid gap-2 grid-cols-1 md:grid-cols-3">
            <input type="text" v-model="form.name" placeholder="Jimmy">
            <input type="text" v-model="form.course" placeholder="Infocomm Technology">
            <input type="number" v-model="form.number">
        </div>
        <br/>
        <button type="submit">Send 🚀</button>
    </form>
</template>
```

---
layout: center
---

<div class="text-center">

# ⚠️ Demo on screen ⚠️

🙌 This part does not have slides! Remember to follow along! 🙌

</div>

