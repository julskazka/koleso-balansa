(()=>{
  const STYLE_ID='club999-v207-spacing-five-points';
  document.getElementById(STYLE_ID)?.remove();
  const style=document.createElement('style');
  style.id=STYLE_ID;
  style.textContent=`
    @media(max-width:700px){
      /* 1. More air before «Точки входа…» */
      html body #directions.section{
        padding-top:28px!important;
      }

      /* 2. More air before «Темы пересекаются…» */
      html body .club999-cross-section-v103{
        padding-top:34px!important;
      }

      /* 3. More air after «Кому подойдёт» heading before the cards */
      html body .section:has(.audience__intro) .audience__intro{
        margin-bottom:26px!important;
      }

      /* 4. More air between «Полный доступ…» and its CTA */
      html body .section:has(.access__card) .access__copy h2,
      html body .access__copy h2{
        margin-bottom:8px!important;
      }

      /* 5. Remove the oversized empty tail after subscription list */
      html body .section:has(.club999-subscription-list-v183),
      html body .section:has(.club999-subscription-card-v183){
        min-height:0!important;
        height:auto!important;
        padding-bottom:6px!important;
        margin-bottom:0!important;
      }
      html body .club999-subscription-v183,
      html body .club999-subscription-shell-flat-v191,
      html body .club999-subscription-list-v183{
        min-height:0!important;
        height:auto!important;
        margin-bottom:0!important;
        padding-bottom:0!important;
      }
      html body .section.final{
        margin-top:14px!important;
      }
    }

    @media(max-width:380px){
      html body #directions.section{padding-top:25px!important}
      html body .club999-cross-section-v103{padding-top:31px!important}
      html body .section:has(.audience__intro) .audience__intro{margin-bottom:23px!important}
      html body .section.final{margin-top:12px!important}
    }
  `;
  document.head.appendChild(style);

  function collapseSubscriptionTail(){
    const list=document.querySelector('.club999-subscription-list-v183') ||
      [...document.querySelectorAll('.club999-unified-list-v190')].find(el=>el.querySelector('.club999-subscription-card-v183'));
    if(!list) return;

    const section=list.closest('.section,section');
    if(!section) return;

    section.style.setProperty('min-height','0','important');
    section.style.setProperty('height','auto','important');
    section.style.setProperty('padding-bottom','6px','important');
    section.style.setProperty('margin-bottom','0','important');

    /* Kill only empty visual/spacer siblings after the subscription list. */
    let branch=list;
    while(branch.parentElement && branch.parentElement!==section){
      const parent=branch.parentElement;
      let node=branch.nextElementSibling;
      while(node){
        const text=(node.textContent||'').replace(/\s+/g,' ').trim();
        const hasMedia=!!node.querySelector?.('img,video,canvas,svg');
        const rect=node.getBoundingClientRect();
        if(!text && !hasMedia && rect.height>24){
          node.style.setProperty('display','none','important');
          node.style.setProperty('height','0','important');
          node.style.setProperty('min-height','0','important');
          node.style.setProperty('margin','0','important');
          node.style.setProperty('padding','0','important');
        }
        node=node.nextElementSibling;
      }
      branch=parent;
    }
  }

  collapseSubscriptionTail();
})();
