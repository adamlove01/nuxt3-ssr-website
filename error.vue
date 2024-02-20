<template>
  <v-container fluid v-if="isLoaded">
    <v-container class="pt-9" style="text-align: center">
      <div v-if="error.statusCode === 404">
        <v-img
          src="/img/error-404.png"
          class="ma-auto"
          min-height="268px"
          max-width="400px"
          contain
        />
        <h1>{{ $t('error.pageNotFound') }}</h1>
      </div>

      <div v-else-if="error.statusCode === 401">
        <v-img
          src="/img/error-401.png"
          class="ma-auto"
          min-height="228px"
          max-width="200px"
          contain
        />
        <h1>{{ $t('error.notAuthorized') }}</h1>
        <p class="mt-2">{{ error.message }}</p>
      </div>

      <div v-else-if="error.statusCode">
        <v-img
          src="/img/error-unknown.png"
          class="ma-auto"
          min-height="228px"
          max-width="300px"
          contain
        />
        <h1 class="mt-3">{{ $t('error.pageBroken') }}</h1>
        <p class="mt-5 text-red" :style="{ 'font-family': 'monospace' }">
          * {{ $t('error.error') }} {{ error.message }} *
          {{ JSON.stringify(error) }}
        </p>
      </div>

      <div v-else>
        <v-img
          src="/img/error-unknown.png"
          class="ma-auto"
          min-height="228px"
          max-width="200px"
          contain
        />
        <h1 class="mt-5">{{ $t('error.unknownError') }}</h1>
        <p class="mt-2">{{ error.message }}</p>
        <p class="mt-2">{{ $t('error.tryAgainLater') }}</p>
      </div>

      <v-btn href="/" variant="outlined" rounded class="mt-8"
        >{{ $t('error.GoToHomePage') }}
      </v-btn>
    </v-container>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const isLoaded = ref(false)

const theme = useTheme()
const i18n = useI18n({ useScope: 'global' })

onMounted(() => {
  const savedLocale = localStorage.getItem('locale')
  i18n.locale.value = savedLocale || 'en_US'

  const savedTheme = localStorage.getItem('theme')
  theme.global.name.value = savedTheme || 'light'

  isLoaded.value = true
})

const props = defineProps({
  error: {
    type: Object,
    required: true,
    default() {
      return { statusCode: '', message: '' }
    },
  },
})
</script>
