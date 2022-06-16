<script steup>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const authentication = getAuth();

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
</script>

<template>
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
</template>

<style scoped>
table {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>