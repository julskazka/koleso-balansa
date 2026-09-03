(()=>{
  const LIST='.club999-resource-list-v124';
  const ROW='.club999-resource-row-v124';
  const STYLE_ID='club999-resource-hard-reset-v131';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      .club999-resource-row-v131::before,
      .club999-resource-row-v131::after{
        content:none!important;
        display:none!important;
        width:0!important;
        height:0!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        background:none!important;
        box-shadow:none!important;
      }
      .club999-resource-list-v131{
        display:grid!important;
        grid-template-columns:1fr!important;
        gap:4px!important;
        margin:0!important;
        padding:0!important;
      }
    `;
    document.head.appendChild(s);
  }

  function reset(){
    const list=document.querySelector(LIST);
    if(!list) return false;
    const rows=[...list.querySelectorAll(ROW)];
    if(rows.length!==5) return false;

    addStyle();
    rows.forEach(row=>row.classList.add('club999-resource-row-v131'));

    // Hard reset of the list contents: keep ONLY the five new rows.
    // This physically removes every legacy check/tick node and wrapper.
    list.replaceChildren(...rows);
    list.classList.add('club999-resource-list-v131');
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    if(reset() || tries>60) clearInterval(timer);
  },100);
  reset();
})();
