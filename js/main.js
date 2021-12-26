$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplay: true
                }
            }
        ]
    });

    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('scroll-hidden');
    });
});