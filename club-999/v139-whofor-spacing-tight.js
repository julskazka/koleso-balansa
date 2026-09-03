(()=>{
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const exact=text=>{
    const target=norm(text);
    const nodes=[...document.querySelectorAll('body *')].filter(el=>norm(el.textContent)===target);
    nodes.sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length);
    return nodes[0]||null;
  };
  const zero=(el,which='both')=>{
    if(!el||el===document.body||el===document.documentElement) return;
    if(which==='both'||which==='top'){
      el.style.setProperty('margin-top','0','important');
      el.style.setProperty('padding-top','0','important');
    }
    if(which==='both'||which==='bottom'){
      el.style.setProperty('margin-bottom','0','important');
      el.style.setProperty('padding-bottom','0','important');
    }
  };
  const cleanEmptySiblings=(node,dir)=>{
    let el=dir==='prev'?node?.previousElementSibling:node?.nextElementSibling;
    for(let i=0;i<5&&el;i++){
      if(norm(el.textContent)!=='') break;
      const cs=getComputedStyle(el);
      if(cs.position!=='absolute'&&cs.position!=='fixed'){
        el.style.setProperty('display','none','important');
      }
      el=dir==='prev'?el.previousElementSibling:el.nextElementSibling;
    }
  };
  function apply(){
    const kicker=exact('Кому подойдёт');
    const title=exact('Тем, кому нужен не идеальный план, а следующая точка опоры');
    const firstText=exact('Вы находитесь в периоде изменений');
    const firstRow=document.querySelector('.club999-whofor-row-v136') || firstText?.closest('.club999-whofor-row-v136') || firstText;
    if(!kicker||!title||!firstRow) return false;

    const section=kicker.closest('section');
    if(section){
      section.style.setProperty('padding-top','0','important');
      section.style.setProperty('margin-top','0','important');
      const prev=section.previousElementSibling;
      if(prev){
        prev.style.setProperty('padding-bottom','6px','important');
        prev.style.setProperty('margin-bottom','0','important');
      }
    }

    kicker.style.setProperty('margin','0 0 7px','important');
    kicker.style.setProperty('padding','0','important');
    title.style.setProperty('margin','0 0 8px','important');
    title.style.setProperty('padding','0','important');

    cleanEmptySiblings(kicker,'prev');
    cleanEmptySiblings(title,'prev');
    cleanEmptySiblings(title,'next');
    cleanEmptySiblings(firstRow,'prev');

    let n=kicker.parentElement;
    for(let i=0;i<6&&n&&n!==section&&n!==document.body;i++,n=n.parentElement){
      zero(n,'top');
    }
    n=title.parentElement;
    for(let i=0;i<6&&n&&n!==section&&n!==document.body;i++,n=n.parentElement){
      if(!norm(n.textContent).includes('вы находитесь в периоде изменений')) zero(n,'bottom');
    }
    n=firstRow.parentElement;
    for(let i=0;i<5&&n&&n!==section&&n!==document.body;i++,n=n.parentElement){
      zero(n,'top');
    }
    const list=firstRow.parentElement;
    if(list){
      list.style.setProperty('margin-top','0','important');
      list.style.setProperty('padding-top','0','important');
    }
    return true;
  }
  let tries=0;
  const timer=setInterval(()=>{tries++;if(apply()||tries>100)clearInterval(timer)},100);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
})();