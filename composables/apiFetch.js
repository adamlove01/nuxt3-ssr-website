import { useLoginStore } from '@/stores/login'

export async function apiFetch(path, options = {}) {
  const login = useLoginStore()

  // Add Authorization token to the headers of all API calls.
  options.headers = options.headers || {}
  options.headers.Authorization = login.token
  options.watch = false

  // const { data, error } = await useFetch(path, options)
  let data = {}
  try {
    data = await $fetch(path, options)
  } catch (error) {
    console.log('SERVER ERROR:', error)
    return {
      status: 'error',
      code: 'unknown',
      field: null,
      details: null,
    }
  }

  const { status, code, field, details } = data

  return { status, code, field, details }
}
