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
  const [err, count] = await Try(db("users").delete().where("id", v.id));
  if (err)
    return response("error, errorDeleting, user");
  if (count < 1)
    return response("error, notFoundDeleted, user");
  return response("success, deleted, user", count);
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
