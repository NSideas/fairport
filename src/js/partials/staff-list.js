
// Staff List

var team_member_list = document.getElementById('team-member-list');

function view_active_team_bio(team_member) {
  $(team_member).addClass('active');
  $('body').addClass('no-scroll');
}

function close_active_team_bio(active_team_bio) {
  $('body').removeClass('no-scroll');
  active_team_bio.addClass('fade-out');
  setTimeout(function(){
    active_team_bio.removeClass('active');
    active_team_bio.removeClass('fade-out');
  }, 250);
}

// Open team member bio on load if url contains a hash
// Eg. http://fairportasset.com/team.html#brant-d-appel
function check_team_url() {
  if (window.location.hash) {
    view_active_team_bio(window.location.hash);
  }
}

$(document).ready(function() {
  if (team_member_list) {

    check_team_url();

    // Open team member bio when clicking on thumbnail
    $('.team-member-link').click(function(e) {
      var team_member_link = $(this).attr('href');
      view_active_team_bio(team_member_link);
    });

    // Close active team bio when clicking close button
    $('.close-bio').click(function() {
      close_active_team_bio($(this).closest('.team-bio-container'));
    });

    // Close active team bio when clicking outside the modal
    $('.team-bio-container').click(function(e) {
      if (!$(e.target).parents('.team-bio-container').length) {
        close_active_team_bio($(this));
      }
    });

    // Close active team bio on escape key
    $(document).keyup(function(e) {
      if (e.keyCode == 27 && $('#team-member-list').length) {
        // escape key maps to keycode `27`
        close_active_team_bio($('.team-bio-container.active'));
      }
    });

  }
});
