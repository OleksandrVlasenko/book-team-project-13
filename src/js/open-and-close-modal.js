export function onOpenPoPUpModal() {
  const backdrop = document.querySelector('[data-modal]');
  backdrop.classList.add('is-active');
  document.body.classList.add('no-scroll');

  backdrop.addEventListener('click', onCloseModalByClicking);
  document.body.addEventListener('keyup', onCloseModalByKey);
}

function onCloseModalByClicking(e) {
  const backdrop = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('[modal-window]');
  const closeBtn = document.querySelector('[data-modal-close]');
  const withinBoundaries = e.composedPath().includes(modalWindow);

  if (
    !withinBoundaries ||
    e.target.closest('[data-modal-close]') === closeBtn
  ) {
    backdrop.classList.remove('is-active');
    document.body.classList.remove('no-scroll');

    backdrop.removeEventListener('click', onCloseModalByClicking);
    document.body.removeEventListener('keyup', onCloseModalByKey);
  }
}

function onCloseModalByKey(e) {
  const backdrop = document.querySelector('[data-modal]');

  const key = e.keyCode;
  if (key == 27) {
    backdrop.classList.remove('is-active');
    document.body.classList.remove('no-scroll');

    backdrop.removeEventListener('click', onCloseModalByClicking);
    document.body.removeEventListener('keyup', onCloseModalByKey);
  }
}
