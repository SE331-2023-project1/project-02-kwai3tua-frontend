<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/auth'
import { useMessageStore } from '@/stores/message'

const authStore = useAuthStore()
const messageStore = useMessageStore()

const validationSchema = yup.object({
  username: yup.string().required('The username is required'),
  password: yup.string().required('The password is required'),
  firstName: yup.string().required('The first name is required'),
  lastName: yup.string().required('The last name is required'),
  email: yup.string().email().required('The email is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,

  initialValues: {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }
})

const { value: username } = useField<string>('username')
const { value: password } = useField<string>('password')
const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')

const onSubmit = handleSubmit((values) => {
  authStore
    .teacherRegister(
      values.username,
      values.firstName,
      values.lastName,
      values.email,
      values.password
    )
    .then(() => {
      messageStore.updateMessage('Add Teacher Successful')
      setTimeout(() => {
        messageStore.resetMessage()
      }, 5000)
    })
    .catch(() => {
      messageStore.updateMessage('could not Add Teacher')

      setTimeout(() => {
        messageStore.resetMessage()
      }, 3000)
    })
})
</script>

<template>
  <div class="mx-auto p-4 max-w-md">
    <h2 class="text-2xl font-semibold text-gray-600 mb-4">Create a New Advisor</h2>
    <p class="text-gray-500 mb-4">Use this form to create a new advisor ID.</p>

    <!-- Form for advisor data -->
    <form @submit.prevent="onSubmit" class="bg-white rounded shadow-lg p-4">
      <div class="grid gap-4 text-sm grid-cols-1">
        <div>
          <label for="username" class="text-gray-600">Username</label>
          <InputText type="text" v-model="username" :error="errors['username']"></InputText>
        </div>

        <div>
          <label for="password" class="text-gray-600">Password</label>
          <InputText type="password" v-model="password" :error="errors['password']"></InputText>
        </div>

        <div>
          <label for="firstName" class="text-gray-600">First Name</label>
          <InputText type="text" v-model="firstName" :error="errors['firstName']"></InputText>
        </div>

        <div>
          <label for="lastName" class="text-gray-600">Last Name</label>
          <InputText type="text" v-model="lastName" :error="errors['lastName']"></InputText>
        </div>

        <div>
          <label for="email" class="text-gray-600">Email</label>
          <InputText type="text" v-model="email" :error="errors['email']"></InputText>
        </div>

        <div class="text-right">
          <button class="bg-[#b84242] hover:bg-[#b84242] text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

