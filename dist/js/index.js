$(function(){$(".top").click(function(){$("html,body").animate({scrollTop:"0px"},200)}),$(document).scroll(function(){var e=$("#secKill").offset().top;$(document).scrollTop()>e?$("#topFixed").slideDown(300):$("#topFixed").slideUp(300);var s=$("#enjoy").offset().top-100;$(document).scrollTop()>s?$("#leftFixed").show():$("#leftFixed").hide();var t=$("#life").offset().top-200,a=$("#phone").offset().top-200,i=$("#computer").offset().top-200,l=$("#sport").offset().top-200,o=$("#eat").offset().top-200,n=$("#mom").offset().top-200,c=$("#book").offset().top-200,d=$("#virtual").offset().top-200,r=$("#enough").offset().top-200;$(document).scrollTop()>t&&$("#leftFixed li").eq(1).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>a&&$("#leftFixed li").eq(2).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>i&&$("#leftFixed li").eq(3).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>l&&$("#leftFixed li").eq(4).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>o&&$("#leftFixed li").eq(5).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>n&&$("#leftFixed li").eq(6).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>c&&$("#leftFixed li").eq(7).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>d&&$("#leftFixed li").eq(8).addClass("active").siblings().removeClass("active"),$(document).scrollTop()>r&&$("#leftFixed li").eq(9).addClass("active").siblings().removeClass("active")}),$("#leftFixed li a").click(function(){var e=$(this).attr("href"),s=$(e).offset().top-50;return $("html,body").animate({scrollTop:s},500),!1}),$(".line li a").hover(function(){var e=$(this).parents("li").index();$(this).next("div").addClass("show").parent().siblings().children(".show").removeClass("show"),$(".redLine").animate({left:20*e},50)});var e=0,s=null;function t(){s=setInterval(function(){5<++e&&(e=0),$(".ads img").eq(e).fadeIn(200).siblings().fadeOut(200),$(".doll li").eq(e).addClass("sec").siblings().removeClass("sec")},2e3)}$(".doll li").click(function(){clearInterval(s),e=$(this).index(),$(this).addClass("sec").siblings().removeClass("sec"),$(".ads img").eq(e).fadeIn(200).siblings().fadeOut(200)}),$(".carouselBox").hover(function(){clearInterval(s)},function(){t()}),t();var a=$(".secBody .images dl").length,i=0,l=0;function o(e){return e<10?"0"+e:""+e}i=a/5>parseInt(a/5)?parseInt(a/5):parseInt(a/5-1),$(".secBody .dirl").click(function(){++l<=i?$(".scrollImg .images").animate({left:1e3*-l},300):l=i}),$(".secBody .dirr").click(function(){0<=--l?$(".scrollImg .images").animate({left:1e3*-l},300):l=0}),setInterval(function(){var e;e=new Date(2017,9,1,10,0)-new Date,hour=minute=second=dayBase=hourBase=minuteBase=secondBase=0,dayBase=864e5,hourBase=36e5,minuteBase=6e4,secondBase=1e3,Math.floor(e/dayBase),hour=Math.floor(e%dayBase/hourBase),minute=Math.floor(e%dayBase%hourBase/minuteBase),second=Math.floor(e%dayBase%hourBase%minuteBase/secondBase),$(".secHead .hour").text(o(hour)),$(".secHead .min").text(o(minute)),$(".secHead .sec").text(o(second))},1e3);var n=0,c=null;function d(){c=setInterval(function(){2<++n&&(n=0),$(".betterImages").eq(n).fadeIn(200).siblings(".betterImages").fadeOut(200),$(".betDoll li").eq(n).addClass("sec").siblings().removeClass("sec")},2e3)}$(".body .betDoll li").hover(function(){clearInterval(c),n=$(this).index(),$(this).addClass("sec").siblings().removeClass("sec"),$(".betterImages").eq(n).fadeIn(200).siblings(".betterImages").fadeOut(200)},function(){d()}),$(".bet").hover(function(){clearInterval(c)},function(){d()}),d(),$(".ranking .body>ul>li").hover(function(){var e=$(this).index();$(this).parent().siblings().eq(e).addClass("show").siblings().removeClass("show"),$(".bar").stop().animate({left:75*e},100)},function(){$(".bar").stop().animate({left:75*ranking_index},100)})});