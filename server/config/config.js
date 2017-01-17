var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');
module.exports ={
development:{
    db:'mongodb://localhost/multivision',
    rootPath: rootPath,
    port: process.env.PORT || 3346
},
production:{
rootPath:rootPath,
db:'mongodb://mongouser:mongouser123@ds011903.mlab.com:11903/multivision',
port: process.env.PORT || 80
}
}