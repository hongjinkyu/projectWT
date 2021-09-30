// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        dots: true,
        appendArrows: $('#mainSlider'),
        appendDots: $('#mainSlider'),
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        zIndex: 1
    });

}) // jQuery Closed