(()=>{
  const STYLE_ID='club999-audience-cta-contrast-v154';
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
        border:1px solid rgba(255,239,178,.98)!important;
        background:
          radial-gradient(circle at 50% 0%,rgba(255,255,232,.30),transparent 34%),
          linear-gradient(180deg,#ffe89b 0%,#e9ba50 36%,#b97814 70%,#704208 100%)!important;
        color:#082a30!important;
        -webkit-text-fill-color:#082a30!important;
        text-shadow:0 1px 0 rgba(255,255,255,.34)!important;
        box-shadow:
          0 7px 0 rgba(92,54,7,.88),
          0 14px 26px rgba(0,9,15,.36),
          0 0 20px rgba(244,196,74,.34),
          0 0 38px rgba(244,196,74,.16),
          inset 0 2px 0 rgba(255,251,222,.52),
          inset 0 -2px 0 rgba(82,46,4,.34)!important;
      }
      .club999-question-button-v152::before{
        background:linear-gradient(180deg,rgba(255,255,238,.34),rgba(255,244,187,.05))!important;
      }
      .club999-question-button-v152::after{
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),rgba(255,255,240,.78),rgba(255,255,255,.06),transparent)!important;
      }
      .club999-question-button-v152 span{
        color:#082a30!important;
        -webkit-text-fill-color:#082a30!important;
        font-weight:850!important;
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
