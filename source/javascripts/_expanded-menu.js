document.getElementById("trgh-hamburger-icon-link").addEventListener("click", function(e) {
  $("#trgh-hamburger-icon-link").css('display', 'none');
  $("#trgh-close-icon-link").css('display', 'block');
  $("#tt-sticky-expanded-menu").css('display', 'inline-block');
});

document.getElementById("trgh-close-icon-link").addEventListener("click", function(e) {
  $("#trgh-hamburger-icon-link").css('display', 'block');
  $("#trgh-close-icon-link").css('display', 'none');
  $("#tt-sticky-expanded-menu").css('display', 'none');
});
