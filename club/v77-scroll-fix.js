(() => {
  const css = `
    /* V77 Mini App popup scrolling */
    .inside-popup-layer{
      top:0 !important;
      right:0 !important;
      bottom:auto !important;
      left:0 !important;
      width:100% !important;
      height:var(--popup-viewport-height, 100dvh) !important;
      max-height:var(--popup-viewport-height, 100dvh) !important;
      box-sizing:border-box !important;
      overflow:hidden !important;
      touch-action:none !important;
    }
    .inside-popup-sheet{
      min-height:0 !important;
      max-height:calc(var(--popup-viewport-height, 100dvh) - 20px) !important;
      overflow-x:hidden !important;
      overflow-y:auto !important;
      -webkit-overflow-scrolling:touch !important;
      overscroll-behavior-y:contain !important;
      touch-action:pan-y !important;
      scrollbar-gutter:stable !important;
    }
    .inside-popup-sheet__content{
      overflow:visible !important;
      min-height:0 !important;
    }
    .inside-popup-sheet__body,
    .inside-popup-sheet__body .bullet-box{
      touch-action:pan-y !important;
    }
    html.inside-popup-open,
    body.inside-popup-open{
      overscroll-behavior:none !important;
    }
    @media (min-width:680px){
      .inside-popup-sheet{
        max-height:calc(var(--popup-viewport-height, 100dvh) - 48px) !important;
      }
    }
    @supports not (height:100dvh){
      .inside-popup-layer{
        height:var(--popup-viewport-height, 100vh) !important;
        max-height:var(--popup-viewport-height, 100vh) !important;
      }
      .inside-popup-sheet{
        max-height:calc(var(--popup-viewport-height, 100vh) - 20px) !important;
      }
    }
  `;

  function setViewportHeight(){
    const viewport = window.visualViewport;
    const height = Math.max(320, Math.round(viewport ? viewport.height : window.innerHeight));
    document.documentElement.style.setProperty('--popup-viewport-height', `${height}px`);
  }

  function unlockMiniAppHostScroll(){
    const api = window.NotibotIntegration || window.NotibotBridge || window.notibot || null;
    if (api && typeof api.setScrollLock === 'function') {
      try { api.setScrollLock(false); } catch (error) {}
    }
  }

  function prepareOpenLayer(layer){
    if (!layer.classList.contains('is-open')) return;
    setViewportHeight();
    const sheet = layer.querySelector('.inside-popup-sheet');
    if (sheet) {
      sheet.scrollTop = 0;
      sheet.style.overflowY = 'auto';
      sheet.style.webkitOverflowScrolling = 'touch';
    }
    requestAnimationFrame(unlockMiniAppHostScroll);
    setTimeout(unlockMiniAppHostScroll, 60);
  }

  function apply(){
    if (!document.getElementById('v77-popup-scroll-fix')) {
      const style = document.createElement('style');
      style.id = 'v77-popup-scroll-fix';
      style.textContent = css;
      document.head.appendChild(style);
    }

    setViewportHeight();

    document.querySelectorAll('.inside-popup-layer').forEach((layer) => {
      const sheet = layer.querySelector('.inside-popup-sheet');
      if (sheet && !sheet.dataset.miniappScrollReady) {
        sheet.dataset.miniappScrollReady = 'true';
        ['touchstart', 'touchmove', 'wheel'].forEach((eventName) => {
          sheet.addEventListener(eventName, (event) => event.stopPropagation(), { passive:true });
        });
      }

      const observer = new MutationObserver(() => prepareOpenLayer(layer));
      observer.observe(layer, { attributes:true, attributeFilter:['class'] });
      prepareOpenLayer(layer);
    });
  }

  window.addEventListener('resize', setViewportHeight, { passive:true });
  window.addEventListener('orientationchange', setViewportHeight, { passive:true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setViewportHeight, { passive:true });
    window.visualViewport.addEventListener('scroll', setViewportHeight, { passive:true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply, { once:true });
  } else {
    apply();
  }
})();
