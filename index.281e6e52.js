function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},o.parcelRequired7c6=s),s.register("kyEFX",(function(t,o){var a,n;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var s={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},n=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.281e6e52.js","bpnPT":"shoppingList--logoAmazon.9aa609d6.png","lmhI2":"shoppingList--logoBook.5f2db3a0.png","6bwFv":"shoppingList--bookShop.8363c1d3.png","5UbS1":"index.8c250694.css","4l2W5":"index.037000e4.js"}')),s("ioBS9"),s("75VGX");var r=s("bqQ6g");function i(){const e=document.documentElement.clientWidth;return e<767?"mobile":e<1439?"tablet":e>=1440?"desctop":void 0}async function c(e){return await e.data.map((({list_name:e})=>`<li class="category__home-itm" data-category="${e}">${e}</li>`)).join("")}async function l(e){return await Promise.all(e.map((async({list_name:e,books:t})=>` \n    <div class="item-books__home"> \n    <h3 class="js-book-categoty">${e}</h3> \n    <ul class='list-books__home'>${await async function(e){return"mobile"===i()?u(e.slice(0,1)):"tablet"===i()?u(await e.slice(0,3)):u(e)}(t)}</ul> \n    <button class="button see-more" data-js="${e}">See more</button> \n    </div> \n    `)))}async function d(e,t){const o=e.split(" ");return` \n  <h2 class="block__books-title">${o.splice(0,o.length/2).join(" ")} <span class="block__books-colortitle">${o.splice(o.length/2,o.length).join(" ")}</span></h2> \n        <ul class="block__books-list">${await u(t)}</ul>\n        <button class="button all-categories__btn" data-js="All Categories">All Categories</button>`}async function u(e){return e.map((({author:e,book_image:t,title:o,description:a,_id:n})=>`<li class="books__itm">  \n    <div class="books__wrapper" id=${n} > \n    <img class="books__image" src="${t}"  alt="${a}" loading="lazy"  /> \n    <div class="books__overlay"> \n    <p class="books__overlay-text">QUICK VIEW</p> \n    </div> \n    </div> \n    <div class="books__info">  \n    <p class="books__info-title">${o}</p>  \n    <p class="books__info-author">${e}</p>  \n    </div>  \n    </li>`)).join("")}async function b(e){document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector(`li[data-category="${e}"]`).classList.add("js-current-category")}var p=s("ioBS9"),f=s("7Y9D8");const g=document.querySelector(".block__books"),_=document.querySelector(".category__home"),k=(document.querySelector(".block__category"),document.querySelector(".book-card__home"),new(0,r.BooksAPI));!async function(){try{const e=await k.getCategoryList();_.insertAdjacentHTML("beforeend",await c(e))}catch(e){t(f).Notify.failure(`Categories was not found : ${e.message}`)}try{const e=await k.getTopBooks();g.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),g.insertAdjacentHTML("beforeend",(await l(e.data)).join("")),e.data}catch(e){t(f).Notify.failure(`Books was not found : ${e.message}`)}}(),_.addEventListener("click",(async function(e){if(e.preventDefault(),e.target.classList.contains("category__home-itm")){if(g.innerHTML="",g.insertAdjacentHTML("afterbegin",(0,p.addMarkupOfPreloader)()),(0,p.startPreloader)(),"All categories"===e.target.innerText){try{const t=await k.getTopBooks();g.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),g.insertAdjacentHTML("beforeend",(await l(t.data)).join("")),b(e.target.innerText),(0,p.stopPreloader)()}catch(e){t(f).Notify.failure(`Books was not found : ${e.message}`)}return}try{const t=await(await k.getOneCategory(`${e.target.innerText}`)).data;g.insertAdjacentHTML("beforeend",await d(`${e.target.innerText}`,t)),b(e.target.innerText),(0,p.stopPreloader)()}catch(e){t(f).Notify.failure(`Books was not found : ${e.message}`)}}})),g.addEventListener("click",(async function(e){if(e.preventDefault(),e.target.classList.contains("see-more")){const o=e.target.dataset.js;g.innerHTML="",g.insertAdjacentHTML("afterbegin",(0,p.addMarkupOfPreloader)()),(0,p.startPreloader)();try{const e=await(await k.getOneCategory(`${o}`)).data;g.insertAdjacentHTML("beforeend",await d(`${o}`,e)),b(`${o}`),(0,p.stopPreloader)()}catch(e){t(f).Notify.failure(`Books was not found : ${e.message}`)}}else if(e.target.classList.contains("all-categories__btn")){g.innerHTML="",g.insertAdjacentHTML("afterbegin",(0,p.addMarkupOfPreloader)()),(0,p.startPreloader)();try{const e=await k.getTopBooks();g.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),g.insertAdjacentHTML("beforeend",(await l(e.data)).join("")),(0,p.stopPreloader)(),b("All categories")}catch(e){t(f).Notify.failure(`Books was not found : ${e.message}`)}}})),s("i0beZ");const m=document.querySelector(".nav__link_home"),y=document.querySelector(".nav__link_shopping"),h=window.location.pathname;"/index.html"===h?(console.log(h),m.classList.add("current__page")):"/"===h?m.classList.add("current__page"):"/shopping-list.html"===h&&y.classList.add("current__page");const w=document.querySelector("[data-modal-open]"),j=document.querySelector("[data-modal-close]"),v=document.querySelector("[data-modal]"),L=(document.querySelector(".book"),document.querySelector("#add"),document.querySelector(".under-btn-text"));function S(){v.classList.toggle("is-hidden")}L.hidden=!0,w.addEventListener("click",S),j.addEventListener("click",S);new URL(s("kyEFX").resolve("bpnPT"),import.meta.url).toString();new URL(s("kyEFX").resolve("lmhI2"),import.meta.url).toString();new URL(s("kyEFX").resolve("6bwFv"),import.meta.url).toString(),s("krGWQ"),s("dV7Gh"),s("5hJ2g"),s("4dIBK");var A=s("gKkQl"),T=s("jAzyG"),H=s("eyjy7");s("eolzN");const $=(0,A.initializeApp)({apiKey:"AIzaSyAmjMPhgeiPnKuRTAY8vypkpT4j7HmPfug",authDomain:"fu11stack-book-project.firebaseapp.com",databaseURL:"https://fu11stack-book-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fu11stack-book-project",storageBucket:"fu11stack-book-project.appspot.com",messagingSenderId:"110270361117",appId:"1:110270361117:web:304c337163371a2e8920f4"}),M=((0,T.getDatabase)($),(0,H.getAuth)());M.currentUser;
//# sourceMappingURL=index.281e6e52.js.map
