var coll = document.getElementsByClassName("collapsible");
var i;

const navLinkEls = document.querySelectorAll(".nav__link");
const windowPathname = window.location.pathname;


navLinkEls.forEach(navLinkEl => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (windowPathname === navLinkPathname) {
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
  $('.wrapper').fadeIn(500);
  $('.popup-box').removeClass('transform-out').addClass('transform-in');
});

$('.popup-close').click(function(e) {
  $('.wrapper').fadeOut(500);
  $('.popup-box').removeClass('transform-in').addClass('transform-out');
  e.preventDefault();
});