import { d as defineEventHandler, r as readBody, v as validate, a as response, b as db, h as userSchema } from './nitro/node-server.mjs';
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

const update = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const [vErr, v] = validate(body, userSchema);
  if (vErr || !v)
    return response("error, unknown");
  const [err, r] = await Try(
    db("users").where("email", v.email).whereNot("id", v.id).limit(1)
  );
  if (err)
    return response("error, errorUpdating, user", err);
  if (r.length > 0)
    return response("error, inUse, email");
  const date = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").split(".")[0];
  const user = {
    name: v.name,
    email: v.email,
    role: v.role,
    status: v.status,
    updated_at: date
  };
  const [err2, row] = await Try(db("users").update(user).where("id", v.id));
  if (err2)
    return response("error, errorUpdating, user");
  if (row === void 0)
    return response("error, notFound, user");
  return response("success, updated, user", user);
});

export { update as default };
//# sourceMappingURL=update.mjs.map
