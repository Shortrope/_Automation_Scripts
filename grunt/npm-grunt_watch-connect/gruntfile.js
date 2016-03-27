module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development/',
          livereload: true
        }
      } 
    },
    
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: ['builds/development/**/*']  // watch all files in dev directory
      }
    }
    
  }); // initConfig

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['connect', 'watch']);

}; // wrapper function
