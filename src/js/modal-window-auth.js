
const signupBtn = document.querySelector('.signup-btn');
const modal = document.querySelector('.modal-auth');
const backdrop = document.querySelector('[data-modal-backdrop]');
const closeBtn = document.querySelector('[data-modal-close]');


signupBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

// backdrop.addEventListener('click', (event) => {
//   if (event.target === backdrop) {
//     modal.classList.remove('show');
//   }
// });

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});