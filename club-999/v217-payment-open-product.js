(()=>{
  'use strict';

  const PRODUCT_ID='7cLg1RNZyRtykq5i0lw78c';
  const PRODUCT_FALLBACK_URL='https://t.me/anna_kolieso_bot/aboutme?startapp=p_7cLg1RNZyRtykq5i0lw78c_lp';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase().replace(/[«»"']/g,'');

  function isPaymentButton(el){
    if(!el) return false;
    if(el.matches?.('[data-purchase],[data-notibot-product]')) return true;
    const text=norm(el.textContent);
    return text.includes('вступить в центр ресурса') ||
      text.includes('вступить в клуб за 999') ||
      text.includes('вступить в клуб и задать вопрос') ||
      text.includes('найти свою точку опоры');
  }

  function openProduct(event){
    if(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
    }

    const integration=window.NotibotIntegration;

    try{
      const state=integration && typeof integration.getState==='function'
        ? integration.getState()
        : null;

      if(integration && state && state.connected){
        if(typeof integration.hapticImpact==='function'){
          integration.hapticImpact('light');
        }

        if(typeof integration.openProduct==='function'){
          integration.openProduct(PRODUCT_ID);
          return true;
        }

        if(typeof integration.openLink==='function'){
          integration.openLink('/product/'+encodeURIComponent(PRODUCT_ID));
          return true;
        }
      }
    }catch(error){
      console.warn('Не удалось открыть товар внутри Notibot, используем прямую ссылку.',error);
    }

    try{
      if(integration && typeof integration.openLink==='function'){
        integration.openLink(PRODUCT_FALLBACK_URL);
        return true;
      }
    }catch(error){
      console.warn('Notibot fallback openLink failed',error);
    }

    try{
      const tg=window.Telegram?.WebApp;
      if(tg && typeof tg.openTelegramLink==='function'){
        tg.openTelegramLink(PRODUCT_FALLBACK_URL);
        return true;
      }
    }catch(error){
      console.warn('Telegram fallback failed',error);
    }

    window.location.assign(PRODUCT_FALLBACK_URL);
    return true;
  }

  function bindButton(button){
    if(!isPaymentButton(button)) return;

    button.setAttribute('data-notibot-product',PRODUCT_ID);
    button.setAttribute('data-purchase','');
    button.style.setProperty('pointer-events','auto','important');
    button.style.setProperty('cursor','pointer','important');

    if(button.tagName==='A'){
      button.setAttribute('href',PRODUCT_FALLBACK_URL);
      button.removeAttribute('target');
    }

    if(button.dataset.notibotProductBound217==='1') return;
    button.dataset.notibotProductBound217='1';
    button.addEventListener('click',openProduct,true);
    button.addEventListener('keydown',event=>{
      if(event.key==='Enter' || event.key===' '){
        openProduct(event);
      }
    },true);
  }

  function bindAll(){
    document.querySelectorAll('button,a,[role="button"],[data-purchase],[data-notibot-product]').forEach(bindButton);
  }

  document.addEventListener('click',event=>{
    const target=event.target?.closest?.('button,a,[role="button"],[data-purchase],[data-notibot-product]');
    if(!isPaymentButton(target)) return;
    if(target?.dataset?.notibotProductBound217==='1') return;
    openProduct(event);
  },true);

  bindAll();
  requestAnimationFrame(bindAll);
  [200,600,1200,2200,3800,6000].forEach(ms=>setTimeout(bindAll,ms));
})();