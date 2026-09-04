(()=>{
  const STYLE_ID='club999-retention-cards-compact-v173-style';
  const CARD_CLASS='club999-retention-card-v173';
  const LIST_CLASS='club999-retention-list-v173';
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
        width:min(340px, calc(100vw - 28px))!important;
        max-width:340px!important;
        min-height:0!important;
        height:auto!important;
        box-sizing:border-box!important;
        margin-top:0!important;
        margin-bottom:0!important;
        margin-left:auto!important;
        margin-right:auto!important;
        padding-top:9px!important;
        padding-bottom:9px!important;
        left:auto!important;
        right:auto!important;
        transform:none!important;
        translate:none!important;
      }
      .${LIST_CLASS}{
        display:flex!important;
        flex-direction:column!important;
        gap:6px!important;
        row-gap:6px!important;
      }
      @media(min-width:700px){
        .${CARD_CLASS}{
          width:min(430px, calc(100vw - 40px))!important;
          max-width:430px!important;
          padding-top:10px!important;
          padding-bottom:10px!important;
        }
        .${LIST_CLASS}{gap:7px!important;row-gap:7px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function exactTextEl(text){
    const wanted=norm(text);
    return [...document.querySelectorAll('div,p,span,li,strong,b')]
      .filter(el=>norm(el.textContent)===wanted)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }

  function cardFor(el){
    if(!el) return null;
    let node=el;
    for(let i=0;i<7&&node&&node!==document.body;i++,node=node.parentElement){
      const r=node.getBoundingClientRect();
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderRadius)||0;
      const border=(parseFloat(cs.borderTopWidth)||0)+(parseFloat(cs.borderRightWidth)||0);
      const t=norm(node.textContent);
      if(r.width>=250&&r.width<=440&&r.height>=38&&r.height<=140&&t.length<=130&&(radius>=12||border>0)) return node;
    }
    return el.parentElement;
  }

  function commonList(cards){
    if(cards.length<2) return null;
    let node=cards[0].parentElement;
    while(node&&node!==document.body){
      const inside=cards.filter(card=>node.contains(card)).length;
      if(inside===cards.length) return node;
      node=node.parentElement;
    }
    return null;
  }

  function apply(){
    injectStyle();
    const cards=[];
    ITEM_TEXTS.forEach(text=>{
      const card=cardFor(exactTextEl(text));
      if(!card||cards.includes(card)) return;
      card.classList.remove('club999-retention-card-v172');
      card.classList.add(CARD_CLASS);
      cards.push(card);
    });
    const list=commonList(cards);
    if(list) list.classList.add(LIST_CLASS);
    return cards.length>=4;
  }

  function burst(){
    apply();
    requestAnimationFrame(()=>requestAnimationFrame(apply));
    [180,500,1000,1800,3000].forEach(ms=>setTimeout(apply,ms));
  }

  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>80)clearInterval(timer)},120);
  addEventListener('resize',()=>setTimeout(burst,80),{passive:true});
  burst();
})();
