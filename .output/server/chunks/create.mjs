import { u as useRuntimeConfig, d as defineEventHandler, r as readBody, v as validate, a as response, b as db, h as userSchema } from './nitro/node-server.mjs';
import { T as Try } from './Try.mjs';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
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
async function sendConfirmationEmail(user) {
  const date = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").split(".")[0];
  const mail = { id: user.id, type: "sendConfirmationEmail", created: date };
  const token = jwt.sign(mail, config.TOKEN_AUTH_SECRET, {
    expiresIn: "1d"
  });
  const url = `${config.BASE_URL}/verify?token=${token}`;
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
      from: `"Your Website" <${config.ADMIN_EMAIL}>`,
      to: user.email,
      subject: "Verify Your Account",
      html: `Hello!
      <br><br>
      Thank you for signing up at Your Website!
      <br><br>
      Please click on this link to verify your account:
      <br><br>
      <a href="${url}" style="background-color: #0178c7; border: 1px solid #0178c7; border-radius: 12px; color: #ffffff; display: inline-block; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 34px; text-align: center; text-decoration: none; width: 175px; -webkit-text-size-adjust: none; mso-hide: all">VERIFY NOW</a>
      <br><br>
      Thank you so much!`
    })
  );
  if (err)
    console.log(err);
  if (info === void 0)
    console.log("SendMail error: No data.");
  transporter.close();
}

const create = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const [vErr, v] = validate(body, userSchema);
  if (vErr || !v)
    return response("error, unknown");
  const [err, row] = await Try(db("users").where("email", v.email));
  if (err)
    return response("error, errorCreating, user", err);
  if (row.length > 0)
    return { status: "error", code: "inUse, email" };
  if (v.name === "admin") {
    const [err1, row1] = await Try(db("users").where("name", "admin"));
    if (err1)
      return response("error, user, errorCreating", err1);
    if (row1.length > 0)
      return response("error, inUse, adminName");
    v.role = "admin";
  }
  const salt = bcrypt.genSaltSync(10);
  const [err2, row2] = await Try(
    db("users").insert({
      name: v.name,
      email: v.email,
      password: bcrypt.hashSync(v.password, salt),
      role: v.role,
      status: v.status
    }).then((id) => {
      return id;
    })
  );
  if (err2)
    return response("error, errorCreating, user", err2);
  if (row2 === void 0)
    return response("error, errorCreating, user");
  if (v.status === "pending") {
    sendConfirmationEmail({ id: row2[0], email: v.email });
  }
  return response("success, registered, user", row2);
});

export { create as default };
//# sourceMappingURL=create.mjs.map
