// ---------- Page-Specific jQuery (Service) ----------

$(document).ready(function() { // jQuery Loads
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('nav#navBase').addClass('nav_index');
        }

        if ($(window).scrollTop() >= 180) {
            $('.intro_wheel').removeClass('until_enough');
        } else {
            $('.intro_wheel').addClass('until_enough');
        }

        let half_of_it = $(window).scrollTop() / 2;

        $('.intro_text').css({'top': 'calc(50vh - 6rem - ' + half_of_it + 'px)'});
    }); // Window Scrolling Actions

}) // jQuery Closed