// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $(window).scroll(function() {
        var scroll_distance = $(window).scrollTop();

        if (scroll_distance < $('#cardInfo').offset().top) {
            $('.side_mnu_item1').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#cardInfo').offset().top && scroll_distance < $('#subscriptInfo').offset().top) {
            $('.side_mnu_item2').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#subscriptInfo').offset().top && scroll_distance < $('#gatherInfo').offset().top) {
            $('.side_mnu_item3').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#gatherInfo').offset().top && scroll_distance < $('#profileInfo').offset().top) {
            $('.side_mnu_item4').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#profileInfo').offset().top) {
            $('.side_mnu_item5').addClass('checked').siblings('li').removeClass('checked');
        }
    }); // Window Scrolling Actions

// ---------- Actual Codes ----------

}) // jQuery Closed