var wp = require('webpack');

var srcDirectory = __dirname + '/client/jsx/';
var buildDirectory = __dirname + '/public/javascript/';

console.log(srcDirectory, buildDirectory);

module.exports = {
  entry : {
    index : srcDirectory + 'index.jsx',
    signIn : srcDirectory + 'sign-in.jsx'
  },
  output : {
    path : buildDirectory,
    filename : '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : srcDirectory,
        loader : 'babel-loader'
      }
    ]
  }
};
