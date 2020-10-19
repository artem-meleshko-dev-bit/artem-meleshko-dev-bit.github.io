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

// $(document).ready(function () {
//    $('.slide__body').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       fade: true,
//       arrows: false,
//       adapriveHeight: true,
//    });
// });