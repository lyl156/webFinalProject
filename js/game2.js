function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border =
        '3px solid limegreen';
      document.getElementById('result-11').style.color = 'red';
      document.getElementById('result-11').style.fontSize = '30px';
      document.getElementById('result-11').innerHTML = '有77%的人和你一樣';
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border =
        '3px solid limegreen';
      document.getElementById('result-12').style.color = 'red';
      document.getElementById('result-12').style.fontSize = '30px';
      document.getElementById('result-12').innerHTML = '有33%的人和你一樣';
      showCorrectAnswer1();
    }
  }