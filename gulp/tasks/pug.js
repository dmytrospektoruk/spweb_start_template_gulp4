module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./app/pug/_pages/*.pug')
            .pipe($.gp.plumber())
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./app/pug/_data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./app/pug/_data/content.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
