$(function(){
    $('#hamburger-icon').on('click',function(){
        $('#hamburger-icon').toggleClass('active');
        $('.sp-main-nav').toggleClass('active');
    });
});

$(function(){
    $(window).scroll(function(){
        const windowHeight = $(window).height();
    let scroll = $(window).scrollTop();
    $('.scrollFadeUp').each(function(){
        let targetPos = $(this).offset().top;
        if(scroll > targetPos - windowHeight + 60 ){
            $(this).addClass('fadeUp');
        }
    });
    $('.scrollFadeIn').each(function(){
        let targetPos = $(this).offset().top;
        if(scroll > targetPos - windowHeight + 60 ){
            $(this).addClass('fadeIn');
        }
    });
    });
});

$(function(){
    $(window).scroll(function(){
        if(window.pageYOffset > 500){
            $('.top-btn').addClass('active');
        }else if(window.pageYOffset < 500){
            $('.top-btn').removeClass('active');
        }
    });

    const btn = document.querySelectorAll('a[href^="#"]');
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',function(){
            let href = btn[i].getAttribute('href');
            let element = document.getElementById(href.replace('#',''));

            const rect = element.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const gap = 60;
            const target = rect + offset - gap;
    
            window.scrollTo(
                {
                    top:target,
                    behavior:'smooth',
                }
            );
        });
    }
});