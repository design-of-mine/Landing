$( document ).ready(function() {

    $(window).on('load', function(){
        $('.preloader').addClass('hide-up')
        $('body').removeClass('o-hidden')
        setTimeout( function() {
            $('.preloader').remove()
            }, 3000);
    })

function nextSlide() { 
    let $this = $(this);
    let $current = $this.siblings('.s-c-h.s-c');
    if($current.is(".s-c-h:last-of-type")){
        $current.addClass('s-c-sd');
        setTimeout( function() {
            $current.removeClass('s-c-sd');
            $current.removeClass('s-c');
            $this.siblings(".s-c-h:first-of-type").addClass('s-c');
        }, 200);
    } else {
    $current.addClass('s-c-sd');
        setTimeout( function() {
            $current.removeClass('s-c-sd');
            $current.removeClass('s-c');
            $current.next('.s-c-h').addClass('s-c');
            }, 200);
    };
}

function prevSlide() {
    let $this = $(this);
    let $current = $this.siblings('.s-c-h.s-c');
    if($current.is(".s-c-h:first-of-type")){
        $current.addClass('s-c-sd');
        setTimeout( function() {
            $current.removeClass('s-c-sd');
            $current.removeClass('s-c');
            $this.siblings(".s-c-h:last-of-type").addClass('s-c');
        }, 200);
    } else {
    $current.addClass('s-c-sd');
        setTimeout( function() {
            $current.removeClass('s-c-sd');
            $current.removeClass('s-c');
            $current.prev('.s-c-h').addClass('s-c');
            }, 200);
    };
}

$('.js-next').click(nextSlide);
$('.js-prev').click(prevSlide);



    //swiper
    var mySwiper = new Swiper ('.swiper-container', {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })

    //about show/hide
    $('.more').on('click', function(){
        $(this).siblings('.about').addClass('tr-none')
    })
    $('.closer').on('click', function(){
        $(this).parent('div').removeClass('tr-none blur')
        $('body').removeClass('o-hidden')
    })
    //contact form show/hide
    $('.cta').on('click', function(){
        $('.popup-001').addClass('blur')
        $('body').toggleClass('o-hidden')
    })
    //dropdown toggle
    $('.question').on('click', function(){
        let $pHeight = $(this).siblings('.answer').find('p').outerHeight();
        $(this).siblings('.answer').toggleClass('height')
        $(this).siblings('.answer').css({'height' : ''+$pHeight+'px'});
    })

    $('.prc-001 .p-holder').addClass('hidden')
    $('.prc-001 .unwrap').on('click', function(){
        $('.prc-001 .p-holder').toggleClass('hidden')
        $('.prc-001 .unwrap').toggleClass('d-none')
    })



    //if element on screen
    $(window).on('scroll', function(){
        $('.js-if').each(function(){
            let offset = $(this).offset(),
                scroll = $(window).scrollTop(),
                vis = $(window).height() - $(window).height() / $(this).data('vis');
            if(scroll > offset.top - vis){
                $(this).addClass('on-screen')
            } else {
                $(this).removeClass('on-screen');
            }
        })
        // //pricing on screen
        // $('.on-screen').find('.js-form').each(function(i, el){
        //     setTimeout(function(){ $(el).addClass('t-form'); }, 100 * i);
        // });
    })

    //Background parallax
    window.addEventListener('scroll', function(){
        const move = document.querySelectorAll('.js-move')
            for (let i = 0; i < move.length; i++){
                let pos = window.pageYOffset * move[i].dataset.rate,
                    stop = move[i].dataset.stop
                move[i].style.transform = 'translateY('+pos+'px)'
                if(pos > stop){
                    move[i].style.transform = 'translateY('+stop+'px)'
                }
            }
        })
});




