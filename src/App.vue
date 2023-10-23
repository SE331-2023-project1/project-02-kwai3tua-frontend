<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useAuthStore} from '@/stores/auth'
import { useRouter } from 'vue-router';
const authStore = useAuthStore()
const router = useRouter()
function logout(){
  authStore.logout()
  router.push({ name: 'login'})
}
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if(token && user) {
 authStore.reload(token,JSON.parse(user))   
}else{
  authStore.logout
}
</script>

<template>
  <nav>
    <nav class="flex">
      <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
        <li class="nav-item px-2">
        <RouterLink to="/register" class="nav-link">
          <font-awesome-icon icon="user-plus" /> Sign Up
        </RouterLink>
      </li>
      <li class="nav-item px-2">
        <RouterLink to="/" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/>
        </RouterLink>
      </li>
      </ul>
      <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
        <li class="nav-item px-2">
        <RouterLink to="/profile" class="nav-link">
          <font-awesome-icon icon="user-plus" /> 
          {{ authStore.currentUserName }}
        </RouterLink>
      </li>
      <li class="nav-item px-2">
        <a  class="nav-link hover:cursor-pointer" @click="logout" >
          <font-awesome-icon icon="sign-out-alt"/> LogOut
        </a>
      </li>
      </ul>

    </nav>
  </nav>
  <div class="container">
    <RouterView/>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* Define responsive styles */
/* Styles for screens larger than 768px (e.g. laptops and desktops) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* Styles for screens larger than 1024px (e.g. larger desktops) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
</style>