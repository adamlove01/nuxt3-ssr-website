import { d as defineEventHandler, j as getRouterParam, v as validate, a as response, b as db, h as userSchema } from './nitro/node-server.mjs';
import { T as Try } from './Try.mjs';
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
import 'joi';
import 'jsonwebtoken';
import 'xss';

const _id_ = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const [vErr, v] = validate({ id }, userSchema);
  if (vErr || !v)
    return response("error, unknown");
  const [err, row] = await Try(db("users").where("id", v.id));
  if (err || !row.length)
    return response("error, notFound, user");
  const options = {
    page: 1,
    itemsPerPage: -1,
    sortBy: null,
    search: null,
    column: null,
    itemsLength: 1,
    totalPages: 1
  };
  return response("success, read, user", { row: row[0], options });
});

export { _id_ as default };
//# sourceMappingURL=_id_2.mjs.map
