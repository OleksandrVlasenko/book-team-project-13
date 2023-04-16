window.addEventListener('load', () => {
  startPreloader();
  stopPreloader(preloader);
});

function startPreloader() {
  document.body.classList.remove('loaded');
  document.body.classList.add('loaded_hiding');
  // const preloader = document.querySelector('#preloader');
  return preloader;
}

function stopPreloader() {
  setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    const preloader = document.querySelector('#preloader');
    preloader.remove();
  }, 250);
}

function addMarkupOfPreloader() {
  return '<div class="preloader books" id="preloader"><div class="preloader__row"><div class="preloader__item"><div></div></div></div></div>';
}

export { startPreloader, stopPreloader, addMarkupOfPreloader };
