<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password" >
        <input type="submit" value="Register">
        <p>Have an account? <router-link to="/login">Login Here</router-link></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  setup(){
    const email = ref("");
    const password = ref("");

    const Register = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(user => alert(user))
      .catch(err => alert(err.message))
    }

    return{
      Register,
      email,
      password
    }
  }
}
</script>
