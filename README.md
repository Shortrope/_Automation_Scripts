# Get Up and Running w Gulp
1. Install node
1. initialize package.json file
```
$ npm init  // this will step you thru creating the package.json file
```
1. Install packages from the cli
```
$ npm install --global gulp-cli   // this is a one time install (global)
$ npm install --save-dev gulp
```
1.  Create the file 'gulpfile.js'
```javascript
var gulp = require('gulp');
gulp.task('default', function() {
    console.log('Gulp Works');
    // your task code  
});
```
1. Run gulp from the project directory
```
$ gulp
```
