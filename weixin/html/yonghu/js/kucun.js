			var html = '<img src="img/kucun_09.png" class="img"/>';
			var html1 = '<img src="img/kucun_03.png" class="img"/>';
			$('.dop').on('click',function(){
				$('.dop').removeClass('asd')
				$(this).addClass('asd')
				$('.dop').find('.pzright').html(html);
				if($(this).parents('.peiz').next('.shang').hasClass('atin')){
					$('.shang').addClass('atin');
					$(this).parents('.peiz').next('.shang').removeClass('atin');
					$(this).find('.pzright').html(html1);
				}else{
					$(this).parents('.peiz').next('.shang').addClass('atin');
					$(this).find('.pzright').html(html);
				
				}
			})
			var m = 0;
			$('.dpp').on('click',function(){
				m++;
				if(m%2 ==1){
					$(this).parents('.peiz1').next('.xia').addClass('atin');
					$(this).find('.xpzright').html(html);
					
				}else{
					$(this).parents('.peiz1').next('.xia').removeClass('atin');
					$(this).find('.xpzright').html(html1);
				}
			});
			$(function(){ 
				$(".pinpai").click(function(event){ 
				event.stopPropagation(); 
				}); 
				
				}); 
			
			$('body').on('click',function(){
				if($('.kyangs').css('display') =='block'){
					$('.kyangs').hide(300);
					
				}else if($('.kyangs1').css('display') =='block'){
					$('.kyangs1').hide(300);
					
				}else if($('.kyangs2').css('display') =='block'){
					$('.kyangs2').hide(300);
					
				}else if($('.kyangs3').css('display') =='block'){
					$('.kyangs3').hide(300);
					
				}
			});
			$('.dian1').on('click',function(){
				 
				if($('.kyangs').css('display') =='none'){
					$('.kyangs3').hide(300);
					$('.kyangs1').hide(300);
					$('.kyangs2').hide(300);
					$('.kyangs').show(300);
				
				}else{
					$('.kyangs').hide(300);
					
				}	
			
			})
			$('.kyangs ul li').on('click',function(){
				var text = $(this).html();
				$('.pin1').html(text);
			})
			
			$('.dian2').on('click',function(){
				if($('.kyangs1').css('display') =='none'){
					$('.kyangs').hide(300);
					$('.kyangs2').hide(300);
					$('.kyangs3').hide(300);
					$('.kyangs1').show(300);
				
				}else{
					$('.kyangs1').hide(300);
					
				}
			})
			$('.kyangs1 ul li').on('click',function(){
				var text = $(this).html();
				$('.pin6').html(text);
			})
			
			$('.dian3').on('click',function(){
				if($('.kyangs2').css('display') =='none'){
					$('.kyangs').hide(300);
					$('.kyangs1').hide(300);
					$('.kyangs3').hide(300);
					$('.kyangs2').show(300);
				
				}else{
					$('.kyangs2').hide(300);
					
				}
			})
			$('.kyangs2 ul li').on('click',function(){
				var text = $(this).html();
				$('.pin7').html(text);
			})
			$('.dian4').on('click',function(){
				if($('.kyangs3').css('display') =='none'){
					$('.kyangs').hide(300);
					$('.kyangs1').hide(300);
					$('.kyangs2').hide(300);
					$('.kyangs3').show(300);
					
				}else{
					$('.kyangs3').hide(300);
					
				}
			})
			$('.kyangs3 ul li').on('click',function(){
				var text = $(this).html();
				$('.pin8').html(text);
			})

			
			