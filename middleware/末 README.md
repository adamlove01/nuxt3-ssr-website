# MIDDLEWARE

Files in the `/middleware` directory run before the client page loads. Since our project is server-side rendered (SSR), the files run on the server.

## auth.global.js

Thie middleware file runs automatically for every `/pages` route on the site.

When the site is first loaded, it runs on the server and checks the login status based on hte HTTP-only JWT token, then passes that info to the Pinia store on the Client side. Then it runs on the Client side, which authorizes the route based on the login status and role. Thereafter, whenever the route changes, the middlware will run on the Client only and use the Pinia store's info for login status and role when authorizing the route.

These are the possible status codes:

| Status  | Code        | Description                                          |
| ------- | ----------- | ---------------------------------------------------- |
| Error   | 404         | ROUTE is not in the permissions list                 |
| Error   | 401         | Logged in -- USER Role not found in permissions list |
| Error   | notLoggedIn | Logged out                                           |
| Success | loggedIn    | Logged in -- Role is in permissions list             |
| Success | loggedOut   | Logged out -- ROUTE does not require login           |
