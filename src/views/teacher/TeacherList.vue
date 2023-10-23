<script setup lang="ts">
import { type TeacherItem } from '@/type'
import { computed, onMounted, ref, type Ref } from 'vue'
import TeacherCard from '@/components/TeacherCard.vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useTeacherStore } from '@/stores/teacher'
import BaseInput from '@/components/BaseInput.vue'
import TeacherService from '@/services/TeacherService'
import type { AxiosResponse } from 'axios'

const teacherStore = useTeacherStore()
const teachers = ref<TeacherItem[]>([])
const totalTeacher = ref<number>(0)
const keyword = ref('')

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

const fetchTeachers = async () => {
  teachers.value = await teacherStore.getTeachers(props.limit, props.page)
}

onMounted(async () => {
  fetchTeachers()
  totalTeacher.value = teacherStore.getTeachersLength()
})

onBeforeRouteUpdate(async (to, from, next) => {
  const toPage = to.query.page ? Number(to.query.page) : 1 // set default page to 1 if to.query.page is undefined
  console.log(toPage)
  teachers.value = await teacherStore.getTeachers(props.limit, toPage)
  totalTeacher.value = teacherStore.getTeachersLength()
  next()
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalTeacher.value / props.limit)
  return props.page.valueOf() < totalPages
})

const totalPages = computed(() => {
  return Math.ceil(totalTeacher.value / props.limit)
})

function updateKeyword(value: string) {
  console.log(keyword.value)
  let queryFunction
  if (keyword.value == '') {
    fetchTeachers()
    queryFunction = teacherStore.getTeachers(6, 1)
  } else {
    queryFunction = TeacherService.getTeachersByKeyword(keyword.value, 6, 1)
  }
  queryFunction
    .then((response: AxiosResponse<TeacherItem[]>) => {
      teachers.value = response.data
      console.log('teachers', teachers.value)
      totalTeacher.value = teacherStore.getTeachersLength()
      console.log('totalTeacher', totalTeacher.value)
      if (!teachers.value) {
        fetchTeachers()
      }
    })
    .catch((err) => {
      console.log('err: ' + err)
      // router.push({ name: 'NetworkError' })
    })
}
</script>

<template>
  <main class="flex flex-col items-center justify-center student-list-container">
    <h1 class="text-2xl font-bold mb-4 text-gray-700 student-list-title">Teacher List</h1>
    <!-- Search -->
    <div class="w-[50%] mb-4 student-search-container">
      <BaseInput v-model="keyword" type="text" label="Search" placeholder="Search for advisors" @input="updateKeyword">
      </BaseInput>
    </div>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 student-card-container">
      <TeacherCard v-for="teacher in teachers" :key="teacher.id" :teacher="teacher"></TeacherCard>
    </div>
    <div v-if="totalPages != 0" class="pagination flex items-center -space-x-px h-10 mt-4 pagination-container">
      <RouterLink :to="{ name: 'teacher-list', query: { page: page - 1, limit: limit } }" rel="prev" v-if="page != 1"
        id="page-prev"
        class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 prev-button">
        Prev
      </RouterLink>
      <span v-if="page === 1"
        class="cursor-not-allowed flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 prev-button-disabled">Prev</span>
      <span v-for="pageNumber in totalPages" :key="pageNumber">
        <RouterLink :to="{ name: 'teacher-list', query: { page: pageNumber, limit: limit } }" v-if="pageNumber != page"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 pagination-button">
          {{ pageNumber }}
        </RouterLink>
        <span v-else
          class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-[#27a26f] border border-[#7ed7ac] bg-[#d6f5e2] hover-bg-[#b1e9ca] hover-text-[#188359] cursor-pointer page-number-current">{{
            pageNumber }}</span>
      </span>
      <RouterLink :to="{ name: 'teacher-list', query: { page: page + 1, limit: limit } }" rel="next" v-if="hasNextPage"
        id="page-next"
        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 next-button">
        Next
      </RouterLink>
      <span v-if="!hasNextPage"
        class="cursor-not-allowed flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 next-button-disabled">Next</span>
    </div>
  </main>
</template>

<style scoped>
.student-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.student-list-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.student-search-container {
  width: 50%;
  margin-bottom: 1rem;
}

.student-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.pagination-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.pagination-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #b84242;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  margin: 0.2rem;
}

.pagination-button:hover {
  background-color: #a13d3d;
}

.pagination-button-disabled {
  cursor: not-allowed;
  background-color: #ccc;
  color: #555;
}

.prev-button {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.next-button {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.prev-button:hover,
.next-button:hover {
  background-color: #f0f0f0;
  color: #555;
}

.prev-button-disabled,
.next-button-disabled {
  cursor: not-allowed;
  background-color: #fff;
  color: #ccc;
}

.page-number {
  border: 1px solid #ccc;
  margin: 0 1px;
}

.page-number-current {
  border: 1px solid #1a1cba;
  background-color: #22577a;
  color: #ffffff;
}

</style>



