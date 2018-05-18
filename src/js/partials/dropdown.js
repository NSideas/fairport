
// Dropdown Button

function toggle_dropdown_list(btn, list) {

  if (!list.hasClass('open')) {
    btn.addClass('list-open');
    list.slideDown(150, function() {
      list.addClass('open');
    });
  } else {
    list.removeClass('open');
    setTimeout(function() {
      list.slideUp(150);
      btn.removeClass('list-open');
    }, 50);
  }

}

$('.btn--dropdown').click(function(e) {
  var $list = $(this).next('.dropdown-list');
  if ($list.length) {
    toggle_dropdown_list($(this), $list);
  }
});
