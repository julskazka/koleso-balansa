(()=>{
  const STYLE_ID='club999-resource-list-polish-v123';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const ITEMS=[
    'Быстрый переход к нужной сфере',
    'Разные точки зрения на одну задачу',
    'Знакомство с экспертом до личной работы',
    'Возможность задать вопрос',
    'Возвращение к материалу, когда он снова актуален'
  ];
  const ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.8c.7 4.3 3.1 6.7 7.4 7.4-4.3.7-6.7 3.1-7.4 7.4-.7-4.3-3.1-6.7-7.4-7.4 4.3-.7 6.7-3.1 7.4-7.4Z"/><circle cx="18.7" cy="5.5" r="1"/></svg>';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-box-v123{
        box-sizing:border-box!important;
        display:block!important;
        min-height:0!important;
        height:auto!important;
        padding:12px 16px 13px!important;
        gap:0!important;
      }
      .club999-resource-kicker-v123{
        margin:0 0 7px!important;
        padding:0!important;
        line-height:1.1!important;
      }
      .club999-resource-list-v123{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:5px!important;
        min-height:0!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-row-v123{
        box-sizing:border-box!important;
        display:grid!important;
        grid-template-columns:21px minmax(0,1fr)!important;
        align-items:center!important;
        gap:7px!important;
        width:100%!important;
        min-width:0!important;
        min-height:34px!important;
        height:auto!important;
        margin:0!important;
        padding:5px 9px!important;
        border-radius:13px!important;
      }
      .club999-resource-icon-v123{
        width:19px!important;
        height:19px!important;
        display:grid!important;
        place-items:center!important;
        align-self:center!important;
        justify-self:center!important;
      }
      .club999-resource-icon-v123 svg{
        width:18px!important;
        height:18px!important;
        fill:rgba(244,207,102,.14)!important;
        stroke:#f5d36f!important;
        stroke-width:1.45!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 4px rgba(241,198,72,.38));
      }
      .club999-resource-copy-v123{
        display:block!important;
        min-width:0!important;
        width:100%!important;
        max-width:none!important;
        margin:0!important;
        padding:0!important;
        color:inherit!important;
        font-size:14px!important;
        line-height:1.2!important;
        font-weight:650!important;
        white-space:normal!important;
        word-break:normal!important;
        overflow-wrap:normal!important;
        text-align:left!important;
      }
      .club999-resource-footer-v123{
        margin:9px 0 0!important;
        padding:9px 0 0!important;
        line-height:1.25!important;
      }
      @media(max-width:700px){
        .club999-resource-box-v123{padding:11px 16px 12px!important}
        .club999-resource-kicker-v123{margin-bottom:6px!important}
        .club999-resource-list-v123{gap:4px!important}
        .club999-resource-row-v123{
          grid-template-columns:20px minmax(0,1fr)!important;
          gap:7px!important;
          min-height:32px!important;
          padding:4px 8px!important;
          border-radius:12px!important;
        }
        .club999-resource-icon-v123{width:18px!important;height:18px!important}
        .club999-resource-icon-v123 svg{width:17px!important;height:17px!important}
        .club999-resource-copy-v123{font-size:13.5px!important;line-height:1.18!important}
        .club999-resource-footer-v123{margin-top:8px!important;padding-top:8px!important;line-height:1.23!important}
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
      return {text,row};
    });
    if(found.some(x=>!x?.row)) return false;

    addStyle();
    box.classList.remove('club999-resource-box-v121','club999-resource-box-v122');
    box.classList.add('club999-resource-box-v123');
    const kick=outerSameText(kicker,box);
    if(kick){
      kick.classList.remove('club999-resource-kicker-v121','club999-resource-kicker-v122');
      kick.classList.add('club999-resource-kicker-v123');
    }

    const rows=found.map(x=>x.row);
    const list=findList(rows,box);
    if(list){
      list.classList.remove('club999-resource-list-v121','club999-resource-list-v122');
      list.classList.add('club999-resource-list-v123');
    }

    found.forEach(({text,row})=>{
      row.className=[...row.classList].filter(c=>!/^club999-resource-(row|copy|icon|copy-wrap)-v12[12]$/.test(c)).join(' ');
      row.classList.add('club999-resource-row-v123');
      row.innerHTML=`<span class="club999-resource-icon-v123" aria-hidden="true">${ICON}</span><span class="club999-resource-copy-v123"></span>`;
      row.querySelector('.club999-resource-copy-v123').textContent=text;
    });

    const footer=[...box.querySelectorAll('p,div,strong')].find(el=>norm(el.textContent)==='не нужно смотреть всё подряд. выбирайте то, что поможет вам сейчас.');
    if(footer){
      const foot=outerSameText(footer,box);
      foot?.classList.remove('club999-resource-footer-v121','club999-resource-footer-v122');
      foot?.classList.add('club999-resource-footer-v123');
    }
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries+=1;if(apply()||tries>=60)clearInterval(timer)},120);
  }
})();
