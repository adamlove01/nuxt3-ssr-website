import { userSchema } from '@/composables/schemas/userSchema.js'
import { validate, response } from '@/composables/validate.js'

// Delete user
export default defineEventHandler(async (event) => {
  // Sanitize and validate input
  const id = getRouterParam(event, 'id')
  const [vErr, v] = validate({ id: id }, userSchema)
  if (vErr || !v) return response('error, unknown')

  // Delete user in db
  const [err, count] = await Try(db('users').delete().where('id', v.id))
  if (err) return response('error, errorDeleting, user')
  if (count < 1) return response('error, notFoundDeleted, user')

  return response('success, deleted, user', count)
})
