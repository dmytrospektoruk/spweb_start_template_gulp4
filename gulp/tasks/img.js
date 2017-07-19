module.exports = function() {
    $.gulp.task('img:app', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gulp.dest('./dist/img/'));
    });

    $.gulp.task('img:dist', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('./dist/img/'));
    });
};
