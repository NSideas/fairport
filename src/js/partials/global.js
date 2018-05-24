
// Media Queries
var mq_small = window.matchMedia('(min-width: 480px)');
var mq_medium = window.matchMedia('(min-width: 720px)');
var mq_large = window.matchMedia('(min-width: 840px)');

var touch = false;

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


// Sub Nav
var mouse_over_nav_item = false;
var mouse_over_backdrop = false;
var menu_open = false;

function close_dropdown() {
  setTimeout(function(){
    if (!mouse_over_nav_item) {
      $('#backdrop').css('transform', 'translateY(0)');
      $('#header').removeClass('dropdown-engaged');
      $('.main-nav-item.hover').removeClass('hover');
      menu_open = false;
    }
  }, 100);
}

function nav_item_dropdown(item) {
  $(item).siblings().removeClass('hover');
  var sub_nav_height = $(item).find('.sub-nav').height();
  var translate_value = sub_nav_height + 10;
  $('#backdrop').css('transform', 'translateY('+ translate_value +'px)');
  $(item).addClass('hover');
  menu_open = true;
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
      console.log('hovering');
      handle_mouse_enter(this);
    }, function(e) {
      handle_mouse_leave(this);
    });
}



function dropdown_menu_tap() {
  $('.main-nav-item > a').click(function(e) {
    e.preventDefault();
    if (!menu_open) {
      console.log('open nav');
      nav_item_dropdown(e);
      mouse_over_nav_item = true;
    } else {
      console.log('close nav');
      mouse_over_nav_item = false;
      close_dropdown();
    }
  });
}


window.addEventListener('touchstart', function onFirstTouch() {
  document.body.classList.add('user-is-touching');
  touch = true;
  console.log('you touched me');
  dropdown_menu_tap();
  $('.main-nav-item').off("hover", "**");
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);


function mobile_menu_expander() {
  $('.main-nav-item > a').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('expanded');
  });
}

function hide_search_bar(e) {
  var $this = $('#header-search');
  if (!$(e.target).parents('#header-search').length && $(e.target)[0] !== $this) {
    $('#search-site').blur();
    $this.removeClass('active');
    document.removeEventListener('click', hide_search_bar);
  }
}


$(document).ready(function() {

  if (mq_large.matches) {
    if (!touch) {
      dropdown_menu_hover();
    } else {
      dropdown_menu_tap();
    }

  } else {
    mobile_menu_expander();
    nav_button.addEventListener('click', handle_nav_button_click);
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

});
