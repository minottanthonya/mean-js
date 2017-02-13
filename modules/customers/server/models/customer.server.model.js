'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  firstname: {
    type: String,
    default: '',
    required: 'Please fill customer first name',
    trim: true
  },
  lastname: {
    type: String,
    default: '',
    required: 'Please fill customer last name',
    trim: true
  },
  lastPurchase: {
    type: Date,
    default: Date.now
  }, 
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Customer', CustomerSchema);
