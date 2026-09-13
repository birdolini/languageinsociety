(() => {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'assets/favicon-sky.png';
  document.head.append(favicon);
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  const storedTheme = localStorage.getItem('lis-theme');
  const setTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.dataset.theme = theme;
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    toggle.querySelector('.theme-label').textContent = isDark ? 'Light mode' : 'Dark mode';
  };

  setTheme(storedTheme || 'light');
  toggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('lis-theme', nextTheme);
    setTheme(nextTheme);
  });
})();
