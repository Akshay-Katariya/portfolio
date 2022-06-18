export const SliderSettings = {
	adaptiveHeight: false,
	dots: true,
	arrows: true,
	infinite: true,
	// autoplay: true,
	speed: 2000,
	autoplaySpeed: 5000,
	slidesToShow: 3,
	slidesToScroll: 1,

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
