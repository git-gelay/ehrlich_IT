$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',

        responsive: [
            {
              breakpoint: 426,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1,
              }
            },
          
          ]
      });
    $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    $('.feedback-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
                arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


    lottie.loadAnimation({
    container: document.getElementById('hero-banner-wave'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '{{ "assets/data-color-1.json" | asset_url }}' 
    });

    // back to top script
    $(".backtotop").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
});

