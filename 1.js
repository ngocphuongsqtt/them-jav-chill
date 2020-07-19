 $(function(){
	var chieurong = $(window).width();
	$('.fa-bars.menu1').click(function(){		
		if (chieurong < 500) {
			$('.fa-bars.menu1').addClass('hide');
			$('.menuright').addClass('reappear');
		} else {
			$('.menuright').removeClass('reappear');
		}});
	$('.fa-bars.menu2').click(function(){		
		if (chieurong < 500) {
			$('.fa-bars.menu1').removeClass('hide');
			$('.menuright').removeClass('reappear');
		} else {
			$('.menuright').addClass('reappear');
		}});
 })