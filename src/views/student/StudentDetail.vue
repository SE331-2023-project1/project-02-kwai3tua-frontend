<script setup lang="ts">
import type { StudentItem } from '@/type'
import InputText from '@/components/InputText.vue'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useMessageStore } from '@/stores/message'
import { ref } from 'vue'
import CommentSection from '@/components/CommentSection.vue'

const isEdit = ref(false)
const authStore = useAuthStore()
const messageStore = useMessageStore()

const { oneStudent } = defineProps<{
  oneStudent: StudentItem
}>()

const { errors, handleSubmit } = useForm({
  // validationSchema,

  initialValues: {
    id: (oneStudent?.id as string) || '',
    username: (oneStudent?.username as string) || '',
    firstName: (oneStudent?.firstname as string) || '',
    lastName: (oneStudent?.lastname as string) || '',
    email: (oneStudent?.email as string) || ''
  }
})

const { value: username } = useField<string>('username')
const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')

const onSubmit = handleSubmit((values) => {
  authStore
    .updateStudent(
      values.id,
      values.username,
      values.firstName,
      values.lastName,
      values.email
    )
    .then(() => {
      messageStore.updateMessage('Update Successful')

      setTimeout(() => {
        messageStore.resetMessage()
      }, 5000)
    })
    .catch(() => {
      messageStore.updateMessage('could not Update')

      setTimeout(() => {
        messageStore.resetMessage()
      }, 3000)
    })
})

const editToggle = () => {
  isEdit.value = !isEdit.value
  console.log(isEdit.value)
}

const onSubmitComment = () => {
  console.log('COMMENT')
}
</script>

<template>
  <div>
    <div v-if="oneStudent">
      <div
        class="flex max-sm:items-center max-sm:justify-center bg-white rounded shadow-lg p-4 md:p-4 mb-6 relative my-6">
        <span class="absolute top-0 left-0 bg-[#b84242] rounded-br-lg text-white px-6 py-1.5">Student</span>
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2 max-[1360px]:mt-4">
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 my-4">
              <div class="lg:col-span-2 sm:col-span-6">
                <img :src="oneStudent?.image" alt=""
                  class="rounded-full w-80 h-80 object-cover mr-4 max-[1360px]:w-64 max-[1360px]:h-64 max-[1190px]:w-52 max-[1190px]:h-52" />
              </div>
              <div class="lg:col-span-4 sm:col-span-6 text-xl text-gray-600">
                <div class="w-full flex items-center justify-between">
                  <h2 class="font-semibold text-xl text-gray-600 mb-2">Profile</h2>
                  <button
                    class="group py-2 px-3 rounded-lg bg-white -right-6 border-2 border-gray-900 hover:bg-gray-900 text-sm"
                    @click="editToggle">
                    <font-awesome-icon icon="pen-to-square" class="text-gray-900 mr-2 group-hover:text-white" />
                    <span class="text-gray-900 font-medium group-hover:text-white">Edit</span>
                  </button>
                </div>
                <form @submit.prevent="onSubmit">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                    <div class="md:col-span-6">
                      <label for="username">Username</label>
                      <InputText type="text" v-model="username" :error="errors['username']" :disabled="!isEdit">
                      </InputText>
                    </div>
                    <div class="md:col-span-6">
                      <label for="email">Email</label>
                      <InputText type="text" v-model="email" :error="errors['email']" :disabled="!isEdit"></InputText>
                    </div>

                    <div class="md:col-span-3">
                      <label for="firstName">First Name</label>
                      <InputText type="text" v-model="firstName" :error="errors['firstName']" :disabled="!isEdit">
                      </InputText>
                    </div>
                    

                    <div class="md:col-span-3">
                      <label for="lastName">Last Name</label>
                      <InputText type="text" v-model="lastName" :error="errors['lastName']" :disabled="!isEdit">
                      </InputText>
                    </div>



                    <div class="md:col-span-6 text-right mt-2">
                      <div class="inline-flex items-end">
                        <button
                          class="bg-[#b84242] hover:bg-[#b84242] text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:bg-[#b84242]"
                          type="submit" :disabled="!isEdit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div v-if="oneStudent?.teacher">

                  <div class="mb-4"><span class="font-bold">Advisor: </span></div>
                  <RouterLink :to="{ name: 'teacher-detail', params: { id: oneStudent?.teacher.id } }" class="w-fit flex">
                    <div
                      class="w-fit px-3 py-2 flex items-center bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
                      <img class="w-16 h-16 rounded-full mr-4 object-cover" :src="oneStudent?.teacher.image" alt="" />
                      <div class="text-base">
                        <p class="text-gray-900 leading-none">
                          {{ oneStudent?.teacher.firstname }} {{ oneStudent?.teacher.lastname }}
                        </p>
                        <p class="text-gray-600">{{ oneStudent?.teacher.id }}</p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center my-12">
        <CommentSection :id="oneStudent.id"></CommentSection>
      </div>

      <form @submit.prevent="onSubmitComment">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-50">
          <div class="px-4 py-2 bg-white rounded-t-lg">
            <label for="comment" class="sr-only">Your comment</label>
            <textarea rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0"
              placeholder="Write a comment..."></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t">
            <button type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#b84242] rounded-lg focus:ring-4 focus:ring-[#b1e9ca]">
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Student Card Styles */
.max-sm\:items-center {
  display: flex;
  align-items: center;
}

