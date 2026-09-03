(()=>{
  const STYLE_ID='club999-expert-spacing-v118';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-expert-prev-v118{
        padding-bottom:0!important;
        margin-bottom:0!important;
      }
      .club999-expert-section-v118{
        padding-top:12px!important;
        padding-bottom:12px!important;
        margin-top:0!important;
        margin-bottom:0!important;
      }
      .club999-expert-next-v118{
        padding-top:0!important;
        margin-top:0!important;
      }
      @media(max-width:700px){
        .club999-expert-prev-v118{padding-bottom:0!important;margin-bottom:0!important}
        .club999-expert-section-v118{padding-top:8px!important;padding-bottom:8px!important;margin-top:0!important;margin-bottom:0!important}
        .club999-expert-next-v118{padding-top:0!important;margin-top:0!important}
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

  function adjacentSections(target){
    const nodes=[...document.querySelectorAll('section,.section')];
    const idx=nodes.indexOf(target);
    let prev=null,next=null;
    if(idx>=0){
      for(let i=idx-1;i>=0;i--){
        const node=nodes[i];
        if(!node.contains(target)&&!target.contains(node)){prev=node;break;}
      }
      for(let i=idx+1;i<nodes.length;i++){
        const node=nodes[i];
        if(!node.contains(target)&&!target.contains(node)){next=node;break;}
      }
    }
    return {prev,next};
  }

  function apply(){
    const section=findTarget();
    if(!section) return false;
    addStyle();
    section.classList.remove('club999-expert-section-v117');
    section.classList.add('club999-expert-section-v118');
    const {prev,next}=adjacentSections(section);
    prev?.classList.add('club999-expert-prev-v118');
    next?.classList.add('club999-expert-next-v118');
    return true;
  }

  if(!apply()){
    let tries=0;
    const timer=setInterval(()=>{tries++;if(apply()||tries>50)clearInterval(timer)},120);
  }
})();
