var x = 0;
var y = 0;
function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border =
        '3px solid limegreen';
      document.getElementById('result-11').style.color = 'red';
      document.getElementById('result-11').style.fontSize = '100%';
      x = x + 1;
      document.getElementById('result-11').innerHTML = '有' + x / (x + y) + '的人和你一樣';
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border =
        '3px solid limegreen';
      document.getElementById('result-12').style.color = 'red';
      document.getElementById('result-12').style.fontSize = '100%';
      y = y + 1;
      document.getElementById('result-12').innerHTML = '有' + y / (x + y) + '的人和你一樣';
      alert('真的不想投資嗎？太可惜了');
      showCorrectAnswer1();
    }
  }