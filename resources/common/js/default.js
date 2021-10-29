// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    $(window).trigger('resize');
    $(window).trigger('scroll');

    if ($(window).scrollTop() >= 60) {
        $('header#headBase.head_index').addClass('scrolled')
    } else {
        $('header#headBase.head_index').removeClass('scrolled')
    }

    $(window).scroll(function() {
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        let sticky_height = $('footer#footBase').height() + 10;

        if (scrollBottom < sticky_height) {
            $('aside#popFollow').css('bottom', sticky_height);
        } else {
            $('aside#popFollow').css('bottom', 10);
        }

        if ($(window).scrollTop() >= 60) {
            $('header#headBase.head_index').addClass('scrolled')
        } else {
            $('header#headBase.head_index').removeClass('scrolled')
        }
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

}) // jQuery Closed