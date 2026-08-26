(function(){
  var style = document.createElement('style');
  style.setAttribute('data-club-patch','v78-popup-no-image');
  style.textContent = `
    .inside-popup-sheet__hero,
    #insidePopupHero,
    #topicPopupHero{
      display:none !important;
      min-height:0 !important;
      height:0 !important;
      padding:0 !important;
      margin:0 !important;
      border:0 !important;
      overflow:hidden !important;
    }
    .inside-popup-sheet__hero::before,
    .inside-popup-sheet__hero::after,
    .inside-popup-sheet__hero *{
      display:none !important;
      content:none !important;
    }
    .inside-popup-sheet__content{
      padding-top:18px !important;
    }
    .inside-popup-sheet__eyebrow{
      margin-top:6px !important;
    }
    .inside-popup-sheet__close{
      top:12px !important;
      right:12px !important;
      z-index:8 !important;
    }
    @media (max-width:640px){
      .inside-popup-sheet__content{
        padding-top:16px !important;
      }
      .inside-popup-sheet__eyebrow{
        margin-top:2px !important;
      }
      .inside-popup-sheet__close{
        top:10px !important;
        right:10px !important;
      }
    }
  `;
  function apply(){
    if(!document.head.querySelector('style[data-club-patch="v78-popup-no-image"]')){
      document.head.appendChild(style);
    }
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',apply,{once:true});
  }else{
    apply();
  }
})();
