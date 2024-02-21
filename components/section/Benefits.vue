<template>
  <v-container
    class="min-h-[100px] border-b-[1px] border-solid border-my-light-blue bg-cover"
    :class="backgroundColor"
    :style="`background-image: url('${backgroundImage}')`"
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
        <v-col v-for="(card, i) in cards" :key="i" cols="12"  md="6">
          <v-card variant="flat" class="h-full max-w-[700px] m-auto bg-transparent">
            <v-card-text class="py-0" v-bind="props">
              <v-row no-gutters>
                <v-col cols="12" class="py-4">
                  <v-card-title class="d-flex pt-4 text-h4 items-center" style="font-size: 35px">
                    <v-icon
                    icon="mdi-check-circle-outline"
                    color="green accent-4"
                    size="45"
                    class="pr-5"
                    style="margin-top: -5px"
                  />
                    {{ card.title }}
                  </v-card-title>
                  <v-card-text class="text-h6  pt-1 pb-5" style="line-height: 1.8rem">
                    {{ card.subTitle }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
  cards: {
    type: Array,
    required: true,
    default() {
      return []
    },
  },
  backgroundImage: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
})
</script>

