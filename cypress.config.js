const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "1gn2b3",
    viewportHeight:1080,
    viewportWidth:1920,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 30000,
    e2e: {
        baseUrl: 'https://todomvc.com/examples/react/#/',
        specPattern: 'cypress/to_do_app/tests/e2e/*.spec.js',
        excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*']
    },
});
