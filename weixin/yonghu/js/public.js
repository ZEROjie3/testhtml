//头部导航栏
(function navShow() {
	$('.nav .nav_lists li').on('click', function() {
		var name = $(this).index();
		var navVal =$(this).text();
	    var never = new Date();
	   	//设置never的时间为当前时间加上十年的毫秒值
	    never.setTime(never.getTime()+10*365*24*60*60*1000);
	    document.cookie = "area="+name;	     		
 		document.cookie = "name2="+navVal;	
		$('.nav .nav_lists').removeClass('nav_show');
		$('.nav .nav_lists li').removeClass('show');
				
	});
	
})();
		
		var oNavlist = $('.product_center .left_nav').find('.nan_list');
		var oA = $('.product_center .left_nav').find('.nan_list a');
		var lefNav_l = $('.product_center .left_nav').find('.nan_list').length;
		var cookie_val = getCookie("area");
		$('.nav .nav_lists li').eq(cookie_val).addClass('show');
		var cookie_name = getCookie2('name2');
		//遍历导航栏并把字符串放在一个空数组里
		var arr = [];
		$(oA).each(function(index, data) {
			var val = $(data).html()
			if($.inArray(val, arr) < 0) {
				arr.push(val);
			}
		});
		//如果arr数组里面存在oVal 这个字符串则返回该字符串的数组下标，否则返回(不包含在数组中) -1
		 var result = $.inArray(cookie_name, arr);
		if(result >= 0) {
			$('.product_center .left_nav').find('.nan_list').removeClass('changed');
			$('.product_center .left_nav').find('.nan_list').eq(result).addClass('changed')
		}

function getCookie2(cookie_name)
		{
		    var allcookies = document.cookie;
		    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度

		    if (cookie_pos != -1)
		    {
		        // 把cookie_pos放在值的开始，只要给值加1即可。
		        cookie_pos += cookie_name.length + 1;//这里容易出问题，所以请大家参考的时候自己好好研究一下
		        var cookie_end = allcookies.indexOf(";", cookie_pos);
		  
		        if (cookie_end == -1)
		        {
		            cookie_end = allcookies.length;
		        }
		  
		        var value = unescape(allcookies.substring(cookie_pos, cookie_end));//这里就可以得到你想要的cookie的值了。。。
		    }
		    return value;
		}


function getCookie(cookie_name)
		{
		    var allcookies = document.cookie;
		    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度
		  
		    // 如果找到了索引，就代表cookie存在，
		    // 反之，就说明不存在。
		    if (cookie_pos != -1)
		    {
		        // 把cookie_pos放在值的开始，只要给值加1即可。
		        cookie_pos += cookie_name.length + 1;//这里容易出问题，所以请大家参考的时候自己好好研究一下
		        var cookie_end = allcookies.indexOf(";", cookie_pos);
		  
		        if (cookie_end == -1)
		        {
		            cookie_end = allcookies.length;
		        }
		  
		        var value = unescape(allcookies.substring(cookie_pos, cookie_end));//这里就可以得到你想要的cookie的值了。。。
		    }
		    return value;
		}







//左边导航栏鼠标滑过效果
(function leftNavclivk() {
	$('.product_center .left_nav').find('.nan_list').mouseenter(function() {
		$('.product_center .left_nav').find('.nan_list').removeClass('change');
		$(this).addClass('change');
		$(this).animate({
			width: '303px'
		}, 220);
	});
	$('.product_center .left_nav').find('.nan_list').mouseleave(function() {
		$(this).removeClass('change');
		$(this).stop(true).animate({ width: '238px' }, 0);
	});
	$('.product_center .left_nav').find('.nan_list').on('click', function() {
		$('.product_center .left_nav').removeClass('clicked');
		$('.product_center .left_nav').find('.nan_list').removeClass('changed');
		$(this).addClass('changed').css('width', '238px');
	});

})();

//内页新闻中心内容点击效果
(function newsClick() {
	$('.newsCenter .mainContents .rigContent').find('.contentList').on('click', function() {
		$('.newsCenter .mainContents .rigContent').find('.contentList').removeClass('newsClick');
		$(this).addClass('newsClick');
	});
})();
//返回顶部滚轮事件
(function scolltop() {
	var oTopHeight = $('.gotop').offset().top / 2;
	$(window).scroll(function() {
		var oScollTop = $(document).scrollTop();
		if(oScollTop > oTopHeight) {
			$('.gotop').css('opacity', '1').show();
		} else {
			$('.gotop').hide();
		}
	});
})();