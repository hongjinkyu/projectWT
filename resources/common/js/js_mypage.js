// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $(window).scroll(function() {

    }); // Window Scrolling Actions

// ---------- Actual Codes ----------

    $('.side_mnu_left > li > a').each(function() {
        $(this).click(function() {
            $(this).parents('li').addClass('checked');
            $(this).parents('li').siblings().removeClass('checked');
        });
    });

}) // jQuery Closed