(()=>{
  const STYLE_ID='club999-feed-compact-style-v120';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const ITEMS=[
    'случайный порядок',
    'смешанные темы',
    'сохранённое «на потом»',
    'новый поиск при каждом вопросе'
  ];

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-feed-box-v120{
        box-sizing:border-box!important;
        min-height:0!important;
        height:auto!important;
        padding:12px 14px 10px!important;
        gap:0!important;
        row-gap:0!important;
      }
      .club999-feed-box-v120 .club999-feed-kicker-v120{
        min-height:0!important;
        margin:0 0 6px!important;
        padding:0!important;
        font-size:11px!important;
        line-height:1.15!important;
      }
      .club999-feed-list-v120{
        min-height:0!important;
        margin:0!important;
        padding:0!important;
        gap:0!important;
        row-gap:0!important;
      }
      .club999-feed-row-v120{
        box-sizing:border-box!important;
        min-height:0!important;
        height:auto!important;
        margin:0!important;
        padding:6px 0!important;
        gap:0!important;
        line-height:1.18!important;
      }
      .club999-feed-row-v120 *{
        margin-top:0!important;
        margin-bottom:0!important;
        padding-top:0!important;
        padding-bottom:0!important;
        min-height:0!important;
        line-height:1.18!important;
      }
      @media(max-width:700px){
        .club999-feed-box-v120{padding:10px 14px 8px!important;border-radius:18px!important}
        .club999-feed-box-v120 .club999-feed-kicker-v120{margin-bottom:4px!important;font-size:10px!important}
        .club999-feed-row-v120{padding:5px 0!important;font-size:14px!important;line-height:1.16!important}
        .club999-feed-row-v120 *{font-size:inherit!important;line-height:1.16!important}
      }
    `;
    document.head.appendChild(style);
  }

  function exactElement(text){
    const wanted=norm(text);
    return [...document.querySelectorAll('div,p,span,li,strong,b')].find(el=>norm(el.textContent)===wanted)||null;
  }

  function outerSameText(el,stop){
    if(!el) return null;
    const wanted=norm(el.textContent);
    let node=el;
    while(node.parentElement&&node.parentElement!==stop&&norm(node.parentElement.textContent)===wanted){
      node=node.parentElement;
    }
    return node;
  }

  function findBox(kicker){
    let node=kicker;
    for(let i=0;i<8&&node;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(ITEMS.every(item=>t.includes(item))&&t.length<520) return node;
    }
    return null;
  }

  function apply(){
    if(document.querySelector('.club999-feed-box-v120')) return true;
    const kicker=exactElement('обычная лента');
    if(!kicker) return false;
    const box=findBox(kicker);
    if(!box) return false;
    addStyle();
    box.classList.add('club999-feed-box-v120');
    outerSameText(kicker,box)?.classList.add('club999-feed-kicker-v120');

    const rows=ITEMS.map(item=>outerSameText(exactElement(item),box)).filter(Boolean);
    rows.forEach(row=>row.classList.add('club999-feed-row-v120'));

    if(rows.length){
      let parent=rows[0].parentElement;
      while(parent&&parent!==box){
        const count=rows.filter(row=>parent.contains(row)).length;
        if(count>=3){parent.classList.add('club999-feed-list-v120');break;}
        parent=parent.parentElement;
      }
    }
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries+=1;if(apply()||tries>=50)clearInterval(timer)},120);
  }
})();
