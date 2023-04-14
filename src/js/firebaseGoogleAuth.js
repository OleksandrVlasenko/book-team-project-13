import { refs } from './refs';
import { signUp, signIn, singOutFunction } from './firebaseFunction';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from 'firebase/database';

const auth = getAuth();

refs.signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

  const { value : email } = document.getElementById('email1');
  const { value : password } = document.getElementById('password1');
  const { value : username } = document.getElementById('username1');
    
    signUp(email, password, username);
 
})
 


refs.signInBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const { value : email } = document.getElementById('email');
    const { value: password } = document.getElementById('password');
    
    signIn(email, password);

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