<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '@/assets/main.css'
</script>
<template>
    <div class="min-h-screen bg-cover bg-center flex items-center justify-center"
        style="background-image: url('https://images.unsplash.com/20/cambridge.JPG?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D');">
        <div class="bg-black bg-opacity-50">
            <div class="text-white text-center p-8">
                <h1
                    class="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text mb-4 text-center">
                    Welcome to EduConnect</h1>
                <p class="text-xl mb-8">The student and advisor connecting tool</p>
                <div class="mb-4">
                    <router-link to="/login" class="custom-button">
                        University Login
                    </router-link>
                    <router-link to="/adminlogin" class="custom-button ml-4">
                        Admin Login
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.custom-button {
    background-color: #3498db;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s;
    /* Add a smooth transition effect */
    display: inline-block;
}

.custom-button:hover {
    transform: scale(1.05);
    /* Increase the button size on hover */
}
</style>
  
  

