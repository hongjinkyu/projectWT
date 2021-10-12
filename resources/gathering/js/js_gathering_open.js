// ---------- Global jQuery  ----------

$(document).ready(function() {

    if ($(window).scrollTop() >= 60) {
        $('header#headBase').addClass('scrolled')
    } else {
        $('header#headBase').removeClass('scrolled')
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('header#headBase').addClass('scrolled')
        } else {
            $('header#headBase').removeClass('scrolled')
        }
    }); // Window Scrolling Actions

});