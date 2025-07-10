
const converterButton = document.querySelector('.converter-button');
const currencySelect = document.querySelector('.currency-select');

function convertvalue() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
    const currencyConverter = document.querySelector(".currency-value"); // outras mooedas

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 5.6

    if (currencySelect.value === "dolar") {
        currencyConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value === "euro") {
        converterValue = inputCurrencyValue / euroToday
        currencyConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    // Atualiza o valor em real sempre que converter
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img');
if (currencySelect.value === "dolar"){
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/USA.png'
}
if (currencySelect.value === "euro"){
    currencyName.innerHTML = 'Euro'
     currencyImage.src = './assets/Euro.png'
}
convertvalue() 
}
currencySelect.addEventListener("change", changeCurrency);
converterButton.addEventListener("click", convertvalue);

