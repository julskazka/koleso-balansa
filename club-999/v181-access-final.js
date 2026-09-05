(()=>{
  const STYLE_ID='club999-access-final-v181-style';
  const CLASS='club999-access-final-v181';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');

  function style(){
    const old=document.getElementById(STYLE_ID);
    if(old) old.remove();
    const el=document.createElement('style');
    el.id=STYLE_ID;
    el.textContent=`
      .${CLASS}{position:relative!important;overflow:hidden!important;margin-top:18px!important}
      .${CLASS}>.club999-v168-shine{
        display:block!important;z-index:22!important;top:-62%!important;left:-40%!important;
        width:30%!important;height:224%!important;opacity:0!important;
        background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,.10) 12%,rgba(255,255,245,.95) 40%,rgba(255,255,255,1) 50%,rgba(255,255,245,.95) 60%,rgba(255,255,255,.10) 88%,transparent 100%)!important;
        box-shadow:0 0 20px rgba(255,255,240,.98)!important;filter:blur(.1px)!important;
        animation:club999AccessFinalShineV181 2.35s ease-in-out infinite!important
      }
      .${CLASS}::before{
        content:""!important;position:absolute!important;z-index:21!important;pointer-events:none!important;
        top:-38%!important;left:-34%!important;width:18%!important;height:176%!important;border-radius:999px!important;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.96),transparent)!important;
        box-shadow:0 0 16px rgba(255,255,255,.82)!important;transform:rotate(18deg)!important;opacity:0!important;
        animation:club999AccessFinalShineFallbackV181 2.35s ease-in-out infinite!important
      }
      @keyframes club999AccessFinalShineV181{
        0%,28%{left:-40%;opacity:0}36%{opacity:1}68%{left:118%;opacity:1}77%,100%{left:118%;opacity:0}
      }
      @keyframes club999AccessFinalShineFallbackV181{
        0%,28%{left:-34%;opacity:0}36%{opacity:.9}68%{left:120%;opacity:.9}77%,100%{left:120%;opacity:0}
      }
    `;
    document.head.appendChild(el);
  }

  function findSection(){
    return [...document.querySelectorAll('section,article,div')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t.includes('полныйдоступкцентруресурса')&&t.includes('вступитьвклубза999');
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function apply(){
    style();
    const section=findSection();
    if(!section) return false;
    const btn=[...section.querySelectorAll('button,a,[data-purchase]')]
      .filter(el=>norm(el.textContent).includes('вступить в клуб за 999'))
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!btn) return false;
    btn.classList.add(CLASS);
    btn.style.setProperty('margin-top','18px','important');
    btn.style.setProperty('position','relative','important');
    btn.style.setProperty('overflow','hidden','important');
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>100)clearInterval(timer)},100);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [180,450,900,1600,2800,4600].forEach(ms=>setTimeout(apply,ms));
})();
