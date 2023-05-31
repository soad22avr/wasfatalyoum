/*==========================================================

  Theme Name: Nelluce - Responsive HTML5 Food Blog Template

  Version: 1.0

  Author: OG Web Solutions

==========================================================*/



(function ($) {

	"use strict";



	/*=============================

	    Preloader

	=============================*/



	$(window).on("load", function() {

        $(".preloader").delay(200).fadeOut("slow");

    });



	/*=============================

	    Hero Slider

	=============================*/



	$('#hero-slider').slick({

		infinite: true,

		arrows: true,

		dots: false,

		rtl: true,

		autoplay: true,

		responsive: [{

			breakpoint: 768,

			settings: {



				dots: true,

				arrows: false,

			}

		}, ]

	});



	/*=============================

	    Recent Post Slider

	=============================*/





	$('#recent-post-slider').slick({

		infinite: true,

		dots: true,

		rtl: true,

		arrows: false,

		autoplay: true,

	});



	/*=============================

	    Search Form

	=============================*/



	$('.search a').click(function () {

		$('.search-field').slideToggle();

	});



})(jQuery);