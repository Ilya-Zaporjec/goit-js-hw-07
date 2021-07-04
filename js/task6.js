const inputValRef = document.getElementById("validation-input");

inputValRef.addEventListener("blur", focusInput);
function focusInput(event) {
  const inputLength = Number(event.target.dataset.length);
  const inputValue = event.target.value.length;

  inputLength === inputValue
    ? inputValRef.classList.remove("invalid") &
      inputValRef.classList.add("valid")
    : inputValRef.classList.add("invalid");
}
