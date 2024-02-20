import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    components: {
      ...components,
      ...labsComponents,
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          variables: {}, // ✅ this property is required to avoid Vuetify crash
          colors: {
            primary: '#6200EE',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
        dark: {
          dark: true,
          variables: {}, // ✅ this property is required to avoid Vuetify crash
          colors: {},
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
