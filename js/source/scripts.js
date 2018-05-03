

// Main Nav
var main_nav = document.getElementById('main-nav');
var nav_button = document.getElementById('menu-toggle');
var nav_is_open = false;

var mq_small = window.matchMedia('(min-width: 480px)');

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


// Team Bio
$('.team-member-link').click(function(e) {
  e.preventDefault();
  var team_member = $(this).attr('href');
  $(team_member).addClass('active');
  $('body').addClass('no-scroll');
});

function close_active_team_bio() {
  $('.team-bio-container.active').removeClass('active');
  $('body').removeClass('no-scroll');
}


$('.close-bio').click(function() {
  close_active_team_bio();
});
