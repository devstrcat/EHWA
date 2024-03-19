$(function () {
    $('.site-wrap').on('click', 'a', function () {
        $('a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    var subMenu = $(".gnb-wrap .gnb .gnb-ul li .sub-box, .gnb-wrap .gnb .gnb-ul li .gnb-bg");
    $(".gnb-wrap .gnb .gnb-ul .menu").on({
        mouseenter: function () {
            subMenu.stop();
            subMenu.css("display", "none");
            $(this).find('.sub-box, .gnb-bg').slideDown(300);
        },
        mouseleave: function () {
            subMenu.stop();
            subMenu.slideUp(300);
        },
    });

    var bottomMenu = $(".path-wrap .path-box .path .path-down-wrap ul li .path-select .path-down");
    $(".path-down-wrap ul li").on({
        mouseenter: function () {
            bottomMenu.stop();
            bottomMenu.css("display", "none");
            $(this).find('.path-down').slideDown(200);
        },
        mouseleave: function () {
            bottomMenu.stop();
            $(this).find('.path-down').slideUp(200);
        }
    });
    $(".owl-stage").change(function(){
        var month = $(".owl-stage-outer").children().find(".active").children().find(".mini-date-box").find("input[name=thismonth]").val();
        $("#eventMonth").text(month);
    });

    $(document).on('mouseenter', '.content-wrap3 .inner .content-box .board-content > div.type02 .owl-stage .item > div', function() {
        if($(this).hasClass('today')) return false;
        $(this).addClass('active');
        $('.content-wrap3 .today').removeClass('active');
    }).on('mouseleave', '.content-wrap3 .inner .content-box .board-content > div.type02 .owl-stage .item > div', function() {
        $(this).removeClass('active');
        $('.content-wrap3 .today').addClass('active');
    });

    $('.mini-board').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });
});

$(document).ready(function () {
    $('.top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    })
});


