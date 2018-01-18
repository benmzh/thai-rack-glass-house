var onMenuPage = window.location.href.indexOf("menu") > 0;
var lunchClicked = 0;

if ( onMenuPage ) {

  $("#lunch-menu").css("display", "none").css("transform", "translateX(-100%)");

  document.getElementById("lunch-menu-selector").addEventListener("click", function(e) {
    if ( lunchClicked == 0 ) {
      $("#lunch-menu-selector-container").css("display", "none");
      $("#dinner-menu-selector-container").css("display", "block");
      $("#menu-introduction").css("display", "none");
      $("#dinner-menu").css("order", "2").css("display", "none").css("transform", "translateX(100%)");
      $(".trgh-menu-container").css("display", "flex").css("width", "200%");
      $(".trgh-menu-meal-container").css("width", "50%");
      $("#lunch-menu").css("display", "block").css("order", "1");
      setTimeout(function() {
        $("#lunch-menu").css("transform", "translateX(0)");
      }, 1);
      lunchClicked = 1
    } else {
      $("#lunch-menu-selector-container").css("display", "none");
      $("#dinner-menu-selector-container").css("display", "block");
      $("#dinner-menu").css("order", "2").css("display", "none").css("transform", "translateX(100%)");
      $("#lunch-menu").css("display", "block").css("order", "1");
      setTimeout(function() {
        $("#lunch-menu").css("transform", "translateX(0)");
      }, 1);
    }
  });
  document.getElementById("dinner-menu-selector").addEventListener("click", function(e) {
    $("#dinner-menu-selector-container").css("display", "none");
    $("#lunch-menu-selector-container").css("display", "block");
    $("#lunch-menu").css("order", "2").css("display", "none").css("transform", "translateX(-100%)");
    $("#dinner-menu").css("display", "block").css("order", "1");
    setTimeout(function() {
      $("#dinner-menu").css("transform", "translateX(0)");
    }, 1);
  });
}
