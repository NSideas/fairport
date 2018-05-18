
// Staff List

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
  if (staff_list) {
    check_team_url();
  }
});
