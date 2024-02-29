<template>
  <v-container
    class="min-h-[400px] border-b-[1px] border-solid border-my-light-blue bg-cover"
    :class="backgroundColor"
    :style="`background-image: url('${backgroundImage}')`"
    fluid
  >
    <v-container class="py-8">
      <div class="ma-auto">
        <div v-if="title" class="text-h2 text-center mb-2">
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
              :style="{ height: '100%', maxWidth: '700px', margin: 'auto', border: '1px solid #3dbbfe' }"
            >
              <div>
                <v-card-title class="text-h4 pt-3">
                  {{ card.title }}
                </v-card-title>

                <v-card-text
                  class="min-h-[66px] text-h6 pr-0"
                  style="line-height: 1.8rem"
                  v-html="card.subTitle"
                >
                </v-card-text>

                <v-card-actions>
                  <NuxtLink
                    :to="card.href"
                    target="_blank"
                    class="mx-2 text-h6"
                    :class="[
                      session.theme === 'dark' ? 'text-my-light-blue hover:text-my-blue' : 'text-my-blue hover:text-my-light-blue',
                    ]"

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
                style="border: 1px solid #3dbbfe"
                :style="`background-color: ${avatarBgColor} !important`"
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
  avatarBgColor: {
    type: String,
  },
})
</script>
