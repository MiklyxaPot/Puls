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
});

(function ($) {
   $(function () {

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
         $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      // function toggleSlide(item){
      //    $(item).each(function(i){
      //       $(this).on('clik', function(e){
      //          e.preventDefault();
      //          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      //          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      //       });
      //    });
      // }
      // toggleSlide('catalog-item__link');
      // toggleSlide('catalog-item__back');
      function toggleSlide(item) {
         $(item).each(function(i) {
             $(this).on('click', function(e) {
                 e.preventDefault();
                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
             })
         });
     };
 
     toggleSlide('.catalog-item__link');
     toggleSlide('.catalog-item__back');
   });
})(jQuery);

// model

$(document).ready(function(){
   $('[data-model="consultation"]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #older').fadeOut('slow');
   });

   $('.button_mini').each(function(i){
      $(this).on('click', function(){
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      });
   });

   $('#colsultation-form').validate();
   $('#consultation form').validate({
      rules:{
         name:"required",
         phone:"required",
         email:"required",
      }
   });
   $('#order form').validate();
});


