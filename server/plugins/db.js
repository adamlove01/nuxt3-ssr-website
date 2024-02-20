export default defineNitroPlugin(async (nitro) => {
  try {
    await db.raw('SELECT 1+1')
    return db
  } catch (error) {
    console.log('Database connection error =', error)
  }
})
