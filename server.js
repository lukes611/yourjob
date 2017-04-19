
var express = require('express');
var occupations = require('./dataAtServer/res/occupations.json');

var app = express();

app.get('/occupations', function(req, res){
  res.json(occupations);
});

app.use(express.static('./public'));

app.listen(3000);
