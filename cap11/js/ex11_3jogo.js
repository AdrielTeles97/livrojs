const frm = document.querySelector("form")
const respPalavra = document.querySelector("#outPalavra")
const respErros = document.querySelector("#outErros")
const respDica = document.querySelector("#outDicas")
const respChances = document.querySelector("#outChances")
const respMensagemFinal = document.querySelector("#outMensagemFinal")
const imgStatus = document.querySelector("img")

let palavraSorteada //declara variáveis globais
let dicaSorteada

window.addEventListener("load", () => {
    //se não há palavras cadastradas
    if (!localStorage.getItem("jogoPalavra")) {
        alert("Cadastre palavras para jogar")
        frm.inLetra.disabled = true
        frm.btJogar.disabled = true
        frm.btVerDica.disabled = true
    }

    //obtém o conteudo do localStorage e separa em elementos de vetor
    const palavras = localStorage.getItem("jogoPalavra").split(";")
    const dicas = localStorage.getItem("jogoDica").split(";")

    const tam = palavras.length //número de palavras cadastradas

    //gera um número entre 0 e tam - 1 (pois arredonda para baixo)
    const numAleatorio = Math.floor(Math.random() * tam)

    //obtém palavra (em letras maiúsculas) e dica na posição do nº aleatório gerado
    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio]
    let novaPalavra = "" //para montar a palavra exibida (com letra inicial e "_")

    //for para exibir a letra Inicial e as demais ocorrências desta letra na palavra
    for (const letra of palavraSorteada) {
        // se igual a letra inicial, acrescenta está letra na exibição
        if (letra === palavraSorteada.charAt(0)) {
            novaPalavra += palavraSorteada.charAt(0)
        } else {
            novaPalavra += "_" // senão, acrescenta "_"
        }
    }

    respPalavra.textContent = novaPalavra //exibe a novaPalavra
})

frm.btVerDica.addEventListener("click", () => {
    //verifica se o jogador já clicou anteriormente no botão
    if (respErros.textContent.includes("*")) {
        alert("Você já solicitou a dica...")
        frm.inLetra.focus()
        return
    }

    respDica.textContent = " * " + dicaSorteada //exibe a dica
    respErros.textContent += "*" //acrescenta "*" nos erros

    const chances = Number(respChances.textContent) - 1 //diminui 1 em chances
    respChances.textContent = chances //mostra o número de chances

    trocarStatus(chances) //troca a imagem

    verificarFim() // verifica se atingiu o limite de chances

    frm.inLetra.focus() // joga o foco em inLetra
})