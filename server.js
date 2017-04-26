//server by luke lincoln

var express = require('express');
var occupations = require('./dataAtServer/res/occupations.json');
var fs = require('fs');
var content = {
  'About' : '',
  'Contact Us' : '',
  'YourPhilosophy' : ''
};
require('./server/LoadContent.js')(['About', 'Contact Us', 'YourPhilosophy'], function(name, data){
  content[name] = data;
});


var app = express();

app.get('/occupations', function(req, res){
  res.json(occupations);
});

app.get('/videos', function(req, res){
  var videos = require('./dataAtServer/res/videos.json');
  res.json(videos);
});

app.get('/content', function(req, res){
  res.json({ok : false, content : content});
});

app.use(express.static('./public'));

app.listen(3000);
