(()=>{
  const STYLE_ID='club999-clarity-heading-v69';
  const TARGET='А ясности всё равно нет';

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .clarity.section{padding-top:14px!important}
        .clarity .section-heading--split{
          display:block!important;
          margin-bottom:18px!important;
          text-align:center!important;
        }
        .clarity .section-heading--split>div{width:100%!important}
        .clarity .section-kicker{
          margin:0 0 8px!important;
          text-align:center!important;
          font-size:10px!important;
          line-height:1.2!important;
          letter-spacing:.14em!important;
        }
        .clarity .section-heading h2.clarity-title-v69{
          width:100%!important;
          max-width:none!important;
          margin:0 auto!important;
          padding:0!important;
          text-align:center!important;
          font-family:"Cormorant Garamond","Iowan Old Style","Palatino Linotype","Book Antiqua",Georgia,serif!important;
          font-size:clamp(26px,7.25vw,31px)!important;
          font-weight:600!important;
          line-height:1.02!important;
          letter-spacing:-.015em!important;
          white-space:nowrap!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
          text-wrap:initial!important;
        }
        .clarity .section-heading--split>p{
          max-width:34ch!important;
          margin:12px auto 0!important;
          text-align:center!important;
          font-size:15px!important;
          font-weight:430!important;
          line-height:1.45!important;
        }
      }
      @media(max-width:350px){
        .clarity .section-heading h2.clarity-title-v69{font-size:25px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    const heading=[...document.querySelectorAll('.clarity h2')].find(el=>(el.textContent||'').replace(/\s+/g,' ').trim()===TARGET);
    if(!heading) return false;
    heading.className='clarity-title-v69';
    heading.textContent=TARGET;
    return true;
  }

  if(!apply()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(apply()||attempts>=50) clearInterval(timer);
    },100);
  }
})();