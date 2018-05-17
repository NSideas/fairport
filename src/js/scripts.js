
// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');

// Main Nav
var main_nav = document.getElementById('main-nav');
var nav_button = document.getElementById('menu-toggle');
var nav_is_open = false;

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
var mouse_over_nav_item = false;
var mouse_over_backdrop = false;

function close_dropdown() {

  setTimeout(function(){
    if (!mouse_over_nav_item) {
      $('#backdrop').css('transform', 'translateY(0)');
      $('#header').removeClass('dropdown-engaged');
      $('.main-nav-item.hover').removeClass('hover');
    }
  }, 100);

}

function nav_item_dropdown(item) {

  $(item).siblings().removeClass('hover');
  var sub_nav_height = $(item).find('.sub-nav').height();
  var translate_value = sub_nav_height + 10;
  $('#backdrop').css('transform', 'translateY('+ translate_value +'px)');
  $(item).addClass('hover');

}

function handle_mouse_enter(nav_item) {

  mouse_over_nav_item = true;
  if ($('#header').hasClass('dropdown-engaged')) {
    nav_item_dropdown(nav_item);
  } else {
    setTimeout(function() {
      if (mouse_over_nav_item) {
        nav_item_dropdown(nav_item);
        $('#header').addClass('dropdown-engaged');
      }
    }, 200);
  }

}

function handle_mouse_leave(nav_item) {

  mouse_over_nav_item = false;

  setTimeout(function() {
    if (!mouse_over_backdrop) {
      $(nav_item).removeClass('hover');
      close_dropdown();
    }
  }, 10);

}

function dropdown_menu_hover() {

  $('#backdrop').hover(function() {
    mouse_over_backdrop = true;
  }, function() {
    mouse_over_backdrop = false;
    close_dropdown();
  });

  $('.main-nav-item').hover(function(e) {
    handle_mouse_enter(this);
  }, function(e) {
    handle_mouse_leave(this);
  });

}

function dropdown_menu_tap() {

  $('.main-nav-item > a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('expanded');
  });

}

if (mq_small.matches) {
  dropdown_menu_hover();
} else {
  dropdown_menu_tap();
}

function hide_search_bar(e) {
  var $this = $('#header-search');
  if (!$(e.target).parents('#header-search').length && $(e.target)[0] !== $this) {
    $('#search-site').blur();
    $this.removeClass('active');
    document.removeEventListener('click', hide_search_bar);
  }
}

$('#header-search').click(function() {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    setTimeout(function(){
      $('#search-site').focus();
    }, 200);
    document.addEventListener('click', hide_search_bar);
  }
});



// Home Page

var active_slide_content = document.getElementById('active-slide-content');
var slide_content_inner;
if (active_slide_content) {
  slide_content_inner = active_slide_content.querySelector('.hero-swiper-slide-content');
}
var fraction;
var progress;
var total;

var hero_swiper = new Swiper('.hero-swiper', {
  loop: true,
  threshold: 5,
  speed: 600,
  longSwipesRatio: .35,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  on: {
    init: function () {
      initialize_hero_swiper(this);
    }
  },
  breakpoints: {
    // when window width is <= 720px
    720: {
      autoplay: false,
      speed: 300,
      longSwipesRatio: .5
    }
  }
});

function circumference(r) {
  return 2 * Math.PI * r;
}

function active_slide(swiper) {
  return swiper.slides[swiper.realIndex + 1];
}

function render_progress_circle(el) {

  var swiper_container = el.$el[0];
  var progress_circle = swiper_container.querySelector('.progress-circle');
  progress = progress_circle.querySelector('.progress');
  total = progress_circle.querySelector('.total');

  // Get circumference of circle
  var radius = progress.getAttribute('r');
  var circ = circumference(radius);

  // Get actual number of slides
  var dupe_slides = swiper_container.querySelectorAll('.swiper-slide-duplicate');
  var total_slides = el.slides.length - dupe_slides.length;

  fraction = circ/total_slides;
  var dasharray = fraction + ', ' + (circ - fraction);

  progress.setAttribute('stroke-dasharray', dasharray);
  progress.setAttribute('stroke-dashoffset', 0);

}

function append_slide_content(el) {

  var h5_src = el.querySelectorAll('h5')[0];
  var h1_src = el.querySelectorAll('h1')[0];
  var h5_output = slide_content_inner.querySelectorAll('h5')[0];
  var h1_output = slide_content_inner.querySelectorAll('h1')[0];

  h5_output.innerHTML = h5_src.innerHTML;
  h1_output.innerHTML = h1_src.innerHTML;

}


hero_swiper.on('slideChange', function() {

  slide_content_inner.classList.add('transparent');

  var current_slide = active_slide(this);
  var slide_class = current_slide.classList;

  for (var i = 0; i < slide_class.length; i++) {
    var prefix = slide_class[i].split('-')[0];
    if (prefix === 'color') {
      active_slide_content.className = slide_class[i];
    }
  }

  setTimeout(function() {
    append_slide_content(current_slide);
    slide_content_inner.classList.remove('transparent');
  }, 200);

});

function rotate_progress_circle(direction) {
  var dashoffset = parseFloat(progress.getAttribute('stroke-dashoffset'));
  if (direction === 'prev') {
    progress.setAttribute('stroke-dashoffset', dashoffset + fraction);
  } else {
    progress.setAttribute('stroke-dashoffset', dashoffset - fraction);
  }
}

hero_swiper.on('slideNextTransitionStart', function() {
  rotate_progress_circle('next');
});

hero_swiper.on('slidePrevTransitionStart', function() {
  rotate_progress_circle('prev');
});

function initialize_hero_swiper(swiper) {
  append_slide_content(active_slide(swiper));
  render_progress_circle(swiper);
  swiper.$el[0].classList.add('initiated');
}


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




// Team Bio
var staff_list = document.getElementById('staff-list');

function view_active_team_bio(team_member) {
  $(team_member).addClass('active');
  $('body').addClass('no-scroll');
}

function check_team_url() {
  if (window.location.hash) {
    view_active_team_bio(window.location.hash);
  }
}

function close_active_team_bio(active_team_bio) {
  $('body').removeClass('no-scroll');
  active_team_bio.addClass('fade-out');
  setTimeout(function(){
    active_team_bio.removeClass('active');
    active_team_bio.removeClass('fade-out');
  }, 250);
}

$('.team-member-link').click(function(e) {
  var team_member_link = $(this).attr('href');
  view_active_team_bio(team_member_link);
});

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


$(document).ready(function() {
  if (fam_circles) {
    slides = fam_circles.querySelectorAll('.swiper-slide');
  } else if (staff_list) {
    check_team_url();
  }
});


$(window).on('load', function() {
  if (fam_circles) {
    fam_circle_swiper.init();
  }
});
