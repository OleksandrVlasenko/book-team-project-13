import { bgImagesUrl, logoAmazonImagesUrl, logoBookImagesUrl, bookShopImagesUrl, dumpImagesUrl } from "./imgAdress";
export {
    renderShoppingList,
    renderClearShoppingList,
}

function renderShoppingList(book) {
        
    return book.map(({ _id, book_image, author, list_name, title, description, buy_links }) => {
    return `<li id="${_id}" class="shopping-list__card-boock">
                <div class="shopping-list__general-information">
                    <div>
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
                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[0].url}" target="_blank">
                                        <img class="shopping-list__shop-lis--img logoAmazon" src="${logoAmazonImagesUrl}" alt="logoAmazon">
                                    </a>
                                </li>
                                <li class="shopping-list__shop-list-item">
                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[1].url} " target="_blank">
                                        <img class="shopping-list__shop-lis--img logoBook" src="${logoBookImagesUrl}" alt="logoBook">
                                    </a>
                                </li>
                                <li class="shopping-list__shop-list-item">
                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${buy_links[4].url} " target="_blank">
                                        <img class="shopping-list__shop-lis--img bookShop" src="${bookShopImagesUrl}" alt="bookShop">
                                    </a>
                                </li>
                            </ul>
                            <img id="${_id}" width="38" height="38" class="shopping-list__icon-deleteBtn" src="${dumpImagesUrl}" alt="icon-deleteBtn">
                        </div>
                        <p class="shopping-list__description">${description}</p>
                    </div>
                    </li>`}).join("");
}

function renderClearShoppingList() {
    return  `<div class="shopping-list__clear">
                <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>
                <img class="shopping-list__clear-bg" src="${bgImagesUrl}" alt="books">
            </div>`;
}