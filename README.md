# Nuxt3 SSR Website

<img src="public/docs/demo.gif" />
<br><br>

## Online Demo

[demo.olbworld.org](https://demo.olbworld.org/)

## Features

This project is a secure, production-ready website. It has:

- Themes: Light and Dark mode 
- Full Translation: with all text in `/locales` folder
- Route Guards: using client and server middleware - routes and roles
- Nav: with mobile-friendly menus
- Login: JWT server-side HTTPS-only
- Admin page: Users table with create, read, update & delete 
- Security: Validation of all input client & server, best practices throughout.
- Shared Code: Between client and server -- validation, authorization, translation, schemas

The code is clear with comments so you can easily customize it for your own purposes.

## Technology

- [**Nuxt.js**](https://nuxt.com/) - A framework for creating Vue.js applications.
- [**Nitro**](https://nuxt.com/docs/guide/concepts/server-engine) - The built-in Nuxt3 server framework.
- [**Vuetify**](https://vuetifyjs.com/en/) - The Material Design CSS framework for fantastic UI/UX.
- [**Pinia**](https://pinia.vuejs.org/) - The state management store for VueJS.
- [**Knex.js**](http://knexjs.org/) - SQL query builder for Postgres, MariaDB & more.
- [**Joi Validation**](https://joi.dev/api/?v=17.12.0) - A Data validation library for Javascript.
- [**TailwindCSS**](https://tailwindcss.com/docs/installation) - CSS classes to fill in the gaps of Vuetify


## Security Features

- **Sanitized & Validated input** - All input on both the client and server is sanitized & validated using the powerful Joi validation and sanitize-html libraries.
- **User Access List** - Controls access to all pages and routes based on user type. You can change access rules for any page or server route from a single file.

- **Secure JSON WebTokens** - Uses JWT to verify login. The accessToken stored in memory (Pinia) and the refreshToken is HttpOnly with 'expires' and 'sameSite' flags.

## Requirements

- Node >= v18.17.1
- Local database (Postgres, MSSQL, MySQL, MariaDB, Oracle, or Amazon Redshift)

## Project Setup

**Clone Project and Install Dependencies**

`git clone https://github.com/adamlove01/nuxt3-ssr-website.git`  
`cd nuxt3-ssr-website`  
`npm install`

## Set up a local database

You will need a database that is supported by Knex.JS:
Postgres, MSSQL, MySQL, MariaDB, Oracle, or Amazon Redshift.

**Install a database server on your local machine**

Example for postgres on MacOS using brew:  
`brew install postgres`  
`brew services start postgresql`

**Create a database, user and grant user privileges**

`psql postgres`  
`create database myDatabase;`  
`create user myUser with encrypted password 'myPassword';`  
`grant all privileges on database myDatabase to myUser;`  
Exit psql  
`\q`

## Install a Node.js database driver in your project

For postgres, 'pg' is already installed. If you are using another database, for example MariaDB or MySQL, use can uninstall 'pg' and install 'mysql' connector instead:  
`cd nuxt3-ssr-website`  
`npm install mysql`

## Create an .env file

The `.env` file defines your environment variables for the project.  
`cd nuxt3-ssr-website`  
`touch .env`

Add your database connection information that you created above. The default DB_PORT will depend on which database you use. DB_CLIENT is the database connector from above.

The TOKEN_AUTH_SECRET should be a secure password. You can go to [SHA-256 hash calculator](https://xorbin.com/tools/sha256-hash-calculator) and quickly generate a SHA-256 hash.

Example using postgres:

```
NODE_ENV=development
BASE_URL=http://localhost:3000
BROWSER_BASE_URL=http://localhost:3000
TOKEN_AUTH_SECRET=6f3dd6e7005ff901ec4330479363218e61e94fae4a86f072e44db4636b8dd7b2
DB_PORT=5432
DB_NAME=myDatabase
DB_HOST=localhost
DB_USER=myUser
DB_PASSWORD=myPassword
DB_CLIENT='pg'
DB_CHARSET='utf8'
...
```

## Run database migrations and seeds

**Migrations**  
The migration files are in the `/database/migrations` folder. They create tables in your existing database.

`cd nuxt-ssr-secure-website`  
`npx knex migrate:latest`  
If you installed Knex globally (npm install knex -g)  
`knex migrate:latest`

**Seeds**  
The seed files are in the `/databse/seeds` folder. They add data to your tables.

`cd nuxt-ssr-secure-website`  
`npx knex seed:run`  
If you installed Knex globally (npm install knex -g)  
`knex seed:run`

## Start up the local server with hot reload

`cd nuxt3-ssr-website`  
`npm run dev`

go to `localhost:3000` in your browser to see the project running.

## Admin login

By default you can log in as an Admin user:  
Email: `admin@admin.com`  
Password: `admin123`

You should create a new admin user and then delete the default one when you go to production!

## Sending emails from your server

If you try to register a new user at this point, the verification email will not be sent. To send email from your server you will need to configure Nodemailer and an email delivery provider. You can follow this guide:

[Configuring Nodemailer for sending email](docs/emailConfig.md)

## Run the project on your production server

**Set up a database**

First set up a database on the server and start it up.

**Upload the project to your server**

You can use Git or some other method. A good place for your project is `/var/www`.

**Create an .env file**

`cd [project root]`  
`touch .env`

Create a new `.env` file at the root of your server project. You will use all the same variables as on your local system `.env` file, but you need to change the database DB\_ values to match your server database.

`.env`

```
NODE_ENV=production
BASE_URL=http://localhost:3000
BROWSER_BASE_URL=https://myDomain.org
TOKEN_AUTH_SECRET=6f3dd6e7005ff901ec4330479363218e61e94fae4a86f072e44db4636b8dd7b2
DB_PORT=5432
DB_NAME=myDatabase
DB_HOST=localhost
DB_USER=myUser
DB_PASSWORD=myPassword
DB_CLIENT='pg'
DB_CHARSET='utf8'
...
```

BROWSER_BASE_URL should match your domain url.

BASE_URL should be http://localhost:3000 if you are running your site behind NGINX, otherwise it should also match your domain url.

**Run migrations and seeds**

`cd [project root]`  
`[npx?] knex migrate:latest`  
`[npx?] knex seed:run`

**Build the project**

`cd [project root]`  
`npm install`  
`npm run build`  
`npm run start`

Note that `npm run start` will run the app in your terminal, but when you close the terminal or press 'ctrl-c', the app will stop. When you set up systemd as below, you can run `systemctl start mydomain` instead, and your app will always be running in the background.

## Set up systemd to autostart the project on your server

You will want your app to restart automatically if your server is restarted. On most Linux systems, you can configure systemd to auto-start your app. To do that, you can follow this guide:

[Set up systemd to autostart](docs/systemd.md)

## Author

[Adam Love](https://github.com/adamlove01)
