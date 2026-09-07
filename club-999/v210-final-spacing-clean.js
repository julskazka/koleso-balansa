(()=>{
  const STYLE_ID='club999-v210-final-spacing-clean';
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  function inject(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      html,body{overflow-x:hidden!important}

      @media(max-width:700px){
        html body .section:not(.hero):not(.final){
          margin-top:0!important;
          margin-bottom:0!important;
          padding-top:22px!important;
          padding-bottom:22px!important;
        }
        html body .clarity.section{padding-top:16px!important;padding-bottom:22px!important}
        html body #directions.section{padding-top:28px!important;padding-bottom:22px!important}
        html body .club999-cross-section-v103{padding-top:30px!important;padding-bottom:22px!important}
        html body .club999-whofor-section-v136,
        html body .section:has(.audience__intro){padding-top:28px!important;padding-bottom:24px!important}
        html body .section:has(.access__card),
        html body #access.section,
        html body .access.section{padding-top:28px!important;padding-bottom:24px!important}

        html body .section:not(.hero) .section-kicker{
          margin-top:0!important;
          margin-bottom:8px!important;
        }
        html body .section:not(.hero) .section-heading,
        html body .section:not(.hero) .section-heading--split,
        html body .section:not(.hero) .directions__heading{
          margin-top:0!important;
          margin-bottom:18px!important;
        }
        html body .section:not(.hero) .audience__intro{
          margin-top:0!important;
          margin-bottom:22px!important;
        }
        html body .section:not(.hero) .section-heading>p:last-child,
        html body .section:not(.hero) .section-heading--split>p,
        html body .section:not(.hero) .directions__heading>p:last-child{
          margin-top:10px!important;
          margin-bottom:0!important;
        }

        html body .access__copy>p:not(.section-kicker):not(.button-note){
          margin-top:12px!important;
          margin-bottom:0!important;
        }
        html body .access__copy .club999-v168-cta,
        html body .access__copy [data-purchase],
        html body .access__copy .button--primary{
          margin-top:22px!important;
        }

        html body .club999-subscription-v183{
          margin-top:0!important;
          margin-bottom:0!important;
        }
        html body .club999-subscription-list-v183,
        html body .club999-subscription-v183 .club999-unified-list-v190{
          margin-top:12px!important;
          margin-bottom:0!important;
        }

        html body .section.final{
          margin-top:24px!important;
          margin-bottom:max(16px,env(safe-area-inset-bottom))!important;
          padding-top:30px!important;
          padding-bottom:26px!important;
          overflow:hidden!important;
          overflow-x:hidden!important;
        }
        html body .section.final .section-kicker{margin-bottom:8px!important}
        html body .section.final h2{margin-top:0!important;margin-bottom:0!important}
        html body .section.final>p:not(.section-kicker):not(.button-note){
          margin-top:14px!important;
          margin-bottom:22px!important;
        }
      }

      @media(max-width:380px){
        html body .section:not(.hero):not(.final){padding-top:20px!important;padding-bottom:20px!important}
        html body .clarity.section{padding-top:14px!important;padding-bottom:20px!important}
        html body #directions.section{padding-top:26px!important;padding-bottom:20px!important}
        html body .club999-cross-section-v103{padding-top:28px!important;padding-bottom:20px!important}
        html body .club999-whofor-section-v136,
        html body .section:has(.audience__intro){padding-top:26px!important;padding-bottom:22px!important}
        html body .section:has(.access__card),
        html body #access.section,
        html body .access.section{padding-top:26px!important;padding-bottom:22px!important}
        html body .section.final{margin-top:22px!important;padding-top:28px!important;padding-bottom:24px!important}
      }

      @media(min-width:701px){
        html body .section:not(.hero):not(.final){
          margin-top:0!important;
          margin-bottom:0!important;
          padding-top:42px!important;
          padding-bottom:42px!important;
        }
        html body .clarity.section{padding-top:34px!important;padding-bottom:40px!important}
        html body #directions.section{padding-top:46px!important;padding-bottom:40px!important}
        html body .club999-cross-section-v103{padding-top:48px!important;padding-bottom:40px!important}
        html body .club999-whofor-section-v136,
        html body .section:has(.audience__intro){padding-top:46px!important;padding-bottom:42px!important}
        html body .section:has(.access__card),
        html body #access.section,
        html body .access.section{padding-top:46px!important;padding-bottom:42px!important}
        html body .section.final{margin-top:34px!important;margin-bottom:28px!important;padding-top:46px!important;padding-bottom:38px!important}
      }
    `;
    document.head.appendChild(s);
  }

  function applyInlineFixes(){
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    const mobile=w<=700;
    const tiny=w<=380;

    document.querySelectorAll('.section:not(.hero):not(.final)').forEach(section=>{
      if(section.closest('.modal,[role="dialog"]')) return;
      set(section,'margin-top','0px');
      set(section,'margin-bottom','0px');
    });

    const audience=document.querySelector('.club999-whofor-section-v136') || document.querySelector('.audience__intro')?.closest('.section,section');
    if(audience){
      set(audience,'padding-top',mobile?(tiny?'26px':'28px'):'46px');
      set(audience,'padding-bottom',mobile?(tiny?'22px':'24px'):'42px');
      const intro=audience.querySelector('.audience__intro');
      if(intro) set(intro,'margin-bottom',mobile?'22px':'28px');
    }

    const access=document.querySelector('.access__card')?.closest('.section,section') || document.getElementById('access');
    if(access){
      set(access,'padding-top',mobile?(tiny?'26px':'28px'):'46px');
      set(access,'padding-bottom',mobile?(tiny?'22px':'24px'):'42px');
      const btn=[...access.querySelectorAll('button,a,[data-purchase]')].find(el=>norm(el.textContent).includes('вступить в клуб за 999'));
      if(btn) set(btn,'margin-top',mobile?'22px':'28px');
    }

    const subRow=document.querySelector('.club999-subscription-card-v183');
    const subscription=subRow?.closest('.section,section');
    if(subscription){
      set(subscription,'padding-top',mobile?(tiny?'20px':'22px'):'38px');
      set(subscription,'padding-bottom',mobile?(tiny?'18px':'20px'):'34px');
      set(subscription,'margin-bottom','0px');
    }

    const final=document.querySelector('.section.final');
    if(final){
      set(final,'margin-top',mobile?(tiny?'22px':'24px'):'34px');
      set(final,'margin-bottom',mobile?'max(16px, env(safe-area-inset-bottom))':'28px');
      set(final,'overflow','hidden');
      set(final,'overflow-x','hidden');
    }
  }

  inject();
  applyInlineFixes();
})();
