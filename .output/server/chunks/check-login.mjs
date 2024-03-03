import { d as defineEventHandler, c as checkLogin$1 } from './nitro/node-server.mjs';
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

const checkLogin = defineEventHandler((event) => checkLogin$1(event));

export { checkLogin as default };
//# sourceMappingURL=check-login.mjs.map
