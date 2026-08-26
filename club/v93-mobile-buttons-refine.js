(()=>{
  const STYLE_ID='club-mobile-buttons-refine-v93';
  const BUTTON_CLASS='club-mobile-button-refined-v93';
  const MOBILE_QUERY='(max-width:700px)';

  const ctaWords=[
    'получить','попробовать','открыть доступ','получить доступ','присоединиться',
    'вступить','начать','купить','оплатить','забронировать','перейти','за 1 ₽','за 1 руб'
  ];

  function normalize(value){
    return (value||'').replace(/\s+/g,' ').trim().toLowerCase();
  }

  function addStyles(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      @media(max-width:700px){
        .hero-premium-cta,
        .${BUTTON_CLASS}{
          min-height:44px!important;
          height:auto!important;
          padding-top:9px!important;
          padding-bottom:9px!important;
          border-radius:13px!important;
          font-weight:700!important;
          line-height:1.16!important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.58),
            inset 0 7px 12px rgba(255,255,255,.11),
            inset 0 -8px 13px rgba(1,25,31,.14),
            0 5px 13px rgba(0,14,20,.20)!important;
          -webkit-tap-highlight-color:transparent;
        }

        .hero-premium-cta:active,
        .${BUTTON_CLASS}:active{
          transform:translateY(1px) scale(.992)!important;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.40),
            inset 0 5px 9px rgba(255,255,255,.08),
            inset 0 -5px 10px rgba(1,25,31,.16),
            0 2px 7px rgba(0,14,20,.18)!important;
        }
      }

      @media(max-width:390px){
        .hero-premium-cta,
        .${BUTTON_CLASS}{
          min-height:42px!important;
          padding-top:8px!important;
          padding-bottom:8px!important;
          border-radius:12px!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function isExcluded(element){
    return Boolean(element.closest([
      '.club-mobile-scroll-cue-v90',
      '.popup-bottom-close-wrap-v80',
      '.inside-card',
      '.quick-choice',
      '.inside-popup-sheet',
      '.topic-popup-layer',
      '[data-popup-close]',
      '[data-topic-popup-close]'
    ].join(',')));
  }

  function looksLikeMainButton(element){
    if(isExcluded(element)) return false;

    const text=normalize(element.textContent || element.value);
    if(!text || text.length<4 || text.length>95) return false;

    const className=normalize(typeof element.className==='string' ? element.className : '');
    const hasCtaClass=/(^|\s|[-_])(cta|btn|button|buy|pay|order|offer|access|trial)(\s|[-_]|$)/.test(className);
    const hasCtaText=ctaWords.some(word=>text.includes(word));

    return hasCtaClass || hasCtaText;
  }

  function apply(root=document){
    if(!window.matchMedia(MOBILE_QUERY).matches) return;
    addStyles();

    const elements=[];
    if(root.nodeType===Node.ELEMENT_NODE && root.matches?.('a,button,[role="button"],input[type="button"],input[type="submit"]')){
      elements.push(root);
    }
    root.querySelectorAll?.('a,button,[role="button"],input[type="button"],input[type="submit"]').forEach(el=>elements.push(el));

    elements.forEach(element=>{
      if(looksLikeMainButton(element)) element.classList.add(BUTTON_CLASS);
    });
  }

  apply();

  const observer=new MutationObserver(mutations=>{
    mutations.forEach(mutation=>{
      mutation.addedNodes.forEach(node=>{
        if(node.nodeType===Node.ELEMENT_NODE) apply(node);
      });
    });
  });

  observer.observe(document.documentElement,{childList:true,subtree:true});
  window.addEventListener('resize',()=>apply(),{passive:true});
})();
