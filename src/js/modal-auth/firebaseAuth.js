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
 

refs.userBtn.addEventListener('click', (e) => {
    e.preventDefault();

    singOutFunction();

});

refs.signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    singOutFunction();

});


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('registrated');
        
        // refs.userBtn.textContent = user.displayName;
        refs.openAuthBtn.classList.add('is-hidden');
        refs.userBtn.classList.remove('is-hidden');
        refs.logOut.classList.remove('is-hidden');
        localStorage.setItem('user-data', JSON.stringify({
        id: user.uid,
        name: user.displayName,
        mail: user.email}));  
    } else {
        console.log('not registrated');
        refs.openAuthBtn.classList.remove('is-hidden');
        refs.userBtn.classList.add('is-hidden');
        refs.logOut.classList.add('is-hidden');
        localStorage.removeItem('user-data'); 
        }
});
