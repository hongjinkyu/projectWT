// ---------- Page-Specific jQuery (Patners - Detail) ----------

$(document).ready(function() { // jQuery Load

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.detail_hiddentitle').slideDown(150);
            // $('.detail_hiddenbutton').fadeIn(150);
        } else {
            $('.detail_hiddentitle').slideUp(150);
            // $('.detail_hiddenbutton').fadeOut(150);
        }
    });

    // ---------- Actual Codes ----------

    $('.starpoint_selector').hover(function() {
        $('.count_review').fadeToggle(150);
    });

    $('.star_single').each(function() {
        $(this).hover(function() {
            $(this).toggleClass('glow');
            $(this).prevAll().toggleClass('glow');
        });

        $(this).click(function() {
            $(this).addClass('decided');
            $(this).prevAll().addClass('decided');
            $(this).nextAll().addClass('star_blank');

            let sp_count = $('.star_single.decided').length;

            $('#hiddenSPCounter').val(sp_count);
            $('.starpoint_mine > span').text(sp_count);

            $('.starpoint_total').fadeOut(150);
            $('.starpoint_mine').fadeIn(150);
        });
    });

    $('.button_container > button').each(function() {
        $(this).click(function() {            
            $(this).siblings().removeClass('tab_selected');
            $(this).addClass('tab_selected');

            let tab_href = $(this).attr('data-tab-target');

            $('.course_single_tab').removeClass('show');
            $('.' + tab_href + '').addClass('show');
        });
    });

    $('.mobile_tab_buttons > button').each(function() {
        $(this).click(function() {            
            $(this).siblings().removeClass('tab_selected');
            $(this).addClass('tab_selected');

            let tab_href = $(this).attr('data-tab-target');

            $('.mobile_single_tab').removeClass('show');
            $('.' + tab_href + '').addClass('show');
        });
    });

    setInterval(function() {
        $('.grid_item').last().hide().prependTo($('#mobileMainIMG')).fadeIn(300);
    }, 3000);

    $('.detail_slider').slick({
        slide: '.slider_item',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        fade: true,
        dots: false,
        arrows: false,
    });

}) // jQuery Closed