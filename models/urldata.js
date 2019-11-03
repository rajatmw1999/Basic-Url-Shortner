var mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
  code: String,
  url: String
});

module.exports = mongoose.model("Link", urlSchema);
