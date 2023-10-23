<script setup lang="ts">
import { type StudentItem } from '@/type'
import { computed, onMounted, ref } from 'vue'
import StudentCard from '@/components/StudentCard.vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useStudentStore } from '@/stores/student'
import BaseInput from '@/components/BaseInput.vue'
import StudentService from '@/services/StudentService'
import type { AxiosResponse } from 'axios'

const studentStore = useStudentStore()
const students = ref<StudentItem[]>([])
const totalStudent = ref<number>(0)
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

const fetchStudents = async () => {
  students.value = await studentStore.getStudents(props.limit, props.page)
}

onMounted(async () => {
  fetchStudents()
  totalStudent.value = studentStore.getStudentsLength()
})

onBeforeRouteUpdate(async (to, from, next) => {
  const toPage = to.query.page ? Number(to.query.page) : 1 // set default page to 1 if to.query.page is undefined
  students.value = await studentStore.getStudents(props.limit, toPage)
  totalStudent.value = studentStore.getStudentsLength()
  next()
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalStudent.value / props.limit)
  return props.page.valueOf() < totalPages
})

const totalPages = computed(() => {
  return Math.ceil(totalStudent.value / props.limit)
})

function updateKeyword(value: string) {
  console.log(keyword.value)
  let queryFunction
  if (keyword.value == '') {
    fetchStudents()
    queryFunction = studentStore.getStudents(30, 1)
  } else {
    queryFunction = StudentService.getStudentsByKeyword(keyword.value, 30, 1)
  }
  queryFunction
    .then((response: AxiosResponse<StudentItem[]>) => {
      students.value = response.data
      console.log('students', students.value)
      totalStudent.value = studentStore.getStudentsLength()
      console.log('totalStudent', totalStudent.value)
      if (!students.value) {
        fetchStudents()
      }
    })
    .catch((err) => {
    })
}
</script>

<template>
  <main class="student-list-container">
    <h1 class="student-list-title">Student List</h1>
    <div class="student-search-container">
      <BaseInput v-model="keyword" type="text" label="Search" placeholder="Search for a student" @input="updateKeyword">
      </BaseInput>
    </div>
    <div class="student-card-container">
      <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
    </div>
    <div v-if="totalPages > 0" class="pagination-container">
      <RouterLink :to="{ name: 'student-list', query: { page: page - 1, limit: limit } }" rel="prev" v-if="page != 1"
        id="page-prev" class="pagination-button prev-button">
        Prev
      </RouterLink>
      <span v-if="page === 1" class="pagination-button prev-button-disabled">Prev</span>
      <span v-for="pageNumber in totalPages" :key="pageNumber">
        <RouterLink :to="{ name: 'student-list', query: { page: pageNumber, limit: limit } }" v-if="pageNumber != page"
          class="pagination-button page-number">
          {{ pageNumber }}
        </RouterLink>
        <span v-else class="pagination-button page-number-current">{{ pageNumber }}</span>
      </span>
      <RouterLink :to="{ name: 'student-list', query: { page: page + 1, limit: limit } }" rel="next" v-if="hasNextPage"
        id="page-next" class="pagination-button next-button">
        Next
      </RouterLink>
      <span v-if="!hasNextPage" class="pagination-button next-button-disabled">Next</span>
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
  grid-template-columns: repeat(2, 1fr); /* Two items per row */
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
  background-color: #b84242; /* Change the background color to #b84242 */
  color: #fff; /* White text color */
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  margin: 0.2rem;
}

.pagination-button:hover {
  background-color: #a13d3d; /* Darker shade on hover */
}

.pagination-button-disabled {
  cursor: not-allowed;
  background-color: #ccc; /* Gray background for disabled buttons */
  color: #555; /* Darker gray text color for disabled buttons */
}

.prev-button {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.next-button {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.prev-button:hover, .next-button:hover {
  background-color: #f0f0f0;
  color: #555;
}

.prev-button-disabled, .next-button-disabled {
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
