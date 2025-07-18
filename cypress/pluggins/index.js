// cypress/plugins/index.js

const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const cucumber = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      
      return config;
    },
  },
});
