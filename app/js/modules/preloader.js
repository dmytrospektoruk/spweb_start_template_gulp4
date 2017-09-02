'use strict'

var afterPreloader = require('./afterPreloader.js');

module.exports = function() {

	var def = $.Deferred(),
	imgs = [],
	percents = 1;

	$.each($('*'), function() {
		var $this = $(this),
		img = $this.is('img'),
		bgs = $this.css('background-image');

		if ( img ) {
			var puth = $this.attr('src');
			if ( puth ) {
				imgs.push(puth);
			}
		}

		if ( bgs != 'none') {
			var contains = bgs.includes('"');

			if ( contains ) {
				var puth = bgs.replace('url("', '').replace('")', '');
				imgs.push(puth);
			}
			else {
				var puth = bgs.replace('url(', '').replace(')', '');
				imgs.push(puth);
			}
			
		}

	});

	for ( var i = 0; i < imgs.length; i++ ) {
		var image = $('<img>', {
			'attr': {
				'src'	: imgs[i]
			}
		});

		$(image).on('load', function() {
			percentages(imgs.length, percents);
			if ( percents == (imgs.length) ) {
				def.resolve();
			}
			percents++;
		});

	}

	function percentages(total, current) {
		var percent = Math.ceil(current / total * 100);
		$('.preloader__text').text(percent);
	}

	def.done(function() {

		// $('.preloader .preloader__path').css({
		// 	'animation-play-state' : 'paused'
		// });
		// $('.preloader').stop().fadeOut(1000);
		// $('.wrapper').css({
		// 	'display': 'block'
		// }).stop().animate({
		// 	'opacity': 1
		// }, 200, function() {
			afterPreloader();
		// });
		
	});

}