!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("4smAb"),o("18VO4");var a=o("bpxeT"),s=o("2TvXO"),c=o("gN0YP");a=o("bpxeT"),s=o("2TvXO");function i(){var e=document.documentElement.clientWidth;return e<767?"mobile":e<1439?"tablet":e>=1440?"desctop":void 0}function u(e){return l.apply(this,arguments)}function l(){return(l=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.data.map((function(e){var t=e.list_name;return'<li class="category__home-itm" data-category="'.concat(t,'">').concat(t,"</li>")})).join("");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("mobile"!==i()){e.next=4;break}return e.abrupt("return",v(n.slice(0,1)));case 4:if("tablet"!==i()){e.next=12;break}return e.t0=v,e.next=8,n.slice(0,3);case 8:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 12:return e.abrupt("return",v(n));case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return b=e(a)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(n.map(function(){var t=e(a)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.list_name,o=n.books,e.t0=' \n    <div class="item-books__home"> \n    <h3 class="js-book-categoty">'.concat(r,"</h3> \n    <ul class='list-books__home'>"),e.next=4,d(o);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul> \n    <button class="button see-more" data-js="').concat(r,'">See more</button> \n    </div> \n    '));case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function k(e,t){return m.apply(this,arguments)}function m(){return(m=e(a)(e(s).mark((function t(n,r){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.split(" "),e.t0=' \n  <h2 class="block__books-title">'.concat(o.splice(0,o.length/2).join(" "),' <span class="block__books-colortitle">').concat(o.splice(o.length/2,o.length).join(" "),'</span></h2> \n        <ul class="block__books-list">'),e.next=4,v(r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul>\n        <button class="button see-more all-categories__btn" data-js="All Categories">All Categories</button>'));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map((function(e){var t=e.author,n=e.book_image,r=e.title,o=e.description,a=e._id;return'<li class="books__itm" id='.concat(a,' >  \n    <div class="books__wrapper"> \n    <img class="books__image" src="').concat(n,'"  alt="').concat(o,'" loading="lazy"  /> \n    <div class="books__overlay"> \n    <p class="books__overlay-text">QUICK VIEW</p> \n    </div> \n    </div> \n    <div class="books__info">  \n    <p class="books__info-title">').concat(r,'</p>  \n    <p class="books__info-author">').concat(t,"</p>  \n    </div>  \n    </li>")})).join(""));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector('li[data-category="'.concat(n,'"]')).classList.add("js-current-category");case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var y=o("4smAb"),x=o("6JpON");a=o("bpxeT"),s=o("2TvXO");function w(){var e=document.querySelector("[data-modal]");e.classList.add("is-active"),document.body.classList.add("no-scroll"),e.addEventListener("click",L),document.body.addEventListener("keyup",S)}function L(e){var t=document.querySelector("[data-modal]"),n=document.querySelector("[modal-window]"),r=document.querySelector("[data-modal-close]");withinBoundaries=e.composedPath().includes(n),withinBoundaries&&e.target.closest("[data-modal-close]")!==r||(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",L),document.body.removeEventListener("keyup",S))}function S(e){var t=document.querySelector("[data-modal]");27==e.keyCode&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",L),document.body.removeEventListener("keyup",S))}x=o("6JpON"),c=o("gN0YP");var B=o("bkYRy"),T=o("fOprm");console.log("auth:",T.auth);var j=new(0,c.BooksAPI),q=document.querySelector(".popup__book-image"),A=document.querySelector(".popup__book_title"),O=document.querySelector(".popup__book_author"),M=document.querySelector(".popup__book_review"),N=document.querySelector(".popup__shopping-links-icon.amazon"),P=document.querySelector(".popup__shopping-links-icon.book"),C=document.querySelector(".popup__shopping-links-icon.bookShop"),H=document.querySelector("#add"),E=document.querySelector(".under-btn-text");function I(e){return R.apply(this,arguments)}function R(){return(R=e(a)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.getBookByID("".concat(n));case 3:r=t.sent,o=r.data,console.log("modalAboutBook  book:",o),J(o),q.attributes.src.value=o.book_image,A.textContent=o.title,O.textContent=o.author,M.textContent=o.description,N.attributes.href.value=o.buy_links[0].url,P.attributes.href.value=o.buy_links[1].url,C.attributes.href.value=o.buy_links[4].url,w(),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),e(x).Notify.failure("Books was not found : ".concat(t.t0.message));case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function J(e){var t=localStorage.getItem("idBooks");t&&""!==t&&t.includes(e._id)?(H.textContent="Remove from the shopping list",E.hidden=!1):H.textContent="Add to shopping list",H.attributes.id.value=e._id}E.hidden=!0,H.addEventListener("click",(function(e){console.log("addOrRemoveBook  e:",e.target);var t=e.target.attributes.id.value;"Add to shopping list"===H.textContent?function(e){var t=JSON.parse(localStorage.getItem("idBooks"));console.log("addBook  idBooks:",t),t||(t=[]);t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),H.textContent="Remove from the shopping list",E.hidden=!1,T.auth.currentUser&&(0,B.updateShoppingList)()}(t):function(e){var t=JSON.parse(localStorage.getItem("idBooks"));console.log("addBook  idBooks:",t),t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),H.textContent="Add to shopping list",E.hidden=!0,T.auth.currentUser&&(0,B.updateShoppingList)()}(t)}));var D=document.querySelector(".block__books"),U=document.querySelector(".category__home"),X=(document.querySelector(".block__category"),document.querySelector(".book-card__home"),new(0,c.BooksAPI));function Y(){return(Y=e(a)(e(s).mark((function t(){var n,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.getCategoryList();case 3:return n=t.sent,t.t0=U,t.next=7,u(n);case 7:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),document.querySelector("#preloader").style.zIndex="-1",t.next=16;break;case 13:t.prev=13,t.t2=t.catch(0),e(x).Notify.failure("Categories was not found : ".concat(t.t2.message));case 16:return t.prev=16,t.next=19,X.getTopBooks();case 19:return r=t.sent,D.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t3=D,t.next=24,f(r.data);case 24:return t.t4=t.sent.join(""),t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),(0,y.stopPreloader)(),t.abrupt("return",r.data);case 30:t.prev=30,t.t5=t.catch(16),e(x).Notify.failure("Books was not found : ".concat(t.t5.message)),(0,y.stopPreloader)();case 34:case"end":return t.stop()}}),t,null,[[0,13],[16,30]])})))).apply(this,arguments)}function z(){return(z=e(a)(e(s).mark((function t(n){var r,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!n.target.classList.contains("category__home-itm")){t.next=44;break}if(D.innerHTML="",D.insertAdjacentHTML("afterbegin",(0,y.addMarkupOfPreloader)()),(0,y.startPreloader)(),"All categories"!==n.target.innerText){t.next=26;break}return t.prev=6,t.next=9,X.getTopBooks();case 9:return r=t.sent,D.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t0=D,t.next=14,f(r.data);case 14:t.t1=t.sent.join(""),t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),g(n.target.innerText),(0,y.stopPreloader)(),t.next=23;break;case 20:t.prev=20,t.t2=t.catch(6),e(x).Notify.failure("Books was not found : ".concat(t.t2.message));case 23:return t.abrupt("return");case 26:return t.prev=26,t.next=29,X.getOneCategory("".concat(n.target.innerText));case 29:return t.next=31,t.sent.data;case 31:return o=t.sent,t.t3=D,t.next=35,k("".concat(n.target.innerText),o);case 35:t.t4=t.sent,t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),g(n.target.innerText),(0,y.stopPreloader)(),t.next=44;break;case 41:t.prev=41,t.t5=t.catch(26),e(x).Notify.failure("Books was not found : ".concat(t.t5.message));case 44:case"end":return t.stop()}}),t,null,[[6,20],[26,41]])})))).apply(this,arguments)}function K(){return(K=e(a)(e(s).mark((function t(n){var r,o,a,c;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(r=n.target.closest(".books__itm"))&&I(r.attributes.id.value),!n.target.classList.contains("see-more")){t.next=28;break}return o=n.target.dataset.js,D.innerHTML="",D.insertAdjacentHTML("afterbegin",(0,y.addMarkupOfPreloader)()),(0,y.startPreloader)(),t.prev=8,t.next=11,X.getOneCategory("".concat(o));case 11:return t.next=13,t.sent.data;case 13:return a=t.sent,t.t0=D,t.next=17,k("".concat(o),a);case 17:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),g("".concat(o)),(0,y.stopPreloader)(),t.next=26;break;case 23:t.prev=23,t.t2=t.catch(8),e(x).Notify.failure("Books was not found : ".concat(t.t2.message));case 26:t.next=49;break;case 28:if(!n.target.classList.contains("all-categories__btn")){t.next=49;break}return D.innerHTML="",D.insertAdjacentHTML("afterbegin",(0,y.addMarkupOfPreloader)()),(0,y.startPreloader)(),t.prev=32,t.next=35,X.getTopBooks();case 35:return c=t.sent,D.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t3=D,t.next=40,f(c.data);case 40:t.t4=t.sent.join(""),t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),(0,y.stopPreloader)(),g("All categories"),t.next=49;break;case 46:t.prev=46,t.t5=t.catch(32),e(x).Notify.failure("Books was not found : ".concat(t.t5.message));case 49:case"end":return t.stop()}}),t,null,[[8,23],[32,46]])})))).apply(this,arguments)}!function(){Y.apply(this,arguments)}(),U.addEventListener("click",(function(e){return z.apply(this,arguments)})),D.addEventListener("click",(function(e){return K.apply(this,arguments)})),o("68BsN");var V=document.querySelector(".nav__link_home"),W=document.querySelector(".nav__link_shopping"),F=window.location.pathname;"/index.html"===F||"/"===F?V.classList.add("current__page"):"/shopping-list.html"===F&&W.classList.add("current__page"),o("4Nugj"),o("4purq"),o("kRAXI"),o("bNmPK"),o("bkYRy")}();
//# sourceMappingURL=index.930a53c9.js.map
