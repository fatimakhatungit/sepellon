(function ($) {
    "use strict";
    
    
    
    // data-background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") +")")
    })
    
    
    // meanmenu
    
    $('#mobile-menu').meanmenu({
    
        meanMenuContainer: '.mobile-menu',
    
        meanScreenWidth: "767",
    
        onePage: true
    
    });
    
    // Stikey Js  
    (function () {
        var nav = $('.menu-nav-sec');
        var scrolled = false;
        $(window).on('scroll', function () {
          if (120 < $(window).scrollTop() && !scrolled) {
            nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
            scrolled = true;
          }
          if (90 > $(window).scrollTop() && scrolled) {
            nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
            scrolled = false
          }
        });
      }());
    
      // Menu Nav
    
    function smoothSctollTop() {
    
        $('.main-menu ul li > a,.mean-nav ul li > a').on('click', function (event) {
    
            var target = $(this.getAttribute('href'));
    
            if (target.length) {
    
                event.preventDefault();
    
                $('html, body').stop().animate({
    
                    scrollTop: target.offset().top - 100
    
                }, 1000);
    
            }
    
        });
    
    }
    
    smoothSctollTop();



    // brand-active
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    
    
    
    
    })(jQuery);	