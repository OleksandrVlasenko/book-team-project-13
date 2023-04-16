import { refs } from '../refs';
import { signUp, signIn, singOutFunction } from './firebaseFunction';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from 'firebase/database';

const auth = getAuth();

refs.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!refs.submitBtn.classList.contains('disabled')) {
    refs.modalAuth.classList.add('is-hidden');
  }

    if (refs.submitBtn.textContent === 'Sign up') {
    const { value : email } = document.getElementById('email');
    const { value : password } = document.getElementById('password');
    const { value: username } = document.getElementById('username');
        
    if (email !== '' && password !== '' && username !== '') {
            signUp(email, password, username);
        }
    } else {
    const { value : email } = document.getElementById('email');
        const { value: password } = document.getElementById('password');
        
    if (email !== '' && password !== '') {
            signIn(email, password);
        }
    
  }

})
 

refs.signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    singOutFunction();

} )


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('registrated');
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
    } else {
        console.log('not registrated');
            // User is signed out
            // ...
        }
});