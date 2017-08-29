module.exports = function() {
    $.gulp.task('clean', function() {
        return $.del([
            './dist'
        ]);
    });
    $.gulp.task('clean-js', function() {
        return $.del([
            './dist/js/common.min.js'
        ]);
    });
};