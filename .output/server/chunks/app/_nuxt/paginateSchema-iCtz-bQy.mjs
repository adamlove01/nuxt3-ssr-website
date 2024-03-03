import { j as useLoginStore, A as getJoiMessage } from '../server.mjs';
import Joi from 'joi';
import { s as sanitizeHtml } from '../../nitro/node-server.mjs';

async function apiFetch(path, options = {}) {
  const login = useLoginStore();
  options.headers = options.headers || {};
  options.headers.Authorization = login.token;
  options.watch = false;
  let data = {};
  try {
    data = await $fetch(path, options);
  } catch (error) {
    return {
      status: "error",
      code: "unknown",
      field: null,
      details: null
    };
  }
  const { status, code, field, details } = data;
  return { status, code, field, details };
}
const sanitize$1 = (value) => sanitizeHtml(value);
const mailSchema = {
  name: Joi.string().custom(sanitize$1).trim().required().empty().min(2).max(255).messages(getJoiMessage("name", "string", ["required", "empty", "min", "max"])),
  email: Joi.string().custom(sanitize$1).trim().lowercase().required().empty().email({ tlds: { allow: false } }).max(255).messages(getJoiMessage("email", "string", ["required", "empty", "email", "max"])),
  subject: Joi.string().custom(sanitize$1).trim().required().empty().min(2).max(255).messages(getJoiMessage("subject", "string", ["required", "empty", "min", "max"])),
  message: Joi.string().custom(sanitize$1).trim().required().empty().min(2).max(3e4).messages(getJoiMessage("message", "string", ["required", "empty", "min", "max"]))
};
const sanitize = (value) => sanitizeHtml(value);
({
  page: Joi.number().integer().required().greater(0).less(2147483647).messages(
    getJoiMessage("page", "number", ["integer", "required", "greater", "less"])
  ),
  itemsPerPage: Joi.number().integer().required().greater(-2).less(2147483647).messages(
    getJoiMessage("itemsPerPage", "number", ["integer", "required", "greater", "less"])
  ),
  sortBy: Joi.string().custom(sanitize).trim().max(255).messages(getJoiMessage("sortBy", "string", ["max"])),
  search: Joi.string().custom(sanitize).trim().allow(null, "").max(255).messages(getJoiMessage("search", "string", ["max"])),
  // For arrays, if there is only one item it will be passed to the server as
  // a string, which is why .single() is added, to validate a string as an array
  column: Joi.array().items(
    Joi.string().custom(sanitize).trim().allow(null, "").max(255).messages(getJoiMessage("column", "string", ["max"]))
  ).single(),
  itemsLength: Joi.number().integer().required().greater(-1).less(2147483647).messages(
    getJoiMessage("itemsLength", "number", ["integer", "required", "greater", "less"])
  ),
  totalPages: Joi.number().integer().required().greater(-1).less(2147483647).messages(
    getJoiMessage("totalPages", "number", ["integer", "required", "greater", "less"])
  )
});

export { apiFetch as a, mailSchema as m };
//# sourceMappingURL=paginateSchema-iCtz-bQy.mjs.map
