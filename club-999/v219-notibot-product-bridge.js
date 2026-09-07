(()=>{
  'use strict';

  const PRODUCT_ID='7cLg1RNZyRtykq5i0lw78c';
  const PRODUCT_PATH='/product/'+encodeURIComponent(PRODUCT_ID);
  const PRODUCT_FALLBACK_URL='https://t.me/anna_kolieso_bot/aboutme?startapp=p_7cLg1RNZyRtykq5i0lw78c_lp';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase().replace(/[«»"']/g,'');
  const isEmbedded=window.parent!==window;

  let parentConnected=false;
  let parentTargetOrigin='*';
  let injectedSdkConnected=false;

  function postParent(type,payload,origin){
    if(!isEmbedded) return false;
    try{
      window.parent.postMessage({
        source:'vibe-sandbox',
        type,
        payload:payload||{}
      },origin||parentTargetOrigin||'*');
      return true;
    }catch(error){
      console.warn('[club999 payment] postMessage failed',error);
      return false;
    }
  }

  function requestNotibotInit(){
    if(!isEmbedded) return false;
    return postParent('READY_FOR_INIT',{},'*');
  }

  if(isEmbedded){
    window.addEventListener('message',event=>{
      if(event.source!==window.parent) return;
      const message=event.data;
      if(!message || typeof message!=='object') return;
      if(message.type!=='NOTIBOT_INIT') return;
      parentConnected=true;
      parentTargetOrigin=event.origin && event.origin!=='null' ? event.origin : '*';
      document.documentElement.dataset.notibotBridge='connected';
    });

    requestNotibotInit();
    [250,800,1800].forEach(ms=>setTimeout(()=>{
      if(!parentConnected) requestNotibotInit();
    },ms));
  }

  function getInjectedSdk(){
    const sdk=window.notibot;
    return sdk && typeof sdk==='object' ? sdk : null;
  }

  const initialSdk=getInjectedSdk();
  if(initialSdk && typeof initialSdk.onUpdate==='function'){
    try{
      initialSdk.onUpdate(()=>{
        injectedSdkConnected=true;
        document.documentElement.dataset.notibotSdk='connected';
      });
    }catch(error){
      console.warn('[club999 payment] notibot.onUpdate failed',error);
    }
  }

  function openViaExistingIntegration(){
    const integration=window.NotibotIntegration;
    if(!integration) return false;
    try{
      const state=typeof integration.getState==='function' ? integration.getState() : null;
      if(state && state.connected){
        if(typeof integration.hapticImpact==='function'){
          try{integration.hapticImpact('light');}catch{}
        }
        if(typeof integration.openProduct==='function'){
          integration.openProduct(PRODUCT_ID);
          return true;
        }
        if(typeof integration.openLink==='function'){
          integration.openLink(PRODUCT_PATH);
          return true;
        }
      }
    }catch(error){
      console.warn('[club999 payment] NotibotIntegration failed',error);
    }
    return false;
  }

  function openViaInjectedSdk(){
    const sdk=getInjectedSdk();
    if(!sdk) return false;
    try{
      if(typeof sdk.hapticImpact==='function'){
        try{sdk.hapticImpact('light');}catch{}
      }
      if(typeof sdk.openProduct==='function' && (injectedSdkConnected || typeof sdk.onUpdate!=='function')){
        sdk.openProduct(PRODUCT_ID);
        return true;
      }
      if(typeof sdk.openLink==='function' && (injectedSdkConnected || typeof sdk.onUpdate!=='function')){
        sdk.openLink(PRODUCT_PATH);
        return true;
      }
    }catch(error){
      console.warn('[club999 payment] injected Notibot SDK failed',error);
    }
    return false;
  }

  function openViaParentBridge(){
    if(!parentConnected) return false;
    return postParent('open_link',{url:PRODUCT_PATH},parentTargetOrigin);
  }

  function openFallback(){
    const integration=window.NotibotIntegration;
    if(integration && typeof integration.openLink==='function'){
      try{
        integration.openLink(PRODUCT_FALLBACK_URL);
        return true;
      }catch{}
    }

    try{
      const tg=window.Telegram && window.Telegram.WebApp;
      if(tg && typeof tg.openTelegramLink==='function'){
        tg.openTelegramLink(PRODUCT_FALLBACK_URL);
        return true;
      }
      if(tg && typeof tg.openLink==='function'){
        tg.openLink(PRODUCT_FALLBACK_URL);
        return true;
      }
    }catch(error){
      console.warn('[club999 payment] Telegram fallback failed',error);
    }

    window.location.assign(PRODUCT_FALLBACK_URL);
    return true;
  }

  function openProduct(){
    if(openViaExistingIntegration()) return true;
    if(openViaInjectedSdk()) return true;
    if(openViaParentBridge()) return true;
    return openFallback();
  }

  function isPaymentButton(el){
    if(!el) return false;
    if(el.matches?.('[data-notibot-product="'+PRODUCT_ID+'"]')) return true;
    const text=norm(el.textContent);
    return text.includes('вступить в центр ресурса') ||
      text.includes('вступить в «центр ресурса»') ||
      text.includes('вступить в клуб за 999') ||
      text.includes('вступить в клуб и задать вопрос') ||
      text.includes('найти свою точку опоры');
  }

  function candidateFromTarget(target){
    if(!target || !target.closest) return null;
    const button=target.closest('button,a,[role="button"],[data-purchase],[data-notibot-product]');
    return button && isPaymentButton(button) ? button : null;
  }

  function prepareButtons(){
    document.querySelectorAll('button,a,[role="button"],[data-purchase],[data-notibot-product]').forEach(button=>{
      if(!isPaymentButton(button)) return;
      button.setAttribute('data-notibot-product',PRODUCT_ID);
      button.style.setProperty('pointer-events','auto','important');
      button.style.setProperty('cursor','pointer','important');
      if(button.tagName==='A'){
        button.setAttribute('href',PRODUCT_FALLBACK_URL);
        button.removeAttribute('target');
      }
    });
  }

  document.addEventListener('click',event=>{
    const button=candidateFromTarget(event.target);
    if(!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation?.();
    openProduct();
  },true);

  document.addEventListener('keydown',event=>{
    if(event.key!=='Enter' && event.key!==' ') return;
    const button=candidateFromTarget(event.target);
    if(!button) return;
    event.preventDefault();
    openProduct();
  },true);

  prepareButtons();
  requestAnimationFrame(prepareButtons);
  [150,400,900,1600,2800,4500,7000].forEach(ms=>setTimeout(prepareButtons,ms));
})();