(()=>{
  const STYLE_ID='club999-audience-question-style-v152';
  const CTA_ID='club999-audience-question-action-v152';

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-whofor-footer-v136.club999-question-gold-v152{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        box-sizing:border-box!important;
        border:1px solid rgba(255,235,160,.98)!important;
        border-radius:20px!important;
        background:
          radial-gradient(circle at 18% 0%,rgba(255,255,232,.34),transparent 34%),
          linear-gradient(135deg,#f7df97 0%,#e2b957 42%,#bc8427 100%)!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.62),
          inset 0 -1px 0 rgba(92,54,5,.26),
          0 8px 24px rgba(0,11,17,.22),
          0 0 22px rgba(228,181,69,.16)!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
        padding:18px 20px!important;
        text-align:center!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152::before{
        content:""!important;
        position:absolute!important;
        inset:0!important;
        pointer-events:none!important;
        background:linear-gradient(115deg,rgba(255,255,255,.20),transparent 38%,rgba(255,246,196,.06) 68%,transparent)!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152,
      .club999-whofor-footer-v136.club999-question-gold-v152 *{
        position:relative!important;
        z-index:1!important;
        color:#082b32!important;
        -webkit-text-fill-color:#082b32!important;
        text-shadow:none!important;
        opacity:1!important;
        filter:none!important;
      }
      .club999-whofor-footer-v136.club999-question-gold-v152 p,
      .club999-whofor-footer-v136.club999-question-gold-v152 strong{
        margin:0!important;
        font-size:18px!important;
        line-height:1.26!important;
        font-weight:850!important;
        letter-spacing:-.01em!important;
      }

      .club999-question-action-v152{
        position:relative!important;
        box-sizing:border-box!important;
        margin-top:13px!important;
        margin-bottom:8px!important;
        z-index:3!important;
      }
      .club999-question-button-v152{
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
        border:1px solid rgba(255,235,162,.98)!important;
        border-radius:999px!important;
        background:linear-gradient(180deg,#f8df91 0%,#ddb14d 38%,#b87c21 72%,#825310 100%)!important;
        color:#092b31!important;
        -webkit-text-fill-color:#092b31!important;
        font:800 15.5px/1.15 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
        text-align:center!important;
        text-shadow:0 1px 0 rgba(255,255,255,.28)!important;
        box-shadow:
          0 6px 0 rgba(70,43,6,.66),
          0 12px 22px rgba(0,8,13,.30),
          0 0 18px rgba(247,205,91,.30),
          inset 0 2px 0 rgba(255,248,215,.48),
          inset 0 -2px 0 rgba(72,43,6,.30)!important;
        cursor:pointer!important;
      }
      .club999-question-button-v152::before{
        content:""!important;
        position:absolute!important;
        z-index:0!important;
        inset:1px 1px 48% 1px!important;
        border-radius:999px 999px 70% 70%!important;
        background:linear-gradient(180deg,rgba(255,252,231,.34),rgba(255,245,198,.04))!important;
        pointer-events:none!important;
      }
      .club999-question-button-v152::after{
        content:""!important;
        position:absolute!important;
        z-index:1!important;
        top:-38%!important;
        left:-44%!important;
        width:34%!important;
        height:176%!important;
        transform:rotate(20deg)!important;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),rgba(255,251,229,.68),rgba(255,255,255,.06),transparent)!important;
        animation:club999QuestionShine152 3.9s ease-in-out infinite!important;
        pointer-events:none!important;
      }
      .club999-question-button-v152 span{position:relative!important;z-index:2!important}
      @keyframes club999QuestionShine152{
        0%,62%{left:-44%;opacity:0}
        68%{opacity:1}
        82%{left:112%;opacity:1}
        88%,100%{left:112%;opacity:0}
      }
      @media(max-width:700px){
        .club999-whofor-footer-v136.club999-question-gold-v152{padding:16px 18px!important;border-radius:18px!important}
        .club999-whofor-footer-v136.club999-question-gold-v152 p,
        .club999-whofor-footer-v136.club999-question-gold-v152 strong{font-size:17.5px!important;line-height:1.28!important}
        .club999-question-action-v152{margin-top:12px!important}
        .club999-question-button-v152{min-height:52px!important;padding:12px 16px!important;font-size:15px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function openPurchase(){
    if(window.Club999Landing && typeof window.Club999Landing.openPurchase==='function'){
      window.Club999Landing.openPurchase();
      return;
    }
    const fallback=document.querySelector('#inside [data-purchase],#access [data-purchase],#final [data-purchase],[data-purchase]');
    if(fallback && fallback!==document.querySelector('.club999-question-button-v152')) fallback.click();
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

  function visibleWidth(){
    const visual=Math.round(window.visualViewport?.width||0);
    const client=document.documentElement.clientWidth||0;
    return visual>0?Math.min(visual,client||visual):(client||innerWidth);
  }

  function centerToViewport(el,maxWidth=420,side=20){
    if(!el || visibleWidth()>700) return;
    const vw=visibleWidth();
    const width=Math.min(Math.max(260,vw-side*2),maxWidth);
    el.style.setProperty('width',width+'px','important');
    el.style.setProperty('max-width',width+'px','important');
    el.style.setProperty('margin-left','0','important');
    el.style.setProperty('margin-right','0','important');
    el.style.setProperty('transform','none','important');
    el.style.setProperty('left','auto','important');
    el.style.setProperty('right','auto','important');
    requestAnimationFrame(()=>{
      el.style.setProperty('transform','none','important');
      const rect=el.getBoundingClientRect();
      const desired=(vw-width)/2;
      const dx=desired-rect.left;
      el.style.setProperty('transform',`translateX(${dx}px)`,'important');
    });
  }

  function findFooter(){
    let footer=document.querySelector('.club999-whofor-footer-v136');
    if(footer) return footer;
    const target='достаточно одного вопроса, который сейчас не даёт покоя.';
    const matches=[...document.querySelectorAll('body *')].filter(el=>(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase()===target);
    matches.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return outerSameText(matches[0]||null);
  }

  function apply(){
    injectStyle();
    const footer=findFooter();
    if(!footer) return false;

    footer.classList.remove('club999-question-gold-v151');
    footer.classList.add('club999-question-gold-v152');

    let action=document.getElementById(CTA_ID);
    if(!action){
      action=document.createElement('div');
      action.id=CTA_ID;
      action.className='club999-question-action-v152';

      const button=document.createElement('button');
      button.type='button';
      button.className='club999-question-button-v152';
      button.setAttribute('data-purchase','');
      button.innerHTML='<span>Вступить в клуб и задать вопрос</span>';
      button.addEventListener('click',openPurchase);
      action.appendChild(button);

      footer.insertAdjacentElement('afterend',action);
    }

    if(visibleWidth()<=700){
      centerToViewport(footer,420,20);
      centerToViewport(action,420,20);
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