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

# Create RTDB page

* Create a new page `src/pages/` folder
* Add some table headings

::right::

`RTDB.vue`

```html

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

* Add table values

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

# RTDB (Code - JS) - Create

* Import `getDatabase`, `ref`, `set` from `firebase/database` library
* Initialize a database
* Add create method to handle insert event

::right::

```vue

<script setup>
import {ref} from 'vue'
import {getDatabase, onValue, ref as dbRef} from "firebase/database";

const database = getDatabase()
</script>
```

---
layout: two-cols
---

# RTDB (Code - JS) - Retrieve

* Import `onValue` from `firebase/database` library

::right::

```javascript
// <script>
import { /** ref */, onValue, /** set */} from "firebase/database";

export default {
    data() {
        return {
            studentList: []
        }
    },
    methods: {
        create: function () { /** ... */
        },

        retrieveAll: function () {
            onValue(ref(database, 'student'), (snapshot) => {
                this.studentList = snapshot.val();
            });
        }
    }
}
// </script>
```

---
layout: two-cols
---

# RTDB (Code - JS) - Delete

* Import `remove` from `firebase/database` library

::right::

```javascript
// <script>
import { /** ..., set */, remove} from "firebase/database";

export default {
    data() {/** ... */
    },

    methods: {
        create: function () {/** ... */
        },

        retrieveAll: function () {/** ... */
        },

        deleteById: function (id) {
            remove(ref(database, `student/${id}`));
        },
    }
}
// </script>
```

---
layout: two-cols
---

# RTDB (Code - JS) - Enable TextBox For Editing

* Create a new function to enable textbox

::right::

```javascript
export default {
    data() {
        return {
            /** studentList */
            enabledId: '',
        }
    },
    methods: {
        create: function () {/** ... */
        },

        retrieveAll: function () {/** ... */
        },

        deleteById: function (id) {/** ... */
        },

        enableEdit: function (id) {
            this.enabledId = id;
        }
    }
}
```

---
layout: two-cols
---

# RTDB (Code - JS) - Update

* Create a new function to handle update event
* Step 1 insert new record
* Step 2 delete old record

::right::

```javascript
export default {
    data() {/** ... */
    },
    methods: {
        create: function () {/** ... */
        },

        retrieveAll: function () {/** ... */
        },

        updateById: function (id) {
            const newName = this.$refs[`${id}-name`][0].value;
            const newId = this.$refs[`${id}-id`][0].value;
            const newCourse = this.$refs[`${id}-course`][0].value;

            if ([newName, newId, newCourse].includes('')) {
                alert('1 or more of the given detail is null or empty');
                return;
            }

            set(ref(database, `student/${newId}`), {
                name: newName,
                id: newId,
                course: newCourse
            }).then(() => (newId === id) ? null : this.deleteById(id));

            this.enabledId = '';
        },

        deleteById: function (id) {/** ... */
        },

        enableEdit: function (id) {/** ... */
        }
    }
}
```
