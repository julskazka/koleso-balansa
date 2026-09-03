(()=>{
  const STYLE_ID='club999-expert-spacing-v117';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-expert-prev-v117{padding-bottom:22px!important}
      .club999-expert-section-v117{padding-top:20px!important;padding-bottom:20px!important}
      .club999-expert-next-v117{padding-top:22px!important}
      @media(max-width:700px){
        .club999-expert-prev-v117{padding-bottom:14px!important}
        .club999-expert-section-v117{padding-top:14px!important;padding-bottom:14px!important}
        .club999-expert-next-v117{padding-top:14px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findTarget(){
    const existing=document.querySelector('.club999-expert-section-v112');
    if(existing) return existing;
    return [...document.querySelectorAll('section,.section')].find(el=>{
      const t=norm(el.textContent);
      return t.includes('иногда нужен')&&t.includes('ответ на свой вопрос');
    })||null;
  }

  function nearestSection(node,dir){
    let cur=node?.[dir]||null;
    while(cur){
      if(cur.matches?.('section,.section')) return cur;
      cur=cur[dir];
    }
    return null;
  }

  function apply(){
    const section=findTarget();
    if(!section) return false;
    addStyle();
    section.classList.add('club999-expert-section-v117');
    nearestSection(section,'previousElementSibling')?.classList.add('club999-expert-prev-v117');
    nearestSection(section,'nextElementSibling')?.classList.add('club999-expert-next-v117');
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries++;if(apply()||tries>50)clearInterval(timer)},120);
  }
})();
