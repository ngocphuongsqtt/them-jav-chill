$(function(){
    var chieurong = $(window).width();
    var b = document.getElementById('one');
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
        
 });
 $(function(){
    var chieurong = $(window).width();
    var b = document.getElementById('one');
    if (chieurong < 800) {
        $('li.btn').addClass('ip');
        b.style.display = "none";
    } else {
        $('li.btn').removeClass('ip');
        b.style.display = "block";
    };
    $(window).resize(function(){
        var chieurong = $(window).width();
        var b = document.getElementById('one');
        if (chieurong < 800) {
            $('li.btn').addClass('ip');
            b.style.display = "none";
        } else {
            $('li.btn').removeClass('ip');
            b.style.display = "block";
        };
    });
    if (chieurong < 500) {
        $('.play1').addClass('height');
    } else {
        $('.play1').removeClass('height');
    };
    $(window).resize(function(){
        var chieurong = $(window).width();
        if (chieurong < 500) {
            $('.play1').addClass('height');
        } else {
            $('.play1').removeClass('height');
        };
    });
 })
 $(function(){
        var a = document.getElementById('Top')
        var b = document.getElementById('one');
        var c = document.getElementById('tow');
        $('.one').click(function(){
            $('.play1').addClass('big');
            $('.play2').addClass('width');
            $(window).scrollTop(130);
            c.style.display = "block";
            b.style.display = "none";
            a.style.display = "none";
        });
        $('.tow').click(function(){
            $('.play1').removeClass('big');
            $('.play2').removeClass('width');
            $(window).scrollTop(0);
            b.style.display = "block";
            c.style.display = "none";
            a.style.display = "block";
        });
        
 })
 $(function(){
    $('.Sever1').click(function(){
        $("#sever iframe").attr("src", "https://www.youtube.com/embed/SNfnNMSarAA")
        $(".Sever1").addClass('active');
        $(".Sever2").removeClass('active');
        $(".Sever3").removeClass('active');
        $(".Sever4").removeClass('active');
    });
    $('.Sever2').click(function(){
        $("#sever iframe").attr("src", "https://www.youtube.com/embed/pf1cPvTnY9E")
        $(".Sever2").addClass('active');
        $(".Sever1").removeClass('active');
        $(".Sever3").removeClass('active');
        $(".Sever4").removeClass('active');
    });
    $('.Sever3').click(function(){
        $("#sever iframe").attr("src", "3")
        $(".Sever3").addClass('active');
        $(".Sever2").removeClass('active');
        $(".Sever1").removeClass('active');
        $(".Sever4").removeClass('active');
    });
    $('.Sever4').click(function(){
        $("#sever iframe").attr("src", "4")
        $(".Sever4").addClass('active');
        $(".Sever2").removeClass('active');
        $(".Sever3").removeClass('active');
        $(".Sever1").removeClass('active');
    });

})  
$(function(){
    $('.Sever1').click(function(){
        $('body').animate({scrollTop:0});
        return false;});
    $('.Sever2').click(function(){
        $('body').animate({scrollTop:0});
        return false;});
    $('.Sever3').click(function(){
        $('body').animate({scrollTop:0});
        return false;});
    $('.Sever4').click(function(){
        $('body').animate({scrollTop:0});
        return false;});

}) 
 