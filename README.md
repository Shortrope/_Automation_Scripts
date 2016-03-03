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


# Get Up and Running w Gulp
1. Install node
2. initialize package.json file  
<pre><code>
$ npm init  // this will step you thru creating the package.json file
</code></pre>
3. Install packages from the cli
<pre><code>
$ npm install --global gulp-cli   // this is a one time install (global)
$ npm install --save-dev gulp
</code></pre>
4.  Create the file 'gulpfile.js'
<pre><code>
```javascript
var gulp = require('gulp');
gulp.task('default', function() {
    console.log('Gulp Works');
    // your task code  
});
```
</code></pre>
5. Run gulp from the project directory
<pre><code>
$ gulp
</code></pre>
