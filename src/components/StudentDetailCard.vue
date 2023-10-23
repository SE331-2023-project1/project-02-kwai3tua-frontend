<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'

const prop = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<template>
  <RouterLink
    :to="{ name: 'studentdetail', params: { studentId: student?.studentId } }"
    class="bg-white border-2 border-black rounded-lg card mb-2 text-blue-950 
    text-base font-mono hover:bg-blue-50 cursor-pointer flex flex-col justify-center">
    <span><strong>ID:</strong> {{ student?.studentId }}</span>
    <span><strong>Name:</strong> {{ student?.name }} {{ student?.surname }}</span>
    <span><strong>Department:</strong> {{ student?.department }}</span>
    <span>{{ student?.advisor }}</span>
  </RouterLink>
</template>

<style scoped>
.card {
    padding: 20px;
}
</style>