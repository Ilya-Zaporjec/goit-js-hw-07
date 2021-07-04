const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.oninput = () =>
  input.value === ""
    ? (output.innerHTML = "незнакомец")
    : (output.innerHTML = input.value);
