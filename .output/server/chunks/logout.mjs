import { d as defineEventHandler, f as getCookie, i as deleteCookie, a as response } from './nitro/node-server.mjs';
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

const logout = defineEventHandler((event) => {
  let refreshToken = getCookie(event, "refreshToken") || "";
  if (refreshToken)
    deleteCookie(event, "refreshToken");
  return response("success, loggedOut, user");
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
