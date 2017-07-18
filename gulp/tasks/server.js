module.exports = function() {
  $.gulp.task('server', function() {
    $.browserSync.init({
      server: {
        baseDir: './build'
      // index: "index.html"
      },
      notify: false,
      ui: false
    });
  });
};