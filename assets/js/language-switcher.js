// Language switcher - floating button
// This file creates a floating language toggle button

(function() {
  // Create button
  var btn = document.createElement('div');
  btn.id = 'lang-btn';
  btn.style.cssText = 'position:fixed;top:60px;right:20px;z-index:99999;background:#fff;color:#333;padding:10px 18px;border-radius:25px;box-shadow:0 4px 20px rgba(0,0,0,0.25);cursor:pointer;font-size:15px;font-weight:600;transition:all 0.3s;border:2px solid #4a9eff;user-select:none;';
  
  // Set text based on current path
  var isZh = window.location.pathname.includes('/about-zh/') || window.location.pathname.includes('/zh/');
  btn.innerHTML = isZh ? '🇺🇸 EN' : '🇨🇳 中文';
  btn.title = isZh ? 'Switch to English' : 'Switch to Chinese';
  
  // Click handler
  btn.onclick = function() {
    var path = window.location.pathname;
    if (path.includes('/about-zh/')) {
      window.location.href = '/about/';
    } else if (path.includes('/about/')) {
      window.location.href = '/about-zh/';
    } else if (path.includes('/zh/')) {
      window.location.href = path.replace('/zh/', '/');
    } else {
      window.location.href = '/zh' + (path === '/' ? '/' : path);
    }
  };
  
  // Hover effects
  btn.onmouseover = function() { this.style.boxShadow = '0 6px 25px rgba(0,0,0,0.35)'; };
  btn.onmouseout = function() { this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)'; };
  
  // Add to page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(btn);
    });
  } else {
    document.body.appendChild(btn);
  }
})();
