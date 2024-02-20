import { paginateSchema } from '@/composables/schemas/paginateSchema.js'
import { validate, response } from '@/composables/validate.js'

// Read all users
export default defineEventHandler(async (event) => {
  // Sanitize and validate pagination data
  const input = getQuery(event)
  const [vErr, v] = validate(input, paginateSchema)
  if (vErr || !v) return response('error, unknown')

  // let { page, itemsPerPage, sortBy, search, column } = getQuery(event)
  let query = db('users')

  const search = v.search || null
  const column = v.column || null
  const sortBy = v.sortBy || null
  const page = v.page || 1
  const itemsPerPage = v.itemsPerPage || -1

  if (search && column) {
    // Filter by the whole search term, for each column
    const columnArray = column instanceof Array ? column : [column]
    columnArray.forEach((col, index) => {
      if (index === 0) {
        query.whereILike(col, `%${search}%`)
      } else {
        query.orWhereILike(col, `%${search}%`)
      }
    })
  }

  // Get total rows before pagination. 'clone' to avoid changing the query
  const [err2, allRows] = await Try(query.clone().count('id'))
  if (err2) return response('error, errorReading, users')
  if (allRows.length < 1) return response('info, noneInList, users')

  const itemsLength = allRows[0].count
  const totalPages =
    itemsPerPage === -1 ? 1 : Math.ceil(itemsLength / itemsPerPage)

  if (sortBy) {
    const { key, order } = JSON.parse(sortBy)
    query = query.orderBy(key, order)
  }

  // Paginate, if there is a page value
  if (itemsPerPage !== -1) {
    const offset = (page - 1) * itemsPerPage
    query = query.limit(itemsPerPage).offset(offset)
  }

  // Get rows for one page ( or all rows if itemsPerPage == -1 )
  const [err3, rows] = await Try(query)
  if (err3) return response('error, errorReading, users')

  const options = {
    page: page,
    itemsPerPage: itemsPerPage,
    sortBy: sortBy,
    search: search,
    column: column,
    itemsLength: itemsLength,
    totalPages: totalPages,
  }

  return response('success, read, users', { rows: rows, options: options })
})
