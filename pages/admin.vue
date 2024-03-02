<template>
  <v-container class="bg_white_geometric" fluid>
    <PageTitle :title="$t('all.titles.admin')" />
    <v-container class="pt-6">
      <v-data-table-server
        class="elevation-1 pb2"
        :headers="$tm('admin.headers')"
        :items="users"
        :page="options.page"
        :items-per-page="options.itemsPerPage"
        :items-per-page-text="$t('admin.itemsPerPageText')"
        :items-per-page-options="$tm('admin.itemsPerPageOptions')"
        :items-length="options.itemsLength"
        :show-current-page="true"
        @update:page="updateOptions($event, 'page')"
        @update:sortBy="updateOptions($event, 'sortBy')"
        @update:itemsPerPage="updateOptions($event, 'itemsPerPage')"
      >
        <template #top>
          <v-toolbar flat class="py-0" :title="$t('admin.usersList')">
            <v-spacer />
            <template v-if="search.show">
              <v-select
                v-model="options.column"
                class="search-columns mr-3"
                :items="$tm('admin.columns')"
                :placeholder="$t('admin.columnSearchPlaceholder')"
                label="Search columns"
                variant="outlined"
                density="compact"
                multiple
                hide-details
              />
              <v-text-field
                v-model="search.string"
                class="search mr-3"
                variant="outlined"
                density="compact"
                :label="$t('fields.search')"
                @update:modelValue="onSearch"
                autofocus
                hide-details
              />
            </template>
            <v-btn icon="mdi-magnify" @click="search.show = !search.show" />
            <v-btn icon="mdi-account-plus" @click="modal.create = true" />
          </v-toolbar>
        </template>

        <template v-slot:item.role="{ item }">
          {{ $t(`fields.roles.${item.role}`) }}
        </template>

        <template v-slot:item.status="{ item }">
          {{ $t(`fields.statuses.${item.status}`) }}
        </template>

        <template #item.actions="{ item }">
          <v-icon small class="mr-4" @click="open(item, 'update')">
            mdi-pencil
          </v-icon>

          <v-icon small @click="open(item, 'delete')"> mdi-delete </v-icon>
        </template>

        <template #footer.prepend class="d-flex">
          <p class="flex-grow-1 ml-4">
            {{ $t('admin.pages') }} {{ options.totalPages }}
          </p>
        </template>
      </v-data-table-server>

      <v-dialog v-model="modal.create" max-width="500px">
        <users-create @done="close($event, 'create')" />
      </v-dialog>

      <v-dialog v-model="modal.update" max-width="500px">
        <users-update :user-data="user" @done="close($event, 'update')" />
      </v-dialog>

      <v-dialog v-model="modal.delete" max-width="500px">
        <users-delete :user-data="user" @done="close($event, 'delete')" />
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core'
useHead({ title: pageHead('admin') })

const session = useSessionStore()
const search = ref({ show: false, string: null })
const modal = ref({ create: false, update: false, delete: false })
const users = ref([])
const user = ref({})
const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: { key: 'name', order: 'desc' },
  search: null,
  column: 'name',
  itemsLength: 0,
  totalPages: 0,
})

const onSearch = useDebounceFn(() => {
  options.value.search = search.value.string
  getAllUsers()
}, 800)

async function getAllUsers() {
  const {
    status,
    code,
    field,
    details = null,
  } = await apiFetch('/api/users/read', {
    method: 'GET',
    params: options.value,
  })

  if (status !== 'success') {
    session.setBanner({ type: status, title: translate(code, field) })
    return
  }

  users.value = details.rows
  options.value = details.options
}

onMounted(async () => {
  // nextTick, otherwise will not get data on page refresh
  await nextTick()
  getAllUsers()
})

function open(userData, type) {
  user.value = userData
  modal.value[type] = true
}

function close(result, type) {
  if (result.status !== 'cancel') {
    session.setBanner({ type: result.status, title: result.message })
  }
  modal.value[type] = false
  getAllUsers()
}

function updateOptions(event, type) {
  if (type === 'page') options.value.page = event
  if (type === 'itemsPerPage') options.value.itemsPerPage = event
  if (type === 'sortBy') options.value.sortBy = event[0]
  getAllUsers()
}
</script>

<style lang="scss" scoped>
// Make the pagination footer look nice
:deep(.v-data-table-footer) {
  padding: 15px 0;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
}
// Add striping to table rows
:deep(.v-table) tbody tr:nth-of-type(odd) td {
  background-image: linear-gradient(rgb(0 0 0/6%) 0 0);
}

.search {
  max-width: 250px;
}
</style>
