<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative mt-8">
        <div class="w-full max-w-screen-md">
            <h1
                class="text-5xl font-bold text-white bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-4 text-center rounded-lg">
                Admin Dashboard</h1>
        </div>

        <!-- Create Teacher Information Section -->
        <div class="flex flex-col items-center justify-center mt-8">
            <div class="w-full max-w-screen-md text-center">
                <router-link to="/createteacher" class="text-5xl font-bold text-blue-500 mb-4">Create Teacher
                    </router-link>
            </div>
        </div>


        <!-- Edit Teacher Information Section -->
        <div class="w-full max-w-screen-md mt-8">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Edit Teacher Information</h1>
            <div class="flex flex-col items-center mb-6"> <!-- Wrap in a flex container -->
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Enter Username</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Username" />
                <!-- New RouterLink for editing information -->
                <router-link to="/admindashboard"
                    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit Information
                </router-link>
            </div>
        </div>

        <!-- Overall Section -->
        <div class="w-full max-w-screen-md text-center ">
            <router-link to="/adminoverall" class="text-5xl font-bold text-blue-500 mb-4 text-center">Overall</router-link>
        </div>
    </div>
</template>
  
  