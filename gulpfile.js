global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        libs: require('./gulp/paths/libs.js')
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
    $.gulp.parallel('styles:app', 'pug', $.gulp.series('common-js', 'scripts:app'), 'svg', 'img:app', 'fonts')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dist', 'pug', $.gulp.series('common-js', 'scripts:dist'), 'svg', 'img:dist', 'fonts'
        // , function() { $.gulp.src('app/.htaccess').pipe($.gulp.dest('./dist/')) }
        ) ));


$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'server'
    )
));
