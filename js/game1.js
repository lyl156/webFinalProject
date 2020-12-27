$(function () {
    //initial
    var predictPrice = parseInt('24820', 0);
    var picPrice = parseInt('17,000'.replace(',', ''), 0);

    // 預估20年現金收益
    $('.js-sliderResultDollar').text(setSymbol(predictPrice));
    $('.js-solarPanels').text(setSymbol(picPrice));

    function setSymbol(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function changeMoney(el) {
      if (isNaN($(el).val()) || $(el).val() < 0) {
        $(el).val('');
        return false;
      }
      $('.js-costomerDollar').text(setSymbol($(el).val() * predictPrice));
      $('.js-sliderResultDollar').text(
        setSymbol($(el).val() * predictPrice)
      );
      $('.js-solarPanels').text(setSymbol($(el).val() * picPrice));
    }
    $('.js-inputBuyValue').change(function () {
      changeMoney($(this));
    });

    $('.js-inputBuyValue').keyup(function () {
      changeMoney($(this));
    });

    $('.js-inputBuyValue').blur(function () {
      var picTxt = $('.js-inputBuyValue').val();
      var pic = parseInt(picTxt, 0);
      if (picTxt == '' || isNaN(picTxt)) {
        pic = 1;
      }
      if (pic < 1) pic = 1; //確保為正數(售完外)
      $('.js-inputBuyValue').val(pic);
      changeMoney($('.js-inputBuyValue'));
    });
  });