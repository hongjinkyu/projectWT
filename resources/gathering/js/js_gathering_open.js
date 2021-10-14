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

}) // jQuery Closed