<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const isExpanded = ref(true)
const route = useRoute()
const router = useRouter()

const userId = () => {
    return localStorage.getItem('user_id') as string
}

const updateIsExpanded = () => {
    isExpanded.value = window.innerWidth >= 650
}

updateIsExpanded()

onMounted(() => {
    window.addEventListener('resize', updateIsExpanded)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateIsExpanded)
})

const isSettingsPage = computed(() => {
    return route.name && ['student-setting', 'teacher-setting'].includes(route.name as string)
})

const messageStore = useMessageStore()
const { message } = storeToRefs(messageStore)

const authStore = useAuthStore()
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

if (token && user) {
    authStore.reload(token, JSON.parse(user))
} else {
    authStore.logout()
    router.push({ name: 'login-page' })
}

function logout() {
    authStore.logout()
    router.push({ name: 'login-page' })
}

const isErrorMessage = () => {
    return message.value === 'Could not login'
}
</script>

<template>
    <aside :class="`fixed top-0 left-0 z-40 w-64 h-screen ${!isExpanded && 'w-[4rem]'}`" aria-label="Sidebar">
        <div :class="`h-full px-4 pb-4 overflow-hidden bg-red-900 text-white-500 ${!isExpanded && 'hidden'
            }`">
            <div class="h-full flex flex-col justify-between">
                <div class="">

                    <ul class="font-medium mt-4">
                        <li>
                            
                            <RouterLink :to="{ name: 'home-page' }"
                                class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                <span class="ml-3 text-sm">Home Page</span>
                            </RouterLink>
                            <RouterLink :to="{ name: 'login-page' }" class="flex" v-if="!authStore.isLoggedIn()">
                                <div class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Login</span>
                                </div>
                            </RouterLink>

                            <RouterLink :to="{ name: 'register-page' }" class="flex" v-if="!authStore.isLoggedIn()">
                                <div class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Register</span>
                                </div>
                            </RouterLink>
                        </li>
                        <span v-if="authStore.isAdmin() || authStore.isTeacher()">
                            <li>
                                <RouterLink :to="{ name: 'student-list' }"
                                    class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Students List</span>
                                </RouterLink>
                            </li>
                            <li v-if="authStore.isAdmin()">
                                <RouterLink :to="{ name: 'teacher-list' }"
                                    class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Advisors List</span>
                                </RouterLink>
                            </li>
                            <li v-if="authStore.isAdmin()">
                                <RouterLink :to="{ name: 'teacher-setting' }"
                                    class="flex justify-between hover:pl-4 hover:bg-gray-800 group rounded-lg"
                                    active-class="highlighted">
                                    <div class="flex items-center p-2 rounded-lg" :class="{ highlighted: isSettingsPage }">
                                        <span class="ml-3 text-sm">Add Teachers</span>
                                    </div>
                                </RouterLink>

                            </li>
                            <li>
                                <RouterLink :to="{ name: 'announcement-page' }"
                                    class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Announcement</span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'create-announcement-page' }"
                                    class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                    <span class="ml-3 text-sm">Create Announcement</span>
                                </RouterLink>
                            </li>
                        </span>
                        <li v-if="authStore.isStudent() || authStore.isTeacher()">
                            <RouterLink :to="{ name: 'profile-page' }"
                                class="flex items-center p-2 rounded-lg hover:pl-4 hover:bg-gray-800 group">
                                <span class="ml-3 text-sm">Profile</span>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center justify-center gap-2">

                    <span v-if="authStore.isLoggedIn()">
                        <RouterLink :to="{ name: 'register-page' }" class="flex" @click="logout">
                            <div class="py-2 px-3 rounded-lg bg-gray-900 -right-6 border border-white/20">
                                <span class="text-white">Logout</span>
                            </div>
                        </RouterLink>
                    </span>
                </div>
            </div>
        </div>

    </aside>

    <div v-if="authStore.isLoggedIn()" class="top-2 right-2 fixed">
    <RouterLink :to="{ name: 'profile-page' }" class="flex">
      <div class="custom-profile-div"> <!-- Apply the custom CSS class -->
        <span class="text-white">{{ authStore.currentUserName }}</span>
      </div>
    </RouterLink>
  </div>


    <div :class="`my-4 transition ease-in-out delay-2000 px-2 sm:px-2 md:px-8 ${isExpanded ? 'sm:ml-64 sm:mt-12' : 'ml-0 mt-14 lg:mt-5'
        }`">
        <div v-if="message" :class="`animate-flashMessage w-full flex items-center p-4 mb-4 text-sm ${isErrorMessage() ? 'text-red-800 bg-red-50' : 'text-blue-800 bg-blue'
            } rounded-lg`">
            <h2 class="font-medium">{{ message }}</h2>
        </div>
        <RouterView />
    </div>
</template>

<style scoped>
a.router-link-active {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
}

aside,
.smooth-transition,
template {
    transition: 0.2s ease-in-out;
}

.highlighted {
    color: white;
}

.custom-profile-div {
  position: relative;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border-radius: 8px;
  border: 2px solid #fff;
}

.custom-profile-div:hover {
  background-color: #2980b9;
  border: 2px solid #fff;
}
</style>
