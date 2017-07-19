module.exports = function() {

    $.gulp.task('common-js', () => {
        return $.gulp.src([
            'app/js/common.js'
            ])
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
        .pipe($.gp.concat('common.min.js'))
        .pipe($.gulp.dest('./app/js/'));
    });

    $.gulp.task('scripts:app', () => {
        return $.gulp.src($.path.libs)
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
        .pipe($.gp.concat('scripts.js'))
        .pipe($.gulp.dest('./dist/js/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });

    $.gulp.task('scripts:dist', () => {
        return $.gulp.src($.path.libs)
        .pipe($.gp.plumber())
        .pipe($.gp.concat('scripts.min.js'))
        .pipe($.gp.uglify())
        .pipe($.gulp.dest('./dist/js/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });

};
