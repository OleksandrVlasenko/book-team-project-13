import { refs } from './refs';

refs.loginBtn.addEventListener('click', () => {
  refs.modalSignIn.classList.add('show');
});


refs.signIncloseBtn.addEventListener('click', () => {
  refs.modalSignIn.classList.remove('show');
});