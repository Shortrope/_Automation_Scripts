var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  srcDir = 'src/',
  srcFiles = srcDir + '**/*.*';


gulp.task('go', function () {
  // gulp.watch requires a task
});

gulp.task('watch', function () {
  gulp.watch(srcFiles, ['go']);
});

gulp.task('webserver', function () {
  gulp.src(srcDir)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['go', 'webserver', 'watch']);
