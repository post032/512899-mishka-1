
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


var link = document.querySelector(".goods-week__link, .catalog__icon");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__add");
var size = popup.querySelector("[name=button1]");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  size.focus();
});

close.addEventListener("click", function (evt) {
    popup.classList.remove("modal-show");
});
