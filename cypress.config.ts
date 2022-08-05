import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '21s6cy',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
