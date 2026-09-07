(()=>{
  const STYLE_ID='club999-v208-final-spacing-system';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  const compact=s=>norm(s).replace(/\s+/g,'').replace(/[«»"'.,:;!?—–·-]/g,'');
  const set=(el,p,v)=>el&&el.style.setProperty(p,v,'important');

  function smallestByText(text,root=document){
    const wanted=compact(text);
    return [...root.querySelectorAll('h1,h2,h3,p,div,span,strong,b')]
      .filter(el=>compact(el.textContent)===wanted)
      .sort((a,b)=>a.querySelectorAll('*').length-b.querySelectorAll('*').length)[0]||null;
  }
  function sectionFor(el){return el?.closest?.('section,.section')||null}

  function mark(){
    const clarity=document.querySelector('.clarity.section') || sectionFor(smallestByText('А ясности всё равно нет'));
    const directions=document.getElementById('directions') || sectionFor(smallestByText('Точки входа в ваш актуальный запрос'));
    const cross=document.querySelector('.club999-cross-section-v103') || sectionFor(smallestByText('Темы пересекаются и дополняют друг друга'));
    const audience=sectionFor(smallestByText('Кому подойдёт'));
    const access=sectionFor(smallestByText('Полный доступ к «Центру Ресурса»')) || sectionFor(smallestByText('Полный доступ к "Центру Ресурса"'));
    const subRow=document.querySelector('.club999-subscription-card-v183');
    const subscription=subRow?.closest('section,.section')||null;
    const finalKicker=smallestByText('Ваша точка опоры');
    const final=sectionFor(finalKicker) || document.querySelector('.section.final');

    clarity?.classList.add('v208-clarity');
    directions?.classList.add('v208-directions');
    cross?.classList.add('v208-cross');
    audience?.classList.add('v208-audience');
    access?.classList.add('v208-access');
    subscription?.classList.add('v208-subscription');
    final?.classList.add('v208-final');

    return {clarity,directions,cross,audience,access,subscription,final};
  }

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const s=document.createElement('style');
    s.id=STYLE_ID;
    s.textContent=`
      html,body{overflow-x:hidden!important}
      html body .v208-clarity,
      html body .v208-directions,
      html body .v208-cross,
      html body .v208-audience,
      html body .v208-access,
      html body .v208-subscription,
      html body .v208-final{
        box-sizing:border-box!important;
        min-height:0!important;
        height:auto!important;
        margin-bottom:0!important;
      }

      @media(max-width:700px){
        html body .v208-clarity{padding-top:24px!important;padding-bottom:22px!important}
        html body .v208-directions{padding-top:26px!important;padding-bottom:22px!important}
        html body .v208-cross{padding-top:30px!important;padding-bottom:24px!important}
        html body .v208-audience{padding-top:26px!important;padding-bottom:24px!important}
        html body .v208-access{padding-top:26px!important;padding-bottom:22px!important}
        html body .v208-subscription{padding-top:22px!important;padding-bottom:20px!important}
        html body .v208-final{
          min-height:0!important;height:auto!important;
          margin-top:24px!important;
          margin-bottom:max(16px,env(safe-area-inset-bottom))!important;
          padding-top:28px!important;padding-bottom:24px!important;
          overflow:hidden!important;overflow-x:hidden!important;
        }

        html body .v208-directions .section-kicker,
        html body .v208-cross .section-kicker,
        html body .v208-audience .section-kicker,
        html body .v208-access .section-kicker,
        html body .v208-subscription .section-kicker,
        html body .v208-final .section-kicker{
          margin-top:0!important;
          margin-bottom:8px!important;
        }
        html body .v208-directions h2,
        html body .v208-cross h2,
        html body .v208-audience h2,
        html body .v208-access h2,
        html body .v208-subscription h2,
        html body .v208-final h2{
          margin-top:0!important;
        }
        html body .v208-directions .directions__heading,
        html body .v208-audience .audience__intro{
          margin-bottom:20px!important;
        }
        html body .v208-cross .connection__copy>p:not(.section-kicker){
          margin-top:12px!important;
          margin-bottom:0!important;
        }
        html body .v208-access .access__copy>p:not(.section-kicker):not(.button-note){
          margin-top:12px!important;
          margin-bottom:0!important;
        }
        html body .v208-subscription .club999-subscription-list-v183,
        html body .v208-subscription .club999-unified-list-v190{
          margin-top:14px!important;
          margin-bottom:0!important;
        }
        html body .v208-final .club999-v168-cta,
        html body .v208-final button,
        html body .v208-final a[role="button"]{
          max-width:100%!important;
          box-sizing:border-box!important;
        }
      }

      @media(max-width:380px){
        html body .v208-clarity{padding-top:22px!important;padding-bottom:20px!important}
        html body .v208-directions{padding-top:24px!important;padding-bottom:20px!important}
        html body .v208-cross{padding-top:28px!important;padding-bottom:22px!important}
        html body .v208-audience{padding-top:24px!important;padding-bottom:22px!important}
        html body .v208-access{padding-top:24px!important;padding-bottom:20px!important}
        html body .v208-subscription{padding-top:20px!important;padding-bottom:18px!important}
        html body .v208-final{margin-top:22px!important;padding-top:26px!important;padding-bottom:22px!important}
      }

      @media(min-width:701px){
        html body .v208-clarity{padding-top:42px!important;padding-bottom:38px!important}
        html body .v208-directions{padding-top:44px!important;padding-bottom:40px!important}
        html body .v208-cross{padding-top:48px!important;padding-bottom:42px!important}
        html body .v208-audience{padding-top:44px!important;padding-bottom:40px!important}
        html body .v208-access{padding-top:44px!important;padding-bottom:40px!important}
        html body .v208-subscription{padding-top:40px!important;padding-bottom:36px!important}
        html body .v208-final{margin-top:36px!important;margin-bottom:28px!important;min-height:0!important;height:auto!important}
      }
    `;
    document.head.appendChild(s);
  }

  let guarded=false;
  function enforce(){
    if(guarded) return;
    guarded=true;
    const w=Math.round(window.visualViewport?.width||document.documentElement.clientWidth||innerWidth||390);
    const {clarity,directions,cross,audience,access,subscription,final}=mark();
    const mobile=w<=700;
    const tiny=w<=380;

    const spacing=mobile?{
      clarity:[tiny?22:24,tiny?20:22],
      directions:[tiny?24:26,tiny?20:22],
      cross:[tiny?28:30,tiny?22:24],
      audience:[tiny?24:26,tiny?22:24],
      access:[tiny?24:26,tiny?20:22],
      subscription:[tiny?20:22,tiny?18:20]
    }:{clarity:[42,38],directions:[44,40],cross:[48,42],audience:[44,40],access:[44,40],subscription:[40,36]};

    [[clarity,'clarity'],[directions,'directions'],[cross,'cross'],[audience,'audience'],[access,'access'],[subscription,'subscription']].forEach(([el,key])=>{
      if(!el) return;
      set(el,'min-height','0');set(el,'height','auto');
      set(el,'margin-top','0');set(el,'margin-bottom','0');
      set(el,'padding-top',spacing[key][0]+'px');
      set(el,'padding-bottom',spacing[key][1]+'px');
    });

    if(audience){
      const intro=audience.querySelector('.audience__intro');
      if(intro) set(intro,'margin-bottom',mobile?'20px':'26px');
    }

    if(access){
      const btn=[...access.querySelectorAll('button,a,[data-purchase]')].find(el=>norm(el.textContent).includes('вступить в клуб за 999'));
      if(btn){set(btn,'margin-top',mobile?'24px':'28px')}
    }

    if(subscription){
      set(subscription,'overflow','visible');
      const list=subscription.querySelector('.club999-subscription-list-v183,.club999-unified-list-v190');
      if(list){set(list,'margin-bottom','0')}
    }

    if(final){
      set(final,'min-height','0');set(final,'height','auto');
      set(final,'margin-top',mobile?(tiny?'22px':'24px'):'36px');
      set(final,'margin-bottom',mobile?'max(16px, env(safe-area-inset-bottom))':'28px');
      set(final,'padding-top',mobile?(tiny?'26px':'28px'):'46px');
      set(final,'padding-bottom',mobile?(tiny?'22px':'24px'):'38px');
      set(final,'overflow','hidden');set(final,'overflow-x','hidden');
      const buttons=[...final.querySelectorAll('.club999-v168-cta,button,a[role="button"],a[data-purchase]')];
      buttons.forEach(btn=>{
        set(btn,'width','100%');set(btn,'max-width','100%');
        set(btn,'margin-left','0');set(btn,'margin-right','0');
        set(btn,'left','auto');set(btn,'right','auto');
        set(btn,'transform','none');set(btn,'translate','none');
        set(btn,'box-sizing','border-box');
      });
    }
    guarded=false;
  }

  injectStyle();
  enforce();

  const observer=new MutationObserver(mutations=>{
    if(guarded) return;
    const relevant=mutations.some(m=>{
      const el=m.target?.nodeType===1?m.target:m.target?.parentElement;
      return el?.closest?.('.v208-audience,.v208-access,.v208-subscription,.v208-final');
    });
    if(relevant) enforce();
  });
  observer.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['style','class']});

  addEventListener('resize',enforce,{passive:true});
  if(window.visualViewport) visualViewport.addEventListener('resize',enforce,{passive:true});
})();