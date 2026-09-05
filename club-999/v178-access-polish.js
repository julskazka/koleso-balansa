(()=>{
  const STYLE_ID='club999-access-polish-v178-style';
  const TARGET_CLASS='club999-access-polish-v178';
  const compact=s=>(s||'').toLowerCase().replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET_CLASS}{
        margin-top:12px!important;
      }
      .${TARGET_CLASS} > .club999-v168-shine{
        display:block!important;
        z-index:20!important;
        top:-58%!important;
        left:-34%!important;
        width:25%!important;
        height:216%!important;
        opacity:0!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.06) 12%,rgba(255,255,244,.78) 38%,rgba(255,255,255,1) 50%,rgba(255,255,244,.78) 62%,rgba(255,255,255,.06) 88%,transparent 100%)!important;
        box-shadow:0 0 15px rgba(255,255,235,.86)!important;
        filter:blur(.1px)!important;
        animation:club999AccessShineV178 2.9s ease-in-out infinite!important;
      }
      @keyframes club999AccessShineV178{
        0%,34%{left:-34%;opacity:0}
        40%{opacity:1}
        66%{left:114%;opacity:1}
        74%,100%{left:114%;opacity:0}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('полныйдоступкцентруресурса') && t.includes('вступитьвклубза999');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function hideKicker(section){
    const kicker=[...section.querySelectorAll('*')]
      .filter(el=>norm(el.textContent)==='условия доступа')
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!kicker) return;
    kicker.style.setProperty('display','none','important');
    kicker.style.setProperty('margin','0','important');
    kicker.style.setProperty('padding','0','important');
    const parent=kicker.parentElement;
    if(parent && norm(parent.textContent)==='условия доступа'){
      parent.style.setProperty('display','none','important');
      parent.style.setProperty('margin','0','important');
      parent.style.setProperty('padding','0','important');
      parent.style.setProperty('min-height','0','important');
    }
  }

  function findButton(section){
    return [...section.querySelectorAll('button,a,[data-purchase]')]
      .filter(el=>norm(el.textContent).includes('вступить в клуб за 999'))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function apply(){
    injectStyle();
    const section=findSection();
    if(!section) return false;
    hideKicker(section);
    const button=findButton(section);
    if(button){
      button.classList.add(TARGET_CLASS);
      button.style.setProperty('margin-top','12px','important');
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply() || tries>90) clearInterval(timer);
  },100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,450,900,1600,2800,4600].forEach(ms=>setTimeout(apply,ms));
})();
