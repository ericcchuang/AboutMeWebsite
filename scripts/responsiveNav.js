// DEVELOPER: Eric Huang, IS117-001, Fall 2022 

function openNav(){
    var menu = document.getElementById("mobile-nav");
    if (menu.style.display == "block") {
      document.getElementById("mobile-nav").style.display = "none";
    } else {
      document.getElementById("mobile-nav").style.display = "block";
    }
  }