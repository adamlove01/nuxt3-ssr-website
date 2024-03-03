import vuetify from 'vite-plugin-vuetify'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  runtimeConfig: {
    API_SECRET: process.env.API_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    BROWSER_BASE_URL: process.env.BROWSER_BASE_URL,
    TOKEN_AUTH_SECRET: process.env.TOKEN_AUTH_SECRET,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_CLIENT: process.env.DB_CLIENT,
    DB_CHARSET: process.env.DB_CHARSET,
    AWS_SMTP_PORT: process.env.AWS_SMTP_PORT,
    AWS_SMTP_REGION: process.env.AWS_SMTP_REGION,
    AWS_SMTP_USERNAME: process.env.AWS_SMTP_USERNAME,
    AWS_SMTP_PASSWORD: process.env.AWS_SMTP_PASSWORD,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    WEBSITE_EMAIL: process.env.WEBSITE_EMAIL,
    // Public keys that are exposed to the client
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
    app: {
      baseURL: process.env.BASE_URL
    }
  },

  css: ['@/styles.scss', 'vuetify/styles', '~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    "nuxt-security",

    // Adds vite-plugin-vuetify for tree shaking
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-ignore
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  // display options: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  googleFonts: {
    display: 'block',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: false,
    useStylesheet: true,
    families: {
      Oxanium: [400, 500, 600],
      'Source Code Pro': [500],
    },
  },

  // Tailwind
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': [process.env.BASE_URL],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          '*.gstatic.com',
          '*.googleapis.com',
        ],
        'font-src': ["'self'", '*.gstatic.com', '*.googleapis.com'],
        'img-src': ["'self'"],
        'connect-src': ["'self'"],
        'form-action': ["'self'"],
        'object-src': ["'self'"],
      },
    },
  },
})
