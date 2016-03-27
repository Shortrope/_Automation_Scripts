module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    sass: {
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: [{
          src: 'components/scss/style.scss',
          dest: 'builds/development/css/style.css'
        }]
      }
    }, // sass

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
      scripts: {
        options: {
          spawn: false,
          livereload: true
        },

        files: ['builds/development/**/*.html',
                'components/scss/*.scss'],

        tasks: ['sass']
      }
    }

  }); // initConfig

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'connect', 'watch']);

}; // wrapper function