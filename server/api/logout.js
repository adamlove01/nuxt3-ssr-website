import { response } from '@/composables/validate.js'

export default defineEventHandler((event) => {
  // Delete cookie if it exists and
  let refreshToken = getCookie(event, 'refreshToken') || ''
  if (refreshToken) deleteCookie(event, 'refreshToken')
  return response('success, loggedOut, user')
})
