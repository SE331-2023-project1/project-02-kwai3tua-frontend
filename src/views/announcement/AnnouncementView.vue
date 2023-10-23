<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import { computed, onMounted, ref } from 'vue';
import { useAnnouncementStore } from '@/stores/announcement';
import { onBeforeRouteUpdate } from 'vue-router';
import type { AnnouncementItem } from '@/type';

const announcementStore = useAnnouncementStore();

const announcements = ref([] as AnnouncementItem[]);
const totalAnnouncements = ref(0);
const page = ref(1);
const limit = ref(10);

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
})

onMounted(async () => {
  announcements.value = await announcementStore.getAnnouncements(limit.value, page.value);
  totalAnnouncements.value = announcementStore.getAnnouncementsLength();
});

</script>


<template>
  <main class="flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-4 text-gray-700">Announcements</h1>
    <AnnouncementCard></AnnouncementCard>

  </main>
</template>
