import { createApp } from 'vue'
import { initializeApp } from 'firebase/app';

import 'virtual:windi.css'

import App from './App.vue'

const firebaseConfig = {
  apiKey: 'AIzaSyAWTQczJnVmx_xn3lGAyBLB129tamE-28g',
  authDomain: 'overflow-bootcamp.firebaseapp.com',
  databaseURL: 'https://overflow-bootcamp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'overflow-bootcamp',
  storageBucket: 'overflow-bootcamp.appspot.com',
  messagingSenderId: '877760255311',
  appId: '1:877760255311:web:829f8938e945b185cfa13a',
  measurementId: 'G-CQGF65LHS5'
};

initializeApp(firebaseConfig)

const app = createApp(App)
app.mount('#app')
