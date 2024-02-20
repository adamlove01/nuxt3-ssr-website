# Schemas

Here are all the validation schemas used by the app.

## authorizeSchema.js

This schema is for the server authorization scripts. It validates the route,
type (user type), accessToken, refreshToken, and token (for the `/server/verify` route).

## mailSchema.js

Schema for sending mail.

## paginateSchema.js

Currently for the users table on the admin page, but could also be used for any table that has pagination.

## userSchema.js

This schema is for the `users` table.
