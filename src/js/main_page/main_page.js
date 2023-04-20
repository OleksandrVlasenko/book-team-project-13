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
import { currentCategoryTogle } from "./functions";
import { modalAboutBook } from "../popup-about-book"
import {scrollToStart} from "../scroll-up"




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

    const preloader = document.querySelector('#preloader');
    preloader.firstElementChild.style.zIndex = '1002';
    // const preloader = document.querySelector('#preloader');
    // setTimeout(() => {
    //   preloader.firstElementChild.style.zIndex = '-1';
    // }, 350);

  } catch (error) {
    Notiflix.Notify.failure(`Categories was not found : ${error.message}`);
  }
  try {
    const resp = (await bookApi.getTopBooks());
    refBooks.insertAdjacentHTML('afterbegin', '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>');
    refBooks.insertAdjacentHTML('beforeend', (await murkup(resp.data)).join(""));
    stopPreloader();
    return resp.data;
  } catch (error) {
    Notiflix.Notify.failure(`Books was not found : ${error.message}`);
    stopPreloader();
  }
}
refCategory.addEventListener('click', onCategoryClick);

async function onCategoryClick(el) {
  el.preventDefault();

  if (el.target.classList.contains("category__home-itm")) {
    scrollToStart();
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
        currentCategoryTogle(el.target.innerText);
        stopPreloader();
      } catch (error) {
        Notiflix.Notify.failure(`Books was not found : ${error.message}`);
      };
      return;
    } else {
      try {
        const data = await (await bookApi.getOneCategory(`${el.target.innerText}`)).data;
        refBooks.insertAdjacentHTML('beforeend', await makeCategoryPage(`${el.target.innerText}`, data));
        currentCategoryTogle(el.target.innerText)
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
  //Перевірка для відкриття модалки
  const currentEl = event.target.closest('.books__itm');
  if (currentEl) {
    const bookId = currentEl.attributes.id.value;
    modalAboutBook(bookId);
  }

  if (event.target.classList.contains('see-more')) {
    scrollToStart();
    const requestedCategory = event.target.dataset.js;
    refBooks.innerHTML = '';
    //Add and start preloader
    refBooks.insertAdjacentHTML('afterbegin', addMarkupOfPreloader());
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
      currentCategoryTogle(`${requestedCategory}`);
      stopPreloader();
    } catch (error) {
      Notiflix.Notify.failure(`Books was not found : ${error.message}`);
    }
  } else if (event.target.classList.contains('all-categories__btn')) {
    scrollToStart();
    refBooks.innerHTML = '';
    //Add and start preloader
    refBooks.insertAdjacentHTML('afterbegin', addMarkupOfPreloader());
    startPreloader();
    //------------------------
    try {
      const resp = await bookApi.getTopBooks();
      refBooks.insertAdjacentHTML(
        'afterbegin',
        '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'
      );
      refBooks.insertAdjacentHTML(
        'beforeend',
        (await murkup(resp.data)).join('')
      );
      stopPreloader();
      currentCategoryTogle("All categories");
    } catch (error) {
      Notiflix.Notify.failure(`Books was not found : ${error.message}`);
    }
  }
};





