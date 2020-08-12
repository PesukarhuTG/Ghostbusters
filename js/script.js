$(document).ready(function () {
    
    /* HAMBURGER MENU */

    const mMenuBtn = $('.m-menu-button');
    const mMenu = $('.m-menu');

    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    /* TABS FOR ACTORS/CREATORS */

    const tab = $('.tab');

    tab.on('click', function () {

        tab.removeClass('active');
        $(this).toggleClass('active');

        let activeTabContent = $(this).attr('data-target'); //изымаем дата-атрибут
        $('.tabs-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });



    /* INITIALIZE SLIDER SWIPER */

    var mySwiper = new Swiper('.swiper-container', {
        
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        
        breakpoints: {
            992: {
              slidesPerView: 4
            },
            768: {
              slidesPerView: 2
            },
            320: {
              slidesPerView: 1
            }
          },
        
          navigation: {
          nextEl: '.button-next'
        },
      })

});