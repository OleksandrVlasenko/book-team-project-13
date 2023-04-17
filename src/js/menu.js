
import { refs } from './refs';

import { auth } from './modal-auth/firebaseFunction';
import { onAuthStateChanged } from 'firebase/auth';
import { openModal } from './modal-auth/modal-window-authFirebase' 

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.registrationBtn.addEventListener('click', onRegistration);

  function onOpenModal () {
    document.body.classList.add('show-modal')
  }
  
  function onCloseModal () {
    document.body.classList.remove('show-modal')
  }

  function onRegistration () {
    document.body.classList.remove('show-modal')
    openModal ()
  }

  onAuthStateChanged(auth, user => {
    if (user) {
    refs.exitBtn.classList.remove('visually-hidden')
    refs.registrationBtn.classList.add('visually-hidden')
   
      // auth.currentUser - це об'єкт, в якому записані ім'я користувача, пошта і т.д. Доступний тільки в if (true).
    } else {
      refs.exitBtn.classList.add('visually-hidden')
    }
  });


const currentPath = window.location.pathname;

if (currentPath === '/index.html') {
    refs.homePainting.classList.add('nav__link--current')
}
else if (currentPath === '/') {
  refs.homePainting.classList.add('nav__link--current')
}
else if (currentPath === '/shopping-list.html') {
    refs.shoppingListPainting.classList.add('nav__link--current')
}
