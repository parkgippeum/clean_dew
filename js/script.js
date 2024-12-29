/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});


/* slide */
$(function(){
var swiper = new Swiper('.swiper-container', {
        autoplay: {
        delay: 8000,//슬라이드 넘어가는 시간
        disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {//블릿 버튼
        el: '.swiper-pagination',
        clickable: true,
        },
    });
});
