window.addEventListener('load', () => {
  const preloader = startPreloader();
  stopPreloader(preloader);
});

function startPreloader() {
  const preloader = document.querySelector('#preloader');
  document.body.classList.remove('loaded');
  document.body.classList.add('loaded_hiding');
  return preloader;
}

function stopPreloader(preloader) {
  setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    preloader.remove();

  }, 200);
}

function addMarkupOfPreloader() {
  return '<div class="preloader books" id="preloader"><div class="preloader__row"><div class="preloader__item"></div><div class="preloader__item"></div></div></div>';
}

export { startPreloader, stopPreloader, addMarkupOfPreloader };
