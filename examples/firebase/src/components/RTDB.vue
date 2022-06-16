<script>
import { getDatabase, ref, onValue, set, remove } from "firebase/database";

const database = getDatabase();

export default {
    data() {
        return {
            studentList: [],
            enabledId: '',
        }
    },
    watch: {
        studentList: function () {
            console.log(this.studentList);
        }
    },
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
        },

        retrieveAll: function () {
            onValue(ref(database, 'student'), (snapshot) => {
                this.studentList = snapshot.val();
            });
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
            }).then(() => this.deleteById(id));

            this.enabledId = '';
        },

        deleteById: function (id) {
            remove(ref(database, `student/${id}`));
        },

        enableEdit: function (id) {
            this.enabledId = id;
        }
    }
}
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css" />

    <input v-model="name" placeholder="Student Name" ref="name" />
    <input v-model="id" placeholder="Student ID" ref="id" />
    <input v-model="course" placeholder="Student Course" ref="course" />
    <button @click="create">Create</button>
    <button @click="retrieveAll">Fetch All</button>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Student ID</th>
                <th>Course</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in studentList">
                <td>
                    <input 
                        :ref="student['id'] + '-name'" 
                        :value="student['name']"
                        v-bind:disabled="!(enabledId == student['id'])" />
                </td>
                <td>
                    <input 
                        :ref="student['id'] + '-id'" 
                        :value="student['id']"
                        v-bind:disabled="!(enabledId == student['id'])" />
                </td>
                <td>
                    <input 
                        :ref="student['id'] + '-course'" 
                        :value="student['course']"
                        v-bind:disabled="!(enabledId == student['id'])" />
                </td>
                <td>
                    <button 
                        class="fa fa-floppy-o" 
                        @click="updateById(student['id'])"
                        v-bind:disabled="!(enabledId == student['id'])"></button>

                    <button 
                        class="fa fa-pencil-square-o" 
                        @click="enableEdit(student['id'])"
                        v-bind:disabled="(enabledId == student['id'])"></button>

                    <button 
                        class="fa fa-trash-o" 
                        @click="deleteById(student['id'])"
                        v-bind:disabled="(enabledId == student['id'])"></button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    width: 100;
}
</style>