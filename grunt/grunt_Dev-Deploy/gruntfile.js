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

    concat: {
      dist: {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    }, //concat

    copy: {
      copyHtml: {
        expand: true,
        flatten: true,
        src: ['builds/development/*.html'],
        dest: 'builds/production/'
      },
      copyImages: {
        expand: true,
        flatten: true,
        src: ['builds/development/images/*'],
        dest: 'builds/production/images/'
      }
    }, //copy
    
    cssmin: {
      target: {
        files: {
          'builds/production/css/style.css': ['builds/development/css/*.css']
        }
      }
    }, //cssmin

    uglify: {
      files: {
        src: ['builds/development/js/script.js'],
        dest: 'builds/production/js/script.js'
      },
    }, //uglify

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development/',
          livereload: true
        }
      }
    }, //connect

    'sftp-deploy': {
      build: {
        auth: {
          host: '192.168.1.79',
          port: 22,
          authKey: 'rpi'
        },
        src: 'builds/production',
        dest: '../../var/www/GruntTest',
        forceVerbose: true
      }, //build
      
      godaddy: {
        auth: {
          host: 'myhost.com',
          port: 22,
          authKey: 'godaddy'
        },
        src: 'builds/production',
        dest: '../../var/www/GruntTest',
        forceVerbose: true
      }
    }, //ftp-deploy

    watch: {
      localDev: {
        options: {
          spawn: false,
          livereload: true
        },

        files: ['builds/development/**/*.html',
                'components/scss/*scss',
                'builds/development/css/*.css',
                'builds/development/**/*.js',
                'components/**/*.js',
                'builds/development/images/*'],

        tasks: ['sass', 'concat']
      }, //localDev
      rpi: {
        options: {
          spawn: false
        },

        files: ['builds/development/**/*.html',
                'components/scss/*scss',
                'builds/development/css/*.css',
                'builds/development/**/*.js',
                'components/**/*.js',
                'builds/development/images/*'],

        tasks: ['copy', 'cssmin', 'uglify', 'sftp-deploy']
      } //scripts
    } //watch

  }); // initConfig

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.registerTask('default', ['sass', 'concat', 'connect', 'watch:localDev']);
  grunt.registerTask('rpiDev', ['sass', 'concat', 'copy', 'cssmin', 'uglify', 'connect', 'sftp-deploy:build', 'watch']);
  grunt.registerTask('godaddy', ['copy', 'cssmin', 'uglify', 'sftp-deploy:godaddy']);

  grunt.registerTask('test', ['sftp-deploy']);
  
}; // wrapper function
