var fs = require('fs');

module.exports = function(list, cb){
  (function process(){
    if(list.length > 0){
      var item = list.shift();
      var fileName = './dataAtServer/res/' + item + '.txt';
      fs.readFile(fileName, function(e,d){
        cb(item, d+'');
      });
      process();
    }
  })();
};
