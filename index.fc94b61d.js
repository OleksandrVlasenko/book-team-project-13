!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("4smAb"),r("18VO4");var a=r("bpxeT"),s=r("2TvXO"),c=r("gN0YP");a=r("bpxeT"),s=r("2TvXO");function i(e){return l.apply(this,arguments)}function l(){return(l=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.data.map((function(e){var t=e.list_name;return'<li class="category__home-itm" data-category="'.concat(t,'">').concat(t,"</li>")})).join("");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return d=e(a)(e(s).mark((function t(n){return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(n.map(function(){var t=e(a)(e(s).mark((function t(n){var o,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.list_name,r=n.books,e.t0=' \n    <div class="item-books__home"> \n    <h3 class="js-book-categoty">'.concat(o,"</h3> \n    <ul class='list-books__home'>"),e.next=4,m(r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul>  \n    <button class="button see-more" data-js="').concat(o,'">See more</button> \n    </div> \n    '));case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return(f=e(a)(e(s).mark((function t(n,o){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.split(" "),e.t0=' \n  <h2 class="block__books-title"\n>'.concat(r.splice(0,r.length/2).join(" "),' <span class="block__books-colortitle">').concat(r.splice(r.length/2,r.length).join(" "),'</span></h2> \n        <ul class="block__books-list">'),e.next=4,m(o);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul>\n        <button class="button all-categories__btn" data-js="All Categories">All Categories</button>'));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map((function(e){var t=e.author,n=e.book_image,o=e.title,r=e.description,a=e._id;return'<li class="books__itm" id='.concat(a,' >  \n    <div class="books__wrapper"> \n    <img class="books__image" src="').concat(n,'"  alt="').concat(r,'" loading="lazy"  /> \n    <div class="books__overlay"> \n    <p class="books__overlay-text">QUICK VIEW</p> \n    </div> \n    </div> \n    <div class="books__info">  \n    <p class="books__info-title">').concat(o,'</p>  \n    <p class="books__info-author">').concat(t,"</p>  \n    </div>  \n    </li>")})).join(""));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function h(e){return k.apply(this,arguments)}function k(){return(k=e(a)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".js-current-category").classList.remove("js-current-category"),document.querySelector('li[data-category="'.concat(n,'"]')).classList.add("js-current-category");case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var g=r("4smAb"),v=r("6JpON");a=r("bpxeT"),s=r("2TvXO");function _(){var e=document.querySelector("[data-modal]");e.classList.add("is-active"),document.body.classList.add("no-scroll"),e.addEventListener("click",y),document.body.addEventListener("keyup",x)}function y(e){var t=document.querySelector("[data-modal]"),n=document.querySelector("[data-modal-window]"),o=document.querySelector("[data-modal-close]");e.composedPath().includes(n)&&e.target.closest("[data-modal-close]")!==o||(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",y),document.body.removeEventListener("keyup",x))}function x(e){var t=document.querySelector("[data-modal]");27==e.keyCode&&(t.classList.remove("is-active"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",y),document.body.removeEventListener("keyup",x))}v=r("6JpON"),c=r("gN0YP");var L=r("bkYRy"),S=r("fOprm"),w=r("gQOBw"),T=new(0,c.BooksAPI),j=document.querySelector(".popup__book-image"),B=document.querySelector(".popup__book_title"),q=document.querySelector(".popup__book_author"),A=document.querySelector(".popup__book_review"),O=document.querySelector(".popup__shopping-links-icon.amazon"),C=document.querySelector(".popup__shopping-links-icon.book"),N=document.querySelector(".popup__shopping-links-icon.bookShop"),M=document.querySelector("#add"),P=document.querySelector(".under-btn-text");function H(e){return I.apply(this,arguments)}function I(){return(I=e(a)(e(s).mark((function t(n){var o,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.getBookByID("".concat(n));case 3:o=t.sent,E(r=o.data),j.attributes.src.value=r.book_image,B.textContent=r.title,q.textContent=r.author,A.textContent=r.description,O.attributes.href.value=r.buy_links[0].url,C.attributes.href.value=r.buy_links[1].url,N.attributes.href.value=r.buy_links[4].url,_(),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),e(v).Notify.failure("Books was not found : ".concat(t.t0.message));case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function E(e){var t=localStorage.getItem("idBooks");t&&""!==t&&t.includes(e._id)?(M.textContent="Remove from the shopping list",P.hidden=!1):M.textContent="Add to shopping list",M.attributes.id.value=e._id}P.hidden=!0,M.addEventListener("click",(function(e){var t=e.target.attributes.id.value;"Add to shopping list"===M.textContent?function(e){var t=localStorage.getItem("idBooks");"undefined"!==t&&t&&""!==t||(t=[],localStorage.setItem("idBooks",JSON.stringify(t)));(t=JSON.parse(localStorage.getItem("idBooks"))).push(e),localStorage.setItem("idBooks",JSON.stringify(t)),M.textContent="Remove from the shopping list",P.hidden=!1,S.auth.currentUser&&(0,L.updateShoppingList)()}(t):function(e){var t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),M.textContent="Add to shopping list",P.hidden=!0,S.auth.currentUser&&(0,L.updateShoppingList)()}(t)})),(0,w.onAuthStateChanged)(S.auth,(function(e){e?(M.classList.remove("disabled"),P.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',P.hidden=!0):(M.classList.add("disabled"),P.textContent="Please, log in to get more options.",P.hidden=!1)}));var R=document.querySelector(".block__books"),J=document.querySelector(".category__home"),D=(document.querySelector(".block__category"),document.querySelector(".book-card__home"),new(0,c.BooksAPI));function U(){return(U=e(a)(e(s).mark((function t(){var n,o;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.getCategoryList();case 3:return n=t.sent,t.t0=J,t.next=7,i(n);case 7:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),document.querySelector("#preloader").firstElementChild.style.zIndex="1002",t.next=16;break;case 13:t.prev=13,t.t2=t.catch(0),e(v).Notify.failure("Categories was not found : ".concat(t.t2.message));case 16:return t.prev=16,t.next=19,D.getTopBooks();case 19:return o=t.sent,R.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t3=R,t.next=24,u(o.data);case 24:return t.t4=t.sent.join(""),t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),(0,g.stopPreloader)(),t.abrupt("return",o.data);case 30:t.prev=30,t.t5=t.catch(16),e(v).Notify.failure("Books was not found : ".concat(t.t5.message)),(0,g.stopPreloader)();case 34:case"end":return t.stop()}}),t,null,[[0,13],[16,30]])})))).apply(this,arguments)}function Y(){return(Y=e(a)(e(s).mark((function t(n){var o,r;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!n.target.classList.contains("category__home-itm")){t.next=44;break}if(R.innerHTML="",R.insertAdjacentHTML("afterbegin",(0,g.addMarkupOfPreloader)()),(0,g.startPreloader)(),"All categories"!==n.target.innerText){t.next=26;break}return t.prev=6,t.next=9,D.getTopBooks();case 9:return o=t.sent,R.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t0=R,t.next=14,u(o.data);case 14:t.t1=t.sent.join(""),t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),h(n.target.innerText),(0,g.stopPreloader)(),t.next=23;break;case 20:t.prev=20,t.t2=t.catch(6),e(v).Notify.failure("Books was not found : ".concat(t.t2.message));case 23:return t.abrupt("return");case 26:return t.prev=26,t.next=29,D.getOneCategory("".concat(n.target.innerText));case 29:return t.next=31,t.sent.data;case 31:return r=t.sent,t.t3=R,t.next=35,p("".concat(n.target.innerText),r);case 35:t.t4=t.sent,t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),h(n.target.innerText),(0,g.stopPreloader)(),t.next=44;break;case 41:t.prev=41,t.t5=t.catch(26),e(v).Notify.failure("Books was not found : ".concat(t.t5.message));case 44:case"end":return t.stop()}}),t,null,[[6,20],[26,41]])})))).apply(this,arguments)}function X(){return(X=e(a)(e(s).mark((function t(n){var o,r,a,c;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(o=n.target.closest(".books__itm"))&&H(o.attributes.id.value),!n.target.classList.contains("see-more")){t.next=28;break}return r=n.target.dataset.js,R.innerHTML="",R.insertAdjacentHTML("afterbegin",(0,g.addMarkupOfPreloader)()),(0,g.startPreloader)(),t.prev=8,t.next=11,D.getOneCategory("".concat(r));case 11:return t.next=13,t.sent.data;case 13:return a=t.sent,t.t0=R,t.next=17,p("".concat(r),a);case 17:t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),h("".concat(r)),(0,g.stopPreloader)(),t.next=26;break;case 23:t.prev=23,t.t2=t.catch(8),e(v).Notify.failure("Books was not found : ".concat(t.t2.message));case 26:t.next=49;break;case 28:if(!n.target.classList.contains("all-categories__btn")){t.next=49;break}return R.innerHTML="",R.insertAdjacentHTML("afterbegin",(0,g.addMarkupOfPreloader)()),(0,g.startPreloader)(),t.prev=32,t.next=35,D.getTopBooks();case 35:return c=t.sent,R.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),t.t3=R,t.next=40,u(c.data);case 40:t.t4=t.sent.join(""),t.t3.insertAdjacentHTML.call(t.t3,"beforeend",t.t4),(0,g.stopPreloader)(),h("All categories"),t.next=49;break;case 46:t.prev=46,t.t5=t.catch(32),e(v).Notify.failure("Books was not found : ".concat(t.t5.message));case 49:case"end":return t.stop()}}),t,null,[[8,23],[32,46]])})))).apply(this,arguments)}!function(){U.apply(this,arguments)}(),J.addEventListener("click",(function(e){return Y.apply(this,arguments)})),R.addEventListener("click",(function(e){return X.apply(this,arguments)})),r("68BsN"),r("fOprm");w=r("gQOBw");var z=document.querySelector(".nav__link_home"),Q=document.querySelector(".nav__link_shopping"),K=document.querySelector(".auth-btns__wrapper"),V=(document.querySelector(".nav__item"),window.top.location.pathname);console.log(V),"/book-team-project-13/index.html"===V||"/index.html"===V||"/book-team-project-13/"===V||"/"===V?z.classList.add("current__page"):"/shopping-list.html"===V&&(Q.classList.add("current__page"),z.classList.remove("current__page"));var F=(0,w.getAuth)();(0,w.onAuthStateChanged)(F,(function(e){e?(K.classList.remove("is-hidden"),Q.classList.remove("is-hidden"),z.classList.remove("is-hidden")):(K.classList.remove("is-hidden"),Q.classList.add("is-hidden"),z.classList.add("is-hidden"))})),r("4Nugj"),r("4purq"),r("kRAXI"),r("bNmPK"),r("bkYRy")}();
//# sourceMappingURL=index.fc94b61d.js.map
