<template>
  <v-container class="bg_white_geometric" fluid>
    <PageTitle :title="$t('all.titles.account')" />
    <v-container class="pt-6">
      <div class="d-flex flex-wrap justify-space-between" style="gap: 20px">
        <v-card class="pa-6 flex-1-0"  style="min-width: 400px">
          <v-avatar size="120" color="white" class="mb-6">
            <v-img size="120" src="/img/users/default.png" />
          </v-avatar>
          <v-card-text class="text-body-1 pa-0 mb-2"
            ><b>{{ user.name }}</b>
          </v-card-text>
          <v-card-text class="text-body-1 pa-0 mb-4">{{
            user.email
          }}</v-card-text>
          <v-card-text class="text-body-1 pa-0">{{
            user.role?.toUpperCase()
          }}</v-card-text>
          <v-btn
            variant="outlined"
            rounded
            class="mt-6"
            @click="updateModal = true"
          >
            {{ $t('account.editProfile') }}
          </v-btn>
        </v-card>

        <v-card class="pa-6 flex-1-0" style="min-width: 400px">
          <v-card-text class="text-body-1 pt-1 pb-5">
            ({{ $t('account.otherUserData') }})
          </v-card-text>
        </v-card>
      </div>

      <v-dialog v-model="updateModal" max-width="500px">
        <users-update :user-data="user" @done="close($event)" />
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script setup>
import UsersUpdate from '@/components/users/Update'
const session = useSessionStore()
const login = useLoginStore()

const user = ref([])
const updateModal = ref(false)

async function getUser() {
  const {
    status,
    code,
    field,
    details = null,
  } = await apiFetch(`/api/users/read/${login.id}`, { method: 'GET' })

  if (status !== 'success') {
    session.setBanner({ type: status, title: translate(code, field) })
    return
  }

  user.value = details.row
  console.log('User details=', user.value)
}

onMounted(async () => {
  // nextTick, otherwise will not get data on page refresh
  await nextTick()
  getUser()
})

function close(result) {
  if (result.status !== 'cancel') {
    session.setBanner({ type: result.status, title: result.message })
  }
  updateModal.value = false
  getUser()
}
</script>

<style lang="scss" scoped>
@import 'styles.scss';

.v-card {
  border: 1px $light-blue solid;
}

.v-avatar {
  border: 2px $light-blue solid;
}
</style>
