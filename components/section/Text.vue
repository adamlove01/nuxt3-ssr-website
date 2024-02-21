<template>
  <v-container
    class="min-h-[400px] border-b-[1px] border-solid border-my-light-blue bg-cover"
    :style="`background-color: ${backgroundColor}; background-image: url('${backgroundImage}')`"
    fluid
  >
    <v-container class="py-10">
      <v-row>
        <v-col v-if="imageLeft" cols="12" md="4">
          <v-img :src="imageLeft" width="100%" cover />
        </v-col>

        <v-col v-if="text" cols="12" md="8">
          <div
            class="text-h3 mb-8"
            :class="{ 'text-center': !imageLeft && !imageRight }"
          >
            {{ title }}
          </div>
          <div class="text-body-1" v-html="text" />
        </v-col>

        <v-col v-if="imageRight" cols="12" md="4">
          <v-img :src="imageRight" width="100%" cover />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  imageLeft: {
    type: String,
    default: null,
  },
  imageRight: {
    type: String,
    default: null,
  },
  backgroundImage: {
    type: String,
    default: '',
  },
  backgroundImage: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
:deep(p) {
  margin-bottom: 20px;
}
</style>
