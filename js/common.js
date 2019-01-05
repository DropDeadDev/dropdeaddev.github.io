$(function() {

	// Custom JS

	$('.top-line').after('<div class="menu__mobile d-lg-none"></div>');
	$('.menu__top').clone().appendTo('.menu__mobile');
	$('.menu__button').click(function() {
		$('.menu__mobile').stop().slideToggle();
	});

});
