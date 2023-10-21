<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import type { StudentItem } from '@/type';
import StudentService from '@/services/StudentService'
import { useRouter } from 'vue-router';

const router = useRouter()
const student = ref<StudentItem>({
id: 0,
studentId: 0,
name: '',
surname: '',
profileImg: '',
department: ''
})

function saveStudent() {
    StudentService.saveStudent(student.value)
    .then((response)=>{
        console.log(response.data)
        router.push({name: 'studentdashboard'})
    }).catch(()=>{
        router.push({name: 'network-error'})
    })
}
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Student Information</h1>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form @submit.prevent="saveStudent" >
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Student ID
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="student.studentId" id="StudentId" type="text" placeholder="Name" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="student.name" id="name" type="text" placeholder="Name" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="surname">
                        Surname
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="student.surname" id="surname" type="text" placeholder="Surname" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Department">
                        Department
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="student.department" id="Department" type="text" placeholder="Department" />
                </div>
                <!-- Add the profile image input -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="profileImage">
                        Profile Image
                    </label>
                    <input type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="student.profileImg" id="profileImage" accept="image/*" />
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> 
                       Create Profile               
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>