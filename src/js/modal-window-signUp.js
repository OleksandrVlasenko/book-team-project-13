import { refs } from './refs';


refs.registrationBtn.addEventListener('click', () => {
  refs.modalSignUP.classList.add('show');
});


refs.signUpcloseBtn.addEventListener('click', () => {
  refs.modalSignUP.classList.remove('show');
});