var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch(['*.html', '*.css', '*.js']).on('change', reload);
});
