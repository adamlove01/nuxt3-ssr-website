<template>
  <v-container class="pt-2 pb-0">
    <div class="d-flex justify-space-between mb-4">
      <div class="flex-grow-1">
        <h1 class="text-h6 mb-0">{{ title.toUpperCase() }}</h1>
      </div>
      <slot></slot>
    </div>
    <v-divider></v-divider>
  </v-container>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: '',
  },
})
</script>
