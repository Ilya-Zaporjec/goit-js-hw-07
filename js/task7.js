const inputFont = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

text.style.fontSize = `${inputFont.value}px`;

inputFont.addEventListener("input", onInputRefChange);

function onInputRefChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
