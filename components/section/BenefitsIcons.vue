<template>
  <v-container
    class="section-benefits-icons"
    :style="`background-color: ${backgroundColor}; 
    ${backgroundImage ? `background-image: url('${backgroundImage}')` : ''}`"
    fluid
  >
    <v-container class="py-12">
      <div class="ma-auto">
        <h2 class="text-h2 text-center mb-4">
          {{ title }}
        </h2>
        <h3 class="text-h4 text-center mb-12">
          {{ subTitle }}
        </h3>
      </div>

      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
          <v-card flat>
            <div class="d-flex flex-column align-center">
              <v-avatar
                size="120"
                color="white"
                :style="{
                  borderColor: session.theme === 'dark' ? '#3ee5ff' : '#3EB5DD',
                  borderWidth: session.theme === 'dark' ? '1px' : '2px',
                }"
                class="mt-4"
              >
                <v-icon size="50" :color="card.iconColor" :icon="card.icon" />
              </v-avatar>

              <v-card-title class="text-h4 mt-2">
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

<style lang="scss" scoped>
@import 'styles.scss';

.section-benefits-icons {
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
