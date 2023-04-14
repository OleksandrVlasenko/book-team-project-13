import axios from "axios"
import { BooksAPI } from "./fetch"

const refBest = document.querySelector('.block__gallery')
const refBooks = document.querySelector('.block__books')
const refCategory = document.querySelector('.category__home')
const markupBook = document.querySelector('.block__category')

const bookCart = document.querySelector('.book-card__home')


const bookApi = new BooksAPI();



// async function api() { 
//     console.log(await booksAPI.getTopBooks()) 
//     console.log(await booksAPI.getCategoryList()) 
//     console.log(await booksAPI.getOneCategory(`Series Books`)) 
//     console.log(await booksAPI.getOneCategory(`Picture Books`)) 
// };

api()

async function api() { 
    const resp = (await bookApi.getTopBooks()) 
 
    if (!resp.statusText) { 
 
        throw new Error(resp.statusText) 
    } else { 
        refBest.insertAdjacentHTML('afterbegin', (await murkup(resp.data)).join("")) 
        return resp.data; 
    } 
     
}


async function murkup(api) { 
    return await Promise.all(api.map(async ({ list_name, books }) => { 
        return await ` 
    <div> 
    <h3 class="js-book-categoty">${list_name}</h3> 
    <ul>${await marcupBook(books)}</ul> 
    <button class="button">See more</button> 
    </div> 
    `; 
    })); 
 
}







async function marcupBook(books) { 
    
     return await books.map(({ list_name, book_image,_id
      }) => {
        
      return    `    
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





// ===========================================================
// addeventListner!!!!!!!!!!!!!!!!!!!!!!!!!!
// ===========================================================
// refBest.addEventListener('click', onClick)