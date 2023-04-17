import axios from "axios"
import { BooksAPI } from "./fetch";
import { makeCategoryPage } from "./functions";
import { murkupCategoryList } from "./functions";
import { murkup } from "./functions";
import { addMediaWidth } from "./media-width";
import {
  startPreloader,
  stopPreloader,
  addMarkupOfPreloader,
} from '../preloader';
import Notiflix from "notiflix";




const refBooks = document.querySelector('.block__books')
const refCategory = document.querySelector('.category__home')
const markupBook = document.querySelector('.block__category')

const bookCart = document.querySelector('.book-card__home')

const bookApi = new BooksAPI();

onFirstload()

async function onFirstload() {
  try {
    const categoryApi = (await bookApi.getCategoryList());
    refCategory.insertAdjacentHTML('beforeend', (await murkupCategoryList(categoryApi)));
  } catch (error) {
    Notiflix.Notify.failure(`Categories was not found : ${error.message}`);
  }
  try {
    const resp = (await bookApi.getTopBooks());
    refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>');
    refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join(""));
    return resp.data;
  } catch (error) {
    Notiflix.Notify.failure(`Books was not found : ${error.message}`);
  }
}
refCategory.addEventListener('click', onCategoryClick);

async function onCategoryClick(el) {
  el.preventDefault();

  if (el.target.classList.contains("category__home-itm")) {
    refBooks.innerHTML = "";
    //Add and start preloader
    refBooks.insertAdjacentHTML(
      'afterbegin',
      addMarkupOfPreloader()
    );
    startPreloader();
    //-----------------------
    if (el.target.innerText === `All categories`) {
      try {
        const resp = (await bookApi.getTopBooks());
        refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>')
        refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join(""));
        stopPreloader();
      } catch (error) {
        Notiflix.Notify.failure(`Books was not found : ${error.message}`);
      };
      return;
    } else {
      try {
        const data = await (await bookApi.getOneCategory(`${el.target.innerText}`)).data;
        refBooks.insertAdjacentHTML('beforeend', await makeCategoryPage(`${el.target.innerText}`, data));
        stopPreloader();
      } catch (error) {
        Notiflix.Notify.failure(`Books was not found : ${error.message}`);
      };
    }
  };
};

refBooks.addEventListener('click', onSeeMoreClick);

async function onSeeMoreClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("see-more")) {
    const requestedCategory = event.target.dataset.js;
    refBooks.innerHTML = '';
    //Add and start preloader
    refBooks.insertAdjacentHTML(
      'afterbegin',
      addMarkupOfPreloader()
    );
    startPreloader();
    //------------------------
    try {
      const data = await (
        await bookApi.getOneCategory(`${requestedCategory}`)
      ).data;
      refBooks.insertAdjacentHTML(
        'beforeend',
        await makeCategoryPage(`${requestedCategory}`, data)
      );
      stopPreloader();
    } catch (error) {
      Notiflix.Notify.failure(`Books was not found : ${error.message}`);
    }

  } else if (event.target.classList.contains("all-categories__btn")) {
    refBooks.innerHTML = '';
    //Add and start preloader
    refBooks.insertAdjacentHTML(
      'afterbegin',
      addMarkupOfPreloader()
    );
    startPreloader();
    //------------------------
    try {
      const resp = (await bookApi.getTopBooks());
      refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>');
      refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join(""));
      stopPreloader();
    } catch (error) {
      Notiflix.Notify.failure(`Books was not found : ${error.message}`);
    }
  }
};






