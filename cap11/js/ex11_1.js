const frm = document.querySelector("form")
const respLista = document.querySelector("pre")
const respCavalo = document.querySelector("#outCavalo")

//nome dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]

//vetor que irá armazenar um objeto aposta (com nº cavalo e valor da aposta)
const apostas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    const cavalo = Number(frm.inCavalo.value)
    const valor = Number(frm.inAposta.value)

    //adiciona ao vetor objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor})
    //variável para exibir a lista de apostas realizadas
    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`

    //percorre o vetor e concatena em lista das apostas
    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista += `- R$: ${aposta.valor.toFixed(2)}\n`
    }

    respLista.innerText = lista //exibe a lista das apostas
    frm.reset()
    frm.inCavalo.focus()
})

const obterCavalo = (num) => {
    const posicao = num - 1 //posição no vetor, subtrai 1, pois inicia em 0
    return CAVALOS[posicao]

}

frm.inCavalo.addEventListener("blur", () => {
    if (frm.inCavalo.value == "") {
        respCavalo = ""
        return
    }

    const numCavalo = Number(frm.inCavalo.value)

    if(!validarCavalo(numCavalo)) {
        alert("Nº do cavalo inválido")
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo)
    const contaNum = contarApostas(numCavalo)
    const total = totalizarApostas(numCavalo)

    respCavalo.textContent = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`
})

const validarCavalo = (num) => {
    return num >= 1 && num <= CAVALOS.length    
}

const contarApostas = (num) => {
    let contador = 0
    //percorre o vetor apostas
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            contador++
        }
    }

    return contador
}

const totalizarApostas = (num) => {
    let total = 0
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            total += aposta.valor
        }
    }

    return total
}

//Quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
frm.addEventListener("focus", () => {
    frm.inCavalo.value = ""
    respCavalo.textContent = ""
})

