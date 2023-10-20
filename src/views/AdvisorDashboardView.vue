<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import StudentListCard from '@/components/StudentListCard.vue'
import StudentCommentCard from '@/components/StudentCommentCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="font-bold text-4xl text-blue-500 mt-6">Advisor Dashboard</h1>
  </div>
  <div class="ml-10 mr-10">
    <h1 class="font-bold text-2xl text-blue-500">Post Annoucement</h1>
    <AnnouncementCard></AnnouncementCard>
  </div>
  <div class="flex">
    <div class="ml-10 mr-10">
      <h1 class="font-bold text-2xl text-blue-500">Advisee List</h1>
      <StudentListCard></StudentListCard>
    </div>
    <div class="mr-10">
      <h1 class="font-bold text-2xl text-blue-500">Advisee Comment</h1>
      <StudentCommentCard></StudentCommentCard>
    </div>
  </div>
</template>