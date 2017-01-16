var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyparser = require('body-parser');
var mongoose =require('mongoose');



// app comfiguration
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

//database 
//mongodb://<dbuser>:<dbpassword>@ds011903.mlab.com:11903/multivision

if(env==='development'){
    mongoose.connect('mongodb://localhost/multivision');
}
else{
    mongoose.connect('mongodb://mongouser:mongouser123@ds011903.mlab.com:11903/multivision');
}
//mongoose.connect('mongodb://localhost/multivision');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
console.log("db opened");
})
var messageschema =mongoose.Schema({message:String});
var Message = mongoose.model('Message',messageschema);
var mongomongoose;
Message.findOne().exec(function(err,messageDoc){
    mongomongoose=messageDoc.message;
})

//routing

app.get('/partials/:partialPath',function(req,res){
    res.render('partials/'+req.params.partialPath);
});


app.get('*',function(req,res){
    res.render('index',{mongomongoose:mongomongoose});
});
var port = process.env.PORT || 3346;
app.listen(port,function(){
    console.log("server is running");
});