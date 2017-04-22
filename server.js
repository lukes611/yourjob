//server by luke lincoln

var express = require('express');
var occupations = require('./dataAtServer/res/occupations.json');
var fs = require('fs');


var app = express();

app.get('/occupations', function(req, res){
  res.json(occupations);
});

app.get('/videos', function(req, res){
  var videos = require('./dataAtServer/res/videos.json');
  res.json(videos);
});

app.get('/content', function(req, res){
  var type = req.query['type'];
  if(['Contact Us', 'Info', 'About'].indexOf(type) != -1){ //okay, fetch data
    fs.readFile('./dataAtServer/res/' + type + '.txt', function(error, data){
      if(error) res.json({ok : false});
      else{
          var raw = data.toString();
          res.json({ok : true, raw : raw});
      }
    });
  }else{
    res.json({ok : false});
  }
});

app.use(express.static('./public'));

app.listen(3000);
