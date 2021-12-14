// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $(window).scroll(function() {

    }); // Window Scrolling Actions

// ---------- Actual Codes ----------

    $('.tab_buttons > p').each(function() {
        $(this).click(function() {
            let tab_target = $('.' + $(this).attr('data-target'));

            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
            tab_target.addClass('show');
            tab_target.siblings().removeClass('show');
        });
    });

}) // jQuery Closed