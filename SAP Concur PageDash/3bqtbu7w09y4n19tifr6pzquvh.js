(function($) {

	function setAudience() {
		var pagePath = window.location.pathname.split('/');
		var pageArg = pagePath[1] ? pagePath[1] == 'en-us' ? pagePath[2] : pagePath[1] : '';
		pageArg = pageArg ? pageArg.split(/-(.+)/) : '';
		var businessSize = pageArg[0] ?  pageArg[0] : '';
		var businessNeed = pageArg[1] ? pageArg[1] :  '';
		var audienceHome = '';
		if (pagePath[1] === 'en-us') {
			audienceHome = '/' + pagePath[1] + '/' + businessSize + '-' + businessNeed;
			// German urls are only one word...
		} else if (!businessNeed) {
			audienceHome = '/' + businessSize;
		} else {
			audienceHome = businessSize + '-' + businessNeed;
		}

		var audience = {businessSize: businessSize, businessNeed: businessNeed, homepage: audienceHome};

		localStorage.setItem("concur_audience", JSON.stringify(audience));

		checkAudience();
	}

	function checkAudience() {
		var audience = JSON.parse(localStorage.getItem("concur_audience")),
			audienceHome = audience.homepage ? audience.homepage : '';

			$('.header_homepage a').each(function() {
				if ($(this).attr('href') === audienceHome || $(this).attr('href') === '/' + audienceHome) {
					$(this).addClass('active').removeAttr('href')
				} else {
					$(this).removeClass('active')
				}
			});			
	}

	$(document).ready(function(){
		setAudience();

		// Set onload animations on large screens
		var h1Container = $('.header_homepage .header-animate-in');
		var bothHeaders = $('.header_homepage .text-anim');

		// Get the background image url
		var headerBG = $('.header_homepage .header-background');
		var bgUrl = headerBG.css('background-image').split(/(\(\"?|\"?\))/g)[2];

		if (jQuery(document).width() >= 992) {
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
				bothHeaders.addClass('end-anim');
			} else {
				h1Container.height(h1Container.find('h1').height() * 1.05);
				bothHeaders.addClass('start-anim');
			}
		}
		
		if (bgUrl) {
			$('<img/>').attr('src', bgUrl).load(function () {
				headerBG.addClass('loaded');
				setTimeout(function () {
					headerBG.addClass('end-anim');

					// Fallback for browsers that don't support css3 animations
					// This way the text will always display after a second
					bothHeaders.addClass('end-anim');
				}, 750);
			});
		}
	});

}(jQuery))