var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose =require('mongoose');

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV||"development";

var config =require('./server/config/config')[env];

//importing the configs
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/route')(app);


app.listen(config.port,function(){
    console.log("server is running on the port" + config.port);
});