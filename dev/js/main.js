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
	}
	else {
		$topMenu.addClass('animation');
	}
});


//Инициализация плагина Slick
$('.slider-works').slick({
	prevArrow: '<button type="button" class="slick-prev slick-prev-works"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',	
  nextArrow: '<button type="button" class="slick-next slick-next-works"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
	dots: true,
	responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }
  ] 
});

$('.slider-team').slick({
	prevArrow: '<button type="button" class="slick-prev slick-prev-team"><span class="fa fa-angle-left" aria-hidden="true"></span></button>',	
  nextArrow: '<button type="button" class="slick-next slick-next-team"><span class="fa fa-angle-right" aria-hidden="true"></span></button>',
  infinite: true,
  // speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]

});
//Конец Инициализация плагина Slick

$(document).ready(function() {
 initMap(); //Функция Инициализации карты

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

$('.logo, .btn--arrow-up').on('click', function(event) {
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
	onScroll ();

	var distAbout = $('#about').offset().top;
	if ($(window).scrollTop() >= distAbout) {
		$('.header').css('background', 'rgba(0,0,0,0.4)');
		$('.header').css('top', '0');
	} else {
		$('.header').css('background', 'transparent');
		$('.header').css('top', '35px');
		}

});// Конец window.scroll

// Инициализация Карты Google с маркером
function initMap() {

	var chernihiv = {lat: 51.493840, lng: 31.302110};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: chernihiv,
		scrollwheel: false, // Отключить зум скролом
		mapTitleControl: false //убрать элементы выбора вида карты
	});

	var image = {
		url: 'img/Pin.png' 
		// scaledSize : new google.maps.Size(78, 80)
	};

	var marker_chernihiv = new google.maps.Marker({
		position: chernihiv,
		map: map,
		icon: image
	});

	markerCenter();

	function markerCenter() {
		google.maps.event.addDomListener(window, 'resize', function() {
			var center = map.getCenter()
			google.maps.event.trigger(map, "resize")
			map.setCenter(center)
		})
	}
}
// КОНЕЦ Инициализация Карты Google с маркером