<template>
  <v-container
    class="section-text"
    :style="`background-color: ${backgroundColor}; 
    ${backgroundImage ? `background-image: url('${backgroundImage}')` : ''}`"
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
@import 'styles.scss';

.section-text {
  min-height: 400px;
  border-bottom: 1px $light-blue solid;
  background-size: cover;
}

:deep(p) {
  margin-bottom: 20px;
}
</style>
