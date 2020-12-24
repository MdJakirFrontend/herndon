jQuery(function ($) {
    "use strict";
    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/

    $(window).on('scroll', function () {
        /**Fixed header**/
        if ($(window).width() > 768) {
            if ($(window).scrollTop() >= 1) {
                $('.header-wrapper').addClass('sticky fade_down_effect');
            } else {
                $('.header-wrapper').removeClass('sticky fade_down_effect');
            }
        }
    });

    if ($('.gameslider ').length) {
        $('.gameslider ').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            stagePadding: 30,
            navText: ["<img src='./assets/img/sliderarrow.svg'>", "<img src='./assets/img/sliderarrow.svg'>"],
            // navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }

});