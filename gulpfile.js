global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});


$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles', 'pug', $.gulp.series('common-js', 'scripts'), 'svg', 'img:dev', 'fonts')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles', 'pug', $.gulp.series('common-js', 'scripts'), 'svg', 'img:build', 'fonts', function() { 
            $.gulp.src('app/.htaccess').pipe($.gulp.dest('./build/'))
        }) ));


$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'server'
    )
));
