(function ($) {
    "use strict";
		
	
	
	//mobile menu
		var ulNav= "#nav", openNav= "activeNav";
		
		$('.toggle-menu').on('click',function(e){
			if($(ulNav).hasClass(openNav)){
				$(ulNav).removeClass(openNav);
			}else{
				$(ulNav).addClass(openNav);
			}
			e.preventDefault();
		});
	
	//isotope portfolio
	$(window).on('load', function() {

		$('#status').fadeOut();
		$('#preloader').delay(100).fadeOut('fast');
		$('body').delay(100).css({'overflow':'visible'});

		$('.all-portfolios').isotope({
			itemSelector:'.single-portfolio'
		});

		$('.portfolio-nav ul li').on('click', function(){
			$('.portfolio-nav ul li').removeClass('active-portfolio');
			$(this).addClass('active-portfolio');
			
			var selector = $(this).attr('data-filter');
			$('.all-portfolios').isotope({
				filter:selector
			});
			return false;
		});

		//magnificPopup
		  $('.ink-img').magnificPopup({type:'image'});
	});
	
	//portfolio carousel
	$(".portfolio-slider").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:true,
		autoplay:false
	});
	
	//blog carousel
	$(".homepage-slider").owlCarousel({
		items:1,
		margin:10,
		loop:true,
		dots:true,
		nav:true,
		autoplay:false
	});
	
	//about carousel
	$(".about-slider").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		autoplay:true
	});
	
	//blog carousel
	$(".blog-area").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:true,
		autoplay:false
	});
	
	//progress bar
	$('#photoshop').LineProgressbar({
		percentage:80,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#sketch').LineProgressbar({
		percentage:85,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#in-design').LineProgressbar({
		percentage:70,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#marketing').LineProgressbar({
		percentage:90,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#html5').LineProgressbar({
		percentage:80,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#css3').LineProgressbar({
		percentage:85,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#wordpress').LineProgressbar({
		percentage:70,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	$('#laravel').LineProgressbar({
		percentage:90,
		ShowProgressCount: false,
		duration: 3000,
		height: '5px',
		fillBackgroundColor: '#E84118',
		radius: 5
	});
	
	
})(jQuery);