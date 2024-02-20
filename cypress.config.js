const { defineConfig } = require('cypress')
require('dotenv').config()

async function getNuxtViteConfig() {
  const nuxt = await loadNuxt({
    cwd: process.cwd(),
    dev: false,
    overrides: {
      ssr: true,
    },
  });

  let config; // Declare config variable outside the hook

  nuxt.hook("vite:extendConfig", (viteConfig) => {
    config = viteConfig; // Assign viteConfig to the config variable
  });

  try {
    await buildNuxt(nuxt);
  } catch (err) {
    console.error("Error building Nuxt:", err);
  } finally {
    await nuxt.close();
  }

  return config; // Return the Vite config
}

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      async viteConfig() {
        const config = await getNuxtViteConfig()

        if (config && config.server) {
          config.server.middlewareMode = false
        }

        return config
      },
    },
    specPattern: '**/*.cy.{js,ts}',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env: {
      BASE_URL: process.env.BASE_URL
    },
  },
})
