function o(o,n,e,i){Object.defineProperty(o,n,{get:e,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=n.parcelRequired7c6;null==s&&((s=function(o){if(o in e)return e[o].exports;if(o in i){var n=i[o];delete i[o];var s={id:o,exports:{}};return e[o]=s,n.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(o,n){i[o]=n},n.parcelRequired7c6=s),s.register("kyEFX",(function(n,e){var i,s;o(n.exports,"register",(function(){return i}),(function(o){return i=o})),o(n.exports,"resolve",(function(){return s}),(function(o){return s=o}));var t={};i=function(o){for(var n=Object.keys(o),e=0;e<n.length;e++)t[n[e]]=o[n[e]]},s=function(o){var n=t[o];if(null==n)throw new Error("Could not resolve bundle with id "+o);return n}})),s("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.e75817e8.js","lsblX":"shoppingList-clear--bg-x3.9bc44f3d.png","6WtvC":"dump.38fa3b97.svg","6bwFv":"shoppingList--bookShop.8363c1d3.png","lmhI2":"shoppingList--logoBook.5f2db3a0.png","bpnPT":"shoppingList--logoAmazon.9aa609d6.png","5UbS1":"index.01c0e4d1.css","4l2W5":"index.4f0dc9e0.js"}')),s("ioBS9"),s("75VGX");var t=s("bqQ6g");var l;l=new URL(s("kyEFX").resolve("lsblX"),import.meta.url).toString();const r=new URL(l);var a;a=new URL(s("kyEFX").resolve("6WtvC"),import.meta.url).toString();const p=new URL(a);var c;c=new URL(s("kyEFX").resolve("6bwFv"),import.meta.url).toString();const g=new URL(c);var d;d=new URL(s("kyEFX").resolve("lmhI2"),import.meta.url).toString();const _=new URL(d);var h;h=new URL(s("kyEFX").resolve("bpnPT"),import.meta.url).toString();const u=new URL(h);function f(o){const n=o.currentTarget.attributes.id.nodeValue;if(document.querySelector(".shopping-list__icon-deleteBtn")===o.target){const o=JSON.parse(localStorage.getItem("idBooks")).filter((o=>o._id!==n));localStorage.setItem("idBooks",JSON.stringify(o)),k()}}const b=new(0,t.BooksAPI);const m=document.querySelector(".shopping-list__gallery-boocks"),v=[{_id:"643282b1e85766588626a07d"},{_id:"643282b1e85766588626a0be"},{_id:"643282b2e85766588626a108"},{_id:"643282b2e85766588626a128"},{_id:"643282b2e85766588626a14a"}];async function k(){const o=JSON.parse(localStorage.getItem("idBooks"));try{const n=(await async function(o){try{return await Promise.all(o.map((async o=>await b.getBookByID(o._id))))}catch(o){console.log(o)}}(o)).map((o=>o.data));if(0===o.length)return m.innerHTML=`<div class="shopping-list__clear">\n                <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>\n                <img class="shopping-list__clear-bg" src="${r}" alt="books">\n            </div>`;m.innerHTML=n.map((({_id:o,book_image:n,author:e,list_name:i,title:s,description:t,buy_links:l})=>`<div id="${o}" class="shopping-list__card-boock">\n                <div class="shopping-list__general-information">\n                    <div >\n                        <img class="shopping-list__img" src="${n}" alt="book image">\n                        <p class="shopping-list__author">${e}</p>\n                    </div>\n                        <div">\n                            <h2 class="shopping-list__title-book">${s}</h2>\n                            <h3 class="shopping-list__list-name">${i}</h3>\n                            <p class="shopping-list__description--near">${t}</p>\n                            <p class="shopping-list__author--near">${e}</p>\n                            <ul class="shopping-list__shop-list">\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[0].url}" target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoAmazon" src="${u}" alt="logoAmazon">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[1].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img" src="${_}" alt="logoBook">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="${l[4].url} " target="_blank">\n                                        <img class="shopping-list__shop-lis--img bookShop" src="${g}" alt="bookShop">\n                                    </a>\n                                </li>\n                            </ul>\n                            <img width="38" height="38" class="shopping-list__icon-deleteBtn" src="${p}" alt="bookShop">\n                        </div>\n                        <p class="shopping-list__description">${t}</p>\n                    </div>\n                    </div>`)).join("");document.querySelectorAll(".shopping-list__card-boock").forEach((o=>o.addEventListener("click",f)))}catch(o){console.log(o)}}localStorage.setItem("idBooks",JSON.stringify(v)),window.addEventListener("load",(()=>{k()})),s("i0beZ"),s("4dIBK"),s("i0beZ"),s("krGWQ");
//# sourceMappingURL=shopping-list.e75817e8.js.map
