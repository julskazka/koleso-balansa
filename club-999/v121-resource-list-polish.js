(()=>{
  const STYLE_ID='club999-resource-list-polish-v121';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const ITEMS=[
    {text:'Быстрый переход к нужной сфере',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.2"/><path d="M9.2 14.8 14.8 9.2M11.5 9.2h3.3v3.3"/></svg>'},
    {text:'Разные точки зрения на одну задачу',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="3.2"/><circle cx="16" cy="8.5" r="2.4"/><circle cx="16" cy="15.5" r="2.4"/><path d="M10.8 10.5 13.7 9M10.8 13.5l2.9 1.5"/></svg>'},
    {text:'Знакомство с экспертом до личной работы',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="8.3" r="3"/><path d="M4.8 18.2c.7-3 2.6-4.7 5.2-4.7s4.5 1.7 5.2 4.7"/><path d="m17.5 7 .7 1.4 1.5.2-1.1 1 .3 1.5-1.4-.8-1.4.8.3-1.5-1.1-1 1.5-.2.7-1.4Z"/></svg>'},
    {text:'Возможность задать вопрос',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 6.8h13.6v8.6H11l-4.1 2.8.8-2.8H5.2Z"/><path d="M9.3 10.5h5.4M9.3 12.8h3.7"/></svg>'},
    {text:'Возвращение к материалу, когда он снова актуален',icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5.5h8.4a3.6 3.6 0 0 1 0 7.2H9.2"/><path d="m11.2 9-3 3.7 3 3.7"/><path d="M7 18.5h10"/></svg>'}
  ];

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-box-v121{
        box-sizing:border-box!important;
        min-height:0!important;
        height:auto!important;
        padding:18px 20px 18px!important;
      }
      .club999-resource-kicker-v121{
        margin:0 0 12px!important;
        padding:0!important;
        line-height:1.15!important;
      }
      .club999-resource-list-v121{
        display:grid!important;
        gap:8px!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-row-v121{
        box-sizing:border-box!important;
        display:grid!important;
        grid-template-columns:34px minmax(0,1fr)!important;
        align-items:center!important;
        gap:10px!important;
        min-height:50px!important;
        height:auto!important;
        margin:0!important;
        padding:8px 12px!important;
        border-radius:16px!important;
      }
      .club999-resource-row-v121 > *{
        margin-top:0!important;
        margin-bottom:0!important;
      }
      .club999-resource-row-v121 .club999-resource-old-icon-v121{display:none!important}
      .club999-resource-icon-v121{
        position:relative;
        width:32px;
        height:32px;
        display:grid;
        place-items:center;
        flex:0 0 32px;
        border-radius:50%;
        border:1px solid rgba(245,209,103,.84);
        background:
          radial-gradient(circle at 35% 28%,rgba(255,242,190,.15),transparent 38%),
          linear-gradient(145deg,rgba(20,98,98,.86),rgba(4,48,57,.92));
        box-shadow:
          0 0 0 1px rgba(255,230,148,.08),
          0 0 12px rgba(239,198,76,.24),
          inset 0 1px 0 rgba(255,245,210,.15);
      }
      .club999-resource-icon-v121::after{
        content:'';
        position:absolute;
        width:3px;height:3px;
        right:3px;top:3px;
        border-radius:50%;
        background:#ffe59a;
        box-shadow:0 0 6px rgba(255,221,117,.9);
      }
      .club999-resource-icon-v121 svg{
        width:19px;height:19px;
        fill:none;
        stroke:#ffe293;
        stroke-width:1.65;
        stroke-linecap:round;
        stroke-linejoin:round;
        filter:drop-shadow(0 0 3px rgba(246,204,89,.42));
      }
      .club999-resource-copy-v121{
        min-width:0!important;
        margin:0!important;
        padding:0!important;
        font-size:15px!important;
        line-height:1.28!important;
        font-weight:650!important;
      }
      .club999-resource-footer-v121{
        margin:14px 0 0!important;
        padding:14px 0 0!important;
        line-height:1.32!important;
      }
      @media(max-width:700px){
        .club999-resource-box-v121{padding:16px 18px 16px!important}
        .club999-resource-kicker-v121{margin-bottom:10px!important}
        .club999-resource-list-v121{gap:7px!important}
        .club999-resource-row-v121{
          grid-template-columns:30px minmax(0,1fr)!important;
          gap:9px!important;
          min-height:46px!important;
          padding:7px 10px!important;
          border-radius:15px!important;
        }
        .club999-resource-icon-v121{width:29px;height:29px;flex-basis:29px}
        .club999-resource-icon-v121 svg{width:17px;height:17px}
        .club999-resource-copy-v121{font-size:14px!important;line-height:1.26!important}
        .club999-resource-footer-v121{margin-top:12px!important;padding-top:12px!important;line-height:1.3!important}
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
    while(node.parentElement&&node.parentElement!==stop&&norm(node.parentElement.textContent)===wanted){node=node.parentElement}
    return node;
  }

  function findBox(kicker){
    let node=kicker;
    for(let i=0;i<9&&node;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(ITEMS.every(item=>t.includes(norm(item.text)))&&t.includes('не нужно смотреть всё подряд')&&t.length<1100) return node;
    }
    return null;
  }

  function findList(rows,box){
    let parent=rows[0]?.parentElement||null;
    while(parent&&parent!==box){
      if(rows.filter(row=>parent.contains(row)).length===rows.length) return parent;
      parent=parent.parentElement;
    }
    return null;
  }

  function hideOldIcons(row,textEl){
    [...row.querySelectorAll('span,i,b,em,svg')].forEach(el=>{
      if(el===textEl||el.contains(textEl)) return;
      const t=norm(el.textContent);
      if(['✓','✔','☑','✅'].includes(t)) el.classList.add('club999-resource-old-icon-v121');
    });
  }

  function apply(){
    if(document.querySelector('.club999-resource-box-v121')) return true;
    const kicker=exactElement('центр ресурса');
    if(!kicker) return false;
    const box=findBox(kicker);
    if(!box) return false;

    const found=ITEMS.map(item=>{
      const textEl=exactElement(item.text);
      if(!textEl) return null;
      const row=outerSameText(textEl,box);
      return {item,textEl,row};
    });
    if(found.some(x=>!x?.row)) return false;

    addStyle();
    box.classList.add('club999-resource-box-v121');
    outerSameText(kicker,box)?.classList.add('club999-resource-kicker-v121');

    const rows=found.map(x=>x.row);
    const list=findList(rows,box);
    if(list) list.classList.add('club999-resource-list-v121');

    found.forEach(({item,textEl,row})=>{
      row.classList.add('club999-resource-row-v121');
      textEl.classList.add('club999-resource-copy-v121');
      hideOldIcons(row,textEl);
      if(!row.querySelector('.club999-resource-icon-v121')){
        const icon=document.createElement('span');
        icon.className='club999-resource-icon-v121';
        icon.setAttribute('aria-hidden','true');
        icon.innerHTML=item.icon;
        row.insertBefore(icon,row.firstChild);
      }
    });

    const footer=[...box.querySelectorAll('p,div,strong')].find(el=>norm(el.textContent)==='не нужно смотреть всё подряд. выбирайте то, что поможет вам сейчас.');
    if(footer) outerSameText(footer,box)?.classList.add('club999-resource-footer-v121');
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries+=1;if(apply()||tries>=60)clearInterval(timer)},120);
  }
})();
