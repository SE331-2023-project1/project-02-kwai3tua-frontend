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
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div class="w-full max-w-screen-md">
        <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Student Detail</h1>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold text-center" for="username">Profile Image</label>
            <span><strong>ID:</strong> {{ student?.studentId }}</span>
          </div>
          <div class="mb-4 image-container centered-image">
            <img
              :src="student?.profileImg"
              class="max-w-full h-auto"
              width="200"
              height="150"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">ID</label>
            <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {{ student?.studentId }}
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Name</label>
            <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {{ student?.name }}
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Surname</label>
            <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {{ student?.surname }}
            </div>
          </div>
          <div class="">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Department</label>
            <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {{ student?.department }}
            </div>
          </div>
        </div>
      </div>
      <RouterLink
        to="/advisor"
        class="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus-outline-none focus-shadow-outline"
      >
        ◀ Back to Dashboard
      </RouterLink>
    </div>
  </template>

  <style scoped>
  hr {
    width: 250px;
    margin: auto;
    display: block;
  }
  
  .image-container {
    max-width: 100%;
    max-height: 100%;
  }
  
  centered-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>