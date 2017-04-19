var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var Book = require('./book');
var Trade = require('./trade');


var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
  sentRequests: [{type: Schema.Types.ObjectId, ref: 'Trade'}],
  receivedRequests: [{type: Schema.Types.ObjectId, ref: 'Trade'}]
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);
