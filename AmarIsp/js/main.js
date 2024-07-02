$(document).ready(function(){
  
  // sticky menu
  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });

  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

  // slider-active 
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToScroll: 1
      });
  // testimonial-active 
    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToScroll: 1
      });
  // brand-active 
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

  // counterUp 
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // scrollUp 
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


})