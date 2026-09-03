(()=>{
  const STYLE_ID='club999-audience-question-cta-v151';
  const CTA_ID='club999-audience-question-cta-v151';

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-whofor-footer-v136.club999-question-gold-v151{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        box-sizing:border-box!important;
        border:1px solid rgba(255,238,173,.96)!important;
        border-radius:20px!important;
        background:
          radial-gradient(circle at 18% 12%,rgba(255,255,233,.52),transparent 28%),
          linear-gradient(135deg,#ffe7a0 0%,#e9bd58 38%,#c9902f 70%,#93601b 100%)!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.62),
          inset 0 -1px 0 rgba(95,57,7,.26),
          0 8px 24px rgba(0,11,17,.22),
          0 0 24px rgba(228,181,69,.18)!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v151::before{
        content:""!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(115deg,rgba(255,255,255,.26),transparent 35%,rgba(255,246,196,.08) 68%,transparent)!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v151,
      .club999-whofor-footer-v136.club999-question-gold-v151 *{
        color:#17343a!important;
        -webkit-text-fill-color:#17343a!important;
        text-shadow:0 1px 0 rgba(255,255,255,.34)!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v151{
        padding:18px 20px!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v151 p,
      .club999-whofor-footer-v136.club999-question-gold-v151 strong{
        margin:0!important;
        font-weight:800!important;
      }

      .club999-question-action-v151{
        position:relative!important;
        box-sizing:border-box!important;
        margin-top:12px!important;
        margin-bottom:4px!important;
      }
      .club999-question-button-v151{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        width:100%!important;
        min-height:54px!important;
        padding:13px 20px!important;
        box-sizing:border-box!important;
        border:1px solid rgba(255,228,143,.98)!important;
        border-radius:999px!important;
        background:
          linear-gradient(180deg,
            rgba(231,193,94,.99) 0%,
            rgba(190,143,48,.99) 38%,
            rgba(135,92,21,.99) 72%,
            rgba(87,57,13,.99) 100%)!important;
        color:#fff4d0!important;
        -webkit-text-fill-color:#fff4d0!important;
        font:750 15.5px/1.15 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
        text-align:center!important;
        text-shadow:0 1px 2px rgba(65,38,1,.48)!important;
        box-shadow:
          0 6px 0 rgba(62,39,8,.64),
          0 12px 22px rgba(0,8,13,.28),
          0 0 18px rgba(247,205,91,.28),
          inset 0 2px 0 rgba(255,248,215,.44),
          inset 0 -2px 0 rgba(72,43,6,.32)!important;
        cursor:pointer!important;
      }
      .club999-question-button-v151::before{
        content:""!important;
        position:absolute!important;
        z-index:0!important;
        inset:1px 1px 48% 1px!important;
        border-radius:999px 999px 70% 70%!important;
        background:linear-gradient(180deg,rgba(255,252,231,.28),rgba(255,245,198,.04))!important;
        pointer-events:none!important;
      }
      .club999-question-button-v151::after{
        content:""!important;
        position:absolute!important;
        z-index:1!important;
        top:-38%!important;
        left:-44%!important;
        width:34%!important;
        height:176%!important;
        transform:rotate(20deg)!important;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.05),rgba(255,249,220,.62),rgba(255,255,255,.05),transparent)!important;
        animation:club999QuestionShine151 3.9s ease-in-out infinite!important;
        pointer-events:none!important;
      }
      .club999-question-button-v151 span{position:relative!important;z-index:2!important}
      @keyframes club999QuestionShine151{
        0%,62%{left:-44%;opacity:0}
        68%{opacity:1}
        82%{left:112%;opacity:1}
        88%,100%{left:112%;opacity:0}
      }
      @media(max-width:700px){
        .club999-whofor-footer-v136.club999-question-gold-v151{padding:16px 18px!important;border-radius:18px!important}
        .club999-question-action-v151{margin-top:11px!important}
        .club999-question-button-v151{min-height:51px!important;padding:12px 16px!important;font-size:15px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function openPurchase(){
    if(window.Club999Landing && typeof window.Club999Landing.openPurchase==='function'){
      window.Club999Landing.openPurchase();
      return;
    }
    const fallback=document.querySelector('#inside [data-purchase],#access [data-purchase],#final [data-purchase]');
    if(fallback) fallback.click();
  }

  function outerSameText(el){
    if(!el) return null;
    const target=(el.textContent||'').replace(/\s+/g,' ').trim();
    let host=el;
    let node=el.parentElement;
    for(let i=0;i<5&&node&&node!==document.body;i++,node=node.parentElement){
      const t=(node.textContent||'').replace(/\s+/g,' ').trim();
      if(t!==target) break;
      host=node;
    }
    return host;
  }

  function centerToViewport(el,maxWidth=420,side=18){
    if(!el || innerWidth>700) return;
    const width=Math.min(Math.max(260,innerWidth-side*2),maxWidth);
    el.style.setProperty('width',width+'px','important');
    el.style.setProperty('max-width','none','important');
    el.style.setProperty('margin-left','0','important');
    el.style.setProperty('margin-right','0','important');
    el.style.setProperty('transform','none','important');
    el.style.setProperty('left','auto','important');
    el.style.setProperty('right','auto','important');
    requestAnimationFrame(()=>{
      const rect=el.getBoundingClientRect();
      const desired=(innerWidth-width)/2;
      const dx=desired-rect.left;
      el.style.setProperty('transform',`translateX(${dx}px)`,'important');
    });
  }

  function apply(){
    injectStyle();
    let footer=document.querySelector('.club999-whofor-footer-v136');
    if(!footer){
      const target='достаточно одного вопроса, который сейчас не даёт покоя.';
      const matches=[...document.querySelectorAll('body *')].filter(el=>(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase()===target);
      matches.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
      footer=outerSameText(matches[0]||null);
    }
    if(!footer) return false;

    footer.classList.add('club999-question-gold-v151');

    let action=document.getElementById(CTA_ID);
    if(!action){
      action=document.createElement('div');
      action.id=CTA_ID;
      action.className='club999-question-action-v151';
      const button=document.createElement('button');
      button.type='button';
      button.className='club999-question-button-v151';
      button.setAttribute('data-purchase','');
      button.innerHTML='<span>Вступить в клуб и задать вопрос</span>';
      button.addEventListener('click',openPurchase);
      action.appendChild(button);
      footer.insertAdjacentElement('afterend',action);
    }

    if(innerWidth<=700){
      centerToViewport(footer,420,18);
      centerToViewport(action,420,18);
    }else{
      footer.style.setProperty('max-width','620px','important');
      footer.style.setProperty('margin-left','auto','important');
      footer.style.setProperty('margin-right','auto','important');
      action.style.setProperty('width','min(100%,420px)','important');
      action.style.setProperty('margin-left','auto','important');
      action.style.setProperty('margin-right','auto','important');
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>120) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  setTimeout(apply,500);
  setTimeout(apply,1000);
})();
