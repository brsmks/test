$(function(){
    $('#toggle-btn').on('click',function(){
        $('#toggle-btn').toggleClass('active');
        $('#header-nav').toggleClass('active');
    });
});

$(function(){
    $(window).scroll(function(){
        const windowHeight = $(window).height();
    let scroll = $(window).scrollTop();
    $('.scrollAnime').each(function(){
        let targetPos = $(this).offset().top;
        if(scroll > targetPos - windowHeight + 60 ){
            $(this).addClass('fadeUp');
        }
    });
    });
});

//メインビジュアルのスライドショー
$(function(){
    var page = 0;
    var lastPage = parseInt($('#main-img div').length-1);
    $('#main-img div').css('display','none');
    $('#main-img div').eq(page).css('display','block');
    
    function changePage(){
        $('#main-img div').fadeOut(2000);
        $('#main-img div').eq(page).fadeIn(500);
    }
    
    var timer;
    function startTimer(){
        timer = setInterval(function(){
            if(page === lastPage){
                page = 0;
                changePage();
            }else{
                page++;
                changePage();
            }
        },5000);
    }
    
    function stopTimer(){
        clearInterval(timer);
    }
    
    startTimer();
});

//カルーセルスライダー
$(function(){
    $('.top-slide').slick({
        speed: 200,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        slidesPerRow: 3,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesPerRow: 2,
                    slidesToShow: 2,
                },
            },
        ],
    });
});

//
$(function(){
    $(window).scroll(function(){
        if(window.pageYOffset > 500){
            $('.top-btn').addClass('active');
        }else if(window.pageYOffset < 500){
            $('.top-btn').removeClass('active');
        }
    });
});