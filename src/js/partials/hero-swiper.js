
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
