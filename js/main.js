(function ($) {
	"use strict";



	//mobile menu
	var ulNav = "#nav",
		openNav = "activeNav";

	$('.toggle-menu').on('click', function (e) {
		if ($(ulNav).hasClass(openNav)) {
			$(ulNav).removeClass(openNav);
		} else {
			$(ulNav).addClass(openNav);
		}
		e.preventDefault();
	});

	//isotope portfolio
	$(window).on('load', function () {

		$('#status').fadeOut();
		$('#preloader').delay(100).fadeOut('fast');
		$('body').delay(100).css({
			'overflow': 'visible'
		});

	});
})(jQuery);