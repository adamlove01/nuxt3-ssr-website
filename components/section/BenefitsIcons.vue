<template>
  <v-container
    class="bg-cover border-b-[1px] border-solid border-my-light-blue"
    :style="`background-color: '${backgroundColor}'; background-image: url('${backgroundImage}')`"
    fluid
  >
    <v-container class="py-8">
      <div class="ma-auto">
        <h2 class="text-h2 text-center mb-2">
          {{ title }}
        </h2>
        <h3 class="text-h4 text-center mb-9">
          {{ subTitle }}
        </h3>
      </div>

      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
          <v-card flat class="bg-transparent">
            <div class="d-flex flex-column align-center">
              <v-avatar
                size="120"
                style="border: 1px solid #3dbbfe"
                :style="`background-color: ${backgroundColor}`"
                class="mt-4"
              >
                <v-icon size="50" :color="card.iconColor" :icon="card.icon" />
              </v-avatar>

              <v-card-title class="text-h4 mt-4">
                {{ card.title }}
              </v-card-title>

              <div class="text-h6 text-center pt-2">
                {{ card.subTitle }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const session = useSessionStore()

const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  cards: {
    type: Array,
    required: true,
    default() {
      return []
    },
  },
  icon: {
    type: String,
    default: '/img/icon-checkmark.png',
  },
  iconColor: {
    type: String,
    default: 'primary',
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

