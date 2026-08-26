(function(){
  const STYLE_ID='club-inside-cards-nebula-v82';

  const commonStars=`
    <g fill="#E9FBFC" opacity=".88">
      <circle cx="42" cy="44" r="1.4"/><circle cx="73" cy="27" r="1.1"/>
      <circle cx="104" cy="50" r="1.2"/><circle cx="137" cy="22" r="1.1"/>
      <circle cx="191" cy="31" r="1.2"/><circle cx="231" cy="48" r="1.4"/>
      <circle cx="275" cy="33" r="1.1"/><circle cx="292" cy="72" r="1.2"/>
      <circle cx="57" cy="112" r="1.1"/><circle cx="263" cy="116" r="1.1"/>
    </g>
    <g fill="#F2D889" opacity=".78">
      <circle cx="88" cy="82" r="1.4"/><circle cx="122" cy="129" r="1.2"/>
      <circle cx="207" cy="122" r="1.3"/><circle cx="247" cy="86" r="1.2"/>
    </g>`;

  const defs=(id)=>`
    <defs>
      <linearGradient id="${id}Gold" x1="72" y1="28" x2="250" y2="160" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFF3C7"/><stop offset=".46" stop-color="#E8C66D"/><stop offset="1" stop-color="#B97825"/>
      </linearGradient>
      <radialGradient id="${id}Core"><stop stop-color="#FFF9DC"/><stop offset=".5" stop-color="#F0D074"/><stop offset="1" stop-color="#C98A2D" stop-opacity=".05"/></radialGradient>
      <filter id="${id}Glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="${id}Soft" x="-60%" y="-80%" width="220%" height="260%"><feGaussianBlur stdDeviation="13"/></filter>
    </defs>`;

  const icons={
    directions:`<svg viewBox="0 0 320 190" aria-hidden="true">${defs('d82')}
      <g filter="url(#d82Soft)" opacity=".82">
        <ellipse cx="110" cy="87" rx="79" ry="25" fill="#58D6E7" transform="rotate(-20 110 87)"/>
        <ellipse cx="214" cy="78" rx="76" ry="23" fill="#2D92AF" transform="rotate(18 214 78)"/>
        <path d="M34 126C85 55 123 127 166 73C201 31 243 68 294 40" fill="none" stroke="#87E8F2" stroke-width="11" stroke-linecap="round" opacity=".38"/>
      </g>${commonStars}
      <g fill="none" stroke="url(#d82Gold)" opacity=".42"><circle cx="160" cy="88" r="58"/><circle cx="160" cy="88" r="77" stroke-width="1.2"/><circle cx="160" cy="88" r="94" stroke-width=".8"/></g>
      <g fill="rgba(10,78,91,.20)" stroke="url(#d82Gold)" stroke-width="3.2" filter="url(#d82Glow)" stroke-linejoin="round">
        <path d="M160 82C145 66 140 48 147 31C165 36 177 51 177 69C174 76 169 81 160 82Z"/>
        <path d="M160 82C176 67 194 63 211 71C205 88 190 99 172 99C165 96 161 91 160 82Z"/>
        <path d="M160 82C175 98 180 116 173 133C155 128 143 113 143 95C146 88 151 83 160 82Z"/>
        <path d="M160 82C144 97 126 101 109 93C115 76 130 65 148 65C155 68 159 73 160 82Z"/>
        <path d="M160 82C145 73 128 73 114 83C123 96 140 102 157 96C161 91 162 87 160 82Z" opacity=".78"/>
        <path d="M160 82C175 91 192 91 206 81C197 68 180 62 163 68C159 73 158 77 160 82Z" opacity=".78"/>
      </g>
      <circle cx="160" cy="82" r="14" fill="url(#d82Core)" filter="url(#d82Glow)"/>
      <g fill="#EDCC74" filter="url(#d82Glow)"><circle cx="160" cy="20" r="3"/><circle cx="217" cy="54" r="2.8"/><circle cx="217" cy="119" r="2.8"/><circle cx="160" cy="150" r="3"/><circle cx="103" cy="119" r="2.8"/><circle cx="103" cy="54" r="2.8"/></g>
    </svg>`,

    experts:`<svg viewBox="0 0 320 190" aria-hidden="true">${defs('e82')}
      <g filter="url(#e82Soft)" opacity=".82">
        <ellipse cx="104" cy="86" rx="76" ry="24" fill="#5AD8E8" transform="rotate(-21 104 86)"/>
        <ellipse cx="216" cy="81" rx="82" ry="24" fill="#2C91AE" transform="rotate(16 216 81)"/>
        <path d="M35 122C83 64 120 113 161 75C202 38 242 69 292 43" fill="none" stroke="#8BE9F2" stroke-width="10" stroke-linecap="round" opacity=".36"/>
      </g>${commonStars}
      <g fill="none" stroke="url(#e82Gold)" opacity=".40"><circle cx="160" cy="88" r="63"/><circle cx="160" cy="88" r="84" stroke-width="1"/></g>
      <g fill="rgba(8,70,82,.22)" stroke="url(#e82Gold)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" filter="url(#e82Glow)">
        <circle cx="160" cy="58" r="20"/><path d="M124 126C128 100 142 88 160 88C178 88 192 100 196 126"/>
        <circle cx="104" cy="77" r="16"/><path d="M77 126C81 106 91 97 104 97C117 97 127 105 132 120" opacity=".92"/>
        <circle cx="216" cy="77" r="16"/><path d="M188 120C193 105 203 97 216 97C229 97 239 106 243 126" opacity=".92"/>
        <path d="M68 53C90 31 116 22 145 24M175 24C204 22 230 31 252 53" opacity=".52" stroke-width="1.8"/>
        <path d="M74 135C102 151 128 157 160 157C192 157 218 151 246 135" opacity=".34" stroke-width="1.4"/>
      </g>
      <circle cx="160" cy="132" r="7" fill="#EDCA70" filter="url(#e82Glow)"/>
    </svg>`,

    question:`<svg viewBox="0 0 320 190" aria-hidden="true">${defs('q82')}
      <g filter="url(#q82Soft)" opacity=".84">
        <ellipse cx="108" cy="87" rx="78" ry="24" fill="#5ADAE9" transform="rotate(-20 108 87)"/>
        <ellipse cx="215" cy="79" rx="79" ry="23" fill="#2C91AE" transform="rotate(17 215 79)"/>
        <path d="M34 127C80 58 122 125 164 73C199 30 241 66 295 40" fill="none" stroke="#8BE9F2" stroke-width="11" stroke-linecap="round" opacity=".37"/>
      </g>${commonStars}
      <g fill="none" stroke="url(#q82Gold)" opacity=".42"><circle cx="160" cy="82" r="61"/><circle cx="160" cy="82" r="82" stroke-width="1.1"/><circle cx="160" cy="82" r="98" stroke-width=".8"/></g>
      <g fill="none" stroke="url(#q82Gold)" stroke-linecap="round" stroke-linejoin="round" filter="url(#q82Glow)">
        <path d="M132 59C134 38 148 27 165 27C186 27 199 40 199 58C199 75 189 84 176 92C164 99 159 106 159 118" stroke-width="7"/>
        <circle cx="159" cy="142" r="7" fill="url(#q82Core)" stroke-width="3"/>
        <path d="M92 89C116 111 139 119 160 119C181 119 204 111 228 89" opacity=".42" stroke-width="1.5"/>
      </g>
      <circle cx="160" cy="20" r="3" fill="#EDCC74" filter="url(#q82Glow)"/>
    </svg>`,

    materials:`<svg viewBox="0 0 320 190" aria-hidden="true">${defs('m82')}
      <g filter="url(#m82Soft)" opacity=".83">
        <ellipse cx="106" cy="87" rx="77" ry="24" fill="#5AD8E8" transform="rotate(-21 106 87)"/>
        <ellipse cx="216" cy="80" rx="82" ry="24" fill="#2C91AE" transform="rotate(16 216 80)"/>
        <path d="M34 126C82 61 122 120 164 74C202 33 242 67 294 42" fill="none" stroke="#8BE9F2" stroke-width="10" stroke-linecap="round" opacity=".36"/>
      </g>${commonStars}
      <g fill="none" stroke="url(#m82Gold)" opacity=".38"><circle cx="160" cy="86" r="70"/><circle cx="160" cy="86" r="91" stroke-width=".9"/></g>
      <g fill="rgba(7,65,78,.26)" stroke="url(#m82Gold)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#m82Glow)">
        <path d="M100 53H184L201 70V139H100Z"/>
        <path d="M184 53V71H201"/>
        <path d="M84 63H100V139H84Z" opacity=".82"/>
        <path d="M122 79H136L143 86L157 68M122 101H136L143 108L157 90M122 123H136L143 130L157 112"/>
        <path d="M173 80H188M173 102H188M173 124H188" opacity=".76"/>
        <path d="M81 147H213" opacity=".54" stroke-width="1.6"/>
      </g>
      <circle cx="160" cy="24" r="3" fill="#EDCC74" filter="url(#m82Glow)"/>
    </svg>`
  };

  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #insideCenterSection .inside-grid{gap:12px !important;}
      #insideCenterSection .inside-card.v82-nebula-card{
        position:relative !important;aspect-ratio:4/3 !important;min-height:0 !important;
        overflow:hidden !important;border-radius:22px !important;
        border:1px solid rgba(221,184,89,.62) !important;
        background:
          radial-gradient(ellipse at 24% 40%,rgba(78,207,222,.25),transparent 33%),
          radial-gradient(ellipse at 78% 24%,rgba(35,135,157,.18),transparent 32%),
          linear-gradient(160deg,#074a59 0%,#043743 48%,#01242e 100%) !important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 12px 28px rgba(0,0,0,.18),0 0 22px rgba(44,162,182,.08) !important;
      }
      #insideCenterSection .inside-card.v82-nebula-card::before{
        content:"" !important;display:block !important;position:absolute !important;inset:7px !important;
        border:1px solid rgba(223,186,90,.24) !important;border-radius:16px !important;
        background:radial-gradient(circle at 18% 18%,rgba(255,248,216,.72) 0 1px,transparent 1.4px),radial-gradient(circle at 73% 15%,rgba(255,229,153,.55) 0 1px,transparent 1.3px),radial-gradient(circle at 88% 52%,rgba(220,248,250,.48) 0 1px,transparent 1.3px),radial-gradient(circle at 38% 68%,rgba(255,235,171,.42) 0 1px,transparent 1.3px);
        pointer-events:none !important;z-index:1 !important;
      }
      #insideCenterSection .inside-card.v82-nebula-card::after{display:none !important;content:none !important;}
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__frame{display:none !important;}
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__art{
        position:absolute !important;inset:5px 6px 44px 6px !important;height:auto !important;
        display:flex !important;align-items:center !important;justify-content:center !important;
        overflow:visible !important;z-index:2 !important;margin:0 !important;
      }
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__baked{width:100% !important;height:100% !important;display:block !important;overflow:visible !important;}
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__baked svg{display:block !important;width:100% !important;height:100% !important;overflow:visible !important;filter:drop-shadow(0 0 10px rgba(235,199,105,.12)) !important;}
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__copy{
        position:absolute !important;left:12px !important;right:42px !important;bottom:11px !important;
        z-index:5 !important;margin:0 !important;padding:0 !important;text-align:left !important;
        background:none !important;border:0 !important;box-shadow:none !important;transform:none !important;
      }
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__copy::before,#insideCenterSection .inside-card.v82-nebula-card .inside-card__copy::after{display:none !important;content:none !important;}
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__title{
        display:block !important;color:#F4E6C0 !important;-webkit-text-fill-color:#F4E6C0 !important;
        background:none !important;font-family:Georgia,"Times New Roman",serif !important;
        font-size:clamp(15px,3.25vw,20px) !important;font-weight:700 !important;line-height:1.02 !important;
        letter-spacing:-.012em !important;text-shadow:0 2px 4px rgba(0,12,17,.92),0 0 12px rgba(0,12,17,.85) !important;
      }
      #insideCenterSection .inside-card.v82-nebula-card .inside-card__tap-badge{
        top:10px !important;right:10px !important;width:31px !important;height:31px !important;min-width:31px !important;
        padding:0 !important;border-radius:50% !important;border:1px solid rgba(235,199,105,.76) !important;
        background:radial-gradient(circle at 35% 30%,rgba(255,247,216,.22),rgba(8,54,64,.94) 72%) !important;
        color:#F4E6C0 !important;font-size:22px !important;font-weight:500 !important;line-height:1 !important;
        box-shadow:0 0 13px rgba(231,192,92,.24),inset 0 1px 0 rgba(255,255,255,.12) !important;z-index:7 !important;
      }
      @media(max-width:640px){
        #insideCenterSection .inside-grid{gap:10px !important;}
        #insideCenterSection .inside-card.v82-nebula-card{border-radius:19px !important;}
        #insideCenterSection .inside-card.v82-nebula-card .inside-card__art{inset:4px 4px 39px 4px !important;}
        #insideCenterSection .inside-card.v82-nebula-card .inside-card__copy{left:10px !important;right:36px !important;bottom:9px !important;}
        #insideCenterSection .inside-card.v82-nebula-card .inside-card__title{font-size:clamp(14px,4.1vw,17px) !important;}
        #insideCenterSection .inside-card.v82-nebula-card .inside-card__tap-badge{top:8px !important;right:8px !important;width:28px !important;height:28px !important;min-width:28px !important;font-size:20px !important;}
      }
    `;
    document.head.appendChild(style);
  }

  function apply(){
    addStyle();
    document.querySelectorAll('#insideCenterSection .inside-card[data-popup]').forEach(card=>{
      const kind=card.getAttribute('data-popup');
      const baked=card.querySelector('.inside-card__baked');
      const badge=card.querySelector('.inside-card__tap-badge');
      if(!icons[kind]||!baked) return;
      card.classList.remove('v81-first-card');
      card.classList.add('v82-nebula-card');
      baked.innerHTML=icons[kind];
      if(badge) badge.textContent='+';
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true});
  else apply();
})();
