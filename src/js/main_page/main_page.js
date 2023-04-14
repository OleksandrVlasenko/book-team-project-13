import axios from "axios"
import { BooksAPI } from "./fetch";
import { makeCategoryPage } from "./functions";
import { murkupCategoryList } from "./functions";
import { murkup } from "./functions";

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
    refBooks.insertAdjacentHTML('afterbegin', (await murkup(resp.data)).join(""))
    return resp.data;
  }

}
refCategory.addEventListener('click', onCategoryClick);

async function onCategoryClick(el) {
  refBooks.innerHTML = "";
  const data = await (await bookApi.getOneCategory(`${el.target.innerText}`)).data;
  await refBooks.insertAdjacentHTML('afterbegin', await makeCategoryPage(`${el.target.innerText}`, data));
};

// ===========================================================
// addeventListner!!!!!!!!!!!!!!!!!!!!!!!!!!
// ===========================================================
// refBooks.addEventListener('click', onClick)






