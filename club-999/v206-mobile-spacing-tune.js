(()=>{
  const id='club999-v206-mobile-spacing-tune';
  document.getElementById(id)?.remove();
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    /* v206 — only the three approved mobile spacing corrections. */
    @media(max-width:700px){
      /* 1. Hero -> «Когда информации много»: reduce the oversized gap. */
      html body .clarity.section{
        padding-top:4px!important;
        margin-top:0!important;
      }

      /* 2. Access list -> final CTA card: give the card more breathing room. */
      html body .section.final{
        margin-top:28px!important;
      }

      /* 3. Direction cards -> «Темы пересекаются…»: increase the cramped gap. */
      html body .club999-cross-section-v103{
        padding-top:24px!important;
      }
    }

    @media(max-width:380px){
      html body .clarity.section{
        padding-top:3px!important;
      }
      html body .section.final{
        margin-top:26px!important;
      }
      html body .club999-cross-section-v103{
        padding-top:22px!important;
      }
    }
  `;
  document.head.appendChild(style);
})();
