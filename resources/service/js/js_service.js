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

        $('.intro_text').css({'top': 'calc(45% - ' + half_of_it + 'px)'});
    }); // Window Scrolling Actions

    let counter = 0;
    let timer = setInterval(function() {
        counter++;
        $('body').removeClass('prevent_scroll');
    }, 8000);

    if (counter == 1) {
        clearInterval(timer);
    }

}) // jQuery Closed