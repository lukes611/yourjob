
function DB(db){
  this.db = db;
  this.init();
}

DB.prototype.init = function(){
  console.log('initializing data-base');
  var me = this;
  this.db.serialize(function(){
    me.db.run('CREATE TABLE IF NOT EXISTS USERS (ID INTEGER PRIMARY KEY AUTOINCREMENT, USERNAME TEXT, PASSWORD TEXT, TYPE TEXT, REGISTERED TEXT)');
    me.db.all('select * from USERS where USERNAME = \'admin\'', function(err, data){
      if(data.length == 0){
        console.log('adding admin user');
        me.db.run('insert into USERS (USERNAME,PASSWORD,TYPE,REGISTERED) values ("admin", "admin", "admin", "true")');
      }
    });
  });
  console.log('[complete]');
};

DB.prototype.close = function(){
  this.db.close();
};


module.exports = DB;
