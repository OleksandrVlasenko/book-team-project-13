import { signUp, signIn, singOutFunction } from './modal-auth/firebaseFunction';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const homePg = document.querySelector('.nav__link_home');
const shopList = document.querySelector('.nav__link_shopping');
// console.log(shopList);
const btnWr = document.querySelector('.auth-btns__wrapper');

const liEl = document.querySelector('.nav__item');

const currentPath = window.location.pathname;

// if (currentPath === '/index.html') {
//   console.log(currentPath);
//   homePg.classList.add('current__page');
// } else if (currentPath === '/') {
//   homePg.classList.add('current__page');
// } else if (currentPath === '/shopping-list.html') {
//   shopList.classList.add('current__page');
// }

if (currentPath === '/index.html' || currentPath === 'src/') {
  console.log(currentPath);
  homePg.classList.add('current__page');
} else if (currentPath === '/shopping-list.html') {
  console.log(currentPath);
  shopList.classList.add('current__page');
  homePg.classList.remove('current__page');
}

// ////////////////////////
const auth = getAuth();

onAuthStateChanged(auth, user => {
  if (user) {
    // console.log('registrated');
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // ...
    btnWr.classList.remove('is-hidden');
    shopList.classList.remove('is-hidden');
    homePg.classList.remove('is-hidden');
    localStorage.setItem(
      'user-data',
      JSON.stringify({
        id: user.uid,
        name: user.displayName,
        mail: user.email,
      })
    );
  } else {
    // console.log('not registrated');
    btnWr.classList.remove('is-hidden');
    shopList.classList.add('is-hidden');
    // liEl.classList.add('is-hidden');
    homePg.classList.add('is-hidden');
    localStorage.removeItem('user-data');
  }
});
