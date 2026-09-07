(()=>{
  const PRODUCT_ID='7cLg1RNZyRtykq5i0lw78c';
  const STARTAPP=`p_${PRODUCT_ID}_lp`;
  const PAYMENT_URL=`https://t.me/anna_kolieso_bot/aboutme?startapp=${STARTAPP}`;
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase().replace(/[«»"']/g,'');

  function isPaymentButton(el){
    if(!el) return false;
    if(el.matches?.('[data-purchase]')) return true;
    const text=norm(el.textContent);
    return text.includes('вступить в центр ресурса') ||
      text.includes('вступить в клуб за 999') ||
      text.includes('вступить в клуб и задать вопрос') ||
      text.includes('найти свою точку опоры');
  }

  function markButtons(){
    document.querySelectorAll('button,a,[role="button"],[data-purchase]').forEach(el=>{
      if(!isPaymentButton(el)) return;
      el.dataset.notibotProductId=PRODUCT_ID;
      el.dataset.notibotStartapp=STARTAPP;
      el.setAttribute('data-purchase','');
      if(el.tagName==='A'){
        el.setAttribute('href',PAYMENT_URL);
        el.setAttribute('target','_top');
        el.setAttribute('rel','noopener');
      }
    });
  }

  function openPayment(){
    const notibot=window.NotibotIntegration;
    try{
      const state=typeof notibot?.getState==='function' ? notibot.getState() : null;
      if(notibot && (!state || state.connected!==false) && typeof notibot.openLink==='function'){
        notibot.openLink(PAYMENT_URL);
        return true;
      }
    }catch(error){
      console.warn('Notibot openLink failed',error);
    }

    try{
      const tg=window.Telegram?.WebApp;
      if(tg && typeof tg.openTelegramLink==='function'){
        tg.openTelegramLink(PAYMENT_URL);
        return true;
      }
    }catch(error){
      console.warn('Telegram openTelegramLink failed',error);
    }

    try{
      const win=window.open(PAYMENT_URL,'_top');
      if(win) return true;
    }catch(error){
      console.warn('window.open payment fallback failed',error);
    }

    try{
      window.location.assign(PAYMENT_URL);
      return true;
    }catch(error){
      console.error('Payment navigation failed',error);
      return false;
    }
  }

  function handle(event){
    const target=event.target?.closest?.('button,a,[role="button"],[data-purchase]');
    if(!isPaymentButton(target)) return;
    event.preventDefault();
    event.stopPropagation();
    openPayment();
  }

  document.addEventListener('click',handle,true);
  document.addEventListener('keydown',event=>{
    if(event.key!=='Enter' && event.key!==' ') return;
    handle(event);
  },true);

  markButtons();
  requestAnimationFrame(markButtons);
  [250,700,1500,3000,5000].forEach(ms=>setTimeout(markButtons,ms));
})();