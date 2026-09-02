(()=>{
  const STYLE_ID='club999-expert-gallery-v110';
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
        padding:18px!important;
        min-height:0!important;
        height:auto!important;
        overflow:visible!important;
      }
      .club999-expert-gallery-v110{
        width:100%;
        max-width:520px;
        margin:0 auto;
      }
      .club999-expert-gallery-kicker-v110{
        margin:0 0 14px;
        text-align:center;
        color:#efd47c;
        font-size:12px;
        font-weight:800;
        letter-spacing:.12em;
        text-transform:uppercase;
      }
      .club999-expert-gallery-stage-v110{
        position:relative;
        width:100%;
        aspect-ratio:1/1;
        overflow:hidden;
        border:1px solid rgba(234,199,96,.45);
        border-radius:18px;
        background:#062f39;
        box-shadow:0 10px 30px rgba(0,0,0,.18),0 0 22px rgba(237,201,95,.08);
        touch-action:pan-y;
      }
      .club999-expert-gallery-slide-v110{
        position:absolute;
        inset:0;
        opacity:0;
        visibility:hidden;
        transform:translateX(12px);
        transition:opacity .28s ease,transform .28s ease,visibility .28s step-end;
        pointer-events:none;
      }
      .club999-expert-gallery-slide-v110.is-active{
        opacity:1;
        visibility:visible;
        transform:translateX(0);
        transition:opacity .28s ease,transform .28s ease;
        pointer-events:auto;
      }
      .club999-expert-gallery-slide-v110 img{
        display:block;
        width:100%;
        height:100%;
        object-fit:contain;
        object-position:center;
        user-select:none;
        -webkit-user-drag:none;
      }
      .club999-expert-gallery-arrow-v110{
        position:absolute;
        z-index:5;
        top:50%;
        width:38px;
        height:38px;
        margin-top:-19px;
        display:grid;
        place-items:center;
        padding:0;
        border-radius:50%;
        border:1px solid rgba(244,211,111,.72);
        color:#ffe7a0;
        background:rgba(3,39,48,.78);
        box-shadow:0 4px 14px rgba(0,0,0,.24),0 0 14px rgba(238,198,91,.12);
        backdrop-filter:blur(8px);
        -webkit-backdrop-filter:blur(8px);
        cursor:pointer;
      }
      .club999-expert-gallery-arrow-v110:active{transform:translateY(1px) scale(.97)}
      .club999-expert-gallery-arrow-v110.prev{left:9px}
      .club999-expert-gallery-arrow-v110.next{right:9px}
      .club999-expert-gallery-arrow-v110 svg{width:18px;height:18px;display:block}
      .club999-expert-gallery-dots-v110{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:7px;
        margin-top:12px;
      }
      .club999-expert-gallery-dot-v110{
        width:6px;
        height:6px;
        padding:0;
        border:0;
        border-radius:50%;
        background:rgba(222,205,151,.32);
        box-shadow:none;
        cursor:pointer;
        transition:width .2s ease,background .2s ease,box-shadow .2s ease;
      }
      .club999-expert-gallery-dot-v110.is-active{
        width:18px;
        border-radius:999px;
        background:#e8c768;
        box-shadow:0 0 9px rgba(232,199,104,.32);
      }
      @media(max-width:700px){
        .club999-expert-gallery-card-v110{padding:14px!important}
        .club999-expert-gallery-kicker-v110{margin-bottom:11px;font-size:11px}
        .club999-expert-gallery-stage-v110{border-radius:15px}
        .club999-expert-gallery-arrow-v110{width:34px;height:34px;margin-top:-17px}
        .club999-expert-gallery-arrow-v110.prev{left:7px}
        .club999-expert-gallery-arrow-v110.next{right:7px}
        .club999-expert-gallery-arrow-v110 svg{width:16px;height:16px}
        .club999-expert-gallery-dots-v110{margin-top:10px}
      }
    `;
    document.head.appendChild(style);
  }

  function findSection(){
    const headings=[...document.querySelectorAll('h1,h2,h3')];
    let h=headings.find(el=>{
      const t=norm(el.textContent);
      return t.includes('иногда нужен') && t.includes('ответ на свой вопрос');
    });
    if(h) return h.closest('section,.section') || h.parentElement;

    const nodes=[...document.querySelectorAll('section,.section')];
    return nodes.find(el=>{
      const t=norm(el.textContent);
      return t.includes('иногда нужен') && t.includes('день эксперта') && t.includes('ваши вопросы');
    }) || null;
  }

  function findCard(section){
    const all=[...section.querySelectorAll('*')];
    const label=all.find(el=>norm(el.textContent)==='день эксперта');
    if(!label) return null;

    let node=label;
    let fallback=null;
    for(let i=0;i<9 && node && node!==section;i++,node=node.parentElement){
      const t=norm(node.textContent);
      if(!t.includes('одна тема') || !t.includes('ваши вопросы')) continue;
      if(!fallback) fallback=node;
      const cs=getComputedStyle(node);
      const radius=parseFloat(cs.borderTopLeftRadius)||0;
      const border=parseFloat(cs.borderTopWidth)||0;
      if(radius>=12 && border>0) return node;
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
      <div class="club999-expert-gallery-kicker-v110">День эксперта</div>
      <div class="club999-expert-gallery-stage-v110" tabindex="0" aria-label="Галерея экспертов">
        ${IMAGES.map((src,i)=>`<div class="club999-expert-gallery-slide-v110${i===0?' is-active':''}" data-index="${i}"><img src="${src}?v=110" alt="Эксперт ${i+1}" ${i===0?'fetchpriority="high"':'loading="lazy"'} draggable="false"></div>`).join('')}
        <button class="club999-expert-gallery-arrow-v110 prev" type="button" aria-label="Предыдущий эксперт">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="club999-expert-gallery-arrow-v110 next" type="button" aria-label="Следующий эксперт">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5.5 6.5 6.5-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <div class="club999-expert-gallery-dots-v110" aria-label="Выбор слайда">
        ${IMAGES.map((_,i)=>`<button class="club999-expert-gallery-dot-v110${i===0?' is-active':''}" type="button" aria-label="Слайд ${i+1}" data-index="${i}"></button>`).join('')}
      </div>`;
    card.appendChild(gallery);

    const stage=gallery.querySelector('.club999-expert-gallery-stage-v110');
    const slides=[...gallery.querySelectorAll('.club999-expert-gallery-slide-v110')];
    const dots=[...gallery.querySelectorAll('.club999-expert-gallery-dot-v110')];
    let current=0;
    let touchX=null;

    const show=index=>{
      current=(index+slides.length)%slides.length;
      slides.forEach((slide,i)=>slide.classList.toggle('is-active',i===current));
      dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===current));
    };

    gallery.querySelector('.prev').addEventListener('click',()=>show(current-1));
    gallery.querySelector('.next').addEventListener('click',()=>show(current+1));
    dots.forEach(dot=>dot.addEventListener('click',()=>show(Number(dot.dataset.index))));

    stage.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}
      if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}
    });
    stage.addEventListener('touchstart',e=>{touchX=e.touches[0]?.clientX ?? null},{passive:true});
    stage.addEventListener('touchend',e=>{
      if(touchX===null) return;
      const end=e.changedTouches[0]?.clientX ?? touchX;
      const dx=end-touchX;
      touchX=null;
      if(Math.abs(dx)<42) return;
      show(dx>0?current-1:current+1);
    },{passive:true});
  }

  function apply(){
    if(document.querySelector('.club999-expert-gallery-v110')) return true;
    const section=findSection();
    if(!section) return false;
    const card=findCard(section);
    if(!card) return false;
    buildGallery(card);
    return true;
  }

  let tries=0;
  const timer=setInterval(()=>{
    tries+=1;
    if(apply()||tries>=50) clearInterval(timer);
  },120);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
