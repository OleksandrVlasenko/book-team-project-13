import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, onValue } from 'firebase/database';
import { getAuth} from "firebase/auth";

// Тест
// import { books } from "../backend-books";

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


// Читання даних Shopping List з бази даних database
export const readShoppingList = () => {
    const userId = auth.currentUser.uid;
    const shoppingListEl = ref(database, '/users' + userId);
    onValue(shoppingListEl, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        localStorage.setItem(`idBooks`, JSON.stringify(data.shoppingList))
        // alert(data.shoppingList);
        console.log(data.shoppingList);
    });
}
// Читання даних Username з бази даних database
export const readUsername = () => {
    const userId = auth.currentUser.uid;
    const usernameEl = ref(database, '/users' + userId);
    onValue(usernameEl, (snapshot) => {
    const data = snapshot.val();
    console.log(data.username);
    return data.username;
});
}

// Оновлення даних

export const updateShoppingList = (books) => {
    const userId = auth.currentUser.uid; 
    const email = ref(database, '/users' + userId);
    
    update((email), {
        shoppingList: books
    })
         .then(() => {
            // Data saved successfully!
            console.log('data updated');
        })
            .catch((error) => {
                // The write failed...
                console.log(error);
            });

}



