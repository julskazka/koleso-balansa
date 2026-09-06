(()=>{
  const STYLE_ID='club999-v196-process-icons-style';
  const ICON_CLASS='club999-process-icon-v196';
  const GOLD='#f2d477';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/[«»"'.,:;!?—–-]/g,'').replace(/\s+/g,'');
  const setImp=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  const STEP_TEXTS=[
    'Вы выбираете сферу, которая сейчас требует внимания.',
    'Находите материалы и экспертов по своей задаче.',
    'Знакомитесь с разными подходами.',
    'Выбираете то, что можно применить в своей жизни.'
  ];

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .${ICON_CLASS}{
        width:30px!important;height:30px!important;min-width:30px!important;min-height:30px!important;
        flex:0 0 30px!important;display:grid!important;place-items:center!important;
        box-sizing:border-box!important;border-radius:8px!important;
        border:1px solid rgba(242,212,119,.88)!important;
        background:radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))!important;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.045),inset 0 0 8px rgba(82,205,196,.07),0 0 6px rgba(242,212,119,.24),0 0 12px rgba(66,188,184,.10)!important;
        color:${GOLD}!important;-webkit-text-fill-color:${GOLD}!important;
        font-weight:700!important;font-size:14px!important;line-height:1!important;text-align:center!important;
        text-shadow:0 0 5px rgba(242,212,119,.30)!important;
        opacity:1!important;transform:none!important;filter:none!important;
        margin:0!important;padding:0!important;
      }
      .${ICON_CLASS}::before,.${ICON_CLASS}::after{content:none!important;display:none!important}
      @media(max-width:380px){
        .${ICON_CLASS}{width:28px!important;height:28px!important;min-width:28px!important;min-height:28px!important;flex-basis:28px!important;font-size:13px!important}
      }
    `;
    document.head.appendChild(s);
  }

  function findSection(){
    const titleNeedle='вцентресурсавсёустроенопроще';
    const stepNeedles=STEP_TEXTS.map(compact);
    const candidates=[...document.querySelectorAll('section,article,div')].filter(el=>{
      const t=compact(el.textContent);
      if(!t.includes(titleNeedle)) return false;
      return stepNeedles.filter(x=>t.includes(x)).length>=3;
    });
    return candidates.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function exactDigit(section,digit){
    const matches=[...section.querySelectorAll('span,div,p,b,strong,i,em')]
      .filter(el=>norm(el.textContent)===digit)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return matches[0]||null;
  }

  function badgeHost(el,section,digit){
    if(!el) return null;
    let best=el;
    let node=el;
    for(let i=0;i<6&&node&&node!==section;i++,node=node.parentElement){
      if(norm(node.textContent)!==digit) break;
      const r=node.getBoundingClientRect();
      if(r.width>0&&r.height>0&&r.width<=64&&r.height<=64) best=node;
    }
    return best;
  }

  function tuneBadge(el){
    if(!el) return;
    el.classList.add(ICON_CLASS);
    setImp(el,'width','30px');setImp(el,'height','30px');setImp(el,'min-width','30px');setImp(el,'min-height','30px');
    setImp(el,'flex','0 0 30px');setImp(el,'display','grid');setImp(el,'place-items','center');setImp(el,'box-sizing','border-box');
    setImp(el,'border-radius','8px');setImp(el,'border','1px solid rgba(242,212,119,.88)');
    setImp(el,'background','radial-gradient(circle at 34% 24%,rgba(255,241,182,.18) 0%,rgba(255,241,182,.05) 34%,transparent 50%),linear-gradient(145deg,rgba(10,82,94,.94),rgba(3,34,44,.99))');
    setImp(el,'box-shadow','inset 0 0 0 1px rgba(255,255,255,.045), inset 0 0 8px rgba(82,205,196,.07), 0 0 6px rgba(242,212,119,.24), 0 0 12px rgba(66,188,184,.10)');
    setImp(el,'color',GOLD);setImp(el,'-webkit-text-fill-color',GOLD);setImp(el,'font-weight','700');setImp(el,'font-size','14px');setImp(el,'line-height','1');setImp(el,'text-align','center');setImp(el,'text-shadow','0 0 5px rgba(242,212,119,.30)');
    setImp(el,'margin','0');setImp(el,'padding','0');setImp(el,'opacity','1');setImp(el,'transform','none');setImp(el,'filter','none');
  }

  function apply(){
    injectStyle();
    const section=findSection();
    if(!section) return false;
    let count=0;
    ['1','2','3','4'].forEach(digit=>{
      const host=badgeHost(exactDigit(section,digit),section,digit);
      if(host){tuneBadge(host);count++;}
    });
    return count===4;
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>100)clearInterval(timer)},100);
  apply();
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,700,1400,2500,4500,7000].forEach(ms=>setTimeout(apply,ms));
})();
