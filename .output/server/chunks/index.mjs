import { d as defineEventHandler } from './nitro/node-server.mjs';
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

const index = defineEventHandler((event) => {
  if (event.req.method === "GET") {
    return { success: true };
  }
  if (event.req.method === "POST") {
    return { success: true };
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
