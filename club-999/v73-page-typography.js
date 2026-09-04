(()=>{
  const STYLE_ID='club999-page-typography-v73';
  const TITLES={
    'А ясности всё равно нет':['А ясности всё','равно нет'],
    'Точки входа в ваш актуальный запрос':['Точки входа','в ваш актуальный запрос'],
    'Темы пересекаются и дополняют друг друга':['Темы пересекаются','и дополняют друг друга'],
    'Материалы и люди, к которым можно возвращаться':['Материалы и люди,','к которым можно','возвращаться'],
    'Иногда нужен не ещё один эфир, а ответ на свой вопрос':['Иногда нужен','не ещё один эфир,','а ответ на свой вопрос'],
    'Нужное не теряется в ленте':['Нужное не теряется','в ленте'],
    'Тем, кому нужен не идеальный план, а следующая точка опоры':['Тем, кому нужен','не идеальный план, а','следующая точка','опоры'],
    'Жизненные задачи меняются':['Жизненные задачи','меняются'],
    'Полный доступ к «Центру Ресурса»':['Полный доступ','к «Центру Ресурса»'],
    'Не ищите идеальный момент, чтобы заняться собой':['Не ищите идеальный момент,','чтобы заняться собой']
  };
  const LONG=new Set([
    'Материалы и люди, к которым можно возвращаться',
    'Иногда нужен не ещё один эфир, а ответ на свой вопрос',
    'Тем, кому нужен не идеальный план, а следующая точка опоры',
    'Не ищите идеальный момент, чтобы заняться собой'
  ]);

  function injectStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      .section:not(.hero) h2.content-title-v73{
        color:#f3d98f!important;
        background:linear-gradient(180deg,#fff4c5 0%,#f3d98f 48%,#d8ad56 100%)!important;
        -webkit-background-clip:text!important;
        background-clip:text!important;
        -webkit-text-fill-color:transparent!important;
        text-shadow:none!important;
        font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
        font-weight:740!important;
        letter-spacing:-.036em!important;
        word-break:normal!important;
        overflow-wrap:normal!important;
        hyphens:none!important;
      }
      .section:not(.hero) h2.content-title-v73 .content-title-line-v73{display:inline}
      .section:not(.hero) h2.content-title-v73 .content-title-line-v73:not(:last-child)::after{content:" "}
      .section:not(.hero) h3,
      .section:not(.hero) li,
      .section:not(.hero) p{
        word-break:normal!important;
        overflow-wrap:normal!important;
        hyphens:none!important;
      }

      @media(max-width:700px){
        .section:not(.hero) .section-kicker,
        .section:not(.hero) [class$="__copy"]>.section-kicker,
        .section:not(.hero) [class$="__intro"]>.section-kicker,
        .section:not(.hero) [class$="__card"] .section-kicker{
          width:100%!important;
          max-width:none!important;
          margin:0 0 10px!important;
          text-align:center!important;
          color:#e2c570!important;
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
          font-size:11px!important;
          font-weight:760!important;
          line-height:1.35!important;
          letter-spacing:.17em!important;
          text-transform:uppercase!important;
        }
        .section:not(.hero) h2.content-title-v73{
          display:block!important;
          width:100%!important;
          max-width:none!important;
          margin:0 auto!important;
          padding:0!important;
          text-align:center!important;
          font-size:clamp(31px,8.25vw,38px)!important;
          line-height:1.02!important;
          text-wrap:initial!important;
        }
        .section:not(.hero) h2.content-title-v73.content-title-v73--long{
          font-size:clamp(28px,7.45vw,34px)!important;
          line-height:1.04!important;
        }
        .section:not(.hero) h2.content-title-v73 .content-title-line-v73{
          display:block!important;
          width:max-content!important;
          max-width:100%!important;
          margin:0 auto!important;
          white-space:nowrap!important;
          word-break:keep-all!important;
          overflow-wrap:normal!important;
          hyphens:none!important;
        }
        .section:not(.hero) h2.content-title-v73 .content-title-line-v73:not(:last-child)::after{content:none!important}

        .section:not(.hero) .section-heading,
        .section:not(.hero) .section-heading--split,
        .section:not(.hero) .directions__heading,
        .section:not(.hero) .connection__copy,
        .section:not(.hero) .questions__copy,
        .section:not(.hero) .audience__intro,
        .section:not(.hero) .return__card>div,
        .section:not(.hero) .access__copy{
          width:100%!important;
          max-width:none!important;
          text-align:center!important;
        }
        .section:not(.hero) .section-heading--split{
          display:block!important;
          gap:0!important;
        }
        .section:not(.hero) .section-heading--split>div{width:100%!important;max-width:none!important}

        .section:not(.hero) .section-heading>p:last-child,
        .section:not(.hero) .section-heading--split>p,
        .section:not(.hero) .directions__heading>p:last-child,
        .section:not(.hero) .connection__copy>p:not(.section-kicker),
        .section:not(.hero) .questions__copy>p:not(.section-kicker),
        .section:not(.hero) .return__card>div>p:not(.section-kicker),
        .section:not(.hero) .access__copy>p:not(.section-kicker):not(.button-note),
        .section:not(.hero).final>p:not(.section-kicker):not(.button-note){
          display:block!important;
          width:100%!important;
          max-width:none!important;
          box-sizing:border-box!important;
          margin:13px 0 0!important;
          padding:0!important;
          text-align:center!important;
          font-size:15px!important;
          font-weight:430!important;
          line-height:1.45!important;
        }

        .section:not(.hero) h3{
          font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif!important;
          font-size:18px!important;
          font-weight:650!important;
          line-height:1.28!important;
          letter-spacing:-.018em!important;
        }
      }

      @media(max-width:350px){
        .section:not(.hero) h2.content-title-v73{font-size:30px!important}
        .section:not(.hero) h2.content-title-v73.content-title-v73--long{font-size:27px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    injectStyle();
    let count=0;
    document.querySelectorAll('section.section:not(.hero) h2').forEach(h=>{
      const text=(h.textContent||'').replace(/\s+/g,' ').trim();
      const lines=TITLES[text];
      if(!lines) return;
      h.className='content-title-v73'+(LONG.has(text)?' content-title-v73--long':'');
      h.innerHTML=lines.map(line=>`<span class="content-title-line-v73">${line}</span>`).join('');
      count++;
    });
    return count>0;
  }

  if(!apply()){
    let attempts=0;
    const timer=setInterval(()=>{
      attempts+=1;
      if(apply()||attempts>=60) clearInterval(timer);
    },100);
  }
})();