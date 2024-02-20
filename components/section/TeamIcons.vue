<template>
  <v-container
    class="section-team-images"
    :style="`background-color: ${backgroundColor}; 
    ${backgroundImage ? `background-image: url('${backgroundImage}')` : ''}`"
    fluid
  >
    <v-container class="py-12">
      <div class="ma-auto">
        <h1 v-if="heroTitle" class="text-h3 mb-8 text-center">
          {{ heroTitle }}
        </h1>
        <h2 v-if="title" class="text-h4 text-center mb-12">
          {{ title }}
        </h2>
      </div>
      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
          <v-card flat>
            <div class="d-flex flex-column align-center">
              <v-avatar size="120" color="white" class="mt-4">
                <v-img size="50" :src="card.image" />
              </v-avatar>

              <v-card-title class="mt-2">{{ card.title }}</v-card-title>

              <v-card-subtitle class="text-center">{{
                card.subTitle
              }}</v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const props = defineProps({
  heroTitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
  cards: {
    type: Array,
    required: true,
    default() {
      return []
    },
  },
  image: {
    type: String,
    default: 'img/users/default.png',
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

.section-team-images {
  border-bottom: 1px $light-blue solid;
  background-size: cover;

  .v-card {
    background-color: transparent;

    .v-avatar {
      border: 1px $light-blue solid;
    }
  }
}
</style>
