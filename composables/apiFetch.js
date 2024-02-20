import { useLoginStore } from '@/stores/login'

export async function apiFetch(path, options = {}) {
  // modify options as needed
  // const config = useRuntimeConfig()
  // options.baseURL = config.public.baseUrl

  const login = useLoginStore()

  // Add Authorization token to the headers of all API calls.
  options.headers = options.headers || {}
  options.headers.Authorization = login.token

  const { data, error } = await useFetch(path, options)

  console.log('AWAIT --- USE FETCH ERROR? ', error.value)

  if (error.value) {
    console.log('SERVER ERROR:', error.value)
    return {
      status: 'error',
      code: 'unknown',
      field: null,
      details: null,
    }
  }

  const { status, code, field, details } = data.value

  return { status, code, field, details }
}
