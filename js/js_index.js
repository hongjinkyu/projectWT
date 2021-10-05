// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('header#headBase').addClass('scrolled')
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('header#headBase').removeClass('scrolled')
            $('nav#navBase').addClass('nav_index');
        }
    }); // Window Scrolling Actions

    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        dots: false,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        zIndex: 1
    });

}) // jQuery Closed