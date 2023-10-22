<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Student Detail</h1>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold text-center" for="username">Profile Image</label>
                </div>
                <div class="mb-4 image-container centered-image">
                    <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/71534877_2532662833646331_3327655594818535424_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=73878a&_nc_eui2=AeFOlm0tTkPPZDybbxQnR3JlVuSEa8rPeg9W5IRrys96D2ikTU48gH97db06NW5yt-E7yZkWDCYJC2dMtl7Z1Tb0&_nc_ohc=4Gs00oIbpCAAX8k-OIx&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfCoc_LERvScS88M9j8rLT3eRPzkCeB4MukVtU3Sfp0eDw&oe=655CDAD1" 
                    class="max-w-full h-auto" width="200" height="150">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">ID</label>
                    <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">642115032</div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Name</label>
                    <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">Putthipong</div>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Surname</label>
                    <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">Ninwong</div>
                </div>
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Department</label>
                    <div class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">Software Engineering</div>
                </div>
                
            </div>
        </div>
        <RouterLink to="/advisor"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
                    ◀ Back to Dashboard
        </RouterLink>
    </div>
</template>

<style scoped>
.image-container {
    max-width: 100%;
    max-height: 100%;
}

.centered-image {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>