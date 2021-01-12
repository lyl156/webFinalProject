(function ($) {
  $(document).ready(function () {
    $.jScrollability([
      {
        selector: '.running',
        start: 'self',
        end: 'parent',
        fn: {
          left: {
            start: 80,
            end: -27,
            unit: '%',
          },
        },
      },
    ]);
  });
})(jQuery);


// parallex scrolling
$(document).ready(function () {
  var winh = $(window).height();

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    $('.movable').each(function () {
      var parent_pos = $(this).parent().offset().top;

      var next_pos = $(this).parent().next().offset().top;
      var parent_height = $(this).parent().height();
      var parent_scrolled = scrolled - parent_pos;
      if (parent_scrolled >= 0 && scrolled < next_pos - winh) {
        if ($(this).attr('data-top')) {
          $(this).css(
            'top',
            (($(this).data('top2') - $(this).data('top')) *
              parent_scrolled) /
              (parent_height - winh) +
              $(this).data('top') +
              '%'
          );
        }
      }
    });
  });
});
// add conversation
var vh = $(window).height();
var vw = $(window).width();

console.log("this is vh :" + vh);
console.log("this is vh :" + vw);
$(document).ready(function () {
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
      
      if (scrolled >= 7.05 * vh ) {
        $(".con1").css("opacity", "1");
        console.log(scrolled)
        
      }
      for (i = 0; i < 4; i++) {
        if (scrolled >= (7.5 + i * 0.4) * vh) {
          $(".con" + (2 + i)).css("opacity", "1");
        }
      }
      // if (scrolled >= 3.5 * vh) {
      //   $(".con2").css("opacity", "1");
      // }
      // if (scrolled >= 3.9 * vh) {
      //   $(".con3").css("opacity", "1");
      // }
     
      // if (scrolled >= 4.3 * vh) {
      //   $(".con4").css("opacity", "1");
      // }
     
      // if (scrolled >= 4.7 * vh)
      // $(".con5").css("opacity", "1");
      for (i = 0; i < 9; i++) {
        if (scrolled >= (9.0 + i * 0.4) * vh) {
          $(".con" + (6 + i)).css("opacity", "1");
        }
      }
      // if (scrolled >= 5.0 * vh)
      // $(".con6").css("opacity", "1");

      // if (scrolled >= 5.4 * vh)
      // $(".con7").css("opacity", "1");

      // if (scrolled >= 5.8 * vh)
      // $(".con8").css("opacity", "1");
      
      // for carousel
      if (scrolled >= 9.5 * vh) {
        $(".con7-5").css("opacity", "1");
      }

      if (scrolled < 6 * vh) {
        for (i = 1; i <= 14; i++) {
          $(".con" + i).css("opacity", "0");
        }
        $(".con7-5").css("opacity", "0");
 
      }
  });
});

//change img
function myFunction(x) {
  document.getElementById("myImg").src = "./assets/"+ x + ".png";
  document.getElementById("myImg2").src = "./assets/"+ x + ".png";
  document.getElementById('output').innerHTML = '你選擇的是' + x + '號';

  for (i = 1; i <= 4; i++) {
    if (i == x) {
      ele = document.getElementsByClassName("i" + x)[0];
      ele.classList.remove("blink_me");
    
    } else {
      ele = document.getElementsByClassName('i' + i)[0];
      ele.classList.add("blink_me");
    }
  }
}