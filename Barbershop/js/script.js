var link = document.querySelector('.header__user');
var popup = document.querySelector('.modal');
var close = document.querySelector('.modal__button');
var form = popup.querySelector('.login-form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');

var isStorageSuppurt = true;
var storage = '';

try {
   storage = localStorage.getItem('login');
} catch (err) {
   isStorageSuppurt = false;
};

link.addEventListener('click', function (evt) {
   evt.preventDefault();
   popup.classList.add('modal__show');
   login.focus();

   if (storage) {
      login.value = storage;
      password.focus();
   } else {
      login.focus();
   }
});

form.addEventListener('submit', function (evt) {
   if (!login || !password) {
      evt.preventDefault();
      popup.classList.add('modal__error');
   }
});

close.addEventListener('click', function (evt) {
   evt.preventDefault();
   popup.classList.remove('modal__show');
});

window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
      if (popup.classList.contains('modal__show')) {
         evt.preventDefault();
         popup.classList.remove('modal__show');
      }
   }
});

var mapLink = document.querySelector('.contact__button');
var map = document.querySelector('.map');
var closeMap = document.querySelector('.map__button');

mapLink.addEventListener('click', function (evt) {
   evt.preventDefault();
   map.classList.add('map__show');
});

closeMap.addEventListener('click', function (evt) {
   evt.preventDefault();
   map.classList.remove('map__show');
});

