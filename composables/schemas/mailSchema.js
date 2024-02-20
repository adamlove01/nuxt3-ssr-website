import Joi from 'joi'
import { getJoiMessage as msg } from '../validate'
import sanitizeHtml from 'sanitize-html'

const sanitize = (value) => sanitizeHtml(value)

// Note that 'empty()' will trigger before 'required()' so we need a separate
// trigger and message for it.
export const mailSchema = {
  name: Joi.string()
    .custom(sanitize)
    .trim()
    .required()
    .empty()
    .min(2)
    .max(255)
    .messages(msg('name', 'string', ['required', 'empty', 'min', 'max'])),
  email: Joi.string()
    .custom(sanitize)
    .trim()
    .lowercase()
    .required()
    .empty()
    .email({ tlds: { allow: false } })
    .max(255)
    .messages(msg('email', 'string', ['required', 'empty', 'email', 'max'])),
  subject: Joi.string()
    .custom(sanitize)
    .trim()
    .required()
    .empty()
    .min(2)
    .max(255)
    .messages(msg('subject', 'string', ['required', 'empty', 'min', 'max'])),
  message: Joi.string()
    .custom(sanitize)
    .trim()
    .required()
    .empty()
    .min(2)
    .max(30000)
    .messages(msg('message', 'string', ['required', 'empty', 'min', 'max'])),
}
