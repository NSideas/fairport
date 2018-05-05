

// Main Nav
var main_nav = document.getElementById('main-nav');
var nav_button = document.getElementById('menu-toggle');
var nav_is_open = false;

var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');

function open_nav() {
  main_nav.classList.add('open');
  nav_is_open = true;
}

function close_nav() {
  main_nav.classList.add('nav-out');
  setTimeout(function(){
    main_nav.classList.remove('open');
    main_nav.classList.remove('nav-out');
  }, 250);
  nav_is_open = false;
}

function handle_nav_button_click() {
  document.body.classList.toggle('no-scroll');
  if (!nav_is_open) {
    open_nav();
  } else {
    close_nav();
  }
}

nav_button.addEventListener('click', handle_nav_button_click);


// Sub Nav
if (!mq_small.matches) {
  $('.main-nav-item > a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('expanded');
  });
}


// Home Page
var fam_circle_swiper = new Swiper('.fam-circle-swiper', {
  slidesPerView: 'auto',
  freeMode: false,
  roundLengths: true,
  centeredSlides: true,
  initialSlide: 2,
  virtualTranslate: true,
  init: false,
  slideToClickedSlide: true,
  breakpoints: {
    // when window width is <= 480px
    480: {
      freeMode: true,
      centeredSlides: false,
      initialSlide: 0
    }
  }
});

var fam_circles = document.getElementById('fam-circle-swiper');
var slides = fam_circles.querySelectorAll('.swiper-slide');
var start_position = 0;
var current_position = 0;
var small_circle = 180;
var big_circle = 500;
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

fam_circle_swiper.on('init', function(){

  // Translate to initial slide
  var current_translate = fam_circle_swiper.getTranslate();
  translate_circles(current_translate);
  $('.fam-circle-swiper').addClass('initialized');
  start_position = current_position - big_circle/2 + small_circle/2;
  get_translate_values(start_position);

  // Wait one second and fade in circles
  setTimeout(function(){
    $('.fam-circle-swiper').addClass('active');
    fam_circle_swiper.setTransition(300);
    translate_circles(start_position);
    swiper_is_active = true;
  }, 1000);

});


fam_circle_swiper.on('slideChangeTransitionStart', function() {
  if (swiper_is_active) {
    slide_to(this.activeIndex);
  }
});



$(window).on('load', function() {
  fam_circle_swiper.init();
});


// Team Bio
$('.team-member-link').click(function(e) {
  e.preventDefault();
  var team_member = $(this).attr('href');
  $(team_member).addClass('active');
  $('body').addClass('no-scroll');
});

function close_active_team_bio(active_team_bio) {
  $('body').removeClass('no-scroll');
  active_team_bio.addClass('fade-out');
  setTimeout(function(){
    active_team_bio.removeClass('active');
    active_team_bio.removeClass('fade-out');
  }, 250);
}


$('.close-bio').click(function() {
  close_active_team_bio($(this).closest('.team-bio-container'));
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    close_active_team_bio($('.team-bio-container.active'));
  }
});

$('.team-bio-container').click(function(e) {
  if (!$(e.target).parents('.team-bio-container').length) {
    close_active_team_bio($(this));
  }
});
