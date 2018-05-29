
// Dropdown Button
// Used for news category filters

function open_dropdown(btn, list) {
  btn.addClass('list-open');
  list.slideDown(150, function() {
    list.addClass('open');
  });
}

function close_dropdown(btn, list) {
  list.removeClass('open');
  setTimeout(function() {
    list.slideUp(150);
    btn.removeClass('list-open');
  }, 50);
}

function toggle_dropdown_list(btn, list) {
  list.hasClass('open') ? close_dropdown(btn, list) : open_dropdown(btn, list)
}


$(document).ready(function() {
  if ($('.custom-dropdown').length) {

    $('.btn--dropdown').click(function(e) {
      var $list = $(this).next('.dropdown-list');
      if ($list.length) {
        toggle_dropdown_list($(this), $list);
      }
    });

  }
});
