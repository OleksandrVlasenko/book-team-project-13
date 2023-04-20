function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const btnUp = document.querySelector('.btn-up');
btnUp.style.display = 'none';

window.addEventListener('scroll', () => {
  if (window.pageYOffset > (window.innerHeight / 2)) {
    btnUp.style.display = 'inline-flex';
  } else {
    btnUp.style.display = 'none';
  }
});


console.log(btnUp)
  btnUp.addEventListener('click',scrollToTop);