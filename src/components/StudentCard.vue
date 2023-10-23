<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})

const truncate = (text: string) => {
  if (text.length > 10) {
    return text.substring(0, 10) + '...'
  }
  return text
}
</script>

<template>
  <RouterLink :to="{ name: 'student-detail', params: { id: student?.id } }">
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
      <span class="absolute text-sm text-white bg-[#b84242] rounded-br-lg rounded-tl-lg px-6 py-1.5">{{
        student?.id
      }}</span>
      <div class="flex flex-col items-center p-10">
        <img class="w-24 h-24 object-cover mb-3 rounded-full shadow-lg" :src="student?.image" alt="Bonnie image" />
        <div v-if="student">
          <h5 class="mb-1 text-lg font-medium text-gray-900">
            {{ truncate(student?.firstname) }} {{ truncate(student?.lastname) }}
          </h5>
        </div>
        <span class="text-sm text-gray-500">
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#b84242] rounded-lg hover:bg-[#a22727] focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg">Details</a>
         
        </div>
      </div>
    </div>
  </RouterLink>
</template>
