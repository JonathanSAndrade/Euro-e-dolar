
const converterButton = document.querySelector('.converter-button');
const currencySelect = document.querySelector('.currency-select'); 

function convertvalue() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
    const currencyConverter = document.querySelector(".currency-value"); // outras mooedas

    console.log (currencySelect)
    const dolarToday = 5.2

    const converterValue = inputCurrencyValue / dolarToday  

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyConverter.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(converterValue)   

    console.log(converterValue);

}

converterButton.addEventListener("click", convertvalue);

