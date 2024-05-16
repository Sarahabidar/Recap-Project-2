// phew… not a lot going on here. Please add some code!
const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", function () {
  bookmarkIcon.classList.toggle("bookmark--active");
});
//answer Button
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answerOrHidden = document.querySelector('[data-js="card__answer"]');
answerButton.addEventListener("click", function () {
  answerOrHidden.classList.toggle("card__answer--active");
  answerOrHidden.classList.toggle("hidden");
  if (answerOrHidden.classList.contains("hidden")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
