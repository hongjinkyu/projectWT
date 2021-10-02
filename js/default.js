// ---------- Global jQuery  ----------

$(document).ready(function() { // jQuery Load

    $(window).scroll(function() {
        let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        let sticky_height = $('footer#footBase').height() + 50;

        if (scrollBottom < sticky_height) {
            $('aside#popFollow').css('bottom', sticky_height + 10);
        } else {
            $('aside#popFollow').css('bottom', 10);
        }
    }); // Window Scrolling Actions

    $(window).resize(function() {

    }); // Window Resizing Actions

// ---------- Actual Codes ----------



}) // jQuery Closed