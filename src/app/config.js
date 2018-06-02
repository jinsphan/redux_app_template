let config = require("../config.development.json");

if (process.env.NODE_ENV === "staging") {
  config = require("../config.staging.json");
}

if (process.env.NODE_ENV === "production") {
  config = require("../config.production.json");
}

module.exports = config;
