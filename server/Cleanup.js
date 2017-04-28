
module.exports = function(cb){

  var cleanup = (function(){
    if(this.clean) return;
    cb();
    this.done();
  }).bind({clean : false, done : function(){ this.clean=true; process.exit()}});

  //do something when app is closing
  process.on('exit', cleanup);
  //catches ctrl+c event
  process.on('SIGINT', cleanup);
  //catches uncaught exceptions
  process.on('uncaughtException', cleanup);


};
