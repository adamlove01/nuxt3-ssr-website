<template>
  <v-app v-if="isLoaded">
    <v-app-bar app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

        <nuxt-link to="/" class="d-flex">
          <v-img :width="25" class="ml-4" src="/favicon.ico" />
        </nuxt-link>

        <v-app-bar-title class="ml-6">{{ $t('all.website') }}</v-app-bar-title>
      </template>

      <template v-slot:default />

      <template v-slot:append>
        <v-chip
          v-for="item in $tm('layout.guestItems')"
          class="action-items"
          variant="text"
          size="large"
          :key="item.title"
          :text="item.title"
          :to="item.to"
        />

        <v-chip
          v-if="!login.loggedIn"
          class="action-items"
          variant="text"
          size="large"
          :text="$t('layout.signIn.title')"
          :to="$t('layout.signIn.to')"
        />

        <v-menu
          transition="fade-transition"
          location="bottom right"
          v-if="login.loggedIn"
        >
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" icon="mdi-account" class="mx-3" />
          </template>

          <v-list class="mt-5">
            <v-list-item
              :title="login.name"
              :subtitle="login.role.toUpperCase()"
              prepend-avatar="img/users/default.png"
              class="py-4"
              disabled
            />

            <v-divider />

            <v-list-item
              :title="$t('layout.account.title')"
              :to="`${$t('layout.account.to')}/${login.id}`"
              :prepend-icon="$t('layout.account.icon')"
            />

            <v-list-item
              v-if="login.role === 'admin'"
              :key="$t('layout.admin.title')"
              :title="$t('layout.admin.title')"
              :to="$t('layout.admin.to')"
              :prepend-icon="$t('layout.admin.icon')"
            />

            <v-list-item
              :title="$t('layout.signOut.title')"
              :to="$t('layout.signOut.to')"
              :prepend-icon="$t('layout.signOut.icon')"
            />
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn icon="mdi-web" v-bind="props" />
          </template>

          <v-list>
            <v-list-subheader :title="$t('layout.language')" />
            <v-list-item
              v-for="locale in $i18n.availableLocales"
              :key="locale"
              :title="$t(`layout.${locale}`)"
              :active="locale === $i18n.locale"
              @click="changeLocale(locale)"
            />
          </v-list>
        </v-menu>

        <v-btn icon="mdi-white-balance-sunny" @click="toggleTheme" />
      </template>
    </v-app-bar>

    <v-alert
      v-model="banner"
      variant="elevated"
      elevation="8"
      class="mx-auto"
      closable
      :type="session.banner ? session.banner.type : null"
      :title="session.banner ? session.banner.title : null"
      :text="session.banner ? session.banner.text : null"
      @click:close="session.setBanner(null)"
    />

    <v-navigation-drawer app v-model="drawer" temporary location="left">
      <v-list>
        <v-list-item
          v-if="login.loggedIn"
          :title="login.name"
          :subtitle="login.role.toUpperCase()"
          prepend-avatar="img/users/default.png"
          class="py-4"
          disabled
        />

        <v-divider v-if="login.loggedIn" />

        <v-list-item
          v-for="item in $tm('layout.guestItems')"
          :key="item.title"
          :title="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
        />

        <v-list-item
          v-if="login.role === 'admin'"
          :key="$t('layout.admin.title')"
          :title="$t('layout.admin.title')"
          :to="$t('layout.admin.to')"
          :prepend-icon="$t('layout.admin.icon')"
        />

        <template v-if="login.loggedIn">
          <v-list-item
            :title="$t('layout.account.title')"
            :to="`${$t('layout.account.to')}/${login.id}`"
            :prepend-icon="$t('layout.account.icon')"
          />

          <v-list-item
            :title="$t('layout.signOut.title')"
            :to="$t('layout.signOut.to')"
            :prepend-icon="$t('layout.signOut.icon')"
          />
        </template>

        <v-list-item
          v-if="!login.loggedIn"
          :title="$t('layout.signIn.title')"
          :to="$t('layout.signIn.to')"
          :prepend-icon="$t('layout.signIn.icon')"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
  <NuxtLoadingIndicator v-else />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const session = useSessionStore()
const login = useLoginStore()
const theme = useTheme()
const i18n = useI18n({ useScope: 'global' })
const drawer = ref(false)
const isLoaded = ref(false)
const banner = ref(false)
const bannerTimeout = ref(null)

// Watch for changes to session.banner
watchEffect(() => {
  banner.value = !!session.banner

  // Clear the previous timeout if it exists
  if (bannerTimeout.value) {
    clearTimeout(bannerTimeout.value)
    bannerTimeout.value = null
  }

  // Set a timer to close the alert after x seconds if it's open
  if (banner.value && !session.banner.fixed) {
    bannerTimeout.value = setTimeout(() => {
      session.setBanner(null)
    }, 5000)
  }
})

onMounted(() => {
  if (process.client) {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      session.setTheme(savedTheme)
      theme.global.name.value = savedTheme
    } else {
      // Check for the user's preferred theme on their device
      const userThemePreference = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )
      if (userThemePreference.matches) {
        session.setTheme('myDarkTheme')
        theme.global.name.value = 'myDarkTheme'
      }
    }
    // Check for saved locale ≈ç in localStorage
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      session.setLocale(savedLocale)
      i18n.locale.value = savedLocale
    }
    isLoaded.value = true
  }
})

async function changeLocale(locale) {
  i18n.locale.value = locale
  session.setLocale(locale)
}

async function toggleTheme() {
  const newTheme =
    theme.global.name.value === 'light' ? 'dark' : 'light'
  theme.global.name.value = newTheme
  session.setTheme(newTheme)
}
</script>

<style scoped lang="scss">
@import 'styles.scss';

.v-main {
  // Prevent main section from having no top margin during page load
  padding-top: 64px;
}

.v-toolbar {
  // Prevent toolbar from showing less than full width during page load
  width: 100%;

  .v-app-bar-nav-icon {
    display: none;
  }
}

.v-list-item:hover {
  color: $blue;
}
.v-chip:hover,
.mdi-account:hover {
  color: $light-blue;
}

@media (max-width: $tablet-max) {
    .v-toolbar {
    .v-app-bar-nav-icon {
      display: flex;
    }

    .v-app-bar-title,
    .action-items {
      display: none;
    }
  }
}

.v-alert {
  position: fixed;
  z-index: 1;
  width: 100%;
  margin-top: 64px;
}
</style>
