// phew… not a lot going on here. Please add some code!
const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", function () {
  bookmarkIcon.classList.toggle("bookmark--active");
});
