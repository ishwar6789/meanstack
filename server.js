var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose =require('mongoose');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV||"development";

var config =require('./server/config/config')[env];

//importing the configs
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
var User = mongoose.model('User');
passport.use(new localStrategy(
    function(username,password,done){
        User.findOne({userName:username}).exec(function(err,user){
            if(user){
                return done(null,user);
            }else{
                return done (null,false);
            }
        })
    }
));

passport.serializeUser(function(user,done){
    if(user){
        done(null,user._id);
    }
});

passport.deserializeUser(function(id,done){
    User.findOne({_id:id}).exec(function(err,user){
        if(user && user.authenticate(password)){
            return done(null,user);
        }
        else{done(null,false);}
    });
});

require('./server/config/route')(app);


app.listen(config.port,function(){
    console.log("server is running on the port" + config.port);
});