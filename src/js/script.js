// $(document).ready(function(){
//    $('.carousel__inner').slick({
//       speed: 1300,
//       adaptiveHeight: false,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//       responsive: [
//          { breakpoint: 900,
//             settings: {
//             arrows: false,
//             dots: true}
//    }],
//     });
// });



// let slider = tns({
//    container: '.carousel__inner',
//    items: 1, 
//    slideBy: '1',
//    autoplay: false,

// });

const swiper = new Swiper('.carousel__inner', {
   loop: true,
   navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    breakpoints: {
      850: {
      navigation: {
         nextEl: null,
         prevEl: null,
         },
      }},
});
