Npm and Grunt install
=====================
Overview
--------
- install node.js 
- install terminal (cli): git-shell / git portable / git-Bash
- at the terminal:
    - install grunt-cli 
    - in the project directory
        - initialize npm project
        - install grunt
        - install other automation packages
        - create the gruntfile.js file
        - launch grunt

**gruntfile.js skeleton**  

        module.exports = function(grunt) {  
            grunt.initConfig({  

                // list of tasks and their config/options  

            });  //end initConfig  

            // loadNPMTasks()  

        };  // end wrapper function  

---

Sample Grunt setup
------------------
This setup will:  
- lauch an http server
- automatically run the Sass compiler upon changes to .scss files
- auto reload browser upon changes to .html .js or .scss files.

1. install nodejs  
2. npm install grunt-cli -g  
    - *installs grunt-cli globally. One time install*
3. 'cd' to the project directory  
    - *do the following for each new prject*
4. npm init  
5. npm install grunt --save-dev  
6. npm install grunt-sass --save-dev  
7. npm install grunt-contrib-connect --save-dev  
8. npm install grunt-contrib-watch --save-dev  
9. *create the gruntfile.js*
10. grunt &nbsp;&nbsp;&nbsp;&nbsp; //command to launch the default grunt tasks

### gruntfile.js
    module.exports = function (grunt) {
      'use strict';

      grunt.initConfig({

        sass: {
          dist: {
            options: {
              outputStyle: 'expanded'
            },
            files: [{
              src: 'builds/components/css/style.scss',
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
        }, // connect

        watch: {
          scripts: {
            options: {
              spawn: false,
              livereload: true
            },

            files: ['builds/development/**/*.html',
                    'builds/components/css/*.scss',
                    'builds/development/**/*.js'],

            tasks: ['sass']
          }
        } // watch

      }); // initConfig

      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-connect');
      grunt.loadNpmTasks('grunt-contrib-watch');

      grunt.registerTask('default', ['sass', 'connect', 'watch']);

    }; // wrapper function
