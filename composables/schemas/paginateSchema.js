import Joi from 'joi'
import { getJoiMessage as msg } from '../validate'
import sanitizeHtml from 'sanitize-html'

const sanitize = (value) => sanitizeHtml(value)

export const paginateSchema = {
  page: Joi.number()
    .integer()
    .required()
    .greater(0)
    .less(2147483647)
    .messages(
      msg('page', 'number', ['integer', 'required', 'greater', 'less'])
    ),
  itemsPerPage: Joi.number()
    .integer()
    .required()
    .greater(-2)
    .less(2147483647)
    .messages(
      msg('itemsPerPage', 'number', ['integer', 'required', 'greater', 'less'])
    ),
  sortBy: Joi.string()
    .custom(sanitize)
    .trim()
    .max(255)
    .messages(msg('sortBy', 'string', ['max'])),
  search: Joi.string()
    .custom(sanitize)
    .trim()
    .allow(null, '')
    .max(255)
    .messages(msg('search', 'string', ['max'])),
  // For arrays, if there is only one item it will be passed to the server as
  // a string, which is why .single() is added, to validate a string as an array
  column: Joi.array()
    .items(
      Joi.string()
        .custom(sanitize)
        .trim()
        .allow(null, '')
        .max(255)
        .messages(msg('column', 'string', ['max']))
    )
    .single(),
  itemsLength: Joi.number()
    .integer()
    .required()
    .greater(-1)
    .less(2147483647)
    .messages(
      msg('itemsLength', 'number', ['integer', 'required', 'greater', 'less'])
    ),
  totalPages: Joi.number()
    .integer()
    .required()
    .greater(-1)
    .less(2147483647)
    .messages(
      msg('totalPages', 'number', ['integer', 'required', 'greater', 'less'])
    ),
}
