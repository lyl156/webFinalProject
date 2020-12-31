(function ($) {
  $(document).ready(function () {
    $.jScrollability([
      {
        selector: '.running',
        start: 'self',
        end: 'parent',
        fn: {
          left: {
            start: 100,
            end: -10,
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
var vh = window.innerHeight ||
             document.documentElement.clientHeight ||
             document.body.clientHeight;
console.log(vh);
$(document).ready(function () {
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
      
      if (scrolled >= 3.05 * vh ) {
        $(".con1").css("opacity", "1");
        console.log(scrolled)
        
      }
      if (scrolled >= 3.5 * vh) {
        $(".con2").css("opacity", "1");
      }
      if (scrolled >= 3.9 * vh) {
        $(".con3").css("opacity", "1");
      }
     
      if (scrolled >= 4.3 * vh) {
        $(".con4").css("opacity", "1");
      }
     
      if (scrolled >= 4.7 * vh)
      $(".con5").css("opacity", "1");

      if (scrolled >= 5.0 * vh)
      $(".con6").css("opacity", "1");

      if (scrolled >= 5.4 * vh)
      $(".con7").css("opacity", "1");

      if (scrolled >= 5.8 * vh)
      $(".con8").css("opacity", "1");
      
      if (scrolled < 3 * vh) {
        $(".con1").css("opacity", "0");
        $(".con2").css("opacity", "0");
        $(".con3").css("opacity", "0");
        $(".con4").css("opacity", "0");
        $(".con5").css("opacity", "0");
        $(".con6").css("opacity", "0");
        $(".con7").css("opacity", "0");
        $(".con8").css("opacity", "0");
      }
  });
});

//change img
function myFunction(x) {
  document.getElementById("myImg").src = "./assets/"+ x + ".png";
  document.getElementById("myImg2").src = "./assets/"+ x + ".png";

}