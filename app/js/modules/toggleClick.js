'use strict'

module.exports = $.fn.toggleClick = function(){
	var methods = arguments,
	count = methods.length;
	return this.each(function(i, item){
		var index = 0;
		$(item).click(function(){
			return methods[index++ % count].apply(this,arguments);
		});
	});
};