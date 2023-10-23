<template>
  <div class="w-[80%] md:w-[60%] bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
    <div class="flex flex-col p-8">
      <div class="flex flex-row text-sm text-gray-500">
        <img src="https://media.licdn.com/dms/image/C5603AQHkhCstLlZ1Cg/profile-displayphoto-shrink_200_200/0/1646147622648?e=1701907200&v=beta&t=76uflJ_M6WT_3d_AehAGtnFrtkDePK9xqb7KOkS60yc" alt="" class="h-12 rounded-full mb-4 mr-4" />
        <div class="">
          <div class="text-gray-900 font-bold text-2xl mt-2">Patrick</div>
        </div>
      </div>
      <div>
        <h5 class="mb-1 text-xl font-medium text-gray-900">Some Title</h5>
        <p class="text-gray-600" v-if="!showFullText">
          {{
            truncate(
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae eaque voluptate eius perferendis pariatur unde placeat totam incidunt quaerat! eaque voluptate eius'
            )
          }}
        </p>
        <p class="text-gray-600" v-else>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae eaque voluptate eius perferendis pariatur unde placeat totam incidunt quaerat! eaque voluptate eius
        </p>
        <div class="flex justify-center"> <!-- Center the button horizontally -->
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#b84242] rounded-lg hover:bg-[#b84242] focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg mt-2 mb-2"
            @click="toggleFullText"
          >
            {{ showFullText ? 'Read less' : 'Read more' }}
          </a>
        </div>
      </div>

      <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>

      <div class="flex flex-row flex-wrap items-start gap-2 mt-2">
        <img
          src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
          alt="events image"
          class="mx-auto border-solid border-gray-200 border-2 rounded w-40 h-56 object-cover hover:shadow-lg cursor-pointer"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgs = ref<String[]>()
const visible = ref(false)
const index = ref(0)
const showFullText = ref(false);

const toggleFullText = () => {
  showFullText.value = !showFullText.value;
};

const truncate = (text: string) => {
  if (text.length > 150) {
    return text.substring(0, 150) + '...'
  }
  return text
}

const handleHide = () => {
  visible.value = false
}
</script>
