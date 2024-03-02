<template>
  <v-form ref="form" validate-on="blur lazy" @submit.prevent="submit">
    <v-card>
      <v-card-title>
        <div class="d-flex justify-space-between">
          <span class="text-h5 align-self-center">
            {{ $t('users.addNewUser') }}
          </span>
          <v-btn icon="mdi-close" class="mr-n3" flat @click="cancel" />
        </div>
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-0">
        <v-container>
          <v-row>
            <v-col cols="12" class="pb-0 mt-2">
              <v-text-field
                v-model="user.name"
                variant="outlined"
                class="mb-2"
                autocomplete="name"
                :label="$t('fields.fullName')"
                :rules="rules.name"
                required
              />

              <v-text-field
                v-model="user.email"
                variant="outlined"
                class="mb-2"
                autocomplete="email"
                :label="$t('fields.email')"
                :rules="rules.email"
                required
              />

              <v-text-field
                v-model="user.password"
                variant="outlined"
                class="mb-2"
                autocomplete="current-password"
                :label="$t('fields.password')"
                :rules="rules.password"
                :append-inner-icon="
                  showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                "
                :type="showPassword ? 'text' : 'password'"
                :hint="$t('users.atLeast', { limit: 8 })"
                counter
                required
                @click:append-inner="showPassword = !showPassword"
              />
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <v-select
                v-model="user.role"
                variant="outlined"
                :label="$t('fields.role')"
                :items="$tm('fields.roleSelect')"
              />
            </v-col>

            <v-col cols="12" sm="6" class="py-0">
              <v-select
                v-model="user.status"
                variant="outlined"
                :label="$t('fields.status')"
                :items="$tm('fields.statusSelect')"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions class="mx-2 my-1">
        <v-spacer />

        <v-btn variant="flat" @click="cancel">
          {{ $t('all.buttons.cancel') }}
        </v-btn>

        <v-btn
          :disabled="refreshing"
          :loading="refreshing"
          type="submit"
          variant="tonal"
          min-width="100"
        >
          {{ $t('all.buttons.save') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script setup>
import { useLoginStore } from '@/stores/login'
import { validate } from '../../composables/validate'

const emit = defineEmits(['done'])
const login = useLoginStore()

const form = ref(null)
const refreshing = ref(false)
const showPassword = ref(false)
const user = ref({
  name: '',
  email: '',
  password: '',
  role: 'client',
  status: 'active',
})

const rules = {}
for (const key in user.value) {
  rules[key] = [() => validateField(key, user.value[key], userSchema)]
}

function cancel() {
  emit('done', { status: 'cancel' })
}

async function submit() {
  refreshing.value = true
  const [vErr, v] = await validate(user.value, userSchema)
  if (vErr) return (refreshing.value = false)

  // return emit('done', { status: 'warning', message: 'This is a demo. Database changes are locked.' })

  const { status, code, field } = await apiFetch(`/api/users/create`, {
    method: 'POST',
    body: user.value,
  })

  return emit('done', { status: status, message: translate(code, field) })
}
</script>
