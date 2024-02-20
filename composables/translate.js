import { createI18n } from 'vue-i18n'
import { useSessionStore } from '@/stores/session'

const filesEnUS = import.meta.glob(
  [
    '../locales/en_US/joiMessages.json',
    '../locales/en_US/serverMessages.json',
    '../locales/en_US/fields.json',
    '../locales/en_US/all.json',
  ],
  { eager: true }
)

const filesEsMX = import.meta.glob(
  [
    '../locales/es_MX/joiMessages.json',
    '../locales/es_MX/serverMessages.json',
    '../locales/es_MX/fields.json',
    '../locales/es_MX/all.json',
  ],
  { eager: true }
)

const i18n = createI18n({
  locale: 'en_US',
  fallbackLocale: 'en_US',
  legacy: false,
  globalInjection: true,
  warnHtmlMessage: false,
  messages: {
    en_US: Object.assign({}, ...Object.values(filesEnUS)),
    es_MX: Object.assign({}, ...Object.values(filesEsMX)),
  },
})

// Translate Joi and server message codes on Client side
export function translate(code, field, limit, joi = false) {
  const source = joi ? 'joiMessages' : 'serverMessages'
  const session = useSessionStore()
  const { t, te, locale } = i18n.global
  // Get locale from session so we are always in sync with the site setting
  locale.value = session.locale || 'en_US'

  if (code === 'pageHead') {
    return t(`${source}.${code}`, { field: t(`all.titles.${field}`) })
  }

  const codeExists = te(`${source}.${code}`)
  const fieldExists = te(`fields.${field}`)

  if (!codeExists) return t(`${source}.error`, { field: code, limit: limit })
  if (!fieldExists) return t(`${source}.${code}`)
  return t(`${source}.${code}`, { field: t(`fields.${field}`), limit: limit })
}

// Get translated pageHead
export function pageHead(title) {
  const session = useSessionStore()
  const { t, locale } = i18n.global
  // Get locale from session so we are always in sync with the site setting
  locale.value = session.locale || 'en_US'
  return t(`serverMessages.pageHead`, { title: t(`all.titles.${title}`) })
}
