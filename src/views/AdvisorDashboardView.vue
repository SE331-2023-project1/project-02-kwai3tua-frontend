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
    <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">
        <div class="text-5xl font-bold text-blue-500 mb-4 flex items-center justify-center">
          Student Information
          <img src="https://www.svgrepo.com/show/66044/stockbroker-wearing-glasses-suit-and-tie.svg" alt="Image Alt Text"
            class="w-12 h-12 ml-4 inline-block" />
        </div>
      </h1>  </div>
  <div class="">
    <h1 class="font-bold text-2xl text-blue-500">Post Annoucement</h1>
    <AnnouncementCard></AnnouncementCard>
  </div>
  <div class="">
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500 mb-5">Advisee List</h1>
    <div>
      <RouterLink v-for="student in studentList" 
      :key="student.studentId" :to="{ name: 'studentdetail', params: { studentId: student.studentId } }">
      <StudentListCard :student="student"></StudentListCard>
      </RouterLink>
    </div>
    </div>
    <div class="">
      <h1 class="font-bold text-2xl text-blue-500">Advisee Comment</h1>
      <StudentCommentCard></StudentCommentCard>
    </div>
  </div>
</template>