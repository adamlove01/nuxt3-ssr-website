import { userSchema } from '@/composables/schemas/userSchema.js'
import { validate, response } from '@/composables/validate.js'
import { sendConfirmationEmail } from '@/server/utils/sendConfirmationEmail.js'
import bcrypt from 'bcryptjs'

// Create user
export default defineEventHandler(async (event) => {
  // Sanitize and validate user data
  const body = await readBody(event)
  const [vErr, v] = validate(body, userSchema)
  if (vErr || !v) return response('error, unknown')

  // Check db for existing email
  const [err, row] = await Try(db('users').where('email', v.email))
  if (err) return response('error, errorCreating, user', err)
  if (row.length > 0) return { status: 'error', code: 'inUse, email' }

  // Prevent overwriting 'admin' name
  if (v.name === 'admin') {
    const [err1, row1] = await Try(db('users').where('name', 'admin'))
    if (err1) return response('error, user, errorCreating', err1)
    if (row1.length > 0) return response('error, inUse, adminName')

    v.role = 'admin'
  }

  // Save user in db with encrypted password
  const salt = bcrypt.genSaltSync(10)
  const [err2, row2] = await Try(
    db('users')
      .insert({
        name: v.name,
        email: v.email,
        password: bcrypt.hashSync(v.password, salt),
        role: v.role,
        status: v.status,
      })
      .then((id) => {
        return id
      })
  )
  if (err2) return response('error, errorCreating, user', err2)
  if (row2 === undefined) return response('error, errorCreating, user')

  if (v.status === 'pending') {
    sendConfirmationEmail({ id: row2[0], email: v.email })
  }

  return response('success, registered, user', row2)
})
