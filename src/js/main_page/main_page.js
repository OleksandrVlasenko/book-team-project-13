import axios from "axios"
import { BooksAPI } from "./fetch";
import { makeCategoryPage } from "./functions";
import { murkupCategoryList } from "./functions";
import { murkup } from "./functions";
import { addMediaWidth } from "./media-width";




const refBooks = document.querySelector('.block__books')
const refCategory = document.querySelector('.category__home')
const markupBook = document.querySelector('.block__category')

const bookCart = document.querySelector('.book-card__home')

const bookApi = new BooksAPI();

onFirstload()

async function onFirstload() {
  const resp = (await bookApi.getTopBooks());
  const categoryApi = (await bookApi.getCategoryList());
  if (!resp.statusText) {
    throw new Error(resp.statusText)
  } else {
    refCategory.insertAdjacentHTML('beforeend', (await murkupCategoryList(categoryApi)))
    refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>')
    refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join(""))
    return resp.data;
  }

}
refCategory.addEventListener('click', onCategoryClick);

async function onCategoryClick(el) { 
  el.preventDefault(); 
  if (el.target.classList.contains("category__home-itm")) { 
    refBooks.innerHTML = ""; 
    const data = await (await bookApi.getOneCategory(`${el.target.innerText}`)).data; 
    const resp = (await bookApi.getTopBooks()); 
    if (el.target.innerText === `All categories`) { 
      refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>') 
      refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join("")); 
    } 
    refBooks.insertAdjacentHTML('beforeend', await makeCategoryPage(`${el.target.innerText}`, data)); 
  } 
};



refBooks.addEventListener('click', onSeeMoreClick); 
 
async function onSeeMoreClick(event) { 
  event.preventDefault(); 
  if (event.target.classList.contains("see-more")) { 
    const requestedCategory = event.target.dataset.js 
    console.dir(requestedCategory) 
    refBooks.innerHTML = ""; 
    const data = await (await bookApi.getOneCategory(`${requestedCategory}`)).data; 
    refBooks.insertAdjacentHTML('beforeend', await makeCategoryPage(`${requestedCategory}`, data)); 
  }; 
};


// ===========================================================
// addeventListner!!!!!!!!!!!!!!!!!!!!!!!!!!
// ===========================================================
// refBooks.addEventListener('click', onClick)



