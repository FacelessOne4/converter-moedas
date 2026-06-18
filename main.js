const moedaDestino = document.getElementById("moedaDestino")
const bandeira = document.getElementById("bandeira")
const nomeMoeda = document.getElementById("nomeMoeda")

const moedas = {
    BRL: {
        bandeira: "https://flagcdn.com/w160/br.png",
        nome: "Real Brasileiro"
    },
    USD: {
        bandeira: "https://flagcdn.com/w160/us.png",
        nome: "Dólar Americano"
    },
    JPY: {
        bandeira: "https://flagcdn.com/w160/jp.png",
        nome: "Yen Japonês"
    }
};
moedaDestino.addEventListener("change", () => {
    const moeda = moedas[moedaDestino.value];
    bandeira.src = moeda.bandeira
    bandeira.alt = moeda.nome
    nomeMoeda.textContent = moeda.nome;
});

