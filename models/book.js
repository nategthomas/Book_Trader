var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});



module.exports = mongoose.model('Book', schema);
