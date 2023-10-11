var navMenu = document.getElementById("nav-menu");

// Get all buttons with class="btn" inside the container
var navBtns = navMenu.getElementsByClassName("nav");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navBtns.length; i++) {
  navBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav-active");
    current[0].className = current[0].className.replace(" nav-active", "");
    this.className += " nav-active";
  });
}