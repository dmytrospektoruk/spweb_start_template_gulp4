module.exports = function() {
	$.gulp.task('img:app', () => {
		return $.gulp.src([
			'./app/img/**/*.{png,jpg,gif,ico,svg}',
			'!./app/img/svg/*.svg'
			])
		.pipe($.gulp.dest('./dist/img/'));
	});

	$.gulp.task('img:dist', () => {
		return $.gulp.src([
			'./app/img/**/*.{png,jpg,gif,ico,svg}',
			'!./app/img/svg/*.svg'
			])
		.pipe($.gp.imagemin())
		.pipe($.gulp.dest('./dist/img/'));
	});
};
