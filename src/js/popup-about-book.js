import { onOpenModal } from "./open-and-close-modal";

const openModal = document.querySelector(`[data-modal-open]`);
const closeModalBtn = document.querySelector(`[data-modal-close]`);
const modalWindow = document.querySelector(`[modal-window]`);
// const modal = document.querySelector(`[data-modal]`);
const murkupConteiner = document.querySelector('.popup-about-book__render-book-container');
const btn = document.querySelector('#add');
const congratMessage = document.querySelector('.under-btn-text');
congratMessage.hidden = true;

 export function modalAboutBook(e) {
    const bookEl = books.find(book => book._id === bookId);

    murkupConteiner.innerHTML = "";

    function createModalMarcup(book) {

        function checkLocalStorage() {
            const contantLS = localStorage.getItem('idBooks', bookEl._id);
            if (contantLS.value === bookId) {
                btn.textContent = 'REMUVE FROM SHOPPING LIST';
            } else {
                btn.textContent = 'REMUVE FROM SHOPPING LIST';
            }
        }

        const amazonLogo = new URL(`../images/shoppingList--logoAmazon.png`,import.meta.url);
        const appleBooksLogo = new URL(`../images/shoppingList--logoBook.png`, import.meta.url);
        const bookShopLogo = new URL(`../images/shoppingList--bookShop.png`, import.meta.url);

        if (book) {
            return `<div class="book">
                   <img class="popup__book-image" src="${book.book_image}" alt="обкладинка" width = "192px">
                   <div class = "popup__text-content">
                       <h2 class="popup__book_title">${book.title}</h2>
                       <h3 class="popup__book_author">${book.author}</h3>
                       <p class="popup__book_review">${book.description}</p>
                          <ul class = "popup__shopping-links-container">
                             <li>
                                <a href = "${book.buy_links[0].url}" target = "blank" noopener noreffere nofollow class="popup__shopping-links-icon">
                                   <img src = "${amazonLogo}" width = "62">
                                </a>
                             </li>
                             <li>
                                <a href = "${book.buy_links[1].url}" target = "blank" noopener noreffere nofollow class="popup__shopping-links-icon">
                                   <img src = "${appleBooksLogo}" width = "33">
                                </a>
                             </li>
                             <li>
                                <a href = "${book.buy_links[4].url}" target = "blank" noopener noreffere nofollow class="popup__shopping-links-icon">
                                   <img src = "${bookShopLogo}" width = "30">
                                </a>
                             </li>
                          </ul>
                    </div>
                </div>`;
        }
    }   
    
    murkupConteiner.insertAdjacentHTML(`beforeend`, createModalMarcup(bookEl));
    
    btn.addEventListener('click', function() {
            btn.textContent = (btn.textContent === 'ADD TO SHOPPING LIST' ? ('REMUVE FROM SHOPPING LIST') : ('ADD TO SHOPPING LIST'));
            if (btn.textContent === 'ADD TO SHOPPING LIST') {
                congratMessage.hidden = true;
                localStorage.removeItem('idBooks', bookEl._id);
            } else {
                congratMessage.hidden = false;
                localStorage.setItem('idBooks', bookEl._id);
            }  
    })  
     
    //  ...addEventListener('click', onOpenModal);
}

