const rangeInput = document.getElementById('range-password');
const rangeLabel = document.getElementById('label-range');

rangeInput.addEventListener('input', () => {
    rangeLabel.value = rangeInput.value;
})
rangeLabel.addEventListener('input', () => {
    rangeInput.value = rangeLabel.value;
})

const lettersLower = "azertyuiopqsdfghjklmwxcvbn";
const lettersUpper = lettersLower.toUpperCase();
const numbers = "0123456789";
const symboles = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const generate = document.getElementById('btnGenerate');

function generatePassword() {
    console.log("Génération du password");
}

generate.addEventListener('click', generatePassword)