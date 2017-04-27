'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UniverseSchema = new Schema({
  created  : { type: Date, default: Date.now },
  name     : { type: String, default: '', trim: true, required: 'Name is required' },
  desc     : { type: String, default: '', trim: true },
  default  : { type: Boolean },
  owner    : { type: Schema.ObjectId, ref: 'User' },
  managers : [{ type: Schema.ObjectId, ref: 'User', }]
});

mongoose.model('Universe', UniverseSchema);