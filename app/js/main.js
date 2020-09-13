$(function(){

	let mySwiper = new Swiper('.swiper-container', {
		fade: true,
		loop: true,

		navigation: {
			nextEl: '.featured__slider-btn--next',
			prevEl: '.featured__slider-btn--prev',
		},
	});

	let mySwiperFollowers = new Swiper('.swiper-container--followers', {
		slidesPerView: 3,
		spaceBetween: 28,
		fade: true,
		loop: true,

		navigation: {
			nextEl: '.followers__slider-btn--next',
			prevEl: '.followers__slider-btn--prev',
		},
	});

	let mixer = mixitup(".products__inner-box");

	$(".rate-star").rateYo({
    starWidth: "13px",
		rating: 4.5,
		normalFill: 'transparent',
		ratedFill: "#ffc000",
		readOnly: true,
	});


});