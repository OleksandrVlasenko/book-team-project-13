import { refs } from './refs';
import { auth } from './modal-auth/firebaseFunction';
import { onAuthStateChanged } from 'firebase/auth';
import { openModal } from './modal-auth/modal-window-authFirebase';
import { singOutFunction } from './modal-auth/firebaseFunction';

const body = document.querySelector('body');

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.registrationBtn.addEventListener('click', onRegistration);
refs.exitBtn.addEventListener('click', onExit);

refs.closeModalBtn.style.display = 'none';

function onOpenModal() {
  document.body.classList.add('show-modal');
  refs.closeModalBtn.style.display = 'flex';
  refs.openModalBtn.style.display = 'none';
  body.style.overflow = 'hidden';
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  refs.closeModalBtn.style.display = 'none';
  refs.openModalBtn.style.display = 'flex';
  body.style.overflow = 'auto';
}

function onRegistration() {
  document.body.classList.remove('show-modal');
  refs.closeModalBtn.style.display = 'none';
  refs.openModalBtn.style.display = 'flex';
  body.style.overflow = 'auto';
  openModal();
}

onAuthStateChanged(auth, user => {
  if (user) {
    refs.exitBtn.style.display = 'flex';
    refs.registrationBtn.style.display = 'none';
    refs.userNameModal.classList.remove('visually-hidden');
    refs.shopingListBtn.classList.remove('visually-hidden');
    refs.homeBtn.classList.remove('visually-hidden');
  } else {
    refs.exitBtn.style.display = 'none';
    refs.userNameModal.classList.add('visually-hidden');
    refs.registrationBtn.style.display = 'flex';
    refs.shopingListBtn.classList.add('visually-hidden');
    refs.homeBtn.classList.add('visually-hidden');
  }
});

function onExit() {
  document.body.classList.remove('show-modal');
  refs.closeModalBtn.style.display = 'none';
  refs.openModalBtn.style.display = 'flex';
  body.style.overflow = 'auto';
  singOutFunction();
}

const currentPath = window.location.pathname;

if (
  currentPath === '/book-team-project-13/index.html' ||
  currentPath === '/index.html' ||
  currentPath === '/book-team-project-13/' ||
  currentPath === '/'
) {
  refs.homePainting.classList.add('nav__link--current');
} else if (
  currentPath === '/book-team-project-13/shopping-list.html' ||
  currentPath === '/' ||
  currentPath === '/shopping-list.html'
) {
  refs.shoppingListPainting.classList.add('nav__link--current');
}
