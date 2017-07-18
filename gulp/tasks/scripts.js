module.exports = function() {
    
    $.gulp.task('common-js', () => {
        return $.gulp.src([
            'app/js/common.js'
            ])
        .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
        .pipe($.gp.concat('common.min.js'))
        .pipe($.gulp.dest('./app/js/'));
    });

    $.gulp.task('scripts', () => {
        return $.gulp.src([
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/svg4everybody/dist/svg4everybody.min.js',
          'app/js/common.min.js'
          ])
        .pipe($.gp.plumber())
        .pipe($.gp.concat('scripts.min.js'))
        .pipe($.gp.uglify())
        .pipe($.gulp.dest('./build/js/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
    });

};
