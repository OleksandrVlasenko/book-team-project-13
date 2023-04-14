

export async function murkupCategoryList(fetch) {
    return await fetch.data.map(({ list_name }) => { return `<li>${list_name}</li>` }).join('');
}

export async function murkup(data) {
    return await Promise.all(data.map(async ({ list_name, books }) => {
        return await ` 
    <div> 
    <h3 class="js-book-categoty">${list_name}</h3> 
    <ul>${await marcupBook(books)}</ul> 
    <button class="button">See more</button> 
    </div> 
    `;
    }));
}

export async function marcupBook(books) {
    return await books.map(({ list_name, book_image, _id
    }) => {
        return `    
<div class="book-card__home">
  <div class="thumb__home data-book-id=${_id} js-item">
    <a  href="${book_image}"
      ><img class="js-bookImg" src="${book_image}" alt="" title="" loading="lazy"
    /></a>
  </div>
  <div>
    <p class="info-item">
      <b>${list_name}</b>
    </p>
  </div>
</div>
`}).join('')
}

export async function makeCategoryPage(category, data) {
    const title = category.split(" ");
    return ` 
    <h2 class="block__books-title">${title.splice(0, (title.length / 2)).join(' ')} <span class="block__books-colortitle">${title.splice((title.length / 2), title.length).join(' ')}</span></h2> 
        <ul class="block__books-list">${await makeListOfBooks(data)}</ul>`


};

export async function makeListOfBooks(data) {
    return data.map(({ author, book_image, title, description, _id }) => {
        return `<li>  
            <div class="books__wrapper" > 
              <img class="books__image" src="${book_image}"  alt="${description}" loading="lazy" id=${_id} /> 
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