import { fondsList } from './support-fonds';

const fondsContainer = document.querySelector('#fonds');

let fondsHtml = '';
for (let i = 0; i < fondsList.length; i++) {
  let number = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

  fondsHtml += `<div class=""wrapper>
  <span class="support_number">${number}</span>
  <a href="${fondsList[i].url}">
    <img 
    srcset="${fondsList[i].img} 1x, ${fondsList[i].imgRetinaTwo} 2x, ${fondsList[i].imgRetinaThree} 3x"
    class="support_img" 
    src="${fondsList[i].img}" alt="${fondsList[i].title}" />
  </a>
  </div>
  `;
}

fondsContainer.innerHTML = fondsHtml;
