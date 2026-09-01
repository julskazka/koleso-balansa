(()=>{
  const id='club999-clarity-cards-v76';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    @media(max-width:700px){
      .clarity__grid{gap:18px!important}
      .question-stack{
        display:grid!important;
        gap:10px!important;
      }
      .question-card{
        min-height:0!important;
        padding:13px 15px!important;
        grid-template-columns:26px minmax(0,1fr)!important;
        gap:9px!important;
        align-items:center!important;
        border-radius:17px!important;
      }
      .question-card span{
        align-self:center!important;
        font-size:10px!important;
        line-height:1!important;
        letter-spacing:.11em!important;
      }
      .question-card p{
        margin:0!important;
        font-size:15px!important;
        font-weight:500!important;
        line-height:1.32!important;
      }
    }
    @media(max-width:360px){
      .question-stack{gap:8px!important}
      .question-card{
        padding:12px 13px!important;
        grid-template-columns:24px minmax(0,1fr)!important;
        gap:8px!important;
        border-radius:15px!important;
      }
      .question-card p{font-size:14px!important}
    }
  `;
  document.head.appendChild(style);
})();