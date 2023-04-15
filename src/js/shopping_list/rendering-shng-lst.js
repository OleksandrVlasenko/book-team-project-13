export {
    renderShoppingList,
    renderClearShoppingList,
}

const dumpImagesUrl = new URL (
    `../../images/dump.svg`,    
    import.meta.url
);

const bookShopImagesUrl = new URL(
    `../../images/shoppingList--bookShop.png`,
    import.meta.url
);

const logoBookImagesUrl = new URL(
    `../../images/shoppingList--logoBook.png`,
    import.meta.url
);
const logoAmazonImagesUrl = new URL(
    `../../images/shoppingList--logoAmazon.png`,
    import.meta.url
);

function renderShoppingList(book) {
        
    return book.map(({ _id, book_image, author, list_name, title, description, buy_links }) => {
    return `<div id="${_id}" class="shopping-list__card-boock">
                <div class="shopping-list__general-information">
                    <div >
                        <img class="shopping-list__img" src="${book_image}" alt="book image">
                        <p class="shopping-list__author">${author}</p>
                    </div>
                        <div">
                            <h2 class="shopping-list__title-book">${title}</h2>
                            <h3 class="shopping-list__list-name">${list_name}</h3>
                            <p class="shopping-list__description--near">${description}</p>
                            <p class="shopping-list__author--near">${author}</p>
                            <ul class="shopping-list__shop-list">
                                <li class="shopping-list__shop-list-item">
                                    <a class="shopping-list__shop-list-link" href="${buy_links[0].url}" target="_blank">
                                        <img class="shopping-list__shop-lis--img logoAmazon" src="${logoAmazonImagesUrl}" alt="logoAmazon">
                                    </a>
                                </li>
                                <li class="shopping-list__shop-list-item">
                                    <a class="shopping-list__shop-list-link" href="${buy_links[1].url} " target="_blank">
                                        <img class="shopping-list__shop-lis--img" src="${logoBookImagesUrl}" alt="logoBook">
                                    </a>
                                </li>
                                <li class="shopping-list__shop-list-item">
                                    <a class="shopping-list__shop-list-link" href="${buy_links[4].url} " target="_blank">
                                        <img class="shopping-list__shop-lis--img bookShop" src="${bookShopImagesUrl}" alt="bookShop">
                                    </a>
                                </li>
                            </ul>
                            <img width="38" height="38" class="shopping-list__icon-deleteBtn" src="${dumpImagesUrl}" alt="bookShop">
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