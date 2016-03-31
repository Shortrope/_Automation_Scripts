var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass'),
  bsync = require('browser-sync').create(),
  reload = bsync.reload;

// Process .jade files and put in build/dev, w indentation
gulp.task('jade', function () {
  return gulp
    .src('src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build/dev/'))
});

// Process Sass files and move to build/dev/css
gulp.task('sass', function () {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/dev/css/'));
});

// Fire up Browser
gulp.task('server', function () {
  bsync.init({
    server: {
      baseDir: 'build/dev/'
    }
  });
});

// Refresh the Browser
gulp.task('refresh', ['jade', 'sass'], function () {
  reload();
});

// Launch Browser and watch files for changes
gulp.task('default', ['server'], function () {
  gulp.watch('src/*.jade', ['refresh']);
  gulp.watch('src/scss/*.scss', ['refresh']);
});
