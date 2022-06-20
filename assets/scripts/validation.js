import { errorMessages } from "./utils.js";

const submitButton = document.querySelector(".contact-form__submit");

export function validate({ target }) {
  const inputType = target.dataset.type;
  const errorMessage = errorMessages[inputType][hasError(target, inputType)];

  validatedFields[inputType] = target.validity.valid;

  if (errorMessage) {
    target.classList.add("error");
    target.parentElement.querySelector(".contact-form__error").innerText =
      errorMessage;
  } else {
    target.classList.remove("error");
  }
}

function hasError(input, inputType) {
  let errorType = null;

  Object.keys(errorMessages[inputType]).forEach((type) => {
    if (input.validity[type]) {
      errorType = type;
    }
  });
  formValid();
  return errorType;
}

function formValid() {
  const isValid = Object.values(validatedFields).includes(false);
  submitButton.title = !isValid ? "" : "Debe ingresar los datos del formulario";

  submitButton.disabled = isValid;
}

const validatedFields = {
  name: false,
  email: false,
  issue: false,
  message: false,
};
