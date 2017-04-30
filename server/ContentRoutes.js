
var occupations = require('../dataAtServer/res/occupations.json');
var content = {
  'About' : '',
  'Contact Us' : '',
  'YourPhilosophy' : ''
};
require('./LoadContent.js')(['About', 'Contact Us', 'YourPhilosophy'], function(name, data){
  content[name] = data;
});



module.exports = function(app){



  app.get('/occupations', function(req, res){
    res.json(occupations);
  });

  app.get('/videos', function(req, res){
    var videos = require('../dataAtServer/res/videos2.json');
    res.json(videos);
  });

  app.get('/content', function(req, res){
    res.json({ok : false, content : content});
  });



};
