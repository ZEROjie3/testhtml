//swiper demo1 go
var swiper = new Swiper('.demo1.swiper-container', {
    paginationClickable: true,
    loop:true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
//swiper demo1 end
//swiper demo2 go
var swiper = new Swiper('.demo2.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationType: 'progress',
    loop:true,
    centeredSlides: true,
    autoplay: 2500,
    speed: 800,
});
//swiper demo2 end
//swiper demo3 go
var swiper = new Swiper('.demo3.swiper-container', {
    pagination: '.demo3 .swiper-pagination',
    paginationClickable: true,
    loop:true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    
});
//swiper demo3 end
//车型展示
$(function(){
	var length = $('.nyZhanshiXx_box .nyZhanshiXx .ynContent li').length
	var width = parseInt($('.nyZhanshiXx_box .nyZhanshiXx .ynContent li').css('width'));
	var widthAll = width*length
	$('.nyZhanshiXx_box .nyZhanshiXx .ynContent').css({
		'width':widthAll+"px"
	})
	
	
	$('.nyZhanshiXx_box .nyZhanshiXx').on('click','.ynContent li',function(){
		var index = $(this).index();
		$(this).addClass('hover')
		.siblings('li').removeClass('hover')
		
		$('.zhanShi_box .zhanShi .syContentAll>li').eq(index).addClass('hover')
		.siblings('li').removeClass('hover')
	})
})


//车型展示
//车型展示详情
$('.nyChexing_box .nyChexing').on('click','.nyChexing_ys .nyChexing_ul li',function(){
	$(this).addClass('hover')
	.siblings('li').removeClass('hover');
})
//车型展示详情




