const counter = document.getElementById("counter");
let counterValue = document.getElementById("value");

const buttonDec = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const buttonInc = document.querySelector(
  '#counter button[data-action="increment"]'
);
const increment = () => {
  Number((counterValue.textContent -= buttonDec.textContent));
};

const decrement = () => {
  Number((counterValue.textContent -= buttonInc.textContent));
};
buttonDec.addEventListener("click", decrement);
buttonInc.addEventListener("click", increment);
