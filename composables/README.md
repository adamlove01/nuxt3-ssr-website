# Validation

The scripts in this folder are used to sanitize and validate **all input** on the client and server.

This validation system is a super simple way to sanitize and validate input across your entire app.

As a bonus, **all error messages** are contained in two files: JoiMessages.js and customMessages.js so you can easily modify them or translate them into other languages.

## How does the validation script work?

For each table in the database there is one schema which describes how to sanitize and validate all the fields of that table. We can also create non-databse schemas, such as authorizeSchema(), which validates our auth input.

The sanitizeHtml script contains functions to remove all HTML, or only dangerous HMTL, from the input. These functions are called in the schemas.

It is important to understand that Joi is being used to **not only** validate, but **also** to alter the input, and to return optimized input. For example, in a schema we can `.trim()` the input, or convert to `.lowercase()`, or call a custom script like `.custom(sanitize)` (to remove html tags), and these change the return values.

The key to this validation method is the validate.js script. Using this script we can pass **any subset** of input keys, an input object and a schema. The validate() function will then

- a) Find the input keys in the input object;
- b) Find the input keys in the schema; and
- c) Validate the input values based on the schema key rules.

Using this method, we only need one schema, since we can validate any set of keys on the fly, without having to create additional schemas. Here are some examples, all using userSchema.js:

```
const [vErr, v] = validate('email, password', req.body, schema)
```

```
const [vErr, v] = validate('name, email, type, status', req.body, schema)
```

```
  const [vErr, v] = validate('id', req.params, schema)
```

If validation fails, all error messages are contained in a single file:
`JoiMessages.js`. The `msg()` function generates a client-readable error message that can be returned to the end user.

## apiFetch

This is a wrapper around useFetch() so we can capture error messages and insert the Authorization token into every request.

## authorize.js

This is called both in the Client `/middleware` and Server `/api/middleware` to authorize the route or API endpoint based on the `permissions.js` file.

## index.js

The composables folder only auto-imports files that are directly inside the composables folder. So we are declaring the files in the `/schemas` folder so they are also auto-imported.

## permissions.js

The file contains all the route permissions for Client `/pages` routes and Server `/api` routes. Each item in the lists has a route (including wildcards), the users who can accecc that route, and optionally an additional check in brackets `{}` such as `{user.id:isLoggedInUser}` which checks if the user ID in the route matches the logged-in user.

## translate.js

This file is for translating validation and server messages based on the translation keys in the `/locales` folder. This allows us to keep all translations in one place in the app.

## validate.js

The `validate()` function can validate any subset of keys in any schema. The `validateField()` function is for validating a single field on the Client side for form rules validation, and returns key/values that are used to translate error messages if any.
