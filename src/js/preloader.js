window.addEventListener('load', () => {
  const preloader = document.querySelector('#preloader');
  setTimeout(() => {
    preloader.firstElementChild.remove();
  }, 350);
  startPreloader();
});

function startPreloader() {
  document.body.classList.remove('loaded');
  document.body.classList.add('loaded_hiding');
}

function stopPreloader() {
  setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    const preloader = document.querySelector('#preloader');
    preloader.remove();
  }, 350);
}

function addMarkupOfPreloader() {
  return '<div id="preloader"><div class="preloader__row"><div class="preloader__item"><div></div></div></div></div>';
}

export { startPreloader, stopPreloader, addMarkupOfPreloader };
