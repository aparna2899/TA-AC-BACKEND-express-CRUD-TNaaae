var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: Number,
    address: String,
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
