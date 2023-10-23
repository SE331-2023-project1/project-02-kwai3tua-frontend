<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
    <img src="https://www.svgrepo.com/show/428734/university-academy-school.svg" alt="User Icon" class="w-30 h-24 mb-4" />

    <div class="w-full max-w-screen-md">
      <h1
        class="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text mb-4 text-center">
        EduConnect</h1>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Password" />
        </div>
        <!-- Register button -->
        <div class="flex flex-col items-center mb-4">
          <RouterLink to="/register"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Don't have an account? Register
          </RouterLink>
        </div>
        <!-- Sign in button -->
        <div class="flex flex-col items-center grid-cols-2 gap-6">
          <RouterLink to="/student"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </RouterLink>
        </div>

      </div>
    </div>
    <div class="absolute bottom-4 right-4">
      <RouterLink to="/adminlogin" class="text-blue-500 hover:text-blue-800 font-bold" href="#">
        Admin Login
      </RouterLink>
    </div>
  </div>
</template>