const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    //chama a função que verifica se o peso já foi apostado
    if(verApostaExiste(peso)){
        alert("Alguém já apostou esse peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if(localStorage.getItem("melanciaNome")) {
        //obtem o conteúdo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome) //salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome) // salva os dados sem ";"
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas() //chama função mostrar apostas já salvas
    frm.reset()
    frm.inNome.focus()
})

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";")
        //o peso deve ser convertido em string, pois o vetor contém strings

        return pesos.includes(peso.toString())
    } else {
        return false
    }
}

const mostrarApostas = () => {
    //se não há apostas armazenadas em localStorage
    if(!localStorage.getItem("melanciaNome")){
        //limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
        respLista.innerText = ""
        return
    }

    //obtém o conteúdo das variáveis salvas no localstorage, separando-as
    // em elementos de vetor a a cada ocorrência do ";"
    const nome = localStorage.getItem("melanciaNome").split(";")
    const peso = localStorage.getItem("melanciaPeso").split(";")

    let linhas = "" // irá acumular as linhas a serem exibidas

    //repetição para percorrer todos os elementos do vetor
    for (let i = 0; i < nome.length; i++) {
        linhas += nome[i] + "-" + peso[i] + "gr \n" 
    }

    //exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}

//chama a função quando a página é carregada
window.addEventListener("load", mostrarApostas)


frm.btVencedor.addEventListener("click", () => {
    console.log("teste");
    
    // se não há apostas armazenadas em Localstorage
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas")
        return
    }

    //solicita o peso correto da melância
    const pesoCorreto = Number(prompt("Qual o peso correto da melância ?"))

    // se não informou, retorna
    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    //obtém os dados de localstorage, separando em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for (let i = 1; i <= nomes.length; i++) {
        //calcula a diferença de peso do "vencedor" e da aposta aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
        // se a diferença da aposta atual no for for menor que a aposta do vencedor
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }

    //monta a mensagem
    let mensage = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensage += "\n-----------------------------------------------"
    mensage += "\n Vencedor: " + vencedorNome
    mensage += "\nAposta: " + vencedorPeso + "gr"
    alert(mensage)
})

// função para limpar apostas
frm.btLimpar.addEventListener("click", () => {
    //solicita confirmação para exluir apostas
    if (confirm("confirma exclusão das apostas ?")) {
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
})