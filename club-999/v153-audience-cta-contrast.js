(()=>{
  const STYLE_ID='club999-audience-cta-contrast-v153';
  function inject(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-whofor-footer-v136.club999-question-gold-v152{
        background:transparent!important;
        border:0!important;
        box-shadow:none!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
        border-radius:0!important;
        padding:10px 18px 4px!important;
        overflow:visible!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152::before{
        content:none!important;
        display:none!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152,
      .club999-whofor-footer-v136.club999-question-gold-v152 *{
        color:#f2d47d!important;
        -webkit-text-fill-color:#f2d47d!important;
        text-shadow:0 2px 10px rgba(0,12,18,.72),0 0 14px rgba(224,185,73,.16)!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152 p,
      .club999-whofor-footer-v136.club999-question-gold-v152 strong{
        font-size:18px!important;
        line-height:1.28!important;
        font-weight:820!important;
      }

      .club999-question-action-v152{
        margin-top:10px!important;
        margin-bottom:10px!important;
      }
      .club999-question-button-v152{
        border:1px solid rgba(238,210,121,.90)!important;
        background:
          radial-gradient(circle at 50% 0%,rgba(84,220,215,.20),transparent 34%),
          linear-gradient(180deg,#168693 0%,#0c6978 36%,#07505f 68%,#063a47 100%)!important;
        color:#fff8e7!important;
        -webkit-text-fill-color:#fff8e7!important;
        text-shadow:0 1px 2px rgba(0,20,27,.64)!important;
        box-shadow:
          0 6px 0 rgba(2,34,42,.88),
          0 13px 24px rgba(0,9,15,.34),
          0 0 18px rgba(55,207,201,.28),
          0 0 34px rgba(55,207,201,.14),
          inset 0 2px 0 rgba(196,255,249,.20),
          inset 0 -2px 0 rgba(0,28,35,.40)!important;
      }
      .club999-question-button-v152::before{
        background:linear-gradient(180deg,rgba(222,255,250,.20),rgba(111,226,220,.03))!important;
      }
      .club999-question-button-v152::after{
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.05),rgba(217,255,250,.60),rgba(255,255,255,.05),transparent)!important;
      }
      .club999-question-button-v152 span{
        color:#fff8e7!important;
        -webkit-text-fill-color:#fff8e7!important;
        font-weight:820!important;
        letter-spacing:.005em!important;
      }
      @media(max-width:700px){
        .club999-whofor-footer-v136.club999-question-gold-v152{padding:8px 18px 3px!important}
        .club999-whofor-footer-v136.club999-question-gold-v152 p,
        .club999-whofor-footer-v136.club999-question-gold-v152 strong{font-size:17.5px!important}
        .club999-question-action-v152{margin-top:9px!important}
      }
    `;
    document.head.appendChild(style);
    return true;
  }
  inject();
  setTimeout(inject,400);
  setTimeout(inject,900);
})();
