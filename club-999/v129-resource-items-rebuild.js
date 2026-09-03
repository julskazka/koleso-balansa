(()=>{
  const ROW='.club999-resource-row-v124';
  const ICON='.club999-resource-icon-v124';
  const COPY='.club999-resource-copy-v124';
  const STYLE_ID='club999-resource-items-rebuild-v129';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim();
  const withoutCheck=s=>norm(s).replace(/[✓✔☑✅]/g,'').replace(/\s+/g,' ').trim();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-row-v129::before,
      .club999-resource-row-v129::after{
        content:none!important;
        display:none!important;
        width:0!important;
        height:0!important;
        min-width:0!important;
        min-height:0!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        background:none!important;
        box-shadow:none!important;
      }
      .club999-resource-row-v129 > ${ICON},
      .club999-resource-row-v129 > ${COPY}{
        position:relative!important;
        z-index:2!important;
      }
    `;
    document.head.appendChild(style);
  }

  function findCard(row){
    const copy=row.querySelector(COPY);
    if(!copy) return null;
    const wanted=norm(copy.textContent);
    let node=row.parentElement;
    for(let depth=0;depth<4&&node;depth++,node=node.parentElement){
      const rows=node.querySelectorAll?.(ROW).length||0;
      if(rows>1) break;
      if(withoutCheck(node.textContent)===wanted) return node;
    }
    return null;
  }

  function rebuild(){
    const rows=[...document.querySelectorAll(ROW)].filter(r=>!r.classList.contains('club999-resource-row-v129'));
    if(!rows.length) return false;
    addStyle();
    rows.forEach(row=>{
      const icon=row.querySelector(ICON);
      const copy=row.querySelector(COPY);
      if(!icon||!copy) return;
      const card=findCard(row);
      if(!card||card===row) {
        row.classList.add('club999-resource-row-v129');
        return;
      }
      const iconClone=icon.cloneNode(true);
      const copyClone=copy.cloneNode(true);
      card.classList.add('club999-resource-row-v124','club999-resource-row-v129');
      card.replaceChildren(iconClone,copyClone);
    });
    return true;
  }

  addStyle();
  rebuild();
  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    rebuild();
    if(tries>=30) clearInterval(timer);
  },120);
})();
