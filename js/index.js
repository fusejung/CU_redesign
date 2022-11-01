$(document).ready(function(){



  $('.mainmenu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
    $('.bg').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
    $('.bg').stop().slideUp(500);
  });
  



  setInterval(function(){
    $('.slides').animate({'margin-left':'-1920px'},function(){
      $('.slide').first().appendTo('.slides')
      $('.slides').css({'margin-left':'0'})
    })
  },5000)



  $("#search").focusin(function(){
    $(".input-box__placeholder > label").addClass("focus");
  });
  
  $("#search").focusout(function(){
    $(".input-box__placeholder > label").removeClass("focus");
  });

  
  $("#search2").focusin(function(){
    $(".input-box__placeholder2 > label").addClass("focus");
  });
  
  $("#search2").focusout(function(){
    $(".input-box__placeholder2 > label").removeClass("focus");
  });



  setInterval(function(){
    $('.ad-slides').animate({'margin-left':'-1200px'},function(){
      $('.ad-slide').first().appendTo('.ad-slides')
      $('.ad-slides').css({'margin-left':'0'})
    })
  },5000)

  $(".product-box").slick({
    prevArrow:
      "<div class='btn-prev'><i class='fa-solid fa-angle-left'></i></div>",
    nextArrow:
      "<div class='btn-next'><i class='fa-solid fa-angle-right'></i></div>",    
  });
      
 








  // 끝
})