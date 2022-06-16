<script setup>
import database from './firebase.js';
import Auth from './components/Auth.vue';
import RTDB from './components/RTDB.vue';

function toggle(tabname) {
  let content = document.getElementsByClassName("tab-content");

  for (let i = 0, max = content.length; i < max; i++) {
    content[i].style.display = "none";
  }

  document.getElementById(tabname).style.display = "block";
  document.getElementById(`${tabname}-content`).style.display = "block";
}

window.onload = () => { toggle('auth'); }
</script>

<template>
  <img id="logo-overflow" alt="Overflow" src="https://np-overflow.club/images/full-black.png" />

  <div id="auth" class="tab-content">
    <h1><br />Authentication</h1>
    <p>Firebase Authentication Example</p>
  </div>

  <div id="rtdb" class="tab-content">
    <h1>Real-Time <br /> Database</h1>
    <p>Firebase Real-Time Database Example</p>
  </div>

  <div class="tab-holder">
    <button class="tab-link" v-on:click="toggle('auth')">Authentication</button>
    <button class="tab-link" v-on:click="toggle('rtdb')">Real-Time Database</button>
  </div>

  <div id="auth-content" class="tab-content content">
    <Auth />
  </div>

  <div id="rtdb-content" class="tab-content content">
    <RTDB />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1.5vh;
}

#logo-overflow {
  width: 5%;
  height: 5%;
}

.tab-link {
  background-color: #000000;
  color: #FFFFFF;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 2vh 1vw;
  font-size: 17px;
  width: 25%;
}

.tab-link:hover {
  background-color: #9c9c9c;
}

.tab-content {
  color: #000000;
  display: none;
  text-align: center;
}

.tab-content>h1 {
  margin: 0;
}

.tab-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.content {
  margin-top: 2.5vh;
}
</style>
