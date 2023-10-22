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
    <div class="bg-white border-2 border-black rounded-lg
    card mb-2 text-blue-950 text-base font-mono hover:bg-blue-50 
    cursor-pointer flex flex-col justify-center">
    <span>Name: {{ student?.name }} {{ student?.surname }}</span>
    <h4>Department: {{ student?.department }}</h4>
    <h5>{{ student?.advisor }}</h5>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
}
</style>