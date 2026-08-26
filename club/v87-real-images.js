(()=>{
  const STYLE_ID='club-approved-real-images-v87';
  const SOURCES={
    directions:'./assets/cards-v87/directions.b64.txt?v=87',
    experts:'./assets/cards-v87/experts.b64.txt?v=87',
    question:'./assets/cards-v87/question.b64.txt?v=87',
    materials:'./assets/cards-v87/materials.b64.txt?v=87'
  };
  const LABELS={
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
      #insideCenterSection .inside-card.v87-approved-card{
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
      #insideCenterSection .inside-card.v87-approved-card::before,
      #insideCenterSection .inside-card.v87-approved-card::after{display:none!important;content:none!important}
      #insideCenterSection .inside-card.v87-approved-card .v87-approved-image{
        position:absolute!important;
        inset:0!important;
        z-index:2!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        max-width:none!important;
        object-fit:cover!important;
        object-position:center!important;
        border-radius:inherit!important;
        opacity:1!important;
        visibility:visible!important;
        filter:none!important;
        transform:none!important;
      }
      #insideCenterSection .inside-card.v87-approved-card:active{transform:scale(.985)!important}
      @media(max-width:640px){
        #insideCenterSection .inside-grid{gap:9px!important}
        #insideCenterSection .inside-card.v87-approved-card{border-radius:17px!important}
      }
    `;
    document.head.appendChild(style);
  }

  async function loadImages(){
    const entries=await Promise.all(Object.entries(SOURCES).map(async([key,url])=>{
      const response=await fetch(url,{cache:'no-store'});
      if(!response.ok) throw new Error('Не удалось загрузить карточку '+key);
      const base64=(await response.text()).trim();
      return [key,'data:image/webp;base64,'+base64];
    }));
    return Object.fromEntries(entries);
  }

  function apply(images){
    addStyle();
    document.querySelectorAll('#insideCenterSection .inside-card[data-popup]').forEach(card=>{
      const key=card.getAttribute('data-popup');
      if(!images[key]) return;
      card.className='inside-card v87-approved-card';
      card.setAttribute('aria-label',LABELS[key]);
      const img=document.createElement('img');
      img.className='v87-approved-image';
      img.alt='';
      img.setAttribute('aria-hidden','true');
      img.decoding='async';
      img.loading='eager';
      img.src=images[key];
      card.replaceChildren(img);
    });
  }

  async function init(){
    try{
      const images=await loadImages();
      apply(images);
      setTimeout(()=>apply(images),300);
    }catch(error){
      console.error('Ошибка загрузки согласованных карточек:',error);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
