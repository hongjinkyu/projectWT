// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function() { // jQuery Load

    if ($(window).scrollTop() >= 60) {
        $('nav#navBase').removeClass('nav_index');
    } else {
        $('nav#navBase').addClass('nav_index');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('nav#navBase').addClass('nav_index');
        }
    }); // Window Scrolling Actions

}) // jQuery Closed