(function($) {
    'use strict'

    /*
    ========================================
    Preloader
    ========================================
    */
    if ($('#preloader').length) {
        $(window).on('load', function () {
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        });
    }

    /* 
        =====================================================
            Start active menu
        ======================================================
    */
    // Smooth scrolling using jQuery easing
    $('.menu-area ul li a [href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    /* $('.menu-area ul li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    }); */

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });


    /* 
        =====================================================
            Mobile menu
        ======================================================
    */

    $("[data-trigger]").on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var offcanvas_id = $(this).attr('data-trigger');
        $(offcanvas_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    $(".btn-close, .screen-overlay").click(function(e) {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

    /* 
    ========================================
        portfolio Isotope Masonry
    ========================================
    */
    $('.image-loaded').imagesLoaded(function() {
        var $grid = $('.introducing-grid').isotope({
                itemSelector: '.introducing-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.introducing-item'
                }
            })
            // filter items on button click
        $('.filter-change').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        //for filter button active class
        $('.filter-change button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    /* 
       ========================================
           Testimonial Owl Carousel
       ========================================
    */
    $('.testimonial-slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i><i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    /* 
        ========================================
            Wow Animation
        ========================================
    */
    new WOW().init();

})(jQuery);