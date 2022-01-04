// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    $('#txtFinalPrice').val($('#txtBasicPrice').val());

    $('#txtPoint, #txtCash, #slctCoupon').on("change keyup", function () {
        let final_price = $('#txtBasicPrice').val() - $('#txtPoint').val() - $('#txtCash').val() - $('#slctCoupon').val();

        $('#txtFinalPrice').val(final_price);
    });

}) // jQuery Closed