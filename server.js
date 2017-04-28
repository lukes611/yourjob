//server by luke lincoln
var ContentRoutes = require('./server/ContentRoutes.js');
var express = require('express');
var fs = require('fs');




var app = express();
ContentRoutes(app);


app.use(express.static('./public'));

app.listen(3000);
