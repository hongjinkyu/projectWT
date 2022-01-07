// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $(window).scroll(function() {

    }); // Window Scrolling Actions

// ---------- Actual Codes ----------

    $('.tab_buttons > button').each(function() {
        $(this).click(function() {            
            $(this).siblings().removeClass('tab_selected');
            $(this).addClass('tab_selected');

            let tab_href = $(this).attr('data-tab-target');

            $('.myact_tab').removeClass('show');
            $('#' + tab_href + '').addClass('show');
        });
    });

}) // jQuery Closed