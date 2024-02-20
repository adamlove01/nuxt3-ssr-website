import i18n from '@/utils/i18n.instance.js'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n)
})
