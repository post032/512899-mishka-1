// var button = document.querySelector(".goods-week__link");
// var modal = document.querySelector(".modal");
//
// button.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modal.classList.toggle("modal-close");
//   arrival.focus();
// });

// var link = document.querySelector(".goods-week__link");
//
// var popup = document.querySelector(".modal");
//  var form = popup.querySelector("form");
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
// });
// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
// });



var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
