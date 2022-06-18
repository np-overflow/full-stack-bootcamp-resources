<script setup>
import { ref, watchEffect } from "vue";

import { set, ref as dbRef } from "firebase/database";
import { useAuth, useRTDB } from "../composables";
import { Input, Button } from "../components";

const { loading, isAuthenticated, user } = useAuth()
const { data, database } = useRTDB('students')

const form = ref({
    name: '',
    course: '',
    number: 0
})

watchEffect(() => {
    if (!user.value) return
    if (!data.value) return

    form.value = {
        name: data.value[user.value.uid].name,
        course: data.value[user.value.uid].course,
        number: data.value[user.value.uid].number
    }
})

function create() {
    set(dbRef(database, `students/${user.value.uid}`), {
        ...form.value,
        uid: user.value.uid,
        email: user.value.email,
    })
}
</script>

<template>
    <h1 class="font-semibold text-3xl">
        Store some data! 💾
    </h1>

    <br />

    <p>
        This page showcases how you can use Firebase Realtime Database to store and sync data across devices.
    </p>
    <br />
    <p>
        Updating your details will instantly sync across everyones devices. Test it out!
    </p>

    <br />

    <svg v-if="loading" class="h-8 animate-spin fill-orange-900 text-orange-400 w-8" viewBox="0 0 100 101"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
    </svg>

    <template v-else>
        <h2 class="text-2xl">Your details</h2>
        <br />
        <form v-if="isAuthenticated" @submit.prevent="create">
            <div class="grid gap-2 grid-cols-1 md:grid-cols-3">
                <Input type="text" v-model="form.name" placeholder="Jimmy">
                Name
                </Input>
                <Input type="text" v-model="form.course" placeholder="Infocomm Technology">
                Course
                </Input>
                <Input type="number" v-model="form.number">
                Favorite number
                </Input>
            </div>
            <br />
            <Button type="submit">Send 🚀</Button>
        </form>

        <div v-else class="rounded-lg bg-red-500 text-white p-3">
            <p>
                Sign in
                <b>
                    <a href="#/auth" class="hover:underline">here</a>
                </b>
                first, then come back to this page 😟
            </p>
        </div>

        <br />
        <h2 class="text-2xl">Other classmates 🐈🐈</h2>
        <br />

        <div class="w-full overflow-x-scroll">
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
            </table>
        </div>
    </template>
</template>

<style scoped>
td,
th {
    @apply p-2;
}
</style>
