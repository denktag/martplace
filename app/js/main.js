$(function(){

	let mySwiper = new Swiper('.swiper-container', {
		fade: true,
		loop: true,

		navigation: {
			nextEl: '.featured__slider-btn--next',
			prevEl: '.featured__slider-btn--prev',
		},
	});

	let mixer = mixitup(".products__inner-box");

	$(".rate-star").rateYo({
    starWidth: "15px",
    rating: 4.5,
    ratedFill: "#ffc000",
	});
	

});