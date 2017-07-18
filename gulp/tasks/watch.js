module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/sass/**/*.sass', $.gulp.series('styles'));
        $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./app/js/common.js', $.gulp.series('common-js', 'scripts'));
        $.gulp.watch(['./app/img/general/**/*.{png,jpg,gif}',
                     './app/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });
};