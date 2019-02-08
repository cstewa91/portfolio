$(document).ready(initApp)

function initApp() {
	$('.contact-form').on('click', function (event) {
		var name = $('#name').val();
		var email = $('#email').val();
		var body = $('#body').val();
		var ajaxConfig = {
			type: 'post',
			url: 'mail_handler.php',
			dataType: 'json',
			data: {
				name: name,
				email: email,
				body: body
			},
			success: function (resp) {
				console.log(resp)
			}
		}
		event.preventDefault();
		$.ajax(ajaxConfig)
	})
}



(function ($) {
	"use strict";



	//mobile menu
	var ulNav = "#nav", openNav = "activeNav";

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
		$('body').delay(100).css({ 'overflow': 'visible' });

		$('.all-portfolios').isotope({
			itemSelector: '.single-portfolio'
		});

		$('.portfolio-nav ul li').on('click', function () {
			$('.portfolio-nav ul li').removeClass('active-portfolio');
			$(this).addClass('active-portfolio');

			var selector = $(this).attr('data-filter');
			$('.all-portfolios').isotope({
				filter: selector
			});
			return false;
		});
	});
})(jQuery);