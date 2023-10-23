<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { type AnnouncementItem } from '@/type'
import ImageUpload from '@/components/ImageUpload.vue'
import { ref } from 'vue'

const announcement = ref<AnnouncementItem>({
  id: 0,
  title: '',
  content: '',
  images: []
})

const validationSchema = yup.object({
  title: yup.string().required('The title is required')
})

const { errors, handleSubmit } = useForm({
  validationSchema,

  initialValues: {
    title: ''
  }
})

const { value: title } = useField<string>('title')

const onSubmit = handleSubmit((values) => {
  console.log('title: ' + values.title)
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div>
      <h2 class="font-semibold text-2xl text-gray-600 mt-6 text-center">New Announcement</h2>

      <!-- Form for announcement data -->
      <form @submit.prevent="onSubmit">
        <div class="max-w-2xl mx-auto mb-8">
          <div class="bg-white rounded shadow-lg p-6 md:p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
              <div>
                <div class="grid md:grid-cols-6 gap-4 text-sm gap-y-2">
                  <div class="md:col-span-6">
                    <label for="title" class="mb-2">Title</label>
                    <InputText
                      type="text"
                      v-model="title"
                      :error="errors['title']"
                      placeholder="Title..."
                    ></InputText>
                  </div>
                  <div class="md:col-span-6">
                    <label for="content" class="mb-2">Content</label>
                    <textarea
                      id="message"
                      rows="6"
                      class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-[#42b883] mt-1 px-4 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#42b883] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Write your announcement here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <div class="md:col-span-6">
                  <h3 class="text-lg">The Image of The Announcement</h3>
                  <ImageUpload v-model="announcement.images" class="my-2" />
                  <p class="text-gray-400">Supported formats: "JPG", "JPEG", "PNG", "GIF"</p>
                </div>
                <div class="md:col-span-6 text-right mt-6">
                  <div class="inline-flex items-end">
                    <button
                      class="bg-[#b84242] hover:bg-[#b84242] text-white font-bold py-2 px-10 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



