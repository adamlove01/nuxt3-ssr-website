<template>
  <v-container
    class="fill-height minh-[60vh] bg-cover border-b-[1px] border-solid border-my-light-blue bg-cover bg-bottom"
    :style="`background-color: ${backgroundColor}; 
    ${backgroundImage ? `background-image: url('${backgroundImage}')` : ''}`"
    fluid
  >
    <v-container
      color="transparent"
      class="d-flex flex-column justify-center align-center h-[35vh] md:h-[40vh] lg:h-[60vh]"
    >
      <div class="ma-auto">
        <div v-if="title" class="text-h2 text-center">
          {{ title }}
        </div>
        <div v-if="subTitle" class="text-h4 text-center mb-12">
          {{ subTitle }}
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  backgroundImage: {
    type: String,
  },
  backgroundColor: {
    type: String,
    default: '',
  },
})
</script>

