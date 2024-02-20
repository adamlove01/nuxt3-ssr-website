import { authorizeSchema } from '@/composables/schemas/authorizeSchema.js'
import { validate } from '@/composables/validate.js'
import jwt from 'jsonwebtoken'

const config = useRuntimeConfig()

// Check user's login status
export function checkLogin(event) {
  const headers = getHeaders(event)
  const refreshToken = getCookie(event, 'refreshToken')

  // Prepare input for validation
  const input = {
    accessToken: headers.authorization || '',
    refreshToken: refreshToken || '',
  }

  const defaultData = {
    role: '*',
    id: null,
  }

  console.log('input=', JSON.stringify(input))

  // Sanitize and validate tokens
  const [vErr, v] = validate(input, authorizeSchema)
  if (vErr || !v) {
    // validation error -- user is logged out
    deleteCookie(event, 'refreshToken')
    return { status: 'info', code: 'loggedOut', data: defaultData }
  }

  // Use the first token that is set
  const token = v.accessToken || v.refreshToken

  console.log('token=', JSON.stringify(token))

  // Check if user is logged in
  let loginData = {}
  try {
    loginData = jwt.verify(token, config.TOKEN_AUTH_SECRET) ?? {}
  } catch (err) {
    return { status: 'info', code: 'loggedOut', data: defaultData }
  }

  console.log('loginData=', JSON.stringify(loginData))

  if (!Object.keys(loginData).length) {
    // User is logged out
    deleteCookie(event, 'refreshToken')
    return { status: 'info', code: 'loggedOut', data: defaultData }
  }

  // User is logged in. Return login data
  return {
    status: 'info',
    code: 'loggedIn',
    data: {
      id: loginData.id,
      email: loginData.email,
      name: loginData.name,
      role: loginData.role,
    },
  }
}
