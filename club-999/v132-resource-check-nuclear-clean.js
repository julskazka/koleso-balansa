(()=>{
  const LIST='.club999-resource-list-v124';
  const ROW='.club999-resource-row-v124';
  const ICON='.club999-resource-icon-v124';
  const COPY='.club999-resource-copy-v124';
  const STYLE_ID='club999-resource-check-nuclear-clean-v132';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .club999-resource-legacy-layer-v132{
        display:contents!important;
        list-style:none!important;
        background:none!important;
        background-image:none!important;
        border:0!important;
        box-shadow:none!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-legacy-layer-v132::before,
      .club999-resource-legacy-layer-v132::after,
      .club999-resource-legacy-layer-v132::marker,
      .club999-resource-row-v132::before,
      .club999-resource-row-v132::after,
      .club999-resource-row-v132::marker{
        content:none!important;
        display:none!important;
        width:0!important;
        height:0!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        background:none!important;
        background-image:none!important;
        box-shadow:none!important;
      }
      .club999-resource-row-v132{
        position:relative!important;
        display:grid!important;
        grid-template-columns:22px minmax(0,1fr)!important;
        align-items:center!important;
        gap:7px!important;
        width:100%!important;
        min-width:0!important;
        box-sizing:border-box!important;
        list-style:none!important;
        background-image:none!important;
      }
      .club999-resource-row-v132 > :not(.club999-resource-icon-v124):not(.club999-resource-copy-v124){
        display:none!important;
      }
      .club999-resource-list-v132{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:5px!important;
        list-style:none!important;
        margin:0!important;
        padding:0!important;
      }
      .club999-resource-list-v132::before,
      .club999-resource-list-v132::after,
      .club999-resource-list-v132::marker{
        content:none!important;
        display:none!important;
      }
    `;
    document.head.appendChild(s);
  }

  function clean(){
    const list=document.querySelector(LIST);
    if(!list) return false;
    const rows=[...list.querySelectorAll(ROW)];
    if(rows.length!==5) return false;
    addStyle();
    list.classList.add('club999-resource-list-v132');

    rows.forEach(row=>{
      row.classList.add('club999-resource-row-v132');
      [...row.children].forEach(child=>{
        if(!child.matches(ICON) && !child.matches(COPY)) child.remove();
      });

      let node=row.parentElement;
      while(node && node!==list){
        const parent=node.parentElement;
        node.classList.add('club999-resource-legacy-layer-v132');
        [...node.children].forEach(child=>{
          if(child===row || child.contains(row)) return;
          if(child.querySelector?.(ROW)) return;
          child.remove();
        });
        node=parent;
      }
    });
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    clean();
    if(tries>=80) clearInterval(timer);
  },100);
  clean();
})();
