// ---------- Global jQuery  ----------

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

    $('#txtFinalPrice').val($('#txtBasicPrice').val());
    $('#txtBasicPrice_side').val($('#txtBasicPrice').val());
    $('#txtFinalPrice_side').val($('#txtBasicPrice').val());

    $('#txtPoint, #txtCash, #slctCoupon').on("change keyup", function () {
        let final_price = $('#txtBasicPrice').val() - $('#txtPoint').val() - $('#txtCash').val() - $('#slctCoupon').val();

        $('#txtPoint_side').val('-' + $('#txtPoint').val());
        $('#txtCash_side').val('-' + $('#txtCash').val());
        $('#txtCoupon_side').val('-' + $('#slctCoupon').val());

        $('#txtFinalPrice').val(final_price);
        $('#txtFinalPrice_side').val(final_price);
    });

    $('.course_detail').click(function() {
        $('.course_popup').fadeToggle(150);
    });

}) // jQuery Closed