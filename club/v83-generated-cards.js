(function(){
  const STYLE_ID='club-generated-cards-v83';
  const SPRITE='./assets/v83-cards-sprite.webp?v=83';
  const labels={
    directions:'6 направлений ресурса. Нажмите, чтобы открыть.',
    experts:'Разные эксперты и подходы. Нажмите, чтобы открыть.',
    question:'Ответ на свой вопрос. Нажмите, чтобы открыть.',
    materials:'Практические материалы. Нажмите, чтобы открыть.'
  };

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #insideCenterSection .inside-grid{gap:12px !important;}
      #insideCenterSection .inside-card.v83-generated-card{
        position:relative !important;
        display:block !important;
        aspect-ratio:4/3 !important;
        min-height:0 !important;
        padding:0 !important;
        overflow:hidden !important;
        border:0 !important;
        border-radius:22px !important;
        background:#01242e !important;
        box-shadow:0 12px 28px rgba(0,0,0,.20),0 0 20px rgba(44,162,182,.07) !important;
        isolation:isolate !important;
      }
      #insideCenterSection .inside-card.v83-generated-card::before,
      #insideCenterSection .inside-card.v83-generated-card::after{
        display:none !important;
        content:none !important;
      }
      #insideCenterSection .inside-card.v83-generated-card .v83-card-sprite{
        position:absolute !important;
        inset:0 !important;
        z-index:1 !important;
        display:block !important;
        width:100% !important;
        height:100% !important;
        border-radius:inherit !important;
        background-image:url("${SPRITE}") !important;
        background-repeat:no-repeat !important;
        background-size:200% 200% !important;
        background-color:#01242e !important;
      }
      #insideCenterSection .inside-card.v83-generated-card[data-popup="directions"] .v83-card-sprite{background-position:0 0 !important;}
      #insideCenterSection .inside-card.v83-generated-card[data-popup="experts"] .v83-card-sprite{background-position:100% 0 !important;}
      #insideCenterSection .inside-card.v83-generated-card[data-popup="question"] .v83-card-sprite{background-position:0 100% !important;}
      #insideCenterSection .inside-card.v83-generated-card[data-popup="materials"] .v83-card-sprite{background-position:100% 100% !important;}
      #insideCenterSection .inside-card.v83-generated-card:active{transform:scale(.985) !important;}
      @media (max-width:640px){
        #insideCenterSection .inside-grid{gap:10px !important;}
        #insideCenterSection .inside-card.v83-generated-card{border-radius:18px !important;}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    document.querySelectorAll('#insideCenterSection .inside-card[data-popup]').forEach(card=>{
      const key=card.getAttribute('data-popup');
      if(!labels[key]) return;
      card.classList.remove('v81-first-card','v82-nebula-card');
      card.classList.add('v83-generated-card');
      card.setAttribute('aria-label',labels[key]);
      card.innerHTML='<span class="v83-card-sprite" aria-hidden="true"></span>';
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',apply,{once:true});
  }else{
    apply();
  }
})();
