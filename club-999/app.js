(() => {
  'use strict';

  const config = window.CLUB_999_CONFIG || {};
  const modal = document.querySelector('[data-modal]');

  function setHostScrollLock(locked) {
    document.body.classList.toggle('modal-open', locked);
    try { window.NotibotIntegration?.setScrollLock?.(locked); } catch (_) {}
  }

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    setHostScrollLock(true);
    modal.querySelector('.modal__close')?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    setHostScrollLock(false);
  }

  function openPurchase() {
    const notibot = window.NotibotIntegration;
    const pageId = String(config.notibotPageId || '').trim();
    const url = String(config.purchaseUrl || '').trim();

    try {
      if (config.openInNotibot !== false && pageId && notibot?.getState?.().connected) {
        if (typeof notibot.openArticle === 'function') {
          notibot.openArticle(pageId);
          return;
        }
        if (typeof notibot.openLink === 'function') {
          notibot.openLink(`/page/${pageId}`);
          return;
        }
      }

      if (url) {
        if (notibot?.getState?.().connected && typeof notibot.openLink === 'function') {
          notibot.openLink(url);
        } else {
          window.location.assign(url);
        }
        return;
      }
    } catch (error) {
      console.warn('Не удалось открыть оплату через Notibot', error);
      if (url) {
        window.location.assign(url);
        return;
      }
    }

    openModal();
  }

  function installActions() {
    document.querySelectorAll('[data-purchase]').forEach((button) => {
      button.addEventListener('click', openPurchase);
    });

    document.querySelectorAll('[data-modal-close]').forEach((button) => {
      button.addEventListener('click', closeModal);
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }

  function installReveal() {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    if (!elements.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    elements.forEach((element) => observer.observe(element));
  }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  installActions();
  installReveal();
  setYear();

  window.Club999Landing = { openPurchase, openModal, closeModal, config };
})();
