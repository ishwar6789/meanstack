var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');


var env = process.env.NODE_ENV = process.env.NODE_ENV||"development";
function compile(str,path){
    return stylus(str).set('filename',path);
}
var app = express();
app.set('views',__dirname+'/server/views');
app.set('view engine','jade');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(stylus.middleware(
{
    src: __dirname+'/public',
    compile: compile
}
));
app.use(express.static(__dirname+'/public'));


app.get('*',function(req,res){
    res.render('index',{});
});

app.listen('3346',function(){
    console.log("server is running");
});