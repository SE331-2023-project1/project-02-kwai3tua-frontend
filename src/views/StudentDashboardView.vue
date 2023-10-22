<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import AdvisorDetailCard from '@/components/AdvisorDetailCard.vue'
import AdvisorCommentCard from '@/components/AdvisorCommentCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="font-bold text-4xl text-blue-500 mt-6 mb-6">Student Dashboard</h1>
  </div>
  <div class="">
    <h1 class="font-bold text-2xl text-blue-500">Annoucement</h1>
    <AnnouncementCard></AnnouncementCard>
  </div>
  <div class="">
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500">Advisor Detail</h1>
      <AdvisorDetailCard></AdvisorDetailCard>
    </div>
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500">Advisor Comment</h1>
      <AdvisorCommentCard></AdvisorCommentCard>
    </div>
  </div>
</template>
