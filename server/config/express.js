var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');




module.exports = function(app,config){
function compile(str,path){
    return stylus(str).set('filename',path);
}

app.set('views',config.rootPath+'/server/views');
app.set('view engine','jade');
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:'multi vision unicorns',resave:false,saveUninitialized:false}));
app.use(stylus.middleware(
{
    src: config.rootPath+'/public',
    compile: compile
}
));
app.use(express.static(config.rootPath+'/public'));
}