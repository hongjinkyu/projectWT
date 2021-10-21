// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

    if ($(window).scrollTop() >= 60) {
        $('header#headBase').addClass('scrolled')
        $('nav#navBase').removeClass('nav_index');
    } else {
        $('header#headBase').removeClass('scrolled')
        $('nav#navBase').addClass('nav_index');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('header#headBase').addClass('scrolled')
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('header#headBase').removeClass('scrolled')
            $('nav#navBase').addClass('nav_index');
        }
    }); // Window Scrolling Actions

    $('.slider_main').lightSlider({
        item: 1,
        slideMargin: 0,
        mode: 'fade',
        loop: true,
        auto: true,
        speed: 300,
        pause: 5000,
        pauseOnHover: true,
    });

    $('.card_slide_container').lightSlider({
        item: 3,
        slideMargin: 10,
        autoWidth: false,
        controls: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    autoWidth: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    item: 1,
                }
            },
        ],
    });

}) // jQuery Closed