import { useLoginStore } from '@/stores/login'
import { translate } from '@/composables/translate'

// Note: from.path is the requested destination path
export default defineNuxtRouteMiddleware(async (from) => {
  const login = useLoginStore()

  const pathsToSkip = ['/undefined']
  if (pathsToSkip.includes(from.path) || from.path.includes('/login')) return

  // This will run on 1) initial load, 2) page refresh or 3) new tab opened.
  if (process.server) {
    // Update the login info based on the server token
    const { data, error } = await useFetch('/api/check-login', {
      method: 'POST',
      body: { token: login.token },
    })

    if (error.value) return navigateTo(`/login?m=loginError`)

    if (data.value.code === 'loggedIn') {
      login.setUser(data.value.data)
      login.setLoggedIn(true)
    } else {
      // Set User as logged out
      login.setToken('')
      login.setUser({})
      login.setLoggedIn(false)
    }
  }

  // This will run in all cases
  if (process.client) {
    // Authorize the route and role based on the permissions list
    // - from /composables/authorize.js
    const auth = await authorize(from.path, login.role || '*', login.id || null)

    // The route does not match any route in the access list
    if (auth === 'noRouteMatch') {
      throw createError({ statusCode: 404 })
    }

    if (auth === 'noRoleMatch') {
      if (login.loggedIn) {
        // Logged in but the role is not allowed for this route
        throw createError({
          statusCode: 401,
          message: translate('notAuthorized'),
        })
      } else {
        // Not logged in but needs to be for this route -- redirect to login
        return navigateTo(`/login?m=unauthorized&to=${from.path}`)
      }
    }
  }
})
