$(document).on('ready', function() {



// All of the loading events-------
setTimeout( function () {
	$('.loading').fadeOut( 200 );
	setTimeout( function() {
		$('.main-container').fadeIn(1500);
		$('.main-container').removeClass('hidden');
	}, 500);
}, 3200);

setTimeout( function() {
	$('.header-content-top').removeClass('hidden');
	$('.header-content-top').addClass('animated fadeInRight');
}, 1500);

setTimeout( function() {
	$('.header-content-bottom').removeClass('hidden');
	$('.header-content-bottom').addClass('animated fadeInRight');
}, 4500);




// Nav Items Fade In
setTimeout( function() {
	$('.nav-item-1').removeClass('hidden');
	$('.nav-item-1').addClass('animated fadeIn');
}, 6000);

setTimeout( function() {
	$('.nav-item-2').removeClass('hidden');
	$('.nav-item-2').addClass('animated fadeIn');
}, 6300);

setTimeout( function() {
	$('.nav-item-3').removeClass('hidden');
	$('.nav-item-3').addClass('animated fadeIn');
}, 6600);

setTimeout( function() {
	$('.nav-item-4').removeClass('hidden');
	$('.nav-item-4').addClass('animated fadeIn');
}, 6900);

// All of the loading events-------------




// Grabbing window height

var windowHeight = $(window).height();

$('.home-content').css({
	height: windowHeight
});

$('.about-content').css({
	height: windowHeight
});

$('.work-content').css({
	height: windowHeight
});

$('.contact-content').css({
	height: windowHeight
});

// Set height for main content for better UX



$('li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});

// custome active class when li is clicked



$("li").click(function() {
	setTimeout( function() {
  		$("html, body").animate({ scrollTop: $(document).height() }, 1750);
  		return false;
	}, 1000);
});


// Making window scroll to bottom when li is clicked

$('.nav-item-1').on('click', function() {
	$('.about-content').fadeOut('slow');
	$('.contact-content').fadeOut('slow');
	$('.work-content').fadeOut('slow');
	$('.home-content').fadeIn(2000);
	$('.home-content').removeClass('hidden');
});


$('.nav-item-2').on('click', function() {
	$('.home-content').fadeOut('slow');
	$('.work-content').fadeOut('slow');
	$('.contact-content').fadeOut('slow');
	$('.about-content').fadeIn(2000);
	$('.about-content').removeClass('hidden');
});


$('.nav-item-3').on('click', function() {
	$('.home-content').fadeOut('slow');
	$('.about-content').fadeOut('slow');
	$('.contact-content').fadeOut('slow');
	$('.work-content').fadeIn(2000);
	$('.work-content').removeClass('hidden');
});


$('.nav-item-4').on('click', function() {
	$('.home-content').fadeOut('slow');
	$('.about-content').fadeOut('slow');
	$('.work-content').fadeOut('slow');
	$('.contact-content').fadeIn(2000);
	$('.contact-content').removeClass('hidden');
});



});








