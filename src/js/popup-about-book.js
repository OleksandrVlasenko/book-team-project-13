const openModal = document.querySelector(`[data-modal-open]`);
const closeModalBtn = document.querySelector(`[data-modal-close]`);
const modal = document.querySelector(`[data-modal]`);
const murkupConteiner = document.querySelector('.book');
const btn = document.querySelector('#add');
const congratMessage = document.querySelector('.under-btn-text');
congratMessage.hidden = true;

// OPEN/CLOSE MODAL

// openModal.addEventListener("click", toggleModal);
// closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-hidden");
}

 export function modalAboutBook(e) {
    // const bookId = "642fd89ac8cf5ee957f12362";
    // ???
    const bookId = e.target._id;
    // ???
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
                   <img class="book-image" src="${book.book_image}" alt="обкладинка" width = "192px">
                   <div class = "modal-text-content">
                       <h2 class="book_title">${book.title}</h2>
                       <h3 class="book_author">${book.author}</h3>
                       <p class="book_review">${book.description}</p>
                          <ul class = "shopping-list-container">
                             <li>
                                <a href = "${book.buy_links[0].url}" target = "blank" noopener noreffere nofollow>
                                   <img src = "${amazonLogo}" width = "62">
                                </a>
                             </li>
                             <li>
                                <a href = "${book.buy_links[1].url}" target = "blank" noopener noreffere nofollow>
                                   <img src = "${appleBooksLogo}" width = "33">
                                </a>
                             </li>
                             <li>
                                <a href = "${book.buy_links[4].url}" target = "blank" noopener noreffere nofollow>
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
}

