// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    // ---------- Actual Codes ----------

    $('.add_reply_double').each(function() {
        $(this).click(function() {
            $('.reply_input_double').appendTo($(this).parents('.reply_control')).show();
        });
    });

}) // jQuery Closed