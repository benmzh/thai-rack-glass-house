var menuPage = window.location.href.indexOf("menu") > -1;

if ( menuPage ) {

  var specialSetMenu = 0;
  document.getElementById("special-set-menu-title").addEventListener("click", function(e) {
    $("#special-set-menu-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#special-set-menu-title").css("color", "inherit");
    }, 500);
    if ( specialSetMenu == 0 ) {
      $("#special-set-menu-title-arrow").css("transform", "rotate(180deg)");
      $("#special-set-menu-show-hide-p").css("display", "block");
      $("#special-set-menu").css("display", "flex");
      setTimeout(function() {
        $("#special-set-menu").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#special-set-menu").css("background-color", "inherit");
      }, 500);
      specialSetMenu = 1;
    } else {
      $("#special-set-menu-title-arrow").css("transform", "unset");
      $("#special-set-menu-show-hide-p").css("display", "none");
      $("#special-set-menu").css("display", "none");
      specialSetMenu = 0;
    }
  });

  var starters = 0;
  document.getElementById("starters-title").addEventListener("click", function(e) {
    $("#starters-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#starters-title").css("color", "inherit");
    }, 500);
    if ( starters == 0 ) {
      $("#starters-title-arrow").css("transform", "translate(0, -2px) rotate(180deg)");
      $("#starters").css("display", "flex");
      setTimeout(function() {
        $("#starters").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#starters").css("background-color", "inherit");
      }, 500);
      starters = 1;
    } else {
      $("#starters-title-arrow").css("transform", "translate(0, -2px)");
      $("#starters").css("display", "none");
      starters = 0;
    }
  });

  var soups = 0;
  document.getElementById("soups-title").addEventListener("click", function(e) {
    $("#soups-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#soups-title").css("color", "inherit");
    }, 500);
    if ( soups == 0 ) {
      $("#soups-title-arrow").css("transform", "rotate(180deg)");
      $("#soups-show-hide-p").css("display", "block");
      $("#soups").css("display", "flex");
      setTimeout(function() {
        $("#soups").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#soups").css("background-color", "inherit");
      }, 500);
      soups = 1;
    } else {
      $("#soups-title-arrow").css("transform", "unset");
      $("#soups-show-hide-p").css("display", "none");
      $("#soups").css("display", "none");
      soups = 0;
    }
  });

  var salads = 0;
  document.getElementById("salads-title").addEventListener("click", function(e) {
    $("#salads-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#salads-title").css("color", "inherit");
    }, 500);
    if ( salads == 0 ) {
      $("#salads-title-arrow").css("transform", "rotate(180deg)");
      $("#salads").css("display", "flex");
      setTimeout(function() {
        $("#salads").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#salads").css("background-color", "inherit");
      }, 500);
      salads = 1;
    } else {
      $("#salads-title-arrow").css("transform", "unset");
      $("#salads").css("display", "none");
      salads = 0;
    }
  });

  var thaiCurries = 0;
  document.getElementById("thai-curries-title").addEventListener("click", function(e) {
    $("#thai-curries-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#thai-curries-title").css("color", "inherit");
    }, 500);
    if ( thaiCurries == 0 ) {
      $("#thai-curries-title-arrow").css("transform", "rotate(180deg)");
      $("#thai-curries-show-hide-p").css("display", "block");
      $("#thai-curries").css("display", "flex");
      setTimeout(function() {
        $("#thai-curries").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#thai-curries").css("background-color", "inherit");
      }, 500);
      thaiCurries = 1;
    } else {
      $("#thai-curries-title-arrow").css("transform", "unset");
      $("#thai-curries-show-hide-p").css("display", "none");
      $("#thai-curries").css("display", "none");
      thaiCurries = 0;
    }
  });

  var meatPoultry = 0;
  document.getElementById("meat-poultry-title").addEventListener("click", function(e) {
    $("#meat-poultry-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#meat-poultry-title").css("color", "inherit");
    }, 500);
    if ( meatPoultry == 0 ) {
      $("#meat-poultry-title-arrow").css("transform", "rotate(180deg)");
      $("#meat-poultry-show-hide-p").css("display", "block");
      $("#meat-poultry").css("display", "flex");
      setTimeout(function() {
        $("#meat-poultry").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#meat-poultry").css("background-color", "inherit");
      }, 500);
      meatPoultry = 1;
    } else {
      $("#meat-poultry-title-arrow").css("transform", "unset");
      $("#meat-poultry-show-hide-p").css("display", "none");
      $("#meat-poultry").css("display", "none");
      meatPoultry = 0;
    }
  });

  var specialityMeatPoultry = 0;
  document.getElementById("speciality-meat-poultry-title").addEventListener("click", function(e) {
    $("#speciality-meat-poultry-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#speciality-meat-poultry-title").css("color", "inherit");
    }, 500);
    if ( specialityMeatPoultry == 0 ) {
      $("#speciality-meat-poultry-title-arrow").css("transform", "rotate(180deg)");
      $("#speciality-meat-poultry").css("display", "flex");
      setTimeout(function() {
        $("#speciality-meat-poultry").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#speciality-meat-poultry").css("background-color", "inherit");
      }, 500);
      specialityMeatPoultry = 1;
    } else {
      $("#speciality-meat-poultry-title-arrow").css("transform", "unset");
      $("#speciality-meat-poultry").css("display", "none");
      specialityMeatPoultry = 0;
    }
  });

  var seafood = 0;
  document.getElementById("seafood-title").addEventListener("click", function(e) {
    $("#seafood-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#seafood-title").css("color", "inherit");
    }, 500);
    if ( seafood == 0 ) {
      $("#seafood-title-arrow").css("transform", "rotate(180deg)");
      $("#seafood").css("display", "flex");
      setTimeout(function() {
        $("#seafood").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#seafood").css("background-color", "inherit");
      }, 500);
      seafood = 1;
    } else {
      $("#seafood-title-arrow").css("transform", "unset");
      $("#seafood").css("display", "none");
      seafood = 0;
    }
  });

  var specialitySeafood = 0;
  document.getElementById("speciality-seafood-title").addEventListener("click", function(e) {
    $("#speciality-seafood-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#speciality-seafood-title").css("color", "inherit");
    }, 500);
    if ( specialitySeafood == 0 ) {
      $("#speciality-seafood-title-arrow").css("transform", "rotate(180deg)");
      $("#speciality-seafood").css("display", "flex");
      setTimeout(function() {
        $("#speciality-seafood").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#speciality-seafood").css("background-color", "inherit");
      }, 500);
      specialitySeafood = 1;
    } else {
      $("#speciality-seafood-title-arrow").css("transform", "unset");
      $("#speciality-seafood").css("display", "none");
      specialitySeafood = 0;
    }
  });

  var vegetable = 0;
  document.getElementById("vegetable-title").addEventListener("click", function(e) {
    $("#vegetable-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#vegetable-title").css("color", "inherit");
    }, 500);
    if ( vegetable == 0 ) {
      $("#vegetable-title-arrow").css("transform", "rotate(180deg)");
      $("#vegetable").css("display", "flex");
      setTimeout(function() {
        $("#vegetable").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#vegetable").css("background-color", "inherit");
      }, 500);
      vegetable = 1;
    } else {
      $("#vegetable-title-arrow").css("transform", "unset");
      $("#vegetable").css("display", "none");
      vegetable = 0;
    }
  });

  var rice = 0;
  document.getElementById("rice-title").addEventListener("click", function(e) {
    $("#rice-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#rice-title").css("color", "inherit");
    }, 500);
    if ( rice == 0 ) {
      $("#rice-title-arrow").css("transform", "rotate(180deg)");
      $("#rice").css("display", "flex");
      setTimeout(function() {
        $("#rice").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#rice").css("background-color", "inherit");
      }, 500);
      rice = 1;
    } else {
      $("#rice-title-arrow").css("transform", "unset");
      $("#rice").css("display", "none");
      rice = 0;
    }
  });

  var noodles = 0;
  document.getElementById("noodles-title").addEventListener("click", function(e) {
    $("#noodles-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#noodles-title").css("color", "inherit");
    }, 500);
    if ( noodles == 0 ) {
      $("#noodles-title-arrow").css("transform", "rotate(180deg)");
      $("#noodles").css("display", "flex");
      setTimeout(function() {
        $("#noodles").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#noodles").css("background-color", "inherit");
      }, 500);
      noodles = 1;
    } else {
      $("#noodles-title-arrow").css("transform", "unset");
      $("#noodles").css("display", "none");
      noodles = 0;
    }
  });

  var vegetarianStarters = 0;
  document.getElementById("vegetarian-starters-title").addEventListener("click", function(e) {
    $("#vegetarian-starters-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#vegetarian-starters-title").css("color", "inherit");
    }, 500);
    if ( vegetarianStarters == 0 ) {
      $("#vegetarian-starters-title-arrow").css("transform", "rotate(180deg)");
      $("#vegetarian-starters-show-hide-p").css("display", "block");
      $("#vegetarian-starters").css("display", "flex");
      setTimeout(function() {
        $("#vegetarian-starters").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#vegetarian-starters").css("background-color", "inherit");
      }, 500);
      vegetarianStarters = 1;
    } else {
      $("#vegetarian-starters-title-arrow").css("transform", "unset");
      $("#vegetarian-starters-show-hide-p").css("display", "none");      
      $("#vegetarian-starters").css("display", "none");
      vegetarianStarters = 0;
    }
  });

  var vegetarianSoups = 0;
  document.getElementById("vegetarian-soups-title").addEventListener("click", function(e) {
    $("#vegetarian-soups-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#vegetarian-soups-title").css("color", "inherit");
    }, 500);
    if ( vegetarianSoups == 0 ) {
      $("#vegetarian-soups-title-arrow").css("transform", "rotate(180deg)");
      $("#vegetarian-soups").css("display", "flex");
      setTimeout(function() {
        $("#vegetarian-soups").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#vegetarian-soups").css("background-color", "inherit");
      }, 500);
      vegetarianSoups = 1;
    } else {
      $("#vegetarian-soups-title-arrow").css("transform", "unset");
      $("#vegetarian-soups").css("display", "none");
      vegetarianSoups = 0;
    }
  });

  var vegetarianMains = 0;
  document.getElementById("vegetarian-mains-title").addEventListener("click", function(e) {
    $("#vegetarian-mains-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#vegetarian-mains-title").css("color", "inherit");
    }, 500);
    if ( vegetarianMains == 0 ) {
      $("#vegetarian-mains-title-arrow").css("transform", "rotate(180deg)");
      $("#vegetarian-mains").css("display", "flex");
      setTimeout(function() {
        $("#vegetarian-mains").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#vegetarian-mains").css("background-color", "inherit");
      }, 500);
      vegetarianMains = 1;
    } else {
      $("#vegetarian-mains-title-arrow").css("transform", "unset");
      $("#vegetarian-mains").css("display", "none");
      vegetarianMains = 0;
    }
  });

  var lunchStarters = 0;
  document.getElementById("lunch-starters-title").addEventListener("click", function(e) {
    $("#lunch-starters-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#lunch-starters-title").css("color", "inherit");
    }, 500);
    if ( lunchStarters == 0 ) {
      $("#lunch-starters-title-arrow").css("transform", "translate(0, -2px) rotate(180deg)");
      $("#lunch-starters").css("display", "flex");
      setTimeout(function() {
        $("#lunch-starters").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#lunch-starters").css("background-color", "inherit");
      }, 500);
      lunchStarters = 1;
    } else {
      $("#lunch-starters-title-arrow").css("transform", "translate(0, -2px)");
      $("#lunch-starters").css("display", "none");
      lunchStarters = 0;
    }
  });

  var lunchMainsOne = 0;
  document.getElementById("lunch-mains-one-title").addEventListener("click", function(e) {
    $("#lunch-mains-one-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#lunch-mains-one-title").css("color", "inherit");
    }, 500);
    if ( lunchMainsOne == 0 ) {
      $("#lunch-mains-one-title-arrow").css("transform", "translate(0, -2px) rotate(180deg)");
      $("#lunch-mains-one").css("display", "flex");
      setTimeout(function() {
        $("#lunch-mains-one").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#lunch-mains-one").css("background-color", "inherit");
      }, 500);
      lunchMainsOne = 1;
    } else {
      $("#lunch-mains-one-title-arrow").css("transform", "translate(0, -2px)");
      $("#lunch-mains-one").css("display", "none");
      lunchMainsOne = 0;
    }
  });

  var lunchMainsTwo = 0;
  document.getElementById("lunch-mains-two-title").addEventListener("click", function(e) {
    $("#lunch-mains-two-title").css("color", "#FFFFFF");
    setTimeout(function() {
      $("#lunch-mains-two-title").css("color", "inherit");
    }, 500);
    if ( lunchMainsTwo == 0 ) {
      $("#lunch-mains-two-title-arrow").css("transform", "translate(0, -2px) rotate(180deg)");
      $("#lunch-mains-two").css("display", "flex");
      setTimeout(function() {
        $("#lunch-mains-two").css("background-color", "rgba(255,255,255,0.5)");
      }, 50);
      setTimeout(function() {
        $("#lunch-mains-two").css("background-color", "inherit");
      }, 500);
      lunchMainsTwo = 1;
    } else {
      $("#lunch-mains-two-title-arrow").css("transform", "translate(0, -2px)");
      $("#lunch-mains-two").css("display", "none");
      lunchMainsTwo = 0;
    }
  });

}
