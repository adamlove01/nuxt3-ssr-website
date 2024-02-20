import { userSchema } from '@/composables/schemas/userSchema.js'
import { validate, response } from '@/composables/validate.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const config = useRuntimeConfig()

// Log in the user
export default defineEventHandler(async (event) => {
  // Sanitize and validate login input
  const body = await readBody(event)
  const [vErr, v] = validate(body, userSchema)
  if (vErr || !v) return response('error, unknown')

  // Get user data using email
  const [err, row] = await Try(db('users').where('email', v.email))
  if (err) return response('error, errorLoggingIn, user')

  // Error: User with that email not found
  if (row.length < 1) return response('error, notFoundEntered, email')

  console.log('v.email=', v.email)
  console.log('row=', JSON.stringify(row))

  const r = row[0]

  // Compare submitted password with password in DB
  const isMatched = await bcrypt.compare(v.password, r.password)
  if (isMatched === false) return response('error, invalid, password')

  // Check if user is pending or inactive
  if (r.status === 'pending') return response('error, emailPending, account')
  if (r.status === 'inactive') return response('error, emailInactive, account')

  // Update last_login in db
  const last_login = { last_login: new Date().toISOString().split('.')[0] }
  const [err2, r2] = await Try(db('users').update(last_login).where('id', r.id))
  if (err2) return response('error, errorLoggingIn, user')

  // Set user data and token data
  const user = { id: r.id, email: r.email, name: r.name, role: r.role }
  let tokenData = user

  console.log('user=', user)

  // Create accessToken for the store. Randomize so tokens are unique.
  tokenData.rand = Math.floor(Math.random() * 10000000)
  const key = config.TOKEN_AUTH_SECRET

  const accessToken = jwt.sign(tokenData, key, {
    expiresIn: '15 minutes',
  })

  // Create refreshToken for cookie. Randomize so tokens are unique.
  tokenData.rand = Math.floor(Math.random() * 10000000)
  const refreshToken = jwt.sign(tokenData, key, {
    expiresIn: '7 days',
  })

  console.log('refreshToken=', refreshToken)
  console.log('BROWSER_BASE_URL=', config.BROWSER_BASE_URL)

  // Create cookie. 'maxAge' must be the same as 'expiresIn' above (in seconds)
  await setCookie(event, 'refreshToken', refreshToken, {
    path: '/',
    maxAge: 7 * 86400,
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'Strict',
  })

  const test = await getCookie(event, 'refreshToken')
  const testParse = parseCookies(event)
  console.log('useCookie=', JSON.stringify(test))
  console.log('testParse=', JSON.stringify(testParse))

  // Return accessToken and user data, to be inserted into the store
  return response('success, loggedIn, user', { token: accessToken, user: user })
})
