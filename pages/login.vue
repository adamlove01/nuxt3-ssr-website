<template>
  <v-container class="bg_white_geometric pt-12" fluid  :style="`background-image: url(/img/bg_geometric_${session.theme}.jpg); background-size: cover`">
    <v-card class="mx-auto mt-6 pa-3 rounded-lg" elevation="8" max-width="400">
      <v-card-title class="text-h4 justify-center mb-6">
        {{ $t('login.signIn') }}
      </v-card-title>
      <v-card-text>
        <v-form ref="form" validate-on="blur lazy" @submit.prevent="submit">
          <v-text-field
            v-model="user.email"
            variant="outlined"
            density="comfortable"
            class="mb-3"
            :label="$t('fields.email')"
            :rules="rules.email"
          />

          <v-text-field
            v-model="user.password"
            variant="outlined"
            density="comfortable"
            :label="$t('fields.password')"
            autocomplete=""
            :rules="rules.password"
            :append-inner-icon="
              showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
            "
            :type="showPassword ? 'text' : 'password'"
            hint="At least 8 characters"
            @click:append-inner="showPassword = !showPassword"
          />

          <v-btn
            :disabled="refreshing"
            :loading="refreshing"
            type="submit"
            class="mt-6"
            rounded="xl"
            size="x-large"
            block
            color="blue darken-2"
          >
            {{ $t('all.buttons.signIn') }}
          </v-btn>
        </v-form>

        <nuxt-link v-if="forgot" to="/forgot-password">
          <div class="forgot mt-4 mb-0 text-center text-body-1">
            {{ $t('login.forgotPassword') }}
          </div>
        </nuxt-link>
      </v-card-text>
    </v-card>

    <v-alert
      v-model="alert"
      variant="elevated"
      elevation="8"
      class="mx-auto mt-4"
      max-width="400"
      closable
      prominent
      :type="alert && alert.status"
      :title="alert && alert.title"
    />

    <div class="mt-8 text-center">
      {{ $t('login.noAccount') }}
      <v-btn
        class="ml-2"
        variant="outlined"
        rounded="xl"
        color="blue darken-2"
        to="/register"
        >{{ $t('all.buttons.signUpNow') }}</v-btn
      >
    </div>

    <v-card
      type="info"
      rounded="xl"
      class="mx-auto my-8 pa-7"
      style="border: 2px solid rgb(254 215 170)"
      max-width="400"
    >
    <v-card-title class="text-h4 justify-center mb-3 text-center">This is a demo</v-card-title>
      <p class="text-h6">Admin Login</p>
      <v-icon size="18" color="rgb(234 88 12)" class="mr-1" icon="mdi-email" />admin@admin.com
      <v-icon size="18" color="rgb(234 88 12)" class="ml-10 mr-1" icon="mdi-lock" />admin123

      <p class="text-h6 mt-3">Client Login</p>
      <v-icon size="18" color="rgb(234 88 12)" class="mr-1" icon="mdi-email" />leeloo@mydomain.com
      <v-icon size="18" color="rgb(234 88 12)" class="ml-2 mr-1" icon="mdi-lock" />leeloo123
    </v-card>

  </v-container>
</template>

<script setup>
useHead({ title: pageHead('signIn') })

const emit = defineEmits(['banner'])
const router = useRouter()
const route = useRoute()
const session = useSessionStore()
const login = useLoginStore()

const form = ref(null)
const refreshing = ref(false)
const showPassword = ref(false)
const alert = ref(null)
const forgot = ref(false)
const user = ref({
  email: '',
  password: '',
})

const rules = {}
for (const key in user.value) {
  rules[key] = [() => validateField(key, user.value[key], userSchema)]
}

// On Page Load -- set Alert message
if (route.query.m === 'registered')
  alert.value = { status: 'success', title: translate('registered') }
if (route.query.m === 'unauthorized')
  alert.value = { status: 'info', title: translate('unauthorized') }
if (route.query.m === 'loginError')
  alert.value = { status: 'info', title: translate('loginError') }

async function submit() {
  refreshing.value = true
  alert.value = null
  const [vErr, v] = await validate(user.value, userSchema)
  if (vErr) return (refreshing.value = false)

  const { status, code, field, details } = await apiFetch('/api/login', {
    method: 'POST',
    body: user.value,
  })

  refreshing.value = false

  if (['email', 'password'].includes(field)) {
    forgot.value = true
    return (alert.value = { status: 'error', title: translate(code, field) })
  }

  session.setBanner({ type: status, title: translate(code, field) })
  if (status !== 'success') return

  // Success. Set User data in the login store and redirect
  login.setToken(details.token)
  login.setUser(details.user)
  login.setLoggedIn(true)
  return route.query.to
    ? router.push({ path: route.query.to })
    : router.push({ path: '/' })
}
</script>

<style scoped lang="scss">
@import 'styles.scss';

.forgot {
  color: $blue;
}
</style>
