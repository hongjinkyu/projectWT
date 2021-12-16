// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $('#summernote').summernote({
        placeholder: '모임에 대한 자세한 정보를 적어주세요.',
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

    $('.pop_open').click(function() {
        $('body').addClass('prevent_scroll');
        $('#popGroupEncore').addClass('open');
    }); // 기존 모임 이어가기 창 열기

    $('.pop_close').click(function() {
        $('body').removeClass('prevent_scroll');
        $('#popGroupEncore').removeClass('open');
    }); // 기존 모임 이어가기 창 닫기

}) // jQuery Closed