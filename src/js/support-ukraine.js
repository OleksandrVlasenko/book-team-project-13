// import { fondsList } from './support-fonds';

// const fondsContainer = document.querySelector('#fonds');

// let fondsHtml = '';
// for (let i = 0; i < fondsList.length; i++) {
//   let number = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

//   fondsHtml += `<div class="wrapper">
//   <span class="support_number">${number}</span>
//   <a href="${fondsList[i].url}">
//     <img 
//     srcset="${fondsList[i].img} 1x, ${fondsList[i].imgRetinaTwo} 2x, ${fondsList[i].imgRetinaThree} 3x"
//     class="support_img" 
//     src="${fondsList[i].img}" alt="${fondsList[i].title}" />
//   </a>
//   </div>
//   `;
// }

import Swiper from 'swiper';
import 'swiper/swiper.css';
import supporters from './support-fonds';

const swiperOptions = {
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  breakpoints: {
    768: {
      slidesPerGroup: 6,
    },
  },
};

const swiper = new Swiper('.swiper', swiperOptions);

const refs = {
  nextBtn: document.querySelector('.swiper-button-next'),
  list: document.querySelector('.swiper-wrapper'),
};

const markup = supporters
  .map(
    (el, index) =>
      `<div class ="supporters__item swiper-slide">
      <span class="supporters__number">
      ${(index + 1).toString().padStart(2, '0')}
        </span>
        <a href = "${el.url}" title = "${el.title}" target = '_blank'>
      <img class="supporters__img" srcset="${el.img} 1x, ${el.img2x} 2x, ${
        el.img3x
      } 3x" alt = "${el.title} logo"/>
      </a>
      </div>`
  )
  .join('');

refs.list.innerHTML = markup;
toggleBtn();

addEventListener('resize', toggleBtn);

function onBtnClick() {
  swiper.slideNext();
  if (swiper.isBeginning || swiper.isEnd) {
    rotateBtn();
  }
}
function toggleBtn() {
  const isHidden = refs.nextBtn.classList.contains('hidden');
  if (supporters.length > swiper.params.slidesPerGroup) {
    if (isHidden) {
      refs.nextBtn.classList.remove('hidden');
    }
    refs.nextBtn.addEventListener('click', onBtnClick);
  } else {
    if (!isHidden) {
      refs.nextBtn.classList.add('hidden');
    }
  }
}

function rotateBtn() {
  refs.nextBtn.classList.toggle('supporters__btn--up');
}