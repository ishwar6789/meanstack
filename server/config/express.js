var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');




module.exports = function(app,config){
function compile(str,path){
    return stylus(str).set('filename',path);
}

app.set('views',config.rootPath+'/server/views');
app.set('view engine','jade');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(stylus.middleware(
{
    src: config.rootPath+'/public',
    compile: compile
}
));
app.use(express.static(config.rootPath+'/public'));
}