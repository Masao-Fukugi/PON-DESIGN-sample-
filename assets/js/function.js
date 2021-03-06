jQuery(function ($) {
    var fadeIn = $('.header__back');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var scroll = $(window).scrollTop(); 
        var windowHeight = $('.fv').height();
        if (scroll > windowHeight) {
          $(this).addClass("scroll-in");
          $('.scroll').addClass("scroll-in");
        }
        else {
            $(this).removeClass("scroll-in");
            $('.scroll').removeClass("scroll-in");
        }
      });
    });
    $('.header__hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.header__nav').toggleClass('active');
    })
    $('a[href^="#top"]').click(function(){
        let speed = 500;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
$('.slider').slick({
  prevArrow:'<img src="/assets/img/arrow-prev.png" alt="" class="prev_icon">',
  nextArrow:'<img src="/assets/img/arrow-next.png" alt="" class="next_icon">',
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});
