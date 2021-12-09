// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    $(window).trigger('resize');
    $(window).trigger('scroll');

    $(window).scroll(function() {
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        let sticky_height = $('footer#footBase').height() + 10;

        if (scrollBottom < sticky_height) {
            $('aside#popFollow').css('bottom', sticky_height);
        } else {
            $('aside#popFollow').css('bottom', 10);
        };

        if ($(window).scrollTop() >= 60) {
            $('header#headBase.head_index').addClass('scrolled')
        } else {
            $('header#headBase.head_index').removeClass('scrolled')
        };

        if ($(window).scrollTop() > 500) {
            $('aside#modalInfo').slideDown();
        } else {
            $('aside#modalInfo').slideUp();
        };
    }); // Window Scrolling Actions

    $(window).resize(function() {
        if ($(this).width() >= 1200) {
            $('.btn_burger').removeClass('on');
            $('body').removeClass('prevent_scroll');
            $('.mnav_background').fadeOut();
            $('#mobileNav').slideUp();
        } else {};
    }); // Window Resizing Actions

// ---------- Actual Codes ----------

    $('#layerAccount').click(function() {
        $('#accountPop').toggleClass('on');
    }); // Account Menu

    $('.chk_like').each(function() {
        $(this).click(function() {
            $(this).toggleClass('checked');
        });
    }); // Checkbox

    $('.star_point').each(function() {
        let starPointLength = $(this).attr('data-point-total');

        $(this).find('.star_point_blacker').css('width', 'calc(100% - ' + starPointLength * 10 + '%)');
    }); // Star Point

    $('.wine_selector').each(function() {
        $(this).children('.wine_selector_btn').click(function() {
            $(this).siblings('.wine_selector_list').toggleClass('open');
        });

        $(this).children('.wine_selector_list').find('.wine_icon').each(function() {
            $(this).click(function() {
                $(this).parents('.wine_selector_list').siblings('.wine_selector_btn').find('.wine_icon').appendTo($(this).parents('.wine_selector_list'));
                $(this).siblings('.choose_item').remove();
                $(this).appendTo($(this).parents('.wine_selector_list').siblings('.wine_selector_btn'));
                $(this).parents('.wine_selector_btn').siblings('.wine_selector_list').removeClass('open');
            });
        });
    }); // Wine Selector

    $('.custom_selector_selected').each(function() {
        $(this).click(function() {
            $('.custom_selector_form').not($(this).siblings()).hide();
            $(this).siblings('.custom_selector_form').slideToggle(200);
        });
    }); // Custom Selector (Gathering - Open)

    $('.tab_container > a').each(function() {
        $(this).click(function() {
            let targetTab = $(this).attr('href');

            $(this).addClass('on');
            $(this).siblings('a').removeClass('on');
            $(targetTab).show();
            $($(this).siblings('a').attr('href')).hide();
        });
    }); // Tab Operation (Gathering - Detail)

    $('.btn_burger').click(function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('body').removeClass('prevent_scroll');
            $('.mnav_background').fadeOut();
            $('#mobileNav').slideUp();
        } else {
            $(this).addClass('on');
            $('body').addClass('prevent_scroll');
            $('.mnav_background').fadeIn();
            $('#mobileNav').slideDown();
        };
    }); // Mobile Navigation

    $('.disappearing_area').click(function () {
        $('.btn_burger').removeClass('on');
        $('body').removeClass('prevent_scroll');
        $('.mnav_background').fadeOut();
        $('#mobileNav').slideUp();
    }); // Mobile Navbigation - Click On Empty Space

    // 여기부터 테스트용 임시 코드

    $('.card_item:is(.gt) .card_img').click(function() {
        location.href = './gathering_detail.html';
    });

    $('.card_item:is(.rv) .card_img').click(function() {
        location.href = './review_detail.html';
    });

    $('.card_item:is(.pt) .card_img').click(function() {
        location.href = './partners_detail.html';
    });

    // 테스트용 임시 코드 끝

}) // jQuery Closed