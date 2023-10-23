<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import AdvisorDetailCard from '@/components/AdvisorDetailCard.vue'
import AdvisorCommentCard from '@/components/AdvisorCommentCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="font-bold text-5xl text-blue-500 mt-6 mb-6">Student Dashboard</h1>
  </div>
  <hr class="border-2 border-black rounded"/>
  <div>
    <h1 class="pt-8 font-bold text-2xl text-blue-500 text-center">Annoucement</h1>
    <AnnouncementCard></AnnouncementCard>
  </div>
  <div>
    <div>
      <h1 class="font-bold text-2xl text-blue-500 text-center">Advisor Detail</h1>
      <AdvisorDetailCard></AdvisorDetailCard>
    </div>
    <div>
      <h1 class="font-bold text-2xl text-blue-500 text-center">Advisor Comment</h1>
      <AdvisorCommentCard></AdvisorCommentCard>
    </div>
  </div>
</template>

<style scoped>
hr {
  width: 250px;
  margin: auto; 
  display: block;
}
</style>