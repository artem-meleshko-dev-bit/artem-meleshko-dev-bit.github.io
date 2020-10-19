// Add burger




// Changes background-color of header__body on scroll



let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerBody = document.querySelector('.header__body');
let body = document.querySelector('body');

// window.onscroll = function () {
//    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//    document.querySelector('.header__body').style.backgroundColor = scrolled == 0 ? "rgba(0,0,0, 0.3)" : "#283645";
// }

burger.addEventListener('click', function (event) {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   headerBody.classList.add('header__body_active');
   body.classList.toggle('lock');

   if (!burger.classList.contains('active') && window.pageYOffset == 0) {
      headerBody.classList.remove('header__body_active');
   }
});

window.onscroll = function showHeader() {
   if (window.pageYOffset > 1) {
      headerBody.classList.add('header__body_active');
   } else {
      headerBody.classList.remove('header__body_active');
   }
}

// S L I C K S L I D E R

$(document).ready(function () {
   $('.slider').slick({
      fade: true,
      responsive: [
         {
            breakpoint: 776,
            settings: {
               arrows: false,
               dots: true,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });
});

$(document).ready(function () {
   $('.price-mobile__body').slick({
      responsive: [
         {
            breakpoint: 550,
            settings: {
               arrows: false,
               dots: true,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });
});
