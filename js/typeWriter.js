var ii = 0;
var iii = 0;
var txt = '太陽本身具有巨大的能量，光線本身就帶有能量';
var txt2 = '現在的技術是用太陽光電板把太陽光本身能量去轉換成電能';
var speed = 50;

function typeWriter1() {
    if (iii < txt2.length) {
      document.getElementById("demo2").innerHTML += txt2.charAt(iii);
      iii++;
      setTimeout(typeWriter, speed);
  
    }
  }
function typeWriter() {
  if (ii < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(ii);
    ii++;
    setTimeout(typeWriter, speed);
  } else {
      typeWriter1()
  }
}


var vh = window.innerHeight ||
             document.documentElement.clientHeight ||
             document.body.clientHeight;
console.log(vh);
             

turn = false;
$(document).ready(function () {
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 1.05 * vh && turn == false) {
            typeWriter()
            turn = true;
        }
    });
});