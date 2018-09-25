jQuery(document).ready(function(){

	//carouFredSel-Slider
	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		scroll:
			{
				items:1,
				duration:1,
				pouseOnHover:true,
			},
		auto:true,
		items:
			{
				visible:
					{
						min:1,
						max:1
					},
				height:"variable"
			},
		pagination:
			{
				container:".sliderpager",
				pageAnchorBuilder:false
			},
	});
	
		// Portfolio Carousel
	$('.portfolio-carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		prev:'#prev',
		next:'#next',
		scroll:
			{
				items:1,
				duration:1,
				pouseOnHover:true,
			},
		auto:true,
		items:
			{
				visible:
					{
						min:1,
						max:4
					},
				height:"variable"
			},
	});

	//Sticky Menu
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>60){
			$("#header-section").addClass('sticky');
		}else{
			$("#header-section").removeClass('sticky');
		}
	});

	//slick-nav
        $('#menu').slicknav({
        	label:'',
        });

    //smooth scroll
    $('a').smoothScroll();
});