function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){s[e]=o},n.parcelRequired7c6=i),i.register("kyEFX",(function(o,n){var t,s;e(o.exports,"register",(function(){return t}),(function(e){return t=e})),e(o.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};t=function(e){for(var o=Object.keys(e),n=0;n<o.length;n++)i[o[n]]=e[o[n]]},s=function(e){var o=i[e];if(null==o)throw new Error("Could not resolve bundle with id "+e);return o}})),i("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.6fe72821.js","05bC2":"shoppingList-clear--bg-x1.15c3c113.png","lCTHN":"shoppingList-clear--bg-x2.6292faab.png","lsblX":"shoppingList-clear--bg-x3.9bc44f3d.png","7vqc4":"shoppingList--logoAmazon--x1.b8fa90cb.png","5HsEb":"shoppingList--logoAmazon--x2.edefe29e.png","fSxxN":"shoppingList--logoAmazon--x3.0cbc25f5.png","Ydit4":"shoppingList--appleBook--x1.5a9f17e3.png","1d1ud":"shoppingList--appleBook--x2.54474d7d.png","fP1ey":"shoppingList--appleBook--x3.561659b0.png","jYlIr":"shoppingList--bookShop--x1.91914384.png","aFXrP":"shoppingList--bookShop--x2.fbbde057.png","96ecP":"shoppingList--bookShop--x3.4cb7e5da.png","eTFW8":"remove-book-btn.38fa3b97.svg","5UbS1":"index.88eb1a11.css","4l2W5":"index.afb7a836.js"}')),i("ioBS9"),i("75VGX");var r,l=i("bqQ6g");r=new URL(i("kyEFX").resolve("05bC2"),import.meta.url).toString();const a=new URL(r);var p;p=new URL(i("kyEFX").resolve("lCTHN"),import.meta.url).toString();const c=new URL(p);var g;g=new URL(i("kyEFX").resolve("lsblX"),import.meta.url).toString();const _=new URL(g);var d;d=new URL(i("kyEFX").resolve("7vqc4"),import.meta.url).toString();const h=new URL(d);var u;u=new URL(i("kyEFX").resolve("5HsEb"),import.meta.url).toString();const f=new URL(u);var m;m=new URL(i("kyEFX").resolve("fSxxN"),import.meta.url).toString();const b=new URL(m);var v;v=new URL(i("kyEFX").resolve("Ydit4"),import.meta.url).toString();const S=new URL(v);var k;k=new URL(i("kyEFX").resolve("1d1ud"),import.meta.url).toString();const L=new URL(k);var w;w=new URL(i("kyEFX").resolve("fP1ey"),import.meta.url).toString();const R=new URL(w);var y;y=new URL(i("kyEFX").resolve("jYlIr"),import.meta.url).toString();const H=new URL(y);var E;E=new URL(i("kyEFX").resolve("aFXrP"),import.meta.url).toString();const x=new URL(E);var F;F=new URL(i("kyEFX").resolve("96ecP"),import.meta.url).toString();const U=new URL(F);var $;$=new URL(i("kyEFX").resolve("eTFW8"),import.meta.url).toString();const A=new URL($);function X(){return`<div class="shopping-list__clear">\n                <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>\n                <img class="shopping-list__clear-bg"  srcset="${c} 2x, ${_} 3x" src="${a}" alt="books">\n            </div>`}var B=i("4QRki");function N(e){if(e.target.closest(".shopping-list__icon-deleteBtn")===e.target){const o=e.target.attributes.id.nodeValue,n=JSON.parse(localStorage.getItem("idBooks"));n.splice(n.indexOf(o),1),localStorage.setItem("idBooks",JSON.stringify(n)),(0,B.updateShoppingList)(),C()}}var P=i("ioBS9"),O=i("7Y9D8"),T=i("eyjy7"),j=i("8mXNj");B=i("4QRki");const q=new(0,l.BooksAPI),I=document.querySelector(".shopping-list__gallery-boocks");async function C(){let e=localStorage.getItem("idBooks");if("undefined"===e||!e||""===e||0===JSON.parse(e).length)return I.innerHTML=X();try{e=JSON.parse(e);const o=(await async function(e){try{return await Promise.all(e.map((async e=>await q.getBookByID(e))))}catch(e){console.log(e)}}(e)).map((e=>e.data));I.innerHTML=o.map((({_id:e,book_image:o,author:n,list_name:t,title:s,description:i,buy_links:r})=>`<li id="${e}" class="shopping-list__card-boock">\n                <div class="shopping-list__general-information">\n                    <div>\n                        <img class="shopping-list__img" src="${o}" alt="book image">\n                        <p class="shopping-list__author">${n}</p>\n                    </div>\n                        <div">\n                            <h2 class="shopping-list__title-book">${s}</h2>\n                            <h3 class="shopping-list__list-name">${t}</h3>\n                            <p class="shopping-list__description--near">${i}</p>\n                            <p class="shopping-list__author--near">${n}</p>\n                            <ul class="shopping-list__shop-list">\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${r[0].url}" target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoAmazon" srcset="${f} 2x, ${b} 3x" src="${h}" alt="logoAmazon">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${r[1].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoBook" srcset="${L} 2x, ${R} 3x" src="${S}" alt="logoBook">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${r[4].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img bookShop" srcset="${x} 2x, ${U} 3x" src="${H}" alt="bookShop">\n                                    </a>\n                                </li>\n                            </ul>\n                            <img id="${e}" width="38" height="38" class="shopping-list__icon-deleteBtn" src="${A}" alt="icon-deleteBtn">\n                        </div>\n                        <p class="shopping-list__description">${i}</p>\n                    </div>\n                    </li>`)).join("");document.querySelector(".shopping-list__gallery-boocks").addEventListener("click",N)}catch(e){console.log(e)}}window.addEventListener("load",(()=>{(0,T.onAuthStateChanged)(j.auth,(e=>{if(e)return(0,P.stopPreloader)(),(0,B.readShoppingList)(),void C();(0,P.stopPreloader)(),o(O).Notify.info("Sign in to view your shopping list"),I.innerHTML=X(),(0,P.stopPreloader)()}))}));const J=document.querySelector(".nav__link_home"),z=document.querySelector(".nav__link_shopping"),M=window.location.pathname;"src/index.html"===M||"/"===M?(J.classList.add("current__page"),z.classList.remove("current__page")):"/shopping-list.html"===M&&(z.classList.add("current__page__shop"),J.classList.remove("current__page")),i("i0beZ"),i("4dIBK"),i("krGWQ"),i("dV7Gh"),i("5hJ2g");
//# sourceMappingURL=shopping-list.6fe72821.js.map
