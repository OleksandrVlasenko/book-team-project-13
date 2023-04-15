import { BooksAPI } from "./main_page/fetch";
import { books } from "./backend-books";
const getBook = new BooksAPI();

const galleryBooksEl = document.querySelector(`.shopping-list__gallery-boocks`);
console.log(galleryBooksEl)

const objBooks = books;    
localStorage.setItem(`idBooks`, JSON.stringify(objBooks));

const IdBooks = JSON.parse(localStorage.getItem(`idBooks`));
    
    
async function fetchBookByID() {
    try {
        const books = await Promise.all(IdBooks.map(async id => await getBook.getBookByID(id._id)));
            console.log(books)
            return books;
        } catch (error) {
            console.log(error);
        }
}
    
function renderShoppingList(book) {
        
            return book.map(({ _id, book_image, author, list_name, title, description, buy_links }) => {
            return `<div id="${_id}" class="shopping-list__card-boock">
            <div class="shopping-list__general-information">
                <div >
                    <img class="shopping-list__img" src="${book_image}" alt="book image">
                    <p class="shopping-list__author">${author}</p>
                </div>
                <div>
                    <h2 class="shopping-list__title-book">${title}</h2>
                    <h3 class="shopping-list__list-name">${list_name}</h3>
                <ul class="shopping-list__shop-list">
                    <li class="shopping-list__shop-list-item">
                        <a class="shopping-list__shop-list-link" href="${buy_links[0].url}" target="_blank">
                            <img src="./images/shoppingList--logoAmazon.png" alt="logoAmazon">
                        </a>
                    </li>
                    <li class="shopping-list__shop-list-item">
                        <a class="shopping-list__shop-list-link" href="${buy_links[1].url} " target="_blank">
                            <img src="./images/shoppingList--logoBook.png" alt="logoBook">
                        </a>
                    </li>
                    <li class="shopping-list__shop-list-item">
                        <a class="shopping-list__shop-list-link" href="${buy_links[4].url} " target="_blank">
                            <img src="./images/shoppingList--bookShop.png" alt="bookShop">
                        </a>
                    </li>
                </ul>
                </div>                           
                    <svg class="shopping-list__icon-deleteBtn" width="28" height="28">
                        <use href="./images/dump.svg"></use>
                    </svg>            
                <div>
            </div>
            </div>
            <p class="shopping-list__description">${description}</p>
            </div>`}).join("");
}

function renderClearShoppingList() {
    return  `<div class="shopping-list__clear">
                <p>This page is empty, add some books and proceed to order.</p>
                <img src="./images/shoppingList-clear--bg-x2.png" alt="books">
            </div>`;
}

async function renderCardOfBooks() {
    const books = await fetchBookByID();
    const data = books.map(book => book.data)
        console.log(data)
    try {
        const getIdBooks = JSON.parse(localStorage.getItem(`idBooks`));
        if (getIdBooks.length === 0) {
            return galleryBooksEl.innerHTML = renderClearShoppingList();
        }
        return galleryBooksEl.innerHTML = await renderShoppingList(data);
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener("load", renderCardOfBooks());