.max-sm\:justify-center {
  display: flex;
  justify-content: center;
}

.bg-white {
  background-color: white;
}

.rounded {
  border-radius: 0.25rem;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.p-4 {
  padding: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.relative {
  position: relative;
}

/* Badge Styles */
.absolute {
  position: absolute;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.bg-\[#b84242\] {
  background-color: #b84242;
}

.rounded-br-lg {
  border-bottom-right-radius: 0.25rem;
  border-left: none;
}

.text-white {
  color: white;
}

px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

py-1.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

/* Grid Styles */
.grid {
  display: grid;
}

.gap-4 {
  gap: 1rem;
}

.gap-y-2 {
  column-gap: 0;
  row-gap: 0.5rem;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.lg\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.max-\[1360px\]:mt-4 {
  margin-top: 1rem;
}

/* Image Styles */
.lg\:col-span-2 {
  grid-column: span 2;
}

.sm\:col-span-6 {
  grid-column: span 6;
}

.rounded-full {
  border-radius: 9999px;
}

.w-80 {
  width: 20rem;
}

.h-80 {
  height: 20rem;
}

.object-cover {
  object-fit: cover;
}

mr-4 {
  margin-right: 1rem;
}

.max-\[1360px\]:w-64 {
  max-width: 16rem;
}

max-\[1360px\]:h-64 {
  max-height: 16rem;
}

max-\[1190px\]:w-52 {
  max-width: 13rem;
}

max-\[1190px\]:h-52 {
  max-height: 13rem;
}

/* Profile Styles */
.lg\:col-span-4 {
  grid-column: span 4;
}

.text-xl {
  font-size: 1.25rem;
}

.text-gray-600 {
  color: #333;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-600 {
  color: #333;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.group {
  position: relative;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.bg-white {
  background-color: white;
}

-right-6 {
  margin-right: -1.5rem;
}

.border-2 {
  border-width: 2px;
}

.border-gray-900 {
  border-color: #333;
}

hover:bg-gray-900:hover {
  background-color: #333;
}

text-sm {
  font-size: 0.875rem;
}

/* Edit Button Styles */
.edit-button {
  cursor: pointer;
}

.edit-button:hover {
  background-color: #333;
  color: white;
}

.edit-icon {
  margin-right: 0.5rem;
}

.group-hover\:text-white:hover {
  color: white;
}

.text-gray-900 {
  color: #333;
}

font-medium {
  font-weight: 500;
}

/* Form Styles */
.form {
  display: flex;
  flex-direction: column;
}

form {
  margin: 0;
}

.form-group {
  display: flex;
  flex-direction: column;
}

form-label {
  font-weight: 600;
}

disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

/* Advisor Styles */
.mb-4 {
  margin-bottom: 1rem;
}

.font-bold {
  font-weight: 700;
}

.advisor-link {
  display: flex;
  width: fit-content;
}

.advisor-card {
  cursor: pointer;
}

.advisor-card:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.w-fit {
  width: fit-content;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.border {
  border: 1px solid #ccc;
}

.border-gray-200 {
  border-color: #eee;
}

rounded-lg {
  border-radius: 0.5rem;
}

.shadow {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

hover\:shadow-md:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.w-16 {
  width: 4rem;
}

h-16 {
  height: 4rem;
}

.mr-4 {
  margin-right: 1rem;
}

.leading-none {
  line-height: 1;
}

.text-base {
  font-size: 1.125rem;
}

.text-gray-900 {
  color: #333;
}

.text-gray-600 {
  color: #555;
}

.w-16 {
  width: 4rem;
}

h-16 {
  height: 4rem;
}

object-cover {
  object-fit: cover;
}

/* Comment Section Styles */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

/* Comment Form Styles */
.comment-form {
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-top: 2rem;
}

.comment-input {
  padding: 1rem;
}

.comment-textarea {
  width: 100%;
  border: none;
  background-color: transparent;
}

.comment-button {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.post-comment-button {
  background-color: #b84242;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.post-comment-button:focus {
  outline: none;
}
</style>
