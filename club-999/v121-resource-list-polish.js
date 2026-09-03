(()=>{
  const STYLE_ID='club999-resource-list-polish-v124';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const ITEMS=[
    {
      text:'Быстрый переход к нужной сфере',
      icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18.8V8.3c0-2.8 1.8-4.6 4.5-4.6s4.5 1.8 4.5 4.6v4.2"/><path d="M4.2 14.2c2.6-1.7 6.4-2.1 10.2-1.1 2.1.6 3.9 1.7 5.4 3.1"/><path d="m15.7 13.4 4.1 2.8-4.7 1.6"/><circle class="dot" cx="12" cy="8" r="1.2"/></svg>`
    },
    {
      text:'Разные точки зрения на одну задачу',
      icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.1"/><circle cx="12" cy="12" r="8"/><path d="M12 4v4.9M12 15.1V20M4 12h4.9M15.1 12H20M6.4 6.4l3.4 3.4M14.2 14.2l3.4 3.4M17.6 6.4l-3.4 3.4M9.8 14.2l-3.4 3.4"/><circle class="dot" cx="12" cy="3.1" r="1"/><circle class="dot" cx="20.9" cy="12" r="1"/><circle class="dot" cx="12" cy="20.9" r="1"/><circle class="dot" cx="3.1" cy="12" r="1"/></svg>`
    },
    {
      text:'Знакомство с экспертом до личной работы',
      icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9.2" cy="7.7" r="3"/><path d="M3.7 18.8c.7-3.4 2.7-5.2 5.5-5.2 2.1 0 3.8 1 4.8 2.8"/><path d="M14.1 7.2h5.6c.8 0 1.4.6 1.4 1.4v4.2c0 .8-.6 1.4-1.4 1.4h-2.4l-2.3 2v-2h-.9c-.8 0-1.4-.6-1.4-1.4V8.6c0-.8.6-1.4 1.4-1.4Z"/><circle class="dot" cx="15.3" cy="10.7" r=".65"/><circle class="dot" cx="17" cy="10.7" r=".65"/><circle class="dot" cx="18.7" cy="10.7" r=".65"/></svg>`
    },
    {
      text:'Возможность задать вопрос',
      icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 5.3h15.6c.9 0 1.7.8 1.7 1.7v9.1c0 .9-.8 1.7-1.7 1.7H10l-4.2 2.6v-2.6H4.2c-.9 0-1.7-.8-1.7-1.7V7c0-.9.8-1.7 1.7-1.7Z"/><path d="M9.2 9.1c.3-1.4 1.3-2.2 2.8-2.2 1.6 0 2.8 1 2.8 2.4 0 1.1-.6 1.7-1.7 2.4-.8.5-1.1 1-1.1 1.8"/><circle class="dot" cx="12" cy="15.8" r="1"/></svg>`
    },
    {
      text:'Возвращение к материалу, когда он снова актуален',
      icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5h9.6c.9 0 1.6.7 1.6 1.6v14.1l-6.4-3.5-6.4 3.5V5.1c0-.9.7-1.6 1.6-1.6Z"/><path d="M4.1 11.2a8.2 8.2 0 0 0 2.5 7.2"/><path d="m3.5 7.6.6 3.6 3.5-.8"/><circle class="dot" cx="12" cy="8.3" r="1.1"/></svg>`
    }
  ];

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-box-v124{
        box-sizing:border-box!important;
        display:block!important;
        min-height:0!important;
        height:auto!important;
        padding:11px 16px 12px!important;
        gap:0!important;
      }
      .club999-resource-kicker-v124{
        margin:0 0 6px!important;
        padding:0!important;
        line-height:1.08!important;
      }
      .club999-resource-list-v124{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:4px!important;
        min-height:0!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-row-v124{
        box-sizing:border-box!important;
        display:grid!important;
        grid-template-columns:26px minmax(0,1fr)!important;
        align-items:center!important;
        gap:7px!important;
        width:100%!important;
        min-width:0!important;
        min-height:31px!important;
        height:auto!important;
        margin:0!important;
        padding:4px 9px!important;
        border-radius:12px!important;
      }
      .club999-resource-icon-v124{
        width:24px!important;
        height:24px!important;
        display:grid!important;
        place-items:center!important;
        align-self:center!important;
        justify-self:center!important;
        border-radius:9px!important;
        background:
          radial-gradient(circle at 36% 28%,rgba(240,210,130,.20),transparent 36%),
          linear-gradient(145deg,rgba(15,91,106,.72),rgba(3,32,38,.92))!important;
        border:1px solid rgba(232,196,92,.58)!important;
        box-shadow:
          inset 0 0 0 1px rgba(250,235,190,.06),
          0 0 8px rgba(212,175,55,.18)!important;
      }
      .club999-resource-icon-v124 svg{
        width:18px!important;
        height:18px!important;
        fill:none!important;
        stroke:#f0d282!important;
        stroke-width:1.45!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 3px rgba(240,210,130,.30));
        overflow:visible!important;
      }
      .club999-resource-icon-v124 svg .dot{
        fill:#f0d282!important;
        stroke:#f0d282!important;
        filter:drop-shadow(0 0 2px rgba(240,210,130,.50));
      }
      .club999-resource-copy-v124{
        display:block!important;
        min-width:0!important;
        width:100%!important;
        max-width:none!important;
        margin:0!important;
        padding:0!important;
        color:inherit!important;
        font-size:13.5px!important;
        line-height:1.16!important;
        font-weight:650!important;
        white-space:normal!important;
        word-break:normal!important;
        overflow-wrap:normal!important;
        text-align:left!important;
      }
      .club999-resource-footer-v124{
        margin:7px 0 0!important;
        padding:8px 0 0!important;
        line-height:1.22!important;
      }
      @media(max-width:700px){
        .club999-resource-box-v124{padding:10px 15px 11px!important}
        .club999-resource-kicker-v124{margin-bottom:5px!important}
        .club999-resource-list-v124{gap:4px!important}
        .club999-resource-row-v124{
          grid-template-columns:24px minmax(0,1fr)!important;
          gap:7px!important;
          min-height:29px!important;
          padding:3px 8px!important;
          border-radius:11px!important;
        }
        .club999-resource-icon-v124{width:22px!important;height:22px!important;border-radius:8px!important}
        .club999-resource-icon-v124 svg{width:16.5px!important;height:16.5px!important}
        .club999-resource-copy-v124{font-size:13px!important;line-height:1.15!important}
        .club999-resource-footer-v124{margin-top:7px!important;padding-top:7px!important;line-height:1.2!important}
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

  function apply(){
    const kicker=exactElement('центр ресурса');
    if(!kicker) return false;
    const box=findBox(kicker);
    if(!box) return false;

    const found=ITEMS.map(item=>{
      const textEl=exactElement(item.text);
      if(!textEl) return null;
      const row=outerSameText(textEl,box);
      return {...item,row};
    });
    if(found.some(x=>!x?.row)) return false;

    addStyle();
    box.className=[...box.classList].filter(c=>!/^club999-resource-box-v12[1-3]$/.test(c)).join(' ');
    box.classList.add('club999-resource-box-v124');
    const kick=outerSameText(kicker,box);
    if(kick){
      kick.className=[...kick.classList].filter(c=>!/^club999-resource-kicker-v12[1-3]$/.test(c)).join(' ');
      kick.classList.add('club999-resource-kicker-v124');
    }

    const rows=found.map(x=>x.row);
    const list=findList(rows,box);
    if(list){
      list.className=[...list.classList].filter(c=>!/^club999-resource-list-v12[1-3]$/.test(c)).join(' ');
      list.classList.add('club999-resource-list-v124');
    }

    found.forEach(({text,icon,row})=>{
      row.className=[...row.classList].filter(c=>!/^club999-resource-(row|copy|icon|copy-wrap)-v12[1-3]$/.test(c)).join(' ');
      row.classList.add('club999-resource-row-v124');
      row.innerHTML=`<span class="club999-resource-icon-v124" aria-hidden="true">${icon}</span><span class="club999-resource-copy-v124"></span>`;
      row.querySelector('.club999-resource-copy-v124').textContent=text;
    });

    const footer=[...box.querySelectorAll('p,div,strong')].find(el=>norm(el.textContent)==='не нужно смотреть всё подряд. выбирайте то, что поможет вам сейчас.');
    if(footer){
      const foot=outerSameText(footer,box);
      if(foot){
        foot.className=[...foot.classList].filter(c=>!/^club999-resource-footer-v12[1-3]$/.test(c)).join(' ');
        foot.classList.add('club999-resource-footer-v124');
      }
    }
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries+=1;if(apply()||tries>=60)clearInterval(timer)},120);
  }
})();
