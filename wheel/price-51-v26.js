(() => {
  'use strict';

  const apply = () => {
    document.querySelectorAll('[data-open-wheel-club]').forEach((button) => {
      const text = button.textContent || '';
      if (text.includes('1 ₽')) {
        button.textContent = text.replace(/1\s*₽/g, '51 ₽');
      }
    });
  };

  apply();
  document.addEventListener('DOMContentLoaded', apply, { once: true });

  // Экран после вращения создаётся динамически, поэтому проверяем только
  // целевые кнопки клуба. В DOM страницы больше не вмешиваемся.
  setInterval(apply, 1000);
})();
