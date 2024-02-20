import { checkLogin } from '../controllers/checkLogin'

// Check user's login status
export default defineEventHandler((event) => checkLogin(event))
