import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, calculateIMC } from "./utils.js";

const form = document.querySelector("form"),
    inputWeight = document.querySelector("#weight"),
    inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value,
        height = inputHeight.value,
        weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open();

        inputHeight.oninput = () => AlertError.close();
        inputWeight.oninput = () => AlertError.close();

        return;
    }

    const result = calculateIMC(weight, height);
    displayResultMessage(result);
};

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerHTML = message;
    Modal.open();
}
