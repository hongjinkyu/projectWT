// ---------- Page-Specific jQuery (Patners - Detail) ----------

$(document).ready(function() { // jQuery Load

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

}) // jQuery Closed