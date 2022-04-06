
// popup layer visibility,hidden
const popUpLayer = {
  pensionBtn : null,
  futureFundsBtn : null,

  pensionPopupLayer : function() {
    const layer = document.getElementById('pension_popup_layer');

    layer.style.display="none";
  },

  futureFundsPopupLayer : function() {
    const layer = document.getElementById('future_funds_popup_layer');

    layer.style.visibility="hidden";
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



// scroll animation
const saTriggerMargin = 200;
const scrollAnimationList = document.querySelectorAll('.scroll_ani');

const scrollAnimation = function() {
  for (const element of scrollAnimationList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', scrollAnimation);
window.addEventListener('scroll', scrollAnimation);