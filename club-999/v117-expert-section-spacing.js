(()=>{
  const STYLE_ID='club999-expert-spacing-v119';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-expert-section-v119{
        padding-top:6px!important;
        padding-bottom:6px!important;
        margin-top:-34px!important;
        margin-bottom:-42px!important;
      }
      @media(max-width:700px){
        .club999-expert-section-v119{
          padding-top:4px!important;
          padding-bottom:4px!important;
          margin-top:-66px!important;
          margin-bottom:-68px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function findTarget(){
    const existing=document.querySelector('.club999-expert-section-v112');
    if(existing) return existing;
    return [...document.querySelectorAll('section,.section')].find(el=>{
      const t=norm(el.textContent);
      return t.includes('иногда нужен')&&t.includes('ответ на свой вопрос');
    })||null;
  }

  function apply(){
    const section=findTarget();
    if(!section) return false;
    addStyle();
    section.classList.remove('club999-expert-section-v117','club999-expert-section-v118');
    section.classList.add('club999-expert-section-v119');
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries++;if(apply()||tries>50)clearInterval(timer)},120);
  }
})();
