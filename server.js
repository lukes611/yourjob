//server by luke lincoln
var ContentRoutes = require('./server/ContentRoutes.js');
var CRUD = require('./server/CRUDRoutes.js');
var DB = require('./server/DB.js');
var Cleanup = require('./server/Cleanup.js');
var express = require('express');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new DB(new sqlite3.Database('test.db'));

Cleanup(function(){
  console.log('\nshutting down...');
  db.close();
});

var app = express();
ContentRoutes(app);
CRUD(app, db);

app.use(express.static('./public'));

app.listen(3000);
