<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div class="w-full max-w-screen-md">
        <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Student Information</h1>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Student ID
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="student.studentId" id="StudentId" type="text" placeholder="Student ID" disabled />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="student.name" id="name" type="text" placeholder="Name" disabled />
          </div>
          <!-- Add fields for other student information (e.g., Surname, Department, Profile Image) -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="surname">
              Surname
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              v-model="student.surname" id="surname" type="text" placeholder="Surname" disabled />
          </div>
          <!-- Add fields for Department, Profile Image, etc. -->
          <div class="flex items-center justify-between">
            <!-- Back button to navigate back to the Student List -->
            <router-link to="/student-list" class="bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>