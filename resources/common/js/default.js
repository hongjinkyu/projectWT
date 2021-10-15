// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    if ($(window).scrollTop() >= 60) {
        $('header#headBase').addClass('scrolled')
    } else {
        $('header#headBase').removeClass('scrolled')
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
            $('header#headBase').addClass('scrolled')
        } else {
            $('header#headBase').removeClass('scrolled')
        }
    }); // Window Scrolling Actions

    $(window).resize(function() {

    }); // Window Resizing Actions

// ---------- Actual Codes ----------

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

}) // jQuery Closed