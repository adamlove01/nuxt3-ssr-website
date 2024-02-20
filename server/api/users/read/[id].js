import { userSchema } from '@/composables/schemas/userSchema.js'
import { validate, response } from '@/composables/validate.js'

// Read all users
export default defineEventHandler(async (event) => {
  // Sanitize and validate input
  const id = getRouterParam(event, 'id')
  console.log('SERVER - id=', id)
  const [vErr, v] = validate({ id: id }, userSchema)
  console.log('SERVER - vErr=', vErr)
  if (vErr || !v) return response('error, unknown')

  console.log('SERVER - Validation OK')

  // Get user row
  const [err, row] = await Try(db('users').where('id', v.id))
  if (err || !row.length) return response('error, notFound, user')

  const options = {
    page: 1,
    itemsPerPage: -1,
    sortBy: null,
    search: null,
    column: null,
    itemsLength: 1,
    totalPages: 1,
  }

  console.log('SERVER - row=', row)

  return response('success, read, user', { row: row[0], options: options })
})
