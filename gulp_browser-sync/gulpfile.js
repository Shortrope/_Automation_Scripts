var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch(['src/*.html', 'src/css/*.css', 'src/js/*.js', 'src/images/*'])
      .on('change', reload);
});

gulp.task('default', ['server']);
