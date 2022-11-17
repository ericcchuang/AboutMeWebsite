function openNav(){
    var menu = document.getElementById("mobile-nav");
    if (menu.style.display == "block") {
      document.getElementById("mobile-nav").style.display = "none";
    } else {
      document.getElementById("mobile-nav").style.display = "block";
    }
  }