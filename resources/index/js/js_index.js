// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

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
    }); // 메인 슬라이더

    $('.card_slide_container').slick({
        slide: '.card_item',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        infinite: true,
        variableWidth: true,
        arrows: false,
        dots: false,
    });

}); // jQuery Closed