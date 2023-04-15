import { refs } from './refs';


// refs.registrationBtn.addEventListener('click', () => {
//   refs.modalSignUP.classList.add('show');
// });


// refs.signUpcloseBtn.addEventListener('click', () => {
//   refs.modalSignUP.classList.remove('show');
// });

refs.openAuthBtn.addEventListener('click', toggleModal);
refs.closeAutBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalAuth.classList.toggle('is-hidden');
}

refs.signInBtn.addEventListener('click', onsignInBtn);
refs.signUpBtn.addEventListener('click', onButtonSignUp);

function onsignInBtn() {
  refs.signUpBtn.classList.remove('active');
  refs.signInBtn.classList.add('active');
  refs.submitBtn.textContent = 'Sign in';
  refs.formInputs.innerHTML = '';
}

function onButtonSignUp() {
  refs.signInBtn.classList.remove('active');
  refs.signUpBtn.classList.add('active');
  refs.submitBtn.textContent = 'Sign up';
  refs.formInputs.innerHTML = `<div class="form__field">
          <input
            id="username"
            type="text"
            class="form__input form__input-name"
            name="name"
            pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
            required
          />
          <label for="name" class="form__label form__label-name">Name</label>
        </div>`;
}

refs.inputName.addEventListener('input', onInputName);
refs.inputMail.addEventListener('input', onInputMail);
refs.inputPassword.addEventListener('input', onInputPassword);

function onInputName() {
  if (refs.inputName.value) {
    refs.labelName.classList.add('checked');
  } else {
    refs.labelName.classList.remove('checked');
  }
}

function onInputMail() {
  if (refs.inputMail.value) {
    refs.labelMail.classList.add('checked');
  } else {
    refs.labelMail.classList.remove('checked');
  }
}

function onInputPassword() {
  if (refs.inputPassword.value) {
    refs.labelPassword.classList.add('checked');
  } else {
    refs.labelPassword.classList.remove('checked');
  }
}