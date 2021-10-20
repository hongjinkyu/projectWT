// ---------- Page-Specific jQuery (Index) ----------

$(document).ready(function () { // jQuery Load
    if ($(window).scrollTop() >= 200) {
        $('header#headBase').addClass('scrolled')
        $('nav#navBase').removeClass('nav_index');
    } else {
        $('header#headBase').removeClass('scrolled')
        $('nav#navBase').addClass('');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header#headBase').addClass('scrolled')
            $('nav#navBase').removeClass('nav_index');
        } else {
            $('header#headBase').removeClass('scrolled')
            $('nav#navBase').addClass('');
        }
    }); // Window Scrolling Actions

    //포토후기 두번째 줄 이상부터만 상단 보더라인 추가
    $('.photoUl > li').not(":first-child").css("border-top", "1px solid #d4cec6");

    //제공되는와인 두번째 줄 이상부터만 상단 보더라인 추가
    //$('.prvWineCollage > li').not(":nth-child(1), :nth-child(2)").css("border-top", "1px solid #d4cec6");




    //후기 중 탭 선택시 배경바뀌기
    $('.reviewTap > span').click(function () {
        if ($(this).children('label').hasClass('bottomLine')) {
            $(this).children('label').removeClass('bottomLine');
            $(this).addClass('tapOn');
        }
    });

    //후기 중 탭 선택시 다른 탭 배경 바뀌기
    $('.reviewTap > span').click(function () {
        if ($(this).siblings('span').hasClass('tapOn')) {
            $(this).siblings('span').removeClass('tapOn');
            $(this).siblings('span').children('label').addClass('bottomLine');

        }
    });

    //탭 선택시 해당 후기영역 표기 
    $('.photoReview').click(function () {
        $('.oneLineArticle').hide();
        $('.photoArticle').show();
    });

    $('.onelineReview').click(function () {
        $('.photoArticle').hide();
        $('.oneLineArticle').show();
    })




}) // jQuery Closed