var express = require('express');


var env = process.env.NODE_ENV = process.env.NODE_ENV||"development";
var app = express();



var config =require('./server/config/config')[env];

//importing the configs
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);

require('./server/config/passport')();


app.use(function(req,res,next) {
   // console.log(req.user);  turn off midle ware logging
    next();
    
});


require('./server/config/route')(app);


app.listen(config.port,function(){
    console.log("server is running on the port" + config.port);
});