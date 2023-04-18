import { refs } from '../refs';
import debounce from 'lodash.debounce';


refs.openAuthBtn.addEventListener('click', openModal);
refs.closeAutBtn.addEventListener('click', closeModal);

refs.formAuth.addEventListener('input', onDisabledStatus);

refs.signInBtn.addEventListener('click', onSignInBtn);
refs.signUpBtn.addEventListener('click', onSignUpBtn);

refs.inputName.addEventListener('input', debounce(onInput, 250));
refs.inputMail.addEventListener('input', debounce(onInput, 250));
refs.inputPassword.addEventListener('input', debounce(onInput, 250));

refs.userBtn.addEventListener('click', openModal);


export function openModal() {
  refs.modalAuth.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', OnEscPress);
}

function closeModal() {
  refs.modalAuth.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  window.removeEventListener('keydown', OnEscPress);
}



function onDisabledStatus() {
  if (refs.submitBtn.textContent === 'Sign up') {

    if (refs.formAuth.elements.mail.value !== '' &&
      refs.formAuth.elements.name.value !== '' &&
      refs.formAuth.elements.password.value !== ''
    ) {
      refs.submitBtn.classList.remove('disabled');
    } else {
      refs.submitBtn.classList.add('disabled');
    }

  } else {
    if (refs.formAuth.elements.mail.value !== '' &&
      refs.formAuth.elements.password.value !== ''
    ) {
      refs.submitBtn.classList.remove('disabled');
    } else {
      refs.submitBtn.classList.add('disabled');
    }
  } 
}



function onSignInBtn() {
  refs.signUpBtn.classList.remove('active');
  refs.signInBtn.classList.add('active');
  refs.submitBtn.textContent = 'Sign in';
  refs.formInputs.innerHTML = '';
}

function onSignUpBtn() {
  refs.signInBtn.classList.remove('active');
  refs.signUpBtn.classList.add('active');
  refs.submitBtn.textContent = 'Sign up';
  refs.formInputs.innerHTML = `<div class="form__field">
          <input
            id="username"
            type="text"
            class="form__input form__input-name"
            name="name"
            pattern="^[A-Za-z][A-Za-z0-9_]{3,10}$"
            required
          />
          <label for="name" class="form__label form__label-name">Name</label>
        </div>`;
  refs.inputName = document.querySelector('.form__input-name');
  refs.inputName.addEventListener('input', debounce(onInput, 250));
}



function onInput(e) {
  if (e.target.value) {
    e.target.nextElementSibling.classList.add('checked');
  } else {
    e.target.nextElementSibling.classList.remove('checked');
  }
}



function OnEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
