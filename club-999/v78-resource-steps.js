(()=>{
  const id='club999-resource-steps-v78';
  if(document.getElementById(id)) return;

  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    [data-resource-step-upgraded]{position:relative!important;overflow:hidden!important}
    [data-resource-step-upgraded] [data-resource-step-badge]{
      position:relative!important;display:grid!important;place-items:center!important;
      width:46px!important;height:46px!important;min-width:46px!important;border-radius:50%!important;
      border:1.2px solid rgba(240,210,130,.68)!important;
      background:
        radial-gradient(circle at 28% 24%,rgba(255,245,214,.42),rgba(255,245,214,0) 34%),
        radial-gradient(circle at 50% 50%,rgba(212,175,55,.18),rgba(212,175,55,0) 62%),
        linear-gradient(145deg,rgba(16,92,104,.9),rgba(5,37,49,.97))!important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.18),
        inset 0 0 18px rgba(212,175,55,.14),
        0 0 0 1px rgba(212,175,55,.13),
        0 10px 18px rgba(3,13,22,.22),
        0 0 18px rgba(212,175,55,.14)!important;
      color:transparent!important;font-size:0!important;line-height:0!important;overflow:hidden!important;
    }
    [data-resource-step-upgraded] [data-resource-step-badge]::before{content:'';position:absolute;inset:4px;border-radius:50%;border:1px solid rgba(240,210,130,.22);opacity:.95;pointer-events:none}
    [data-resource-step-upgraded] [data-resource-step-badge]::after{content:'';position:absolute;top:6px;left:8px;right:8px;height:12px;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,255,255,0));pointer-events:none;opacity:.9}
    [data-resource-step-upgraded] [data-resource-step-badge] svg{width:29px!important;height:29px!important;display:block!important;filter:drop-shadow(0 0 7px rgba(240,210,130,.24))}
    @media(max-width:700px){[data-resource-step-upgraded] [data-resource-step-badge]{width:48px!important;height:48px!important;min-width:48px!important}[data-resource-step-upgraded] [data-resource-step-badge] svg{width:30px!important;height:30px!important}}
    @media(max-width:360px){[data-resource-step-upgraded] [data-resource-step-badge]{width:44px!important;height:44px!important;min-width:44px!important}[data-resource-step-upgraded] [data-resource-step-badge] svg{width:27px!important;height:27px!important}}
  `;
  document.head.appendChild(style);

  const icons={
    '1':'<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="rs1" x1="0" x2="1"><stop offset="0" stop-color="#f7e6b2"/><stop offset="1" stop-color="#d4af37"/></linearGradient></defs><circle cx="24" cy="24" r="18.5" fill="none" stroke="rgba(240,210,130,.45)" stroke-width="1.6"/><path d="M24 8l3.2 8.8L36 20l-8.8 3.2L24 32l-3.2-8.8L12 20l8.8-3.2L24 8z" fill="url(#rs1)" stroke="#faebbe" stroke-width="1.1" stroke-linejoin="round"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6" stroke="#e8c45c" stroke-width="1.5" stroke-linecap="round" opacity=".95"/></svg>',
    '2':'<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="rs2" x1="0" x2="1"><stop offset="0" stop-color="#f7e6b2"/><stop offset="1" stop-color="#d4af37"/></linearGradient></defs><path d="M24 7l13 5.4v9.8c0 8.1-4.4 14-13 18.8-8.6-4.8-13-10.7-13-18.8v-9.8L24 7z" fill="none" stroke="#e8c45c" stroke-width="1.7"/><path d="M24 14l2.6 6.1 6.6.5-5 4.1 1.6 6.4-5.8-3.8-5.8 3.8 1.6-6.4-5-4.1 6.6-.5L24 14z" fill="url(#rs2)" stroke="#faebbe" stroke-width="1" stroke-linejoin="round"/></svg>',
    '3':'<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="rs3" x1="0" x2="1"><stop offset="0" stop-color="#f7e6b2"/><stop offset="1" stop-color="#d4af37"/></linearGradient></defs><circle cx="24" cy="24" r="18" fill="none" stroke="rgba(240,210,130,.35)" stroke-width="1.3"/><path d="M16 16h6.2v6.2H16zM25.8 16H32v6.2h-6.2zM16 25.8h6.2V32H16zM25.8 25.8H32V32h-6.2z" fill="none" stroke="#64c4cf" stroke-width="2.2" stroke-linejoin="round"/><path d="M24 15.5v17M15.5 24h17" stroke="#e8c45c" stroke-width="1.4" stroke-linecap="round" opacity=".9"/><circle cx="24" cy="24" r="3.2" fill="url(#rs3)" stroke="#faebbe" stroke-width=".9"/></svg>',
    '4':'<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="rs4" x1="0" x2="1"><stop offset="0" stop-color="#f7e6b2"/><stop offset="1" stop-color="#d4af37"/></linearGradient></defs><path d="M11 31.5l6-4.2 4 2.1 4.2-5.1 4.1 2 7.7-8.9" fill="none" stroke="#e8c45c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 32h5v5h-5zM18 27h5v10h-5zM25 22h5v15h-5zM32 17h5v20h-5z" fill="url(#rs4)" stroke="#faebbe" stroke-width=".9"/><path d="M35 11h5v5" fill="none" stroke="#64c4cf" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function apply(){
    const heads=[...document.querySelectorAll('h1,h2,h3,h4,p,strong')].filter(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();return t.includes('центре ресурса')&&t.includes('устроено проще')});
    heads.forEach(head=>{
      let root=head.closest('section,article,div');
      while(root&&root!==document.body){
        const badges=[...root.querySelectorAll('span,div,strong,b,p')].filter(el=>/^[1-4]$/.test((el.textContent||'').trim()));
        if(badges.length>=4){
          root.setAttribute('data-resource-step-upgraded','');
          ['1','2','3','4'].forEach(n=>{const el=badges.find(x=>(x.textContent||'').trim()===n&&!x.dataset.resourceStepIconDone);if(el){el.dataset.resourceStepIconDone='1';el.setAttribute('data-resource-step-badge','');el.setAttribute('aria-hidden','true');el.innerHTML=icons[n]}});
          break;
        }
        root=root.parentElement;
      }
    });
  }

  apply();
  window.addEventListener('load',apply,{once:true});
  const mo=new MutationObserver(apply);mo.observe(document.documentElement,{childList:true,subtree:true});setTimeout(()=>mo.disconnect(),6000);
})();
