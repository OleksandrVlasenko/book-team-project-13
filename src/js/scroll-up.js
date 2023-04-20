// const sentinel = document.querySelector('#sentinel');

export function scrollToStart() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// function scrollToStartVP() {
//   window.scrollBy({
//     top: window.innerHeight - 140,
//     behavior: 'smooth',
//   });
// }

// const options = {
//   // root: document.querySelector('#header'),
//   rootMargin: '250px',
//   threshold: 1,
// };

// const observer = new IntersectionObserver(onObserve, options);

// observer.observe(sentinel);

// // observer.unobserve(sentinel);

// function onObserve(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.target) {
//       console.log('intersection');
//     }
//   });
// }
