<template>
  <v-card>
    <v-card-title>
      <div class="d-flex justify-space-between">
        <span class="text-h5 align-self-center">
          {{ $t('users.deleteUser') }}
        </span>
        <v-btn icon="mdi-close" class="mr-n3" flat @click="cancel" />
      </div>
    </v-card-title>

    <v-divider />

    <v-card-text class="pa-0">
      <v-container>
        <v-row>
          <v-col cols="12" class="my-2">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
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
        variant="tonal"
        min-width="100"
        @click="submit"
      >
        {{ $t('all.buttons.ok') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useLoginStore } from '@/stores/login'

const props = defineProps({
  userData: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const emit = defineEmits(['reload', 'message'])
const user = ref({ ...props.userData })
const login = useLoginStore()
const refreshing = ref(false)

function cancel() {
  emit('done', { status: 'cancel' })
}

async function submit() {
  refreshing.value = true

  const { status, code, field } = await apiFetch(
    `/api/users/delete/${user.value.id}`,
    {
      method: 'DELETE',
    }
  )

  return emit('done', { status: status, message: translate(code, field) })
}
</script>
