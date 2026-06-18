/**
 * Language Switcher for al-folio
 * Simple version: toggles between EN and 中文 versions
 */

(function () {
  'use strict';

  // Map of English pages to their Chinese versions
  const pageMap = {
    '/': '/about-zh/',
    '/about/': '/about-zh/',
    '/projects/': null, // No Chinese version yet
    '/publications/': null,
  };

  const reverseMap = {};
  for (const [en, zh] of Object.entries(pageMap)) {
    if (zh) reverseMap[zh] = en;
  }

  function getCurrentLang() {
    const path = window.location.pathname;
    if (path.includes('-zh/') || path.includes('/zh/')) {
      return 'zh';
    }
    return 'en';
  }

  function getTargetUrl() {
    const path = window.location.pathname;
    const lang = getCurrentLang();

    if (lang === 'en') {
      // Going to Chinese
      if (pageMap[path]) {
        return pageMap[path];
      }
      // Default: go to Chinese About page
      return '/about-zh/';
    } else {
      // Going to English
      if (reverseMap[path]) {
        return reverseMap[path];
      }
      // Default: go to homepage
      return '/';
    }
  }

  function createSwitcher() {
    const navbar = document.querySelector('.navbar-nav');
    if (!navbar) return false;

    // Check if button already exists
    if (document.getElementById('lang-switcher')) return true;

    const li = document.createElement('li');
    li.className = 'nav-item';

    const btn = document.createElement('a');
    btn.id = 'lang-switcher';
    btn.className = 'nav-link';
    btn.href = getTargetUrl();
    
    const lang = getCurrentLang();
    if (lang === 'en') {
      btn.innerHTML = '🇨🇳 中文';
      btn.title = '切换到中文';
    } else {
      btn.innerHTML = '🇬🇧 EN';
      btn.title = 'Switch to English';
    }

    li.appendChild(btn);

    // Insert before the theme toggle (if exists) or at the end
    const themeToggle = navbar.querySelector('.theme-toggle, .nav-item:last-child');
    if (themeToggle && themeToggle.parentElement === navbar) {
      navbar.insertBefore(li, themeToggle);
    } else {
      navbar.appendChild(li);
    }

    return true;
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      createSwitcher();
    });
  } else {
    createSwitcher();
  }
})();
