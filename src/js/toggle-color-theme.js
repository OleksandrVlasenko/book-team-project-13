function addDarkClassToHTML() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.querySelector('html').classList.add('dark');
    document.querySelector('.switch-input').checked = true;
  } else {
    document.querySelector('html').classList.remove('dark');
    document.querySelector('.switch-input').checked = false;
  }
}

window.addEventListener('load', () => {
  const darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = darkModeMatchMedia.matches ? 'dark' : 'light';
  localStorage.theme = localStorage.theme || isDarkMode;
  addDarkClassToHTML();

  const btnEL = document.querySelector('.switch-input');
  btnEL.addEventListener('change', event => {
    if (event.target.checked) {
      localStorage.setItem('theme', 'dark');
      addDarkClassToHTML();
    } else {
      localStorage.setItem('theme', 'light');
      addDarkClassToHTML();
    }
    
  });

  darkModeMatchMedia.addEventListener('change', event => {
    const newTheme = event.matches ? 'dark' : 'light';
    localStorage.theme = newTheme;
    addDarkClassToHTML();
  });
});
