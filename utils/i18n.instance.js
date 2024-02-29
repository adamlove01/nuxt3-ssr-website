import { createI18n } from 'vue-i18n'

let files = {}

files = import.meta.glob('/locales/en_US/**/*.json', { eager: true })
const en_US = Object.assign({}, ...Object.values(files))

files = import.meta.glob('/locales/es_MX/**/*.json', { eager: true })
const es_MX = Object.assign({}, ...Object.values(files))

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en_US',
  fallbackLocale: 'en_US',
  warnHtmlMessage: false,
  messages: {
    en_US,
    es_MX,
  },
})

export default i18n
