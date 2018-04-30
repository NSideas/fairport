

// Main Nav
var main_nav = document.getElementById('main-nav');
var nav_button = document.getElementById('menu-toggle');
var nav_is_open = false;

function open_nav() {
  main_nav.classList.add('open');
  document.body.classList.add('nav-open');
}

function close_nav() {
  main_nav.classList.remove('open');
  document.body.classList.remove('nav-open');
}

function handle_nav_button_click() {
  if (!nav_is_open) {
    open_nav();
    nav_is_open = true;
  } else {
    close_nav();
    nav_is_open = false;
  }
}

nav_button.addEventListener('click', handle_nav_button_click);


// Sub Nav
$('.main-nav-item > a').click(function(e) {
  e.preventDefault();
  $(this).parent().toggleClass('expanded');
})
