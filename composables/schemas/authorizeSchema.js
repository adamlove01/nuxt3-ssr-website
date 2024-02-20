import Joi from 'joi'
import { getJoiMessage as msg } from '../validate'
import sanitizeHtml from 'sanitize-html'

const sanitize = (value) => sanitizeHtml(value)

// Note that 'empty()' will trigger before 'required()' so we need a separate
// trigger and message for it.
export const authorizeSchema = {
  route: Joi.string()
    .custom(sanitize)
    .required()
    .empty()
    .max(255)
    .messages(msg('route', 'string', ['required', 'empty', 'max'])),
  role: Joi.string()
    .custom(sanitize)
    .trim()
    .lowercase()
    .required()
    .empty()
    .max(255)
    .messages(msg('role', 'string', ['required', 'empty', 'max'])),
  accessToken: Joi.string()
    .allow('')
    .custom(sanitize)
    .max(255)
    .pattern(/^[a-zA-Z0-9-_.]*$/)
    .messages(msg('accessToken', 'string', ['max', 'pattern.base'])),
  refreshToken: Joi.string()
    .allow('')
    .custom(sanitize)
    .max(255)
    .pattern(/^[a-zA-Z0-9-_.]*$/)
    .messages(msg('refreshToken', 'string', ['max', 'pattern.base'])),
  token: Joi.string()
    .allow('')
    .custom(sanitize)
    .max(255)
    .pattern(/^[a-zA-Z0-9-_.]*$/)
    .messages(msg('token', 'string', ['max', 'pattern.base'])),
}
