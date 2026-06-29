const valor = document.getElementById("valor");
const moedaDestino = document.getElementById("moedaDestino");
const resultado = document.getElementById("resultado");
const bandeira = document.getElementById("bandeira");
const nomeMoeda = document.getElementById("nomeMoeda");
const botao = document.getElementById("converter");

const cotacoes = {
    USD: 5.19,
    JPY: 0.032
};

function converter() {

    const valorBRL = parseFloat(valor.value);

    if (isNaN(valorBRL) || valorBRL <= 0) {
        resultado.textContent = "Digite um valor válido!";
        return;
    }

    const convertido = valorBRL * cotacoes[moedaDestino.value];

    if (moedaDestino.value === "USD") {
        resultado.textContent = `Resultado: US$ ${convertido.toFixed(2)}`;
    } else {
        resultado.textContent = `Resultado: ¥ ${convertido.toFixed(3)}`;
    }
}

botao.addEventListener("click", converter);

function converter() {

    const valorBRL = parseFloat(valor.value);

    if (isNaN(valorBRL) || valorBRL <= 0) {
        resultado.textContent = "Digite um valor válido!";
        return;
    }

    let convertido;

    if (moedaDestino.value === "USD") {

        convertido = valorBRL * 5.19;

        resultado.textContent =
            `Resultado: US$ ${convertido.toFixed(2)}`;

    } else {

        convertido = valorBRL * 0.032;

        resultado.textContent =
            `Resultado: ¥ ${convertido.toFixed(3)}`;

    }

}