const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "viewportWidth": 1360,
    "viewportHeight": 768,
    "projectId": "macadadi",
    "retries": 2,
    "video": false,
    "screenshotOnRunFailure": false,
    supportFile :false
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

