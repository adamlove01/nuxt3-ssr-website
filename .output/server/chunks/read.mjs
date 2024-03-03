import { g as getJoiMessage, s as sanitizeHtml, d as defineEventHandler, k as getQuery, v as validate, a as response, b as db } from './nitro/node-server.mjs';
import { T as Try } from './Try.mjs';
import Joi from 'joi';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'knex';
import 'cheerio/lib/slim';
import 'cheerio';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'jsonwebtoken';
import 'xss';

const sanitize = (value) => sanitizeHtml(value);
const paginateSchema = {
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
};

const read = defineEventHandler(async (event) => {
  const input = getQuery(event);
  const [vErr, v] = validate(input, paginateSchema);
  if (vErr || !v)
    return response("error, unknown");
  let query = db("users");
  const search = v.search || null;
  const column = v.column || null;
  const sortBy = v.sortBy || null;
  const page = v.page || 1;
  const itemsPerPage = v.itemsPerPage || -1;
  if (search && column) {
    const columnArray = column instanceof Array ? column : [column];
    columnArray.forEach((col, index) => {
      if (index === 0) {
        query.whereILike(col, `%${search}%`);
      } else {
        query.orWhereILike(col, `%${search}%`);
      }
    });
  }
  const [err2, allRows] = await Try(query.clone().count("id"));
  if (err2)
    return response("error, errorReading, users");
  if (allRows.length < 1)
    return response("info, noneInList, users");
  const itemsLength = allRows[0].count;
  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(itemsLength / itemsPerPage);
  if (sortBy) {
    const { key, order } = JSON.parse(sortBy);
    query = query.orderBy(key, order);
  }
  if (itemsPerPage !== -1) {
    const offset = (page - 1) * itemsPerPage;
    query = query.limit(itemsPerPage).offset(offset);
  }
  const [err3, rows] = await Try(query);
  if (err3)
    return response("error, errorReading, users");
  const options = {
    page,
    itemsPerPage,
    sortBy,
    search,
    column,
    itemsLength,
    totalPages
  };
  return response("success, read, users", { rows, options });
});

export { read as default };
//# sourceMappingURL=read.mjs.map
