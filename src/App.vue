<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <div class="container"> -->
    <RouterView/>
  <!-- </div> -->
</template>

<style>
.container {
    padding: 0 20px;
    max-width: 1140px;
    margin: 0 auto;
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