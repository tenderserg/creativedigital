// (function($, undefined) {
    
// })(jQwery);


// == For responsive MENU == 
var $topMenu = $('#main-menu');

$('#show_menu').on('click', function () {	
	 if ($topMenu.hasClass('open') ) {
	 		$topMenu.removeClass('open');
	 		$(this).removeClass('open');
	 }
	 else{
	 		$topMenu.addClass('open');
	 		$(this).addClass('open');
	 }
});

$(window).resize(function(){
	if ($(window).width() > 768) {
		$topMenu.removeClass('animation')
			      .removeClass('open');
		$('#show_menu').removeClass('open');
		// Анимация с WOW. Инициализация плагина.
		new WOW().init();
	}
	else {
		$topMenu.addClass('animation');
	}

});


//Инициализация плагина Slick
$('.slider-works').slick({
	prevArrow: '<button type="button" class="slick-prev slick-prev-my"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',	
  nextArrow: '<button type="button" class="slick-next slick-next-my"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
	dots: true 
});

//Конец Инициализация плагина Slick


$(document).ready(function() {
 // initMap(); //Функция Инициализации карты

 //Плавная прокрутка к определённой секции по клику на меню навигации
	$('.menu__list').on('click', '.menu__link', function (event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);
		
		$('.menu__link.active').removeClass('active');
		$(this).addClass('active');

		if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}

	});
	// Конец Плавная прокрутка

$('.logo').on('click', function(event) {
		event.preventDefault();
		var link = $(this).attr('href');
		var distance = $(link).offset().top;

		$('html, body').animate({
			scrollTop: distance
		}, 500);

		if ($('#show_menu').hasClass('open')) {
			$('#show_menu').removeClass('open');
			$topMenu.removeClass('open');
		}
});


}); // Конец document.ready

// Функция для подсветки активного пункта меню при прокрутке
function onScroll(){
	var scroll_top = $(window).scrollTop();
	
	$(".menu__link").each(function(){
		var link = $(this).attr("href");
		var target = $(link);

		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(".menu__link").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(window).scroll(function() {
	// onScroll ();

	var distAbout = $('#about').offset().top;
	if ($(window).scrollTop() >= distAbout) {
		$('.header').css('background', 'rgba(0,0,0,0.4)');
		$('.header').css('top', '0');
	} else {
		$('.header').css('background', 'transparent');
		$('.header').css('top', '35px');
		}

});// Конец window).scroll