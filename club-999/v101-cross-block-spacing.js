(()=>{
  const STYLE_ID='club999-cross-block-spacing-v101';

  function markTarget(){
    const heading=[...document.querySelectorAll('h2')].find(el=>
      (el.textContent||'').replace(/\s+/g,' ').trim().includes('Темы пересекаются')
    );
    if(!heading) return false;

    const section=heading.closest('.section') || heading.closest('section') || heading.parentElement;
    if(!section) return false;

    section.classList.add('club999-cross-block-v101');
    const copy=heading.closest('.connection__copy') || heading.parentElement;
    if(copy) copy.classList.add('club999-cross-copy-v101');
    return true;
  }

  function addStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        #directions.directions.section,
        .directions.section#directions{
          padding-bottom:12px!important;
        }
        .club999-cross-block-v101{
          padding-top:18px!important;
          padding-left:max(18px,env(safe-area-inset-left))!important;
          padding-right:max(18px,env(safe-area-inset-right))!important;
          box-sizing:border-box!important;
        }
        .club999-cross-block-v101 .club999-cross-copy-v101{
          width:100%!important;
          max-width:38rem!important;
          margin-left:auto!important;
          margin-right:auto!important;
          padding-left:0!important;
          padding-right:0!important;
          box-sizing:border-box!important;
        }
        .club999-cross-block-v101 h2{
          max-width:100%!important;
          margin-left:auto!important;
          margin-right:auto!important;
          overflow-wrap:normal!important;
          word-break:normal!important;
          hyphens:none!important;
          text-wrap:balance!important;
        }
        .club999-cross-block-v101 .club999-cross-copy-v101>p{
          max-width:35ch!important;
          margin-left:auto!important;
          margin-right:auto!important;
          box-sizing:border-box!important;
        }
      }

      @media(min-width:701px){
        #directions.directions.section,
        .directions.section#directions{
          padding-bottom:28px!important;
        }
        .club999-cross-block-v101{
          padding-top:42px!important;
          padding-left:32px!important;
          padding-right:32px!important;
          box-sizing:border-box!important;
        }
        .club999-cross-block-v101 .club999-cross-copy-v101{
          width:min(100%,760px)!important;
          max-width:760px!important;
          margin-left:auto!important;
          margin-right:auto!important;
          box-sizing:border-box!important;
        }
        .club999-cross-block-v101 h2,
        .club999-cross-block-v101 .club999-cross-copy-v101>p{
          max-width:100%!important;
          margin-left:auto!important;
          margin-right:auto!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    let tries=0;
    const timer=setInterval(()=>{
      tries+=1;
      const done=markTarget();
      if(done || tries>=20) clearInterval(timer);
    },150);
    markTarget();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
