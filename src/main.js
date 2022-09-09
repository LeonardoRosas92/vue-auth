import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPJuDjtwShBmV6tiIdCWP8b46w8pHMrIs",
    authDomain: "vue-auth-d8192.firebaseapp.com",
    projectId: "vue-auth-d8192",
    storageBucket: "vue-auth-d8192.appspot.com",
    messagingSenderId: "832999318977",
    appId: "1:832999318977:web:067893d557edd4a5587b40"
};

const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

createApp(App).use(app).use(router).mount('#app')
