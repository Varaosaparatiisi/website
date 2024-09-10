window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var logo = document.querySelector(".logo");

  if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "/img/logo-black.png"
  } else {
      header.classList.remove("scrolled");
      logo.src = "/img/logo-white.png"
  }
});