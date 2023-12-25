var coll = document.getElementsByClassName("collapsible");
var i;

const navLinkEls = document.querySelectorAll(".nav__link");
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  if (navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
});

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

$(document).ready(function() {

  $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
    $(this).parent().children(".overlay").show();

  });


  $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
    $(".overlay").hide();
  });
});


