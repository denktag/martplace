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

	if($('div').is('.mix')) {
		let mixer = mixitup(".products__inner");
	}

	$('.filter__btn--new').on('click', function () {
		$(".filter__btn--new").addClass('btn-active');
		$(".filter__btn--popular").removeClass("btn-active");
	});

	$(".filter__btn--popular").on("click", function () {
		$(".filter__btn--popular").addClass("btn-active");
		$(".filter__btn--new").removeClass("btn-active");
	});

	$('.filter__list').on('click', function(){
		$(".category-products__item").addClass('list');
		$(".filter__icon--list").addClass("filter__icon--active");
    $(".filter__icon--grid").removeClass("filter__icon--active");
	});

	$(".filter__grid").on("click", function () {
		$(".category-products__item").removeClass("list");
		$(".filter__icon--grid").addClass("filter__icon--active");
    $(".filter__icon--list").removeClass("filter__icon--active");
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 500,
		from: 30,
		to: 300,
		prefix: "$",
	});

	$(".rate-star").rateYo({
    starWidth: "13px",
		rating: 4.5,
		normalFill: 'transparent',
		ratedFill: "#ffc000",
		readOnly: true,
	});

	$(".star-category").rateYo({
    starWidth: "17px",
    rating: 4.5,
    normalFill: "transparent",
		ratedFill: "#ffc000",
    readOnly: true,
	});
	
	$(".aside__star").rateYo({
		starWidth: "17px",
		rating: 4.9,
		normalFill: "transparent",
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
		$('.notification--alarm').slideToggle();
	});

	$('.header__notification-btn--alarm').focusout( function () {
		$('.notification--alarm').slideToggle();
	});

	$('.header__notification-btn--massage').on('click', function () {
		$('.notification--massage').slideToggle();
	});

	$('.header__notification-btn--massage').focusout(function () {
		$('.notification--massage').slideToggle();
	});

	$('.header__notification-btn--cart').on('click', function () {
		$('.notification--cart').slideToggle();
	});

	$('.header__notification-btn--cart').focusout(function () {
		$('.notification--cart').slideToggle();
	});

	$('.menu-btn').on('click', function () {
		$('.header__menu').slideToggle();
	});

	$('.menu-btn').focusout(function () {
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

	$('.product__menu-btn').on('click', function () {
		$('.single-product__list').slideToggle();
	});

	$('.product__menu-btn').focusout(function () {
		$('.single-product__list').slideToggle();
	});

	$('.single-product__block .single-product__item').on('click', function(event) {
		let id = $(this).attr('data-id');
		$('.single-product__block').find('.single-product__box').removeClass('item-active').hide();
		$('.single-product__block .single-product__list').find('.single-product__item').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active-tab').fadeIn();
		return false;
	});

	$('.aside__inner .aside__title-item').on('click', function(event) {
		let id = $(this).attr('data-id');
		$('.aside__inner').find('.aside__posts').removeClass('aside__posts--active').hide();
		$('.aside__inner .aside__title').find('.aside__title-item').removeClass('aside__title-item--active');
		$(this).addClass('aside__title-item--active');
		$('#'+id).addClass('aside__posts--active').fadeIn();
		return false;
	});

});