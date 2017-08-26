'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChangeSchema = new Schema({
  target: {
    type: String,
    required: 'Identify the target product of the change'
  },
  change_date: {
    type: Date,
    default: Date.now
  },
  current_version: {
    type: String
  },
  environment: {
    type: [{
      type: String,
      enum: ['development', 'stage', 'qa', 'production']
    }],
    default: ['production']
  }
});

module.exports = mongoose.model('Changes', ChangeSchema);