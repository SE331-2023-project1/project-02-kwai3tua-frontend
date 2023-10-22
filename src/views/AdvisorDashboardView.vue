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

</script>

<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="font-bold text-4xl text-blue-500 mt-6 mb-6">Advisor Dashboard</h1>
  </div>
  <div class="">
    <h1 class="font-bold text-2xl text-blue-500">Post Annoucement</h1>
    <AnnouncementCard></AnnouncementCard>
  </div>
  <div class="">
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500 mb-5">Advisee List</h1>
      <StudentListCard v-for="student in studentList" :key="student.studentId" :student="student"></StudentListCard>
    </div>
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500 mt-5">Advisee Comment</h1>
      <StudentCommentCard></StudentCommentCard>
    </div>
  </div>
</template>
