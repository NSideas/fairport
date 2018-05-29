

var fam_circles = document.getElementById('fam-circle-swiper');
var slides;
var start_position = 0;
var current_position = 0;
var small_circle = 180;
var big_circle = 620;
var margin = 10;
var t = small_circle/2 + big_circle/2 + margin;
var swiper_is_active = false;
if (fam_circles) {
  slides = fam_circles.querySelectorAll('.swiper-slide');
}



function get_middle_slide() {
  if (slides.length % 2 > 0) {
    return Math.floor(slides.length / 2)
  } else {
    return (Math.floor(slides.length / 2) - 1)
  }
}

function get_slide_offset() {
  if (slides.length % 2 > 0) {
    return 0
  } else {
    return -small_circle/2
  }
}

var fam_circle_swiper = new Swiper('.fam-circle-swiper', {
  slidesPerView: 'auto',
  roundLengths: true,
  centeredSlides: true,
  initialSlide: get_middle_slide(),
  slidesOffsetBefore: get_slide_offset(),
  virtualTranslate: true,
  init: false,
  allowTouchMove: false,
  on: {
    slideChangeTransitionStart: function() {
      fam_circle_slide_change(this)
    }
  },
  breakpoints: {
    // when window width is <= 719px
    719: {
      freeMode: true,
      allowTouchMove: true,
      centeredSlides: false,
      initialSlide: 0,
      virtualTranslate: false,
      init: true,
      on: {
        slideChangeTransitionStart: function() {}
      }
    }
  }
});



function slide_to(slide) {
  var trans_value = slides[slide].getAttribute('data-translate');
  translate_circles(trans_value);
}

function translate_circles(x) {
  $('.fam-circle-swiper .swiper-wrapper').css('transform', 'translate3d('+ x +'px, 0px, 0px)');
  current_position = x;
}

function get_translate_values(start) {
  var middle = get_middle_slide();
  var trans_value;
  for (var i = 0; i < slides.length; i++) {
    trans_value = (small_circle + margin) * (middle - i) + start - get_slide_offset();
    slides[i].setAttribute('data-translate', trans_value);
  }
}

function initialize_swiper_manually() {

  // Translate to initial slide
  var current_translate = fam_circle_swiper.getTranslate();

  translate_circles(current_translate);
  $('.fam-circle-swiper').addClass('initialized');

  start_position = current_position - big_circle/2 + small_circle/2;
  get_translate_values(start_position);
  fam_circle_swiper.setTransition(300);

  // Wait one second and fade in circles
  setTimeout(function(){
    $('.fam-circle-swiper').addClass('active');
    if (slides.length % 2 > 0) {
      translate_circles(start_position);
    } else {
      translate_circles(start_position - get_slide_offset());
    }

    swiper_is_active = true;
  }, 1000);

}

fam_circle_swiper.on('init', function() {
  if (mq_medium.matches) {
    initialize_swiper_manually();
  }
});

function fam_circle_slide_change(swiper) {
  if (swiper_is_active) {
    slide_to(swiper.activeIndex);
  }
}


$(document).ready(function() {
  if (fam_circles) {

    slides = fam_circles.querySelectorAll('.swiper-slide');
    fam_circle_swiper.init();

    $('.fam-circle-swiper .swiper-slide').click(function() {
      if (mq_medium.matches) {
        var clicked_index = $(this).index();
        fam_circle_swiper.slideTo(clicked_index, 300);
      }
    });

  }
});
