const homePg = document.querySelector('.nav__link_home');
const shopList = document.querySelector('.nav__link_shopping');

const currentPath = window.location.pathname;

// if (currentPath === '/index.html') {
//   console.log(currentPath);
//   homePg.classList.add('current__page');
// } else if (currentPath === '/') {
//   homePg.classList.add('current__page');
// } else if (currentPath === '/shopping-list.html') {
//   shopList.classList.add('current__page');
// }

if (currentPath === '/index.html' || currentPath === '/') {
  homePg.classList.add('current__page');
} else if (currentPath === '/shopping-list.html') {
  shopList.classList.add('current__page');
}
