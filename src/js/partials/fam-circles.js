
var fam_circle_swiper = new Swiper('.fam-circle-swiper', {
  slidesPerView: 'auto',
  roundLengths: true,
  centeredSlides: true,
  initialSlide: 2,
  virtualTranslate: true,
  init: false,
  slideToClickedSlide: true,
  allowTouchMove: false,
  on: {
    slideChangeTransitionStart: function() {
      fam_circle_slide_change(this)
    }
  },
  breakpoints: {
    // when window width is <= 720px
    720: {
      freeMode: true,
      allowTouchMove: true,
      centeredSlides: false,
      initialSlide: 0,
      virtualTranslate: false,
      init: true,
      slideToClickedSlide: false,
      on: {
        slideChangeTransitionStart: function() {}
      }
    }
  }
});

var fam_circles = document.getElementById('fam-circle-swiper');
var slides;
var start_position = 0;
var current_position = 0;
var small_circle = 180;
var big_circle = 620;
var margin = 10;
var t = small_circle/2 + big_circle/2 + margin;
var swiper_is_active = false;

function slide_to(slide) {
  var trans_value = slides[slide].getAttribute('data-translate');
  translate_circles(trans_value);
}

function translate_circles(x) {
  $('.fam-circle-swiper .swiper-wrapper').css('transform', 'translate3d('+ x +'px, 0px, 0px)');
  current_position = x;
}

function get_translate_values(start) {
  var middle = Math.floor(slides.length/2);
  var trans_value;
  for (var i = 0; i < slides.length; i++) {
    trans_value = (small_circle + margin) * (middle - i) + start;
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
    translate_circles(start_position);
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

$('.fam-circle-swiper .swiper-slide').click(function() {
  if (mq_medium.matches) {
    var clicked_index = $(this).index();
    fam_circle_swiper.slideTo(clicked_index, 300);
  }
});

$(document).ready(function() {
  if (fam_circles) {
    slides = fam_circles.querySelectorAll('.swiper-slide');
    fam_circle_swiper.init();
  }
});
