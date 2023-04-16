import { BooksAPI } from "../main_page/fetch";
import { books } from "../backend-books";
import { renderClearShoppingList, renderShoppingList } from "./rendering-shng-lst";
import { handleDeleteBookBtn } from "./deleteBookBtn";
export { renderCardOfBooks }

const getBook = new BooksAPI();
let logIn = true;

const galleryBooksEl = document.querySelector(`.shopping-list__gallery-boocks`);

const objBooks = books;    
localStorage.setItem(`idBooks`, JSON.stringify(objBooks));    
    
async function fetchBookByID(booksFromLocalStorage) {
    try {
        const books = await Promise.all(booksFromLocalStorage.map(async id => await getBook.getBookByID(id._id)));
            return books;
        } catch (error) {
            console.log(error);
        }
}

async function renderCardOfBooks() {
    const IdBooks = JSON.parse(localStorage.getItem(`idBooks`));
    try {
        const books = await fetchBookByID(IdBooks);
        const data = books.map(book => book.data)
        if (IdBooks.length === 0) {
            return galleryBooksEl.innerHTML = renderClearShoppingList();
        }
        galleryBooksEl.innerHTML = renderShoppingList(data);    

        const cardBook = document.querySelectorAll(`.shopping-list__card-boock`);
        cardBook.forEach(eventCard => eventCard.addEventListener(`click`, handleDeleteBookBtn))

    } catch (error) {
        console.log(error)
    } finally {
    }
}

window.addEventListener("load", () => {
    if (!logIn) {
        return
    } else {
    renderCardOfBooks()}
});
