import { u as useRuntimeConfig, g as getJoiMessage, s as sanitizeHtml, d as defineEventHandler, r as readBody, v as validate, a as response } from './nitro/node-server.mjs';
import Joi from 'joi';
import { T as Try } from './Try.mjs';
import nodemailer from 'nodemailer';
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

const config = useRuntimeConfig();
async function sendContactEmail(data) {
  let transporter = nodemailer.createTransport({
    host: config.AWS_SMTP_REGION,
    port: config.AWS_SMTP_PORT,
    auth: {
      user: config.AWS_SMTP_USERNAME,
      pass: config.AWS_SMTP_PASSWORD
    }
  });
  const [err, info] = await Try(
    transporter.sendMail({
      sender: data.name,
      from: `${data.name} <${config.ADMIN_EMAIL}>`,
      replyTo: data.email,
      to: config.WEBSITE_EMAIL,
      subject: data.subject,
      html: data.message
    })
  );
  transporter.close();
  return [err, info];
}

const sanitize = (value) => sanitizeHtml(value);
const mailSchema = {
  name: Joi.string().custom(sanitize).trim().required().empty().min(2).max(255).messages(getJoiMessage("name", "string", ["required", "empty", "min", "max"])),
  email: Joi.string().custom(sanitize).trim().lowercase().required().empty().email({ tlds: { allow: false } }).max(255).messages(getJoiMessage("email", "string", ["required", "empty", "email", "max"])),
  subject: Joi.string().custom(sanitize).trim().required().empty().min(2).max(255).messages(getJoiMessage("subject", "string", ["required", "empty", "min", "max"])),
  message: Joi.string().custom(sanitize).trim().required().empty().min(2).max(3e4).messages(getJoiMessage("message", "string", ["required", "empty", "min", "max"]))
};

const contact = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const [vErr, v] = validate(body, mailSchema);
  if (vErr || !v)
    return response("error, unknown");
  const [err, result] = sendContactEmail(v);
  if (err)
    return response("error, errorSending, email");
  return response("success, emailSent, email");
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
