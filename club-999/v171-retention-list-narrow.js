(()=>{
  const STYLE_ID='club999-retention-list-narrow-v171-style';
  const CLASS_NAME='club999-retention-list-narrow-v171';
  const ITEM_TEXTS=[
    'следить за новыми эфирами и встречами',
    'знакомиться с новыми экспертами',
    'получать новые материалы',
    'возвращаться к сохранённым записям',
    'задавать вопросы и участвовать в клубных форматах',
    'находить поддержку для новых жизненных задач'
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/[^\p{L}\p{N}]+/gu,'');

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${CLASS_NAME}{
        width:100%!important;
        box-sizing:border-box!important;
      }
      .${CLASS_NAME} ul,
      .${CLASS_NAME} ol,
      .${CLASS_NAME} [class*="list"],
      .${CLASS_NAME} [class*="items"],
      .${CLASS_NAME} [class*="stack"]{
        width:min(100%,338px)!important;
        max-width:338px!important;
        margin-left:auto!important;
        margin-right:auto!important;
      }
      .${CLASS_NAME} li,
      .${CLASS_NAME} [class*="item"],
      .${CLASS_NAME} [class*="card"]{
        width:100%!important;
        max-width:100%!important;
        box-sizing:border-box!important;
      }
      @media(min-width:700px){
        .${CLASS_NAME} ul,
        .${CLASS_NAME} ol,
        .${CLASS_NAME} [class*="list"],
        .${CLASS_NAME} [class*="items"],
        .${CLASS_NAME} [class*="stack"]{
          width:min(100%,430px)!important;
          max-width:430px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function findListContainer(){
    const nodes=[...document.querySelectorAll('body *')];
    const matched=[];
    for(const el of nodes){
      const t=compact(el.textContent);
      if(!t) continue;
      if(ITEM_TEXTS.some(txt=>t===compact(txt))) matched.push(el);
    }
    if(!matched.length) return null;

    const candidates=[];
    matched.forEach(el=>{
      let node=el;
      for(let i=0;i<7&&node&&node!==document.body;i++,node=node.parentElement){
        const text=compact(node.textContent);
        const hits=ITEM_TEXTS.filter(txt=>text.includes(compact(txt))).length;
        if(hits>=4){candidates.push(node);break;}
      }
    });
    if(!candidates.length) return null;
    candidates.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return candidates[0];
  }

  function apply(){
    injectStyle();
    const container=findListContainer();
    if(!container) return false;
    container.classList.add(CLASS_NAME);
    return true;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [200,600,1200,2000].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>80)clearInterval(timer)},120);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
