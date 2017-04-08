$(document).ready(function() {
 
  $(".owl-demo").owlCarousel({
 
      pagination:false,
      items : 4,
      navigation:true,
      navigationText: [
   "<i class='icon-chevron-left icon-white'><img src='images/arrow-left.png'></i>",
      //"<i class='icon-chevron-left icon-white'><</i>",
      "<i class='icon-chevron-left icon-white'><img src='images/arrow-right.png'></i>"
      ],
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });
  //$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
 //$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    
});
