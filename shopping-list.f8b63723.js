function o(o,n,e,i){Object.defineProperty(o,n,{get:e,set:i,enumerable:!0,configurable:!0})}function n(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},t=e.parcelRequired7c6;null==t&&((t=function(o){if(o in i)return i[o].exports;if(o in s){var n=s[o];delete s[o];var e={id:o,exports:{}};return i[o]=e,n.call(e.exports,e,e.exports),e.exports}var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(o,n){s[o]=n},e.parcelRequired7c6=t),t.register("kyEFX",(function(n,e){var i,s;o(n.exports,"register",(function(){return i}),(function(o){return i=o})),o(n.exports,"resolve",(function(){return s}),(function(o){return s=o}));var t={};i=function(o){for(var n=Object.keys(o),e=0;e<n.length;e++)t[n[e]]=o[n[e]]},s=function(o){var n=t[o];if(null==n)throw new Error("Could not resolve bundle with id "+o);return n}})),t("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.f8b63723.js","lsblX":"shoppingList-clear--bg-x3.9bc44f3d.png","6WtvC":"dump.38fa3b97.svg","6bwFv":"shoppingList--bookShop.8363c1d3.png","lmhI2":"shoppingList--logoBook.5f2db3a0.png","bpnPT":"shoppingList--logoAmazon.9aa609d6.png","5UbS1":"index.8209e254.css","4l2W5":"index.51b9d676.js"}')),t("ioBS9"),t("75VGX");var l,r=t("bqQ6g"),a=t("eolzN");l=new URL(t("kyEFX").resolve("lsblX"),import.meta.url).toString();const p=new URL(l);var c;c=new URL(t("kyEFX").resolve("6WtvC"),import.meta.url).toString();const g=new URL(c);var d;d=new URL(t("kyEFX").resolve("6bwFv"),import.meta.url).toString();const _=new URL(d);var h;h=new URL(t("kyEFX").resolve("lmhI2"),import.meta.url).toString();const u=new URL(h);var f;f=new URL(t("kyEFX").resolve("bpnPT"),import.meta.url).toString();const m=new URL(f);function b(){return`<div class="shopping-list__clear">\n                <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>\n                <img class="shopping-list__clear-bg" src="${p}" alt="books">\n            </div>`}function k(o){if(o.target.closest(".shopping-list__icon-deleteBtn")===o.target){const n=o.target.attributes.id.nodeValue,e=JSON.parse(localStorage.getItem("idBooks")).filter((o=>o._id!==n));localStorage.setItem("idBooks",JSON.stringify(e)),H()}}var v=t("ioBS9"),w=t("7Y9D8"),S=t("eyjy7"),y=t("8mXNj");const E=new(0,r.BooksAPI),L=document.querySelector(".shopping-list__gallery-boocks"),R=a.books;async function H(){const o=JSON.parse(localStorage.getItem("idBooks"));try{const n=(await async function(o){try{return await Promise.all(o.map((async o=>await E.getBookByID(o._id))))}catch(o){console.log(o)}}(o)).map((o=>o.data));if(0===o.length)return L.innerHTML=b();L.innerHTML=n.map((({_id:o,book_image:n,author:e,list_name:i,title:s,description:t,buy_links:l})=>`<li id="${o}" class="shopping-list__card-boock">\n                <div class="shopping-list__general-information">\n                    <div>\n                        <img class="shopping-list__img" src="${n}" alt="book image">\n                        <p class="shopping-list__author">${e}</p>\n                    </div>\n                        <div">\n                            <h2 class="shopping-list__title-book">${s}</h2>\n                            <h3 class="shopping-list__list-name">${i}</h3>\n                            <p class="shopping-list__description--near">${t}</p>\n                            <p class="shopping-list__author--near">${e}</p>\n                            <ul class="shopping-list__shop-list">\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[0].url}" target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoAmazon" src="${m}" alt="logoAmazon">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[1].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoBook" src="${u}" alt="logoBook">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[4].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img bookShop" src="${_}" alt="bookShop">\n                                    </a>\n                                </li>\n                            </ul>\n                            <img id="${o}" width="38" height="38" class="shopping-list__icon-deleteBtn" src="${g}" alt="icon-deleteBtn">\n                        </div>\n                        <p class="shopping-list__description">${t}</p>\n                    </div>\n                    </li>`)).join("");document.querySelector(".shopping-list__gallery-boocks").addEventListener("click",k)}catch(o){console.log(o)}}localStorage.setItem("idBooks",JSON.stringify(R)),window.addEventListener("load",(()=>{(0,S.onAuthStateChanged)(y.auth,(o=>{if(o)return H(),void(0,v.stopPreloader)();n(w).Notify.info("Sign in to view your shopping list"),L.innerHTML=b(),(0,v.stopPreloader)()}))})),t("i0beZ"),t("4dIBK"),t("krGWQ"),t("dV7Gh"),t("5hJ2g");
//# sourceMappingURL=shopping-list.f8b63723.js.map