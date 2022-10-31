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















  // 끝
})