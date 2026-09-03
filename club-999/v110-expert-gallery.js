(()=>{
  const STYLE_ID='club999-expert-gallery-v113';
  const IMAGES=[
    './assets/gallery-v110/01-anna-plaksina.webp',
    './assets/gallery-v110/02-olga-schastye.webp',
    './assets/gallery-v110/03-yannas-bogdan.webp',
    './assets/gallery-v110/04-nadezhda-gromova.webp',
    './assets/gallery-v110/05-vladlena-vasikova.webp',
    null
  ];
  const ELINA_PARTS=Array.from({length:10},(_,i)=>`./assets/gallery-v113/elina-${String(i+1).padStart(2,'0')}.txt`);
  const norm=s=>(s||'').replace(/\s+/g,' ').trim().toLowerCase();

  async function loadElina(img){
    try{
      const parts=await Promise.all(ELINA_PARTS.map(async path=>{
        const r=await fetch(path+'?v=113',{cache:'no-store'});
        if(!r.ok) throw new Error('Не удалось загрузить '+path);
        return r.text();
      }));
      img.src='data:image/webp;base64,'+parts.join('').replace(/\s+/g,'');
    }catch(error){
      console.error('Elina gallery image:',error);
    }
  }

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .club999-expert-section-v112{padding-top:24px!important}
      .club999-expert-gallery-card-v110{
        padding:4px 14px 14px!important;
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
      .club999-expert-gallery-copy-v111{margin:15px auto 0;max-width:410px;text-align:center;padding:0 8px}
      .club999-expert-gallery-title-v111{margin:0;color:#f5d982;font-size:22px;line-height:1.22;font-weight:800;text-wrap:balance;text-shadow:0 0 14px rgba(237,199,92,.12)}
      .club999-expert-gallery-text-v111{margin:9px auto 0;max-width:390px;color:rgba(249,249,244,.94);font-size:15px;line-height:1.48;font-weight:500;text-wrap:balance}
      @media(max-width:700px){
        .club999-expert-section-v112{padding-top:16px!important}
        .club999-expert-gallery-card-v110{padding:2px 10px 12px!important}
        .club999-expert-gallery-dots-v110{margin-top:7px}
        .club999-expert-gallery-copy-v111{margin-top:13px;max-width:340px;padding:0 6px}
        .club999-expert-gallery-title-v111{font-size:20px;line-height:1.23}
        .club999-expert-gallery-text-v111{font-size:14px;line-height:1.46;color:rgba(249,249,244,.96)}
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
        ${IMAGES.map((src,i)=>`<div class="club999-expert-gallery-slide-v110${i===0?' is-active':''}" data-index="${i}"><img ${src?`src="${src}?v=113"`:'data-elina-v113="1"'} alt="Эксперт ${i+1}" ${i===0?'fetchpriority="high"':'loading="lazy"'} draggable="false"></div>`).join('')}
        <button class="club999-expert-gallery-arrow-v110 prev" type="button" aria-label="Предыдущий эксперт"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        <button class="club999-expert-gallery-arrow-v110 next" type="button" aria-label="Следующий эксперт"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      </div>
      <div class="club999-expert-gallery-dots-v110" aria-label="Выбор слайда">${IMAGES.map((_,i)=>`<button class="club999-expert-gallery-dot-v110${i===0?' is-active':''}" type="button" aria-label="Слайд ${i+1}" data-index="${i}"></button>`).join('')}</div>
      <div class="club999-expert-gallery-copy-v111">
        <div class="club999-expert-gallery-title-v111">Одна тема. Один специалист. Ваши вопросы.</div>
        <p class="club999-expert-gallery-text-v111">Глубже познакомьтесь с подходом эксперта и получите ориентиры для своей ситуации.</p>
      </div>`;
    card.appendChild(gallery);

    const elinaImg=gallery.querySelector('[data-elina-v113="1"]');
    if(elinaImg) loadElina(elinaImg);

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

  function apply(){
    if(document.querySelector('.club999-expert-gallery-v110'))return true;
    const section=findSection();if(!section)return false;
    section.classList.add('club999-expert-section-v112');
    const card=findCard(section);if(!card)return false;
    buildGallery(card);return true;
  }

  let tries=0;const timer=setInterval(()=>{tries+=1;if(apply()||tries>=50)clearInterval(timer)},120);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
