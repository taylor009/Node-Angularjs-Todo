'use strict';
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;
var database = require('./config/database');



var morgan         = require('morgan');            // Log request to the console
var bodyParser     = require('body-parser');      // Pull information from HTML Post
var methodOverride = require('method-override'); // Simulate DELETE and PUT


//Configuration
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));  // Set the static files location /public img will be /img for users
app.use(morgan('dev'));                  // Log every request to the console
app.use(bodyParser.urlencoded({'extended': true})); // Parser application/x-www-form-urlencoded
app.use(bodyParser.json());                        // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // Parser application/vmd.api+json as json

// Routes
require('./app/routes.js');


//listen (start app with node server.js)
app.listen(port);
console.log('App is listening on port ' + port);