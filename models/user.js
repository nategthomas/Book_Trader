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
  receivedRequests: [{type: Schema.Types.ObjectId, ref: 'Trade'}],
  address1: {type: String},
  address2: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  country: {type: String}

});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);
