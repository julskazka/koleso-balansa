(() => {
  'use strict';

  const STYLE_ID = 'wheel-free-spin-design-v25-style';

  const icons = {
    sector: `
      <svg class="wheel-used-sector-icon-v25" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 6c3.8 5.2 5.7 9.3 5.7 12.5 0 3.5-2.2 6.4-5.7 8.4-3.5-2-5.7-4.9-5.7-8.4C14.3 15.3 16.2 11.2 20 6Z"/>
        <path d="M7.5 17.2c6.4.8 10.6 2.6 12.5 5.2-1.2 3.8-3.7 6.4-7.3 7.8-3.1-2.3-4.8-6.7-5.2-13Z"/>
        <path d="M32.5 17.2c-6.4.8-10.6 2.6-12.5 5.2 1.2 3.8 3.7 6.4 7.3 7.8 3.1-2.3 4.8-6.7 5.2-13Z"/>
        <path d="M4.8 27.2c5.2-.2 9.5 1 12.7 3.7-3.2 2.3-7 3.4-11.4 3.1M35.2 27.2c-5.2-.2-9.5 1-12.7 3.7 3.2 2.3 7 3.4 11.4 3.1"/>
      </svg>`,
    back: `
      <svg class="wheel-used-button-icon-v25" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M12.8 8 5.5 15.3l7.3 7.2"/>
        <path d="M6.2 15.3h11.2c5.3 0 8.4 2.7 8.4 7.2"/>
      </svg>`,
    star: `
      <svg class="wheel-used-button-icon-v25" viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 2.8 2.4 8.8L27 9l-6.2 6.5 7.4 5-9.1.5L16 29.2 12.9 21l-9.1-.5 7.4-5L5 9l8.6 2.6L16 2.8Z"/>
        <circle cx="16" cy="16" r="2.1"/>
      </svg>`,
    lock: `
      <svg class="wheel-used-lock-icon-v25" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5.5" y="10" width="13" height="10" rx="2.2"/>
        <path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10"/>
        <path d="M12 14v2.6"/>
      </svg>`
  };

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      html.wheel-free-spin-used-v24 #result strong { margin-left: 4px; }

      .wheel-used-card-v24,
      .wheel-used-dialog-v24 {
        --wheel-v25-gold: #e4bd68;
        --wheel-v25-gold-soft: #f0d79b;
        --wheel-v25-cream: #fff1cf;
        --wheel-v25-copy: rgba(245, 241, 226, .88);
        position: relative !important;
        isolation: isolate !important;
        overflow: hidden !important;
        color: var(--wheel-v25-cream) !important;
        text-align: center !important;
        background:
          radial-gradient(circle at 50% -18%, #0b5b70 0%, #063f51 28%, #032d3d 56%, #021d2a 100%) !important;
        border: 1px solid rgba(232, 197, 112, .78) !important;
        box-shadow:
          0 24px 62px rgba(0, 8, 16, .42),
          inset 0 1px 0 rgba(255, 255, 255, .08),
          inset 0 0 46px rgba(0, 20, 30, .26) !important;
        backdrop-filter: none !important;
      }

      .wheel-used-card-v24 {
        z-index: 60 !important;
        width: min(100%, 520px) !important;
        margin: 20px auto 28px !important;
        padding: 26px 18px 20px !important;
        border-radius: 22px !important;
      }

      .wheel-used-kicker-v24 {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        margin: 0 0 9px !important;
        color: var(--wheel-v25-gold) !important;
        font-size: 12px !important;
        font-weight: 800 !important;
        letter-spacing: .18em !important;
        line-height: 1.2 !important;
      }

      .wheel-used-kicker-v24::before,
      .wheel-used-kicker-v24::after {
        content: '✦';
        font-size: 10px;
        letter-spacing: 0;
      }

      .wheel-used-card-v24 h3,
      .wheel-used-dialog-v24 h2 {
        color: var(--wheel-v25-cream) !important;
        font-family: inherit !important;
        font-weight: 800 !important;
        letter-spacing: -.025em !important;
        line-height: 1.12 !important;
        text-shadow: 0 1px 12px rgba(0, 0, 0, .16);
      }

      .wheel-used-card-v24 h3 {
        margin: 0 !important;
        font-size: clamp(25px, 6vw, 34px) !important;
      }

      .wheel-used-card-v24 h3 + p,
      .wheel-used-dialog-v24 h2 + p {
        margin-top: 9px !important;
      }

      .wheel-used-card-v24 p,
      .wheel-used-dialog-v24 p {
        max-width: 450px !important;
        color: var(--wheel-v25-copy) !important;
        font-family: inherit !important;
        font-size: 15px !important;
        line-height: 1.52 !important;
      }

      .wheel-used-card-v24 p {
        margin: 0 auto 15px !important;
      }

      .wheel-used-sector-v24 {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 12px !important;
        min-width: 190px !important;
        min-height: 50px !important;
        box-sizing: border-box !important;
        margin: 0 0 18px !important;
        padding: 8px 24px !important;
        border: 1px solid rgba(224, 183, 90, .78) !important;
        border-radius: 999px !important;
        background: linear-gradient(180deg, #063c48, #032935) !important;
        color: var(--wheel-v25-gold-soft) !important;
        font-size: 22px !important;
        font-weight: 800 !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .045) !important;
      }

      .wheel-used-sector-icon-v25 {
        width: 30px;
        height: 30px;
        flex: 0 0 auto;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .wheel-used-divider-v25 {
        display: flex;
        align-items: center;
        gap: 13px;
        margin: 19px 0 18px;
        color: var(--wheel-v25-gold);
      }

      .wheel-used-divider-v25::before,
      .wheel-used-divider-v25::after {
        content: '';
        height: 1px;
        flex: 1;
        background: linear-gradient(90deg, transparent, rgba(225, 185, 94, .55));
      }

      .wheel-used-divider-v25::after {
        background: linear-gradient(90deg, rgba(225, 185, 94, .55), transparent);
      }

      .wheel-used-divider-v25 span {
        font-size: 14px;
        line-height: 1;
      }

      .wheel-used-actions-v24 {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 11px !important;
        margin-top: 0 !important;
      }

      .wheel-used-button-v24 {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        width: 100% !important;
        min-height: 48px !important;
        box-sizing: border-box !important;
        border-radius: 14px !important;
        padding: 11px 16px !important;
        font-family: inherit !important;
        font-size: 15px !important;
        font-weight: 800 !important;
        line-height: 1.25 !important;
        transition: transform .16s ease, filter .16s ease, box-shadow .16s ease;
      }

      .wheel-used-button-v24:active { transform: translateY(1px) scale(.995); }

      .wheel-used-button-icon-v25 {
        width: 23px;
        height: 23px;
        flex: 0 0 auto;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .wheel-used-button-v24.is-secondary {
        border: 1px solid rgba(228, 190, 101, .78) !important;
        background: linear-gradient(180deg, #05303e, #03222f) !important;
        color: var(--wheel-v25-gold-soft) !important;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, .045) !important;
      }

      .wheel-used-button-v24.is-primary {
        border: 1px solid rgba(255, 255, 255, .44) !important;
        background: linear-gradient(180deg, #fffaf0 0%, #f5e8c9 52%, #ead7aa 100%) !important;
        color: #102a2e !important;
        box-shadow:
          inset 0 2px 1px rgba(255, 255, 255, .94),
          0 9px 22px rgba(0, 0, 0, .22) !important;
      }

      .wheel-used-button-v24.is-primary .wheel-used-button-icon-v25 {
        color: #a87a26;
      }

      .wheel-used-footnote-v25 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 9px;
        max-width: 410px;
        margin: 16px auto 0;
        color: rgba(244, 239, 221, .78);
        font-size: 12px;
        line-height: 1.42;
        text-align: left;
      }

      .wheel-used-lock-icon-v25 {
        width: 18px;
        height: 18px;
        flex: 0 0 auto;
        margin-top: 1px;
        fill: none;
        stroke: var(--wheel-v25-gold);
        stroke-width: 1.7;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .wheel-used-offer-v24 {
        background: rgba(0, 10, 17, .78) !important;
        backdrop-filter: blur(8px) !important;
      }

      .wheel-used-dialog-v24 {
        padding: 30px 20px 22px !important;
        border-radius: 24px 24px 18px 18px !important;
      }

      .wheel-used-dialog-v24 h2 {
        margin: 2px 34px 10px !important;
        font-size: clamp(26px, 6.3vw, 36px) !important;
      }

      .wheel-used-close-v24 {
        border: 1px solid rgba(232, 201, 125, .34) !important;
        background: #021f2b !important;
        color: #fff1c8 !important;
      }

      @media (max-width: 520px) {
        .wheel-used-card-v24 {
          width: calc(100% - 12px) !important;
          margin-top: 16px !important;
          padding: 22px 15px 17px !important;
          border-radius: 18px !important;
        }
        .wheel-used-card-v24 h3 { font-size: clamp(24px, 7vw, 31px) !important; }
        .wheel-used-card-v24 p,
        .wheel-used-dialog-v24 p { font-size: 14px !important; }
        .wheel-used-sector-v24 {
          min-width: 150px !important;
          min-height: 47px !important;
          padding: 7px 20px !important;
          font-size: 21px !important;
        }
        .wheel-used-sector-icon-v25 { width: 27px; height: 27px; }
        .wheel-used-divider-v25 { margin: 17px 0 16px; }
        .wheel-used-button-v24 {
          min-height: 45px !important;
          border-radius: 13px !important;
          padding: 10px 13px !important;
          font-size: 14px !important;
        }
        .wheel-used-button-icon-v25 { width: 21px; height: 21px; }
        .wheel-used-dialog-v24 { padding: 27px 15px 18px !important; }
        .wheel-used-footnote-v25 { font-size: 11.5px; }
      }
    `;
    document.head.appendChild(style);
  }

  function decorateSector(sector) {
    if (!sector || sector.querySelector('.wheel-used-sector-icon-v25')) return;
    sector.insertAdjacentHTML('afterbegin', icons.sector);
  }

  function decorateButton(button, icon) {
    if (!button || button.querySelector('.wheel-used-button-icon-v25')) return;
    const label = button.textContent.trim();
    button.innerHTML = `${icon}<span>${label}</span>`;
  }

  function decoratePanel(panel) {
    if (!panel) return;

    panel.querySelectorAll('.wheel-used-sector-v24').forEach(decorateSector);

    decorateButton(
      panel.querySelector('[data-open-saved-practice]'),
      icons.back
    );
    decorateButton(
      panel.querySelector('[data-open-wheel-club]'),
      icons.star
    );

    const actions = panel.querySelector('.wheel-used-actions-v24');
    if (!actions) return;

    if (!actions.previousElementSibling?.classList.contains('wheel-used-divider-v25')) {
      actions.insertAdjacentHTML(
        'beforebegin',
        '<div class="wheel-used-divider-v25" aria-hidden="true"><span>✦</span></div>'
      );
    }

    if (!actions.nextElementSibling?.classList.contains('wheel-used-footnote-v25')) {
      actions.insertAdjacentHTML(
        'afterend',
        `<div class="wheel-used-footnote-v25">${icons.lock}<span>Первая практика — наш подарок для вас. Остальные направления доступны в клубе.</span></div>`
      );
    }
  }

  function decorateAll() {
    decoratePanel(document.getElementById('wheelUsedCardV24'));
    decoratePanel(document.querySelector('#wheelUsedOfferV24 .wheel-used-dialog-v24'));
  }

  addStyles();
  decorateAll();

  const observer = new MutationObserver(() => decorateAll());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
