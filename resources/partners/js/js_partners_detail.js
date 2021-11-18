// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function () { // jQuery Load

    $(window).scroll(function () {
        var scroll_distance = $(window).scrollTop();

        if (scroll_distance < $('#partnerMenu').offset().top) {
            $('.side_mnu_item1').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#partnerMenu').offset().top && scroll_distance < $('#partnerReply').offset().top) {
            $('.side_mnu_item2').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#partnerReply').offset().top && scroll_distance < $('#partnerReview').offset().top) {
            $('.side_mnu_item3').addClass('checked').siblings('li').removeClass('checked');
        }

        else if (scroll_distance >= $('#partnerReview').offset().top) {
            $('.side_mnu_item4').addClass('checked').siblings('li').removeClass('checked');
        }
    }); // Window Scrolling Actions

    $(window).resize(function() {
        if ($(window).width() <= 400) {
            $('#btnOpen').addClass('mobile');
        } else {
            $('#btnOpen').removeClass('mobile');
        }
    });

    // ---------- Actual Codes ----------

    $('.slide_body').slick({
        slide: 'img',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: false,
        asNavFor: '.slide_thumbs',
    });

    $('.slide_thumbs').slick({
        slide: '.btn_thumb',
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        focusOnSelect: true,
        asNavFor: '.slide_body',
    });

}) // jQuery Closed