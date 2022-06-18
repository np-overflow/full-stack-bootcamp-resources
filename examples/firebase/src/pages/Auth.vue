<script setup>
import { reactive } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuth } from '@vueuse/firebase/useAuth'

import { Button } from '../components';
import Input from '../components/Input.vue';

const auth = getAuth()
const { isAuthenticated, user } = useAuth(auth)

const form = reactive({
    email: '',
    password: '',
    errorMessage: null
})

async function login() {
    form.errorMessage = null
    try {
        const credentials = await signInWithEmailAndPassword(auth, form.email, form.password)
        console.log(credentials)
    } catch (e) {
        form.errorMessage = e.message
    }
}

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

async function logout() {
    form.errorMessage = null
    try {
        await signOut(auth)
    } catch (e) {
        form.errorMessage = e.message
    }
}
</script>

<template>
    <h1 class="text-3xl">
        Authenticate yourself! 🛡️🙀
    </h1>

    <br />

    <p>
        This page showcases how Firebase can be used for Authentication in your app.
    </p>

    <br />

    <div v-if="isAuthenticated">
        <h2>You're already authenticated! 🎉🍾</h2>

        Below are your login credentials, don't share them with anyone!

        <br />
        <br />

        <pre class="font-mono text-sm overflow-scroll">{{ JSON.stringify(user, null, 4) }}</pre>

        <br />

        <Button @click="logout">Log out</Button>
    </div>

    <form v-else @submit.prevent="login">
        <Input type="email" placeholder="jimmy@np-overflow.club" v-model="form.email">
        Email
        </Input>
        <br />
        <Input type="password" v-model="form.password" placeholder="jimmyslittlesecret">
        Password
        </Input>
        <br />
        <div class="flex gap-3 justify-between">
            <Button variant="alternative" @click="register">Register</Button>
            <Button type="submit">Login</Button>
        </div>
    </form>

    <br />

    <div v-if="form.errorMessage" class="rounded-lg bg-red-500 text-white p-3">
        <span class="font-semibold">
            Oh no! An error has occurred:
        </span>

        <pre class="font-mono">{{ form.errorMessage }}</pre>
    </div>
</template>
