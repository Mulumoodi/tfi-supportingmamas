'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Meeting Schema
 */
var MeetingSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Meeting name',
    trim: true
  },
  leader: {
    type: String,
    default: '',
    required: 'Please fill Meeting name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'Meeting'
  }
});

mongoose.model('Meeting', MeetingSchema);
