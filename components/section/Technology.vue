<template>
  <v-container
    class="min-h-[400px] border-b-[1px] border-solid border-my-light-blue bg-cover"
    :class="backgroundColor"
    :style="`background-image: url('${backgroundImage}')`"
    fluid
  >
    <v-container class="py-12">
      <div class="ma-auto">
        <div v-if="title" class="text-h2 text-center mb-4">
          {{ title }}
        </div>
        <div v-if="subTitle" class="text-h4 text-center mb-12">
          {{ subTitle }}
        </div>
      </div>
      <v-row>
        <v-col v-for="(card, i) in cards" :key="i" cols="12" lg="6">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :class="{ 'on-hover': isHovering }"
              class="d-flex flex-no-wrap justify-space-between pa-6"
              :style="{ height: '100%', maxWidth: '700px', margin: 'auto' }"
            >
              <div>
                <v-card-title class="title-styles pt-3">
                  {{ card.title }}
                </v-card-title>

                <v-card-text
                  class="subtitle-styles text-body-1 pr-0"
                  v-html="card.subTitle"
                >
                </v-card-text>

                <v-card-actions>
                  <NuxtLink
                    :to="card.href"
                    target="_blank"
                    class="mx-2 text-h6"
                    :style="{
                      color: session.theme === 'dark' ? '#3dbbfe' : '#B35C00',
                    }"
                  >
                    {{ buttonText }}
                    <v-icon icon="mdi-chevron-right" />
                  </NuxtLink>
                </v-card-actions>
              </div>

              <v-avatar
                class="mx-5 d-flex align-self-center pa-5"
                size="125"
                rounded="1"
                color="white"
                :style="{
                  borderColor: session.theme === 'dark' ? '#3dbbfe' : '#3dbbfe',
                }"
                :image="card.image"
              />
            </v-card>
          </v-hover>
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
  buttonText: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
@import 'styles.scss';

  .v-card {
    border: 1px $light-blue solid;

    .title-styles {
      font-size: 40px;
    }

    .subtitle-styles {
      min-height: 66px;
    }

    .v-avatar {
      border: 1px $light-blue solid;
    }
  }
</style>
