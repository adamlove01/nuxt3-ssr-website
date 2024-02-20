import { mailSchema } from '@/composables/schemas/mailSchema.js'
import { sendContactEmail } from '@/server/utils/sendContactEmail.js'
import { validate, response } from '@/composables/validate.js'

export default defineEventHandler(async (event) => {
  // Sanitize and validate contact input
  const body = await readBody(event)
  const [vErr, v] = validate(body, mailSchema)
  if (vErr || !v) return response('error, unknown')

  const [err, result] = sendContactEmail(v)
  if (err) return response('error, errorSending, email')

  return response('success, emailSent, email')
})
