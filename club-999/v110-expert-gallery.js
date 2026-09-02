(()=>{
  const STYLE_ID='club999-expert-gallery-v111';
  const IMAGES=[
    './assets/gallery-v110/01-anna-plaksina.webp',
    './assets/gallery-v110/02-olga-schastye.webp',
    './assets/gallery-v110/03-yannas-bogdan.webp',
    './assets/gallery-v110/04-nadezhda-gromova.webp',
    './assets/gallery-v110/05-vladlena-vasikova.webp',
    './assets/gallery-v110/06-elina-polyakova.webp'
  ];
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();
  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-expert-gallery-card-v110{
        padding:8px 14px 14px!important;
        min-height:0!important;
        height:auto!important;
        overflow:visible!important;
        border:0!important;
        box-shadow:none!important;
        background:transparent!important;
      }
      .club999-expert-gallery-v110{width:100%;max-width:520px;margin:0 auto}
      .club999-expert-gallery-kicker-v110{display:none!important}
      .club999-expert-gallery-stage-v110{
        position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;
        border:0!important;border-radius:0!important;background:transparent!important;
        box-shadow:none!important;touch-action:pan-y;
      }
      .club999-expert-gallery-slide-v110{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .24s ease;pointer-events:none}
      .club999-expert-gallery-slide-v110.is-active{opacity:1;visibility:visible;pointer-events:auto}
      .club999-expert-gallery-slide-v110 img{display:block;width:100%;height:100%;object-fit:contain;object-position:center;user-select:none;-webkit-user-drag:none}
      .club999-expert-gallery-arrow-v110{
        position:absolute;z-index:5;top:50%;width:34px;height:34px;margin-top:-17px;display:grid;place-items:center;padding:0;
        border-radius:50%;border:1px solid rgba(244,211,111,.72);color:#ffe7a0;background:rgba(3,39,48,.78);
        box-shadow:0 4px 14px rgba(0,0,0,.24),0 0 14px rgba(238,198,91,.12);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);cursor:pointer
      }
      .club999-expert-gallery-arrow-v110.prev{left:8px}.club999-expert-gallery-arrow-v110.next{right:8px}
      .club999-expert-gallery-arrow-v110 svg{width:16px;height:16px;display:block}
      .club999-expert-gallery-dots-v110{display:flex;align-items:center;justify-content:center;gap:7px;margin-top:8px}
      .club999-expert-gallery-dot-v110{width:6px;height:6px;padding:0;border:0;border-radius:50%;background:rgba(222,205,151,.32);cursor:pointer}
      .club999-expert-gallery-dot-v110.is-active{width:18px;border-radius:999px;background:#e8c768;box-shadow:0 0 9px rgba(232,199,104,.32)}
      .club999-expert-gallery-copy-v111{margin:12px auto 0;max-width:360px;text-align:center}
      .club999-expert-gallery-title-v111{margin:0;color:#f1d47a;font-size:18px;line-height:1.2;font-weight:800;text-wrap:balance}
      .club999-expert-gallery-text-v111{margin:7px 0 0;color:rgba(242,244,239,.78);font-size:11px;line-height:1.35}
      @media(max-width:700px){
        .club999-expert-gallery-card-v110{padding:6px 10px 12px!important}
        .club999-expert-gallery-dots-v110{margin-top:7px}
        .club999-expert-gallery-copy-v111{margin-top:10px;max-width:320px}
        .club999-expert-gallery-title-v111{font-size:17px}
        .club999-expert-gallery-text-v111{font-size:10px;line-height:1.32}
      }
    `;
    document.head.appendChild(style);
  }
  function findSection(){
    const headings=[...document.querySelectorAll('h1,h2,h3')];
    const h=headings.find(el=>{const t=norm(el.textContent);return t.includes('иногда нужен')&&t.includes('ответ на свой вопрос')});
    if(h) return h.closest('section,.section')||h.parentElement;
    return [...document.querySelectorAll('section,.section')].find(el=>{const t=norm(el.textContent);return t.includes('иногда нужен')&&t.includes('ваши вопросы')})||null;
  }
  function findCard(section){
    const all=[...section.querySelectorAll('*')];
    const label=all.find(el=>norm(el.textContent)==='день эксперта');
    if(!label) return null;
    let node=label,fallback=null;
    for(let i=0;i<9&&node&&node!==section;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(!t.includes('одна тема')||!t.includes('ваши вопросы')) continue;
      if(!fallback) fallback=node;
      const cls=String(node.className||'').toLowerCase();
      if(/card|expert|format|day/.test(cls)) return node;
    }
    return fallback;
  }
  function buildGallery(card){
    injectStyle();
    card.classList.add('club999-expert-gallery-card-v110');
    card.innerHTML='';
    const gallery=document.createElement('div');
    gallery.className='club999-expert-gallery-v110';
    gallery.innerHTML=`
      <div class="club999-expert-gallery-stage-v110" tabindex="0" aria-label="Галерея экспертов">
        ${IMAGES.map((src,i)=>`<div class="club999-expert-gallery-slide-v110${i===0?' is-active':''}" data-index="${i}"><img src="${src}?v=111" alt="Эксперт ${i+1}" ${i===0?'fetchpriority="high"':'loading="lazy"'} draggable="false"></div>`).join('')}
        <button class="club999-expert-gallery-arrow-v110 prev" type="button" aria-label="Предыдущий эксперт"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <button class="club999-expert-gallery-arrow-v110 next" type="button" aria-label="Следующий эксперт"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      </div>
      <div class="club999-expert-gallery-dots-v110" aria-label="Выбор слайда">${IMAGES.map((_,i)=>`<button class="club999-expert-gallery-dot-v110${i===0?' is-active':''}" type="button" aria-label="Слайд ${i+1}" data-index="${i}"></button>`).join('')}</div>
      <div class="club999-expert-gallery-copy-v111">
        <div class="club999-expert-gallery-title-v111">Одна тема. Один специалист. Ваши вопросы.</div>
        <p class="club999-expert-gallery-text-v111">Глубже познакомьтесь с подходом эксперта и получите ориентиры для своей ситуации.</p>
      </div>`;
    card.appendChild(gallery);
    const stage=gallery.querySelector('.club999-expert-gallery-stage-v110');
    const slides=[...gallery.querySelectorAll('.club999-expert-gallery-slide-v110')];
    const dots=[...gallery.querySelectorAll('.club999-expert-gallery-dot-v110')];
    let current=0,touchX=null;
    const show=index=>{current=(index+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('is-active',i===current));dots.forEach((d,i)=>d.classList.toggle('is-active',i===current))};
    gallery.querySelector('.prev').addEventListener('click',()=>show(current-1));
    gallery.querySelector('.next').addEventListener('click',()=>show(current+1));
    dots.forEach(dot=>dot.addEventListener('click',()=>show(Number(dot.dataset.index))));
    stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}});
    stage.addEventListener('touchstart',e=>{touchX=e.touches[0]?.clientX??null},{passive:true});
    stage.addEventListener('touchend',e=>{if(touchX===null)return;const end=e.changedTouches[0]?.clientX??touchX,dx=end-touchX;touchX=null;if(Math.abs(dx)>=42)show(dx>0?current-1:current+1)},{passive:true});
  }
  function apply(){if(document.querySelector('.club999-expert-gallery-v110'))return true;const section=findSection();if(!section)return false;const card=findCard(section);if(!card)return false;buildGallery(card);return true}
  let tries=0;const timer=setInterval(()=>{tries+=1;if(apply()||tries>=50)clearInterval(timer)},120);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
