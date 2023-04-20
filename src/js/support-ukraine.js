// import { supporters } from './support-fonds';

// const fondsContainer = document.querySelector('#fonds');

// let fondsHtml = '';
// for (let i = 0; i < supporters.length; i++) {
//   let number = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

//   fondsHtml += `<div class=""wrapper>
//   <span class="support_number">${number}</span>
//   <a href="${supporters[i].url}">
//     <img
//     srcset="${supporters[i].img} 1x, ${supporters[i].imgRetinaTwo} 2x, ${supporters[i].imgRetinaThree} 3x"
//     class="support_img"
//     src="${supporters[i].img}" alt="${supporters[i].title}" />
//   </a>
//   </div>
//   `;
// }

// fondsContainer.innerHTML = fondsHtml;

import Swiper from 'swiper';
import 'swiper/swiper.css';
import { supporters } from './support-fonds';

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
  btn: document.querySelector('.supporters__btn'),
};

// function getBookName(title) {
//   return title.toLowerCase().replaceAll(' ', '-');
// }

const markup = supporters
  .map(
    (el, index) =>
      // const bookName = getBookName(el.title);
      // console.log(bookName);

      // const fondSource = new URL(
      //   `../images/save-the-children@1x.png`,
      //   import.meta.url
      // );
      // console.log(fondSource);

      `<div class ="supporters__item swiper-slide">
      <span class="supporters__number">
      ${(index + 1).toString().padStart(2, '0')}
        </span>
        <a href = "${el.url}" title = "${
        el.title
      }" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
      <img src = "${el.img}" class="supporters__img" srcset="${el.img} 1x, ${
        el.imgRetinaTwo
      } 2x, ${el.imgRetinaThree} 3x" alt = "${el.title} logo"/>
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
  const isHidden = refs.btn.classList.contains('hidden');
  if (supporters.length > swiper.params.slidesPerGroup) {
    if (isHidden) {
      refs.btn.classList.remove('hidden');
    }
    refs.nextBtn.addEventListener('click', onBtnClick);
  } else {
    if (!isHidden) {
      refs.btn.classList.add('hidden');
    }
  }
}

function rotateBtn() {
  refs.btn.classList.toggle('supporters__btn--up');
}
