!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.8feedd36.js","jyzAQ":"shoppingList--logoAmazon.9aa609d6.png","fRZUL":"shoppingList--logoBook.5f2db3a0.png","6Yrj7":"shoppingList--bookShop.8363c1d3.png","5UbS1":"index.0b786930.css","cfiU8":"index.4ffa47c6.js"}')),o("4smAb"),o("18VO4");var s=o("bpxeT"),c=o("2TvXO"),i=o("gN0YP");s=o("bpxeT"),c=o("2TvXO");function u(){var e=document.documentElement.clientWidth;return e<767?"mobile":e<1439?"tablet":e>=1440?"desctop":void 0}function l(e){return p.apply(this,arguments)}function p(){return(p=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.data.map((function(e){var t=e.list_name;return'<li class="category__home-itm">'.concat(t,"</li>")})).join("");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("mobile"!==u()){e.next=4;break}return e.abrupt("return",v(n.slice(0,1)));case 4:if("tablet"!==u()){e.next=12;break}return e.t0=v,e.next=8,n.slice(0,3);case 8:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 12:return e.abrupt("return",v(n));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return k.apply(this,arguments)}function k(){return k=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.map(function(){var e=t(s)(t(c).mark((function e(n){var r,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.list_name,a=n.books,e.t0=' \n    <div class="item-books__home"> \n    <h3 class="js-book-categoty">'.concat(r,"</h3> \n    <ul class='list-books__home'>"),e.next=4,d(a);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul> \n    <button class="button see-more" data-js="').concat(r,'">See more</button> \n    </div> \n    '));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function g(e,t){return h.apply(this,arguments)}function h(){return(h=t(s)(t(c).mark((function e(n,r){var a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.split(" "),e.t0=' \n  <h2 class="block__books-title">'.concat(a.splice(0,a.length/2).join(" "),' <span class="block__books-colortitle">').concat(a.splice(a.length/2,a.length).join(" "),'</span></h2> \n        <ul class="block__books-list">'),e.next=4,v(r);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.concat.call(e.t0,e.t1,'</ul>\n        <button class="button all-categories__btn" data-js="All Categories">All Categories</button>'));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map((function(e){var t=e.author,n=e.book_image,r=e.title,a=e.description,o=e._id;return'<li class="books__itm">  \n    <div class="books__wrapper" id='.concat(o,' > \n    <img class="books__image" src="').concat(n,'"  alt="').concat(a,'" loading="lazy"  /> \n    <div class="books__overlay"> \n    <p class="books__overlay-text">QUICK VIEW</p> \n    </div> \n    </div> \n    <div class="books__info">  \n    <p class="books__info-title">').concat(r,'</p>  \n    <p class="books__info-author">').concat(t,"</p>  \n    </div>  \n    </li>")})).join(""));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=o("4smAb"),x=o("6JpON"),y=document.querySelector(".block__books"),w=document.querySelector(".category__home"),L=(document.querySelector(".block__category"),document.querySelector(".book-card__home"),new(0,i.BooksAPI));function j(){return(j=t(s)(t(c).mark((function e(){var n,r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getCategoryList();case 3:return n=e.sent,e.t0=w,e.next=7,l(n);case 7:e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),t(x).Notify.failure("Categories was not found : ".concat(e.t2.message));case 14:return e.prev=14,e.next=17,L.getTopBooks();case 17:return r=e.sent,y.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),e.t3=y,e.next=22,b(r.data);case 22:return e.t4=e.sent.join(""),e.t3.insertAdjacentHTML.call(e.t3,"beforeend",e.t4),e.abrupt("return",r.data);case 27:e.prev=27,e.t5=e.catch(14),t(x).Notify.failure("Books was not found : ".concat(e.t5.message));case 30:case"end":return e.stop()}}),e,null,[[0,11],[14,27]])})))).apply(this,arguments)}function A(){return(A=t(s)(t(c).mark((function e(n){var r,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!n.target.classList.contains("category__home-itm")){e.next=42;break}if(y.innerHTML="",y.insertAdjacentHTML("afterbegin",(0,m.addMarkupOfPreloader)()),(0,m.startPreloader)(),"All categories"!==n.target.innerText){e.next=25;break}return e.prev=6,e.next=9,L.getTopBooks();case 9:return r=e.sent,y.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),e.t0=y,e.next=14,b(r.data);case 14:e.t1=e.sent.join(""),e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),(0,m.stopPreloader)(),e.next=22;break;case 19:e.prev=19,e.t2=e.catch(6),t(x).Notify.failure("Books was not found : ".concat(e.t2.message));case 22:return e.abrupt("return");case 25:return e.prev=25,e.next=28,L.getOneCategory("".concat(n.target.innerText));case 28:return e.next=30,e.sent.data;case 30:return a=e.sent,e.t3=y,e.next=34,g("".concat(n.target.innerText),a);case 34:e.t4=e.sent,e.t3.insertAdjacentHTML.call(e.t3,"beforeend",e.t4),(0,m.stopPreloader)(),e.next=42;break;case 39:e.prev=39,e.t5=e.catch(25),t(x).Notify.failure("Books was not found : ".concat(e.t5.message));case 42:case"end":return e.stop()}}),e,null,[[6,19],[25,39]])})))).apply(this,arguments)}function H(){return(H=t(s)(t(c).mark((function e(n){var r,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!n.target.classList.contains("see-more")){e.next=25;break}return r=n.target.dataset.js,y.innerHTML="",y.insertAdjacentHTML("afterbegin",(0,m.addMarkupOfPreloader)()),(0,m.startPreloader)(),e.prev=6,e.next=9,L.getOneCategory("".concat(r));case 9:return e.next=11,e.sent.data;case 11:return a=e.sent,e.t0=y,e.next=15,g("".concat(r),a);case 15:e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1),(0,m.stopPreloader)(),e.next=23;break;case 20:e.prev=20,e.t2=e.catch(6),t(x).Notify.failure("Books was not found : ".concat(e.t2.message));case 23:e.next=45;break;case 25:if(!n.target.classList.contains("all-categories__btn")){e.next=45;break}return y.innerHTML="",y.insertAdjacentHTML("afterbegin",(0,m.addMarkupOfPreloader)()),(0,m.startPreloader)(),e.prev=29,e.next=32,L.getTopBooks();case 32:return o=e.sent,y.insertAdjacentHTML("afterbegin",'<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>'),e.t3=y,e.next=37,b(o.data);case 37:e.t4=e.sent.join(""),e.t3.insertAdjacentHTML.call(e.t3,"beforeend",e.t4),(0,m.stopPreloader)(),e.next=45;break;case 42:e.prev=42,e.t5=e.catch(29),t(x).Notify.failure("Books was not found : ".concat(e.t5.message));case 45:case"end":return e.stop()}}),e,null,[[6,20],[29,42]])})))).apply(this,arguments)}!function(){j.apply(this,arguments)}(),w.addEventListener("click",(function(e){return A.apply(this,arguments)})),y.addEventListener("click",(function(e){return H.apply(this,arguments)})),o("68BsN");var T=document.querySelector("[data-modal-open]"),S=document.querySelector("[data-modal-close]"),E=document.querySelector("[data-modal]"),B=(document.querySelector(".book"),document.querySelector("#add"),document.querySelector(".under-btn-text"));function M(){E.classList.toggle("is-hidden")}B.hidden=!0,T.addEventListener("click",M),S.addEventListener("click",M);o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("jyzAQ");o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("fRZUL");o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("6Yrj7"),o("4Nugj"),o("4purq"),o("kRAXI"),o("bNmPK");var O=o("fkNhc"),q=o("cokon"),N=o("gQOBw"),P=o("byw7u"),R=(0,O.initializeApp)({apiKey:"AIzaSyAmjMPhgeiPnKuRTAY8vypkpT4j7HmPfug",authDomain:"fu11stack-book-project.firebaseapp.com",databaseURL:"https://fu11stack-book-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fu11stack-book-project",storageBucket:"fu11stack-book-project.appspot.com",messagingSenderId:"110270361117",appId:"1:110270361117:web:304c337163371a2e8920f4"}),U=(0,q.getDatabase)(R),C=(0,N.getAuth)();C.currentUser;document.querySelector(".btn_read").addEventListener("click",(function(){var e=C.currentUser.uid,t=(0,q.ref)(U,"/users"+e);(0,q.onValue)(t,(function(e){var t=e.val();alert(t.shoppingList),console.log(t.shoppingList)}))}));var z=document.querySelector(".test-button");console.log(z),document.querySelector(".btn_update").addEventListener("click",(function(){var e=C.currentUser.uid,t=(0,q.ref)(U,"/users"+e);(0,q.update)(t,{shoppingList:P.books}).then((function(){alert("data updated")})).catch((function(e){alert(e)}))}))}();
//# sourceMappingURL=index.8feedd36.js.map
