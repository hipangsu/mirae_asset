
const popUpLayer = {
  pensionBtn : null,
  futureFundsBtn : null,

  pensionPopupLayer : function() {
    const layer = document.getElementById('pension_popup_layer');

    layer.style.display="none";
  },

  futureFundsPopupLayer : function() {
    const layer = document.getElementById('future_funds_popup_layer');

    layer.style.display="none";
  },

  init : function() {
    const o = this;
    o.pensionBtn = document.getElementById('pension_popup_btn');
    o.futureFundsBtn = document.getElementById('future_funds_popup_btn');

    o.pensionBtn.addEventListener('click', function() {
      o.pensionPopupLayer();
    })

    o.futureFundsBtn.addEventListener('click', function() {
      o.futureFundsPopupLayer();
    })

  }

}
popUpLayer.init();