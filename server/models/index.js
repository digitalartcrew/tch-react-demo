var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/chicken-app");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Recipe = require("./recipe");
