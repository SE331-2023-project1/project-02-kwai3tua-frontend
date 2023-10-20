<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Admin Dashboard</h1>
        </div>

        <!-- Create Teacher Information Section -->
        <div class="w-full max-w-screen-md">
            <RouterLink to="/createteacher" class="text-5xl font-bold text-blue-500 mb-4 text-center">Create Teacher
                Information</RouterLink>
        </div>

        <!-- Edit Teacher Information Section -->
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Edit Teacher Information</h1>
            <div class="flex flex-col items-center mb-6"> <!-- Wrap in a flex container -->
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Enter Username</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Username" />
                <!-- New RouterLink for editing information -->
                <RouterLink to="/Addashboard"
                    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Edit Information
                </RouterLink>
            </div>
        </div>

        <!-- Overall Section -->
        <div class="w-full max-w-screen-md">
            <RouterLink to="/AdOverall" class="text-5xl font-bold text-blue-500 mb-4 text-center">Overall
            </RouterLink>

        </div>
    </div>
</template>
  