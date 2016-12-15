'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NationSchema = new Schema({
  name: String,
  description: String,
  user: [UserSchema],
  flag: Buffer,
});

mongoose.model('Nation', NationSchema);
