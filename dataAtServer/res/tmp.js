
var r = require('./videos.json');
var mb = require('./ocs.json');
var fs = require('fs');
var out = [];

mb.videos.forEach(function(v){
  var x = r.videos.filter(function(vv){
    return vv.occupation == v.occupation;
  })[0];
  //console.log(x.image, v.image);
  out.push(Object.assign({}, v, x));
});

//console.log(out);
fs.writeFile('videos2.json', JSON.stringify({videos:out}, null, 2), function(){
  console.log('done');
});
