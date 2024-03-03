import { d as defineEventHandler, r as readBody, v as validate, a as response, b as db, e as setCookie, f as getCookie, p as parseCookies, u as useRuntimeConfig, h as userSchema } from './nitro/node-server.mjs';
import { T as Try } from './Try.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
import 'xss';

const config = useRuntimeConfig();
const login = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const [vErr, v] = validate(body, userSchema);
  if (vErr || !v)
    return response("error, unknown");
  const [err, row] = await Try(db("users").where("email", v.email));
  if (err)
    return response("error, errorLoggingIn, user");
  if (row.length < 1)
    return response("error, notFoundEntered, email");
  const r = row[0];
  const isMatched = await bcrypt.compare(v.password, r.password);
  if (isMatched === false)
    return response("error, invalid, password");
  if (r.status === "pending")
    return response("error, emailPending, account");
  if (r.status === "inactive")
    return response("error, emailInactive, account");
  const last_login = { last_login: (/* @__PURE__ */ new Date()).toISOString().split(".")[0] };
  const [err2, r2] = await Try(db("users").update(last_login).where("id", r.id));
  if (err2)
    return response("error, errorLoggingIn, user");
  const user = { id: r.id, email: r.email, name: r.name, role: r.role };
  let tokenData = user;
  tokenData.rand = Math.floor(Math.random() * 1e7);
  const key = config.TOKEN_AUTH_SECRET;
  const accessToken = jwt.sign(tokenData, key, {
    expiresIn: "15 minutes"
  });
  tokenData.rand = Math.floor(Math.random() * 1e7);
  const refreshToken = jwt.sign(tokenData, key, {
    expiresIn: "7 days"
  });
  await setCookie(event, "refreshToken", refreshToken, {
    path: "/",
    maxAge: 7 * 86400,
    secure: config.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "Strict"
  });
  await getCookie(event, "refreshToken");
  parseCookies(event);
  return response("success, loggedIn, user", { token: accessToken, user });
});

export { login as default };
//# sourceMappingURL=login.mjs.map
