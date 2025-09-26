const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    //gera números aleatórios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    //define o texto alternativo das imagens
    const alt1_00 = "Moedas de um Real"
    const alt0_50 = "Moedas de Cinqueta Centavos"
    const alt0_25 = "Moedas de Vinte e cinco centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    //chama o método criar moedas passando os argumentos
    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    //cria o laço para inserir várias imagens de moedas na página
    for (let i = 1; i <= num; i++) {
        const novaMoeda = document.createElement("img") 
        novaMoeda.src = "img/" + moeda
        novaMoeda.alt = textoAlt
        novaMoeda.className = classe
        dvMoedas.appendChild(novaMoeda)
    }

    const br = document.createElement("br")
    dvMoedas.appendChild(br)

}