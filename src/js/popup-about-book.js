import { onOpenPoPUpModal } from './open-and-close-modal';
import Notiflix from 'notiflix';
import { BooksAPI } from './main_page/fetch';
import { updateShoppingList } from './modal-auth/firebaseDatabase';
import { auth } from './modal-auth/firebaseFunction';
import { onAuthStateChanged } from 'firebase/auth';

const bookApi = new BooksAPI();

const bookIMG = document.querySelector('.popup__book-image');
const bookTitle = document.querySelector('.popup__book_title');
const bookAuthor = document.querySelector('.popup__book_author');
const bookReview = document.querySelector('.popup__book_review');
const linkAmazon = document.querySelector('.popup__shopping-links-icon.amazon');
const linkBook = document.querySelector('.popup__shopping-links-icon.book');
const linkBookShop = document.querySelector(
  '.popup__shopping-links-icon.bookShop'
);
const btn = document.querySelector('#add');
const congratMessage = document.querySelector('.under-btn-text');
congratMessage.hidden = true;

btn.addEventListener('click', addOrRemoveBook);

export async function modalAboutBook(bookId) {
  try {
    const { data: book } = await bookApi.getBookByID(`${bookId}`);

    checkLocalStorage(book);

    bookIMG.attributes.src.value = book.book_image;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookReview.textContent = book.description;
    linkAmazon.attributes.href.value = book.buy_links[0].url;
    linkBook.attributes.href.value = book.buy_links[1].url;
    linkBookShop.attributes.href.value = book.buy_links[4].url;

    onOpenPoPUpModal();
  } catch (error) {
    Notiflix.Notify.failure(`Books was not found : ${error.message}`);
  }
}

function addOrRemoveBook(e) {
  if (!e.target.disabled) {
    return;
  }
  const id = e.target.attributes.id.value;
  if (btn.textContent === 'Add to shopping list') {
    addBook(id);
  } else {
    removeBook(id);
  }
}

function addBook(id) {
  let idBooks = localStorage.getItem(`idBooks`);

  if (idBooks === 'undefined' || !idBooks || idBooks === '') {
    idBooks = [];
    localStorage.setItem(`idBooks`, JSON.stringify(idBooks));
  }

  idBooks = JSON.parse(localStorage.getItem(`idBooks`));

  idBooks.push(id);
  localStorage.setItem(`idBooks`, JSON.stringify(idBooks));
  btn.textContent = 'Remove from the shopping list';
  congratMessage.hidden = false;
  if (auth.currentUser) {
    updateShoppingList();
  }
}

function removeBook(id) {
  let idBooks = JSON.parse(localStorage.getItem(`idBooks`));

  idBooks.splice(idBooks.indexOf(id), 1);
  localStorage.setItem(`idBooks`, JSON.stringify(idBooks));
  btn.textContent = 'Add to shopping list';
  congratMessage.hidden = true;
  if (auth.currentUser) {
    updateShoppingList();
  }
}

function checkLocalStorage(book) {
  let contantLS = localStorage.getItem(`idBooks`);

  if (!contantLS || contantLS === '' || !contantLS.includes(book._id)) {
    btn.textContent = 'Add to shopping list';
  } else {
    btn.textContent = 'Remove from the shopping list';
    congratMessage.hidden = false;
  }
  btn.attributes.id.value = book._id;
}

onAuthStateChanged(auth, user => {
  if (user) {
    btn.classList.remove('disabled');
    congratMessage.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
    congratMessage.hidden = true;
  } else {
    btn.classList.add('disabled');
    congratMessage.textContent = 'Please, log in to get more options.';
    congratMessage.hidden = false;
  }
});
