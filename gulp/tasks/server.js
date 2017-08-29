module.exports = function() {
  $.gulp.task('server', function() {
    $.browserSync.init({
      server: {
        baseDir: './dist',
        // index: "index.html"
      },
      notify: false,
      ui: false
    });
  });
};