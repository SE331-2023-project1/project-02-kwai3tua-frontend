<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
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