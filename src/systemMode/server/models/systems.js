'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SystemObjectSchema = new Schema({
  type: {
    type: String,
    enum: [
      'barycenter',
      'star',
      'planet',
      'moon',
      'station',
      'gate',
      'asteroid',
      'asteroid belt',
      'other'
    ]
  },
  coordinates:  { x: Number, y: Number },
  name:         String,
  description:  String,
  orbits:       { type: Schema.ObjectId, ref: 'System.objects' }
});

var SystemSchema = new Schema({
  //nation:       { type: Schema.ObjectId, ref: 'Nation' },
  //map:          { type: Schema.ObjectId, ref: 'Map' },
  coordinates:  { x: Number, y: Number },
  objects:      [SystemObjectSchema],
  name:         String,
  description:  String,
});

mongoose.model('System', SystemSchema);
