(()=>{
  const STYLE_ID='club999-clarity-title-v68';
  const TARGET='А ясности всё равно нет';

  function addStyles(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .clarity .section-heading h2.clarity-title-v68{
          width:100%!important;
          max-width:none!important;
          margin:0!important;
          font-size:clamp(29px,7.9vw,33px)!important;
          line-height:.98!important;
          letter-spacing:-.025em!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
          text-wrap:initial!important;
        }
        .clarity .section-heading h2.clarity-title-v68 .clarity-title-line-v68{
          display:block!important;
          width:max-content!important;
          max-width:100%!important;
          white-space:nowrap!important;
          word-break:keep-all!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function fixTitle(){
    addStyles();
    const headings=[...document.querySelectorAll('.clarity h2, .clarity .section-heading h2')];
    const heading=headings.find(el=>(el.textContent||'').replace(/\s+/g,' ').trim()===TARGET);
    if(!heading) return false;
    heading.classList.add('clarity-title-v68');
    heading.innerHTML='<span class="clarity-title-line-v68">А ясности всё</span><span class="clarity-title-line-v68">равно нет</span>';
    return true;
  }

  if(!fixTitle()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(fixTitle()||attempts>=40) clearInterval(timer);
    },100);
  }
})();
