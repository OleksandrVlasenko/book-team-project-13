function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n("ioBS9"),n("75VGX");var s=n("bqQ6g");async function i(e){return await e.data.map((({list_name:e})=>`<li class="category__home-itm" data-category="${e}">${e}</li>`)).join("")}async function r(e){return await Promise.all(e.map((async({list_name:e,books:t})=>` \n    <div class="item-books__home"> \n    <h3 class="js-book-categoty">${e}</h3> \n    <ul class='list-books__home'>${await c(t)}</ul>  \n    <button class="button see-more" data-js="${e}" aria-label="See more">See more</button> \n    </div> \n    `)))}async function l(e,t){const o=e.split(" ");return` \n  <h2 class="block__books-title"\n>${o.splice(0,o.length/2).join(" ")} <span class="block__books-colortitle">${o.splice(o.length/2,o.length).join(" ")}</span></h2> \n        <ul class="block__books-list">${await c(t)}</ul>\n        <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>`}async function c(e){return e.map((({author:e,book_image:t,title:o,description:a,_id:n})=>`<li class="books__itm" id=${n} >  \n    <div class="books__wrapper"> \n    <img class="books__image" src="${t}"  alt="${a}" loading="lazy"  /> \n    <div class="books__overlay"> \n    <p class="books__overlay-text">QUICK VIEW</p> \n    </div> \n    </div> \n    <div class="books__info">  \n    <p class="books__info-title">${o}</p>  \n    <p class="books__info-author">${e}</p>  \n    </div>  \n    </li>`)).join("")}async function d(e){document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`li[data-category="${e}"]`).classList.add("js-current-category")}var u=n("ioBS9"),p=n("7Y9D8");function m(){const e=document.querySelector("[data-modal]");e.classList.add("is-active"),document.body.classList.add("no-scroll"),e.addEventListener("click",g),document.body.addEventListener("keyup",_)}function g(e){const t=document.querySelector("[data-modal]"),o=document.querySelector("[data-modal-window]"),a=document.querySelector("[data-modal-close]");e.composedPath().includes(o)&&e.target.closest("[data-modal-close]")!==a||(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",g),document.body.removeEventListener("keyup",_))}function _(e){const t=document.querySelector("[data-modal]");27==e.keyCode&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",g),document.body.removeEventListener("keyup",_))}p=n("7Y9D8"),s=n("bqQ6g");var b=n("4QRki"),f=n("8mXNj"),k=n("eyjy7");const h=new(0,s.BooksAPI),y=document.querySelector(".popup__book-image"),v=document.querySelector(".popup__book_title"),L=document.querySelector(".popup__book_author"),S=document.querySelector(".popup__book_review"),w=document.querySelector(".popup__shopping-links-icon.amazon"),j=document.querySelector(".popup__shopping-links-icon.book"),q=document.querySelector(".popup__shopping-links-icon.bookShop"),B=document.querySelector("#add"),T=document.querySelector(".under-btn-text");async function $(t){try{const{data:e}=await h.getBookByID(`${t}`);!function(e){let t=localStorage.getItem("idBooks");t&&""!==t&&t.includes(e._id)?(B.textContent="Remove from the shopping list",T.hidden=!1):B.textContent="Add to shopping list";B.attributes.id.value=e._id}(e),y.attributes.src.value=e.book_image,v.textContent=e.title,L.textContent=e.author,S.textContent=e.description,w.attributes.href.value=e.buy_links[0].url,j.attributes.href.value=e.buy_links[1].url,q.attributes.href.value=e.buy_links[4].url,m()}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`)}}function x(){window.scrollTo({top:0,behavior:"smooth"})}T.hidden=!0,B.addEventListener("click",(function(e){if(!e.target.disabled)return;const t=e.target.attributes.id.value;"Add to shopping list"===B.textContent?function(e){let t=localStorage.getItem("idBooks");"undefined"!==t&&t&&""!==t||(t=[],localStorage.setItem("idBooks",JSON.stringify(t)));t=JSON.parse(localStorage.getItem("idBooks")),t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),B.textContent="Remove from the shopping list",T.hidden=!1,f.auth.currentUser&&(0,b.updateShoppingList)()}(t):function(e){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),B.textContent="Add to shopping list",T.hidden=!0,f.auth.currentUser&&(0,b.updateShoppingList)()}(t)})),(0,k.onAuthStateChanged)(f.auth,(e=>{e?(B.classList.remove("disabled"),T.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',T.hidden=!0):(B.classList.add("disabled"),T.textContent="Please, log in to get more options.",T.hidden=!1)}));const A=document.querySelector(".block__books"),C=document.querySelector(".category__home"),M=(document.querySelector(".block__category"),document.querySelector(".book-card__home"),new(0,s.BooksAPI));!async function(){try{const e=await M.getCategoryList();C.insertAdjacentHTML("beforeend",await i(e));document.querySelector("#preloader").firstElementChild.style.zIndex="1002"}catch(t){e(p).Notify.failure(`Categories was not found : ${t.message}`)}try{const e=await M.getTopBooks();A.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),A.insertAdjacentHTML("beforeend",(await r(e.data)).join("")),(0,u.stopPreloader)(),e.data}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`),(0,u.stopPreloader)()}}(),C.addEventListener("click",(async function(t){if(t.preventDefault(),t.target.classList.contains("category__home-itm")){if(x(),A.innerHTML="",A.insertAdjacentHTML("afterbegin",(0,u.addMarkupOfPreloader)()),(0,u.startPreloader)(),"All categories"===t.target.innerText){try{const e=await M.getTopBooks();A.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),A.insertAdjacentHTML("beforeend",(await r(e.data)).join("")),d(t.target.innerText),(0,u.stopPreloader)()}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`)}return}try{const e=await(await M.getOneCategory(`${t.target.innerText}`)).data;A.insertAdjacentHTML("beforeend",await l(`${t.target.innerText}`,e)),d(t.target.innerText),(0,u.stopPreloader)()}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`)}}})),A.addEventListener("click",(async function(t){t.preventDefault();const o=t.target.closest(".books__itm");if(o){$(o.attributes.id.value)}if(t.target.classList.contains("see-more")){x();const o=t.target.dataset.js;A.innerHTML="",A.insertAdjacentHTML("afterbegin",(0,u.addMarkupOfPreloader)()),(0,u.startPreloader)();try{const e=await(await M.getOneCategory(`${o}`)).data;A.insertAdjacentHTML("beforeend",await l(`${o}`,e)),d(`${o}`),(0,u.stopPreloader)()}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`)}}else if(t.target.classList.contains("all-categories__btn")){x(),A.innerHTML="",A.insertAdjacentHTML("afterbegin",(0,u.addMarkupOfPreloader)()),(0,u.startPreloader)();try{const e=await M.getTopBooks();A.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),A.insertAdjacentHTML("beforeend",(await r(e.data)).join("")),(0,u.stopPreloader)(),d("All categories")}catch(t){e(p).Notify.failure(`Books was not found : ${t.message}`)}}})),n("i0beZ"),n("8mXNj");k=n("eyjy7");const P=document.querySelector(".nav__link_home"),N=document.querySelector(".nav__link_shopping"),H=document.querySelector(".auth-btns__wrapper"),I=(document.querySelector(".nav__item"),window.top.location.pathname);"/book-team-project-13/index.html"===I||"/index.html"===I||"/book-team-project-13/"===I||"/"===I?P.classList.add("current__page"):"/shopping-list.html"===I&&(N.classList.add("current__page"),P.classList.remove("current__page"));const O=(0,k.getAuth)();(0,k.onAuthStateChanged)(O,(e=>{e?(H.classList.remove("is-hidden"),N.classList.remove("is-hidden"),P.classList.remove("is-hidden")):(H.classList.remove("is-hidden"),N.classList.add("is-hidden"),P.classList.add("is-hidden"))})),n("krGWQ"),n("dV7Gh"),n("5hJ2g"),n("4dIBK"),n("4QRki");
//# sourceMappingURL=index.e18e0037.js.map
