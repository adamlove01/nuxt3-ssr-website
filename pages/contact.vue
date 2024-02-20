<template>
  <v-container fluid :style="`background-image: url(/img/bg_geometric_${session.theme}.jpg); background-size: cover`">
    <v-container class="pt-8">
      <v-card
        class="mx-auto mt-6 pa-3 rounded-lg"
        elevation="8"
        max-width="500"
      >
        <v-card-title class="text-h4 justify-center mb-6">
          {{ $t('contact.formTitle') }}
        </v-card-title>
        <v-card-text>
          <v-form ref="form" validate-on="blur lazy" @submit.prevent="submit">
            <v-text-field
              v-model="mail.name"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :label="$t('fields.name')"
              prepend-inner-icon="mdi-account-outline"
              :rules="rules.name"
            />
            <v-text-field
              v-model="mail.email"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :label="$t('fields.email')"
              prepend-inner-icon="mdi-email-outline"
              :rules="rules.email"
            />
            <v-text-field
              v-model="mail.subject"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :label="$t('fields.subject')"
              prepend-inner-icon="mdi-pencil-outline"
              :rules="rules.subject"
            />
            <v-textarea
              v-model="mail.message"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :label="$t('fields.message')"
              :rules="rules.message"
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
              {{ $t('all.buttons.send') }}
            </v-btn>

            <v-alert
              v-model="emailSent"
              variant="elevated"
              elevation="8"
              class="mt-6 mx-auto"
              closable
              prominent
              type="success"
              :title="$t('all.alerts.emailSent')"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script setup>
useHead({ title: pageHead('contactUs') })
const session = useSessionStore()

const emailSent = ref(false)
const refreshing = ref(false)
const mail = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const rules = {}
for (const key in mail.value) {
  rules[key] = [() => validateField(key, mail.value[key], mailSchema)]
}

async function submit() {
  refreshing.value = true
  const [vErr, v] = await validate(mail.value, mailSchema)
  if (vErr) return (refreshing.value = false)

  const { status, code, field } = await apiFetch('/api/sendContactEmail', {
    method: 'POST',
    body: mail.value,
  })

  if (status === 'success') emailSent.value = true

  session.setBanner({ type: status, title: translate(code, field) })
}
</script>
