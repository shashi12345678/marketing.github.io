$(function(){
  $(".page-scroll a").bind("click",function(){
     var $anchor=$(this);
      $("html,body").stop().animate({
          scrollTop:$($anchor.attr("href")).offset().top
      },2000,"easeInOutExpo");
      event.preventDefault();
  });  
});
