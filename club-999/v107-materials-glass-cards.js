(()=>{
  const STYLE_ID='club999-materials-glass-v107';

  const ICONS={
    broadcast:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><rect x="18" y="21" width="28" height="19" rx="4"/><path d="M25 46h14M32 40v6M25 28h14M25 33h9"/></svg>`,
    practice:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="M22 18h15l7 7v21H22zM37 18v8h7"/><path d="m27 34 4 4 7-9"/></svg>`,
    experts:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><circle cx="25" cy="27" r="5"/><circle cx="40" cy="25" r="4"/><path d="M17 43c2-6 6-9 12-9s10 3 12 9M36 42c1-4 4-7 8-7s7 2 9 6"/></svg>`,
    chat:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="M20 22h24a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H31l-8 6v-6h-3a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6z"/><path d="M25 30h14M25 35h9"/></svg>`,
    library:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="M20 20h7v25h-7zM29 18h7v27h-7zM38 22h7v23h-7z"/><path d="M18 46h29"/></svg>`,
    community:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><circle cx="32" cy="24" r="4"/><circle cx="21" cy="34" r="3.5"/><circle cx="43" cy="34" r="3.5"/><path d="M32 28v7M25 36l4-2M39 34l4 2M20 42c2-3 5-5 9-5M35 37c4 0 7 2 9 5M26 44c1-4 3-6 6-6s5 2 6 6"/></svg>`,
    star:`<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="m32 18 4 9 10 1-8 7 2 10-8-5-8 5 2-10-8-7 10-1z"/></svg>`
  };

  function pickIcon(text){
    const t=(text||'').toLowerCase();
    if(t.includes('конферен')||t.includes('эфир')) return ICONS.broadcast;
    if(t.includes('практи')||t.includes('самостоятель')) return ICONS.practice;
    if(t.includes('эксперт')||t.includes('подход')) return ICONS.experts;
    if(t.includes('вопрос')||t.includes('встреч')) return ICONS.chat;
    if(t.includes('материал')||t.includes('архив')||t.includes('запис')) return ICONS.library;
    if(t.includes('общен')||t.includes('участник')||t.includes('клуб')) return ICONS.community;
    return ICONS.star;
  }

  function injectStyle(){
    document.getElementById(STYLE_ID)?.remove();
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .inside-grid.inside-grid--glass-v107{
        gap:9px!important;
      }
      .inside-grid--glass-v107 .inside-card{
        position:relative!important;
        isolation:isolate!important;
        overflow:hidden!important;
        min-height:76px!important;
        padding:10px 12px!important;
        display:grid!important;
        grid-template-columns:40px minmax(0,1fr)!important;
        grid-template-rows:1fr!important;
        align-items:center!important;
        column-gap:10px!important;
        border-radius:18px!important;
        border:1px solid rgba(231,195,104,.34)!important;
        background:
          radial-gradient(circle at 16% 18%,rgba(104,226,231,.13),transparent 30%),
          radial-gradient(circle at 84% 12%,rgba(238,207,119,.09),transparent 26%),
          linear-gradient(145deg,rgba(10,71,80,.52),rgba(4,36,46,.64))!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.10),
          inset 0 -20px 34px rgba(0,8,14,.08),
          0 8px 22px rgba(0,8,15,.11),
          0 0 18px rgba(98,221,227,.035)!important;
        -webkit-backdrop-filter:blur(15px) saturate(1.08)!important;
        backdrop-filter:blur(15px) saturate(1.08)!important;
      }
      .inside-grid--glass-v107 .inside-card::before{
        content:""!important;
        position:absolute!important;
        inset:6px!important;
        z-index:0!important;
        border-radius:13px!important;
        border:1px solid rgba(247,224,160,.10)!important;
        background:linear-gradient(180deg,rgba(255,255,255,.035),transparent 36%)!important;
        pointer-events:none!important;
      }
      .inside-grid--glass-v107 .inside-card::after{
        content:""!important;
        position:absolute!important;
        z-index:0!important;
        width:130px!important;
        height:48px!important;
        right:-30px!important;
        bottom:-22px!important;
        border-radius:50%!important;
        background:radial-gradient(ellipse at center,rgba(68,184,188,.12),rgba(68,184,188,.04) 42%,transparent 72%)!important;
        filter:blur(12px)!important;
        pointer-events:none!important;
      }
      .inside-grid--glass-v107 .inside-card>span{
        position:absolute!important;
        z-index:3!important;
        top:8px!important;
        right:11px!important;
        margin:0!important;
        padding:0!important;
        border:0!important;
        color:rgba(239,207,113,.86)!important;
        font-size:8px!important;
        line-height:1!important;
        letter-spacing:.13em!important;
        font-weight:800!important;
      }
      .inside-v107-icon{
        position:relative!important;
        z-index:2!important;
        width:40px!important;
        height:40px!important;
        display:grid!important;
        place-items:center!important;
        border-radius:13px!important;
        border:1px solid rgba(231,195,104,.28)!important;
        background:
          radial-gradient(circle at 32% 25%,rgba(93,214,220,.11),transparent 42%),
          linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.012)),
          rgba(3,31,40,.34)!important;
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,.09),
          0 0 14px rgba(239,202,105,.08),
          0 0 14px rgba(83,211,218,.06)!important;
      }
      .inside-v107-icon svg{
        width:30px!important;
        height:30px!important;
        fill:none!important;
        stroke:#efd07a!important;
        stroke-width:1.65!important;
        stroke-linecap:round!important;
        stroke-linejoin:round!important;
        filter:drop-shadow(0 0 4px rgba(236,200,103,.20))!important;
      }
      .inside-v107-icon svg circle:first-child{
        stroke:rgba(91,216,222,.28)!important;
        fill:rgba(3,38,47,.18)!important;
      }
      .inside-grid--glass-v107 .inside-card h3{
        position:relative!important;
        z-index:2!important;
        grid-column:2!important;
        align-self:center!important;
        margin:0!important;
        padding:0 15px 0 0!important;
        color:#f7e7b2!important;
        font-size:16px!important;
        line-height:1.22!important;
        font-weight:690!important;
        text-wrap:balance!important;
        overflow-wrap:normal!important;
        word-break:normal!important;
      }
      @media(min-width:901px){
        .inside-grid.inside-grid--glass-v107{
          grid-template-columns:repeat(3,minmax(0,1fr))!important;
          gap:11px!important;
        }
        .inside-grid--glass-v107 .inside-card{
          min-height:88px!important;
          padding:11px 12px!important;
          grid-template-columns:42px minmax(0,1fr)!important;
        }
        .inside-v107-icon{width:42px!important;height:42px!important}
        .inside-grid--glass-v107 .inside-card h3{font-size:16px!important}
      }
      @media(max-width:700px){
        .inside-grid.inside-grid--glass-v107{
          grid-template-columns:1fr!important;
          gap:7px!important;
        }
        .inside-grid--glass-v107 .inside-card{
          min-height:70px!important;
          padding:8px 10px!important;
          grid-template-columns:36px minmax(0,1fr)!important;
          column-gap:9px!important;
          border-radius:17px!important;
        }
        .inside-grid--glass-v107 .inside-card::before{inset:5px!important;border-radius:12px!important}
        .inside-v107-icon{width:36px!important;height:36px!important;border-radius:12px!important}
        .inside-v107-icon svg{width:27px!important;height:27px!important}
        .inside-grid--glass-v107 .inside-card h3{
          font-size:15px!important;
          line-height:1.18!important;
          padding-right:13px!important;
        }
        .inside-grid--glass-v107 .inside-card>span{top:7px!important;right:9px!important;font-size:7px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    const grid=document.querySelector('.inside-grid');
    if(!grid) return false;
    const cards=[...grid.querySelectorAll(':scope > .inside-card')];
    if(cards.length<4) return false;
    injectStyle();
    grid.classList.add('inside-grid--glass-v107');
    cards.slice(0,6).forEach(card=>{
      if(card.querySelector('.inside-v107-icon')) return;
      const title=card.querySelector('h3');
      const icon=document.createElement('div');
      icon.className='inside-v107-icon';
      icon.setAttribute('aria-hidden','true');
      icon.innerHTML=pickIcon(title?.textContent||card.textContent||'');
      if(title) card.insertBefore(icon,title);
      else card.prepend(icon);
    });
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply()||tries>=40) clearInterval(timer);
  },120);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
