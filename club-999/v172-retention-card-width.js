(()=>{
  const STYLE_ID='club999-retention-cards-width-v172-style';
  const CARD_CLASS='club999-retention-card-v172';
  const ITEM_TEXTS=[
    'следить за новыми эфирами и встречами',
    'знакомиться с новыми экспертами',
    'получать новые материалы',
    'возвращаться к сохранённым записям',
    'задавать вопросы и участвовать в клубных форматах',
    'находить поддержку для новых жизненных задач'
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .${CARD_CLASS}{
        width:min(310px, calc(100vw - 48px))!important;
        max-width:310px!important;
        box-sizing:border-box!important;
        margin-left:auto!important;
        margin-right:auto!important;
        left:auto!important;
        right:auto!important;
        transform:none!important;
        translate:none!important;
      }
      @media(min-width:700px){
        .${CARD_CLASS}{
          width:min(390px, calc(100vw - 64px))!important;
          max-width:390px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function exactTextEl(text){
    const wanted=norm(text);
    return [...document.querySelectorAll('div,p,span,li,strong,b')]
      .filter(el=>norm(el.textContent)===wanted)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0] || null;
  }

  function cardFor(el){
    if(!el) return null;
    let node=el;
    for(let i=0;i<7 && node && node!==document.body;i++,node=node.parentElement){
      const r=node.getBoundingClientRect();
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderRadius)||0;
      const border=(parseFloat(cs.borderTopWidth)||0)+(parseFloat(cs.borderRightWidth)||0);
      const t=norm(node.textContent);
      if(
        r.width>=250 && r.width<=430 &&
        r.height>=40 && r.height<=130 &&
        t.length<=120 &&
        (radius>=12 || border>0)
      ) return node;
    }
    return el.parentElement;
  }

  function apply(){
    injectStyle();
    let count=0;
    ITEM_TEXTS.forEach(text=>{
      const card=cardFor(exactTextEl(text));
      if(!card) return;
      card.classList.add(CARD_CLASS);
      count++;
    });
    return count>=4;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,500,1000,1800,3000].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(apply()||tries>80) clearInterval(timer);
  },120);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
