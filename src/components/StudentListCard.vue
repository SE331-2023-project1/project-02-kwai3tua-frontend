<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const prop = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
})
const isPopupOpen = ref(false)

const openPopup = () => {
  isPopupOpen.value = true
}

const closePopup = () => {
  isPopupOpen.value = false
}
</script>

<template>
  <div>
    <div
      @click="openPopup"
      class="bg-white border-2 border-black rounded-lg card mb-2 text-blue-950 
      text-base font-mono hover-bg-blue-50 cursor-pointer flex flex-col justify-center">
      <span><strong>Student ID:</strong> {{ student.studentId }}</span>
      <span><strong>Name:</strong> {{ student.name }} {{ student.surname }}</span>
      <span>{{ student.advisor }}</span>
    </div>
    <div v-if="isPopupOpen" class="modal" @click="closePopup">
      <div class="modal-content" @click.stop>
        <span class="close" @click.prevent="closePopup">&times;</span>
        <h2 class="text-2xl font-semibold text-blue-500 mb-3 text-center">Student Information</h2>
        <img
          :src="'https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/71534877_2532662833646331_3327655594818535424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=73878a&_nc_eui2=AeFOlm0tTkPPZDybbxQnR3JlVuSEa8rPeg9W5IRrys96D2ikTU48gH97db06NW5yt-E7yZkWDCYJC2dMtl7Z1Tb0&_nc_ohc=4Gs00oIbpCAAX8k-OIx&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBM24rVQwGHCC0IWI-h-7tgaSqAgE0rmXwu9Ct90I9WhA&oe=655D1311'"
          alt="Profile Image"
          class="student-image w-20 h-20 rounded-full mx-auto mb-3"
        />
        <p class="text-lg"><strong>Student ID:</strong></p>
        <div class="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-lg"><strong></strong> {{ student.studentId }}</p>
        </div>
        <p class="text-lg"><strong>Name:</strong></p>
        <div class="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-lg"><strong></strong> {{ student.name }}</p>
        </div>
        <p class="text-lg"><strong>Surname:</strong></p>
        <div class="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-lg"><strong></strong> {{ student.surname }}</p>
        </div>
        <p class="text-lg"><strong>Department:</strong></p>
        <div class="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-lg"><strong></strong> {{ student.department }}</p>
        </div>
        <p class="text-lg"><strong>Advisor:</strong></p>
        <div class="mb-4 shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p class="text-lg"><strong></strong> {{ student.advisor }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: black;
}
</style>