$(document).ready(initApp)

function initApp() {
	$('#send-btn').on('click', sendEmail);
}

function sendEmail() {
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
	}
	event.preventDefault();
	if(name !== "" && email !== "" && body !== "")
	// $.ajax(ajaxConfig)
	emailSubmitMessage()
}

function emailSubmitMessage() {
	$('.contact-form').addClass('hide');
	$('.submit-message-container').removeClass('hide')
	setTimeout(function() {
		$('.submit-icon').addClass('check-mark-animation')
	}, 250)
	setTimeout(function() {
		$('.submit-message').removeClass('hide').addClass('submit-message-animation')
	}, 250)
}



(function ($) {
	"use strict";

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