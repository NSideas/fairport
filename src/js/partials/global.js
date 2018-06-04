
// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 840px)');

var touch = false;

if (bowser.msie) {
  document.body.classList.add('ie');
}



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
  nav_is_open ? close_nav() : open_nav()
}



// Sub Nav
var mouse_over_nav_item = false;
var mouse_over_backdrop = false;
var menu_open = false;

function close_nav_dropdown() {
  setTimeout(function(){
    if (!mouse_over_nav_item) {
      $('#backdrop').css('transform', 'translateY(0)');
      $('#header').removeClass('dropdown-engaged');
      $('.main-nav-item.hover').removeClass('hover');
      menu_open = false
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
      close_nav_dropdown();
    }
  }, 10);
}

function dropdown_menu_hover() {
  $('#backdrop').hover(function() {
    mouse_over_backdrop = true;
  }, function() {
    mouse_over_backdrop = false;
    close_nav_dropdown();
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
    if (menu_open && $(this).parent().hasClass('hover')) {
      close_nav_dropdown();
    } else {
      nav_item_dropdown($(this).parent());
      menu_open = true;
    }
  });
}

function handle_drop_down() {
  touch ? dropdown_menu_tap() : dropdown_menu_hover()
}



// Header Search Input
function hide_search_bar(e) {
  var $this = $('#header-search');
  if (!$(e.target).parents('#header-search').length && $(e.target)[0] !== $this) {
    $('#search-site').blur();
    $this.removeClass('active');
    document.removeEventListener('click', hide_search_bar);
  }
}



// Responsive iframe elements
var iframe = document.getElementsByTagName('iframe');

function wrap_iframe() {
  for (var i = 0; i < iframe.length; i++) {
    var el = iframe[i];
    var wrapper = document.createElement('div');
    wrapper.classList.add('iframe-container');
    el.parentNode.replaceChild(wrapper, el);
    wrapper.appendChild(el);
  }
}



$(document).ready(function() {

  if (mq_large.matches) {

    window.addEventListener('mousemove', function first_mouse_move() {
      if (!touch) {
        handle_drop_down();
      }
      window.removeEventListener('mousemove', first_mouse_move, false);
    }, false);

    window.addEventListener('touchstart', function onFirstTouch() {
      touch = true;
      handle_drop_down();
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);

  } else {

    nav_button.addEventListener('click', handle_nav_button_click);

  }

  $('#header-search').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      setTimeout(function(){
        $('#search-site').focus();
      }, 250);
      document.addEventListener('click', hide_search_bar);
    }
  });

  if (iframe.length) {
    wrap_iframe();
  }

});
