// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $('#summernote').summernote({
        placeholder: '댓글은 마음을 비추는 창문이고 어쩌고 저쩌고',
        lang: 'ko-KR',
        tabsize: 2,
        minHeight: 600,
        maxHeight: 1000,
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

}) // jQuery Closed