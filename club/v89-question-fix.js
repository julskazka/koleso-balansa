(()=>{
  const STYLE_ID='club-question-fix-v89';
  const IMAGE_URL='./assets/cards-v89/question.webp?v=89';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #insideCenterSection .inside-card.v89-question-fixed{
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
      #insideCenterSection .inside-card.v89-question-fixed::before,
      #insideCenterSection .inside-card.v89-question-fixed::after{
        display:none!important;
        content:none!important;
      }
      #insideCenterSection .inside-card.v89-question-fixed .v89-question-image{
        position:absolute!important;
        inset:0!important;
        z-index:3!important;
        display:block!important;
        width:100%!important;
        height:100%!important;
        max-width:none!important;
        object-fit:cover!important;
        object-position:center!important;
        border-radius:inherit!important;
        opacity:1!important;
        visibility:visible!important;
      }
      @media(max-width:640px){
        #insideCenterSection .inside-card.v89-question-fixed{border-radius:17px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function fixQuestion(){
    const card=document.querySelector('#insideCenterSection .inside-card[data-popup="question"]');
    if(!card) return false;
    const current=card.querySelector('.v89-question-image');
    if(current && current.getAttribute('src')===IMAGE_URL) return true;
    addStyle();
    card.className='inside-card v89-question-fixed';
    card.setAttribute('aria-label','Ответ на свой вопрос. Нажмите, чтобы открыть.');
    const img=document.createElement('img');
    img.className='v89-question-image';
    img.alt='';
    img.setAttribute('aria-hidden','true');
    img.decoding='async';
    img.loading='eager';
    img.src=IMAGE_URL;
    card.replaceChildren(img);
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    fixQuestion();
    attempts+=1;
    if(attempts>=40) clearInterval(timer);
  },150);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',fixQuestion,{once:true});
  }else{
    fixQuestion();
  }
})();
