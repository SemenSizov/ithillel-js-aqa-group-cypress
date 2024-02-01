const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  //reporter: 'mochawesome',

  "reporterOptions":{
    "overwrire":false,
    "html":true,
    "json":false
  },
  env: {
    config_env: 'config env variable value',
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx,mjs}',
    baseUrl: 'https://www.akveo.com/ngx-admin',
    "pageLoadTimeout": 10000, // таймаут для завантаження сторінки (в мілісекундах)
    "requestTimeout": 5000, // таймаут для запитів (в мілісекундах)
    "responseTimeout": 8000, // таймаут для відповідей (в мілісекундах)
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
 