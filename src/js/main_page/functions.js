import { addMediaWidth } from "./media-width";

export async function murkupCategoryList(fetch) {
  return await fetch.data.map(({ list_name }) => { return `<li class="category__home-itm">${list_name}</li>` }).join('');
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
    <ul class='list-books__home'>${await sliceData(books)}</ul> 
    <button class="button see-more" data-js="${list_name}">See more</button> 
    </div> 
    `;
  }));
}


export async function makeCategoryPage(category, data) {

  const title = category.split(" ");
  return ` 
  <h2 class="block__books-title">${title.splice(0, (title.length / 2)).join(' ')} <span class="block__books-colortitle">${title.splice((title.length / 2), title.length).join(' ')}</span></h2> 
        <ul class="block__books-list">${await makeListOfBooks(data)}</ul>`


};

export async function makeListOfBooks(data) {
 
  return data.map(({ author, book_image, title, description, _id }) => {
    return `<li class="books__itm">  
    <div class="books__wrapper" id=${_id} > 
    <img class="books__image" src="${book_image}"  alt="${description}" loading="lazy"  /> 
    <div class="books__overlay"> 
    <p class="books__overlay-text"></p> 
    </div> 
    </div> 
    <div class="books__info">  
    <p class="books__info-title">${title}</p>  
    <p class="books__info-author">${author}</p>  
    </div>  
    </li>`
  }
  ).join('');
};





// export async function marcupBook(books) {
//   return await books.map(({ list_name, book_image, _id, author, title
//   }) => {
//     return `
// <div class="book-card__home">
//   <div class="thumb__home js-item">
//     <a  href="${book_image}"
//       ><img class="js-bookImg" src="${book_image}" id=${_id} alt="" title="" loading="lazy"
//     /></a>
//   </div>
//   <div>
//     <p class="info-title">
//       <b>${title}</b>
//     </p>
//     <p class="info-autor">
//       <b>${author}</b>
//     </p>
//   </div>
// </div>
// `}).join('')
// }