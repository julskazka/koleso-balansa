(()=>{
  const STYLE_ID='club999-clarity-heading-v71';
  const TARGET='А ясности всё равно нет';
  const SUBTITLE='Можно сохранять посты, смотреть эфиры и читать советы разных специалистов — и при этом так и не понять, с чего начать именно сейчас';

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .clarity.section{padding-top:18px!important}
        .clarity .section-heading--split{
          display:block!important;
          margin-bottom:18px!important;
          text-align:center!important;
        }
        .clarity .section-heading--split>div{width:100%!important}
        .clarity .section-kicker{
          margin:0 0 10px!important;
          text-align:center!important;
          color:#e2c570!important;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
          font-size:12px!important;
          font-weight:760!important;
          line-height:1.35!important;
          letter-spacing:.19em!important;
          text-transform:uppercase!important;
        }
        .clarity .section-heading h2.clarity-title-v71{
          width:100%!important;
          max-width:none!important;
          margin:0!important;
          padding:0!important;
          text-align:center!important;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
          font-size:clamp(32px,8.5vw,39px)!important;
          font-weight:740!important;
          line-height:1.02!important;
          letter-spacing:-.036em!important;
          color:#f3d98f!important;
          background:linear-gradient(180deg,#fff4c5 0%,#f3d98f 48%,#d8ad56 100%)!important;
          -webkit-background-clip:text!important;
          background-clip:text!important;
          -webkit-text-fill-color:transparent!important;
          text-shadow:none!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
          text-wrap:initial!important;
        }
        .clarity .section-heading h2.clarity-title-v71 .clarity-title-line-v71{
          display:block!important;
          width:max-content!important;
          max-width:100%!important;
          margin:0 auto!important;
          white-space:nowrap!important;
          word-break:keep-all!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
        }
        .clarity .section-heading--split>p.clarity-subtitle-v72{
          display:block!important;
          width:100%!important;
          max-width:none!important;
          box-sizing:border-box!important;
          margin:13px 0 0!important;
          padding:0!important;
          text-align:center!important;
          font-size:15px!important;
          font-weight:430!important;
          line-height:1.45!important;
          word-break:normal!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
        }
      }
      @media(max-width:350px){
        .clarity .section-heading h2.clarity-title-v71{font-size:30px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    injectStyle();
    const section=document.querySelector('.clarity');
    if(!section) return false;
    const heading=[...section.querySelectorAll('h2')]
      .find(el=>(el.textContent||'').replace(/\s+/g,' ').trim()===TARGET);
    if(!heading) return false;
    heading.className='clarity-title-v71';
    heading.innerHTML='<span class="clarity-title-line-v71">А ясности всё</span><span class="clarity-title-line-v71">равно нет</span>';
    const subtitle=section.querySelector('.section-heading--split>p');
    if(subtitle){
      subtitle.classList.add('clarity-subtitle-v72');
      subtitle.textContent=SUBTITLE;
    }
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