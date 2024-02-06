const { defineConfig } = require('cypress');

module.exports = defineConfig({
 // reporter: 'cypress-mochawesome-reporter',
  env: {
    config_env: 'config env variable value',
  },
  e2e: {
    specPattern: 'cypress/e2e/homework17.cy.js',
    baseUrl: 'https://demoqa.com/',
    watchForFileChanges: false,
 //   setupNodeEvents(on) {
   //   require('cypress-mochawesome-reporter/plugin')(on);
 //   },
  },
});
