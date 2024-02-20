import { checkLogin } from '@/server/controllers/checkLogin'
import { authorize } from '@/composables/authorize'

export default defineEventHandler((event) => {
  const url = event.node.req.url
  // The api/check-login route comes from route middleware
  if (!url.includes('api/') || url.includes('api/check-login')) return

  console.log('SERVER AUTH ..............', url)

  // Get login status from cookie token
  const { status, code, data } = checkLogin(event)

  console.log('SERVER checkLogin ..............' + code)

  // Authorize the route and role based on the permissions list
  console.log('SERVER Authorizing .............. (', url, ')')
  const auth = authorize(url, data.role, data.id)
  console.log('SERVER Authorizing complete..............', auth)

  if (auth === 'noRouteMatch') throw createError({ statusCode: 404 })
  if (auth === 'noRoleMatch') throw createError({ statusCode: 403 })
})
