var mongoose =require('mongoose');
var crypto = require('crypto');

//database configuration configs
module.exports =function(config){
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback(){
console.log("db opened");
});

var userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    userName:String,
    salt: String,
    hashed_pwd:String,
    roles:[String]
});
userSchema.methods={
authenticate: function(passwordToMatch){
return hashPwd(this.salt,passwordToMatch) === this.hashed_pwd;
}

}

var User = mongoose.model('User',userSchema);
User.find({}).exec(function(err,collection){
if(collection.length ===0){
    var salt,hash;
    salt=createSalt();
    hash=hashPwd(salt,'joe');
User.create({firstName:'joe',lastName:'rozer',userName:'joe',salt:salt,hashed_pwd:hash,roles:["admin"]});

    salt=createSalt();
    hash=hashPwd(salt,'john');

User.create({firstName:'john',lastName:'dash',userName:'john',salt:salt,hashed_pwd:hash,roles:[]});
    salt=createSalt();
    hash=hashPwd(salt,'Dan');

User.create({firstName:'Dan',lastName:'wall',userName:'danny',salt:salt,hashed_pwd:hash});

}
})
}

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt,pwd) {
    var hmac = crypto.createHmac('sha1',salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}
