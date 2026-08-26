(() => {
  const css = `
    /* V76 visual corrections */
    .hero-premium-shell::after{
      content:"" !important;
      position:absolute !important;
      top:44px !important;
      right:29% !important;
      width:18% !important;
      height:62% !important;
      pointer-events:none !important;
      z-index:3 !important;
      background:linear-gradient(90deg,rgba(4,39,48,.94) 0%,rgba(4,39,48,.68) 34%,rgba(4,39,48,.18) 68%,rgba(4,39,48,0) 100%) !important;
      filter:blur(14px) !important;
      opacity:.9 !important;
    }
    .hero-premium-figure{
      -webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.12) 8%,rgba(0,0,0,.54) 18%,rgba(0,0,0,.92) 29%,rgba(0,0,0,1) 40%,rgba(0,0,0,1) 100%) !important;
      mask-image:linear-gradient(90deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.12) 8%,rgba(0,0,0,.54) 18%,rgba(0,0,0,.92) 29%,rgba(0,0,0,1) 40%,rgba(0,0,0,1) 100%) !important;
      -webkit-mask-repeat:no-repeat !important;
      mask-repeat:no-repeat !important;
    }
    .quick-choice .choice{
      display:flex !important;
      flex-direction:column !important;
      align-items:center !important;
      justify-content:flex-start !important;
    }
    .quick-choice .choice > div:last-child{
      width:100% !important;
      display:flex !important;
      flex-direction:column !important;
      align-items:center !important;
      justify-content:flex-start !important;
      text-align:center !important;
    }
    .quick-choice .choice strong{
      display:flex !important;
      align-items:flex-end !important;
      justify-content:center !important;
      min-height:2.7em !important;
    }
    .quick-choice .choice span{
      display:flex !important;
      align-items:flex-start !important;
      justify-content:center !important;
      min-height:3.1em !important;
    }
    #insideCenterSection .inside-card__tap-badge{
      width:34px !important;
      min-width:34px !important;
      height:34px !important;
      padding:0 !important;
      border-radius:50% !important;
      font-size:24px !important;
      font-weight:500 !important;
      line-height:1 !important;
      letter-spacing:0 !important;
      text-transform:none !important;
      background:radial-gradient(circle at 35% 30%,rgba(255,248,220,.32),rgba(238,194,81,.18) 42%,rgba(7,49,59,.92) 100%) !important;
      text-shadow:none !important;
    }
    .seven-days-results__emblem{display:none !important;}
    @media (max-width:768px){
      .hero-premium-shell::after{
        top:56px !important;
        right:31% !important;
        width:20% !important;
        height:58% !important;
      }
    }
    @media (max-width:390px){
      .quick-choice .choice strong{min-height:2.8em !important;}
      .quick-choice .choice span{min-height:3.3em !important;}
      #insideCenterSection .inside-card__tap-badge{
        width:30px !important;
        min-width:30px !important;
        height:30px !important;
        padding:0 !important;
        font-size:22px !important;
      }
    }
  `;

  const apply = () => {
    if (!document.getElementById('v76-visual-fixes')) {
      const style = document.createElement('style');
      style.id = 'v76-visual-fixes';
      style.textContent = css;
      document.head.appendChild(style);
    }
    document.querySelectorAll('#insideCenterSection .inside-card__tap-badge').forEach((badge) => {
      badge.textContent = '+';
    });
    document.querySelectorAll('.seven-days-results__emblem').forEach((emblem) => emblem.remove());
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply, { once: true });
  } else {
    apply();
  }
})();