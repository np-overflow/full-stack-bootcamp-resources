---
layout: two-cols
---

# RTDB (Setup)

* Click on "Realtime Database"
* Click on "Create Database"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-001.png" />

---
layout: two-cols
---

# RTDB (Setup) - Region

* Toggle the dropdown list and<br/>select "Singapore (asia-southeast1)"
* Click on "Next"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-002.png" />

---
layout: two-cols
---

# RTDB (Setup) - Mode

* Leave default<br/>"Start in **locked mode**"
* Click on "Enable"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-003.png" />

---
layout: two-cols
---

# RTDB (Setup) - Rules

* Select "Rules" from the Tab
* Change ".read" from `false` to `true`
* Change ".write" from `false` to `true`
* Click on "Publish"

::right::

<img class="h-full object-contain w-full" src="/images/Firebase-RTDB-004.png" />

---
layout: two-cols
---

# RTDB (Code - HTML) - Layout Table Header

* Create a vue component under `src/components`
* Add FontAwesome css library
* Create a table with header `Name`, `Student ID`, `Course`

::right::

```html
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Course</th>
                <th></th>
            </tr>
        </thead>
    </table>
</template>
```

---
layout: two-cols
---

# RTDB (Code - HTML) - Layout Table Row

* Add `table row` 4 columns
* Each row add 1 `textbox` (Name, StudentID, Course) 
* Last row add 2 `button` (Create, Fetch All)

::right::

```html
<!-- <template> -->
    <!-- thead -->
        <tbody>
            <tr>
                <td><input v-model="name" placeholder="Student Name" ref="name" /></td>
                <td><input v-model="id" placeholder="Student ID" ref="id" /></td>
                <td><input v-model="course" placeholder="Student Course" ref="course" /></td>
                <td>
                    <button @click="create">Create</button>
                    <button @click="retrieveAll">Fetch All</button>
                </td>
            </tr>
        </tbody>
    </table>
<!-- </template> -->

```

---
layout: two-cols
---

# RTDB (Code - HTML) - Layout Table Row

* Create placeholder to holder retrieved data
* Create a table row with 4 columns
* For each row add 1 textbox (name, id, course)
* For last row add 3 button (update, enable edit, delete)

::right::

```html

<!-- <template> -->
    <!-- ... -->
        <!-- <tbody> -->
            <!-- <tr>...</tr> -->
            <tr v-for="student in studentList">
                <td>
                    <input 
                        :ref="student['id'] + '-name'" 
                        :value="student['name']"
                        v-bind:disabled="enabledId !== student['id']" />
                </td>
                <td>
                    <input 
                        :ref="student['id'] + '-id'" 
                        :value="student['id']"
                        v-bind:disabled="enabledId !== student['id']" />
                </td>
                <td>
                    <input 
                        :ref="student['id'] + '-course'" 
                        :value="student['course']"
                        v-bind:disabled="enabledId !== student['id']" />
                </td>
                <td>
                    <button 
                        class="fa fa-floppy-o" 
                        @click="updateById(student['id'])"
                        v-bind:disabled="enabledId !== student['id']"></button>

                    <button 
                        class="fa fa-pencil-square-o" 
                        @click="enableEdit(student['id'])"
                        v-bind:disabled="enabledId === student['id']"></button>

                    <button 
                        class="fa fa-trash-o" 
                        @click="deleteById(student['id'])"
                        v-bind:disabled="enabledId === student['id']"></button>
                </td>
            </tr>
        <!-- </tbody> -->
    <!-- </table> -->
<!-- </template> -->
```

---
layout: two-cols
---

# RTDB (Code - CSS) - Basic Design

* Align the table into center

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

# RTDB (Code - JS) - Create

* Import `getDatabase`, `ref`, `set` from `firebase/database` library
* Initialize a database
* Add create method to handle insert event

::right::

```javascript
// <script>
import { getDatabase, ref, set } from "firebase/database";

const database = getDatabase();

export default {
    methods: {
        create: function () {
            const name = this.$refs.name.value;
            const id = this.$refs.id.value;
            const course = this.$refs.course.value;

            if ([name, id, course].includes('')) {
                alert('1 or more of the given detail is null or empty');
                return;
            }

            set(ref(database, `student/${id}`), {
                name: name,
                id: id,
                course: course
            });

            this.enabledId = '';
        }
    }
}
// </script>
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
        create: function () { /** ... */},

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
import { /** ..., set */, remove } from "firebase/database";

export default {
    data() {/** ... */},

    methods: {
        create: function () {/** ... */},

        retrieveAll: function () {/** ... */},

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
        create: function () {/** ... */},

        retrieveAll: function () {/** ... */},

        deleteById: function (id) {/** ... */},

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
    data() {/** ... */},
    methods: {
        create: function () {/** ... */},

        retrieveAll: function () {/** ... */},

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

        deleteById: function (id) {/** ... */},

        enableEdit: function (id) {/** ... */}
    }
}
```