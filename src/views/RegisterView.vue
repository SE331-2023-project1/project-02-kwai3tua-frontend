<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <img src="https://www.svgrepo.com/show/520490/student.svg" alt="User Icon" class="w-24 h-20 mb-4" />

        <div class="w-full max-w-screen-md" style="max-width: 50%;">
            <h1
                class="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text mb-4 text-center">
                Student Registration</h1>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" />
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" />

                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Confirm Password
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" />

                </div>

                <div class="flex items-center justify-center">
                    <RouterLink to="/studentinfo"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>