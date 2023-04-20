import { addMediaWidth } from "./media-width";

export async function murkupCategoryList(fetch) {
  return await fetch.data.map(({ list_name }) => { return `<li class="category__home-itm" data-category="${list_name}">${list_name}</li>` }).join('');
}

async function sliceData(data) {

  if (addMediaWidth() === "mobile") {
    return makeListOfBooks(data.slice(0, 1))
  } else if (addMediaWidth() === "tablet") {
    return makeListOfBooks(await data.slice(0, 3))
  } else {
    return makeListOfBooks(data)
  }
}

export async function murkup(data) {

  return await Promise.all(data.map(async ({ list_name, books }) => {
    return ` 
    <div class="item-books__home"> 
    <h3 class="js-book-categoty">${list_name}</h3> 
    <ul class='list-books__home'>${await makeListOfBooks(books)}</ul>  
    <button class="button see-more" data-js="${list_name}" aria-label="See more">See more</button> 
    </div> 
    `;
  }));
}

export async function makeCategoryPage(category, data) {

  const title = category.split(" ");
  return ` 
  <h2 class="block__books-title"
>${title
    .splice(0, title.length / 2)
    .join(' ')} <span class="block__books-colortitle">${title
    .splice(title.length / 2, title.length)
    .join(' ')}</span></h2> 
        <ul class="block__books-list">${await makeListOfBooks(data)}</ul>
        <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>`;

};

export async function makeListOfBooks(data) {

  return data.map(({ author, book_image, title, description, _id }) => {
    return `<li class="books__itm" id=${_id} >  
    <div class="books__wrapper"> 
    <img class="books__image" src="${book_image}"  alt="${description}" loading="lazy"  /> 
    <div class="books__overlay"> 
    <p class="books__overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books__info">  
    <p class="books__info-title">${title}</p>  
    <p class="books__info-author">${author}</p>  
    </div>  
    </li>`;
  }
  ).join('');
};

export async function currentCategoryTogle(value) {
  document.querySelector('.js-current-category').classList.remove(`js-current-category`);
  document.querySelector(`li[data-category="${value}"]`).classList.add(`js-current-category`);
};