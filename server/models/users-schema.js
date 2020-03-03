'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema({},{ strict: false });


module.exports = mongoose.model('user', user);