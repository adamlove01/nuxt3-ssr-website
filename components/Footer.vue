<template>
  <v-footer
    class="footer-bg pt-5 pb-3"
    :style="{
      backgroundColor: session.theme === 'light' ? '#2b354f' : '',
      maxHeight: '200px',
      color: session.theme === 'light' ? 'white' : 'inherit',
    }"
  >
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="item in $tm('footer.pageLinks')"
        :key="item.text"
        :text="item.text"
        variant="text"
        rounded="xl"
        class="text-uppercase my-2"
        :to="item.to"
      />

      <v-col class="pt-2 text-center" cols="12">
        <v-btn
          v-for="item in $tm('footer.socialLinks')"
          :key="item.icon"
          variant="plain"
          class="mx-2"
          :icon="item.icon"
          :href="item.href"
        />
      </v-col>

      <v-col class="pt-5 pb-4 text-center text-caption" cols="12">
        © {{ new Date().getFullYear() }} — {{ $t('all.website') }},
        {{ $t('footer.rights') }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
const session = useSessionStore()
</script>
