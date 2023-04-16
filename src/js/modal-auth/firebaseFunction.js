import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: "AIzaSyAmjMPhgeiPnKuRTAY8vypkpT4j7HmPfug",
  authDomain: "fu11stack-book-project.firebaseapp.com",
  databaseURL: "https://fu11stack-book-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fu11stack-book-project",
  storageBucket: "fu11stack-book-project.appspot.com",
  messagingSenderId: "110270361117",
  appId: "1:110270361117:web:304c337163371a2e8920f4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth();
const user = auth.currentUser;

export const getUser = (user) => {
    if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
}

export const signUp = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    
            const user = userCredential.user;

            set(ref(database, '/users' + user.uid), {
                username: username,
                email: email,
                password: password
            })
    
            Notiflix.Notify.success(`Account: "${username}" created`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            Notiflix.Notify.failure(errorMessage);
        });
};

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
      
            const user = userCredential.user;

            const lastLoginDate = new Date();
            update(ref(database, '/users' + user.uid), {
                last_login: lastLoginDate
            })
    
            Notiflix.Notify.success(` Welcome ${email}!`);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Notiflix.Notify.failure('failed to login');
        });
    
};

export const singOutFunction = () => {
    signOut(auth).then(() => {
       Notiflix.Notify.info('See you soon');
    }).catch((error) => {
         Notiflix.Notify.failure(error);
    });

};



