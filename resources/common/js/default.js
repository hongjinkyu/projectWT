// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    $(window).trigger('resize');
    $(window).trigger('scroll');

    $(window).scroll(function() {
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
        } else {
            return;
        };
    }); // Window Resizing Actions

    $('.side_mnu_left > li').each(function() {
        $(this).click(function() {
            let sidemnu_target = $('#' + $(this).attr('data-mnu-target') + '').offset().top;

            // $(this).siblings('li').removeClass('checked');
            // $(this).addClass('checked');
            $(window).scrollTop(sidemnu_target);
        });
    }); // 사이드 메뉴 타겟 스크롤

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

        $(this).find('.star_point_blacker').css('width', 'calc(100% - ' + starPointLength * 20 + '%)');
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

    // 22. 01. 07 수정된 라인

    $('.custom_selector_list > li').each(function() {
        $(this).click(function() {
            let this_id = $(this).children('.item_id').val(); // 숨겨진 텍스트 박스 value 값

            $('.item_id.selected').val(this_id); // 선택된 아이템의 숨겨진 텍스트 박스 value 값으로 복사
            $(this).parents('.custom_selector_form').hide();

            var data_target = $(this).parents('.custom_selector_form').siblings('.custom_selector_selected');

            // 선택한 아이테의 내용을 맨 위로 복사

            var data_origin_img = $(this).find('.location_pict').attr('src');
            var data_origin_name = $(this).find('.location_name').text();
            var data_origin_info = $(this).find('.location_info').text();
            var data_origin_course = $(this).find('.location_course').text();

            console.log(data_origin_name);

            data_target.children('.location_pict').attr('src', data_origin_img);
            data_target.find('.location_name').text(data_origin_name);
            data_target.find('.location_info').text(data_origin_info);
            data_target.children('.location_course').text(data_origin_course);
        });
    }); // Custom Selector - Item Send (Gathering - Open)

    $('.custom_selector_selected').each(function() {
        $(this).click(function() {
            $('.custom_selector_form').not($(this).siblings()).hide();
            $(this).siblings('.custom_selector_form').slideToggle(200);
        });
    }); // Custom Selector (Gathering - Open)

    // 22. 01. 07 수정된 라인

    $('.tab_container > button').each(function() {
        $(this).click(function() {
            let targetTab = $(this).attr('data-tab-target');

            $(this).addClass('on');
            $(this).siblings('button').removeClass('on');
            $('#' + targetTab + '').show();
            $('#' + targetTab + '').siblings('div[id]').hide();
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
    }); // Mobile Navigation - Click On Empty Space

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