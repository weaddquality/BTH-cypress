const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://aurdev.diptsrv003.bth.se',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
