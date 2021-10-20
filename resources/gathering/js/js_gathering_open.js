// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $(window).scroll(function() {

    }); // Window Scrolling Actions

    $('#summernote').summernote({
        placeholder: '어쩌고 저쩌고 에디터',
        lang: 'ko-KR',
        tabsize: 2,
        minHeight: 300,
        maxHeight: 800,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ]
    });

// ---------- Actual Codes ----------

    $('.side_mnu_left > li > a').each(function() {
        $(this).click(function() {
            let group_category = $('#group' + $(this).attr('data-tab-target') + '');
            let hiding_category = $('#group' + $('.side_mnu_left > li > a').not($(this)).attr('data-tab-target'));

            $(this).parents('li').addClass('checked');
            $(this).parents('li').siblings().removeClass('checked');
            group_category.show();
            hiding_category.hide();

            $('.group_type').html($(this).attr('data-tab-target'));
        });
    });

    $('.pop_open').click(function() {
        $('body').addClass('prevent_scroll');
        $('#popGroupEncore').addClass('open');
    });

    $('.pop_close').click(function() {
        $('body').removeClass('prevent_scroll');
        $('#popGroupEncore').removeClass('open');
    });

}) // jQuery Closed