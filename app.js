/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    d = require('domain').create();

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config');
var auth = require('./config/middlewares/authorization');
var passport = require('./config/passport');

var app = express();

//Initialize Express
require('./config/express')(app, passport);

//Initialize Routes
require('./config/routes').init(app, passport, auth);

d.on('error', function(err) {
    console.log("Caught with some error : " + err)
})

//Start the app by listening on <port>
var port = config.port;
app.set('port', port);

d.run(function() {
    http.createServer(app).listen(app.get('port'), function() {
        console.log(config.appname + " " + config.app.description);
        console.log('Express server listening on port ' + app.get('port'));
    });
});

//expose app
exports = module.exports = app;
