!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(n){if(n in o)return o[n].exports;if(n in r){var e=r[n];delete r[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){r[n]=e},t.parcelRequired7c6=i),i.register("iE7OH",(function(e,t){var o,r;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return r}),(function(n){return r=n}));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},r=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var r={};function i(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=r[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return i(n[2])}return"/"}(),r[n]=e),e}})),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.a3c42d4a.js","4SLRF":"shoppingList-clear--bg-x3.9bc44f3d.png","1hKdM":"dump.38fa3b97.svg","6Yrj7":"shoppingList--bookShop.8363c1d3.png","fRZUL":"shoppingList--logoBook.5f2db3a0.png","jyzAQ":"shoppingList--logoAmazon.9aa609d6.png","5UbS1":"index.8a577a34.css","cfiU8":"index.1ceec634.js"}')),i("4smAb"),i("18VO4");var s,a=i("bpxeT"),l=i("2TvXO"),c=i("gN0YP");s=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("4SLRF");var p,u=new URL(s);p=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("1hKdM");var g,d=new URL(p);g=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("6Yrj7");var f,h=new URL(g);f=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("fRZUL");var _,v=new URL(f);_=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("jyzAQ");var b=new URL(_);function m(n){return n.map((function(n){var e=n._id,t=n.book_image,o=n.author,r=n.list_name,i=n.title,s=n.description,a=n.buy_links;return'<li id="'.concat(e,'" class="shopping-list__card-boock">\n                <div class="shopping-list__general-information">\n                    <div>\n                        <img class="shopping-list__img" src="').concat(t,'" alt="book image">\n                        <p class="shopping-list__author">').concat(o,'</p>\n                    </div>\n                        <div">\n                            <h2 class="shopping-list__title-book">').concat(i,'</h2>\n                            <h3 class="shopping-list__list-name">').concat(r,'</h3>\n                            <p class="shopping-list__description--near">').concat(s,'</p>\n                            <p class="shopping-list__author--near">').concat(o,'</p>\n                            <ul class="shopping-list__shop-list">\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="').concat(a[0].url,'" target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoAmazon" src="').concat(b,'" alt="logoAmazon">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="').concat(a[1].url,' " target="_blank">\n                                        <img class="shopping-list__shop-lis--img logoBook" src="').concat(v,'" alt="logoBook">\n                                    </a>\n                                </li>\n                                <li class="shopping-list__shop-list-item">\n                                    <a rel="noreferrer noopener nofollow" class="shopping-list__shop-list-link" href="').concat(a[4].url,' " target="_blank">\n                                        <img class="shopping-list__shop-lis--img bookShop" src="').concat(h,'" alt="bookShop">\n                                    </a>\n                                </li>\n                            </ul>\n                            <img id="').concat(e,'" width="38" height="38" class="shopping-list__icon-deleteBtn" src="').concat(d,'" alt="icon-deleteBtn">\n                        </div>\n                        <p class="shopping-list__description">').concat(s,"</p>\n                    </div>\n                    </li>")})).join("")}function k(){return'<div class="shopping-list__clear">\n                <p class="shopping-list__clear--description" >This page is empty, add some books and proceed to order.</p>\n                <img class="shopping-list__clear-bg" src="'.concat(u,'" alt="books">\n            </div>')}var w=i("bkYRy");function S(n){if(n.target.closest(".shopping-list__icon-deleteBtn")===n.target){var e=n.target.attributes.id.nodeValue,t=JSON.parse(localStorage.getItem("idBooks")).filter((function(n){return n._id!==e}));localStorage.setItem("idBooks",JSON.stringify(t)),(0,w.updateShoppingList)(),A()}}var R=i("4smAb"),L=i("6JpON"),y=i("gQOBw"),H=i("fOprm"),x=(w=i("bkYRy"),new(0,c.BooksAPI)),E=document.querySelector(".shopping-list__gallery-boocks");function O(n){return B.apply(this,arguments)}function B(){return B=e(a)(e(l).mark((function n(t){var o;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=3;break}throw new Error;case 3:return n.next=5,Promise.all(t.map(function(){var n=e(a)(e(l).mark((function n(t){return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.getBookByID(t._id);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 5:return o=n.sent,n.abrupt("return",o);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),B.apply(this,arguments)}function A(){return N.apply(this,arguments)}function N(){return(N=e(a)(e(l).mark((function n(){var t,o,r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(localStorage.getItem("idBooks")),n.next=4,O(t);case 4:if(o=n.sent,r=o.map((function(n){return n.data})),0!==t.length){n.next=8;break}return n.abrupt("return",E.innerHTML=k());case 8:E.innerHTML=m(r),document.querySelector(".shopping-list__gallery-boocks").addEventListener("click",S),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}window.addEventListener("load",(function(){(0,y.onAuthStateChanged)(H.auth,(function(n){if(n)return(0,R.stopPreloader)(),(0,w.readShoppingList)(),void A();(0,R.stopPreloader)(),e(L).Notify.info("Sign in to view your shopping list"),E.innerHTML=k()}))})),i("68BsN"),i("bNmPK"),i("4Nugj"),i("4purq"),i("kRAXI")}();
//# sourceMappingURL=shopping-list.a3c42d4a.js.map
