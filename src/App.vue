<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getAuth,onAuthStateChanged } from "firebase/auth";
export default {
    setup(){
        const router = useRouter();
        const route = useRoute();

        onBeforeMount( () => {
          const auth = getAuth();
          onAuthStateChanged(auth,(user) => {
            if (!user) {
              router.replace('login')
            }else if(route.path == '/login' || route.path == '/register'){
              router.replace('/')
            }
          })
        });
    } 
}

</script>

<style lang="scss">
body {
  background: #2c3e50;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}
</style>
