var Hasher = require('password-hash-and-salt');

//password('password').hash((error, hashedPassword) => {})
//password('password').verifyAgainst('hackerCreatedPassword', (error, verified) => {})



function DB(db){
  this.db = db;
  this.init();
}

DB.prototype.safeString = function(string){
  var safeChars = 'abcdefghijklmnopqrstuvwxyz0123456789$!_';
  for(var i = 0; i < string.length; i++)
    if(safeChars.indexOf(string[i]) == -1) return false;
  return true;
};

DB.prototype.init = function(){
  console.log('initializing data-base');
  var me = this;
  this.db.serialize(function(){
    me.db.run('CREATE TABLE IF NOT EXISTS USERS (ID INTEGER PRIMARY KEY AUTOINCREMENT, USERNAME TEXT, PASSWORD TEXT, TYPE TEXT, REGISTERED TEXT)');
    me.db.all('select * from USERS where USERNAME = \'admin\'', function(err, data){
      if(data.length == 0){
        Hasher('admin').hash(function(error, hashedPassword){
            console.log('adding admin');
            me.db.run('insert into USERS (USERNAME,PASSWORD,TYPE,REGISTERED) values ("admin", "' + hashedPassword + '", "admin", "true")');
        });
      }
    });
  });
  console.log('[complete]');
};

/*
functions:
create user,
get-user by USERNAME
verify-password
*/
DB.prototype.getUser = function(username, cb){
  if(!this.safeString(username)){
    cb('username contains unsafe characters', null);
    return;
  }
  this.db.all('select * from USERS where USERNAME = "' + username + '"', function(err, data){
    if(data.length == 0)
      cb('user does not exist', null);
    else if(data.length > 1) cb('multiple users exist', null);
    else cb(null, data[0]);
  });
};

DB.prototype.createUser = function(username, password, type, registered, cb){
  var me = this;
  this.getUser(username, function(err, data){
    if(err){
      Hasher(password).hash(function(error, hashedPassword){
        if(error) cb('error hashing password');
        else{
          me.db.run('insert into USERS (USERNAME, PASSWORD, TYPE, REGISTERED) values("'+username+'", "'+hashedPassword+'", "'+type+'", "'+registered+'")');
          cb(null);
        }
      });
    }else cb('user exists');
  });
};


DB.prototype.close = function(){
  this.db.close();
};


module.exports = DB;
