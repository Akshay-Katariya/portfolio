export const SliderSettings = {
	adaptiveHeight: false,
	dots: true,
	arrows: true,
	infinite: true,
	// autoplay: true,
	draggable: false,
	speed: 1000,
	autoplaySpeed: 5000,
	slidesToShow: 3,
	slidesToScroll: 3,

	responsive: [
		{
			breakpoint: 1390,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}
