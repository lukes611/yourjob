
module.exports = function(grunt){
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    watch : {
      browserify : {
        files : ['client/jsx/*.jsx'],
        tasks : ['browserify']
      }
    },
    browserify : {
      dist : {
        options : {
          transform : [['babelify', {presets : ['es2015', 'react']}]]
        },
        src : ['client/jsx/index.jsx'],
        dest: 'public/javascript/index.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
};
