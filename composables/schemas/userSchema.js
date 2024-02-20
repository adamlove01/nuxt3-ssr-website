import Joi from 'joi'
import { getJoiMessage as msg } from '../validate'
import sanitizeHtml from 'sanitize-html'

const sanitize = (value) => sanitizeHtml(value)

// Note that 'empty()' will trigger before 'required()' so we need a separate
// trigger and message for it.
export const userSchema = {
  id: Joi.number()
    .integer()
    .required()
    .greater(0)
    .messages(msg('id', 'number', ['integer', 'required', 'greater0'])),
  name: Joi.string()
    .custom(sanitize)
    .trim()
    .required()
    .empty()
    .min(2)
    .max(255)
    .messages(msg('name', 'string', ['required', 'empty', 'min2', 'max255'])),
  email: Joi.string()
    .custom(sanitize)
    .trim()
    .lowercase()
    .required()
    .empty()
    .email({ tlds: { allow: false } })
    .max(255)
    .messages(msg('email', 'string', ['required', 'empty', 'email', 'max255'])),
  password: Joi.string()
    .trim()
    .required()
    .empty()
    .min(8)
    .max(255)
    .messages(
      msg('password', 'string', ['required', 'empty', 'min8', 'max255'])
    ),
  image: Joi.string()
    .custom(sanitize)
    .trim()
    .min(4)
    .messages(msg('image', 'string', ['min4'])),
  role: Joi.string()
    .trim()
    .required()
    .empty()
    .valid('client', 'admin')
    .messages(msg('role', 'string', ['required', 'empty', 'valid'])),
  status: Joi.string()
    .trim()
    .required()
    .empty()
    .valid('active', 'inactive', 'pending')
    .messages(msg('status', 'string', ['required', 'empty', 'valid'])),
  created_at: Joi.date()
    .iso()
    .required()
    .empty()
    .messages(msg('created_at', 'date', ['required', 'empty'])),
  updated_at: Joi.date()
    .iso()
    .required()
    .empty()
    .messages(msg('updated_at', 'date', ['required', 'empty'])),
  last_login: Joi.date()
    .iso()
    .required()
    .empty()
    .messages(msg('last_login', 'date', ['required', 'empty'])),
}
