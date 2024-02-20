<template>
  <v-container class="bg_white_geometric" fluid>
    <v-container class="pt-8 d-flex">
      <span class="ma-auto">
        <h1 class="text-h4 text-center mt-8">Signing out...</h1>
        <v-progress-linear
          indeterminate
          rounded
          height="8"
          class="text-center mt-8"
        />
      </span>
    </v-container>
  </v-container>
</template>

<script setup>
useHead({ title: pageHead('signOut') })

const login = useLoginStore()
const session = useSessionStore()
const router = useRouter()

onMounted(async () => {
  // Log out the user
  const { status, code, field } = await apiFetch('/api/logout', {
    method: 'POST',
  })

  session.setBanner({ type: status, title: translate(code, field) })

  // Success. Delete user data from the store
  login.setToken('')
  login.setUser({})
  login.setLoggedIn(false)

  // Redirect to home page with logout success message
  return router.push({ path: '/' })
})
</script>
