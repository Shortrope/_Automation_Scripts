var gulp = require('gulp'),
  sass = require('gulp-sass'),
  bsync = require('browser-sync').create(),
  reload = bsync.reload;

// Move html files to build/dev directory
gulp.task('html', function () {
  return gulp
    .src('src/*.html')
    .pipe(gulp.dest('build/dev/'));
});

// compile .scss file and move to build/dev/css
gulp.task('sass', function () {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/dev/css/'));
});

// Fire up Browser Sync but process html and sass first
gulp.task('server', ['html', 'sass'], function () {
  bsync.init({
    server: {
      baseDir: 'build/dev/'
    }
  });
});

// Reload the browser but process html and sass first
gulp.task('refresh', ['html', 'sass'], function () {
  reload();
});

// Start BrowserSync and define watches
gulp.task('default', ['server'], function () {
  gulp.watch('src/*.html', ['refresh']);
  gulp.watch('src/scss/*.scss', ['refresh']);
});
