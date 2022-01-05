// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $('#summernote').summernote({
        placeholder: '즐거운 모임을 가지셨나요? 좋은 추억을 다른 분들과 공유해 보세요.',
        lang: 'ko-KR',
        tabsize: 2,
        minHeight: 600,
        maxHeight: 1000,
        toolbar: [
            ['style', ['style']],
            ['fontsize'],
            ['height'],
            ['color', ['color']],
            ['font', ['bold', 'underline', 'strikethrough', 'clear']],
            ['para', ['ul', 'ol']],
            ['paragraph'],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['codeview', 'help']]
        ],
    });

    // ---------- Actual Codes ----------

    $('.starpoint_container').each(function() {
        $(this).find('.star_single').each(function() {
            $(this).hover(function() {
                $(this).toggleClass('glow');
                $(this).prevAll().toggleClass('glow');
            });

            $(this).click(function() {
                $(this).prevAll().removeClass('decided');
                $(this).prevAll().removeClass('star_blank');
                $(this).nextAll().removeClass('decided');
                $(this).nextAll().removeClass('star_blank');

                $(this).prevAll().addClass('decided');
                $(this).nextAll().addClass('star_blank');

                $(this).removeClass('star_blank');
                $(this).addClass('decided');

                let sp_count = $(this).parents('.starpoint_selector').find('.star_single.decided').length;

                $(this).parents().siblings('input').val(sp_count);
            });
        });
    });

}) // jQuery Closed