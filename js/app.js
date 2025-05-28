function scrollFunction() {
  (sticky_footer = document.getElementById("sticky-footer")),
    (scrollLimit = 250);
  if (window.scrollY >= scrollLimit) {
    sticky_footer.classList.add("active");
  } else {
    sticky_footer.classList.remove("active");
  }
}
window.onscroll = scrollFunction;
