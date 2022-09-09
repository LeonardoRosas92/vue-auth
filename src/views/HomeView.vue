<template>
  <div class="home">
    <h1>Welcome, {{name}}</h1>
    <router-link to="/about" >About</router-link>
    <br>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import {onBeforeMount, ref} from 'vue';
import { getAuth, signOut } from "firebase/auth";
export default {
  setup(){
    const name = ref("");

    onBeforeMount( () => {
      const user = getAuth().currentUser;
      console.log(user);
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      const auth = getAuth();
      signOut(auth)
      .then(() => console.log("Signed out"))
      .catch(err => alert(err.message))
    }

    return {
      name,
      Logout
    }
  }
}
</script>
