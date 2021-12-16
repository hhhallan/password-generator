// NOMBRE DE CARACTERES
const rangeInput = document.getElementById('range-password');
const rangeLabel = document.getElementById('label-range');

rangeInput.addEventListener('input', () => {
    rangeLabel.value = rangeInput.value;
    generatePassword();
    progressBar();
    rangeBar();
});

rangeLabel.addEventListener('input', () => {
    rangeInput.value = rangeLabel.value;
    generatePassword();
    progressBar();
    rangeBar();
});




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

    if (lowercase.checked) data.push(...dataLower);
    if (uppercase.checked) data.push(...dataUpper);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez selectionner qqch");
        return;
    }

    for (let i = 0; i < rangeVal.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }
    inpResult.value = password;
}

generatePassword();
btnGenerate.addEventListener('click', generatePassword);
lowercase.addEventListener('click', generatePassword);
uppercase.addEventListener('click', generatePassword);
numbers.addEventListener('click', generatePassword);
symbols.addEventListener('click', generatePassword);

// COPY
btnCopy.addEventListener('click', () => {
    inpResult.select();
    document.execCommand("copy");
    document.querySelector('.modal').style.animation = "apparition 2s linear 1"
})

// SECURITY
function progressBar() {
    const colorBar = document.querySelector('.bar-color');

    if (rangeInput.value >= 1 && rangeInput.value <= 3) {
        colorBar.style.backgroundColor = "#F19B2B";
        colorBar.style.width = 10 + "%";
    } else if (rangeInput.value >= 4 && rangeInput.value <= 6) {
        colorBar.style.backgroundColor = "#D8D145";
        colorBar.style.width = 40 + "%";
    } else if (rangeInput.value >= 7 && rangeInput.value <= 8) {
        colorBar.style.backgroundColor = "#98CB6F";
        colorBar.style.width = 60 + "%";
    } else if (rangeInput.value >= 9 && rangeInput.value <= 10) {
        colorBar.style.backgroundColor = "#5FD889";
        colorBar.style.width = 80 + "%";
    } else if (rangeInput.value > 10) {
        colorBar.style.backgroundColor = "#5FD889";
        colorBar.style.width = 100 + "%";
    }
}

// RANGE BAR
function rangeBar() {
    let x = rangeInput.value;
    rangeInput.style.background = `linear-gradient(90deg, #DD2222 ${x * 4}%, #eee ${x * 4}%)`;
}