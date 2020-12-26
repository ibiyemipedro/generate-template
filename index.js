#!/usr/bin/env node
require = require("esm")(module/*, options*/)
module.exports = require("./src/cli.js").cli(process.argv)

// console.log('here');
// require('./src/cli').cli(process.argv);