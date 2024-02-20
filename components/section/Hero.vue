<template>
  <v-container
    class="fill-height section-hero"
    :style="`background-color: ${backgroundColor}; 
    ${backgroundImage ? `background-image: url('${backgroundImage}')` : ''}`"
    fluid
  >
    <v-container
      color="transparent"
      class="d-flex flex-column justify-center align-center"
      :style="{ height: '60vh' }"
    >
      <div class="ma-auto">
        <div v-if="title" class="text-h2 text-center mb-4">
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

<style lang="scss" scoped>
@import 'styles.scss';

.section-hero {
  min-height: 60vh;
  border-bottom: 1px $light-blue solid;
  background-position: center;
  background-size: cover;
}
</style>
