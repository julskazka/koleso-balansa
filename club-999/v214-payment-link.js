(()=>{
  const PAYMENT_URL='https://t.me/anna_kolieso_bot/aboutme?startapp=p_7cLg1RNZyRtykq5i0lw78c_lp';
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase().replace(/[«»"']/g,'');

  function isPaymentButton(el){
    if(!el) return false;
    if(el.matches?.('[data-purchase]')) return true;
    const text=norm(el.textContent);
    return text.includes('вступить в центр ресурса') ||
      text.includes('вступить в клуб за 999') ||
      text.includes('найти свою точку опоры');
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
    window.location.href=PAYMENT_URL;
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
})();
