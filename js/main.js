
  // gnb
  $(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2').stop().show();
            $('#gnb_bg').addClass('show');
        },
        function(){
            $('.depth2').stop().hide();
            $('#gnb_bg').removeClass('show');
        }
    )
  });
  
  // lnb
  $(function(){
    var menu = 0;
  
    $('#lnb > .lnb > li > a').click(function(){
        $('#lnb > .lnb > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
  })
  
    // bxslider 
  $(document).ready(function(){
  
    $('#visual').imagesLoaded( function() {
      // images have loaded
      $('.slider').bxSlider({
        // 효과: horizontal', 'vertical', 'fade'
        mode: 'fade',
        // 인터벌 시간
        pause: 5000,
        // 자동재생: true | false
        auto: true,
        autoHover: true,
        
        tickerHover: 'false'
        
      });
    });
  
  });
  
  
  // TOP btn
  $(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() >= 700) {
        $('.pagetop_fixed').fadeIn(300);
      } else {
        $('.pagetop_fixed').fadeOut(300);
      }
    })
  });
  
    
  $(function(){
  
    // 이미지 속성 변경: attr(속성명, 값) 1번째 슬라이드
    $('img').eq(8).mouseover(function(){
      $('img').eq(8).attr('src', './images/fund_product_hover01.png');
    })
    $('img').mouseout(function(){
      $('img').eq(8).attr('src', './images/inv_box01.png');
    })
  
    $('img').eq(9).mouseover(function(){
      $('img').eq(9).attr('src', './images/fund_product_hover02.png');
    })
    $('img').mouseout(function(){
      $('img').eq(9).attr('src', './images/inv_box02.png');
    })
  
    $('img').eq(10).mouseover(function(){
      $('img').eq(10).attr('src', './images/fund_product_hover03.png');
    })
    $('img').mouseout(function(){
      $('img').eq(10).attr('src', './images/inv_box03.png');
    })
  
    $('img').eq(11).mouseover(function(){
      $('img').eq(11).attr('src', './images/fund_product_hover04.png');
    })
    $('img').mouseout(function(){
      $('img').eq(11).attr('src', './images/inv_box04.png');
    })
    // 이미지 속성 변경: attr(속성명, 값) 2번째 슬라이드
    $('img').eq(12).mouseover(function(){
      $('img').eq(12).attr('src', './images/fund_product_hover01.png');
    })
    $('img').mouseout(function(){
      $('img').eq(12).attr('src', './images/inv_box01.png');
    })
  
    $('img').eq(13).mouseover(function(){
      $('img').eq(13).attr('src', './images/fund_product_hover02.png');
    })
    $('img').mouseout(function(){
      $('img').eq(13).attr('src', './images/inv_box02.png');
    })
  
    $('img').eq(14).mouseover(function(){
      $('img').eq(14).attr('src', './images/fund_product_hover03.png');
    })
    $('img').mouseout(function(){
      $('img').eq(14).attr('src', './images/inv_box03.png');
    })
  
    $('img').eq(15).mouseover(function(){
      $('img').eq(15).attr('src', './images/fund_product_hover04.png');
    })
    $('img').mouseout(function(){
      $('img').eq(15).attr('src', './images/inv_box04.png');
    })
    // 이미지 속성 변경: attr(속성명, 값) 3번째 슬라이드
    $('img').eq(16).mouseover(function(){
      $('img').eq(16).attr('src', './images/fund_product_hover01.png');
    })
    $('img').mouseout(function(){
      $('img').eq(16).attr('src', './images/inv_box01.png');
    })
  
    $('img').eq(17).mouseover(function(){
      $('img').eq(17).attr('src', './images/fund_product_hover02.png');
    })
    $('img').mouseout(function(){
      $('img').eq(17).attr('src', './images/inv_box02.png');
    })
  
    $('img').eq(18).mouseover(function(){
      $('img').eq(18).attr('src', './images/fund_product_hover03.png');
    })
    $('img').mouseout(function(){
      $('img').eq(18).attr('src', './images/inv_box03.png');
    })
  
    $('img').eq(19).mouseover(function(){
      $('img').eq(19).attr('src', './images/fund_product_hover04.png');
    })
    $('img').mouseout(function(){
      $('img').eq(19).attr('src', './images/inv_box04.png');
    })
    // 이미지 속성 변경: attr(속성명, 값) 4번째 슬라이드
    $('img').eq(20).mouseover(function(){
      $('img').eq(20).attr('src', './images/fund_product_hover01.png');
    })
    $('img').mouseout(function(){
      $('img').eq(20).attr('src', './images/inv_box01.png');
    })
  
    $('img').eq(21).mouseover(function(){
      $('img').eq(21).attr('src', './images/fund_product_hover02.png');
    })
    $('img').mouseout(function(){
      $('img').eq(21).attr('src', './images/inv_box02.png');
    })
  
    $('img').eq(22).mouseover(function(){
      $('img').eq(22).attr('src', './images/fund_product_hover03.png');
    })
    $('img').mouseout(function(){
      $('img').eq(22).attr('src', './images/inv_box03.png');
    })
  
    $('img').eq(23).mouseover(function(){
      $('img').eq(23).attr('src', './images/fund_product_hover04.png');
    })
    $('img').mouseout(function(){
      $('img').eq(23).attr('src', './images/inv_box04.png');
    })
  
    
  })
  
  
  