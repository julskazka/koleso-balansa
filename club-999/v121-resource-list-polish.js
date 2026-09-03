(()=>{
  const STYLE_ID='club999-resource-list-polish-v122';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const ITEMS=[
    'Быстрый переход к нужной сфере',
    'Разные точки зрения на одну задачу',
    'Знакомство с экспертом до личной работы',
    'Возможность задать вопрос',
    'Возвращение к материалу, когда он снова актуален'
  ];
  const ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.2 12.4 3.1 3.2 6.6-7"/></svg>';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-box-v122{
        box-sizing:border-box!important;
        min-height:0!important;
        height:auto!important;
        padding:14px 18px 14px!important;
      }
      .club999-resource-kicker-v122{
        margin:0 0 8px!important;
        padding:0!important;
        line-height:1.12!important;
      }
      .club999-resource-list-v122{
        display:grid!important;
        gap:6px!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-row-v122{
        box-sizing:border-box!important;
        display:grid!important;
        grid-template-columns:26px minmax(0,1fr)!important;
        align-items:center!important;
        gap:8px!important;
        min-height:38px!important;
        height:auto!important;
        margin:0!important;
        padding:5px 10px!important;
        border-radius:14px!important;
      }
      .club999-resource-row-v122 > *{
        margin-top:0!important;
        margin-bottom:0!important;
      }
      .club999-resource-row-v122 > *:not(.club999-resource-icon-v122):not(.club999-resource-copy-wrap-v122){
        display:none!important;
      }
      .club999-resource-icon-v122{
        width:24px!important;
        height:24px!important;
        display:grid!important;
        place-items:center!important;
        border-radius:50%!important;
        border:1px solid rgba(245,209,103,.78)!important;
        background:linear-gradient(145deg,rgba(17,83,87,.80),rgba(4,47,56,.88))!important;
        box-shadow:0 0 8px rgba(239,198,76,.18),inset 0 1px 0 rgba(255,245,210,.12)!important;
      }
      .club999-resource-icon-v122 svg{
        width:15px!important;
        height:15px!important;
        fill:none!important;
        stroke:#ffe293!important;
        stroke-width:2!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 2px rgba(246,204,89,.34));
      }
      .club999-resource-copy-wrap-v122,
      .club999-resource-copy-v122{
        min-width:0!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-copy-v122{
        font-size:14px!important;
        line-height:1.22!important;
        font-weight:650!important;
      }
      .club999-resource-footer-v122{
        margin:10px 0 0!important;
        padding:10px 0 0!important;
        line-height:1.28!important;
      }
      @media(max-width:700px){
        .club999-resource-box-v122{padding:13px 16px 13px!important}
        .club999-resource-kicker-v122{margin-bottom:7px!important}
        .club999-resource-list-v122{gap:5px!important}
        .club999-resource-row-v122{
          grid-template-columns:24px minmax(0,1fr)!important;
          gap:7px!important;
          min-height:36px!important;
          padding:4px 9px!important;
          border-radius:13px!important;
        }
        .club999-resource-icon-v122{width:22px!important;height:22px!important}
        .club999-resource-icon-v122 svg{width:14px!important;height:14px!important}
        .club999-resource-copy-v122{font-size:13.5px!important;line-height:1.2!important}
        .club999-resource-footer-v122{margin-top:9px!important;padding-top:9px!important;line-height:1.26!important}
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
      if(ITEMS.every(item=>t.includes(norm(item)))&&t.includes('не нужно смотреть всё подряд')&&t.length<1100) return node;
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

  function apply(){
    const kicker=exactElement('центр ресурса');
    if(!kicker) return false;
    const box=findBox(kicker);
    if(!box) return false;

    const found=ITEMS.map(text=>{
      const textEl=exactElement(text);
      if(!textEl) return null;
      const row=outerSameText(textEl,box);
      return {textEl,row};
    });
    if(found.some(x=>!x?.row)) return false;

    addStyle();
    box.classList.add('club999-resource-box-v122');
    outerSameText(kicker,box)?.classList.add('club999-resource-kicker-v122');

    const rows=found.map(x=>x.row);
    const list=findList(rows,box);
    if(list) list.classList.add('club999-resource-list-v122');

    found.forEach(({textEl,row})=>{
      row.classList.add('club999-resource-row-v122');
      textEl.classList.add('club999-resource-copy-v122');

      let copyWrap=textEl;
      while(copyWrap.parentElement&&copyWrap.parentElement!==row){copyWrap=copyWrap.parentElement}
      copyWrap.classList.add('club999-resource-copy-wrap-v122');

      [...row.querySelectorAll('.club999-resource-icon-v121,.club999-resource-icon-v122')].forEach(el=>el.remove());
      const icon=document.createElement('span');
      icon.className='club999-resource-icon-v122';
      icon.setAttribute('aria-hidden','true');
      icon.innerHTML=ICON;
      row.insertBefore(icon,copyWrap);
    });

    const footer=[...box.querySelectorAll('p,div,strong')].find(el=>norm(el.textContent)==='не нужно смотреть всё подряд. выбирайте то, что поможет вам сейчас.');
    if(footer) outerSameText(footer,box)?.classList.add('club999-resource-footer-v122');
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries+=1;if(apply()||tries>=60)clearInterval(timer)},120);
  }
})();
