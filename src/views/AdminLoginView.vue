<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import { useMessageStore } from '@/stores/message';
// import { ref } from 'vue';
// const email = ref ('')
// const password = ref ('')
import * as yup from 'yup'
import { useField, useForm} from 'vee-validate'
import {useAuthStore} from '@/stores/auth'
import router from '@/router';
const messageStore = useMessageStore()
const authStore = useAuthStore()
const validationSchema = yup.object({
    username: yup.string().required('The email is required'),
    password: yup.string().required('The password is requied')
})
const {errors, handleSubmit} = useForm({
    validationSchema,
    initialValues:{
        username:'',
        password: ''
    }
})
const { value: username} = useField<string>('username')
const { value: password } = useField<string>('password')
const onSubmit = handleSubmit((values)=>{
    authStore.login(values.username, values.password)
    .then(()=>{
        console.log('login success')
        router.push({name:'admindashboard'})
    }).catch((err)=>{
        messageStore.updateMessage('could not login')
        setTimeout(()=>{
            messageStore.resetMessage()
        },3000)
    })
})
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
        <div class="w-full max-w-screen-md">
            <h1 class="text-5xl font-bold text-blue-500 mb-4 text-center">Admin Login</h1>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form @submit.prevent="onSubmit">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="Username">
                        Username
                    </label>
                    <InputText type="text" v-model="username" :error="errors['username']"></InputText>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <InputText type="password" v-model="password" :error="errors['password']"></InputText>
                </div>
                <div class="flex items-center justify-between">
                    <!-- new routerlink required -->
                    <button  type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>