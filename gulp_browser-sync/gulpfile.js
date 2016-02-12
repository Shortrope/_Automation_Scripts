var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch(['*.html', '*.js'], {
    cwd: 'src'
  }, reload);
});
