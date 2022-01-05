// ---------- Page-Specific jQuery (Gathering - Open) ----------

$(document).ready(function() {

    $('#summernote').summernote({
        placeholder: '내용을 작성해 주세요.',
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

}) // jQuery Closed