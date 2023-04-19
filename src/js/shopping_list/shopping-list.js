import { BooksAPI } from '../main_page/fetch';
// import { books } from "../backend-books";
import {
  renderClearShoppingList,
  renderShoppingList,
} from './rendering-shng-lst';
import { handleDeleteBookBtn } from './deleteBookBtn';
import { stopPreloader } from '../preloader';
import Notiflix from 'notiflix';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../modal-auth/firebaseFunction';
import { readShoppingList } from '../modal-auth/firebaseDatabase';

export { renderCardOfBooks };

const getBook = new BooksAPI();

const galleryBooksEl = document.querySelector(`.shopping-list__gallery-boocks`);

// const objBooks = books;
// localStorage.setItem(`idBooks`, JSON.stringify(objBooks));

async function fetchBookByID(booksFromLocalStorage) {
  try {
    const books = await Promise.all(
      booksFromLocalStorage.map(async id => await getBook.getBookByID(id))
    );
    return books;
  } catch (error) {
    console.log(error);
  }
}

async function renderCardOfBooks() {
    let IdBooks = localStorage.getItem(`idBooks`);
    if (
      IdBooks === 'undefined' ||
      !IdBooks ||
      IdBooks === '' ||
      JSON.parse(IdBooks).length === 0
    ) {
      return (galleryBooksEl.innerHTML = renderClearShoppingList());
    }
    try {
        IdBooks = JSON.parse(IdBooks);
        const books = await fetchBookByID(IdBooks);
        const data = books.map(book => book.data)
        
        galleryBooksEl.innerHTML = renderShoppingList(data);    
        const cardBook = document.querySelector(`.shopping-list__gallery-boocks`);
        cardBook.addEventListener(`click`, handleDeleteBookBtn);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      stopPreloader();
      readShoppingList();
      renderCardOfBooks();
      return;
    } else {
      stopPreloader();
      Notiflix.Notify.info(`Sign in to view your shopping list`);
      galleryBooksEl.innerHTML = renderClearShoppingList();
      stopPreloader();
    }
  });
});

// //////////////////////
const homePg = document.querySelector('.nav__link_home');
const shopList = document.querySelector('.nav__link_shopping');
const currentPath = window.top.location.pathname;
console.log(currentPath);
if (currentPath === '/index.html' || currentPath === '/') {
  homePg.classList.add('current__page');
  shopList.classList.remove('current__page');
} else if (currentPath === '/shopping-list.html') {
  shopList.classList.add('current__page__shop');
  homePg.classList.remove('current__page');
}
