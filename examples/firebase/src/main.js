import { createApp } from 'vue'
import App from './App.vue'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWTQczJnVmx_xn3lGAyBLB129tamE-28g",
  authDomain: "overflow-bootcamp.firebaseapp.com",
  databaseURL: "https://overflow-bootcamp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "overflow-bootcamp",
  storageBucket: "overflow-bootcamp.appspot.com",
  messagingSenderId: "877760255311",
  appId: "1:877760255311:web:829f8938e945b185cfa13a",
  measurementId: "G-CQGF65LHS5"
};

initializeApp(firebaseConfig);

createApp(App).mount('#app')

// pnpm dev

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWTQczJnVmx_xn3lGAyBLB129tamE-28g",
//   authDomain: "overflow-bootcamp.firebaseapp.com",
//   projectId: "overflow-bootcamp",
//   storageBucket: "overflow-bootcamp.appspot.com",
//   messagingSenderId: "877760255311",
//   appId: "1:877760255311:web:829f8938e945b185cfa13a",
//   measurementId: "G-CQGF65LHS5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);