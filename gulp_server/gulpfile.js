var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: 'Assignment4'
        }
    });
    gulp.watch(['*.html', '*.js'], {cwd: 'Assignment4'}, reload);
});