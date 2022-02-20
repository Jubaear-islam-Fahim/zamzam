(function ($) {
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
    ========================================
    Smooth scrolling using jQuery easing
    ========================================
    */ 
    $('#menuNav li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 50)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    }); 

    /*
    ========================================
    Closes responsive menu when a scroll trigger link is clicked
    ========================================
    */  
    $('#menuNav li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    /*
    ========================================
    Activate scrollspy to add active class to navbar items on scroll
    ========================================
    */  
    // 
    $('body').scrollspy({
        target: '#menuNav',
        offset: 56
    });

    /*
    ========================================
    scroll nav bar class add
    ========================================
    */  

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("menuNav");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
        if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        } else {
        navbar.classList.remove("sticky");
        }
    }

    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('.topNav').addClass('top-nav-fixed');
        } else {
            $('.topNav').removeClass('top-nav-fixed');
        };
    });

    // Responsive Menu
    $(document).ready(function() {
        // jQuery code
    
          $("[data-trigger]").on("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id =  $(this).attr('data-trigger');
            $(offcanvas_id).toggleClass("show");
            $('body').toggleClass("offcanvas-active");
            $(".screen-overlay").toggleClass("show");
    
        }); 
     
        $("#menuNav li a, .screen-overlay").click(function(e){
            $(".screen-overlay").removeClass("show");
            $(".offcanvas").removeClass("show");
            $("body").removeClass("offcanvas-active");
    
    
        }); 
        
    }); // jquery end
    
    /*
    ========================================
    circular progress
    ========================================
    */ 
    $('.circlechart').circlechart(); // Initialization
 
 
    /*
    ========================================
    Portfolio
    ========================================
    */
    if ($('#portfolio-area').length) {
        $('#container').imagesLoaded(function () {
            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.portfolio-grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });

            // filter items on li click
            $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            //for menu active class
            $('.portfolio-filter li').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }


    /*
    ========================================
    popup-gallery
    ========================================
    */
    if ($('.portfolio-grid')) {
        $('.portfolio-grid').lightGallery({
            thumbnail: true,
            showThumbByDefault: false,
            selector: '.popup-item'
        });
    }

    /*
    ========================================
    hoverDir
    ========================================
    */
    if ($('.hovs-item').length) { 
        $(' .hovs-item ').each( function() { $(this).hoverdir(); } );
    }

    /*
    ========================================
    Counter
    ========================================
    */
    if ($('.counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }
 
    /*
    ========================================
    Testimonials
    ========================================
    */
   
    if ($('.testimonials-slider')) {
        $(document).ready(function () {
            var testimonialsImgs = new Swiper('.testimonials-images', {
                spaceBetween: -40,
                centeredSlides: true,
                slidesPerView: 'auto', 
                slideToClickedSlide: true,
                loop: true,
                loopedSlides: 4,
                grabCursor: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate:25,
                    stretch: 0,
                    depth: 160,
                    modifier:1.5,
                    slideShadows: true,
                },   
                
            });
            var testimonialsTest = new Swiper('.testimonials-content', {
                spaceBetween: 20, 
                loop: true,
                loopedSlides: 4,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                
                
            });
            testimonialsImgs.controller.control = testimonialsTest;
            testimonialsTest.controller.control = testimonialsImgs;
            
        });
    }


    /*
    ========================================
    Hero
    ========================================
    */
     $(document).ready(function() {

        var owl = $('.owl-carousel');
        // Slider owlCarousel
        $('.fullSlider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            autoplay: true,
            dots: false,
            smartSpeed: 700,
            animateOut: 'fadeOut',

        });

        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;
            $('h3').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        $("[data-delay]").each(function () {
            var animation_delay = $(this).data('delay');
            $(this).css('animation-delay', animation_delay);
        });
        $("[data-duration]").each(function () {
            var animation_dutation = $(this).data('duration');
            $(this).css('animation-duration', animation_dutation);
        });
    });

 


     /*
    ========================================
    masonry
    ========================================
    */
    if ($('#container').length) {
        $('#container').imagesLoaded(function () {
            var $grid = $('.masonry-grid').isotope({
                itemSelector: '.masonry-grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                }
            });
 
        });
    }
  
 
    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.creative-experts-slider').length) {
        $('.creative-experts-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 7500,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }
 
    /*
    ========================================
    Testimonial
    ========================================
    */
    if ($('.corporate-business-testimonial-slider').length) {
        $('.corporate-business-testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            center: true,
            margin: 0,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }

    
 
    /*
    ========================================
    testimonialsSeven
    ========================================
    */
   
    if ($('.testimonialsSeven')) {
        $(document).ready(function () {
            var personalPortfolioImg = new Swiper('.testimonialsSeven-img', {
                spaceBetween: 30, 
                loop: true,
                loopedSlides: 4,  
                pagination: false,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });
            var personalPortfolioText = new Swiper('.testimonialsSeven-text', {
                spaceBetween: 70, 
                loop: true,
                loopedSlides: 4,   
                /* autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },   */
                 
            });
            //personalPortfolioImg.controller.control = personalPortfolioText;
           // personalPortfolioText.controller.control = personalPortfolioImg;
             
        });
    }
    
    

    
    

    /*
    ========================================
    Skill Bar
    ========================================
    */
    if ($('#skill-bar-wrapper').length) {
        $(window).scroll(function () {
            var hT = $('#skill-bar-wrapper').offset().top,
                hH = $('#skill-bar-wrapper').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT + hH - 1.4 * wH)) {
                jQuery(document).ready(function () {
                    jQuery('.skillbar-container').each(function () {
                        jQuery(this).find('.skills').animate({
                            width: jQuery(this).attr('data-percent')
                        }, 3000); // 3 seconds
                    });
                });
            }
        });
    }


    /*
    ========================================
    accordion
    ========================================
    */
    if ($('.accordion').length) {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
        
        $(".accordion > .accordion-item").on('click', function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    }

    /*
    ========================================
    Tabs
    ========================================
    */
     
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tabs-list').removeClass('current');

        $(this).addClass('current');
        $("." + tab_id).addClass('current');
    });


    /*
    ========================================
    Testimonial
    ========================================
    */
    if ($('.review-slider').length) {
        $('.review-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true, 
            margin: 0, 
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 700,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });
    }
    
    
      

    //creative agency index
    $("#rev_creative").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            bullets: {
                style: "",
                enable: true,
                rtl: false,
                hide_onmobile: false,
                hide_onleave: false,
                hide_under: 767,
                hide_over: 9999,
                tmp: '',
                direction: "horizontal",
                space: 10,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 40
            },
            arrows: {
                enable: false,
                hide_onmobile: true,
                hide_onleave: false,
                hide_under: 767,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 30
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 30
                }
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%"
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1140, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 9000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        disableProgressBar: "off",
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
        }
    });



    //Design Studio Index
    $("#rev_slider_8").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            touch: {
                touchenabled: "on",
                touchOnDesktop: "off",
                swipe_threshold: 75,
                swipe_min_touches: 50,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "uranus",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="hvr-pulse"></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                style: "hephaistos",
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: ''
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 600, 500, 400],
        lazyType: "smart",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 10, 11, 12, 13, 14, 55],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });

    

    /*
    ========================================
    Creative Experts
    ========================================
    */
    if ($('.feedback-slider').length) {
        $('.feedback-slider').owlCarousel({
            loop: true,
            dots: true,
            nav:false,
            margin: 30,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            nav: false,  
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }

    /*
    ========================================
    People Say
    ========================================
    */
    if ($('.people-say-slider').length) {
        $('.people-say-slider').owlCarousel({
            loop: true,
            dots: true,
            dotsEach: true,
            autoplay: false,
            autoplayTimeout: 9000,
            smartSpeed: 1000,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
    }

 
    /*
    ========================================
    video popup
    ========================================
    */
    $('#popup-gallery').lightGallery(); 
    

    /*
    ========================================
    Wow Animated
    ========================================
    */
     var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       1,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }

    

    /*
    ========================================
    Google Map All
    ========================================
    */
    if ($('#black-map').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
        
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#29446b"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#29446b"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#29446b"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#29446b"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#192331"},{"lightness":17}]}]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('black-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }

    
 

     


})(jQuery);

 