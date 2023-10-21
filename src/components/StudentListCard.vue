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
    <div class="border-2 border-black rounded-lg
    card mt-5 mb-5
    bg-white text-blue-950 text-base font-mono
    hover:bg-blue-50 cursor-pointer
    flex flex-col justify-center items-center">
    <span>{{ student?.name }} {{ student?.surname }}</span>
      <h4>{{ student?.department }}</h4>
    </div>
</template>

<style scoped>
.card {
    padding: 225px;
    padding-right: 342px;
}
</style>