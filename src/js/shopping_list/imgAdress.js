export { bgImagesUrl, dumpImagesUrl, bookShopImagesUrl, logoAmazonImagesUrl, logoBookImagesUrl }

const bgImagesUrl = new URL (
    `../../images/shoppingList-clear--bg-x3.png`,    
    import.meta.url
);

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