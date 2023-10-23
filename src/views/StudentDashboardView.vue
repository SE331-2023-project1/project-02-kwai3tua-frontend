<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import AdvisorDetailCard from '@/components/AdvisorDetailCard.vue'
import AdvisorCommentCard from '@/components/AdvisorCommentCard.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-start mt-8">
    <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">
                <div class="text-5xl font-bold text-blue-500 mb-4 flex items-center justify-center">
                    Student Dashboard
                    <img src="https://www.svgrepo.com/show/493399/male-student-studying.svg" alt="Image Alt Text"
                        class="w-12 h-12 ml-4 inline-block" />
                </div>
            </h1>  </div>
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
