// @ts-check
import { authorizeSchema } from './schemas/authorizeSchema.js'
import { userSchema } from './schemas/userSchema.js'
import { validate } from './validate.js'
import { clientList, serverList } from './permissions.js'

/**
 * Authorize - Check if the route is valid and the role has access to the route
 * @param {string} route
 * @param {string} role
 * @param {number|null} id
 * @returns {string|Object}
 */
export function authorize(route, role = '*', id) {
  console.log('--- in authorize function')
  if (!route) return 'noRouteMatch'

  const [vErr, v] = validate({ route, role }, authorizeSchema)

  if (vErr) {
    // @ts-ignore - Return the correct error by checking the Joi error message
    return vErr.details.some((detail) => detail.message.includes('route'))
      ? 'noRouteMatch'
      : 'noRoleMatch'
  }

  // Choose the server or client list
  const accessList = v.route.includes('api/') ? serverList : clientList

  // Loop through all routes in the accessList
  for (const [aRoute, aRoles] of accessList) {
    // Replace all '*' with '.*' and all {...} with '.+' for regex
    let routeMatchRegex = new RegExp(
      '^' + aRoute.replace(/(\*)/g, '.*').replace(/(\{.+\})/g, '.+') + '$'
    )

    // Match the user route with the routes in the list, including wildcards '*'
    if (routeMatchRegex.test(v.route)) {
      // Route match found. What about the role?
      console.log('aRoles=', aRoles, ' v.role=', v.role)
      if (aRoles !== '*' && !aRoles.includes(v.role)) return 'noRoleMatch'
      // The user's role is authorized.
      // Are there any params and conditions, eg. /{user.id:isLoggedInUser}
      if (aRoute.match(/\{.+\}/)) {
        // We have at least one param to authorize.
        return authorizeRouteParams(aRoute, v.route, id)
      }
      return 'allMatch'
    }
  }

  return 'noRouteMatch'
}

/**
 * Authorize route params
 * @param {string} aRoute
 * @param {string} route
 * @param {number|null} id
 */
function authorizeRouteParams(aRoute, route, id) {
  const routeParts = route.split('/')
  const aRouteParts = aRoute.split('/')

  for (let [index, aRoutePart] of aRouteParts.entries()) {
    // Does this aRoutePart include {...} ?
    if (aRoutePart.match(/\{.+\}/)) {
      // Remove curly braces, eg. {user.id:isLoggedInUser}
      const paramString = aRoutePart.slice(1, -1)
      // Split param and condition, if any, eg. user.id:isLoggedInUser
      const [param, condition = null] = paramString.split(':')
      // Split param into schema type and key, eg. user.id
      const [schemaType, key] = param.split('.')

      // Validate the param
      switch (schemaType) {
        case 'user':
          const [vErr, v] = validate({ [key]: routeParts[index] }, userSchema)
          if (vErr) return 'noRoleMatch'
          break

        default:
          return 'noRoleMatch'
      }

      if (!condition) continue

      switch (condition) {
        case 'isLoggedInUser':
          // Compare URL id to user id
          if (!id || parseInt(routeParts[index]) !== id) return 'noRoleMatch'
          break

        default:
          return 'noRoleMatch'
      }
    }
  }

  return 'allMatch'
}
