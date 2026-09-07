(()=>{
  'use strict';

  const PRODUCT_ID='7cLg1RNZyRtykq5i0lw78c';
  const PRODUCT_PATH='/product/'+PRODUCT_ID;
  const PRODUCT_FALLBACK_URL='https://t.me/anna_kolieso_bot/aboutme?startapp=p_7cLg1RNZyRtykq5i0lw78c_lp';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase().replace(/[«»"']/g,'');
  const isEmbedded=window.parent!==window;

  function parentOrigin(){
    if(!isEmbedded || !document.referrer) return '*';
    try{return new URL(document.referrer).origin||'*';}catch{return '*';}
  }

  const targetOrigin=parentOrigin();

  function post(type,payload){
    if(!isEmbedded) return false;
    try{
      window.parent.postMessage({source:'vibe-sandbox',type,payload:payload||{}},targetOrigin);
      return true;
    }catch(error){
      console.warn('Notibot postMessage failed',error);
      return false;
    }
  }

  // Тот же handshake, который используется на рабочей странице за 1 ₽.
  if(isEmbedded){
    post('READY_FOR_INIT',{});
  }

  function isPaymentButton(el){
    if(!el) return false;
    if(el.matches?.('[data-purchase],[data-notibot-product],.hero41__button,.button--primary,.club999-question-button-v152')) return true;
    const text=norm(el.textContent);
    return text.includes('вступить в центр ресурса') ||
      text.includes('вступить в клуб за 999') ||
      text.includes('вступить в клуб и задать вопрос') ||
      text.includes('найти свою точку опоры');
  }

  function resolveButton(target){
    if(!target?.closest) return null;
    const direct=target.closest('button,a,[role="button"],[data-purchase],[data-notibot-product],.hero41__button,.button--primary,.club999-question-button-v152');
    if(direct && isPaymentButton(direct)) return direct;
    let node=target;
    for(let i=0;i<5 && node;i++,node=node.parentElement){
      if(isPaymentButton(node)) return node;
    }
    return null;
  }

  function openProduct(event){
    if(event){
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
    }

    // Сначала пробуем уже готовый мост, если он существует.
    try{
      const integration=window.NotibotIntegration;
      if(integration && typeof integration.openProduct==='function'){
        const state=typeof integration.getState==='function'?integration.getState():null;
        if(!state || state.connected){
          integration.openProduct(PRODUCT_ID);
          return true;
        }
      }
    }catch(error){
      console.warn('NotibotIntegration.openProduct failed',error);
    }

    // Главный путь: прямое сообщение родительскому Notibot, как в рабочем bridge 1 ₽.
    if(post('open_link',{url:PRODUCT_PATH})) return true;

    try{
      const integration=window.NotibotIntegration;
      if(integration && typeof integration.openLink==='function'){
        integration.openLink(PRODUCT_PATH);
        return true;
      }
    }catch(error){
      console.warn('NotibotIntegration.openLink failed',error);
    }

    try{
      if(window.Telegram?.WebApp?.openTelegramLink){
        window.Telegram.WebApp.openTelegramLink(PRODUCT_FALLBACK_URL);
        return true;
      }
    }catch(error){
      console.warn('Telegram fallback failed',error);
    }

    window.location.href=PRODUCT_FALLBACK_URL;
    return true;
  }

  function bind(){
    const selectors='button,a,[role="button"],[data-purchase],[data-notibot-product],.hero41__button,.button--primary,.club999-question-button-v152';
    document.querySelectorAll(selectors).forEach(button=>{
      if(!isPaymentButton(button)) return;
      button.setAttribute('data-notibot-product',PRODUCT_ID);
      button.style.setProperty('pointer-events','auto','important');
      button.style.setProperty('cursor','pointer','important');
      if(button.dataset.notibotDirect218==='1') return;
      button.dataset.notibotDirect218='1';
      button.addEventListener('click',openProduct,true);
    });
  }

  document.addEventListener('click',event=>{
    const button=resolveButton(event.target);
    if(!button) return;
    openProduct(event);
  },true);

  bind();
  requestAnimationFrame(bind);
  [100,300,700,1200,2200,4000,6500].forEach(ms=>setTimeout(bind,ms));
})();
