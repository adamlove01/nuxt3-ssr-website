import { defineStore } from 'pinia'

// LocalStorage is for non-secure data only
export const useSessionStore = defineStore('session', () => {
  const locale = ref('en_US')
  const theme = ref('light')
  const banner = ref(null)

  function setLocale(data) {
    locale.value = data
    localStorage.setItem('locale', data)
  }

  function setTheme(data) {
    theme.value = data
    localStorage.setItem('theme', data)
  }

  function setBanner(data) {
    banner.value = data
  }

  return {
    locale,
    theme,
    banner,
    setLocale,
    setTheme,
    setBanner,
  }
})
