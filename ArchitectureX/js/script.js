let header = document.querySelector('.header');
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__navigation');
let headerBody = document.querySelector('.header__body');
let body = document.querySelector('body');

burger.addEventListener('click', function (event) {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   body.classList.toggle('lock');

   if (!burger.classList.contains('active') && window.pageYOffset == 0) {
      header.classList.remove('active');
   }
});


window.onscroll = function showHeader() {
   if (window.pageYOffset > 1) {
      header.classList.add('active');
   } else {
      header.classList.remove('active');
   }
}

$(document).ready(function () {
   $('.clients__slider').slick({
      adaptiveHeight: true,
      slidesToShow: 5,
      speed: 300,
      infinite: false,
      waitForAnimate: false,
      responsive: [
         {
            breakpoint: 1010,
            settings: {
               slidesToShow: 4,
            }
         },

         {
            breakpoint: 730,
            settings: {
               slidesToShow: 3,
            }
         },

         {
            breakpoint: 570,
            settings: {
               arrows: false,
               dots: true,
               slidesToShow: 2,
            }
         },
      ]
   });
});

$(document).ready(function () {
   $('.comments__slider').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 300,
      infinite: false,
      waitForAnimate: false,
      responsive: [
         {
            breakpoint: 670,
            settings: {
               arrows: false,
               dots: true,
            }
         },
      ]
   });
});