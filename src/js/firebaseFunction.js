import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8a0V2r63NS_Ih9TRySgf9b_hfgQZilt4",
  authDomain: "book-project-team13.firebaseapp.com",
  projectId: "book-project-team13",
  storageBucket: "book-project-team13.appspot.com",
  messagingSenderId: "340832674468",
  appId: "1:340832674468:web:98e6ba50474242c91b3c31"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export const signUp = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    
            const user = userCredential.user;

            set(ref(database, '/users' + user.uid), {
                username: username,
                email: email,
                password: password
            })
    
            alert('User Created');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            alert(errorMessage);
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
    
            alert('User Loged In');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
    
};

export const singOutFunction = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

};


