export default defineEventHandler((event) => {
  if (event.req.method === 'GET') {
    // return blogs list;
    return { success: true }
  }
  if (event.req.method === 'POST') {
    // create a blog
    // return the blog;
    return { success: true }
  }
})
