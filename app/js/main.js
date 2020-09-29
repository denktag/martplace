$(function(){

	let mySwiper = new Swiper('.swiper-container', {
		fade: true,
		loop: true,

		navigation: {
			nextEl: '.featured__btn-next',
			prevEl: '.featured__btn-prev',
		},
	});

	let mySwiperFollowers = new Swiper('.swiper-container--followers', {
		slidesPerView: 1,
		fade: true,
		loop: true,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30
			},

			992: {
				slidesPerView: 3,
				spaceBetween: 28
			},
		},

		navigation: {
			nextEl: '.slider__btn--followers-next',
			prevEl: '.slider__btn--followers-prev',
		},
	});

	let mixer = mixitup(".products__inner");

	$(".rate-star").rateYo({
    starWidth: "13px",
		rating: 4.5,
		normalFill: 'transparent',
		ratedFill: "#ffc000",
		readOnly: true,
	});

	$('.products__title-btn').on('click', function () {
		$('.products__filter').slideToggle();
	});

	$('.products__title-btn').focusout(function () {
		$('.products__filter').slideToggle();
	});

	$('.header__notification-btn--alarm').on('click', function () {
		$('.notification__box--alarm').slideToggle();
	});

	$('.header__notification-btn--alarm').focusout( function () {
		$('.notification__box--alarm').slideToggle();
	});

	$('.header__notification-btn--massage').on('click', function () {
		$('.notification__box--massage').slideToggle();
	});

	$('.header__notification-btn--massage').focusout(function () {
		$('.notification__box--massage').slideToggle();
	});

	$('.header__notification-btn--cart').on('click', function () {
		$('.notification__box--cart').slideToggle();
	});

	$('.header__notification-btn--cart').focusout(function () {
		$('.notification__box--cart').slideToggle();
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__menu').slideToggle();
	});

	$('.header__menu-btn').focusout(function () {
		$('.header__menu').slideToggle();
	});

	$('.drop-down__title--martplace-pages').on('click', function () {
		$('.drop-down__wrap--martplace-pages').slideToggle();
	});

	$('.drop-down__title--martplace-pages').focusout(function () {
		$('.drop-down__wrap--martplace-pages').slideToggle();
	});

	$('.drop-down__title--dashboard').on('click', function () {
		$('.drop-down__wrap--dashboard').slideToggle();
	});

	$('.drop-down__title--dashboard').focusout('click', function () {
		$('.drop-down__wrap--dashboard').slideToggle();
	});

	$('.drop-down__title--others-pages').on('click', function () {
		$('.drop-down__wrap--others-pages').slideToggle();
	});

	$('.drop-down__title--others-pages').focusout('click', function () {
		$('.drop-down__wrap--others-pages').slideToggle();
	});
});