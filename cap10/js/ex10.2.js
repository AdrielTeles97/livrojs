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

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    
    const soma = Number(frm.inSoma.value) //valor informado pelo usuário
    const moedas = document.querySelectorAll("img") //obtém img filhas de dvMoedas
    let totalCentavos = 0 //acumulador em centavos
    
    //percorre as tags img (em moedas) e verifica propriedade className
    for(const moeda of moedas) {
        if (moeda.className == "moeda1-00") {
            totalCentavos += 100 //acumula 100 centavos (para moedas de 1 real)
        } else if (moeda.className == "moeda0-50") {
            totalCentavos += 50 //para moedas de 50 centavos
        } else if (moeda.className == "moeda0-25") {
            totalCentavos += 25 //para moedas de 25 centavos
        } else if (moeda.className == "moeda0-10") {
            totalCentavos += 10 //para moedas de 10 centavos
        }
    }
    
    // Converte de centavos para reais
    const totalMoedas = totalCentavos / 100
    
    const div = document.createElement("div") //cria elemento div
    const h3 = document.createElement("h3") //cria elemento h3
    
    let mensagem
    
    //verifica se o valor informado é igual ao total de moedas exibidas
    if (soma === totalMoedas) {
        div.className = "alert alert-success" //define a classe da div
        mensagem = "Parabéns!! Você acertou" //h3 é filho da div criada na function
    } else {
        div.className = "alert alert-danger"
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }
    
    const texto = document.createTextNode(mensagem) //cria elemento de texto
    h3.appendChild(texto) //texto é filho de h3
    div.appendChild(h3) //h3 é filho da div criada na function
    dvMoedas.appendChild(div) // e a div com alert é filha de divMoedas
    
    frm.submit.disabled = true //desabilita botão (resposta já foi exibida)
})

frm.addEventListener("reset", () => {
    window.location.reload()
})