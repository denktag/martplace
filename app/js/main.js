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
		slidesPerView: 3,
		spaceBetween: 28,
		fade: true,
		loop: true,

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
});