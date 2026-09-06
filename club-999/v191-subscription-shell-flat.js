(()=>{
  const STYLE_ID='club999-subscription-shell-flat-v191-style';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–-]/g,'');
  const TARGETS=[
    'всешестьнаправленийклуба',
    'записиконференцийиэфиров',
    'экспертныеипрактическиематериалы',
    'новыевстречиипубликации',
    'форматывопросовиответов',
    'дниэксперта',
    'знакомствосновымиспециалистами',
    'доступкклубномупространству'
  ];

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-subscription-shell-flat-v191{
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        margin-left:0!important;
        margin-right:0!important;
        padding-left:0!important;
        padding-right:0!important;
        border:0!important;
        border-radius:0!important;
        background:transparent!important;
        box-shadow:none!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
        overflow:visible!important;
        box-sizing:border-box!important;
      }
      .club999-subscription-shell-flat-v191::before,
      .club999-subscription-shell-flat-v191::after{
        content:none!important;
        display:none!important;
      }
      .club999-subscription-shell-flat-v191 .club999-unified-list-v190{
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        margin-left:0!important;
        margin-right:0!important;
        padding-left:0!important;
        padding-right:0!important;
        box-sizing:border-box!important;
      }
      .club999-subscription-shell-flat-v191 .club999-unified-row-v190{
        width:100%!important;
        max-width:100%!important;
        min-width:0!important;
        box-sizing:border-box!important;
      }
      @media(max-width:700px){
        .club999-subscription-shell-flat-v191{padding-left:0!important;padding-right:0!important}
      }
    `;
    document.head.appendChild(style);
  }

  function findShell(){
    const title=[...document.querySelectorAll('body *')]
      .filter(el=>{
        const t=compact(el.textContent);
        return t==='вподпискувходят' || t==='вподпискувходят:';
      })
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0];
    if(!title) return null;

    let node=title.parentElement;
    let best=null;
    for(let i=0;i<10&&node&&node!==document.body;i++,node=node.parentElement){
      const t=compact(node.textContent);
      const count=TARGETS.filter(x=>t.includes(x)).length;
      if(count>=6){
        best=node;
        const r=node.getBoundingClientRect();
        const cs=getComputedStyle(node);
        const border=Math.max(parseFloat(cs.borderTopWidth)||0,parseFloat(cs.borderLeftWidth)||0);
        const radius=parseFloat(cs.borderRadius)||0;
        if(r.width>240 && r.width<430 && (border>0 || radius>=12)) return node;
      }
    }
    return best;
  }

  function apply(){
    injectStyle();
    const shell=findShell();
    if(!shell) return false;
    shell.classList.add('club999-subscription-shell-flat-v191');
    shell.style.setProperty('width','100%','important');
    shell.style.setProperty('max-width','100%','important');
    shell.style.setProperty('min-width','0','important');
    shell.style.setProperty('margin-left','0','important');
    shell.style.setProperty('margin-right','0','important');
    shell.style.setProperty('padding-left','0','important');
    shell.style.setProperty('padding-right','0','important');
    shell.style.setProperty('border','0','important');
    shell.style.setProperty('border-radius','0','important');
    shell.style.setProperty('background','transparent','important');
    shell.style.setProperty('box-shadow','none','important');
    shell.style.setProperty('backdrop-filter','none','important');
    shell.style.setProperty('-webkit-backdrop-filter','none','important');
    shell.style.setProperty('overflow','visible','important');

    const list=shell.querySelector('.club999-unified-list-v190');
    if(list){
      list.style.setProperty('width','100%','important');
      list.style.setProperty('max-width','100%','important');
      list.style.setProperty('margin-left','0','important');
      list.style.setProperty('margin-right','0','important');
      list.style.setProperty('padding-left','0','important');
      list.style.setProperty('padding-right','0','important');
    }
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries++;
    apply();
    if(tries>=80) clearInterval(timer);
  },120);
  requestAnimationFrame(()=>requestAnimationFrame(apply));
  [250,600,1200,2200,4000,6500].forEach(ms=>setTimeout(apply,ms));
})();
