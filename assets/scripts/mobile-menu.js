function openMenu() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("mobile-menu").style.width = "0%";
}

var dropdowns = document.getElementsByClassName("mobile-menu-more");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      dropdownContent.classList.remove("subnav-active");
      this.value = "+";
    } else {
      dropdownContent.style.display = "block";
      dropdownContent.classList.add("subnav-active");
      this.value = "-";
    }
  });
}