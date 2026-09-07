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
      text.includes('найти свою точку опоры');
  }

  function bindButtons(){
    document.querySelectorAll('button,a,[role="button"],[data-purchase]').forEach(el=>{
      if(!isPaymentButton(el)) return;
      el.dataset.notibotProductId=PRODUCT_ID;
      el.dataset.notibotStartapp=STARTAPP;
      el.dataset.notibotPurchase='true';
      if(el.tagName==='A'){
        el.setAttribute('href',PAYMENT_URL);
        el.setAttribute('target','_self');
        el.setAttribute('rel','noopener');
      }
    });
  }

  function openPayment(){
    try{
      const tg=window.Telegram?.WebApp;
      if(tg && typeof tg.openTelegramLink==='function'){
        tg.openTelegramLink(PAYMENT_URL);
        return;
      }
    }catch(error){
      console.warn('Telegram deep-link fallback',error);
    }
    window.location.assign(PAYMENT_URL);
  }

  document.addEventListener('click',event=>{
    const target=event.target?.closest?.('button,a,[role="button"],[data-purchase]');
    if(!isPaymentButton(target)) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openPayment();
  },true);

  document.addEventListener('keydown',event=>{
    if(event.key!=='Enter' && event.key!==' ') return;
    const target=event.target?.closest?.('button,a,[role="button"],[data-purchase]');
    if(!isPaymentButton(target)) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openPayment();
  },true);

  bindButtons();
  requestAnimationFrame(bindButtons);
  setTimeout(bindButtons,400);
  setTimeout(bindButtons,1200);
})();
