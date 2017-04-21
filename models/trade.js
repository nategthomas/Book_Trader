var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var Book = require('./book');
var User = require('./user');

var schema = new Schema({
  sender: {type: Schema.Types.ObjectId, ref: 'User'},
  receiver: {type: Schema.Types.ObjectId, ref: 'User'},
  book: {type: Schema.Types.ObjectId, ref: 'Book'}
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Trade', schema);
