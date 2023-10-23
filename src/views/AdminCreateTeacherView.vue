<script setup lang="ts">
import type { TeacherItem } from '@/type';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import TeacherService from '@/services/TeacherService';
import ImageUpload from '@/components/ImageUpload.vue';

const router = useRouter();

const teacher = ref<TeacherItem>({
  id: 0,
  firstName: "",
  lastName: "",
  profileImg: [],
  department: "",
  studentList: [],
  student: {
    id: 0,
    firstName: "",
    lastName: "",
    studentID: "",
    profileImg: [],
    department: "",
  },
});

function saveTeacher() {
    TeacherService.saveTeacher(teacher.value).then((res) => {
    console.log(res.data);
    console.log(res.data.profileImg)
    router
      .push({
        name: "admindashboard"
        
      })
      .catch(() => {
        router.push({ name: "network-error " });
      });
  });
}

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Create Teacher</h1>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form @submit.prevent="saveTeacher">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
                        Fisrt Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName" type="text"
                        v-model="teacher.firstName" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                        Last Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName" type="text"
                        v-model="teacher.lastName" />
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Department">
                        Department
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Department" type="text" 
                        v-model="teacher.department"/>
                </div>

                <!-- Add the profile image input -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="profileImage">
                        Profile Image
                    </label>
                    <ImageUpload v-model="teacher.profileImg" />
                </div>
                
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="advisees">
                        Advisees
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="advisees" type="text" placeholder="Advisees" />
                </div>

                <div class="flex items-center justify-between">
                    <button  type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create Teacher
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>