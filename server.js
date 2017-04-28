//server by luke lincoln
var ContentRoutes = require('./server/ContentRoutes.js');
var express = require('express');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

var cleanup = (function(){
  if(this.clean) return;
  console.log('\nclosing database');
  db.close();
  this.done();
}).bind({clean : false, done : function(){ this.clean=true; process.exit()}});

//do something when app is closing
process.on('exit', cleanup);
//catches ctrl+c event
process.on('SIGINT', cleanup);
//catches uncaught exceptions
process.on('uncaughtException', cleanup);

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
