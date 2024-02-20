import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const id = ref(null)
  const email = ref('')
  const name = ref('')
  const role = ref('')
  const token = ref('')
  const loggedIn = ref(false)

  /**
   * @param {Object} data
   */
  function setUser(data) {
    id.value = data.id || ''
    email.value = data.email || ''
    name.value = data.name || ''
    role.value = data.role || ''
  }

  /**
   * @param {string} data
   */
  function setToken(data) {
    token.value = data
  }

  /**
   * @param {boolean} data
   */
  function setLoggedIn(data) {
    loggedIn.value = data
  }

  return {
    token,
    id,
    email,
    name,
    role,
    loggedIn,
    setToken,
    setUser,
    setLoggedIn,
  }
})
