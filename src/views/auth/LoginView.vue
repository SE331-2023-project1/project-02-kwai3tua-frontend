<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useRouter, RouterLink } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const router = useRouter()
const messageStore = useMessageStore()

const { message } = storeToRefs(messageStore)

const validationSchema = yup.object({
  username: yup.string().required('The username is required'),
  password: yup.string().required('The password is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,

  initialValues: {
    username: '',
    password: ''
  }
})

const { value: username } = useField<string>('username')

const { value: password } = useField<string>('password')

const onSubmit = handleSubmit((values) => {
  authStore
    .login(values.username, values.password)
    .then(() => {
      router.push({ name: 'home-page' })
      messageStore.updateMessage('Login Successful')
      setTimeout(() => {
        messageStore.resetMessage()
      }, 5000)
    })
    .catch(() => {
      messageStore.updateMessage('Could not login')

      setTimeout(() => {
        messageStore.resetMessage()
      }, 3000)
    })
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login 
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="" @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900" 
            >Username</label
          >

          <InputText type="text" v-model="username" :error="errors['username']"></InputText>
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-start">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>

          <div class="mt-2">
            <InputText v-model="password" type="password" :error="errors['password']"></InputText>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-[#b84242] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#b84242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b84242]"
          >
            Login
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?

        {{ ' ' }}

        <RouterLink :to="{ name: 'register-page' }" class="font-semibold leading-6 text-[#b84242] hover:text-[#b84242]">Register</RouterLink>
      </p>
    </div>
  </div>
</template>
