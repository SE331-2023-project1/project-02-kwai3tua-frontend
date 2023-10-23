<script setup lang="ts">
import type { TeacherItem } from '@/type'
import InputText from '@/components/InputText.vue'
import { useField, useForm } from 'vee-validate'
// import * as yup from 'yup'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useMessageStore } from '@/stores/message'

const isEdit = ref(false)
const authStore = useAuthStore()
const messageStore = useMessageStore()

// eslint-disable-next-line vue/no-setup-props-destructure
const { oneTeacher } = defineProps<{
  oneTeacher?: TeacherItem
}>()


const { errors, handleSubmit } = useForm({

  initialValues: {
    id: oneTeacher?.id as string || "",
    username: oneTeacher?.username as string || "",
    firstName: oneTeacher?.firstname as string || "",
    lastName: oneTeacher?.lastname as string || "",
    email: oneTeacher?.email as string || ""
  }
})

const { value: username } = useField<string>('username')
const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: email } = useField<string>('email')

const onSubmit = handleSubmit((values) => {
  authStore.updateTeacher(
    values.id,
    values.username,
    values.firstName,
    values.lastName,
    values.email,
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
</script>

<template>
  <div>
    <div v-if="oneTeacher">
      <div class="teacher-card">
        <span class="card-label">Teacher</span>
        <div class="teacher-content">
          <div class="teacher-image">
            <img :src="oneTeacher?.image" alt="" class="teacher-image" />
          </div>
          <div class="teacher-details">
            <h2 class="teacher-title">Profile</h2>
            <button class="edit-button" @click="editToggle">
              <font-awesome-icon icon="pen-to-square" class="edit-icon" />
              <span class="edit-text">Edit</span>
            </button>
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="username">Username</label>
                <InputText type="text" v-model="username" :error="errors['username']" :disabled="!isEdit" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <InputText type="text" v-model="email" :error="errors['email']" :disabled="!isEdit" />
              </div>
              <div class="form-group">
                <div class="name-inputs">
                  <div class="first-name">
                    <label for="firstName">First Name</label>
                    <InputText type="text" v-model="firstName" :error="errors['firstName']" :disabled="!isEdit" />
                  </div>
                  <div class="last-name">
                    <label for="lastName">Last Name</label>
                    <InputText type="text" v-model="lastName" :error="errors['lastName']" :disabled="!isEdit" />
                  </div>
                </div>
              </div>

              <div class="form-group text-right">
                <div class="button-group mt-4">
                  <button class="submit-button" type="submit" :disabled="!isEdit">Submit</button>
                </div>
              </div>
            </form>
            <div class="student-list-title">Students List:</div>
            <ul class="student-list">
              <li v-for="(student, index) in oneTeacher?.ownStudent" :key="index">
                <RouterLink :to="{ name: 'student-detail', params: { id: student?.id } }" class="student-link">
                  <div class="student-card">
                    <img class="student-image" :src="student?.image" alt="" />
                    <div class="student-info">
                      <p class="student-name">{{ student?.name }} {{ student?.surname }}</p>
                    </div>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name-inputs {
  display: flex;
  gap: 1rem;
}

.first-name, .last-name {
  flex: 1;
}
.teacher-card {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  margin: 3rem 0;
}

.teacher-card {
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1.5rem;
  position: relative;
  margin: 3rem 0;
}

.card-label {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #b84242;
  border-bottom-right-radius: 0.25rem;
  text-white: #fff;
  padding: 0.375rem 1.5rem;
}

.teacher-content {
  display: flex;
  gap: 1rem;
}

.teacher-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.teacher-image {
  border-radius: 9999px;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}

.teacher-details {
  text-xl: 1.25rem;
  color: #333;
}

.teacher-content {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr;
}

.teacher-image img {
  border-radius: 9999px;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}

.teacher-details {
  text-xl: 1.25rem;
  color: #333;
}

.edit-button {
  cursor: pointer;
  display: inline-flex;
  border: 2px solid #333;
  border-radius: 0.5rem;
  padding: 0.375rem 0.75rem;
  font-weight: 600;
}

.edit-button:hover {
  background-color: #333;
  color: #fff;
}

.edit-icon {
  margin-right: 0.5rem;
}

.edit-text {
  font-weight: 600;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
}

.disabled:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.submit-button {
  background-color: #b84242;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.submit-button:focus {
  outline: none;
}

.student-list-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.student-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.student-link {
  width: fit-content;
}

.student-card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 0.375rem 1.5rem;
  cursor: pointer;
}

.student-card:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.student-image {
  border-radius: 0.25rem;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  margin-right: 1rem;
}

.student-info {
  line-height: 1;
  font-size: 1.125rem;
  color: #333;
}
</style>


