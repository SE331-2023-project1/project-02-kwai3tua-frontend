<script setup lang="ts">
import AnnouncementCard from '@/components/AnnouncementCard.vue'
import StudentListCard from '@/components/StudentListCard.vue'
import StudentCommentCard from '@/components/StudentCommentCard.vue'
import type { StudentItem } from '@/type'
import { ref, watchEffect } from 'vue'
import StudentService from '@/services/StudentService'
import { useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'

const studentList = ref<Array<StudentItem>>([])
const totalStudent = ref<number>(0)
const router = useRouter()
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
// eslint-disable-next-line vue/no-dupe-keys
let limit = 3

watchEffect(() => {
  StudentService.getStudent(limit, props.page)
    .then((response: AxiosResponse<StudentItem[]>) => {
      studentList.value = response.data
      totalStudent.value = response.headers['x-total-count']
      console.log('studentList:', studentList.value);
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
})

const announcementText = ref(''); // Define a ref for announcement text

const postAnnouncement = () => {
  // Handle posting the announcement here
  // You can use announcementText.value to access the announcement text
  // and you can handle file uploads here
}
</script>

<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="font-bold text-5xl text-blue-500 mt-6 mb-6">Advisor Dashboard</h1>
  </div>
  <hr class="border-2 border-black rounded"/>
  <h1 class="pt-10 font-bold text-2xl text-blue-500 text-center">Create Announcement</h1>
    <div class="mt-5 mb-5 border-2 border-black rounded-lg py-4">
      <form @submit.prevent="postAnnouncement">
        <div class="mb-4">
          <label for="announcement" class="px-4 block text-gray-700 text-xl font-bold mb-2">What are you announcing?</label>
          <textarea
            id="announcement"
            v-model="announcementText"
            class="announcebox h-24 p-2 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Enter your announcement message here"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="file" class="px-4 block text-gray-700 text-xl font-bold mb-2">Upload File (optional)</label>
          <input
            type="file"
            id="file"
            class="announcebox p-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex justify-end">
          <button class="mr-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Post Announcement
          </button>
        </div>
      </form>
    </div>
  <div>
    <div>
      <h1 class="font-bold text-2xl text-blue-500 mb-5 text-center">Advisee List</h1>
      <div>
      <RouterLink v-for="student in studentList" 
      :key="student.studentId" :to="{ name: 'studentdetail', params: { studentId: student.studentId } }">
      <StudentListCard :student="student"></StudentListCard>
      </RouterLink>
    </div>
  </div>
    <div>
      <h1 class="font-bold text-2xl text-blue-500 mt-5 text-center">Advisee Comment</h1>
      <StudentCommentCard></StudentCommentCard>
    </div>
  </div>
</template>

<style scoped>
hr {
  width: 250px;
  margin: auto; 
  display: block;
}
.announcebox {
  width: 990px;
  margin: auto; 
  display: block;
}
</style>