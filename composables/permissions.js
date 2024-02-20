// Client-side permissions list. Use '*' for any route or role wildcard
// clientList [route, roles]
export const clientList = [
  ['/', '*'],
  ['/login', '*'],
  ['/logout', '*'],
  ['/register', '*'],
  ['/verify', '*'],
  ['/forgot-password', '*'],
  ['/reset-password', '*'],
  ['/contact', '*'],
  ['/about', '*'],
  ['/account/{user.id:isLoggedInUser}', 'client, admin'],
  ['/admin', 'admin'],
]

// Server-side permissions list. Use '*' for any route or role wildcard
// serverList [route, roles]
export const serverList = [
  ['/api/login', '*'],
  ['/api/logout', '*'],
  ['/api/register', '*'],
  ['/api/verify', '*'],
  ['/api/forgot-password', '*'],
  ['/api/reset-password', '*'],
  ['/api/sendContactEmail', '*'],
  ['/api/admin', 'admin'],
  ['/api/users/read/{user.id:isLoggedInUser}', 'client, admin'],
  ['/api/users/*', 'admin'],
  ['/api/captcha', '*'],
]
