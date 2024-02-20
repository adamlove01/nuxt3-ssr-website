import { userSchema } from '@/composables/schemas/userSchema.js'
import { validate, response } from '@/composables/validate.js'

// Update user
export default defineEventHandler(async (event) => {
  // Sanitize and validate user data
  const body = await readBody(event)
  const [vErr, v] = validate(body, userSchema)
  if (vErr || !v) return response('error, unknown')

  // Check if email is being used by another user
  const [err, r] = await Try(
    db('users').where('email', v.email).whereNot('id', v.id).limit(1)
  )
  if (err) return response('error, errorUpdating, user', err)
  if (r.length > 0) return response('error, inUse, email')

  // Initialize user data
  const date = new Date().toISOString().replace('T', ' ').split('.')[0]
  const user = {
    name: v.name,
    email: v.email,
    role: v.role,
    status: v.status,
    updated_at: date,
  }

  // Update user in db
  const [err2, row] = await Try(db('users').update(user).where('id', v.id))
  if (err2) return response('error, errorUpdating, user')
  if (row === undefined) return response('error, notFound, user')

  return response('success, updated, user', user)
})
