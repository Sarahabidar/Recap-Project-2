const navElement = document.querySelector('[data-js="navigation"]');
const headerElement = document.querySelector('[data-js="header"]');
const mainElement = document.createElement("main");
const formElement = document.createElement("form");

const fieldsetElement = document.createElement("fieldset");
//*const legendElement = document.createElement("legend");
const quastionelement = document.createElement("p");
quastionelement.textContent = "Your quastion:";

const quastionText = document.createElement("textarea");

const answerElement = document.createElement("p");
answerElement.textContent = "Your answer";

const answerText = document.createElement("textarea");
const tag = document.createElement("p");
tag.textContent = "Tag";

const tagText = document.createElement("input");

const submitButton = document.createElement("button");
submitButton.classList.add("submitButton");
submitButton.textContent = "Submit";

document.body.insertBefore(mainElement, navElement);
mainElement.append(fieldsetElement);
fieldsetElement.append(formElement);
formElement.append(
  quastionelement,
  quastionText,
  answerElement,
  answerText,
  tag,
  tagText,
  submitButton
);
