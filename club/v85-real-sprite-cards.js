(()=>{
  const STYLE_ID='club-real-sprite-cards-v85';
  const SPRITE='/koleso-balansa/club/assets/v85-cards-sprite.webp?v=85';
  const labels={
    directions:'6 направлений ресурса. Нажмите, чтобы открыть.',
    experts:'Разные эксперты и подходы. Нажмите, чтобы открыть.',
    question:'Ответ на свой вопрос. Нажмите, чтобы открыть.',
    materials:'Практические материалы. Нажмите, чтобы открыть.'
  };

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #insideCenterSection .inside-grid{gap:10px!important}
      #insideCenterSection .inside-card.v85-real-card{
        position:relative!important;
        display:block!important;
        aspect-ratio:4/3!important;
        min-height:0!important;
        padding:0!important;
        overflow:hidden!important;
        border:0!important;
        border-radius:20px!important;
        background:#01242e!important;
        box-shadow:0 12px 28px rgba(0,0,0,.22),0 0 20px rgba(44,162,182,.08)!important;
        isolation:isolate!important;
      }
      #insideCenterSection .inside-card.v85-real-card::before,
      #insideCenterSection .inside-card.v85-real-card::after{display:none!important;content:none!important}
      #insideCenterSection .inside-card.v85-real-card .v85-card-picture{
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        border-radius:inherit!important;
        background-image:url("${SPRITE}")!important;
        background-repeat:no-repeat!important;
        background-size:200% 200%!important;
        background-color:#01242e!important;
      }
      #insideCenterSection .inside-card.v85-real-card[data-popup="directions"] .v85-card-picture{background-position:0 0!important}
      #insideCenterSection .inside-card.v85-real-card[data-popup="experts"] .v85-card-picture{background-position:100% 0!important}
      #insideCenterSection .inside-card.v85-real-card[data-popup="question"] .v85-card-picture{background-position:0 100%!important}
      #insideCenterSection .inside-card.v85-real-card[data-popup="materials"] .v85-card-picture{background-position:100% 100%!important}
      #insideCenterSection .inside-card.v85-real-card:active{transform:scale(.985)!important}
      @media(max-width:640px){
        #insideCenterSection .inside-grid{gap:9px!important}
        #insideCenterSection .inside-card.v85-real-card{border-radius:17px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    document.querySelectorAll('#insideCenterSection .inside-card[data-popup]').forEach(card=>{
      const key=card.getAttribute('data-popup');
      if(!labels[key]) return;
      card.className='inside-card v85-real-card';
      card.setAttribute('aria-label',labels[key]);
      card.innerHTML='<span class="v85-card-picture" aria-hidden="true"></span>';
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
