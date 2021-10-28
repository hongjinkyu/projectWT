// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

    $(window).trigger('resize');
    $(window).trigger('scroll');

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('header#headBase').addClass('scrolled')
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('header#headBase').removeClass('scrolled')
            $('nav#navBase').addClass('nav_index');
        }
    }); // Window Scrolling Actions

    // Actual Codes

    $('#mainSlider').slick({
        slide: '.main-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        infinite: true,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('#mainSlider'),
        dotsClass: 'main-dots'
    });

    $('.card_slide_container').slick({
        slide: '.card_guard',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            },
        ],
    });

}); // jQuery Closed