(()=>{
  const STYLE_ID='club999-access-polish-v178-style';
  const TARGET_CLASS='club999-access-polish-v178';
  const compact=s=>(s||'').toLowerCase().replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    let old=document.getElementById(STYLE_ID);
    if(old) old.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${TARGET_CLASS}{
        position:relative!important;
        overflow:hidden!important;
        margin-top:18px!important;
      }
      .${TARGET_CLASS} > .club999-v168-shine{
        display:block!important;
        z-index:20!important;
        top:-58%!important;
        left:-36%!important;
        width:27%!important;
        height:220%!important;
        opacity:0!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.08) 12%,rgba(255,255,246,.88) 38%,rgba(255,255,255,1) 50%,rgba(255,255,246,.88) 62%,rgba(255,255,255,.08) 88%,transparent 100%)!important;
        box-shadow:0 0 18px rgba(255,255,238,.95)!important;
        filter:blur(.15px)!important;
        animation:club999AccessShineV178 2.55s ease-in-out infinite!important;
      }
      .${TARGET_CLASS}::before{
        content:""!important;
        position:absolute!important;
        z-index:18!important;
        pointer-events:none!important;
        top:-45%!important;
        left:-38%!important;
        width:22%!important;
        height:190%!important;
        border-radius:999px!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.18) 22%,rgba(255,255,255,.92) 50%,rgba(255,255,255,.18) 78%,transparent 100%)!important;
        box-shadow:0 0 14px rgba(255,255,255,.75)!important;
        transform:rotate(17deg)!important;
        opacity:0!important;
        animation:club999AccessShineFallbackV178 2.55s ease-in-out infinite!important;
      }
      @keyframes club999AccessShineV178{
        0%,30%{left:-36%;opacity:0}
        37%{opacity:1}
        69%{left:116%;opacity:1}
        77%,100%{left:116%;opacity:0}
      }
      @keyframes club999AccessShineFallbackV178{
        0%,30%{left:-38%;opacity:0}
        38%{opacity:.9}
        68%{left:118%;opacity:.9}
        76%,100%{left:118%;opacity:0}
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
      button.style.setProperty('margin-top','18px','important');
      button.style.setProperty('position','relative','important');
      button.style.setProperty('overflow','hidden','important');
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
