module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gulp.dest('./build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./app/img/**/*.{png,jpg,gif,ico}')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('./build/img/'));
    });
};
