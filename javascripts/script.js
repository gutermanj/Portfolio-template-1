$(document).on('ready', function() {
	loadPage();
});


setTimeout( function loadPage() {
	$('.loading').fadeOut( 200 );
	setTimeout( function() {
		$('.main-container').fadeIn(1500);
		$('.main-container').removeClass('hidden');
		headerContentTopFadeIn();
		headerContentBottomFadeIn();
	}, 500);
}, 3500);

setTimeout( function headerContentTopFadeIn() {
	$('.header-content-top').removeClass('hidden');
	$('.header-content-top').addClass('animated fadeInRight');
}, 2500);

setTimeout( function headerContentBottomFadeIn() {
	$('.header-content-bottom').removeClass('hidden');
	$('.header-content-bottom').addClass('animated fadeInRight');
}, 5000);