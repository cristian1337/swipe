window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
        slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		
    });
    
    new Glider(document.querySelector('.carousel__lista__2'), {
		slidesToShow: 1,
        slidesToScroll: 1,
		dots: '.carousel__indicadores__2',
		arrows: {
			prev: '.carousel__anterior__2',
			next: '.carousel__siguiente__2'
		},
		
	});
	
	new Glider(document.querySelector('.carousel__lista__3'), {
		slidesToShow: 1,
        slidesToScroll: 1,
		dots: '.carousel__indicadores__3',
		arrows: {
			prev: '.carousel__anterior__3',
			next: '.carousel__siguiente__3'
		},
		
    });
});