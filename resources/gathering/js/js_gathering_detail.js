// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function () { // jQuery Load

    $(window).scroll(function () {
        var scroll_distance = $(window).scrollTop();

        if (scroll_distance < $('#detailOffer').offset().top) {
            $('.side_mnu_item1').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#detailOffer').offset().top && scroll_distance < $('#detailLocation').offset().top) {
            $('.side_mnu_item2').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#detailLocation').offset().top && scroll_distance < $('#detailReview').offset().top) {
            $('.side_mnu_item3').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#detailReview').offset().top) {
            $('.side_mnu_item4').addClass('checked').siblings('li').removeClass('checked');
        }
    }); // Window Scrolling Actions

    // ---------- Actual Codes ----------



}) // jQuery Closed