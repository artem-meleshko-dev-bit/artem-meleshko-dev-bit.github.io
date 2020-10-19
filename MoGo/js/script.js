// A C C O R D I O N


var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion__item_active");
   });
}

$('[data-collapse]').on('click', function (event) {
   event.preventDefault();

   let $this = $(this),
      blockId = $this.data('collapse');

   $(blockId).slideToggle();
})


// S L I D E R

$(document).ready(function () {
   $('.slider').slick({
      responsive: [
         {
            breakpoint: 570,
            settings: {
               arrows: false,
               dots: true,
            }
         }
      ]
   });
});

let header = document.querySelector('.header');
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__navigation');
let headerBody = document.querySelector('.header__body');
let body = document.querySelector('body');

burger.addEventListener('click', function (event) {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   header.classList.add('active');
   body.classList.toggle('lock');

   if (!burger.classList.contains('active') && window.pageYOffset == 0) {
      header.classList.remove('active');
   }
});


window.onscroll = function showHeader() {
   if (window.pageYOffset > 1) {
      header.classList.add('active');
      headerBody.classList.add('active');
   } else {
      header.classList.remove('active');
      headerBody.classList.remove('active')
   }
}




