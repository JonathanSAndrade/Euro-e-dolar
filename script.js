
const converterButton = document.querySelector('.converter-button');

function convertvalue() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;

    const dolarToday = 5.2

    const converterValue = inputCurrencyValue / dolarToday;

    console.log(converterValue);

}

converterButton.addEventListener("click", convertvalue);

