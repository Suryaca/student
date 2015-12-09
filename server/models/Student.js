var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,

});

module.exports = mongoose.model('Student',studentSchema);
