# Up and Running w Gulp
* Install node
* initialize package.json file  
<pre><code>$ npm init  // this will create the package.json file
</code></pre>
* Install packages from the cli
<pre><code>$ npm install --global gulp-cli   // this is a one time install (global)
$ npm install --save-dev gulp
</code></pre>
*  Create the file 'gulpfile.js'
```javascript
    var gulp = require('gulp');
    gulp.task('taskname', function() {
        console.log('Gulp Works');
        // your task code  
    });
    gulp.task('default', ['taskname']);
```

* Run gulp from the project directory
<pre><code>
$ gulp
</code></pre>
