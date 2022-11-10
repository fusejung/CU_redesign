$(document).ready(function(){


  AOS.init();


  // 로딩페이지
  $("body").imagesLoaded(function () {
    setTimeout(function() {
      $('.loading-page').addClass('hide');
    }, 3500);
  });


// 메뉴바
  $('.mainmenu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
    
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
    
  });
  
  // 메뉴바 색깔변경
  console.clear();

  function changeHeaderColor() {
    $(window).scroll(function (event) {
      let st = $(this).scrollTop();
      console.log(st);
      if(st > 100) {
        $("header").addClass("changecolor");
      }
      else {
        $("header").removeClass("changecolor");
      }
      
    });
  }
  
  changeHeaderColor();


  // 메인 슬라이드
  setInterval(function(){
    $('.slides').animate({'margin-left':'-1920px'},function(){
      $('.slide').first().appendTo('.slides')
      $('.slides').css({'margin-left':'0'})
    })
  },5000)


// 검색창
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




  $('.adslide-wrap').slick({
    dots: true,
    autoplay: true,
    speed: 500,
  });



  // 상품 슬라이드
  $(".product-box").slick({
    prevArrow:
      "<div class='btn-prev'><i class='fa-solid fa-angle-left'></i></div>",
    nextArrow:
      "<div class='btn-next'><i class='fa-solid fa-angle-right'></i></div>",    
  });
      
 

 







  // 끝
})