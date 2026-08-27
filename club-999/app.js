(() => {
  'use strict';

  const content = window.CLUB_999_CONTENT || {};
  const config = window.CLUB_999_CONFIG || {};
  const modal = document.querySelector('[data-modal]');

  const getByPath = (source, path) => String(path || '')
    .split('.')
    .filter(Boolean)
    .reduce((value, key) => value == null ? undefined : value[key], source);

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function bindSingleValues() {
    document.querySelectorAll('[data-content]').forEach((element) => {
      const value = getByPath(content, element.dataset.content);
      if (value !== undefined && value !== null) element.textContent = value;
    });

    document.querySelectorAll('[data-content-html]').forEach((element) => {
      const value = getByPath(content, element.dataset.contentHtml);
      if (typeof value === 'string') element.innerHTML = value;
    });
  }

  function renderHeroFacts(items) {
    return (items || []).map((item) => `<span class="hero-fact">${escapeHtml(item)}</span>`).join('');
  }

  function renderFeatures(items) {
    return (items || []).map((item, index) => `
      <article class="feature-card reveal">
        <span class="feature-card__index">${String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `).join('');
  }

  function renderDirections(items) {
    return (items || []).map((item) => `
      <article class="direction-card reveal">
        <div class="direction-card__dot" aria-hidden="true"></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join('');
  }

  function renderSteps(items) {
    return (items || []).map((item, index) => `
      <article class="step-card reveal">
        <span class="step-card__number">${String(index + 1).padStart(2, '0')}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join('');
  }

  function renderExperts(items) {
    return (items || []).map((item, index) => `
      <article class="expert-card reveal">
        <div class="expert-card__placeholder" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join('');
  }

  function renderResults(items) {
    return (items || []).map((item, index) => `
      <div class="result-item reveal">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div>${escapeHtml(item)}</div>
      </div>
    `).join('');
  }

  function renderFaq(items) {
    return (items || []).map((item, index) => `
      <article class="faq-item reveal">
        <button class="faq-item__button" type="button" aria-expanded="false" aria-controls="club999Faq${index}">
          <span>${escapeHtml(item.question)}</span>
          <i class="faq-item__plus" aria-hidden="true"></i>
        </button>
        <div class="faq-item__answer" id="club999Faq${index}">
          <div><p>${escapeHtml(item.answer)}</p></div>
        </div>
      </article>
    `).join('');
  }

  const repeatRenderers = {
    'hero.facts': renderHeroFacts,
    'inside.items': renderFeatures,
    'directions.items': renderDirections,
    'format.items': renderSteps,
    'experts.items': renderExperts,
    'result.items': renderResults,
    'faq.items': renderFaq
  };

  function renderRepeats() {
    document.querySelectorAll('[data-repeat]').forEach((element) => {
      const path = element.dataset.repeat;
      const renderer = repeatRenderers[path];
      if (!renderer) return;
      element.innerHTML = renderer(getByPath(content, path));
    });
  }

  function installFaq() {
    document.querySelectorAll('.faq-item__button').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const open = !item.classList.contains('is-open');
        item.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
      });
    });
  }

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

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });

    elements.forEach((element) => observer.observe(element));
  }

  function setYear() {
    document.querySelectorAll('[data-year]').forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function initialize() {
    bindSingleValues();
    renderRepeats();
    installFaq();
    installActions();
    installReveal();
    setYear();

    window.dispatchEvent(new CustomEvent('club999:ready', {
      detail: { content, config }
    }));
  }

  window.Club999Landing = {
    openPurchase,
    openModal,
    closeModal,
    content,
    config
  };

  initialize();
})();
