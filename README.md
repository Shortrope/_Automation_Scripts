# Get Up and Running w Gulp
1. Install node
1. initialize package.json file
```
$ npm init  // this will create the package.json file
```
1. Install packages from the cli
```
$ npm install --global gulp-cli
$ npm install --save-dev gulp-cli
```
1.  Create the file 'gulpfile.js' in the project directory
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
