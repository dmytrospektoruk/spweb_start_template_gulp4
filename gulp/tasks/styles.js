module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src('./app/sass/main.sass')
            .pipe($.gp.plumber())
            .pipe($.gp.sass({
                outputStyle: 'expand'
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'SASS',
                    message: error.message
                };
            }))
            .pipe($.gp.rename({
                suffix: '.min', 
                prefix : ''
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 15 versions']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
