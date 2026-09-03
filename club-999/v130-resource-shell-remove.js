(()=>{
  const STYLE_ID='club999-resource-shell-remove-v130';
  const ROW='.club999-resource-row-v124';
  const LIST='.club999-resource-list-v124';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .club999-resource-shell-v130{
        display:contents!important;
        background:none!important;
        background-image:none!important;
        border:0!important;
        box-shadow:none!important;
        padding:0!important;
        margin:0!important;
      }
      .club999-resource-shell-v130::before,
      .club999-resource-shell-v130::after,
      .club999-resource-row-v130::before,
      .club999-resource-row-v130::after{
        content:none!important;
        display:none!important;
        background:none!important;
        border:0!important;
        box-shadow:none!important;
      }
      .club999-resource-row-v130{
        display:grid!important;
        grid-template-columns:24px minmax(0,1fr)!important;
        align-items:center!important;
        gap:7px!important;
        width:100%!important;
        min-width:0!important;
        min-height:0!important;
        box-sizing:border-box!important;
        margin:0!important;
        padding:7px 10px!important;
        border:1px solid rgba(222,187,84,.42)!important;
        border-radius:14px!important;
        background:linear-gradient(135deg,rgba(12,77,89,.56),rgba(3,39,50,.82))!important;
        background-image:none!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.055)!important;
      }
      @media(max-width:700px){
        .club999-resource-row-v130{
          grid-template-columns:22px minmax(0,1fr)!important;
          gap:7px!important;
          padding:6px 9px!important;
          border-radius:13px!important;
        }
      }
    `;
    document.head.appendChild(s);
  }

  function apply(){
    const rows=[...document.querySelectorAll(ROW)];
    if(!rows.length) return false;
    addStyle();
    rows.forEach(row=>{
      row.classList.add('club999-resource-row-v130');
      const host=row.parentElement;
      if(!host || host.matches(LIST)) return;
      const contained=host.querySelectorAll(ROW);
      if(contained.length!==1 || contained[0]!==row) return;
      [...host.children].forEach(child=>{ if(child!==row) child.remove(); });
      host.classList.add('club999-resource-shell-v130');
    });
    return true;
  }

  let n=0;
  const timer=setInterval(()=>{
    n++;
    if(apply() && n>8) clearInterval(timer);
    if(n>50) clearInterval(timer);
  },100);
  apply();
})();
