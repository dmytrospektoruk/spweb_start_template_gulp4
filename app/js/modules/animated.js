'use strict'

//Example: $(".element").animated("zoomInUp", "offset%");

module.exports = function() {

	$.fn.animated = function(inEffect, offSet) {
		var $this = $(this);
		$this.css("opacity", "0").addClass("animated");

		$this.waypoint({
			handler: function(direction) {
				if (direction === 'down') {
					$this.addClass(inEffect).css("opacity", "1");
				}
			},
			offset: offSet
		});

	};

}