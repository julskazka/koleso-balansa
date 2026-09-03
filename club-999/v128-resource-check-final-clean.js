(()=>{
  const ROW='.club999-resource-row-v124';
  const STYLE_ID='club999-resource-check-final-clean-v128';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-resource-legacy-host-v128::before,
      .club999-resource-legacy-host-v128::after{
        content:none!important;
        display:none!important;
        width:0!important;
        height:0!important;
        min-width:0!important;
        min-height:0!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        box-shadow:none!important;
        background:none!important;
      }
    `;
    document.head.appendChild(style);
  }

  function isCheckNode(el){
    if(!el || el.nodeType!==1) return false;
    if(el.matches?.('.club999-resource-icon-v124,.club999-resource-copy-v124')) return false;
    if(el.querySelector?.('.club999-resource-icon-v124,.club999-resource-copy-v124')) return false;
    const txt=norm(el.textContent);
    const cls=(el.className||'').toString().toLowerCase();
    const aria=(el.getAttribute?.('aria-label')||'').toLowerCase();
    let before='',after='';
    try{before=getComputedStyle(el,'::before').content||'';after=getComputedStyle(el,'::after').content||'';}catch(e){}
    const pseudo=before+' '+after;
    return /^[✓✔☑]$/.test(txt) || /✓|✔|☑/.test(pseudo) || cls.includes('check') || cls.includes('tick') || aria.includes('check');
  }

  function clean(){
    const rows=[...document.querySelectorAll(ROW)];
    if(!rows.length) return false;
    addStyle();

    rows.forEach(row=>{
      let branch=row;
      let host=row.parentElement;
      for(let depth=0;depth<5&&host;depth++){
        const count=host.querySelectorAll?.(ROW).length||0;
        if(count>1) break;
        host.classList.add('club999-resource-legacy-host-v128');

        [...host.children].forEach(child=>{
          if(child===branch || child.contains(row)) return;
          if(isCheckNode(child)) child.remove();
        });

        branch=host;
        host=host.parentElement;
      }
    });
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(clean()&&tries>8) clearInterval(timer);
    if(tries>80) clearInterval(timer);
  },100);
  clean();
})();
