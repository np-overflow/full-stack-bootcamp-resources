<script setup>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
</script>

<template scoped>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet' type='text/css'>
  <div class='login'>
    <h2>Register</h2>
    <input id='txtemail' name='email' placeholder='E-Mail Address' type='text' />
    <input id='txtpassword' name='password' placeholder='Password' type='password' />
    <input id='btnSignUp' class='animated' type='submit' value='Register' v-on:click="register()" />
    <input id='btnSignIn' class='animated' type="submit" value='Log In' v-on:click="login()" />
  </div>
</template>

<style scoped>
h2 {
  color: #6D7781;
  font-family: "Sofia", cursive;
  font-size: 15px;
  font-weight: bold;
  font-size: 3.6em;
  text-align: center;
  margin-bottom: 20px;
}

.login {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.login>* {
  margin: 0.5vh;
}

input[type="text"],
input[type="password"] {
  width: 285px;
  padding: 20px 0px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #435160;
  outline: none;
  color: #6D7781;
  font-size: 16px;
}

input[type="submit"] {
  background: #1FCE6D;
  border: 0;
  width: 300px;
  height: 40px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

input[type="submit"]:hover {
  background: #16aa56;
  animation-name: shake;
}

::-webkit-input-placeholder {
  color: #435160;
  font-size: 12px;
}

.animated {
  animation-fill-mode: both;
  animation-duration: 1s;
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}
</style>
