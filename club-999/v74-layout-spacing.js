(()=>{
  const id='club999-layout-spacing-v74';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    /* v74 — section rhythm copied to the compact club-for-1-ruble system */
    @media(max-width:700px){
      .section:not(.hero){
        padding-top:48px!important;
        padding-bottom:48px!important;
      }
      .clarity.section{
        padding-top:18px!important;
        padding-bottom:48px!important;
      }
      .directions.section{
        padding-top:18px!important;
      }

      .section:not(.hero) .section-heading,
      .section:not(.hero) .section-heading--split,
      .section:not(.hero) .directions__heading,
      .section:not(.hero) .audience__intro{
        margin-top:0!important;
        margin-bottom:26px!important;
      }

      .section:not(.hero) .section-kicker{
        margin-bottom:8px!important;
      }

      .section:not(.hero) h2.content-title-v73{
        margin-top:0!important;
        margin-bottom:0!important;
      }

      .section:not(.hero) .section-heading>p:last-child,
      .section:not(.hero) .section-heading--split>p,
      .section:not(.hero) .directions__heading>p:last-child{
        margin-top:12px!important;
        margin-bottom:0!important;
      }

      .clarity__grid,
      .direction-grid,
      .inside-grid,
      .difference__grid{
        margin-top:0!important;
      }

      .connection{
        gap:26px!important;
      }
      .connection__copy{
        order:-1!important;
      }
      .connection__copy>p:not(.section-kicker){
        margin-top:12px!important;
        margin-bottom:0!important;
      }

      .questions__panel{
        gap:26px!important;
      }
      .questions__copy>p:not(.section-kicker){
        margin-top:12px!important;
        margin-bottom:0!important;
      }

      .audience{
        gap:26px!important;
      }
      .audience__content{
        padding-top:0!important;
      }

      .return__card,
      .access__card{
        gap:26px!important;
      }
      .return__card>div>p:not(.section-kicker),
      .access__copy>p:not(.section-kicker):not(.button-note){
        margin-top:12px!important;
        margin-bottom:0!important;
      }
      .return__card ul,
      .access__includes{
        margin-top:0!important;
      }
      .return__accent{
        margin-top:24px!important;
      }

      .section-action{
        margin-top:24px!important;
      }

      .final{
        min-height:auto!important;
        padding-top:54px!important;
        padding-bottom:54px!important;
      }
      .final>p:not(.section-kicker):not(.button-note){
        margin:12px 0 24px!important;
      }

      .modal__dialog .section-kicker{
        margin-bottom:8px!important;
      }
      .modal__dialog h2{
        margin:0!important;
      }
      .modal__dialog>p:not(.section-kicker){
        margin:12px 0 22px!important;
      }
    }

    @media(min-width:701px){
      .section:not(.hero){
        padding-top:82px!important;
        padding-bottom:82px!important;
      }
      .section:not(.hero) .section-heading,
      .section:not(.hero) .section-heading--split,
      .section:not(.hero) .directions__heading{
        margin-bottom:36px!important;
      }
      .section:not(.hero) .section-kicker{
        margin-bottom:11px!important;
      }
      .section:not(.hero) .section-heading>p:last-child,
      .section:not(.hero) .section-heading--split>p,
      .section:not(.hero) .directions__heading>p:last-child{
        margin-top:14px!important;
      }
      .connection,
      .audience{
        gap:56px!important;
      }
      .return__card,
      .access__card{
        gap:52px!important;
      }
      .final{
        min-height:540px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();