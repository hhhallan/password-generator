// NOMBRE DE CARACTERES
const rangeInput = document.getElementById('range-password');
const rangeLabel = document.getElementById('label-range');

rangeInput.addEventListener('input', () => {
    rangeLabel.value = rangeInput.value;
    generatePassword();
})
rangeLabel.addEventListener('input', () => {
    rangeInput.value = rangeLabel.value;
    generatePassword();
})


// GENERATEUR
const dataLower = "azertyuiopqsdfghjklmwxcvbn";
const dataUpper = dataLower.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const rangeVal = document.getElementById("range-password");
const inpResult = document.getElementById('inp-result');


function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) {
        data.push(...dataLower);
        // generatePassword();
    }
    if (uppercase.checked) {
        data.push(...dataUpper);
        // generatePassword();
    }
    if (numbers.checked) {
        data.push(...dataNumbers);
        // generatePassword();
    }
    if (symbols.checked) {
        data.push(...dataSymbols);
        // generatePassword();
    }

    if (data.length === 0) {
        alert("Veuillez selectionner qqch");
        return;
    }

    for (let i = 0; i < rangeVal.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    inpResult.value = password;
}

generatePassword(); // Lancement de base;
btnGenerate.addEventListener('click', generatePassword); // Lancement au click;
lowercase.addEventListener('click', generatePassword); // Lancement au click;
uppercase.addEventListener('click', generatePassword); // Lancement au click;
numbers.addEventListener('click', generatePassword); // Lancement au click;
symbols.addEventListener('click', generatePassword); // Lancement au click;


// obligé qu'un input checkbox soit coché
// génerer qd on clique sur une option
// copier le mdp