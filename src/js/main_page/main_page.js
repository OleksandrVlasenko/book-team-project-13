import axios from "axios"
import { BooksAPI } from "./fetch"

const refBest = document.querySelector('.block__gallery')
const refBooks = document.querySelector('.block__books')
const refCategory = document.querySelector('.category__home')

const bookApi = new BooksAPI();









const URL = {
  all:'https://books-backend.p.goit.global/books/category-list',
  best:'https://books-backend.p.goit.global/books/top-books',
  // books:'https://books-backend.p.goit.global/books/top-books',
}
async function getUrl(obj) { 
  await Object.values(obj).map(el => 
    api(el)
   )

//  return url 
}
getUrl(URL)

async function api(curentUrl) {
 
  try {
    
    return axios.get(curentUrl)
      .then(e => murkup(e.data))
  }
  catch(e){
    console.log(e);
  }
}

async function murkup(api) {

 

  if (!api[0].books) {
    const fetch = await api;
    const markup = await fetch.map(({ list_name }) => {
      return `

<li>${list_name}</li>
`
    }).join('')
    const murkarAllCatrgory = refCategory.insertAdjacentHTML('beforeend', markup)
  }
  else {
    const fetch = await api;
    console.log(fetch);
    const markup = await fetch.map(e => Object.values(e)[1].map(({ book_uri, book_image,list_name }) => {
      return `

      
<div class="book-card__home">
          <div class="thumb__home">
          <a href="${book_uri}"><img src="${book_image}" alt="" title="" loading="lazy"/></a> 
          </div>

           <p class="info-item">
            <b>${list_name}</b>
          </p>
          </div>
          </div>

`
    }).join(''))
    const murkarBest = refBest.insertAdjacentHTML('beforeend', markup)
  }
 
}