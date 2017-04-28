//server by luke lincoln
var ContentRoutes = require('./server/ContentRoutes.js');
var DB = require('./server/DB.js');
var Cleanup = require('./server/Cleanup.js');
var express = require('express');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new DB(new sqlite3.Database('test.db'));


db.getUser('admin', function(e, d){
  //console.log(e,d);
});

db.createUser('joseph22', 'whale360', 'user', 'false', function(e){
  console.log(e);
});


Cleanup(function(){
  console.log('\nshutting down...');
  db.close();
});

//add in table if not exists
/*
  click - register:
  : replies ok or not,
  click login : replies ok or not

  user
  id | user-name | salted-password | user-type[admin|user|company] | registered[true|false]



*/



var app = express();
ContentRoutes(app);


app.use(express.static('./public'));




app.listen(3000);
