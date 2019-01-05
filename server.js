'use strict';
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;
var database = require('./config/database');


// Log request to the console
var morgan = require('morgan');