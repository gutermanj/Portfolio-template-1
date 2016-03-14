$(document).on('ready', function() {
	loadPage();
});
setTimeout( function loadPage() {
	$('body').fadeIn(1500);
	$('body').removeClass('hidden');
	headerContentTopFadeIn();
	headerContentBottomFadeIn();
}, 1000);

setTimeout( function headerContentTopFadeIn() {
	$('.header-content-top').removeClass('hidden');
	$('.header-content-top').addClass('animated fadeInRight');
}, 0);

setTimeout( function headerContentBottomFadeIn() {
	$('.header-content-bottom').removeClass('hidden');
	$('.header-content-bottom').addClass('animated fadeInRight');
}, 2000);