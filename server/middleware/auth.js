import { checkLogin } from '@/server/controllers/checkLogin'
import { authorize } from '@/composables/authorize'

export default defineEventHandler((event) => {
  const url = event.node.req.url
  // The api/check-login route comes from route middleware
  if (!url.includes('api/') || url.includes('api/check-login')) return

  // Get login status from cookie token
  const { status, code, data } = checkLogin(event)

  // Authorize the route and role based on the permissions list
  const auth = authorize(url, data.role, data.id)
  if (auth === 'noRouteMatch') throw createError({ statusCode: 404 })
  if (auth === 'noRoleMatch') throw createError({ statusCode: 403 })
})
